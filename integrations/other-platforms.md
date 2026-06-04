# Adapter — Claude Cowork · OpenCLAW · Hermes · raw API · any agent

The universal pattern for any platform that accepts instructions. The **core
always works**; the two advanced features use whatever that platform offers, with
a sequential fallback that needs nothing special.

> **Honest note:** I haven't verified the exact config conventions of every named
> platform here. So this adapter gives you the *mechanism-agnostic* path that works
> regardless, plus a checklist to confirm the platform-specific wiring. If you
> share a platform's docs, I'll write a precise, tested adapter for it.

## 1 · Inject the core (always works)
Put [`system-prompt.md`](system-prompt.md) wherever that platform takes standing
instructions:
- a **system prompt** (most agent platforms / raw API: the `system` field),
- a **per-task instruction / preamble** (paste it above the task),
- a **rules / context file** if the platform has one.

That alone gives you right-sizing, the four gates, the evidence ladder, the
red-team pass, KILL, and Founder Calls — on any model.

## 2 · Ratchet (memory across runs)
No hook needed. Keep a short **ledger** (`docs/decisions/README.md` from
`templates/decision-ledger.md`) and **prepend it to the task context** each run —
either manually, or by whatever "always-include this file/memory" feature the
platform has. The rule: *build on the patterns, pay the open debts, never re-open a
kill.* That's retention without a hook.

## 3 · Simulation (isolated divergence → weave)
Pick the strongest your platform supports:
- **Native sub-agents / parallel tasks** → spawn one isolated agent per perspective
  (Visionary, Humanist, Opposite, 10×, Distant Field), collect, weave.
- **Parallel API calls** → fire N independent `messages` calls, each with a
  *different* perspective in its system prompt and **no shared history** (that's the
  isolation), collect the outputs, then run one more call that weaves them through
  the gates.
- **Sequential fallback (works anywhere)** → run each perspective in a **fresh
  conversation** (fresh = isolated), save each take, then paste them all into one
  final chat and ask it to weave through the gates. Slower, same result.

Full method either way: `framework/10-the-simulation.md`.

## Per-platform checklist (confirm in the platform's docs)
- [ ] Where do standing instructions go? (system prompt / rules file / preamble)
- [ ] Can it auto-include a file each run? (→ that's your Ratchet)
- [ ] Can it spawn sub-agents or parallel isolated calls? (→ native Simulation;
      else use the fresh-conversation fallback)
- [ ] Does it support MCP? If yes, an MCP server is the cleanest cross-tool
      integration (one server, many platforms) — ask and I'll spec it.

## The one rule for all of them
It's **opt-in**: include the Ritual only on the tasks where you want it. Leave it
out and the platform behaves exactly as it did before — nothing about the default
flow changes.
