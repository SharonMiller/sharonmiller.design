# Layout Guidelines — sharonmiller.design
# Reference this file before making any layout, 
# spacing, typography, or responsive decisions.

---

## Core Principles

- Max content width: 900px (max-w-4xl) everywhere
- Mobile first: design for 375px, enhance for desktop
- Nothing touches screen edges: minimum px-5 on mobile
- No arbitrary pixel values — use Tailwind scale only
- No hardcoded colors — use lumen tokens or Tailwind grays
- No placeholder content in any committed code
- No em dashes in copy

---

## Breakpoints

Mobile: 0–767px (default)
Tablet: 768px–1023px (md:)
Desktop: 1024px+ (lg:)

---

## Page Layout

Outer wrapper: max-w-4xl mx-auto px-5 md:px-8
Section spacing: py-12 md:py-20
Between elements: space-y-4 to space-y-8
Card padding: p-5 md:p-8

---

## Navigation

Desktop:
  Height: h-14
  Left: "SM" monogram in lumen-terracotta, font-bold
  Right: Home · Work · Work history · About · Contact
  Link style: text-sm font-medium text-gray-600
  Active: text-lumen-terracotta
  On scroll: bg-white/90 backdrop-blur-sm 
    border-b border-gray-100 transition-all duration-200

Mobile:
  Left: "SM" monogram
  Right: hamburger icon (three lines)
  Tap hamburger: full-width dropdown
    bg-white border-b border-gray-100
    Each link: py-3 px-5 text-base
    Tapping a link closes the menu

---

## Typography Scale

Desktop → Mobile

Page name (h1 hero):
  Desktop: text-5xl font-bold tracking-tight
  Mobile: text-3xl font-bold

Section heading (h2):
  Desktop: text-2xl font-bold
  Mobile: text-xl font-bold

Case study title:
  Desktop: text-4xl font-bold
  Mobile: text-2xl font-bold

Body text:
  text-base leading-relaxed text-gray-700
  Same on mobile and desktop

Caption / label:
  text-sm text-gray-400

Nav links:
  text-sm font-medium

Never use more than 3 font sizes on one page.

---

## Images

Profile photo (intro/home):
  Desktop: 
    width: 280px fixed
    aspect-ratio: 3/4 (portrait)
    object-fit: cover
    border-radius: rounded-2xl
    float right in col-span-2 of 5-col grid
  Mobile:
    width: 160px
    aspect-ratio: 1/1
    border-radius: rounded-full
    centered above text
    margin-bottom: mb-6

Case study thumbnail (home page card):
  width: 100%
  aspect-ratio: 16/9
  object-fit: cover
  object-position: top
  border-radius: rounded-xl rounded-b-none
  Never stretch or distort

Case study hero image (case study page):
  Desktop:
    max-width: 420px
    aspect-ratio: 4/3
    object-fit: cover
    float right, ml-8 mb-6
    border-radius: rounded-xl
  Mobile:
    width: 100%
    aspect-ratio: 16/9
    object-fit: cover
    display block above text
    border-radius: rounded-xl
    margin-bottom: mb-6

Inline case study images (body of case study):
  width: 100%
  max-width: 800px
  aspect-ratio: 16/9
  object-fit: cover
  object-position: top
  border-radius: rounded-xl
  margin: my-8 mx-auto
  display: block

Work history photos:
  Grid of 2 on mobile, 3 on desktop
  aspect-ratio: 1/1
  object-fit: cover
  border-radius: rounded-xl

Never let images overflow their container.
Always set object-fit: cover on all images.
Always set explicit aspect ratios.

---

## Two Column Layouts

Intro section (home page):
  Desktop: grid grid-cols-5 gap-12
    Text: col-span-3
    Photo: col-span-2
  Mobile: flex flex-col
    Photo first, centered, rounded-full 160px
    Text below

Case study hero (case study page):
  Desktop: flex flex-row gap-8 items-start
    Text: flex-1
    Image: w-[420px] shrink-0
  Mobile: flex flex-col
    Image first, full width
    Text below

About page tools section:
  Desktop: grid grid-cols-2 gap-12
  Mobile: single column

---

## Case Study Cards (home page)

Layout: stacked vertically, full width
Max width: max-w-4xl
Gap between cards: gap-6

Each card:
  bg-white border border-gray-200 rounded-2xl
  overflow-hidden
  hover: shadow-md -translate-y-0.5 
  transition-all duration-200 cursor-pointer

Image area (top):
  width: 100%
  aspect-ratio: 16/9
  object-fit: cover
  object-position: top
  bg-gray-100 (fallback if no image)

Text area (below image):
  padding: p-6
  Label: text-xs font-semibold uppercase 
    tracking-wider text-lumen-terracotta mb-2
  Title: text-xl font-bold text-gray-900
  Year: text-sm text-gray-400 ml-2 (inline with title)
  Description: text-sm text-gray-600 
    leading-relaxed mt-2 max-w-prose
  Metrics row: mt-4 flex gap-6 flex-wrap
    Each metric: 
      Number: text-base font-bold text-gray-900
      Label: text-xs text-gray-500 block
  Link: mt-4 text-sm font-medium 
    text-lumen-terracotta inline-flex 
    items-center gap-1
    Hover: gap-2 transition-all duration-200

---

## Case Study Page Layout

Max width: max-w-3xl mx-auto
Header area: pt-16 pb-8
  "Case study · Year" — text-sm text-gray-400
  Title — text-4xl md:text-5xl font-bold mt-2
  Summary paragraph — text-lg text-gray-600 
    leading-relaxed mt-4 max-w-xl
  Hero image — float right on desktop, 
    full width above on mobile

Body sections:
  Each section: mt-16
  Section heading (h2): 
    text-2xl font-bold mb-6
    With horizontal rule dividers 
    (like UXfolio: line — heading — line)
  Body paragraphs: space-y-4 text-base 
    leading-relaxed text-gray-700
  Inline images: my-8 full width rounded-xl

Three column approach breakdown:
  Desktop: grid grid-cols-3 gap-8
  Mobile: single column space-y-6
  Each column: heading text-base font-semibold 
    + bullet list text-sm text-gray-600

Metrics/outcomes:
  Display as a simple row of stats
  Each stat: large number + small label below
  font-bold text-2xl for number
  text-sm text-gray-500 for label

Back to home link:
  Top of page, below nav
  "← Back to home" 
  text-sm text-gray-500 hover:text-gray-900
  transition-colors duration-200

---

## About Page

Max width: max-w-2xl mx-auto
py-20

Structure:
  "About" — small terracotta label
  Name — h1
  Bio paragraphs — space-y-4
  Divider — border-t border-gray-100 my-8

Tools section:
  "Day to day" — text-sm font-semibold 
    text-gray-900 mb-3
  Tags: flex flex-wrap gap-2
  Each tag: text-sm px-3 py-1 rounded-full
    bg-gray-100 text-gray-700 
    border border-gray-200

  "Background" — same treatment

Availability card:
  mt-8 p-5 rounded-2xl border border-gray-200
  Terracotta dot + "Available" + description

---

## Contact Page

Max width: max-w-lg mx-auto
text-center
py-20

"Let's connect:" — text-2xl font-bold mb-8

Email button:
  lumen-btn-primary (terracotta)
  full email address as button text
  rounded-xl (not rounded-full)
  width: auto, not full width

Links below:
  LinkedIn · GitHub
  text-sm text-gray-500
  hover: text-gray-900
  gap-6 flex justify-center mt-6

---

## Transitions and Interactions

See **[motion.md](./motion.md)** for implementation details (Lenis, reveals, route fade).

Summary:

- **Micro** (150–250ms): hovers, buttons, nav links
- **Macro** (450ms ease-out): scroll reveals (`.lumen-reveal--lift`), route fade (`.page-route`)
- **Scroll reveal:** `.lumen-reveal` + optional `data-reveal-index` (80ms stagger); Intersection Observer via `useScrollReveal`
- **Hover:** case study cards lift; capability cards `scale(1.01)`; respect `prefers-reduced-motion`

---

## What to Never Do

- Never use arbitrary values like w-[347px]
- Never hardcode hex colors
- Never let content bleed past max-w-4xl
- Never use font sizes outside the scale above
- Never stack more than 2 columns on mobile
- Never use placeholder text in committed code
- Never use em dashes in copy
- Never use "coming soon" anywhere
- Never have dead links — if page not built 
  yet, link to #contact with a TODO comment
- Never use backdrop-filter on elements 
  that don't have a colored background behind them
