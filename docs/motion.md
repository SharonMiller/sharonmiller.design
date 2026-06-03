# Motion and interaction

Motion on sharonmiller.design is intentionally calm: confident reveals, responsive hovers, no flashy agency chrome. This doc is the source of truth for motion decisions (there is no `DESIGN.md` in the repo).

See also: [layout-guidelines.md](./layout-guidelines.md), [ui-audit.md](./ui-audit.md).

---

## Timing tiers

| Tier | Duration | Use for |
|------|----------|---------|
| Micro | 150–250ms `ease` | Hovers, focus, nav links, buttons, card lift |
| Macro | 450ms `ease-out` | Scroll reveals, route fade-in |

Do not use 400–600ms on hovers; that reads as lag.

---

## Smooth scroll (Lenis)

- **Desktop only** (viewport ≥ 768px)
- **Disabled** when `prefers-reduced-motion: reduce`
- Initialized in [`useLenisScroll.js`](../src/hooks/useLenisScroll.js) from [`App.jsx`](../src/App.jsx)
- Scroll helpers: [`smoothScroll.js`](../src/utils/smoothScroll.js)

Hash links (`/#work`) and Back to top use Lenis when active; mobile uses native scroll.

---

## Scroll reveals

- Class: `.lumen-reveal` (opacity)
- Lift variant: `.lumen-reveal--lift` (opacity + `translateY(16px)`)
- Stagger: `data-reveal-index="0"` … n (80ms per step)
- Hook: [`useScrollReveal.js`](../src/hooks/useScrollReveal.js)
- CSS: [`Home.css`](../src/pages/Home.css) (`.lumen-reveal` block)

Apply to case study cards, section headings, capability grid, case study body sections — not intro portrait (parallax handles that separately).

---

## Route transitions

CSS only (no Framer Motion):

- `.page-route` on [`PortfolioShell`](../src/components/portfolio/PortfolioShell.jsx) `main`
- `.page-load` on Home root
- Defined in [`index.css`](../src/index.css)

---

## Hover patterns

- **Case study cards:** `translateY(-2px)` + shadow + image zoom inside media
- **Capability cards:** `scale(1.01)` + shadow
- **Pager cards:** match case study card lift
- **Buttons:** `background-color 200ms ease` on `.lumen-btn-primary`

All transforms disabled under `prefers-reduced-motion`.

---

## What we deliberately skip

- Framer Motion (bundle cost for a single fade)
- Custom cursor (wrong signal for director/principal audience; poor on touch)
- Lenis on mobile (native scroll is more reliable)

---

## Adding motion to new UI

1. Prefer CSS transitions before JS libraries.
2. Use `.lumen-reveal--lift` + `data-reveal-index` for grouped entries.
3. Call `useScrollReveal` when content mounts after route change (or rely on `PortfolioShell`).
4. Test at 375px and 1280px with reduced motion enabled.
