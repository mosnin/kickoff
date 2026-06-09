# Gate Card 0002 — Harden the closed loop: make the framework's "vibes" into mechanisms

Date: 2026-06-09 · Verdict: **SHIP** · Led by: the engineer

> An audit found the framework strongest where it's mechanical (the Ratchet, the
> isolated Simulation, citation) and weakest where it's vibes (self-grading gates,
> personas-as-distinct-voices, asserted right-sizing). This decision pushes five
> vibes toward mechanisms. Rungs: ASSERTED · REASONED · TESTED · OBSERVED.

**What shipped:** (1) **cite-or-downgrade** — TESTED/OBSERVED rungs must cite an
artifact or fall to REASONED; (2) the **isolated Adversary** (`/adversary`) replaces
the self-red-team as default; (3) a repeatable **self-test harness** (`bench/` +
`/prove-it`) with a fixed rubric and brief set; (4) a **persona ablation** (gates-only
vs full Ritual) baked into the harness; (5) **Founder-Call ranking** to stop fatigue;
(6) a one-line **right-size log** so the ceremony tax is measurable.

## The gates

| Gate | Owner | Verdict | Rung | Evidence + citation |
|------|-------|---------|------|----------------------|
| **Desirable** | vision · human | PASS | REASONED | Each change targets a named weakness from the audit; a system about evidence honesty *should* enforce it mechanically, not on faith. Not yet shown to change outcomes. |
| ↳ 5-second gate | vision | PASS | REASONED | The framework still reads as one coherent instrument, not heavier — but unwatched. |
| **Feasible** | engineer | PASS | TESTED | The mechanisms are pure-instruction + existing harness primitives. `/adversary`, `/prove-it` registered as commands; cite-or-downgrade folded into `framework/05`, the template, and `system-prompt.md`; Ratchet still runs clean. *Cite: this commit; `ratchet.sh` executes; 0 broken links.* |
| **Deliverable** | producer | PASS | REASONED | Single-source-of-truth respected — each idea lives in one canonical doc and is referenced, not duplicated. Not yet exercised across many real cycles. |
| **Viable** | banker | PASS | REASONED | Cost is a little more instruction + an optional extra agent pass on significant cards only (right-sized away elsewhere). Net cheaper than shipping the unproven. |

## The synthesis

- **Led by:** the engineer (turning norms into checks).
- **Tension:** added apparatus vs. "best part is no part." Held by making each
  mechanism *opt-in to significant work* and right-sized away from small work.
- **Tie-break:** converged — the audit named real holes; closing them mechanically beats more prose telling the model to behave.

## Red-team (honest: self-pass — could not isolate this turn)

- **Most-inflated rung:** Desirable at REASONED. The real claim — *these changes make
  outputs better* — is **unproven**; they could add ceremony without improving
  decisions. That's exactly what `bench/` now exists to test. Did **not** inflate it
  to TESTED.
- **Strongest case for KILL:** "you're adding machinery to a framework whose whole
  pitch is "cut."" Survived because each change replaces faith with a check rather
  than adding a feature — but the risk of bloat is real and noted.
- **What we missed:** whether `/adversary` and `/prove-it` actually run end-to-end
  with sub-agents in a live session (untested here); whether the ablation will
  embarrass the personas.

## Verdict & debt

- **Verdict:** **SHIP** — the mechanisms are sound and honest; they harden the
  loop's weakest seam.
- **Verification debt:** Desirable/Deliverable at REASONED. These improvements are
  *claimed*, not *measured*.
- **Owed to reality:** run `/prove-it` to show (a) the Adversary catches inflated
  rungs the self-pass misses, and (b) cite-or-downgrade changes what gets stamped —
  and run the persona ablation. Until then, "these make it better" stays REASONED.
