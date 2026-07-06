# Mihretab Nega — Full-Stack Developer Portfolio

**Live site:** [https://mihretab.org](https://mihretab.org)

A modern, cinematic one-page portfolio for Mihretab Nega, a London-based full-stack developer building real-world **React + Spring Boot** applications: booking systems, community platforms, job tools, automation, and business management software.

## Screenshots

Real product screenshots from the featured UK Habesha community platform:

| Community feed | Local services | Rental detail | Marketplace |
| --- | --- | --- | --- |
| ![Feed](my-react-app/src/assets/shots/habesha-feed.jpg) | ![Services](my-react-app/src/assets/shots/habesha-services.jpg) | ![Rental](my-react-app/src/assets/shots/habesha-rental.jpg) | ![Swap](my-react-app/src/assets/shots/habesha-swap.jpg) |

## Features

- Cinematic photo slideshow background with Ken Burns pan/zoom, aurora glows, rotating rings, and rising light particles
- Futuristic hero with an interactive particle constellation, animated headline lane, glass OS-window dashboard, 3D device mockups, orbiting tech constellation, and live availability widget
- Custom cursor, magnetic button movement, dot navigation, proximity scroll snap, and scroll-driven section choreography
- Command palette for fast navigation/actions, plus recruiter mode that condenses the page to hiring-focused sections
- Frosted-glass (glassmorphism) UI — neutral transparent cards, pill navbar, glass buttons with sheen hover, and cursor-following spotlight + 3D tilt on cards
- One-time intro name-reveal loader and a gradient scroll-progress bar
- Sticky glass navbar with mobile hamburger drawer, scroll-spy active links, GitHub/LinkedIn buttons, and a "Let's Build" CTA
- Compact bento-grid snapshot and a one-page resume route (`/resume`) with print and CV actions
- Featured projects with category filters, animated horizontal desktop rail, real screenshots, plus dedicated shareable **case-study pages** (`/projects/:id`) with problem, solution, what I built, features, stack, screenshot gallery, and demo/frontend/backend links
- Reference-ready proof/testimonial carousel without fake client quotes
- Sections for Skills, Services, **Pricing packages**, Process, **Education & growth**, **live GitHub activity** (fetched from the GitHub API), Trust, and **FAQ**
- Accordion-style About timeline, Process steps, and FAQ; collapsible Services details — mobile-first, tap-friendly
- Working contact form (Formspree via env var) with validation, `mailto:` fallback, and direct email/LinkedIn/GitHub links
- Floating WhatsApp click-to-chat bubble (enabled via env var)
- Installable **PWA** (offline support via service worker) and optional cookieless analytics
- SEO: meta description, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt
- Fully responsive (mobile-first) and honors `prefers-reduced-motion`

## Featured projects

| Project | Stack | Links |
| --- | --- | --- |
| Habesha Community Platform / UK Habesha | React, Spring Boot, PostgreSQL, JWT | [Demo](https://habesha-community-frontend.netlify.app) · [Frontend](https://github.com/2118476/Habesha-community-Frontend) · [Backend](https://github.com/2118476/Habesha-community-backend) |
| Hair Salon Booking System | Java, Spring Boot, MySQL, React, JWT | [Demo](https://sparkling-gaufre-95d8cc.netlify.app) · [Frontend](https://github.com/2118476/hair-salon-frontend) · [Backend](https://github.com/2118476/hair-salon-backend) |
| SMS and Voice IVR App | React, Spring Boot, MySQL, Twilio | [Demo](https://gorgeous-cendol-eb18cc.netlify.app/) · [Code](https://github.com/2118476/Mms) |
| JobPilot / Job Search Assistant | React, Supabase, PostgreSQL | In development |
| GoldSignal / Trading Signal Platform | Python, MT5, React, Spring Boot | [Code](https://github.com/2118476/bot15COrv5-15b-18v4) |
| Enku Habesha / Business & Order Management | React, Java, Spring Boot, MySQL | Private business tool |

## Tech stack

- **Frontend:** React 19 + React Router, SCSS modules, Framer Motion, FontAwesome
- **Build tool:** Vite 5 (with `vite-plugin-pwa`)
- **Forms:** Formspree (with `mailto:` fallback)
- **Hosting:** Netlify (see `my-react-app/netlify.toml`)

## Project structure

```
my-react-app/
├── index.html              # app entry (SEO/OG/JSON-LD meta)
├── vite.config.js          # Vite + PWA config
├── public/                 # CV, favicon, PWA icons, sitemap, robots.txt
├── src/
│   ├── assets/             # profile photo, background photos, project screenshots
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Section, Container, SiteChrome
│   │   ├── ui/             # Button, Badge, Collapse, Tilt, Counter, ScrollProgress,
│   │   │                   #   IntroLoader, WhatsAppBubble, ScrollToTop
│   │   ├── AmbientBackground.jsx   # cinematic slideshow background layer
│   │   ├── Analytics.jsx           # optional cookieless analytics
│   │   └── ContactForm.jsx
│   ├── data/               # projects.js, skills.js (edit content here)
│   ├── pages/              # Home.jsx, CaseStudy.jsx
│   ├── sections/           # Hero, Stats, About, Skills, Projects, Services, Pricing,
│   │                       #   Process, Education, GithubActivity, Trust, Faq, Contact
│   └── styles/             # design tokens (variables.scss), mixins, globals
└── netlify.toml            # Netlify build configuration
```

## Getting started

```bash
cd my-react-app
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build in my-react-app/dist
npm run preview  # preview the production build locally
```

## Environment variables

Copy `my-react-app/.env.example` to `my-react-app/.env`. Vite exposes only `VITE_`-prefixed
variables and reads them at startup (restart after changes). All are optional:

| Variable | Purpose |
| --- | --- |
| `VITE_FORMSPREE_ENDPOINT` | Contact-form endpoint. If unset, a default is used; if set empty, the form uses a `mailto:` fallback. |
| `VITE_WHATSAPP_NUMBER` | International number (digits only) for the floating WhatsApp bubble. Blank = disabled "coming soon" state. |
| `VITE_ANALYTICS_DOMAIN` | Your site domain to enable cookieless Plausible analytics. Blank = no tracker loaded. |

## Deployment

The site deploys to Netlify. Build command `npm run build`, publish directory `dist`,
configured in `my-react-app/netlify.toml`. The included SPA redirect makes case-study
routes like `/projects/habesha-community` work on direct load and refresh.

## Future improvements

- Real client testimonials in the Trust section
- Blog/articles for SEO
- English/Amharic language toggle

## Contact

- **Email:** [mihretabtesfahun2124@gmail.com](mailto:mihretabtesfahun2124@gmail.com)
- **LinkedIn:** [linkedin.com/in/mihretab-nega-56292819a](https://www.linkedin.com/in/mihretab-nega-56292819a/)
- **GitHub:** [github.com/2118476](https://github.com/2118476)
