---
description: Attack a Gate Card from a fresh, isolated context before it ships — the external check the self-pass can't be
argument-hint: [the decision / Gate Card to attack — defaults to the one just stamped]
---

Run the **Adversary** against: $ARGUMENTS

A model grading its own work mostly passes its own gates. This command replaces the
self-red-team with a **fresh, isolated mind** whose only job is to *break the
decision* — the nearest thing to the external check the closed loop lacks (the
founder is the real one). Full system: `framework/05-the-gate-card.md`.

## 1 · Strip the card
Take the decision and its Gate Card and **remove the justification** — the
reasoning narrative, the method names, the process story. The Adversary must judge
the *decision and its cited evidence*, not the persuasion around it.

## 2 · Spawn the Adversary — isolated
Spawn **one sub-agent in a fresh context** (no shared history, no sight of your
reasoning). Give it only: the stripped decision + the Gate Card's gates, rungs, and
citations. Its instruction:

> You are the **Adversary**. You did not build this and you owe it nothing. Attack
> it in good faith and report, specifically:
> 1. **Inflated / uncitable rungs** — every gate at TESTED/OBSERVED whose citation
>    is missing, weak, or wouldn't survive a skeptic actually checking it. Name the
>    rung it should drop to.
> 2. **The strongest case for KILL** — argue, as hard as you honestly can, that this
>    should not exist. If it's even half-convincing, SHIP is not earned.
> 3. **What was missed** — the worst-day user, the failure mode, the cheaper thing
>    that makes this unnecessary, the assumption nobody tested.
> Read-only. Do not edit files. Return your attack as your final message.

*(No sub-agents available? Run this in a separate fresh conversation — fresh is the
isolation. The self-pass is the weak fallback, not this.)*

## 3 · Revise the card with what it found
Apply the hits honestly: **downgrade** the rungs it knocked down (and add the gap to
*owed to reality*), strengthen or cut what it broke, and if the KILL case held —
**KILL it, and celebrate that** (`framework/05`). Then record, on the card:

> **Adversary:** isolated · downgraded \<which rungs> · KILL case \<held / didn't> · \<what changed>

## 4 · One voice to the founder
Report briefly: what the Adversary attacked, what survived, what changed, and — if
it's now a Founder Call — surface it. Do not narrate the back-and-forth; deliver the
hardened decision.
