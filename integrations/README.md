# Integrations — run the Ritual anywhere

Opt-in adapters to use the Ritual on platforms beyond Claude Code. **None of these
change your default flow** — you turn the Ritual on only for the tasks you choose.

## The principle

The Ritual's *thinking* is **pure instruction** — it lives in
[`system-prompt.md`](system-prompt.md), a single paste-anywhere block with **zero
harness dependencies**. Every platform adapter does just three things:

1. **Inject** that block (system prompt / rules file / per-task context).
2. **Ratchet** — optionally, keep memory across runs (a hook, or just re-including
   the ledger in context).
3. **Simulation** — optionally, spawn *isolated* agents for divergence (native
   sub-agents, or parallel API calls, or a sequential fallback).

So the **core works everywhere**; only the two advanced features depend on what a
platform supports.

## Pick your platform

| Platform | Adapter |
|---|---|
| **Claude Code** (CLI · IDE · web) | [`claude-code.md`](claude-code.md) — full, native |
| **Cursor / Windsurf** | [`cursor.md`](cursor.md) — rules file |
| **Claude Cowork · OpenCLAW · Hermes · raw API · any agent** | [`other-platforms.md`](other-platforms.md) — the universal pattern |

## Feature matrix (honest)

| | Core gates | Auto-activate | Ratchet (memory) | Simulation (isolated agents) |
|---|---|---|---|---|
| **Claude Code** | ✅ | ✅ `CLAUDE.md` | ✅ SessionStart hook | ✅ native sub-agents |
| **Cursor / Windsurf** | ✅ | ✅ rules file | ◐ re-read the ledger | ◐ background agents or manual |
| **Any system-prompt platform** | ✅ | ◐ per-task include | ◐ include the ledger in context | ◐ parallel isolated calls, else sequential |

✅ native · ◐ works, via a manual or platform-dependent path.

## The honest edge (owed to reality)

The **core gates work on anything that accepts instructions** — that's tested. The
*native* Ratchet (auto memory re-injection) and *native* Simulation (parallel
isolated sub-agents) are Claude Code features; on another platform they depend on
that platform's hook / sub-agent support, which you should confirm in its docs. I
won't claim a platform-specific mechanism I haven't verified — where I'm unsure,
the adapter says so and gives you the generic path that always works.

**Point me at any platform's docs and I'll write a precise adapter for it.**
