---
description: Run the framework's own blind A/B self-test on a real brief — baseline vs. Ritual vs. (optionally) gates-only — and record the result
argument-hint: [a real product brief — or "batch" to run the whole bench/briefs.md set]
---

Run the **self-test** on: $ARGUMENTS

The framework's central claim — *running a real decision through the Ritual beats
the same model without it* — is only worth its cost if it survives a blind A/B.
This command runs one, repeatably, and records it. Full protocol: `bench/README.md`
and `framework/08-proving-the-framework.md`. **Isolation is the point** — the
conditions must not see each other.

## 1 · Pick the brief(s)
One real brief from $ARGUMENTS, or `batch` → run every brief in `bench/briefs.md`.
Use *real* product decisions, not toys. Include **easy and hard** briefs — the
easy ones test the ceremony tax (the framework should roughly tie on easy and pull
ahead on hard, never lose).

## 2 · Produce the conditions — each in its OWN isolated sub-agent
For each brief, spawn these as **parallel, isolated** sub-agents (no shared context,
no sight of each other):
- **A — Baseline:** the brief to a clean model. No Ritual, no gates, no framework.
- **B — Ritual:** the brief run through the full arc (frame → gates → Gate Card →
  red-team), via `integrations/system-prompt.md`.
- **C — Gates-only (ablation, optional):** the gates + evidence ladder **without**
  the five named methods/personas. This is the test of whether the personas change
  the *decision* or only the voice (`bench/README.md` §ablation).

Each returns its final decision + artifact only.

## 3 · Strip the tells
Remove from B and C every process tell — Gate Card scaffolding, method names,
"DESIRABLE/FEASIBLE…" headers, any narration. The judge must score the *decision
and the artifact*, not the paperwork. (Process narration is not the product.)

## 4 · Blind-judge against the fixed rubric
Spawn a **fresh, isolated Judge** that has never seen which is which. Shuffle the
stripped outputs, label them randomly, hand it `bench/rubric.md`, and have it score
each on every rubric dimension and pick the best — *and say why*. Ideal upgrade
(owed to reality): a **real target user** as judge, not a model.

## 5 · Record it — feeds Gate Card 0001
Append the run to `bench/results.md` (from `bench/results-template.md`):
per-brief winner, per-dimension deltas, easy-vs-hard split, and the gates-only vs.
full-Ritual gap. Then roll the aggregate into `docs/decisions/0001-framework-efficacy.md`:
- B reliably wins on hard briefs → the efficacy claim climbs toward TESTED/OBSERVED
  with **cited** numbers.
- B doesn't beat A on some class → **that's a real finding** — scope the Ritual to
  where it pays (`framework/08`). Record it; don't bury it.
- C ≈ B → the personas aren't changing the decision; flag it as a cut candidate
  (the framework's own "best part is no part").

## 6 · One voice
Report: the win rate, the easy/hard split, the persona-ablation result, and the
honest rung the claim now sits at — with citations. No spin. If it loses, say so;
a self-test that can't fail isn't one.
