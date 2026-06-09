# bench/ — the framework's self-test harness

> The Ritual demands every load-bearing claim be dragged to OBSERVED. This folder
> is where the Ritual does that to *itself*. It makes the blind A/B from
> `framework/08-proving-the-framework.md` **repeatable** — same rubric, same briefs,
> same protocol — so "does it work?" is answered by evidence, not by the README.

Run it with **`/prove-it`** (`.claude/commands/prove-it.md`), or by hand below.

## The claim under test

> *Given a real brief, the Ritual's output is a materially better product decision
> than the same model, same effort, without it.*

Falsifiable threshold (pick yours): *blind judges prefer the Ritual's output over
baseline on ≥⅔ of briefs, and never call it worse on taste.* If it fails, the
framework isn't earning its weight on that class of work — and you should know it.

## The three conditions (isolation is mandatory)

Each runs in its **own isolated context** and never sees the others:

| | Condition | What it gets |
|---|---|---|
| **A** | **Baseline** | the brief to a clean model — no Ritual, no gates |
| **B** | **Full Ritual** | the brief through the whole arc (`integrations/system-prompt.md`) |
| **C** | **Gates-only** *(ablation)* | the four gates + evidence ladder, **without** the five named methods/personas |

**Why C exists.** It's the honest test of whether the *personas* change the decision
or just the voice. If **C ≈ B**, the methods are theater for the model (fine for
humans, but cut them from the operative core); if **B > C**, the personas earn their
place — with evidence, not assertion. The framework applying "best part is no part"
to itself.

## The protocol

1. **Pick briefs** from `briefs.md` — real decisions, a mix of **easy and hard**.
2. **Run A / B / C** isolated and in parallel (one sub-agent each).
3. **Strip the tells** from B and C — remove Gate Card scaffolding, method names,
   process narration. Judge the decision, not the paperwork.
4. **Blind-judge** with a fresh, isolated judge against `rubric.md`. Shuffle and
   relabel so the judge can't tell which is which. *(Best version, owed to reality:
   a real target user as judge.)*
5. **Record** every run in `results.md` (from `results-template.md`), then roll the
   aggregate into `docs/decisions/0001-framework-efficacy.md`.

## What each run measures

- **Win rate** (B vs A) — the headline claim.
- **Easy-vs-hard split** — the framework predicts ~tie on easy, growing lead on
  hard. *This is also the ceremony-tax test:* if B *loses* on easy briefs, the
  ceremony is taxing work it isn't for, and right-sizing isn't biting.
- **Per-dimension deltas** (from the rubric) — where it pulls ahead, where it doesn't.
- **Persona ablation** (B vs C) — do the named methods change the decision?

## Honest status

As of the last RECORD, the efficacy claim sits at **TESTED on n=5 informal trials**
(`docs/decisions/0001-framework-efficacy.md`). This harness exists to climb it: a
larger, fully-blind run → cited TESTED; real users judging live decisions → OBSERVED.
Until then, the public number stays pinned to its true rung and says so.
