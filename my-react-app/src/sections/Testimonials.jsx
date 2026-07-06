import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/layout/Section';
import styles from './Testimonials.module.scss';

const proof = [
  {
    title: 'Community product proof',
    source: 'UK Habesha platform',
    text: 'A real mobile-first product with listings, rentals, events, messaging, moderation, and live deployment.',
    meta: 'React + Spring Boot + PostgreSQL'
  },
  {
    title: 'Business workflow proof',
    source: 'Hair salon booking',
    text: 'A complete booking system with customer scheduling, admin controls, service management, staff availability, and auth.',
    meta: 'Java + Spring Boot + MySQL'
  },
  {
    title: 'Automation proof',
    source: 'SMS and Voice IVR',
    text: 'A communication dashboard for SMS, browser voice flows, inbound handling, recordings, and Twilio-backed history.',
    meta: 'Twilio + REST APIs'
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const current = proof[active];

  return (
    <Section id="testimonials" className={styles.testimonials}>
      <div className={styles.header}>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Reference-ready proof
        </span>
        <h2 className="section-title">Evidence now, approved client quotes later.</h2>
      </div>

      <div className={styles.carousel}>
        <AnimatePresence mode="wait">
          <motion.article
            key={current.title}
            className={styles.card}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.32 }}
          >
            <i className="fas fa-quote-left" aria-hidden="true" />
            <p>{current.text}</p>
            <div>
              <strong>{current.source}</strong>
              <span>{current.meta}</span>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className={styles.controls} aria-label="Proof carousel controls">
          {proof.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={index === active ? styles.active : ''}
              onClick={() => setActive(index)}
              aria-label={`Show ${item.title}`}
            >
              <span>{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
