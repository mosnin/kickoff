# Gate Card 0001 — "Even": auction the arbitrage, pay it back, make it visible

Date: 2026-06-03 · Verdict: **SHIP → to the Altar** · Led by: vision

> Produced by running the Ritual on the brief "a new type of crypto DEX." Every
> rung is honest: nothing here has touched reality, so nothing is above REASONED.

## The decision

Build a DEX where the right to trade against each pool, each block, is sold in a
**sealed-bid auction**. The winner pays **rent** to the pool; that rent (the
LVR/MEV bots currently extract for free) is returned as **LP yield** and as
**guaranteed price improvement to the next trader** — and the funding bid is shown
to the user. Reject the cliché DEXs (low-fee AMM, intent/solver layer, aggregator)
that optimize the surface; fix the structural LP bleed (LVR) instead.

## The gates

| Gate | Owner | Verdict | Rung | Evidence |
|---|---|---|---|---|
| **Desirable** | vision · human | PASS | REASONED | LVR ≈ (σ²/8)·V is a real, quantified bleed; "get the edge back, visibly" is a sharp non-cliché wedge |
| ↳ 5-second gate | vision | PASS | REASONED | "+0.31%, funded by a $4,200 bot bid" is storyboarded, not yet shown to a person |
| **Feasible** | engineer | PASS | REASONED | Auction-managed AMMs exist in research/sims (am-AMM); not yet built or run by us |
| **Deliverable** | producer | PASS | REASONED | One auction mechanism reused across pools; must clear within block time |
| **Viable** | banker | PASS | REASONED | Revenue = protocol cut of rent ∝ σ²·TVL·volume; two-sided bidder moat; real capture unproven |

## The synthesis

- **Led by:** vision (the soul: return the edge, make it visible).
- **Tension:** vision wants the transparency/consumer soul; the banker notes the
  biggest revenue is institutional LVR-recapture vaults (a less humane product).
  Held on purpose, not averaged.
- **Tie-break:** deferred to the founder (Founder Call — taste fork A/B/C).

## Verdict & debt

- **Verdict:** **SHIP → to the Altar.** Desirable and genuinely novel; not KILL.
- **Verification debt:** *all five gates are only REASONED.* Nothing is proven.
- **Owed to reality (handed to the founder):**
  - **F1 (the binding constraint):** auctions need ≥2 competitive bidders or rent
    → 0 and Even is a worse Uniswap. Prove via backtest + agent sim.
  - **F2:** in low-volatility / low-volume pairs LVR is small → no edge. Scope to
    volatile, high-flow pairs.
  - **F3:** the block winner could sandwich the trader unless price is bounded to a
    reference oracle and the spread capped.
  - **Taste fork:** (A) transparency-first consumer *(proposed)* · (B) institutional
    vaults · (C) normie-simple. Founder chooses.

## Next move (to the Altar)

Falsifiable claim to prove first: *"On historical ETH/USDC flow, the auction
returns ≥50% of measured LVR to LPs when N≥2 bidders compete."* Smallest proof: a
backtest + agent-based auction simulation. If it fails → FALSIFIED → back to the
Ritual.
