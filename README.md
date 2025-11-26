# Immersive India Navigator

A cinematic starter kit built with Vite, React, and TypeScript that ships ready-to-use tooling for WebGL scenes (react-three-fiber), GSAP ScrollTrigger, Zustand-powered scene state, and accessible theming (atmospheric vs. high contrast plus reduced-motion support). Use it as a baseline for globe → country → state → district storytelling experiences.

## Features

- **Rendering stack** – Vite + React 19 + TypeScript with code-split routes lazily loading each scene.
- **3D + motion** – react-three-fiber with Drei helpers for orbit controls, paired with GSAP/ScrollTrigger choreography that respects reduced-motion preferences.
- **State + routing** – React Router handles `/`, `/india`, `/india/:stateId`, `/india/:stateId/:districtId` while Zustand keeps the scene HUD synchronized.
- **Design system** – SCSS variables for color palettes, typography scale, spacing, glassmorphic cards, and responsive layout primitives (`Stack` + `Cluster`).
- **Accessibility** – Skip link, focus-visible outlines, high-contrast palette, reduced-motion toggle, and keyboard-friendly breadcrumbs.
- **Utilities** – Custom hooks for scroll progress, viewport breakpoints, cinematic intro animations, and theme management with localStorage persistence.
- **Testing + quality** – ESLint plus Vitest + Testing Library (with JSDOM) ensure the theme provider logic stays reliable.

## Project structure

```
src/
├─ components/
│  ├─ layout/      # App shell, header, layout primitives
│  ├─ scene/       # Viewport, HUD, narrative panels
│  └─ ui/          # Theme toggles, progress indicators
├─ routes/         # Globe, India, State, and District scenes (lazy loaded)
├─ hooks/          # Scroll, viewport, motion, GSAP helpers
├─ stores/         # Zustand scene store
├─ theme/          # Theme tokens + provider
├─ data/           # Sample geography/state metadata
└─ styles/         # SCSS variables, reset, typography, globals
```

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to explore the immersive layout. Toggle atmospheric/high-contrast themes and reduced motion from the header toolbar.

## Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `npm run dev`  | Start Vite dev server with HMR           |
| `npm run build`| Type-check then build for production     |
| `npm run preview` | Serve the production build locally    |
| `npm run lint` | Run ESLint across the repository         |
| `npm run test` | Execute Vitest in run mode (with JSDOM)  |

## Next steps

- Connect live geography or climate data sources.
- Swap placeholder meshes for GLSL-driven assets or map projections.
- Extend the Zustand store with analytics/events for scene transitions.
