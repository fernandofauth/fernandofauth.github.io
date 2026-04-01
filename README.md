# Fernando Fauth — AI Systems Engineer (Website)

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

Build as a single self-contained `dist/index.html` (JS/CSS inlined):

```bash
npm run build:single
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

This repo is named like a GitHub Pages user site (`<username>.github.io`). The included build uses relative asset URLs (`base: "./"` in `vite.config.js`), which works on GitHub Pages and also when opening `dist/index.html` directly.

- Build output goes to `dist/`.
- GitHub Pages is set up to deploy via GitHub Actions using `.github/workflows/deploy-pages.yml`.

## Why the page can be blank after build

If you open the build output directly (double-click `dist/index.html`), the page can appear blank when asset URLs are absolute (like `/assets/...`). This project is configured to use **relative** asset URLs, so `dist/index.html` works when opened directly and when hosted as static files.

For the most reliable local check, use:

```bash
npm run preview
```
