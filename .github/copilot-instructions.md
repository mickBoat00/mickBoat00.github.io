# Copilot / AI Agent Instructions for this repository ✅

Purpose
- Short and actionable guidance to help AI agents be immediately productive in this codebase.

Big picture (what this project is)
- Single-page **React + TypeScript + Vite** portfolio site (no backend). Key UI is in `src/` and it's meant to be static and deployable to GitHub Pages.
- Authoring pattern: small, single-purpose React components (default exports) inside `src/components/` and composed from `src/App.tsx`.

How to run and validate changes (exact commands)
- Dev server with HMR: `npm run dev` (starts Vite). Validate changes live in browser.
- Type-check + production build: `npm run build` — runs `tsc -b` (type-checking) then `vite build`.
- Preview production build: `npm run preview` (serves `dist/`).
- Lint: `npm run lint` (runs `eslint .`).
- Deploy (project uses GitHub Pages): `npm run deploy` (uses `gh-pages -d dist`). Note: `predeploy` runs `npm run build`.

Project-specific conventions and patterns
- Components
  - Located in `src/components/` and use PascalCase filenames and default-exported functional components (e.g., `Navbar.tsx`, `Hero.tsx`).
  - Patterns: small arrays map → JSX, e.g., `navItems` in `Navbar` and `socials` in `Socialbar`.
- Styling
  - Tailwind CSS is used with a local theme and component utilities in `src/index.css`. The file defines CSS variables (`--color-primary`, `--font-mono`, etc.) and reusable classes inside `@layer components` (e.g., `.section-heading`, `.outline-button`).
  - When adding shared UI pieces, prefer adding small utility/component classes to `@layer components` in `src/index.css` instead of creating global CSS overrides.
- TypeScript
  - Strict config enabled in `tsconfig.app.json` (`strict: true`, `noUnusedLocals`, etc.). `noEmit` is set — the build uses `tsc -b` for checking and Vite for bundling.
  - Note: `allowImportingTsExtensions` is enabled and current code imports `./App.tsx` with an extension (see `src/main.tsx`). Be consistent with imports in new files.
- Icons and small libs
  - Icons use `lucide-react` and are imported as React components (e.g., `import { Github } from 'lucide-react'` and used as `<Github size={18}/>`).

Integration points & external dependencies to be aware of
- `vite.config.ts` uses `@vitejs/plugin-react` and adds `babel-plugin-react-compiler` — changes to build/refresh behavior might need careful testing.
- Tailwind is integrated with `@tailwindcss/vite` plugin.
- Deploys to GitHub Pages via `gh-pages` (script: `npm run deploy`).
- Static assets live in `public/` (e.g., `vite.svg`).

What is *not* present (important to notice)
- No tests or test framework detected — do not assume a test harness when proposing changes.
- No CI workflows in `.github/workflows/*` — CI/CD is not currently configured.

Guidance for making changes (do / don't)
- Do: follow existing component and CSS patterns; add shared classes to `src/index.css` `@layer components` and use Tailwind utilities for layout/responsiveness.
- Do: run `npm run lint`, `tsc -b` and `npm run build` locally before opening PRs.
- Don't: add large infra (CI, new deployment targets) without confirming owner intent — document proposals in PR description.
- Pay attention to placeholders in the code (`href="#"`, a commented-out profile image in `About.tsx`) — these are deliberate placeholders and should be replaced only with real data.

Quick validation checklist for PRs
- Dev server runs and page renders with HMR (`npm run dev`).
- `tsc -b` succeeds (no type errors).
- `npm run lint` has no errors (or only approved exceptions).
- `npm run build` produces `dist/` and `npm run preview` serves the built site without runtime errors.

Key files to reference
- `package.json` (scripts + deps)
- `vite.config.ts` (plugins and build behavior)
- `tsconfig.app.json` (type rules and compiler behavior)
- `eslint.config.js` (lint rules used by `npm run lint`)
- `src/index.css` (theme variables and component utility classes)
- `src/components/*` (UI components and patterns)
- `src/App.tsx` and `src/main.tsx` (app composition and bootstrapping)

If something is unclear or you need additional rules (PR style, branching, CI), ask the repo owner before making major changes — I can iterate this guidance based on their preferences. 💬
