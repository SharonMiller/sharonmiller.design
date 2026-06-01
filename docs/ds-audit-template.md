# Design System Audit — [Concept Name]

**Date:** _fill in_  
**Stack:** Tailwind CSS 3 + Plus Jakarta Sans  
**Live preview:** _fill in Vercel URL_

**Canonical usage guide:** `.cursor/rules/use-ds.mdc`

---

## Summary

_(One paragraph: overall design system adoption health. What's working, what needs attention.)_

---

## What's Working ✅

- `src/index.css` imported globally in `src/main.jsx`
- Tailwind configured with stone base, terracotta accent, glass utilities
- _(List other wins as you build)_

---

## Issues to Address

### Typography

| File | Issue | Priority |
|------|-------|----------|
| _(file)_ | Inline `font-size` in CSS instead of Tailwind classes | 🔴 High |
| _(file)_ | Wrong heading level for page structure | 🟡 Medium |

### Colors

| File | Hardcoded value | Fix | Priority |
|------|-----------------|-----|----------|
| _(file)_ | `#1a1a1a` | `text-stone-900` or `var(--ds-text-primary)` | 🔴 High |

### Components

| File | Issue | Priority |
|------|-------|----------|
| _(file)_ | Unstyled `<button>` instead of shared button classes | 🔴 High |
| _(file)_ | Hardcoded hex in style prop | 🟡 Medium |

---

## Rollout Order

_(Suggest a safe order to address issues — lowest risk first.)_

1. New / isolated components
2. Single-route pages
3. Shared layout chrome
4. Heavy CSS files last

---

## Done ✅

_(Move items here as they are resolved.)_
