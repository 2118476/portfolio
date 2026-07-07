import React from 'react';
import Section from '../components/layout/Section';
import trustVisual from '../assets/trust-visual.jpg';
import styles from './Trust.module.scss';

const trustItems = [
  {
    title: 'Practical problem-solving',
    icon: 'fas fa-lightbulb',
    text: 'Workflow first, then the right UI, API, and data model.'
  },
  {
    title: 'Full-stack delivery',
    icon: 'fas fa-code-branch',
    text: 'Frontend, backend, auth, database, and deploy — together.'
  },
  {
    title: 'Mobile-first design',
    icon: 'fas fa-mobile-screen-button',
    text: 'Built for phones first, where most users actually are.'
  },
  {
    title: 'Business-focused features',
    icon: 'fas fa-sterling-sign',
    text: 'Bookings, dashboards, and admin built around real outcomes.'
  },
  {
    title: 'Clean deployment',
    icon: 'fas fa-rocket',
    text: 'Hosting, env config, and production settings done properly.'
  },
  {
    title: 'Long-term mindset',
    icon: 'fas fa-chart-line',
    text: 'Ships focused, then grows with data and feedback.'
  }
];

const Trust = () => {
  return (
    <Section id="trust" className={styles.trust}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Why work with me
          </span>
          <h2 className="section-title">Serious, practical, built for real use.</h2>
        </div>
        <p className="section-copy">What clients and hiring teams can expect.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.visual}>
          <img src={trustVisual} alt="Code and developer tools" loading="lazy" />
          <div className={styles.visualTag}>
            <i className="fas fa-code" aria-hidden="true" />
            Clean, maintainable code
          </div>
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
      </div>
    </Section>
  );
};

export default Trust;
