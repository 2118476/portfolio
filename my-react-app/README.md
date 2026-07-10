# Mihretab Nega Portfolio (app)

Clean, product-focused portfolio for [mihretab.org](https://mihretab.org/), built with Vite, React, SCSS modules, Framer Motion, and FontAwesome. See the [repository README](../README.md) for the full overview, screenshots, and featured project links.

## What is included

- Six-section homepage: Hero, Featured Work, Skills & Experience, About, Availability, Contact
- Light and dark themes (one green accent, warm off-white / near-black backgrounds) with a navbar toggle and no-flash persistence
- Sticky navbar (the site's only glass surface) with scroll-spy and a mobile hamburger menu
- Featured Work grid: one large UK Habesha card plus two smaller cards, all fully clickable into case studies
- `/projects` index of all builds, plus per-project case-study routes with demo and GitHub links
- Detailed CV route (`/cv`) and downloadable PDF CV
- Simple contact form (name, email, message) using Formspree with validation and direct-email fallback
- SEO metadata, Open Graph tags, JSON-LD, sitemap, robots.txt, and SVG favicon

## Run locally

```bash
npm install
npm start
```

The dev server runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Updating content

- Project content lives in `src/data/projects.js` (the three featured homepage projects are picked by id in `src/sections/Projects.jsx`).
- Skills content lives in `src/data/skills.js`; the experience column is in `src/sections/Skills.jsx`.
- Contact links are in `src/sections/Contact.jsx` and `src/components/layout/Footer.jsx`.
- Replace `public/me.jpg` and `src/assets/me.jpg` when updating the portrait.
- Keep the current CV at `public/Mihretab-Nega-CV.pdf`; the navbar, hero, and availability buttons all point to it.
- Theme colours and radii are defined once in `src/styles/variables.scss` (dark defaults plus a `[data-theme='light']` block).
- Netlify deployment settings are in `netlify.toml`.
