# Knowledge (project rules for AI)

**What this is:** Stack, preferences, and **never-do** items — restores context in long sessions.  
**Philosophy:** *Knowledge tells the assistant what the product is. [memory.md](./memory.md) tells it what the product has been through.*

---

## This repository (product context)

This is a **design concept and interactive prototype**, not the production app. The team uses it to **define and align on UX**, to **test flows with users** in a real interface, and to give **engineering** a concrete behavioral reference when building the real product.

Design-led. Production may differ. Persistent reminder for the AI: [`.cursor/rules/design-concept-prototype.mdc`](.cursor/rules/design-concept-prototype.mdc) (`alwaysApply: true`).

---

## Stack

- **App:** React 18, Vite 7, React Router 7, Zustand
- **UI:** Tailwind CSS 3 — stone base, terracotta accent, Plus Jakarta Sans

---

## Conventions

- Match existing patterns in the file you're editing (imports, components, layout).
- **Build order:** (1) Tailwind utilities and `var(--ds-*)` tokens first. (2) Figma library second — for larger patterns; get the spec via `get_design_context`, implement with Tailwind. (3) Custom CSS last resort for layout-only cases. Canonical rule: `.cursor/rules/use-ds.mdc`.
- **Design system detail:** `.cursor/rules/use-ds.mdc` — typography scale, `--ds-*` tokens, glass utilities.
- **Do not override Tailwind base** with broad global selectors that fight component styles.
- **Semantic HTML for text:** Use `<h1>`–`<h6>`, `<p>`, `<label>` with Tailwind type classes — not arbitrary `font-size` in CSS.
- **No hardcoded hex colors in CSS:** Use Tailwind classes (`text-stone-900`, `bg-stone-50`) or `var(--ds-*)` tokens.
- **CSS is for layout:** `display`, `flex`, `grid`, `gap`, `padding`, `margin`, `width`, `height`, `position`. Prefer Tailwind for color and typography.

---

## Never do (unless explicitly asked)

- Add one-off styled buttons/inputs when a consistent Tailwind pattern already exists.
- Add global selectors that fight Tailwind or component defaults.
- Hardcode hex values for text, backgrounds, or borders in CSS files.
- Commit `.env` or any file containing a real token or secret.

---

## Related docs

- **Layout patterns:** [docs/layout-patterns.md](./docs/layout-patterns.md) — page structure, card hierarchy, tab/toggle placement
- **Design system audit:** [docs/ds-audit-template.md](./docs/ds-audit-template.md) — fill in as you build
- **Refactoring UI:** [docs/refactoring-ui-reference.md](./docs/refactoring-ui-reference.md) — density and hierarchy principles
- **Environments:** [docs/setup-environments.md](./docs/setup-environments.md) — WIP / Concept Testing / Eng Ready
