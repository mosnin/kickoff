# Adapter — Claude Code (CLI · IDE · web)

**Full, native support.** This is the Ritual's home; everything works out of the box.

## Activate
One line in your repo (the same command from the site):
```bash
git clone --depth 1 https://github.com/mosnin/kickoff .ritual && rm -rf .ritual/.git && bash .ritual/install.sh
```
`install.sh` wires `@.ritual/RITUAL.md` into your `CLAUDE.md` (auto-read every
session) and registers the Ratchet hook. Open Claude → it performs the setup
(steps 1–4) and asks for your North Star.

## Feature mapping
| Feature | How |
|---|---|
| **Auto-activate** | `CLAUDE.md` import — read on every session. |
| **Ratchet** (memory) | `.claude/hooks/ratchet.sh` re-injects the Heading + North Star + ledger at `SessionStart`. Installed automatically. |
| **Simulation** | `/simulation-ritual <brief>` — spawns isolated sub-agents in parallel, then `/weave-ritual` synthesizes. (`.claude/commands/`.) |
| **Right-size / gates / evidence ladder** | Always on, via the imported framework. |

## Opt-in only?
The Ritual activates per-repo (a repo that carries it), not globally — so repos
without it are unaffected. To use it for a *one-off* task without installing,
paste [`system-prompt.md`](system-prompt.md) into the conversation instead.
