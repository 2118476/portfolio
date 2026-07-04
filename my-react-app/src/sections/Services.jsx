import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import styles from './Services.module.scss';

const services = [
  {
    title: 'Business website',
    icon: 'fas fa-globe',
    description: 'A polished website that explains your offer, builds trust, and helps people contact you.',
    useCase: 'Trades, consultants, local brands, community organisations'
  },
  {
    title: 'Booking system',
    icon: 'fas fa-calendar-check',
    description: 'Customer booking flows with admin controls, services, availability, and authentication.',
    useCase: 'Salons, clinics, tutors, local appointments'
  },
  {
    title: 'Admin dashboard',
    icon: 'fas fa-chart-simple',
    description: 'Private dashboards for managing users, bookings, stock, orders, and reports.',
    useCase: 'Operations teams and business owners'
  },
  {
    title: 'Community platform',
    icon: 'fas fa-users',
    description: 'Mobile-first community spaces with listings, profiles, messages, events, and moderation.',
    useCase: 'Diaspora groups, local networks, membership communities'
  },
  {
    title: 'Marketplace / classifieds',
    icon: 'fas fa-store',
    description: 'Listings, filters, seller details, saved items, and admin moderation for trusted posting.',
    useCase: 'Rentals, services, local adverts, community markets'
  },
  {
    title: 'Restaurant or salon system',
    icon: 'fas fa-receipt',
    description: 'Service menus, booking or ordering flows, customer records, and admin management.',
    useCase: 'Restaurants, salons, barbers, service businesses'
  },
  {
    title: 'SMS / WhatsApp automation',
    icon: 'fas fa-comment-sms',
    description: 'Automated reminders, call flows, SMS messages, and WhatsApp-ready business workflows.',
    useCase: 'Appointment reminders, outreach, customer updates'
  },
  {
    title: 'Custom full-stack app',
    icon: 'fas fa-code',
    description: 'React frontend, Spring Boot backend, database, authentication, APIs, and deployment.',
    useCase: 'MVPs, internal tools, client portals, practical SaaS ideas'
  },
  {
    title: 'Deployment and maintenance',
    icon: 'fas fa-cloud-arrow-up',
    description: 'Netlify, Render, environment setup, bug fixing, improvements, and long-term support.',
    useCase: 'Existing apps that need cleaner launch and care'
  }
];

const Services = () => {
  return (
    <Section id="services" className={styles.services}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Services
          </span>
          <h2 className="section-title">What I can build for you.</h2>
        </div>
        <p className="section-copy">
          I can help turn a business problem, community idea, or internal workflow
          into a usable web application with a clear frontend, backend, database,
          and deployment path.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className={styles.card}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <i className={service.icon} aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.useCase}>
              <span>Example</span>
              <strong>{service.useCase}</strong>
            </div>
            <Button href="#contact" variant="outline" icon="fas fa-arrow-right">
              Ask for this
            </Button>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Services;
