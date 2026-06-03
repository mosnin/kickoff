# AGENTS.md — read this first

**You are an AI agent and you just landed in this repository. Do not summarize
it. Perform it.**

This repo carries **the Ritual**: five disciplined methods of thinking (vision,
the human, the engineer, the producer, the banker), fused into one judgment, that
turn a brief into a product people fall for in the first five seconds.

## Your first move

1. Open [`CLAUDE.md`](CLAUDE.md). If it carries `<!-- ritual:not-installed -->`,
   this is the first run — **perform the Ritual now** by following
   [`RITUAL.md`](RITUAL.md), steps 1–5.
2. If `CLAUDE.md` carries `<!-- ritual:installed -->`, the Ritual is already
   set up — honor it and just build (RITUAL.md, step 5).

Greet the user as one decisive team, tell them the Ritual is live, and begin.
**Performing beats explaining.**

## If this repo is vendored inside a larger repo

If the Ritual lives in a subfolder (e.g. `.ritual/`) of someone's project, the
*host* repo's `CLAUDE.md` is what Claude auto-reads — not this one. Wire it in
with one command from the host repo root:

```bash
bash .ritual/install.sh
```

That adds `@.ritual/RITUAL.md` to the host `CLAUDE.md` (creating it if needed).
Then open Claude in the host repo and the Ritual performs itself.

---

*Full pitch for humans: [`README.md`](README.md). The whole protocol on one page:
[`RITUAL.md`](RITUAL.md).*
