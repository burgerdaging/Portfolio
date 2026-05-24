# Portfolio Lab

Personal portfolio website built with React, Vite, Tailwind CSS, and Netlify as the deployment target.

## Local Development

```bash
npm install
npm run dev
```

## Project Shape

- `src/App.jsx` contains the first portfolio sections and editable content arrays.
- `src/index.css` imports Tailwind and defines global browser-level styling.
- `vite.config.js` registers React and Tailwind with Vite.

## Build Check

```bash
npm run build
```

## Netlify Deployment Notes

Recommended Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`
- SSL: Netlify provides automatic HTTPS after DNS is configured.

For a custom domain, buy the domain from a registrar, add it in Netlify under Domain Management, then either point nameservers to Netlify DNS or create the DNS records Netlify provides.
