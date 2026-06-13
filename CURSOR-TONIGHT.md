# Tonight's UI polish task

Work through this completely and autonomously. Do not stop to ask questions. Make all the fixes. When in doubt, use more whitespace and smoother transitions.

---

## What you're working on

This is a portfolio site for a senior product design leader. It needs to feel polished, calm, and intentional — like the work of someone who cares deeply about craft. Right now it's functional but janky: inconsistent spacing, missing transitions, and a few layout issues on mobile. Fix all of it.

The stack: React + custom CSS (`src/pages/Home.css`) + Tailwind utilities in JSX. The Lumen design system tokens are available as CSS custom properties (`var(--lumen-terracotta)`, `var(--lumen-border)`, etc.).

Read `UI-AUDIT.md` first. That is your full checklist. Work through every section in order.

---

## How to work

1. **Read `UI-AUDIT.md`** completely before touching anything.
2. **Read each CSS file and JSX component before editing it.** Never edit blind.
3. **Fix, don't report.** Make the changes. Don't produce a list of what's wrong — produce a fixed codebase.
4. After finishing all CSS changes, **start the dev server** (`npm run dev`) and take a screenshot at 375px and 1280px to verify nothing broke.
5. If you find issues the audit didn't mention, fix those too. Use your judgment.

---

## Principles to follow (Refactoring UI)

- When in doubt, add more whitespace. Designs that feel cramped need more space, not less.
- Use a spacing scale. Every margin, padding, and gap should be a multiple of 4px (0.25rem). Round off-scale values.
- Hierarchy comes from font size + weight + color, not just heading levels. Body text should be `#555`–`#666`, never black.
- Offset shadows feel designed. Use `0 4px 16px rgb(0 0 0 / 0.07)` on cards. Never symmetric black shadows.
- Fewer borders. When you have a shadow and a border, drop the border.
- Every clickable element needs a hover state. If you can click it, something should change when you hover.

---

## Transitions — this is the most important part

The site currently has almost no motion. Every interactive element should feel responsive without being flashy.

**Standard**: `transition: <property> 200ms ease;`  
**For small state changes (color, opacity)**: `150ms ease`  
**For shadow/scale**: `200ms ease`

Add transitions to:
- All case study cards (shadow lift + `translateY(-2px)` on hover)
- All pager cards (shadow lift on hover)
- All nav links (color change on hover)
- All CTA links / "Read case study →" (color + opacity)
- Profile and collage images on the About page (subtle `scale(1.01)` on hover)
- Any button or link that doesn't already have a transition

---

## Spacing — second most important

- Every section needs consistent top padding. Pick `4rem` on mobile, `5rem` on desktop. Apply it uniformly to `.case-study-section`, `.about-section`, home page sections.
- Cards need consistent internal padding: `1.25rem` on mobile, `1.5rem` on desktop.
- Text inside cards: headings should have `0.5rem` gap to body text. Not more, not less.
- The page container should have at least `1.25rem` horizontal padding on mobile. Check it doesn't collapse.
- Stat grid cards (`case-study-stat-grid`): switch to `display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))` so they wrap properly on mobile.

---

## Typography — third

- Body text: `16px`, `line-height: 1.7`, color `#555`.
- Meta / role / caption text: `13px`, color `#888`.
- Eyebrow labels (CASE STUDY, COMPANY IMPACT): `11px`, `font-weight: 600`, `letter-spacing: 0.07em`, uppercase, terracotta color.
- Case study hook (large quote below title): should be visually distinct — `clamp(1.1rem, 2.5vw, 1.375rem)`, `font-weight: 600`, color `#111`.
- Nothing should use pure `#000` or `#333` for body text.

---

## Mobile — check these at 375px

- Nothing should overflow horizontally.
- Case study title should not wrap past 3 lines (use `clamp()` font size if needed).
- About page collages should stack below bio text, not beside it.
- Stat cards should wrap to 2-across, not overflow.
- Nav pill should have breathing room — logo and hamburger visible with padding.
- Contact page email button should not overflow.

---

## Focus states — don't skip this

Every `<a>` and `<button>` needs a visible focus ring for keyboard navigation:

```css
:focus-visible {
  outline: 2px solid var(--lumen-terracotta);
  outline-offset: 3px;
}
```

Add this globally if it's not already there.

---

## Files to edit

- `src/pages/Home.css` — primary target, most of the CSS lives here
- Tailwind classes in JSX files under `src/pages/` and `src/components/portfolio/`
- Do NOT touch `src/components/lumen/` — those are design system primitives

---

## Done when

- You've worked through every section of `UI-AUDIT.md`
- All transitions are in place
- Spacing is consistent throughout
- No mobile overflow at 375px
- Screenshots at 375px and 1280px look clean
- You've done a final scroll-through mentally and fixed anything that still feels off

Don't leave anything half-done. This is a portfolio for a design leader — the craft has to be right.
