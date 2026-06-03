# Framework 04 — The Development Loop

> Step 5 of the Ritual. The repeatable process that builds the product
> while keeping all five methods cohesive. This step never ends.

Foundation laid, methods installed, context wired. Now you build — but not the
way a cold assistant builds. Every cycle runs the full Ritual, so the product
stays revolutionary as it grows instead of decaying into a pile of features.

---

## The loop

```
        ┌──────────────────────────────────────────────────────┐
        ▼                                                      │
1. FRAME ─▶ 2. DESIGN ─▶ 3. ENGINEER ─▶ 4. PRODUCTIZE ─▶ 5. MONETIZE
   Jobs       Norman        Musk           Ford            the banker
   Norman     Jobs                                           │
        │                                                    ▼
        └──────── 8. SHIP ◀── 7. RECORD ◀── 6. SYNTHESIZE ──┘
                                              (the cohesion engine)
```

Run it for every meaningful unit of work — a feature, a flow, a decision. Small
units cycle fast; large ones may loop sub-steps. The discipline is that *no step
is skipped* on anything that matters.

---

## 1 · FRAME — is this worth doing? *(Jobs + Norman)*

Before any work, frame it as a problem worth solving.

- **Jobs:** Why does this deserve to exist? What's the insanely-great version?
  What would we *not* do? Is there a simpler thing that makes this unnecessary?
- **Norman:** Whose real problem is this, in what real context? What's the actual
  goal behind the request?
- **Output:** a one-paragraph framing — the problem, the person, the bar for
  great. If it can't pass Jobs's "should this exist," kill it here. Killing work
  early is the cheapest win there is.

---

## 2 · DESIGN — the smallest revolutionary slice *(Norman + Jobs)*

Design the experience before the implementation.

- **Norman:** Walk the task end to end. Map every gulf, every point of confusion
  or error. Design the unhappy paths (empty, error, slow, first-run) too.
- **Jobs:** Cut to the essence. What's the one thing this must do superbly?
  Remove everything else. Sweat the first five seconds and the defaults.
- **Run the taste moves** (`methods/the-visionary.md`): name and reject the
  obvious cliché, put up a few *genuinely different* directions (one of them the
  opposite or the 10× move), kill the first/mean idea, then cut to one with
  conviction — and name what you removed. Skip this and you ship the mean.
- **The five-second gate:** design the *opening moment* explicitly — what the
  person feels before they understand anything. Measure it against the North Star
  (`docs/foundation/north-star.md`). If the first five seconds don't land, the
  slice isn't desirable yet, however good the rest is.
- **Output:** the smallest slice that is *complete and great* — not a fraction of
  a great thing, but a small whole thing. Define what "a real person succeeds
  unaided" means here, and how you'll *observe* it (not assume it).

---

## 3 · ENGINEER — build it at the limit *(Musk)*

Now make it real, from first principles.

- Run the algorithm: question the requirements → delete parts/steps → simplify →
  accelerate → automate (in that order).
- Find the one true constraint; aim everything at it.
- Build the smallest thing that proves it works, then iterate brutally fast.
- **Output:** working implementation of the slice, with the dumb requirements
  removed and the real constraint named and addressed.

---

## 4 · PRODUCTIZE — make it repeatable *(Ford)*

A thing that works once is a prototype. Make it a product.

- Can this be built, deployed, and run the same way every time? Standardize the
  steps. Build quality into the process, not a final inspection.
- Where's the bottleneck in shipping/operating it? Balance the flow.
- What's the cost per unit (per user, per request, per deploy) at volume?
- **Output:** the slice is reproducible and operable at scale — tests, automation,
  and a repeatable path from change to production.

---

## 5 · MONETIZE — make it sustain itself *(the banker)*

Ensure the slice strengthens, not drains, the product's economics.

- What does this slice cost to build and serve, and what value does it create or
  capture? Does the unit economics close?
- Does it deepen a moat or add recurring value — or is it a one-off cost?
- Any dark-pattern or friction-as-revenue risk? (Norman vetoes those.)
- **Output:** a clear read on the economic effect, and a model that captures a
  fair share of the value created — patiently.

---

## 6 · SYNTHESIZE — reconcile to one decision, and stamp it *(cohesion engine)*

Run the synthesis order on the whole slice:

```
DESIRABILITY → FEASIBILITY → DELIVERABILITY → VIABILITY
   Jobs·Norman      Musk           Ford          the banker
```

Each is a gate, not a vote, and **each passes by evidence, not opinion** — name
the rung (asserted → reasoned → tested → observed). If any gate fails, loop back
to the step that owns it; don't ship a compromise. Where methods genuinely
conflict, hold the tension and let vision break the tie. Desirability may return
**KILL** — and that's a win.

- **Output:** a **Gate Card** (`templates/gate-card.md`) in `docs/decisions/` —
  the four verdicts, the evidence rung behind each, the five-second check, the
  tie-break, the verdict (SHIP / LOOP / KILL), and any verification debt. No card,
  not done. Full system: `framework/05-the-gate-card.md`.

---

## 7 · RECORD — update memory *(whoever owns the subtree)*

- File the Gate Card from step 6 into `docs/decisions/`, and roll its lesson into
  `docs/decisions/README.md` (a pattern that keeps passing, a debt owed, or a kill).
- Update the affected `docs/` files and `docs/README.md`.
- Update `CLAUDE.md` if the change touches identity, stack, or structure.
- **Treat undocumented decisions as not done.** Memory is part of the deliverable.

---

## 8 · SHIP & OBSERVE — then loop

- Ship the slice.
- Observe real behavior and real numbers against the bar set in Frame and Design.
- Feed what you learn back into step 1. The loop is a spiral, climbing.

---

## Operating cadence

- **For small work:** run the loop lightly and fast — frame in a sentence, design
  in your head, but never skip the synthesis gates or the record step.
- **For significant work:** run it deliberately, with explicit outputs at each
  step and a Gate Card at the end.
- **Always:** one voice to the user. Deliberate as five; deliver as one.

---

## The standing bar

A slice is done only when it is, at once — and each backed by evidence at an
honest rung, not asserted:

- **Desirable** — proud to put our names on it, and the *opening moment is
  proven*, ideally observed in a real first-run.
- **Feasible** — built at the limit, not faked; something actually *ran*.
- **Deliverable** — reproducible and operable at scale; the path *repeated*.
- **Viable** — it helps the product sustain and compound itself; backed by a
  *number*.

…and it left a **Gate Card**. Anything less isn't done — it's a draft wearing a
"shipped" label. Loop again.

---

*Build in cycles, keep all five methods in every cycle, and the product stays
revolutionary as it grows — which is the only test that matters.*
