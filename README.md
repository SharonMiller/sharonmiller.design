# Lumen Design System — Sharon Miller

**Lumen** is an AI-native design language for building calm, glass-forward product prototypes in React. Warm stone surfaces, terracotta accents, and a small set of Lumen components help you test flows with users and hand off clear UI specs to engineering.

Full reference: [docs/lumen-design-system.md](./docs/lumen-design-system.md)  
Live site: [sharonmiller.design](https://sharonmiller.design)

---

## First time? Start here

Paste this into a new Cursor Agent chat and it will walk you through everything:

```
I'm setting up sandbox-design-starter-web for the first time. Please use the project-setup skill at .cursor/skills/project-setup/SKILL.md to guide me through the full setup — checking prerequisites, npm install, dev server, and Figma MCP.
```

---

## Quick start

```bash
git clone https://github.com/SharonMiller/sharonmiller.design.git
cd sharonmiller.design

npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Lumen components

```jsx
import { GlassCard, NavBar, Button, Tag, SectionHeader, StatPill } from "./components/lumen";
```

---

## Cursor setup

This repo ships with Cursor rules and skills aligned to **Lumen** and the design-concept workflow.

1. Open the repo folder in Cursor.
2. The rules in `.cursor/rules/` activate automatically (`alwaysApply: true`).
3. Check `.cursor/skills/` for available skills — read a skill file to activate it in a session.

| Rule | What it does |
|------|-------------|
| `design-concept-prototype.mdc` | Reminds the AI this is a prototype, not production |
| `use-ds.mdc` | Lumen Tailwind tokens, typography, glass utilities |

---

## Figma MCP

To sync designs from Figma into code:

1. In Cursor, open **Settings → MCP**.
2. Add the Figma MCP server with your Figma personal access token.
3. Use `get_design_context` with a Figma node URL.

Add your file URL in [docs/figma.md](./docs/figma.md).

---

## Three environments (PDLC)

| Stage | Branch | Vercel project | Purpose |
|-------|--------|----------------|---------|
| **WIP** | `wip` | `concept-wip` | Active iteration |
| **Concept Testing** | `concept-testing` | `concept-testing` | User research |
| **Eng Ready** | `eng-ready` | `concept-eng-ready` | Engineering handoff |

See [docs/setup-environments.md](./docs/setup-environments.md).

---

## Branch and commit workflow

```
main (template)
  └── wip
        └── concept-testing
              └── eng-ready
```

**Eng-ready release:** `.cursor/skills/eng-ready-release/SKILL.md`

---

## Build

```bash
npm run build
npm run preview
```
