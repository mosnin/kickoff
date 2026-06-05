# Adapter — any other platform (the generic recipe)

For a platform **not** covered by its own adapter
([Claude Code](claude-code.md), [Cursor/Windsurf](cursor.md),
[Cowork](claude-cowork.md), [OpenClaw](openclaw.md), [Hermes](hermes.md)), use
this recipe. The lesson from those five: **don't rely on the agent volunteering to
load the Ritual — wire it into the file the platform already reads on its own.**
Every capable agent has one.

## The one question that makes it work

> **"Which file does this platform inject into the system prompt on every
> session, without me asking?"**

Find that file and you've found the install target. It's the platform's
`CLAUDE.md`. Examples of what it's called in the wild:

| Platform | The auto-loaded file |
|---|---|
| Claude Code | `CLAUDE.md` |
| OpenClaw | `AGENTS.md` (+ `SOUL.md`, `BOOTSTRAP.md`) |
| Hermes | `~/.hermes/SOUL.md` |
| Cursor / Windsurf | `.cursor/rules/*.mdc` / `.windsurfrules` |
| Cowork | project instructions / project context files |
| raw API / SDK | the `system` field |

Most agent runtimes converge on an `AGENTS.md` or a rules file. When in doubt,
that's your first guess.

## The recipe

1. **Find the auto-load file** (the question above). Paste
   [`system-prompt.md`](system-prompt.md) into it. → the core is now live every
   session, no agent discretion involved.
2. **Ratchet** — if the platform auto-reads a *folder* or lets you list extra
   context files, drop the decision ledger there. Otherwise add one line to the
   auto-load file: *"At session start, read docs/decisions/README.md and honor
   it."* That's retention without a hook.
3. **Simulation** — pick the strongest the platform offers:
   - **native sub-agents / parallel tasks** → one isolated agent per perspective, then weave;
   - **parallel API calls** → N independent `messages` calls, each a *different*
     perspective, **no shared history** (that's the isolation), then one weave call;
   - **sequential fallback (works anywhere)** → each perspective in a **fresh
     conversation**, save the takes, weave them in a final chat.
   Method: `framework/10-the-simulation.md`.

## If there's no auto-load file at all

A rare platform may have *no* persistent instruction slot. Then there's no honest
"install" — only per-task paste. Say so plainly; don't pretend a paste-when-you-
remember block is auto-activation. (It isn't — that's the gap this folder exists
to close.)

## Checklist
- [ ] Found the file the platform injects every session? → paste the core there.
- [ ] Can it auto-include a folder/extra files? → that's your Ratchet.
- [ ] Sub-agents or parallel isolated calls? → native Simulation; else sequential.
- [ ] Supports MCP? → an MCP server is the cleanest cross-tool path (one server,
      many platforms) — ask and I'll spec it.

## The one rule
**Opt-in.** Install it only where you want it; leave it out and the platform
behaves exactly as before.

---

**Point me at a platform's docs and I'll write it a dedicated adapter** like the
five above — exact file, exact install, honest feature map.
