# Skill: Eng-Ready Release

**When to use:** When the concept has been polished and is ready to hand off to engineering. This skill diffs `main` vs `eng-ready`, generates a changelog, merges the branch, and optionally posts the summary to Figma via MCP.

---

## Steps

### 1. Verify you are on `eng-ready`

```bash
git status
git branch
```

The working tree should be clean and the current branch should be `eng-ready` (or the branch being promoted).

### 2. Diff `main` vs `eng-ready`

```bash
git log main..eng-ready --oneline
git diff main...eng-ready --stat
```

Read the output and identify:
- New screens or flows added
- Significant component or layout changes
- Design token / Tailwind theme changes
- Anything removed or simplified since last handoff

### 3. Generate a changelog

Write a changelog entry in `decisions.md` using the format below. Date it today.

```markdown
## YYYY-MM-DD — Eng-ready release: [concept name]

### What's in this build

- [Feature or screen A] — [one line description]
- [Feature or screen B] — [one line description]

### Key design decisions

- [Decision or tradeoff worth calling out for eng]

### Known gaps / not in scope

- [Anything intentionally deferred]

### Figma reference

- // TODO: add your Figma file URL
```

### 4. (Optional) Post to Figma via MCP

If the Figma MCP is connected, use `use_figma` or `generate_figma_design` to:
- Push a summary comment or annotation to the relevant Figma file
- Upload a screenshot of key screens if the design needs a visual snapshot

Refer to the Figma MCP skill at `/figma-generate-design` for the correct tool sequence.

### 5. Merge to `main`

```bash
git checkout main
git merge eng-ready --no-ff -m "eng-ready: [concept name] — [date]"
git push origin main
```

Use `--no-ff` to preserve a clear merge commit for the handoff boundary.

### 6. Tag the release (optional but recommended)

```bash
git tag -a eng-ready-YYYY-MM-DD -m "[concept name] eng-ready handoff"
git push origin --tags
```

### 7. Update `tasks.md`

Move the promoted items from **Now** / **Soon** to **Done (recent)** and add the release date.

---

## Notes

- This skill does not push to production — Vercel handles deploys on merge.
- If the Figma MCP is not connected, skip step 4 and note the Figma link manually in `decisions.md`.
- The `eng-ready` branch should always be deployable and reflect what was reviewed in concept testing. Do not merge WIP work directly to `eng-ready`.
