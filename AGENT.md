# AGENT.md

Guidance for AI coding agents working in this repository.

## Project Overview

This is a personal portfolio site built with Create React App.

- Framework: React 19 with `react-scripts`
- Routing: `BrowserRouter` from `react-router-dom`, with a GitHub Pages SPA redirect (`public/404.html` + decoder script in `public/index.html`)
- Styling: Tailwind CSS plus global utilities in `src/index.css`
- Animation: Framer Motion, with shared variants in `src/constants/animations.js`
- Icons: `react-icons`
- Deployment: GitHub Pages via `gh-pages`

The production homepage is configured as `https://athulbaburaj.github.io`.

## Common Commands

Run commands from the repository root.

```bash
npm start
npm run build
npm test
npm run deploy
```

Use `npm start` for local development at `http://localhost:3000`.

Use `npm run build` before considering user-facing changes complete. It catches React, Tailwind, import, and bundling problems.

`npm test` runs the Create React App test runner in watch mode. For non-interactive agent verification, prefer:

```bash
npm test -- --watchAll=false
```

Do not run `npm run eject` unless the user explicitly asks for it.

## Repository Layout

- `src/App.js`: top-level app shell, router, page transitions, and layout wrapper.
- `src/index.js`: React entrypoint.
- `src/index.css`: Tailwind imports, base styles, and custom utilities.
- `src/components/`: reusable UI pieces such as `Navbar`, `Hero`, `Footer`, modals, grids, and visual sections.
- `src/pages/`: route-level pages.
- `src/constants/animations.js`: shared Framer Motion animation variants.
- `src/data/resumeData.js`: portfolio/resume/project data.
- `src/utils/GameEngine.js`: simulation/game-related logic.
- `public/`: static files, PDFs, favicons, and project images referenced by public paths.
- `build/`: generated production build output. Do not edit this by hand.

## App Structure

Routes live in `src/App.js` inside `AppRoutes`.

The app uses `BrowserRouter`, so route links are ordinary React Router paths such as `/projects`, `/about`, and `/contact`, and they render as real URLs (no `#/` prefix). This is a root-domain GitHub Pages site (`https://athulbaburaj.github.io`), so no `basename` is configured.

GitHub Pages serves static files and has no server-side rewrite rule, so a direct hit or refresh on a deep link like `/projects` would 404 without help. This repo uses the standard "spa-github-pages" (rafgraph) technique to fix that:

- `public/404.html` — GitHub Pages serves this for any unknown path. It encodes the requested path into a query string (`/?/projects`) and redirects to `/`.
- `public/index.html` — has a small decoder script in `<head>`, before the app's bundled scripts, that reads that query string and restores the real URL via `history.replaceState` before React Router mounts.

Do not remove either half of this pair, and do not switch back to `HashRouter` without also removing them.

The main shell includes:

- `Navbar`
- animated route content wrapped in `ErrorBoundary`
- `Footer`

Keep route-level composition in `src/pages/` and reusable visual or interactive pieces in `src/components/`.

## Layout: the intrinsic system

The layout responds to the space it is given, not to a fixed set of viewport breakpoints. **Do not use `md:grid-cols-*` or similar breakpoint classes for structural layout** — use the classes below, defined in the INTRINSIC LAYOUT SYSTEM block at the bottom of `src/index.css`.

Two mechanisms:

1. **Fluid scaling.** Type and spacing are `clamp()` expressions interpolating between a 20rem and 96rem viewport, so nothing jumps.
2. **Container queries, not media queries.** Structural switches use `@container`, so a component re-arranges based on its own available width and keeps working wherever it is nested.

### Classes

- **`.shell`** — the page column. Declares width and horizontal padding, and is the *only* place they are declared. Used in `App.js` and mirrored in `Navbar` (which is `fixed`, so it sits outside the wrapper). Never add `max-w-*`, `mx-auto` or `px-*` to a page or section.
- **`.flow`** — establishes `container-type: inline-size`. **Required** on each page wrapper: without a `.flow` ancestor, every `@container` query below silently never fires and the layout stays permanently single-column.
- **`.kv`** — label/value row. Stacks when narrow, becomes a label gutter plus content at 34rem. Set the gutter per instance with `style={{ '--label': '8rem' }}`; default is `8rem`.
- **`.entry`** — project entry, with children `.entry-meta`, `.entry-body` and `.entry-media`. One column when cramped; meta gutter plus body at 38rem; at 56rem a third track appears and the media moves beside the text so wide viewports gain density rather than margin.
- **`.autogrid`** / **`.autogrid-wide`** — `auto-fit` grids whose column count derives from available width. For repeated short items (education, certifications).
- **`.t-label` `.t-small` `.t-body` `.t-lead` `.t-h3` `.t-h2` `.t-h1`** — fluid type scale. Use these instead of Tailwind `text-*` sizes. Never apply both to one element; the cascade result is arbitrary.
- **`.section`** / **`.section-tight`** — fluid block padding. Small per-row paddings (`py-3`, `py-5`) stay as Tailwind utilities; those are row rhythm, not section spacing.
- **`.measure`** — 68ch cap for running prose.

### Container query thresholds

Keep the arithmetic in mind before changing a threshold. `.shell` caps at 76rem; minus padding that leaves roughly 70rem of container. A threshold above ~62rem is therefore unreachable and the state will never fire. This was a real bug: `.entry`'s widest state was originally set at 62rem against a 68rem shell, leaving an 8px window in which it could apply.

### Other layout rules

- `min-h-screen` belongs only to the App root. Adding it to a page forces an extra viewport of empty space.
- Vertical rhythm lives on `main` (`pt-24`, which clears the fixed 80px navbar, plus fluid bottom padding).
- The scrollbar is deliberately **visible** (styled thin and dark in `index.css`). It is the only scroll-position feedback on the site since the progress bar was removed. Do not hide it again.
- There must be exactly **one `<h1>` per page**, and it must contain a complete phrase. The Hero previously split its headline across two `<h1>` elements, which made the homepage heading read as two meaningless fragments to crawlers and screen readers.

## Styling Conventions

Prefer Tailwind utility classes for layout and visual styling.

**Typography is a deliberate two-family system.** Headings and prose use Instrument Sans, a proportional display/text face; JetBrains Mono is reserved for metadata — eyebrows/kickers, small uppercase labels, case-study field labels, disclosure summaries, years, dates, periods, grades, tech lists, and identifiers like the email address. Both are loaded from a single combined Google Fonts `<link>` in `public/index.html` (Instrument Sans variable 400–700 plus italic; JetBrains Mono 400/500). `tailwind.config.js` maps `fontFamily.sans` to the Instrument Sans stack and `fontFamily.mono` to the JetBrains Mono stack, so `font-sans` (the Tailwind default — applied once, on `body`) renders the proportional face everywhere, and `font-mono` is the explicit opt-in class used only on metadata elements. Monospace is no longer the default; it's a signal, and it should read as one — do not add `font-mono` to headings, titles, prose, CTAs, nav links, or case-study field values. `fontSize` (`tailwind.config.js`) is sized for the proportional face's larger apparent size at the same pixel value, topping out at `text-7xl` (3.5rem); the fluid `--step-*` scale in `src/index.css` was raised roughly 10–12% over its mono-era values for the same reason — proportional type reads smaller than monospace at a given size, so the steps compensate rather than looking undersized. Body text sets `line-height: 1.65` globally (`src/index.css`) and carries no explicit `letter-spacing` — the `letter-spacing: 0.01em` mono accommodation was removed because proportional type doesn't need the extra tracking monospace does at body sizes.

**The `.measure` utility (`max-width: 68ch`) caps running prose.** Apply it to any paragraph-length block of body copy. Proportional glyphs are narrower than monospace's fixed advance width, so the same character count reads as a narrower block — 68ch is comfortable where the old monospace design needed a tighter 62ch cap to stay readable.

Use the project theme tokens from `tailwind.config.js` instead of hardcoded near-equivalents:

- Backgrounds: `bg-ground` (`#0B0B0B`, page background), `bg-surface` (`#131313`, reserved for rare cases that need a background step above ground — most components need none at all now that card chrome is gone).
- Text — four levels, contrast-checked against `#0B0B0B`:
  - `text-primary` (`#D8D8D4`, 13.6:1) — headings, high-emphasis text.
  - `text-secondary` (`#9A9A95`, 6.8:1) — body copy, supporting text.
  - `text-muted` (`#7E7E79`, 4.8:1) — labels, keys, metadata, eyebrow/kicker text, icons. Must stay legible — this is the floor for anything a user needs to read.
  - `text-faint` (`#55554F`) — rules and decoration ONLY (dividers, index numbers, underline color for links). Never use for text that carries meaning; it is not contrast-checked as body text.
- Borders — two weights only:
  - `border-hairline` (`rgba(255,255,255,0.07)`, also available as `bg-hairline` for 1px rule divs) — default dividers.
  - `border-edge` (`rgba(255,255,255,0.14)`) — hover/emphasized borders.
- Accent: `#8C7CDB`, used as `text-accent` / `border-accent` (`bg-accent` only for `::selection`-style micro-uses, if ever).

**Accent discipline is a hard rule, not a preference.** The accent color appears in exactly two places, site-wide:
1. Text links, including their `:hover` state.
2. The `:focus-visible` outline (defined globally in `src/index.css`).

Nowhere else. Not tab underlines (use `border-primary` for the active state), not hover sweeps or icon hovers (use `border-faint`/`text-primary` or a neutral transition), not CTA fills, not decorative dots or glows, not `::selection` (that's `selection:bg-primary/20`, not accent). Target is roughly 4–8 total `text-accent`/`bg-accent`/`border-accent` occurrences across all of `src/` — before adding a new one, run `grep -roh "\(text\|bg\|border\)-accent[a-z/0-9-]*" src/ | wc -l` and ask whether this is genuinely a text link or the focus ring. If it isn't one of those two things, it doesn't get the accent.

**The label/value grid is the core layout device.** Wherever the design shows a label paired with its content (a kicker + heading, a category + description, a date + entry, a field name + field value), lay it out as `grid md:grid-cols-[120px_1fr]` (fixed-width label column, roughly 100–120px) with the two stacking on mobile. Label cell gets `text-muted`, small, letter-spaced (and `uppercase` if it's short — see below); value cell gets `text-secondary` or `text-primary` depending on emphasis. This pattern replaces the old card grid across `Philosophy`, `TechStack`, `ProjectArchive`, `HomePage`'s featured list, `AboutPage`, `ResumePage`, `ProjectsPage`'s case-study fields, `ContactPage`, and `SecretDocPage`. Reach for it before inventing a new layout shape.

**`uppercase` is reserved for short labels and keys — single words, 1–3 words max** (e.g. "Profile", "Expertise", "View source"). Never apply `uppercase` to a sentence, a description, a joined multi-item list (like a tech-tag list that can grow long), or a multi-word content title (project titles, article titles, pillar titles). All-caps monospace is materially harder to read than all-caps proportional type, so what was tolerable as a stylistic flourish in the old design is now a readability bug. If copy is already typed in caps directly in JSX (e.g. the Hero headline text), that's authored content, not a CSS transform — leave it as written; the rule above is about not applying `uppercase` via class to text that isn't already short.

**Rules are CSS borders, never box-drawing characters.** Use `border-t border-hairline` / `border-b border-hairline` (or a `bg-hairline` 1px div) for every divider and separator. Do not use `─`, `═`, `│`, `┌`, `└`, or similar Unicode box-drawing glyphs — they don't reflow at narrow widths and will overflow on mobile. This also isn't a terminal costume: no fake shell prompts (`$ `, `> `), no blinking cursors, no ASCII banners, no window chrome.

The site has no rounded corners. Do not add `rounded-sm`/`rounded-md`/`rounded-lg`/`rounded-full` anywhere — even the old timeline-dot and loading-pulse circles were removed as part of the plain-text pass.

**Card chrome is gone.** Do not add `bg-surface` panels, `border` boxes around content blocks, `backdrop-blur`, drop shadows, or hover-elevate treatments. Structure comes from alignment (the label/value grid above), hairline rules, and whitespace — never from a box. When a component used to be "a card," it is now a row separated from its neighbors by `border-b border-hairline` and internal padding.

Global utilities that still exist in `src/index.css`:

- `.accent-underline` — underline treatment for emphasized text links (accent-colored decoration; keep its use scoped to actual links, per the accent-discipline rule above).
- `.measure` — `max-width: 68ch`, for running prose.
- `.font-hero` — `font-weight: 700; letter-spacing: -0.02em; line-height: 1.05;`, used on the large headline treatment (Hero, and page `<h1>`s that mirror it). The negative tracking is standard practice for a proportional display face at large sizes; it would break monospace's fixed advance width, which is why body/heading text elsewhere is left untracked and only this display treatment gets it.
- `.text-balance`

Reuse these when they match the design. Add new global CSS only when Tailwind utilities would be awkward or when the behavior is intentionally shared across components.

The visual style is a "man page" / RFC aesthetic: dark, near-monochrome, information-dense, and restrained, with a single deliberate accent color used only for links and focus. Avoid unrelated palettes, decorative card-heavy layouts, and large styling rewrites unless requested.

The site is deliberately text-forward and minimal. There is no ambient/decorative canvas background (`InteractiveGrid` and `NeuralNetwork` were removed) and no card-plus-modal pattern for content (`ProjectDetailsModal` was removed — see Animation Conventions and Project Data below). Content should be legible and present without requiring hover or click interaction to reveal it. Before adding a new decorative layer (canvas background, modal, hover-reveal card), ask whether the content could instead just be on the page.

## Animation Conventions

Use Framer Motion sparingly. The site deliberately avoids scroll-triggered reveals (`whileInView`) and page-load stagger animations (`initial="hidden"` / `animate="visible"` container+item variants) — content is simply present on mount, not animated into view. Do not reintroduce these patterns.

Exactly two animated moments are considered deliberate and should be preserved:

1. The Hero clip-reveal in `src/components/Hero.js` (headline lines sliding up via `heroContainerVariants` / `heroItemVariants` from `src/constants/animations.js`).
2. The route transition in `src/App.js` (`AnimatePresence` + the locally defined `pageVariants`/`pageTransition`) — it masks the `React.lazy` Suspense flash between routes.

`src/constants/animations.js` only exports `heroContainerVariants` and `heroItemVariants` now — `pageContainerVariants`, `pageItemVariants`, `sectionContainerVariants`, and `sectionItemVariants` were removed as part of the minimalism pass since every consumer (`AboutPage`, `ContactPage`, `ResumePage`, `Philosophy`, `TechStack`, `ProjectArchive`) had its page-load stagger stripped out. If you reintroduce a staggered reveal, add the variant back deliberately rather than assuming it still exists.

Card hover states (project entries, resume timeline, etc.) should stay to affordance only: border/text color change and, where already present, an arrow-icon rotation. Do not add `whileHover`/`whileTap` springs, image scale-on-hover, or tint-overlay divs — those were removed sitewide.

Keep animations responsive and subtle. Avoid adding complex motion that can interfere with readability, navigation, or layout stability.

## Project Data

Projects render as inline case studies on `ProjectsPage`, not cards behind a modal — there is no `ProjectDetailsModal`. Each non-archived project in `src/data/resumeData.js` renders as a stacked entry (meta line, title, summary, optional image, and the `problem`/`role`/`approach`/`outcome` fields) separated by `border-hairline` rules. Each of those four fields renders only when it is a non-empty string — most are still blank in the data, so new project entries can leave them empty without producing orphan labels. `HomePage`'s featured-projects section stays a lighter preview list (label/value rows, no images) that links to `/projects` rather than duplicating the full case study.

## Data and Assets

Project and resume content is centralized in `src/data/resumeData.js`. Prefer updating data there rather than hardcoding repeated content inside components.

Static public assets live under `public/` and can be referenced with public paths. Existing project images are grouped under `public/images/...`.

Do not edit generated build assets directly. Change source files, then rebuild.

## Component Guidelines

- Use function components and hooks.
- Keep components focused on one responsibility.
- Preserve existing import style and file naming.
- Use `Link` from `react-router-dom` for internal navigation.
- There are no card or modal patterns in this codebase — use the label/value grid described in Styling Conventions before inventing a new layout shape.
- Keep accessibility in mind for buttons, links, alt text, and focusable controls.
- Do not remove the `ErrorBoundary` or top-level layout wrappers without a specific reason.

## Validation

For most changes, run:

```bash
npm run build
```

For logic or component behavior changes, also run:

```bash
npm test -- --watchAll=false
```

When making visual changes, start the dev server and inspect the affected route in a browser. Check both desktop and mobile widths for text overflow, overlapping elements, broken images, and animation issues.

## Git and Generated Files

Do not revert unrelated user changes.

Do not modify `node_modules/`.

Do not hand-edit `build/`; it is generated by `npm run build`.

Keep changes scoped to the requested behavior. Avoid broad formatting churn across unrelated files.
