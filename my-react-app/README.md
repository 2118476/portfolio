# Mihretab Nega Portfolio (app)

Premium one-page portfolio for [mihretab.org](https://mihretab.org/), built with Create React App, React, SCSS modules, Framer Motion, and FontAwesome. See the [repository README](../README.md) for the full overview, screenshots, and featured project links.

## What is included

- Cinematic photo slideshow background with glassmorphism UI throughout
- Sticky glass navbar with mobile hamburger menu, scroll-spy, and social buttons
- Hero, About, Projects, Services, Skills, Process, Trust, Contact, and Footer sections
- Project filtering, real screenshots, and case-study modals with demo + GitHub links
- Accordion About/Process sections and collapsible Services details (mobile-first)
- Client lead form using Formspree with validation and direct-email fallback
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

- Project content lives in `src/data/projects.js`.
- Skills content lives in `src/data/skills.js`.
- Contact links are in `src/sections/Contact.jsx` and `src/components/layout/Footer.jsx`.
- Replace `public/me.jpg` when updating the portrait.
- Add the real CV as `public/Mihretab-Nega-CV.pdf` so the hero download button points to the final file.
- Replace project mockups with real screenshots by extending each project object and rendering image assets in `src/sections/Projects.jsx`.
- Netlify deployment settings are in `netlify.toml`.
- Update the WhatsApp URL in `src/sections/Contact.jsx` when you want the button to open a specific phone number.
