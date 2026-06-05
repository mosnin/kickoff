# Adapter — Hermes Agent (Nous Research)

Hermes is a self-hosted persistent agent. It injects a few files into the system
prompt at the start of **every** session — and one of them, `SOUL.md`, is
**slot #1**: the highest-priority, user-owned persistent instruction file. That's
your auto-load slot. Put the Ritual there and it's live every session, with no
agent having to choose to load it.

> **Verified vs. owed:** the file mechanism (SOUL.md slot #1, MEMORY.md/USER.md
> auto-injected with ~2,200 / ~1,375-char limits, all under `~/.hermes/`) is from
> Hermes' docs and repo (`github.com/NousResearch/hermes-agent`). I have **not**
> run the install against a live Hermes node, so the shell is REASONED, not TESTED.

## The map

| Ritual piece | Hermes file | Notes |
|---|---|---|
| **The framework** (gates, ladder, right-size) | `~/.hermes/SOUL.md` — "primary agent identity, **slot #1 in system prompt**" | every session; user-owned |
| **The Ratchet** (decision ledger) | a workspace file `SOUL.md` points to | native `MEMORY.md` is **agent-curated and small** (~2,200 chars) — too tight for a disciplined ledger, so keep the ledger as its own file and have `SOUL.md` say *"read it at session start"* |
| **User context** | `~/.hermes/USER.md` (~1,375 chars) | who the founder is — leave this to Hermes |
| **The Simulation** | a **skill** (agentskills.io standard) or sequential fresh sessions | see below |

## Install

```bash
R=".ritual"                              # where you cloned the Ritual
H="$HOME/.hermes"; mkdir -p "$H"

# Framework  →  SOUL.md, slot #1, read every session
if ! grep -q 'THE RITUAL' "$H/SOUL.md" 2>/dev/null; then
  { echo; cat "$R/integrations/system-prompt.md"; \
    echo; echo 'At session start, also read ./docs/decisions/README.md (the'; \
    echo 'decision ledger) and honor it: build on the patterns, pay the open'; \
    echo 'debts, never re-open a KILL.'; } >> "$H/SOUL.md"
fi
```

Next session, Hermes injects `SOUL.md` first — the framework is live — and the
appended line points it at your ledger so gains compound.

## Feature mapping

| Feature | How on Hermes |
|---|---|
| **Auto-activate** | ✅ native — `SOUL.md` is slot #1, injected every session. |
| **Ratchet** (memory) | ◐ native `MEMORY.md` is auto-curated and bounded (~2,200 chars) — fine for the agent's own notes, too small for the disciplined ledger. So keep `docs/decisions/README.md` as the ledger and let `SOUL.md` re-point Hermes at it each session (the line the installer appends). Hermes' SQLite/FTS5 history *recalls* facts; the file *enforces* the discipline. |
| **Simulation** (isolated minds → weave) | ◐ Hermes is a single persistent agent, so true parallel isolated sub-agents aren't its native shape (**owed to reality — confirm in your version**). Two paths: (a) package the Simulation as a **skill** that fires several independent perspective passes; (b) the sequential fallback — run each perspective in a **fresh session** (fresh = isolated), save each take, then weave them in one final session. Method: `framework/10-the-simulation.md`. |
| **Gates / evidence ladder / right-size / red-team** | ✅ via `SOUL.md`. |

## Opt-in only?
`SOUL.md` is global to that Hermes node — so this is the one platform where
"install" means "this node now thinks in the Ritual." If you want it task-scoped
instead, don't touch `SOUL.md`; paste `system-prompt.md` into the task. Either
way, your other tools are untouched.
