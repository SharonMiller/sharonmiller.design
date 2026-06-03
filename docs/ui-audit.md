# UI Audit — sharonmiller.design

## Goal
Do a full UI quality pass on this portfolio site. The stack is React + Tailwind + custom CSS (Home.css). The goal is a polished, buttery-smooth result: consistent spacing, refined typography hierarchy, smooth transitions, and responsive layouts that feel intentional at every breakpoint. Reference Refactoring UI principles throughout.

## Ground rules

- **Never hardcode pixel values** for spacing, font sizes, or colors. Use CSS custom properties, Tailwind utilities, or the existing Lumen token system (`var(--lumen-*)`, `var(--lumen-border)`, etc.).
- **Use a spacing scale.** Every gap, padding, and margin should land on a 4px multiple (0.25rem increments). Audit for values that are off-scale (e.g. `13px`, `7px`, `22px`) and round to the nearest step.
- **Flex and grid for all layout.** No absolute positioning for flow layout. Responsive breakpoints should use `flex-direction: column` on mobile → `row` on sm/md. Nothing should overflow or clip on a 375px viewport.
- **Do not break existing functionality.** Don't remove classes that are used in JSX. Read the component before editing its CSS.

---

## Section 1 — Spacing audit

Walk every major component and fix these common issues:

### Inconsistent internal padding
- Cards (`case-study-card`, `capability-card`, `case-study-pager__card`) should use the same internal padding scale. Pick one: `1.25rem` or `1.5rem`. Apply consistently.
- Section gaps inside case study body should be uniform. Audit `.case-study-section` top padding — it should be consistent, not varying per section.
- Check all `margin-top` values on headings inside components. Use a consistent heading-to-body gap (e.g. `0.75rem` for h3-to-p, `1.25rem` for h2-to-p).

### Breathing room
- The page container (`PageContainer`) max-width padding on mobile should be at least `1.25rem` on each side. Check it doesn't collapse to `0.75rem` or less.
- Case study header title block needs more separation from the hero image below it — at least `2rem` margin between title block and hero.
- The impact/summary blocks inside case study headers need more vertical spacing between items.

### Tight stacking
- On mobile, stacked flex children need `gap` not `margin-top`. Convert any `margin-top` applied inside a flex container to `gap` on the parent.

---

## Section 2 — Typography hierarchy

Follow the Refactoring UI principle: **use font size, weight, and color to create hierarchy, not HTML heading levels alone.**

### Scale
Audit and enforce this type scale. Nothing outside it without a documented reason:
- **Display / hero**: `clamp(1.75rem, 4vw, 2.75rem)`, weight 700, tracking `-0.02em`
- **Section heading (h2)**: `clamp(1.25rem, 2.5vw, 1.75rem)`, weight 700
- **Card title / h3**: `1rem`–`1.0625rem`, weight 600
- **Body**: `16px`, weight 400, line-height 1.65–1.75
- **Label / eyebrow**: `11px`–`12px`, weight 600, `letter-spacing: 0.07em`, uppercase
- **Caption / meta**: `12px`–`13px`, weight 400, color `#888`

### Common issues to fix
- Body text color should be `#555` or `#666`, never `#000` or `#333` (too harsh).
- Section eyebrow labels (e.g. "CASE STUDY", "COMPANY IMPACT") should use the label scale above.
- Stat values (`case-study-stat-card__value`) — `2rem` is correct, check line-height is `1`.
- Make sure `case-study-hook` (the large quote below the title) is clearly visually distinct from body — it should be the largest text in the header after the title.

---

## Section 3 — Color and contrast

- **Primary text**: `#111` for headings, `#555`–`#666` for body. Not flat `#000`.
- **Muted / meta text**: `#888`–`#999`. Check captions and role lines use this.
- **Terracotta accent** (`var(--lumen-terracotta)`, approximately `#c0533a`): used for CTAs, active nav, eyebrow labels, stat values, and dot indicators only. Remove from places it appears as background without enough contrast.
- **Borders**: use `rgb(0 0 0 / 0.08)` or `#ebebeb` for hairline borders. Not `#d4d4d4` (too heavy) or `#f0f0f0` (too light).
- **Card backgrounds**: `#ffffff` with `border: 1px solid #ebebeb`. Not grey backgrounds unless intentional (e.g. impact box uses `#fafafa`).
- **Shadows**: offset shadows feel more designed than symmetric ones. Use `0 4px 16px rgb(0 0 0 / 0.07)` on cards. Use `0 1px 3px rgb(0 0 0 / 0.06)` for subtle lift. Never pure black shadows.

---

## Section 4 — Transitions and motion

All interactive elements should feel responsive without being flashy. The standard:

```css
transition: <property> 200ms ease;
```

Use `150ms` for small state changes (color, opacity). Use `200ms–250ms` for size/shadow changes. Use `300ms` for larger layout transitions if any.

### Required transitions
Audit every interactive element. Add transitions where missing:

- **NavBar pill**: `box-shadow` and `background` on scroll state change (if implemented)
- **Case study cards**: `box-shadow` and `border-color` on hover — 200ms ease
- **CTA links / buttons**: `opacity` or `color` on hover — 150ms ease
- **Pager cards**: `box-shadow` and `border-color` on hover — 200ms ease
- **Nav links**: `color` and `opacity` on hover — 150ms ease
- **About section photo frames**: `transform: scale(1.01)` on hover (subtle) — 250ms ease

### No janky layout shifts
- Images should always have explicit `aspect-ratio` so they don't cause layout shift on load. Audit all `<img>` tags without an aspect ratio set.
- Add `loading="lazy"` to all below-fold images.

---

## Section 5 — Responsive layout

Test at: 375px, 640px, 768px, 1024px, 1280px.

### Things to check at 375px
- NavBar: pill should not overflow. Logo and hamburger should be visible with breathing room.
- Home page hero: name and title should not wrap past 2 lines.
- Case study cards: full width, text not clipped.
- Case study title (`case-study-title`): `clamp()` should prevent wrapping past 2 lines.
- About page: family collage and team collage should stack below text, not side by side.
- Contact page: email button should not overflow its container.
- Stat grid (`case-study-stat-grid`): cards should wrap, not overflow. Set `flex-wrap: wrap` and `min-width: 0`.

### Things to check at 640px+
- Two-column layouts (home case study grid, capability grid) should activate cleanly.
- Nav links should appear, hamburger should hide.

### Things to check at 1024px+
- About work section: team collage should appear sticky on the right.
- Case study split layouts should go 2-column.
- Max-width containers should be centered with consistent horizontal padding.

---

## Section 6 — Specific component fixes

### Home page case study cards
- Thumbnail `aspect-ratio: 16/9` — confirm `object-fit: cover` and `object-position: center top` are set.
- Card hover: `translateY(-2px)` and shadow lift — 200ms ease. Currently may be missing the translate.
- "Read case study →" CTA: should be terracotta on hover, not just underlined.

### Case study hero image
- `aspect-ratio: 16/7` on desktop — check it's not collapsing on mobile. Should fall back to `aspect-ratio: 4/3` on mobile for tall images.
- `object-position: center top` — confirm this is set so screenshots show the UI, not whitespace.

### Case study stat cards
- Should have consistent width. On mobile, 2-across grid (not 1-across). Use `grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))` instead of flex.

### NavBar
- Glass pill shadow should be more refined: `0 2px 20px rgb(0 0 0 / 0.08)`.
- Active nav link: terracotta color only, no underline or background.

### Footer / contact section on home page (if present)
- Should have generous top padding (`5rem`+) to feel like a section break, not an afterthought.

---

## Section 7 — What "buttery smooth" actually means

After all the above, do a final pass for feel:

1. **Whitespace generosity**: When in doubt, add more space. Sections that feel cramped should get `padding-top` increased by `1rem`.
2. **Consistent rhythm**: Every section should have the same top padding. Don't let some sections feel taller than others for no reason.
3. **No orphan elements**: Single words on their own line in headings look bad. Check that `max-width` on text blocks prevents this.
4. **Hover feedback on everything clickable**: If a user can click it, they should see something change on hover. Audit all `<a>` and `<button>` elements.
5. **Focus states**: Every interactive element needs a visible focus ring for keyboard navigation. Use `outline: 2px solid var(--lumen-terracotta); outline-offset: 3px;`.

---

## Files to edit

Primary CSS: `src/pages/Home.css`
Component styles: check inline Tailwind classes in JSX files under `src/components/portfolio/` and `src/pages/`
Do not edit: `src/components/lumen/` (design system primitives)

## How to verify

After each section of changes, visually check the page at 375px and 1280px. The test for "buttery smooth": scroll the page from top to bottom and notice if anything catches your eye as wrong. If it does, fix it before moving on.
