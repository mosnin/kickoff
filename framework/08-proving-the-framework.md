# Framework 08 — Proving the Framework (the self-test)

> The Ritual demands that every load-bearing claim be made falsifiable and dragged
> to OBSERVED. Apply that to the Ritual's *own* central claim — or it is, by its
> own Altar, a MIRAGE: desirable, unproven.

## The claim, made falsifiable

> *Running a real decision through the Ritual produces a materially better product
> decision than the same model without it.*

Falsifiable form, pick the threshold that matters to you:

> *Given a real brief, blind judges prefer the Ritual's output over the baseline's
> at least 2 out of 3 times (and never call it worse on taste).*

If that fails, the framework is not earning its weight on that kind of work, and
you should know it.

## The test: a blind A/B (run it with the harness)

The apparatus is built and repeatable: **`bench/`** holds the fixed rubric, the
standing brief set, and the results template; **`/prove-it`** orchestrates a run.
Use them so "does it work?" is answered the same way every time. The protocol:

1. **Pick a real brief** — one of your actual product decisions, not a toy. The
   set in `bench/briefs.md` mixes **easy and hard** on purpose (see ceremony tax,
   below).
2. **Produce the conditions, each isolated.** **A:** baseline — the brief to a
   clean model, no Ritual. **B:** the brief run through the Ritual. **C
   (ablation):** the gates + evidence ladder **without** the five named methods —
   the test of whether the personas change the *decision* or only the voice. Same
   model, same effort, same brief; no condition sees another.
3. **Strip the tells.** Remove the Gate Card scaffolding, method names, and process
   narration from B and C — judge the *decision and the artifact*, not the
   paperwork. (Process narration is not the product; don't let it bias the judge.)
4. **Blind-judge** against `bench/rubric.md`. A judge who can't see which is which —
   ideally a real target user — scores each and picks the best, on taste and substance.
5. **Repeat and record.** Log every run in `bench/results.md`. One trial is an
   anecdote; a pattern is evidence.

## Two things the harness also measures (cheaply, for free)

- **The ceremony tax.** Run the Ritual on *easy* briefs too. The framework predicts
  it should roughly **tie** there and pull ahead on hard ones — if it *loses* on
  easy briefs, the ceremony is taxing work it isn't for, and right-sizing isn't
  biting. That's a finding, not a footnote.
- **The persona ablation (B vs C).** If gates-only (C) scores ≈ the full Ritual (B),
  the five named methods aren't changing the decision for the model — cut them from
  the operative core (the framework's own "best part is no part"). If B > C, the
  personas earn their place *with evidence.*

## Record it as the Ritual's own Gate Card

Stamp the result like any other decision (`templates/gate-card.md`), in
`docs/decisions/`:

- **Desirable / Feasible / …** as usual, but the *subject is the framework itself*.
- **Evidence rung:** before the test, the efficacy claim sits at REASONED. After a
  real blind A/B, it earns TESTED — and OBSERVED once it's your live product
  decisions being judged by real users.
- **Verdict:** if B reliably wins → keep paying down the cost it adds. If it
  doesn't on some class of work → **that's a real finding**: scope the Ritual to
  where it pays, and stop running ceremony where it doesn't. A framework that
  refuses to test itself is running on faith; one that tests itself earns trust.

## What the test guards against

- **Process-cosplay:** the risk that the model writes a convincing *story* of
  divergence and gates while the underlying decision is the same mean answer.
  Blind judging of the stripped artifact is the only thing that catches it —
  because it asks whether the *output* changed, not whether the *narration* did.
- **Ceremony tax:** running the full apparatus on trivial work where it adds cost
  and no gain. The test tells you where the floor is.

## Done when

- The efficacy claim is written in falsifiable form with a threshold.
- At least one blind A/B on a real brief has been run via `bench/` / `/prove-it`
  and recorded — both in `bench/results.md` and as Gate Card 0001.
- Every published efficacy number traces to a recorded run (cite or downgrade).
- The ceremony tax and the persona ablation have been looked at, not just assumed.
- The Ritual's scope is set by evidence: used where it wins, trimmed where it
  doesn't.
