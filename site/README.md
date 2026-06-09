# The Ritual — landing page

A zero-build static landing page in a black-and-red ASCII/ritual aesthetic. The
motion is calm and hand-built: two faint concentric rings behind the hero, a
sparse drifting ember field, a scroll-driven background gradient, spring
section-reveals (Motion, with an IntersectionObserver fallback), and animated
ASCII benchmark bars. Headings are set in **Jacquard 12**; body in **JetBrains
Mono**.

Three files, no framework, no dependencies, no build step:

```
site/
├── index.html    structure + copy (hero, the law, the arc, methods,
│                 simulation, benchmarks, gate card, install, run-anywhere)
├── styles.css    the aesthetic (black/red, grain, vignette, ascii frames)
├── main.js       nav + copy + platform picker, then the canvas/animation layer
└── vercel.json   static headers + clean URLs
```

`main.js` binds the interactions (smooth-scroll nav, copy buttons, the platform
dropdown) **first**, before any canvas code, so a decorative hiccup can never
break navigation.

## Deploy to Vercel

It's a **static site** (no build step). There are two `vercel.json` files and
**one blessed path** — pick it and ignore the rest:

> **Blessed path — deploy from the repo root.** The root `vercel.json` sets
> `outputDirectory: site`, so importing the repo on Vercel with **default
> settings just works** — it serves `site/` and won't try to build. Leave Root
> Directory blank, Framework = **Other**, all build/install commands empty.

The `site/vercel.json` is only used if you instead point Vercel's **Root
Directory at `site/`** (or drag-and-drop the folder). Don't do both — choose one:

- **Git import (recommended):** vercel.com → Add New → Project → import the repo →
  Deploy. The root `vercel.json` handles the rest. Every push redeploys.
- **CLI:** `npx vercel --prod` from the repo root.
- **Drag & drop:** drag the **`site/`** folder onto vercel.com/new.

### Sanity check before deploy
```bash
cd site && python3 -m http.server 8000   # → http://localhost:8000 should render
```
If it renders locally, it renders on Vercel — there's no build to differ.

## Notes

- Fully responsive; the nav links stay reachable on mobile (a scrollable row, not
  hidden). Respects `prefers-reduced-motion` (animation freezes to a static frame;
  all content still reveals).
- **The benchmark figures are real but early.** They come from 5 informal paired
  trials (framework vs. baseline, same model, fixed rubric) in an isolated Claude
  environment — an honest *TESTED* rung, not a large-scale benchmark. The page says
  so, in the "Method" line under the bars. Honesty is the brand: don't inflate
  them, and if you run a bigger test, update the numbers and the method together.
</content>
</invoke>
