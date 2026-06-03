# Decision Ledger — Even

> The retained memory the Ratchet re-injects each session. Kept tight on purpose.
> Build on the patterns, pay the open debts, never re-open a kill.

---

## Patterns that keep passing (promote to defaults)

- **Auction the leak, don't defend against it.** When value is being extracted
  (LVR, MEV), the strongest move is to *sell the extraction right and return the
  proceeds*, not to build defenses. *(meta-pattern from Card 0001)*
- **Make hidden value flows visible.** The differentiator is showing the user the
  edge they got back — transparency is the product, not a feature.
- **A clean toy result can hide a broken sub-model.** Proof 0001 nailed the
  auction ratio but its LVR-magnitude accounting was 6× off the analytic. Trust
  ratios from a toy; never trust its absolute magnitudes — go to real data.

## Proven (rung climbed — build on these)

- **F1 auction mechanism · TESTED (model).** ≥2 bidders return 74–99% of LVR;
  monopoly returns 0%. *(Proof 0001)* The mechanism is not the risk; bidder
  competition is.

## Open debts (owed to reality)

| Debt | Gate / Card | Evidence owed | Owner |
|------|-------------|---------------|-------|
| **Bidder bootstrap** guarantee ≥2 competing bidders (N=1 → 0%) | Card 0001 · all | design + GTM: subsidy / searcher incentives | eng+founder |
| **F2** Is LVR large enough on real flow? (toy undercounted) | Card 0001 · Viable | real ETH/USDC backtest with correct fee/LVR accounting | eng |
| **F1 → OBSERVED** real-data + live confirmation | Card 0001 · all | backtest, then testnet pool with real searchers | eng+founder |
| **F3** Block winner can't sandwich the trader | Card 0001 · Desirable | oracle-bounded price, cap spread; adversarial test | eng |
| **Taste fork** A vs B vs C (which future) | Card 0001 | Founder decision | founder |
| 5-second spark is real | Card 0001 · Desirable | Testnet pool, watch 5 real traders' first swap | founder |

## Kills & falsifieds (do not re-open)

| What | Verdict | Why (one line) | Card |
|------|---------|----------------|------|
| Dynamic-fee AMM | KILLED | mitigation, not a cure for LVR — the mean | 0001 |
| Sealed-bid-to-solvers DEX | KILLED | already exists (UniswapX / CoW) | 0001 |
| Cross-chain aggregator | KILLED | competes on surface, ignores the structural bleed | 0001 |

---

<!-- Read in full each session by .claude/hooks/ratchet.sh. Prune as you promote. -->
