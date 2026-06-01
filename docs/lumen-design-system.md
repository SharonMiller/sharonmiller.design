# Lumen Design System

**AI-native design language by Sharon Miller**  
[sharonmiller.design](https://sharonmiller.design)

Lumen is a Tailwind-first system for building calm, glass-forward product prototypes. It pairs warm stone surfaces, terracotta accents, and reusable React primitives so teams can ship testable UI quickly without a proprietary component library.

---

## Color tokens

### Tailwind (`theme.extend.colors.lumen`)

| Token | Value | Usage |
|-------|-------|--------|
| `lumen-terracotta` | `#C4704A` | Primary actions, active nav, links |
| `lumen-terracotta-light` | `#D4886A` | Hover highlights, soft accents |
| `lumen-terracotta-dark` | `#A85A38` | Pressed states, emphasis |
| `lumen-stone` | `#F5F0EB` | Page background, warm canvas |
| `lumen-charcoal` | `#1C1917` | Primary text, headings |
| `lumen-muted` | `#78716C` | Secondary text, labels |
| `lumen-glass` | `rgba(255,255,255,0.15)` | Overlays, subtle fills |

**Legacy alias:** top-level `terracotta` (`#C4704A`) remains for existing classes.

### CSS custom properties (`src/index.css`)

| Variable | Maps to |
|----------|---------|
| `--lumen-terracotta` | Brand accent |
| `--lumen-stone` | Page surface |
| `--lumen-charcoal` | Primary text |
| `--ds-interactive-primary` | Alias → terracotta (compat) |

**Examples**

```html
<div class="bg-lumen-stone text-lumen-charcoal">…</div>
<button class="bg-lumen-terracotta hover:bg-lumen-terracotta-dark">…</button>
<p class="text-lumen-muted">Supporting copy</p>
```

---

## Typography scale

**Font family:** Plus Jakarta Sans (Google Fonts, loaded in `index.html`).

| Role | Element | Tailwind |
|------|---------|----------|
| Page title | `h1` | `text-3xl font-semibold tracking-tight text-lumen-charcoal` |
| Section title | `h2` | `text-lg font-semibold text-lumen-charcoal` |
| Body | `p` | `text-base text-lumen-charcoal` |
| Secondary | `p` | `text-sm text-lumen-muted` |
| Caption | `span` | `text-xs text-lumen-muted` |
| Label | `label` | `text-sm font-medium text-lumen-charcoal` |

Use semantic HTML with utilities — avoid arbitrary `font-size` in component CSS.

---

## Glass morphism

Three utilities are registered in `tailwind.config.js`:

| Class | When to use |
|-------|-------------|
| `.glass` | Default cards, panels on `lumen-stone` backgrounds |
| `.glass-strong` | Modals, sticky headers needing more opacity |
| `.glass-panel` | Inline metrics (`StatPill`), nested overlays |

**Guidelines**

- Place glass surfaces on warm or photographic backgrounds so blur reads clearly.
- Prefer one glass layer per visual stack — avoid glass-on-glass.
- Pair with `rounded-2xl` and generous padding (`p-6`).

```jsx
import { GlassCard } from "../components/lumen";

<GlassCard variant="strong">
  <p>Content with backdrop blur</p>
</GlassCard>
```

---

## React components

Import from `src/components/lumen`:

```jsx
import {
  GlassCard,
  NavBar,
  Button,
  Tag,
  SectionHeader,
  StatPill,
} from "./components/lumen";
```

### `GlassCard`

Frosted container for grouped content.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card body |
| `variant` | `'default' \| 'strong' \| 'panel'` | `'default'` | Glass intensity |
| `as` | `string` | `'div'` | Wrapper element |
| `className` | `string` | `''` | Extra classes |

---

### `NavBar`

Top chrome: brand, links, optional actions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `string` | `'Lumen'` | Left label |
| `brandHref` | `string` | `'/'` | Brand link |
| `links` | `{ label, href, active? }[]` | `[]` | Nav items |
| `actions` | `ReactNode` | — | Right slot |
| `sticky` | `boolean` | `false` | Stick to viewport top |
| `className` | `string` | `''` | Header classes |

---

### `Button`

Primary interactive control.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Label |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Scale |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra classes |
| `type` | `string` | `'button'` | Button type |

Spreads standard `onClick`, `aria-*`, etc.

---

### `Tag`

Status or category chip.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Tag text |
| `tone` | `'neutral' \| 'terracotta' \| 'success' \| 'warning'` | `'neutral'` | Color emphasis |
| `className` | `string` | `''` | Extra classes |

---

### `SectionHeader`

Section title row with optional subtitle and action.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Heading text (`h2`) |
| `subtitle` | `string` | — | Supporting line |
| `action` | `ReactNode` | — | Right-aligned control |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Title scale |
| `className` | `string` | `''` | Wrapper classes |

---

### `StatPill`

Single metric highlight with optional trend.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Metric name |
| `value` | `string \| number` | — | Primary value |
| `trend` | `'up' \| 'down' \| 'neutral'` | — | Trend direction |
| `trendLabel` | `string` | — | Trend copy / `aria-label` |
| `className` | `string` | `''` | Extra classes |

---

## Example layout

```jsx
import {
  NavBar,
  GlassCard,
  SectionHeader,
  Button,
  Tag,
  StatPill,
} from "./components/lumen";

export function DashboardShell() {
  return (
    <>
      <NavBar
        brand="Lumen"
        links={[
          { label: "Overview", href: "/", active: true },
          { label: "Flows", href: "/flows" },
        ]}
        actions={<Button size="sm">New</Button>}
        sticky
      />
      <main className="mx-auto max-w-6xl space-y-8 p-6">
        <SectionHeader
          title="Concept overview"
          subtitle="Prototype metrics for user testing"
          action={<Tag tone="terracotta">WIP</Tag>}
        />
        <div className="flex flex-wrap gap-4">
          <StatPill label="Sessions" value={12} trend="up" trendLabel="+3 this week" />
        </div>
        <GlassCard>
          <p className="text-sm text-lumen-muted">Your first screen content.</p>
        </GlassCard>
      </main>
    </>
  );
}
```

---

## Related docs

- [layout-patterns.md](./layout-patterns.md) — page structure and card hierarchy
- [.cursor/rules/use-ds.mdc](../.cursor/rules/use-ds.mdc) — day-to-day Tailwind conventions in Cursor
