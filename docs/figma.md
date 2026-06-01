# Figma — design system reference

**File:** // TODO: add your Figma file URL  
**File key:** _(from your Figma URL)_

---

## Reading the Figma file

**Green circle icon = ready to use.** Components and patterns marked with a green circle are approved and stable — these are the ones to implement. If a component doesn't have a green circle, treat it as in-progress or experimental and check with the design team before building from it.

---

## Decision order

Always follow this sequence before writing custom code:

**1. Tailwind + design tokens first**  
Use utilities and `var(--ds-*)` from this repo. Don't reimplement spacing, color, or type that already exists in `tailwind.config.js` or `src/index.css`.

**2. Figma library second**  
The Figma file contains **larger patterns and organisms** — page headers, navigation, card layouts, form flows, overlays. Use `get_design_context` with a node URL, then implement with Tailwind and `--ds-*` tokens.

Only reference pages marked 🟢. Pages marked 🟡 or 🚧 are in progress — check with the design team before building from them.

**3. Custom CSS last**  
Only when genuinely absent from both Tailwind and Figma: layout-only rules, data visualization, or prototype-only chrome.

---

## Pages

🟢 = ready to use · 🟡 = in progress · 🚧 = under construction

| Section | Status | Node | Link |
|---------|--------|------|------|
| Typography | 🟢 | `7-4` | // TODO: add your Figma file URL |
| Colors & tokens | 🟢 | `4477-15416` | // TODO: add your Figma file URL |
| Spacing | 🟢 | `7-6` | // TODO: add your Figma file URL |
| Spacing / Radius | 🟢 | `7-7` | // TODO: add your Figma file URL |
| Icons | 🟢 | `7-8` | // TODO: add your Figma file URL |
| Logos | 🟢 | `7-9` | // TODO: add your Figma file URL |
| Buttons and toolbars | 🟢 | `7-10` | // TODO: add your Figma file URL |
| Chips, Badges, Filters and Pills | 🟢 | `7-12` | // TODO: add your Figma file URL |
| Inputs, Selectors, controls | 🟢 | `7-13` | // TODO: add your Figma file URL |
| Headers, Nav, Tabs | 🟢 | `7-14` | // TODO: add your Figma file URL |
| Modals, popovers, overlays | 🟢 | `348-2978` | // TODO: add your Figma file URL |
| Avatar | 🟡 | `7017-3` | // TODO: add your Figma file URL |
| Splash Screens | 🟢 | `5948-916` | // TODO: add your Figma file URL |
| App Icons | 🟢 | `7738-1026` | // TODO: add your Figma file URL |
| Dashboard cards | 🚧 | `6965-4350` | // TODO: add your Figma file URL |

---

## Using the Figma MCP in Cursor

With the Figma MCP configured (see [README → Figma MCP](../README.md#figma-mcp)), paste a node URL into a Cursor Agent chat:

```
Pull the design context for // TODO: add your Figma file URL
```

The agent uses `get_design_context` to return specs, token names, and reference code. Treat the output as a **reference** — map it to Tailwind classes and `var(--ds-*)` tokens rather than using generated raw HTML or CSS directly.

---

## Concept Figma file

_(Add your concept's Figma file URL when you create it.)_

| What | Link |
|------|------|
| Concept file | // TODO: add your Figma file URL |
| Key frames for eng handoff | _(paste node URLs)_ |
