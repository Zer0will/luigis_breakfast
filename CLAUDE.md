# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Build client (Vite) + server (esbuild) into dist/
npm run start      # Run production build (NODE_ENV=production node dist/index.js)
npm run check      # TypeScript type-check (no emit)
npm run format     # Prettier format everything
```

> `pnpm` is the declared package manager but **npm works fine** for development. Install deps with `npm install --legacy-peer-deps` if resolution errors occur.

## Architecture

This is a **pure static marketing site** for Luigi's American Breakfast (Redmond, WA). There is no database or API — all content lives in TypeScript data files.

### Client (`client/`)

- **React 19 + Vite** SPA, routed with `wouter`
- **Tailwind CSS v4** with a custom brand palette defined in `client/src/index.css`
- Pages: `Home`, `Menu`, `About`, `Visit`, `NotFound`
- Every page wraps itself in `<SiteLayout>`, which adds the sticky header and footer
- Path alias `@/` → `client/src/`

### Data layer (`client/src/data/`)

All site content is in two files — touch these when updating real-world info:

- **`brand.ts`** — restaurant name, address, phone, hours, image CDN URLs, `signatureDishes` for the home page
- **`menu.ts`** — the full printed menu modeled as `MenuGroup → MenuSection → MenuSubSection → MenuItem[]`

### Design system ("Saturday Morning Plaza")

Brand tokens are defined once in `client/src/index.css` and used as Tailwind utility classes throughout:

| Token | Color | Usage |
|---|---|---|
| `cream` / `cream-deep` | warm paper whites | backgrounds |
| `peach` / `peach-soft` | logo orange | accents, washes |
| `brick` | logo red | CTAs, active states, headings |
| `tomato` | deeper red | hover states |
| `charcoal` / `ink` | warm near-blacks | body / display text |

Fonts: `font-display` → Fraunces (serif headlines), `font-body` → Inter, `font-hand` → Caveat.

### Server (`server/index.ts`)

A minimal Express server whose only job in production is to serve the built static files from `dist/public` and redirect all routes to `index.html` for client-side routing. It has no routes of its own.

### UI primitives (`client/src/components/ui/`)

Full shadcn/ui component library (Radix-backed). Add new primitives via shadcn CLI; don't hand-edit the generated files unless fixing a bug.
