import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import styles from './Process.module.scss';

const steps = [
  {
    label: 'Discover',
    icon: 'fas fa-compass',
    text: 'Clarify the real goal, users, workflows, and what success looks like.'
  },
  {
    label: 'Plan',
    icon: 'fas fa-diagram-project',
    text: 'Map the screens, data model, and key user journeys before any code.'
  },
  {
    label: 'Design',
    icon: 'fas fa-pen-ruler',
    text: 'Shape a clean, responsive UI and a sensible component structure.'
  },
  {
    label: 'Build',
    icon: 'fas fa-code',
    text: 'React frontend, Spring Boot backend, database, authentication, and APIs.'
  },
  {
    label: 'Deploy',
    icon: 'fas fa-rocket',
    text: 'Ship with environment config, production settings, and launch checks.'
  },
  {
    label: 'Improve',
    icon: 'fas fa-arrow-trend-up',
    text: 'Fix, refine, and grow the product based on real use and feedback.'
  }
];

const Process = () => {
  return (
    <Section id="process" className={styles.process}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Process
          </span>
          <h2 className="section-title">A clear path from idea to shipped app.</h2>
        </div>
        <p className="section-copy">
          The best projects start with clarity. I keep the process direct,
          visible, and focused on working software.
        </p>
      </div>

      <ol className={styles.track}>
        {steps.map((step, index) => (
          <motion.li
            key={step.label}
            className={styles.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className={styles.node}>
              <span className={styles.circle}>
                <i className={step.icon} aria-hidden="true" />
              </span>
              <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className={styles.content}>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
};

export default Process;
