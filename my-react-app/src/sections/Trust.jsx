import React from 'react';
import Section from '../components/layout/Section';
import styles from './Trust.module.scss';

const trustItems = [
  {
    title: 'Practical problem-solving',
    icon: 'fas fa-lightbulb',
    text: 'I care about the workflow first, then choose the UI, API, and database shape that supports it.'
  },
  {
    title: 'Full-stack delivery',
    icon: 'fas fa-code-branch',
    text: 'Frontend, backend, authentication, database, deployment, and handover are considered together.'
  },
  {
    title: 'Mobile-first design',
    icon: 'fas fa-mobile-screen-button',
    text: 'Many clients and community users open sites on phones, so responsive behavior is a core requirement.'
  },
  {
    title: 'Business-focused features',
    icon: 'fas fa-sterling-sign',
    text: 'Bookings, dashboards, messages, orders, and admin tools are built around useful outcomes.'
  },
  {
    title: 'Clean deployment',
    icon: 'fas fa-rocket',
    text: 'I plan hosting, environment variables, and production settings so projects can be launched properly.'
  },
  {
    title: 'Long-term improvement mindset',
    icon: 'fas fa-chart-line',
    text: 'A good app can start focused and grow with better data, automation, and user feedback.'
  }
];

const Trust = () => {
  return (
    <Section id="trust" className={styles.trust}>
      <div className={styles.header}>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Why work with me
        </span>
        <h2 className="section-title">Serious, practical, and built for real use.</h2>
        <p className="section-copy">
          I have not added fake testimonials. This section is ready to replace
          with real client feedback later; for now it explains what clients and
          hiring teams can expect.
        </p>
      </div>

      <div className={styles.grid}>
        {trustItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <i className={item.icon} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Trust;
