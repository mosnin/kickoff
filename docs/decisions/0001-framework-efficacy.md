# Gate Card 0001 — The Ritual produces materially better product decisions than the same model without it

Date: 2026-06-09 · Verdict: **SHIP** (keep the framework; keep paying its cost on high-stakes work) · Led by: the engineer

> The framework's own central claim, made falsifiable and run (see
> `framework/08-proving-the-framework.md`). The subject of this card *is the
> framework itself.* Rungs: ASSERTED (0) · REASONED (1) · TESTED (2) · OBSERVED (3).

**Claim (falsifiable):** *Given a real brief, the Ritual's output is a materially
better product decision than the same model, same effort, without it.*

## The gates

| Gate | Owner | Verdict | Rung | Evidence (what actually backs this) |
|------|-------|---------|------|-------------------------------------|
| **Desirable** | vision · human | PASS | REASONED | A decision discipline that demonstrably improves decisions deserves to exist; the whole repo is the bet. Not yet judged desirable by real target users. |
| ↳ 5-second gate | vision | PASS | TESTED | The landing page's first screen reads as "a founder's instrument," not a prompt pack — confirmed in informal review, not yet watched in real first-runs. |
| **Feasible** | engineer | PASS | TESTED | **5 paired briefs**, framework vs. baseline, **same model and effort budget**, scored on a **fixed rubric** in an **isolated Claude environment**. The framework won each trial; the margin grew with difficulty — up to **+28%** decision quality on the hardest briefs, **+37%** on decision-readiness. |
| **Deliverable** | producer | PASS | REASONED | The process reproduces by construction — it's pure instruction with fixed steps, no per-run variance in the method. Not yet reproduced across many operators or models. |
| **Viable** | banker | PASS | REASONED | Cost is extra tokens/time per decision; right-sizing spends it only on high-stakes calls and skips trivial work. No dollar model yet. |

## The synthesis

- **Led by:** the engineer (this is a proof of a claim, Altar-style).
- **Tension:** an *informal* n=5 trial vs. a *rigorous, fully-blind* benchmark.
- **Tie-break:** converged — ship the honest **TESTED** rung now, keep climbing toward OBSERVED rather than overclaim.

## Red-team (one adversarial pass)

- **Most-inflated rung:** Feasible at TESTED. The trials were informal, n=5, and
  not fully blinded. A skeptic could push it to "REASONED-plus." Held at TESTED
  because it *ran* on real briefs against a fixed rubric — but the inflation risk
  is named, not hidden.
- **Strongest case for KILL:** *process-cosplay* — the model narrates gates while
  the underlying answer is the same mean. Mitigated because the rubric scored the
  stripped artifact, not the narration — but full blinding is still owed.
- **What we missed:** one isolated Claude environment is a single judge family;
  real target users have not judged live product decisions yet.

## Verdict & debt

- **Verdict:** **SHIP** — the framework earns its weight on high-stakes decisions; keep it, keep right-sizing it.
- **Verification debt:** Feasible at TESTED, Desirable/Deliverable/Viable at REASONED.
- **Owed to reality (handed to the founder):** OBSERVED needs **(a)** a larger,
  **fully-blind** A/B across more briefs, and **(b)** real target users judging
  *live* product decisions. Until then the public claim stays pinned to TESTED and
  says so. Never inflate it.
