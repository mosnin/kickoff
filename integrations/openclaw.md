# Adapter — OpenClaw

OpenClaw maps onto the Ritual almost 1:1. It auto-injects a set of **workspace
files** into the system prompt's Project Context on the first turn of *every*
session — so you install the Ritual *into those files* and it activates itself.
No "remember to paste it." No agent volunteering. It's wired into OpenClaw's own
startup.

> **Verified vs. owed:** the file mechanism below is from OpenClaw's docs
> (`docs.openclaw.ai`) — the auto-load files and when they're read. What I have
> **not** run end-to-end is the install against a live OpenClaw instance, so treat
> the shell as REASONED, not TESTED — read it before you run it.

## The map (this is the good part)

| Ritual piece | OpenClaw file | Read when |
|---|---|---|
| **The framework** (gates, ladder, right-size) | `AGENTS.md` — operating instructions **+ memory** | every session, first turn |
| **Perform the Ritual** (steps 1–4, ask the North Star) | `BOOTSTRAP.md` — the "one-time first-run ritual" | first session only, then deleted |
| **The council identity** (one voice, five methods) | `SOUL.md` — persona, boundaries, tone | every session, first turn |
| **The Ratchet** (decision ledger) | inside `AGENTS.md`'s memory section, or a workspace file it points to | every session, first turn |
| **The Simulation** (isolated minds → weave) | **native** — multiple agents, each with its own workspace | on demand |

`AGENTS.md` *is* the `CLAUDE.md` of OpenClaw. `BOOTSTRAP.md` *is* "perform the
Ritual on first run." `SOUL.md` *is* "one team, one voice." The framework was
practically built for this runtime.

## Install

Your workspace is `agents.defaults.workspace` in `~/.openclaw/openclaw.json`.
With the Ritual cloned in as `.ritual/` (or pointed at by `$RITUAL`):

```bash
WS="$(grep -oP '"workspace"\s*:\s*"\K[^"]+' ~/.openclaw/openclaw.json | head -1)"
WS="${WS:-$HOME/.openclaw/workspace}"          # fall back to the default
R=".ritual"                                      # where you cloned the Ritual

# 1 · Operating instructions + memory  →  AGENTS.md (weave, don't clobber)
if ! grep -q 'THE RITUAL' "$WS/AGENTS.md" 2>/dev/null; then
  { echo; cat "$R/integrations/system-prompt.md"; } >> "$WS/AGENTS.md"
fi

# 2 · First-run ritual  →  BOOTSTRAP.md (runs once, then OpenClaw deletes it)
cat > "$WS/BOOTSTRAP.md" <<'EOF'
On this first run, PERFORM THE RITUAL (see AGENTS.md): light the methods, write
the project memory, then ask the founder for the North Star, brand, value prop,
PRD, and UX. Stand up docs/ and seed the decision ledger. Don't announce the
machinery — greet the founder as one decisive team and begin.
EOF
```

That's it. Next session, OpenClaw reads `AGENTS.md` (the framework is live),
runs `BOOTSTRAP.md` once (it performs the Ritual and asks for your North Star),
then deletes `BOOTSTRAP.md`. From then on the framework is simply always on.

## Feature mapping

| Feature | How on OpenClaw |
|---|---|
| **Auto-activate** | ✅ native — `AGENTS.md` injected into Project Context every session. |
| **Ratchet** (memory) | ✅ native — `AGENTS.md` is "operating instructions **+ memory**," read every session. Keep the decision ledger there (or in a workspace file it references) and OpenClaw re-injects it for free. |
| **Simulation** (isolated minds → weave) | ✅ native — OpenClaw runs **multiple agents with separate workspaces and tool restrictions**. Spawn one agent per perspective (Visionary, Humanist, Opposite, 10×, Distant Field) — *separate workspaces = real isolation* — then have the lead agent weave them through the gates. Method: `framework/10-the-simulation.md`. |
| **Gates / evidence ladder / right-size / red-team** | ✅ via `AGENTS.md`. |

## Opt-in only?
This activates per-workspace. Use a **dedicated agent/workspace** for Ritual work
and your other agents are untouched — nothing about the default flow changes.
