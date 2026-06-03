# Framework 03 — Context Architecture

> Phase 4 of the kickoff sequence. The high-performance documentation and context
> system that lets the product grow without the Council losing the plot.

A product accumulates knowledge faster than any context window can hold. The
difference between a session that's sharp on month six and one that's lost is not
a bigger model — it's a **disciplined context architecture**. This is that
system.

---

## The principle: progressive disclosure

Context is a budget. Spend it on what changes the current decision; keep the rest
one hop away.

```
CLAUDE.md          Always loaded.  Small. Identity + index + rules.
   │
   ├─ imports ──▶  Cohesion engine, value prop, brand voice (small, always-relevant)
   │
   └─ links  ───▶  docs/README.md  ──▶  the whole knowledge tree, loaded on demand
```

- **Tier 1 — always in context:** `CLAUDE.md` and its imports. Tiny, load-bearing,
  read every session.
- **Tier 2 — indexed, loaded on demand:** everything in `docs/`, reached through
  `docs/README.md`. Loaded only when the task needs it.
- **Tier 3 — the repo itself:** code, configs, assets. Read just-in-time via
  search and file reads.

The skill is keeping Tier 1 ruthlessly small so it's always affordable, while
making Tier 2 so well-indexed that the right detail is always one hop away.

---

## The docs tree

```
docs/
├── README.md            THE INDEX — the map of all knowledge. Always current.
├── foundation/          Founding docs (Phase 3). The immutable inputs.
│   ├── brand-kit.md
│   ├── value-proposition.md
│   ├── prd.md
│   └── user-experience.md
├── decisions/           ADRs — one file per significant decision, dated, numbered.
│   └── 0001-example.md
├── product/             Specs, flows, requirements as they evolve.
├── engineering/         Architecture, systems, interfaces, trade-offs.
└── operations/          Production, economics, go-to-market, metrics.
```

Each subtree maps to minds: `foundation/` & `product/` → Jobs + Norman;
`engineering/` → Musk + Ford; `operations/` → Ford + Rothschild. The owning mind
keeps its subtree honest.

---

## docs/README.md — the index is the keystone

This single file is the entry point to all deep context. It is **not** a dump —
it's a map: for each area, one line on *what's there* and *when to read it*, plus
the link. A session reads the index, decides what's relevant, and loads only
that.

The index must answer, for any task: *where does the knowledge for this live, and
do I need it right now?* Keep it current or the whole system degrades — a stale
index sends sessions to the wrong place or nowhere.

---

## Decision records (ADRs) — the Council's memory of *why*

The most expensive knowledge to lose is *why* a decision was made. Every
significant decision gets a short, dated ADR in `docs/decisions/`:

```markdown
# 0007 — <decision title>
Date: YYYY-MM-DD · Status: accepted | superseded by 00NN

## Context
What forced a decision? What constraints and facts were in play?

## The synthesis
How the gates ran: desirability → feasibility → deliverability → viability.
Which mind led, where tension arose, how it resolved. Who held the tiebreaker.

## Decision
What we chose, stated plainly.

## Consequences
What this makes easy, what it makes hard, what we're now committed to,
what we'd revisit and when.
```

ADRs are append-only history. Don't rewrite them; supersede them with a new one
and link back. This is how a session in month twelve understands month two
without re-litigating it.

---

## Maintenance discipline — keeping memory honest

Stale docs are worse than no docs; they actively mislead. The rules:

1. **Update in the same breath as the change.** A code or product change isn't
   done until the docs and index reflect it. Treat doc drift as a bug.
2. **Single source of truth.** Each fact lives in exactly one place; everywhere
   else links to it. Never copy — duplication is how docs start lying.
3. **Date and status everything.** Especially decisions and specs. A reader must
   know if they're looking at current truth or history.
4. **Prune.** Delete or mark superseded what's no longer true. A lean, true tree
   beats a vast, rotting one.
5. **Index first.** When you add a doc, add its line to `docs/README.md` in the
   same change. An unindexed doc is invisible.

---

## How a session uses this system

1. Read `CLAUDE.md` → adopt the Council, learn what's being built, see the rules.
2. Read `docs/README.md` → get the map of deep knowledge.
3. Load only the `docs/` entries the current task needs.
4. Read code just-in-time via search.
5. On any significant decision → write an ADR and update the index.
6. On any material change → update the affected docs and `CLAUDE.md`.

This keeps every session warm, fast, and cohesive — no matter how large the
product grows.

---

## Done when

- The `docs/` tree exists with `README.md`, `foundation/`, `decisions/`,
  `product/`, `engineering/`, `operations/`.
- `docs/README.md` is wired into `CLAUDE.md` as the single deep-context entry
  point.
- The progressive-disclosure tiers and maintenance rules are written down (here,
  and summarized in `CLAUDE.md`).
- At least the foundation docs are indexed, and an ADR template exists.
