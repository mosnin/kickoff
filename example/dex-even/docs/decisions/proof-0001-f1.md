# Proof 0001 — F1: does a per-block auction return LVR to LPs?

Date: 2026-06-03 · Discharges: Gate Card 0001 (F1, partial) · Verdict: **MIXED — see below**

> The Altar's first experiment for "Even." Code + run: `sim/lvr_auction_sim.py`.
> A simulation against a GBM model — **not** a real-data backtest. Honest rung
> ceiling: TESTED-against-a-model. OBSERVED is still owed to reality.

## The claim

*"A per-block auction returns ≥50% of measured LVR to LPs while ≥2 bidders
compete."* (And the implicit F2: *is LVR even large enough to matter?*)

## The experiment

Second-price sealed-bid auction for each block's arbitrage right; N bidders with
noisy private estimates of the block's LVR. Swept N ∈ {1,2,3,5,8} over 200k
simulated blocks at 80% annual vol. Pure stdlib, seeded, deterministic.

## What reality (the model) said

| N bidders | % of LVR returned to LPs |
|---|---|
| 1 (monopoly) | **0.0%** |
| 2 | **74.4%** |
| 3 | 90.7% |
| 5 | 98.0% |
| 8 | 99.8% |

## Verdict — split honestly

- **Auction mechanism (the core of F1): GROUNDED → TESTED.** With ≥2 bidders the
  claim holds decisively (≥74%); with a monopoly it returns *nothing*. This result
  is a **ratio**, so it's independent of the LVR-magnitude bug below. **The F1 risk
  is confirmed real: the whole product depends on guaranteeing ≥2 competing
  bidders.**
- **LVR magnitude (F2): NOT answered — and confidence *lowered*.** The sim's
  measured LVR ($1,020; 1.3% APR) disagrees with the analytic σ²/8 reference
  ($6,088) by ~6×. Cause: the per-block fee accounting (`FEE·V·move`) dominates the
  quadratic LVR term (`½·V·move²`) for small moves and zeroes most blocks. So the
  *magnitude* model is inconsistent and cannot be trusted. **F2 stays REASONED.**

## Rung change

- Gate Card 0001 · **F1 (auction competition):** REASONED → **TESTED (model)**.
- Gate Card 0001 · **F2 (LVR magnitude):** stays **REASONED** — this proof did not
  ground it (and surfaced that the toy model undercounts).

## Owed to reality (handed to the founder)

1. **Real-data backtest** on historical ETH/USDC (replaces the GBM model and the
   buggy fee accounting) — answers F2 properly and upgrades F1 toward OBSERVED.
2. **Bidder-bootstrap plan** — N=1 returns 0%, so "how do we guarantee ≥2 real
   bidders at launch?" is now the binding constraint. (Subsidize? Permissionless
   searcher incentives? This is a design + go-to-market question.)
3. Live testnet pool watched by real traders → OBSERVED.

## What it changes

The Ritual's vision survives — competition *does* return the value, strongly. But
the binding constraint **moves**: from *"can the mechanism return rent?"* (answered:
yes, with ≥2 bidders) to *"can we guarantee ≥2 bidders, and is LVR actually large
on real flow?"* The Heading re-points accordingly.
