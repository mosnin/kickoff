# Adapter — Cursor / Windsurf

Editor-agents with a **project rules** mechanism. The core gates work great; the
two advanced features have manual or background-agent paths.

## Activate (inject the core)

**Cursor (current):** create `.cursor/rules/ritual.mdc` and paste the contents of
[`system-prompt.md`](system-prompt.md). Set it to apply manually (so it's opt-in)
or always-on for that project — your choice.

```
.cursor/rules/ritual.mdc   ← paste system-prompt.md
```
*(Legacy Cursor: `.cursorrules` at repo root. Windsurf: `.windsurfrules` or
`.windsurf/rules/`.)*

To use it for a single task instead of project-wide, just paste `system-prompt.md`
into the chat with your task — nothing persistent, nothing changed by default.

## Feature mapping
| Feature | How on Cursor/Windsurf |
|---|---|
| **Gates / evidence ladder / right-size / red-team** | ✅ via the rules file. |
| **Ratchet** (memory) | ◐ Keep a `docs/decisions/README.md` ledger in the repo and add a rule line: *"At the start of a task, read docs/decisions/README.md and honor it."* No hook, but the rule + the file gives you retention. |
| **Simulation** | ◐ Two options: (a) use **background agents** to run a few takes in parallel, then paste them back and ask it to weave through the gates; or (b) run sequentially — ask for the Opposite, the 10×, etc. one at a time in fresh chats (fresh chat = isolation), then weave. |

## Notes
- Cursor/Windsurf don't have Claude Code's `SessionStart` hook, so the Ratchet is
  "read the ledger" by rule rather than automatic — works, just not invisible.
- For true isolation in the Simulation, a **fresh chat per mind** is the simplest
  way to stop them seeing each other.
