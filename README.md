# Portfolio

Professional digital portfolio for analytics, AI agent workflows, and web automation projects.

Live site:

```text
https://burgerdaging.github.io/Portfolio/
```

## Overview

This portfolio is built as a focused personal brand site for a data analyst who wants to show practical analytics work, AI-assisted systems, and product-style delivery. The interface uses a modern lab-inspired visual direction, responsive sections, project cards, and a custom cursor interaction for a more polished desktop experience.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React icons
- GitHub Pages
- GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev      # start local development server
npm run build    # create production build in dist/
npm run preview  # preview production build locally
npm run lint     # run ESLint
```

## Project Structure

- `src/App.jsx` contains the first portfolio sections and editable content arrays.
- `src/CustomCursor.jsx` contains the desktop custom cursor interaction.
- `src/index.css` imports Tailwind and defines global browser-level styling.
- `vite.config.js` registers React and Tailwind with Vite.
- `.github/workflows/deploy-pages.yml` builds and deploys the site to GitHub Pages.

## Deployment

Deployment is handled automatically by GitHub Actions whenever changes are pushed to `main`.

Required GitHub repository setting:

- Settings -> Pages -> Build and deployment -> Source: `GitHub Actions`

The Vite `base` path is set to `/Portfolio/` so static assets resolve correctly on GitHub Pages.

## Editing Guide

Most portfolio content is stored in arrays near the top of `src/App.jsx`:

- `focusAreas` controls the operating model cards.
- `projects` controls the selected project cards.
- `toolbelt` controls the skills grid.

Update those arrays first when replacing placeholder content with real projects.
