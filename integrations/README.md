# Integrations — run the Ritual anywhere

Opt-in adapters to use the Ritual on platforms beyond Claude Code. **None of these
change your default flow** — you turn the Ritual on only for the tasks you choose.

## The principle

The Ritual's *thinking* is **pure instruction** — it lives in
[`system-prompt.md`](system-prompt.md), a single block with **zero harness
dependencies**. The trick to real compatibility (not "paste it when you remember")
is this: **every capable agent already auto-reads one file every session** — its
own `CLAUDE.md`. So each adapter installs the Ritual *into that native slot*, and
it activates itself. The agent never has to volunteer.

Each adapter does three things against the platform's native mechanisms:

1. **Inject** the core into the file the platform auto-loads every session.
2. **Ratchet** — keep the decision ledger where the platform re-reads it.
3. **Simulation** — spawn *isolated* minds for divergence (native sub-agents,
   parallel API calls, or a sequential fallback).

## Pick your platform

| Platform | Auto-load slot | Adapter |
|---|---|---|
| **Claude Code** (CLI · IDE · web) | `CLAUDE.md` | [`claude-code.md`](claude-code.md) — full, native |
| **OpenClaw** | `AGENTS.md` + `BOOTSTRAP.md` + `SOUL.md` | [`openclaw.md`](openclaw.md) — near 1:1 |
| **Hermes** (Nous Research) | `~/.hermes/SOUL.md` (slot #1) | [`hermes.md`](hermes.md) |
| **Claude Cowork** | project / global instructions | [`claude-cowork.md`](claude-cowork.md) |
| **Cursor / Windsurf** | `.cursor/rules/*.mdc` | [`cursor.md`](cursor.md) |
| **Any other agent** | find its auto-load file | [`other-platforms.md`](other-platforms.md) — the recipe |

## Feature matrix

| | Core gates | Auto-activate | Ratchet (memory) | Simulation (isolated minds) |
|---|---|---|---|---|
| **Claude Code** | ✅ | ✅ `CLAUDE.md` | ✅ SessionStart hook | ✅ native sub-agents |
| **OpenClaw** | ✅ | ✅ `AGENTS.md` | ✅ `AGENTS.md` memory | ✅ multi-agent, isolated workspaces |
| **Hermes** | ✅ | ✅ `SOUL.md` slot #1 | ◐ ledger as referenced file | ◐ skill or sequential |
| **Cowork** | ✅ | ✅ project instructions | ✅ context files | ◐ project-per-mind or sequential |
| **Cursor / Windsurf** | ✅ | ✅ rules file | ◐ re-read the ledger | ◐ background agents or manual |

✅ native · ◐ works, via a manual or platform-dependent path.

## The honest edge (owed to reality)

The auto-load *file mechanism* for each platform above is from its own docs — that
part is verified. What I have **not** done is run each install end-to-end against a
live OpenClaw / Hermes / Cowork instance, so those shells are **REASONED, not
TESTED** — read them before you run them, and each adapter says so. Two specifics
are genuinely unverified and marked *owed to reality* in their adapters: whether
**Cowork** and **Hermes** can spawn *parallel isolated sub-agents* (until
confirmed, use the sequential Simulation path).

**Point me at a platform's docs and I'll write or harden its adapter.**
