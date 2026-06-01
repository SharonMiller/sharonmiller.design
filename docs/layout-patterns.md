# Layout Patterns

Reference for page structure, card hierarchy, and tab/toggle placement. Follow these patterns on every new screen.

---

## 1. Page header zone

Every page has a single header bar at the top. It always contains:

```
[Page title — h1]   [View toggle — if page-scoped]   [Primary action button]
```

| Slot | Rule |
|---|---|
| Page title | Always present. Short noun: "Jobs", "Contacts", "Settings". |
| View toggle | Only when the toggle controls the entire left list panel (e.g. LIST \| KANBAN). Use a pill-style tab control. Lives on the same horizontal plane as the title — never below it. |
| Primary action | Top-right. "NEW" button with icon. Omit if the page has no create action (e.g. Settings). |

**Never put a content-type selector or section title in the page header.** Those live at card level (see §3).

---

## 2. Left panel (list or nav)

All pages use a two-column layout: a narrower left panel and a wider right content area.

- The left panel is always a **white card with no card header of its own**. The page title (§1) serves as its label.
- Nav pages (e.g. Settings) use a nav list. Entity pages use a searchable list.
- Active item is highlighted with a filled background row.
- Search / filter controls sit inside the card, above the list.

---

## 3. Settings section heading (right panel, above cards)

**Settings-style pages only.** When a user selects a section from the left nav, a lightweight section heading (`h2`, smaller than page title) appears in the gray canvas area *above* the first card. This heading is **not inside a card** — it sits on the gray background.

**Rule:** The section heading and the first card header must never share the same name. Give the card a specific name that describes what it actually contains.

---

## 4. Content cards (right panel)

The right content area contains one or more **white cards stacked vertically** on the gray background. Each card represents one semantic group of content.

### Card anatomy

```
┌─ card ──────────────────────────────────────────────────────┐
│  card-header                                                │
│    [Card title — h2]  [ⓘ tooltip?]  [tab toggle?]           │
│  ─────────────────────────────────────────────────────────  │
│  Card body                                                  │
│    [content / fields / embedded preview]                    │
└─────────────────────────────────────────────────────────────┘
```

### Card header rules

| Element | When to include |
|---|---|
| Title (h2) | Always. Short and noun-first. |
| Content-type toggle | Only when this card contains an embedded preview with multiple types. Lives on the **same line as the card title**, right-aligned. Never below the title. |
| Action button (EDIT, NEW, etc.) | Detail-panel cards put inline actions in the card header row, right-aligned. |

### Card header component pattern

```jsx
// Standard card header
<div className="card-header flex items-center justify-between">
  <h2 className="text-lg font-semibold text-stone-900">Section name</h2>
</div>

// Card header with content-type toggle
<div className="card-header flex items-center justify-between">
  <h2 className="text-lg font-semibold text-stone-900">Templates</h2>
  <div className="flex gap-1">{/* pill tabs */}</div>
</div>
```

---

## 5. Tab / toggle placement rule

| Toggle type | Controls | Placement |
|---|---|---|
| View mode toggle (LIST \| KANBAN) | How the list panel renders | **Page header**, same line as page title |
| Content-type selector | Which piece of content is shown in the card | **Card header**, same line as card title (right-aligned) |
| Field-level toggle | A single field or option | Inline with the field row |

**The pattern: a toggle always shares the horizontal plane of whatever it controls.**

---

## 6. Heading levels

| Context | Element | Tailwind (example) |
|---|---|---|
| Page title | `h1` | `text-3xl font-semibold text-stone-900` |
| Section heading (above cards, gray canvas) | `h2` | `text-2xl font-semibold text-stone-900` |
| Card title | `h2` | `text-lg font-semibold text-stone-900` |
| Toolbar item name (inside preview card) | `h3` | `text-base font-semibold text-stone-900` |
| Subsection label | `h4` | `text-sm font-medium text-stone-700` |

---

## 7. Empty states

- Short, honest copy. Optional single action. Avoid dashed "fake fields" unless they teach an affordance.
- One primary path to "Create X" per section — don't mirror the same CTA in the header and in an empty state.

---

## Related

- [refactoring-ui-reference.md](./refactoring-ui-reference.md) — density and hierarchy principles
- [.cursor/rules/use-ds.mdc](../.cursor/rules/use-ds.mdc) — Tailwind typography and tokens
