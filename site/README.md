# The Ritual — landing page

A zero-build static landing page in a black-and-red ASCII/ritual aesthetic.
Everything animated is hand-built: a canvas ritual-circle (five rotating method
nodes), a drifting ember glyph field, decode-on-scroll text, and animated ASCII
benchmark bars. Headings are set in **Jacquard 12**; body in **JetBrains Mono**.

Three files, no framework, no dependencies, no build step:

```
site/
├── index.html    structure + copy (honest benchmark numbers, incl. the null)
├── styles.css    the aesthetic (black/red, scanlines, vignette, ascii frames)
├── main.js       canvas sigil + embers + decode + animated bars
└── vercel.json   static headers + clean URLs
```

## Deploy to Vercel

It's a static site — Vercel needs no configuration.

**Option A — CLI**
```bash
cd site
npx vercel        # preview
npx vercel --prod # production
```
When asked for a framework preset, choose **Other**. Root/output is this folder.

**Option B — dashboard / git**
Push the repo and import it on vercel.com. Set the **Root Directory** to `site/`,
framework preset **Other**, build command empty, output directory `.`.

**Option C — drag & drop**
Drag the `site/` folder onto vercel.com/new.

## Local preview

Any static server works:
```bash
cd site && python3 -m http.server 8000   # → http://localhost:8000
```

## Notes

- Fully responsive; respects `prefers-reduced-motion` (animations freeze to a
  static frame, all content still reveals).
- The benchmark figures are the real A/B results — including the published null
  (no reasoning-accuracy edge on clean problems). Honesty is the brand; don't
  inflate them.
