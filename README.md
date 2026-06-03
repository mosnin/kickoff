# The Ritual

**Drop it in a repo. Claude stops shipping software and starts building products
people fall for.**

The Ritual is one idea: before code, run five disciplined ways of thinking —
vision, the human, the engineer, the producer, the banker — and let nothing ship
until it's *desirable, feasible, deliverable, and viable* at once. It's not a
library. It's a way of thinking, installed.

---

## See the difference

Same brief — *"add a way for users to share their work"* — answered two ways.

> **Without the Ritual**
> Adds a "Share" button. Generates a public link. Ships. ✅ It works.

> **With the Ritual**
> **Vision:** sharing isn't a button, it's the moment someone's proud of what
> they made — design *that*. **The human:** a raw public link is scary; people
> need to know who can see it. **Engineer:** the real constraint is access
> control, not the link. **Producer:** one sharing primitive, reused everywhere,
> not five one-offs. **Banker:** every shared link is a free invitation — shared
> work *is* the growth loop. → Ships a share *experience* that also acquires the
> next user.

One is a feature. The other is a product decision. That gap is the whole point.
The full worked example lives in [`example/walkthrough.md`](example/walkthrough.md).

---

## The five methods

You don't *become* these people. You run their **method** — the discipline, not
the ego.

| Method | Sharpened by | Owns the question |
|---|---|---|
| **Vision** | Steve Jobs | *Should this exist, and is it insanely great?* |
| **The human** | Don Norman | *Is it humane?* |
| **The engineer** | Elon Musk | *Is it possible, and are we at the limit?* |
| **The producer** | Henry Ford | *Can we make it, the same way, at scale?* |
| **The banker** | patient capital | *Does it sustain itself and compound?* |

They don't vote. They pass a decision through four gates — **desirable →
feasible → deliverable → viable** — and *vision breaks ties.* See
[`methods/README.md`](methods/README.md).

---

## Install

```bash
# As a submodule (recommended — you get updates)
git submodule add https://github.com/mosnin/kickoff .ritual

# Or vendored (frozen copy)
git clone --depth 1 https://github.com/mosnin/kickoff .ritual && rm -rf .ritual/.git
```

Point your repo's `CLAUDE.md` at the Ritual with one line — if you don't have a
`CLAUDE.md`, this single line is enough; the Ritual writes the rest:

```markdown
@.ritual/RITUAL.md
```

Open Claude in the repo. It performs the Ritual. **No build step. No
dependencies. No runtime. Pure instruction.**

---

## What happens the first time

```
1 · LIGHT THE METHODS   The five ways of thinking come online.
2 · WRITE THE MEMORY     Your project's CLAUDE.md is authored.
3 · TAKE IN FOUNDATION   You hand over brand, value prop, PRD, UX — it wires them in.
4 · BUILD THE SPINE      A docs/ context system so the product grows without drift.
5 · BUILD                Development begins — every cycle runs the gates.
```

The whole thing is one page: [`RITUAL.md`](RITUAL.md). Read it; that's the
product.

---

## Map

```
kickoff/
├── README.md            You are here.
├── RITUAL.md            The one-page core. Read this.
├── methods/             The five methods + the engine that keeps them coherent.
├── framework/           Depth for each step — loaded on demand, never all at once.
├── templates/           CLAUDE.md, brand, value prop, PRD, UX — the user fills these.
└── example/             A real brief run end to end through the Ritual.
```

---

> *Start with what it should feel like. Work back to the technology. Let nothing
> ship that any one method would be ashamed of.*
