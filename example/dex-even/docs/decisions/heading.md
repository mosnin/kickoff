# The Heading — Even

> The one thing to push right now. Surfaced first by the Ratchet each session.
> Volatile — update on every RECORD. Method: `framework/09-the-heading.md`.

**Binding constraint right now:** **F1 — do per-block auctions clear with ≥2
competitive bidders?** If not, rent → 0 and Even is just a slower Uniswap. Every
gate on Card 0001 waits on this; nothing else (UI, contracts, chains) matters
until it's known. This is the bottleneck — aim everything here.

**Next tasks** *(Priority = Alignment × Leverage × InfoValue ÷ Cost)*

| # | Task | Lev | Info | Cost | why it's next |
|---|------|-----|------|------|---------------|
| ① | **LVR backtest** — replay historical ETH/USDC flow; measure LVR captured & % returnable to LPs vs Uniswap v3 | H | H | **L** | cheapest experiment that could falsify the whole idea |
| ② | **Auction-competition sim** — agent-based; find N where rent collapses | H | H | M | proves F1 directly; only run if ① clears |
| ③ | Oracle-bounded price design (kill F3 sandwiching) | M | M | M | needed for desirability, but downstream of F1 |

**Riskiest assumption under test now:** *"On real ETH/USDC flow, an auction can
return ≥50% of measured LVR to LPs when ≥2 bidders compete."* If this is false,
**FALSIFIED** → back to the Ritual. Run it before building anything.

**WIP on the critical path: 1.** Finish ① (backtest) before touching ② or ③.

<!-- Founder Call: confirm Alignment true-north = transparency-first (taste fork A)
     before this ranking is trusted. -->
