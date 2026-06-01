# Three-Environment Setup (PDLC)

This project follows a three-stage design product lifecycle with a dedicated Vercel deployment per stage.

---

## Overview

| Stage | Branch | Vercel project | Who uses it | Purpose |
|-------|--------|----------------|-------------|---------|
| **WIP** | `wip` | `concept-wip` | Designer, PM | Active daily iteration — rough edges OK |
| **Concept Testing** | `concept-testing` | `concept-testing` | User research, stakeholders | Stable enough for research sessions and reviews |
| **Eng Ready** | `eng-ready` | `concept-eng-ready` | Engineering | Polished handoff — changelog generated, Figma linked |

---

## Vercel project setup

Each stage is a separate Vercel project connected to the **same GitHub repo**, deploying from a different branch.

### For each project

1. Vercel → **Add New… → Project** → import this repo.
2. Under **Git → Production Branch**, set to the correct branch (`wip`, `concept-testing`, or `eng-ready`).
3. **Framework:** Vite (auto-detected).
4. **Build command:** `npm run build` (default from `vercel.json`).
5. **Output directory:** `dist`.
6. Add environment variables (see below), then deploy.

### Environment variables per project

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_VERCEL_URL` | This project's own deployment URL (for self-referencing links) | Optional |

---

## Branch promotion workflow

```
wip  →  concept-testing  →  eng-ready  →  main
```

### Promote WIP → Concept Testing

```bash
git checkout concept-testing
git merge wip
git push origin concept-testing
```

Vercel auto-deploys on push. Share the `concept-testing` URL with research participants.

### Promote Concept Testing → Eng Ready

```bash
git checkout eng-ready
git merge concept-testing
git push origin eng-ready
```

Then run the **eng-ready-release** skill (`.cursor/skills/eng-ready-release/SKILL.md`) to generate the changelog and optionally push to Figma.

### Archive to `main`

Once the concept is fully handed off:

```bash
git checkout main
git merge eng-ready --no-ff -m "eng-ready: [concept name] — [date]"
git push origin main
```

---

## Local development

Always develop on `wip` (or a feature branch off `wip`). Never commit directly to `concept-testing` or `eng-ready`.

```bash
git checkout wip
npm run dev    # http://localhost:5173
```

---

## Notes

- Preview deployments: Vercel creates preview URLs for every push. These are useful for async reviews but are not the same as the staged environments above.
- `main` is the template baseline. It should always be clean enough to fork a new concept from.
