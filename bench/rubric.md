# bench/rubric.md — the fixed scoring rubric

> The judge scores each (stripped, blinded) output on every dimension below, 1–5,
> then picks an overall winner and says why. Same rubric every run — that's what
> makes results comparable across briefs and over time. Score the **decision and
> the artifact**, never the process narration (which is stripped before judging).

| # | Dimension | 1 (poor) | 5 (excellent) |
|---|-----------|----------|---------------|
| 1 | **Decision quality** | the obvious/mean answer; a feature, not a decision | a sharp, non-obvious call that reframes the problem |
| 2 | **Decision-readiness** | vague; a reader couldn't act on it | could be executed tomorrow; the next move is clear |
| 3 | **Evidence honesty** | confident claims with nothing behind them | claims are leveled to real proof; gaps named, not hidden |
| 4 | **Risk surfaced** | blind to failure modes and worst-day users | the real risks, the failure mode, the cheaper alternative are named |
| 5 | **Completeness** | misses a whole dimension (cost, delivery, the human) | covers desirable/feasible/deliverable/viable without bloat |
| 6 | **Originality / taste** | a competent autopilot answer | a distinctive answer with a point of view |
| 7 | **Conciseness** | padded; rigor-as-word-count | every line earns its place |

## Scoring procedure (the judge follows this exactly)

1. Read each output cold. Score all 7 dimensions, 1–5, for each.
2. Pick the **single overall winner** — and name the one reason it won.
3. Note any output that is **worse on taste** (dimension 6 ≤ 2) — the claim's
   threshold forbids the Ritual ever being *worse* on taste, so this is a flag.
4. Output a compact table: per-output dimension scores, the winner, the reason.

## Aggregation (across briefs)

- **Win rate** = share of briefs where condition B (Ritual) beat A (baseline).
- **Per-dimension delta** = mean(B) − mean(A), per dimension. (This is where the
  site's "+X%" figures must come from — cite this file's runs, nothing else.)
- **Easy-vs-hard** = the same, split by brief difficulty. Watch the easy slice for
  the **ceremony tax**: B should not *lose* on easy briefs.
- **Persona delta** = mean(B) − mean(C). Near zero ⇒ the personas don't change the
  decision.

> Numbers published anywhere (site, README, Gate Card 0001) must trace to a recorded
> run here. A figure with no run behind it is a faked rung — the one unforgivable act.
