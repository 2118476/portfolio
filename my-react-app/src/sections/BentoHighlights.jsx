import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Counter from '../components/ui/Counter';
import StatusWidget from '../components/visual/StatusWidget';
import styles from './BentoHighlights.module.scss';

const stats = [
  { value: 6, label: 'full-stack builds' },
  { value: 3, label: 'live demos' },
  { value: 12, label: 'core technologies' }
];

const systems = [
  'Booking and scheduling',
  'Community platforms',
  'Dashboards and admin tools',
  'SMS, voice, and workflow automation'
];

const BentoHighlights = () => (
  <Section id="snapshot" className={styles.snapshot}>
    <div className={styles.grid}>
      <motion.article className={`${styles.card} ${styles.featured}`} layout>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Snapshot
        </span>
        <h2>Fast read for teams who need useful software shipped cleanly.</h2>
        <p>
          Mihretab builds React frontends, Spring Boot APIs, databases, auth flows,
          deployments, and the product thinking that ties them together.
        </p>
      </motion.article>

      <motion.article className={styles.card} layout>
        <StatusWidget compact />
      </motion.article>

      <motion.article className={`${styles.card} ${styles.metrics}`} layout>
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>
              <Counter to={stat.value} />
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.article>

      <motion.article className={styles.card} layout>
        <h3>Strongest lanes</h3>
        <div className={styles.lanes}>
          {systems.map((system) => (
            <span key={system}>{system}</span>
          ))}
        </div>
      </motion.article>

      <motion.article className={`${styles.card} ${styles.stackCard}`} layout>
        <h3>Core stack</h3>
        <p>React, JavaScript, Java, Spring Boot, REST APIs, PostgreSQL, MySQL, JWT, Render, Netlify.</p>
      </motion.article>
    </div>
  </Section>
);

export default BentoHighlights;
