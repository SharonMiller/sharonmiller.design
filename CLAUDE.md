# AI assistant context (index)

Some tools look for **`CLAUDE.md`** at the repo root. This project keeps canonical context in these files — **read them for grounding**:

| File | Role |
|------|------|
| [.cursor/rules/design-concept-prototype.mdc](./.cursor/rules/design-concept-prototype.mdc) | **Always:** this repo is a design prototype, not production — user testing and eng handoff |
| [.cursor/rules/use-ds.mdc](./.cursor/rules/use-ds.mdc) | **Lumen DS:** Tailwind + tokens + component patterns — use first |
| [docs/lumen-design-system.md](./docs/lumen-design-system.md) | **Lumen reference:** colors, typography, glass, component APIs |
| [src/components/lumen/](./src/components/lumen/) | **Lumen React primitives:** GlassCard, NavBar, Button, Tag, SectionHeader, StatPill |
| [knowledge.md](./knowledge.md) | Stack, conventions, never-do list |
| [prd.md](./prd.md) | Product intent and success criteria |
| [tasks.md](./tasks.md) | Current priorities and checkboxes |
| [planning/](./planning/) | Flows, screens, diagrams (blueprint) |
| [docs/figma.md](./docs/figma.md) | When to reference Figma; add your file URL and section links |
| [docs/layout-patterns.md](./docs/layout-patterns.md) | Page structure, card hierarchy, tab/toggle placement rules |
| [docs/layout-guidelines.md](./docs/layout-guidelines.md) | **Portfolio layout:** spacing, typography, responsive rules for sharonmiller.design |
| [docs/refactoring-ui-reference.md](./docs/refactoring-ui-reference.md) | Refactoring UI — principles + links (not a copy of the book) |
| [docs/ui-audit.md](./docs/ui-audit.md) | **UI quality pass:** spacing, type, motion, responsive checklist |
| [docs/motion.md](./docs/motion.md) | **Motion:** Lenis, scroll reveals, route fade, hover timing |
| [.cursor/skills/ui-audit/SKILL.md](./.cursor/skills/ui-audit/SKILL.md) | **Agent skill:** run the UI audit workflow (reads `docs/ui-audit.md`) |
| [docs/ds-audit-template.md](./docs/ds-audit-template.md) | Lumen adoption tracker — fill in as you build |
| [memory.md](./memory.md) | Bugs, wins, and past incidents |
| [decisions.md](./decisions.md) | Human-oriented decision log (optional for assistants) |

**README:** [README.md](./README.md) — setup, environments, branch workflow, Figma MCP.
