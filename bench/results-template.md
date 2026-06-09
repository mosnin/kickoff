# bench/results.md — recorded self-test runs

> Copy this file to `bench/results.md` and append a block per run. The aggregate
> rolls into `docs/decisions/0001-framework-efficacy.md`. **Every public efficacy
> number must trace to a row here** — no row, no claim.

---

## Run YYYY-MM-DD · judge: \<model / real user> · briefs: \<which> · blinded: \<yes/no>

**Setup:** model \<id> · effort budget \<equal?> · conditions A=baseline, B=Ritual,
C=gates-only · tells stripped \<yes/no> · labels shuffled \<yes/no>

### Per-brief

| Brief # | Difficulty | Winner (A/B/C) | B vs A on taste | One-line reason |
|---------|-----------|----------------|-----------------|-----------------|
| | | | | |

### Per-dimension (mean score, 1–5)

| Dimension | A baseline | B Ritual | C gates-only | B − A | B − C |
|-----------|-----------|----------|--------------|-------|-------|
| Decision quality | | | | | |
| Decision-readiness | | | | | |
| Evidence honesty | | | | | |
| Risk surfaced | | | | | |
| Completeness | | | | | |
| Originality / taste | | | | | |
| Conciseness | | | | | |

### Headline

- **Win rate (B beats A):** __ / __  ( ___ %)
- **Easy slice (ceremony tax):** B win rate on easy = __% · did B ever *lose* on easy? \<yes/no>
- **Hard slice:** B win rate on hard = __%
- **Persona ablation (B vs C):** mean delta = __ · verdict: personas \<change the decision / don't>
- **Ever worse on taste?** \<no = claim holds / yes = flag>

### What this changes

- Efficacy claim now at rung: \<REASONED / TESTED / OBSERVED> — cite this run.
- Findings / scope changes: \<where it wins, where it doesn't, what to trim>
- Owed to reality next: \<bigger n / full blinding / real-user judge>

---

*(next run below)*
