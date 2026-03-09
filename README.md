# Fernando Fauth — AI Automation Engineer (Website)

Personal website built with Vite + React and styled with Tailwind CSS.

## Requirements

- Node.js 18+ (recommended)
- npm (comes with Node)

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Code quality

Lint:

```bash
npm run lint
```

Auto-fix lint issues:

```bash
npm run lint:fix
```

## Project structure

- `src/main.jsx` — app entry
- `src/App.jsx` — app shell / page composition
- `src/components/` — UI sections (Hero, About, Contact, etc.)
- `src/index.css` — Tailwind entry and global styles

## Deployment

This repo is named like a GitHub Pages user site (`<username>.github.io`). For that setup, Vite’s `base` is correctly set to `/` in `vite.config.js`.

- Build output goes to `dist/`.
- Any GitHub Pages deployment method that publishes `dist/` will work (for example, a GitHub Actions workflow that runs `npm ci` + `npm run build` and uploads `dist/`).
