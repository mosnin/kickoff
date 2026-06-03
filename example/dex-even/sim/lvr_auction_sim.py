#!/usr/bin/env python3
"""
F1 — the smallest proof for the "Even" Gate Card (the Altar's experiment).

Falsifiable claim under test:
  "A per-block auction returns >=50% of measured LVR to LPs while >=2 bidders
   compete."

This is a SIMULATION against a model (geometric Brownian motion price), not a
backtest against real ETH/USDC history. So the honest rung it can reach is
TESTED-against-a-model, NOT OBSERVED. A real-data backtest and a live testnet
pool are still owed to reality.

What it does:
  1. Simulate a reference price as GBM; an AMM (x*y=k) pool tracks it only when
     arbitrage corrects it each block. Measure realized LVR (the value the
     arbitrageur extracts from passive LPs).
  2. Auction the per-block arbitrage right among N bidders with noisy private
     value estimates (second-price sealed bid). Measure the rent paid to LPs as a
     fraction of true LVR, swept over N.
  3. Report the N at which the claim (>=50% returned) holds.

No external dependencies (pure stdlib). Deterministic via seed.
"""
import math
import random
import statistics

SEED = 7
random.seed(SEED)

# ---- market model -------------------------------------------------------------
SIGMA_ANNUAL = 0.8        # ETH-ish annualized vol (high-vol regime, where Even should bite)
BLOCKS_PER_YEAR = 365 * 24 * 60 * 60 / 12   # ~12s blocks
SIGMA_BLOCK = SIGMA_ANNUAL / math.sqrt(BLOCKS_PER_YEAR)
POOL_VALUE = 1_000_000.0  # $ of liquidity
N_BLOCKS = 200_000
FEE = 0.0005              # 5 bps swap fee (Uniswap-ish); arb pays this

def simulate_lvr():
    """Realized LVR per block for a CFMM tracking a GBM reference (Milionis et al.).
    Instantaneous LVR rate for a 50/50 pool ~ (sigma^2 / 8) * V per unit time.
    Per block we realize the arb profit = |price move| capture minus the fee."""
    price = 1.0
    total_lvr = 0.0
    per_block = []
    for _ in range(N_BLOCKS):
        # GBM step
        z = random.gauss(0, 1)
        ret = SIGMA_BLOCK * z - 0.5 * SIGMA_BLOCK**2
        price *= math.exp(ret)
        # arbitrageur realigns the pool; LVR ~ (1/2) * V * (dp/p)^2 for a v2 pool,
        # net of the fee they must pay to trade.
        move = abs(ret)
        gross = 0.5 * POOL_VALUE * (move**2)
        # the arb only trades if profitable after fee on the traded notional
        traded_notional = POOL_VALUE * move
        net = gross - FEE * traded_notional
        lvr = max(net, 0.0)
        total_lvr += lvr
        per_block.append(lvr)
    # analytic check: (sigma^2/8)*V per block, summed
    analytic = (SIGMA_BLOCK**2 / 8.0) * POOL_VALUE * N_BLOCKS
    return total_lvr, analytic, per_block

def auction_capture(per_block_lvr, n_bidders, signal_noise=0.35, trials_cap=20000):
    """Second-price sealed-bid auction for the per-block arb right.
    Each bidder sees a noisy estimate of the block's true LVR; bids ~ their
    estimate (truthful in 2nd-price). Rent to LPs = 2nd-highest bid (what the
    winner pays). Returns mean rent / mean true LVR."""
    sample = per_block_lvr[:trials_cap]
    rent_sum, lvr_sum = 0.0, 0.0
    for true_lvr in sample:
        if true_lvr <= 0:
            continue
        bids = []
        for _ in range(n_bidders):
            est = true_lvr * max(0.0, random.gauss(1.0, signal_noise))
            bids.append(est)
        bids.sort(reverse=True)
        rent = bids[1] if n_bidders >= 2 else 0.0   # 2nd price; monopoly pays ~0
        rent = min(rent, true_lvr)                   # winner won't pay above value
        rent_sum += rent
        lvr_sum += true_lvr
    return (rent_sum / lvr_sum) if lvr_sum > 0 else 0.0

def main():
    total_lvr, analytic, per_block = simulate_lvr()
    # express LVR as an annualized % of pool value
    years = N_BLOCKS / BLOCKS_PER_YEAR
    lvr_apr = total_lvr / POOL_VALUE / years
    print("="*64)
    print("F1 PROOF — LVR + auction-capture simulation (model, not real data)")
    print("="*64)
    print(f"vol (annual) = {SIGMA_ANNUAL:.0%} | pool = ${POOL_VALUE:,.0f} | blocks = {N_BLOCKS:,}")
    print(f"measured LVR  = ${total_lvr:,.0f}  ({lvr_apr:.1%} APR of pool value)")
    print(f"analytic σ²/8 = ${analytic:,.0f}   (sanity check — should be close)")
    print(f"ratio meas/analytic = {total_lvr/analytic:.2f}")
    print("-"*64)
    print("Auction capture (% of true LVR returned to LPs) vs # bidders:")
    results = {}
    for n in (1, 2, 3, 5, 8):
        cap = auction_capture(per_block, n)
        results[n] = cap
        bar = "#" * int(cap * 40)
        flag = "  <-- claim (>=50%) holds" if cap >= 0.50 else ""
        print(f"   N={n:>2}: {cap:5.1%}  {bar}{flag}")
    print("-"*64)
    n_ok = [n for n, c in results.items() if c >= 0.50 and n >= 2]
    claim = bool(n_ok)
    print(f"CLAIM ' >=50% returned with >=2 bidders ': {'SUPPORTED' if claim else 'NOT SUPPORTED'}")
    if claim:
        print(f"   holds for N in {n_ok}; monopoly (N=1) returns {results[1]:.1%} — the F1 risk is real")
    print(f"VERDICT: F1 climbs REASONED -> TESTED (against a GBM model).")
    print(f"   OWED TO REALITY: real ETH/USDC backtest, then a live testnet pool.")
    print("="*64)

if __name__ == "__main__":
    main()
