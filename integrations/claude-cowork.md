# Adapter — Claude Cowork

Cowork is hosted (no repo, no shell), so the install is in the UI — but the
auto-load is just as real. Cowork has a **project instructions** layer and
**project context files** that, per Anthropic's guidance, it "reads every time.
Every single time." That's your `CLAUDE.md` equivalent: paste the Ritual once
into the right slot and it injects on every task in that project — you never
re-paste, and the agent never has to decide to load it.

> **Verified vs. owed:** the three-layer instruction model and the
> "read-every-time" context files are documented behavior. Cowork is a hosted UI,
> so there's no install script — the steps below are manual. Whether Cowork can
> spawn *parallel isolated sub-agents* (for the Simulation) I have **not** verified
> — that's owed to reality; until then, use the sequential path.

## Install (UI, ~2 minutes)

**1 · Pick the scope.**
- *This project only* → **Settings → Cowork settings → the project's
  instructions.** Paste the contents of [`system-prompt.md`](system-prompt.md).
- *All your projects* → paste it into **global instructions** instead.

That paste *is* the activation. Cowork injects it on every task in scope — the
exact analogue of Claude Code auto-reading `CLAUDE.md`.

**2 · Add the foundation as context files.** In the project folder, add markdown
files Cowork reads every time:
- `north-star.md` — your taste calibration (from `templates/north-star.md`)
- `decisions.md` — the decision ledger (from `templates/decision-ledger.md`)

**3 · Done.** Open the project and give it a task. The gates run; the ledger is
in context.

## Feature mapping

| Feature | How on Cowork |
|---|---|
| **Auto-activate** | ✅ native — project (or global) instructions inject on every task. |
| **Ratchet** (memory) | ✅ via context files — `decisions.md` in the project is "read every single time." Update it as decisions land and Cowork re-injects it for free. (It's read-every-time, not auto-*written* — you or the agent append to it.) |
| **Simulation** (isolated minds → weave) | ◐ Cowork's parallel-isolated-sub-agent support is **unverified** (owed to reality). Reliable paths: (a) one **project per mind** — each project is isolated context — then paste the takes into a weave project; (b) sequential — fresh chats per perspective, then weave. Method: `framework/10-the-simulation.md`. |
| **Gates / evidence ladder / right-size / red-team** | ✅ via the instructions. |

## Opt-in only?
Scope it to a single **project** and your other Cowork projects are untouched —
nothing about the default flow changes. Use *global instructions* only if you
want every project to think in the Ritual.
