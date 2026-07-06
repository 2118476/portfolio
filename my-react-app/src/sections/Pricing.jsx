import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Tilt from '../components/ui/Tilt';
import styles from './Pricing.module.scss';

const packages = [
  {
    name: 'Starter Site',
    price: 'from £350',
    tagline: 'A clean, fast presence that builds trust.',
    icon: 'fas fa-globe',
    features: [
      'Up to 4 responsive pages',
      'Modern design + your branding',
      'Contact form and SEO basics',
      'Deployed to Netlify with a custom domain'
    ]
  },
  {
    name: 'Booking / Business App',
    price: 'from £900',
    tagline: 'Turn a real workflow into working software.',
    icon: 'fas fa-calendar-check',
    featured: true,
    features: [
      'React + Spring Boot full-stack build',
      'Auth (JWT + BCrypt) and admin dashboard',
      'Database for bookings, orders, or stock',
      'Deployment, handover, and documentation'
    ]
  },
  {
    name: 'Full Platform',
    price: 'from £1,800',
    tagline: 'Community, marketplace, or multi-role product.',
    icon: 'fas fa-layer-group',
    features: [
      'Listings, profiles, messaging, moderation',
      'Role-based access and REST APIs',
      'Integrations (Twilio, WhatsApp, payments)',
      'Scalable structure for future growth'
    ]
  }
];

const Pricing = () => (
  <Section id="pricing" className={styles.pricing}>
    <div className="split-heading">
      <div>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Packages
        </span>
        <h2 className="section-title">Clear starting points, honest pricing.</h2>
      </div>
      <p className="section-copy">
        Guide prices to help you plan. Every project is scoped properly first, so you
        get a fixed quote before any work starts — no surprises.
      </p>
    </div>

    <div className={styles.grid}>
      {packages.map((pack, index) => (
        <Tilt
          as={motion.article}
          key={pack.name}
          className={`${styles.card} ${pack.featured ? styles.featured : ''}`}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          {pack.featured && <span className={styles.badge}>Most popular</span>}
          <span className={styles.icon}>
            <i className={pack.icon} aria-hidden="true" />
          </span>
          <h3>{pack.name}</h3>
          <p className={styles.price}>{pack.price}</p>
          <p className={styles.tagline}>{pack.tagline}</p>
          <ul>
            {pack.features.map((feature) => (
              <li key={feature}>
                <i className="fas fa-check" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            href="#contact"
            variant={pack.featured ? 'primary' : 'outline'}
            icon="fas fa-arrow-right"
          >
            Start a project
          </Button>
        </Tilt>
      ))}
    </div>
  </Section>
);

export default Pricing;
