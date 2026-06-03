---
name: ui-audit
description: >-
  Full UI quality pass on sharonmiller.design — spacing scale, typography hierarchy,
  color/contrast, transitions, responsive layout (375–1280px), and component polish.
  Use when the user asks for visual QA, UI audit, buttery-smooth polish, Refactoring UI
  pass, spacing/typography fixes, or case study/home/about layout refinement.
---

# UI Audit — sharonmiller.design

**Read first:** [docs/ui-audit.md](../../../docs/ui-audit.md) — canonical checklist (all 7 sections + ground rules).

Also ground in: [.cursor/rules/use-ds.mdc](../../rules/use-ds.mdc), [docs/refactoring-ui-reference.md](../../../docs/refactoring-ui-reference.md), [docs/layout-guidelines.md](../../../docs/layout-guidelines.md).

## When to run

- User requests visual QA, UI pass, or “buttery smooth” polish
- After large layout/CSS changes to Home, About, case studies, or nav
- Before a portfolio deploy or hiring submission

## Workflow

1. **Read** `docs/ui-audit.md` end to end. Work **section by section** (1 → 7); do not skip verification.
2. **Primary CSS:** `src/pages/Home.css`. **JSX:** `src/components/portfolio/`, `src/pages/`. **Do not edit** `src/components/lumen/`.
3. **Ground rules from the doc:**
   - Spacing on 4px scale (`0.25rem` steps); prefer tokens / Tailwind / `var(--lumen-*)` over raw hex in CSS
   - Flex/grid for layout; no absolute positioning for document flow
   - Do not remove classes referenced in JSX — read the component before changing CSS
4. **After each section**, mentally check **375px** and **1280px** (or run dev server if available). Fix anything that catches the eye before moving on.
5. **Report** a short summary: what changed, which sections completed, anything deferred for user input (e.g. new assets).

## Quick file map

| Area | Files |
|------|--------|
| Home + shared portfolio CSS | `src/pages/Home.css` |
| Pages | `src/pages/Home.jsx`, `About.jsx`, `Contact.jsx`, `CaseStudyPage.jsx` |
| Case study shell | `src/components/portfolio/CaseStudyLayout.jsx`, `CaseStudyPager.jsx` |
| Nav | `src/index.css` (`.portfolio-nav-*`), `src/components/lumen/NavBar.jsx` (behavior only; minimal style edits) |
| Content | `src/content/caseStudies/*.js` |

## Do not

- Commit or push unless the user asks
- Add unrelated refactors or new features outside the audit scope
- Bulk-commit untracked images in `public/images/` unless explicitly requested and referenced in code
