# Refactoring UI — reference for this project

**Purpose:** Lightweight design guidance aligned with *Refactoring UI* (Wathan & Schoger) for UI polish in this codebase. Use alongside Tailwind — RI is about hierarchy and density; Tailwind is the styling layer.

## Official source

- **Book:** [*Refactoring UI*](https://www.refactoringui.com/) — full PDF / ebook from the authors' site (purchase or bundle).
- **Free material:** [Articles / resources](https://www.refactoringui.com/) on the same site.

> **Note:** Do not commit the PDF or large excerpts here (copyright). Keep your purchased copy locally if you use the PDF; this file is an **original summary** of ideas we apply in-app, not a reproduction of the book.

## Principles we lean on (checklist)

1. **Start with less** — Prefer spacing, type scale, and weight before adding boxes, borders, and shadows. Extra chrome is a last resort.
2. **One job per surface** — Avoid "card on card" unless hierarchy truly needs it; use a single container and dividers or spacing between groups.
3. **Don't repeat the same action** — One primary path to "Create X" in a section; don't mirror the same CTA in the header and in an empty state.
4. **Hierarchy = size + weight + color** — Fewer font sizes; use weight and muted color for secondary text instead of another border.
5. **Labels vs content** — Small, muted labels; stronger body for the actual value (amounts, titles).
6. **Dense tools, calm reading** — Toolbars and filters can be compact; long-form content gets line length and breathing room.
7. **Empty states** — Short, honest copy; optional single action; avoid dashed "fake fields" unless they teach an affordance.

## When Tailwind defaults and RI disagree

Default to **consistent Tailwind patterns** from `use-ds.mdc`. Use RI-style **layout and density** (spacing, fewer nested surfaces, one CTA) around those utilities. If a utility default fights readability, scope a small override rather than inventing a one-off component.

## Related project docs

- [knowledge.md](../knowledge.md) — stack and never-do list
- [layout-patterns.md](./layout-patterns.md) — page structure, card hierarchy, toggle placement
