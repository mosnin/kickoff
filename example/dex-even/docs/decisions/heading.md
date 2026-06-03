# The Heading — Even

> The one thing to push right now. Surfaced first by the Ratchet each session.
> Volatile — update on every RECORD. Method: `framework/09-the-heading.md`.

**Binding constraint right now:** **bidder bootstrap — can we guarantee ≥2
competing bidders per block?** Proof 0001 settled the mechanism (≥2 bidders →
74–99% of LVR returned to LPs) but showed a **monopoly returns 0%**. So the risk
is no longer "does the auction work" — it's "will real searchers show up and
compete." This is now the bottleneck; everything waits on it.

**Next tasks** *(Priority = Alignment × Leverage × InfoValue ÷ Cost)*

| # | Task | Lev | Info | Cost | why it's next |
|---|------|-----|------|------|---------------|
| ① | **Real-data ETH/USDC backtest** — replace the GBM toy; fix the fee/LVR accounting; answer F2 (is LVR big enough?) | H | H | M | unblocks F2 *and* upgrades F1 toward OBSERVED; the toy model undercounted |
| ② | **Bidder-bootstrap design** — how to guarantee ≥2 bidders (subsidy? permissionless searcher incentives?) | H | H | M | the new binding constraint; N=1 → 0% |
| ③ | Oracle-bounded price design (kill F3 sandwiching) | M | M | M | still downstream |

**Riskiest assumption under test now:** *"On real ETH/USDC flow, LVR is a
meaningful fraction of LP fees (≥ ~comparable), so there's enough to redistribute."*
The toy sim could not answer this (its magnitude model was inconsistent). Run the
real backtest before trusting any LVR figure.

**WIP on the critical path: 1.** Finish ① (real backtest) before ② or ③.

<!-- DONE this cycle: F1 auction mechanism TESTED (Proof 0001). Constraint moved
     from "mechanism" to "bidder competition + real LVR magnitude". -->
