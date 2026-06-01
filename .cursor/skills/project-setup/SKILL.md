# Skill: Project Setup

**What this is:** An interactive first-time setup guide. When a designer pastes the trigger prompt, walk them through every step conversationally — check what's already there, explain what's missing, and only move forward when they confirm each step is done.

**Trigger prompt (from README):**
> "I'm setting up sandbox-design-starter-web for the first time. Please use the project-setup skill at .cursor/skills/project-setup/SKILL.md to guide me through the full setup."

---

## How to run this skill

Read this file, then follow the steps below **in order**. At each step:
- Run the relevant shell check first so you know what state the machine is in before saying anything.
- Tell the designer what you found in plain language.
- If something is missing, explain what it is and why it matters — don't just drop a command.
- Wait for confirmation before moving to the next step.

---

## Step 1 — Check prerequisites

Run these checks:

```bash
node --version
npm --version
xcode-select -p
```

**What to look for:**
- **Node:** 18 or higher. If missing or old: direct them to [nodejs.org](https://nodejs.org) → LTS download.
- **npm:** comes with Node, so if Node is fine this is fine.
- **Xcode CLI tools:** if `xcode-select -p` errors, run `xcode-select --install` and wait for the dialog. This is required for native build tools that some npm packages use.

Tell the designer what you found. If everything is already installed, say so and move on.

---

## Step 2 — Install dependencies

```bash
npm install
```

This installs React, Vite, Tailwind, Zustand, React Router, and dev tools. It should complete in under a minute.

**If it fails:** share the error output and debug together (network, Node version, permissions).

---

## Step 3 — Start the dev server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173). The designer should see the placeholder page with **"Design concept prototype"** and a subtitle.

If the browser tab is blank or there's a console error, share what you see.

---

## Step 4 — Figma MCP (optional but recommended)

The Figma MCP lets you pull design context directly from Figma frames into Cursor — useful for implementing designs against a spec.

**To set it up:**

1. Get a Figma personal access token: [figma.com → Settings → Security → Personal access tokens](https://www.figma.com/settings) → **Generate new token**.

2. In Cursor: open **Settings** (⌘,) → search **MCP** → click **Add MCP server**.

3. Add a server with:
   - **Name:** `Figma`
   - **Command:** `npx -y figma-mcp`
   - **Env:** `FIGMA_ACCESS_TOKEN` = the token you generated

4. Save and restart Cursor if prompted.

Add your design file URL in `docs/figma.md` (`// TODO: add your Figma file URL`).

Once connected, you can paste a Figma frame URL and ask Cursor to implement it using `get_design_context`.

If they want to skip this for now, that's fine — the rest of the repo works without it.

---

## Step 5 — You're ready

Once the dev server is running, point the designer to these files to orient them:

- `prd.md` — fill in the concept summary and success criteria
- `tasks.md` — update with first real screens to build
- `planning/flows.md` and `planning/screens.md` — map out the flows before coding
- `src/pages/Placeholder.jsx` — replace this with the first real screen

The Cursor rules in `.cursor/rules/` are already active — the design system and prototype context are always applied.
