# The Frontend Gazette — Umar Shaikh Portfolio

A newspaper-themed portfolio site built with React, Vite, Tailwind CSS, and lucide-react icons.

## What's inside

- `src/App.jsx` — the whole site (masthead, ticker, experience, skills, projects, contact)
- `src/index.css` — Tailwind entry point
- `dist/` — a pre-built production build, ready to preview or deploy as-is

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Preview the production build

A build is already included in `dist/`. To serve it locally:

```bash
npm install
npm run preview
```

Or rebuild from scratch:

```bash
npm install
npm run build
npm run preview
```

## Deploy

`dist/` is a static site — drag it into Netlify/Vercel's manual deploy, or run
`vercel` / `netlify deploy` from this folder. If deploying fresh, just run
`npm run build` and deploy the resulting `dist/` folder.

## Editing content

All copy, roles, projects and skills live as data arrays near the top of
`src/App.jsx` (`experience`, `skillColumns`, `tickerItems`, `education`) —
edit those directly to update the site.

The contact form in the "Letters to the Editor" section is front-end only
(no backend). It confirms locally and links to a `mailto:` fallback — wire it
up to a form service (e.g. Formspree, Resend) before relying on it for real
inquiries.
