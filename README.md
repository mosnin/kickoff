# kickoff

**A metaframework that turns Claude into a founding team.**

Drop `kickoff` into any repository. The moment Claude reads it, Claude stops
being a general-purpose assistant and becomes a council of five founding minds —
each a master of one discipline, all working as one — to take a product from
zero to revolutionary.

---

## What this is

Most AI coding sessions start cold. Claude knows the language, not the product.
It writes code that compiles but doesn't *matter*. There's no vision, no taste,
no point of view about who this is for or why it deserves to exist.

`kickoff` fixes that at the source. It is a **bootstrap** — a deterministic
sequence Claude runs the first time it enters a repo — that installs:

1. **A point of view.** Five personas, each embodying a master of their craft.
   Claude doesn't *consult* them. Claude *becomes* them.
2. **A memory.** A `CLAUDE.md` and context architecture authored to the
   project, so every future session starts warm.
3. **A foundation.** Your brand kit, value proposition, PRD, and UX docs,
   imported and wired into Claude's working memory.
4. **A loop.** A repeatable development process that keeps all five minds
   cohesive as the product grows.

The output isn't a chatbot that helps you code. It's a founding team that
ships.

---

## The five minds

| Persona | Domain | The question they own |
|---|---|---|
| **Steve Jobs** | Vision & brand | *Should this exist, and is it insanely great?* |
| **Don Norman** | Product & experience | *Is it humane — does it fit how people actually think?* |
| **Elon Musk** | Engineering | *Is it physically possible, and are we at the limit?* |
| **Henry Ford** | Production | *Can we make it, repeatably, at scale?* |
| **Amschel Rothschild** | Monetization & economics | *Does it sustain itself and compound?* |

They are not five opinions in a room. They are one judgment with five facets.
See [`personas/README.md`](personas/README.md) for how they cohere.

---

## Install

`kickoff` is designed to be imported, not modified. Add it to your product repo:

```bash
# As a submodule (recommended — you get updates)
git submodule add https://github.com/mosnin/kickoff .kickoff

# Or vendored (frozen copy)
git clone --depth 1 https://github.com/mosnin/kickoff .kickoff && rm -rf .kickoff/.git
```

Then point your repo's `CLAUDE.md` at the bootstrap. If you don't have one yet,
create it with a single line — the kickoff sequence writes the rest:

```markdown
@.kickoff/KICKOFF.md
```

Open Claude in the repo. It will run the kickoff sequence automatically.

> **No build step. No dependencies. No runtime.** kickoff is pure instruction —
> Markdown that reprograms how Claude thinks for the life of the project.

---

## What happens on first run

When Claude reads `KICKOFF.md`, it executes a five-phase sequence:

```
Phase 0 · IDENTITY      Claude becomes the Council. It is never "Claude" again.
Phase 1 · CLAUDE.md     The project's memory file is authored.
Phase 2 · PERSONAS      The five minds and their routing are installed.
Phase 3 · INTAKE        You're asked for brand kit, value prop, PRD, UX docs.
Phase 4 · CONTEXT       A deep documentation + context system is wired up.
Phase 5 · BUILD         Product development begins, the kickoff way.
```

Full detail in [`KICKOFF.md`](KICKOFF.md).

---

## Repository map

```
kickoff/
├── README.md                    You are here.
├── KICKOFF.md                   The master bootstrap protocol.
├── personas/
│   ├── README.md                The Council: routing + cohesion engine.
│   ├── steve-jobs.md            Vision & brand.
│   ├── don-norman.md            Product & experience.
│   ├── elon-musk.md             Engineering.
│   ├── henry-ford.md            Production.
│   └── amschel-rothschild.md    Monetization & economics.
├── framework/
│   ├── 01-authoring-claude-md.md   How to write the project's CLAUDE.md.
│   ├── 02-document-intake.md       How to import and wire founding docs.
│   ├── 03-context-architecture.md  The high-performance context system.
│   └── 04-development-loop.md       The repeatable build process.
└── templates/
    ├── CLAUDE.md.template
    ├── brand-kit.md
    ├── value-proposition.md
    ├── prd.md
    └── user-experience.md
```

---

## Philosophy

> "You've got to start with the customer experience and work backwards to the
> technology." — Steve Jobs

kickoff is built backwards from the same belief. It doesn't start with code. It
starts with *who this is for and why it should exist*, and refuses to write a
line until that's clear. Then it brings the full force of engineering,
production, and economics to make the vision real — and durable.

Simple. Opinionated. Insanely great. That's the whole point.
