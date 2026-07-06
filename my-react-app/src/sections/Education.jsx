import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Tilt from '../components/ui/Tilt';
import styles from './Education.module.scss';

const items = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'BSc Computer Science',
    org: 'Brunel University London',
    period: 'Graduate',
    points: [
      'Software engineering and object-oriented programming',
      'Databases, web development, and REST API design',
      'AI foundations and cybersecurity principles'
    ]
  },
  {
    icon: 'fas fa-code',
    title: 'Full-stack practice',
    org: 'Self-directed, project-based',
    period: 'Ongoing',
    points: [
      'React, Java, and Spring Boot production patterns',
      'JWT + BCrypt authentication and role-based access',
      'Cloud deployment on Netlify and Render'
    ]
  },
  {
    icon: 'fas fa-arrow-trend-up',
    title: 'Always learning',
    org: 'Current focus areas',
    period: 'Now',
    points: [
      'Automation with Twilio and messaging workflows',
      'AI-assisted tooling and data-driven dashboards',
      'Performance, accessibility, and clean architecture'
    ]
  }
];

const Education = () => (
  <Section id="education" className={styles.education}>
    <div className="split-heading">
      <div>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Education &amp; growth
        </span>
        <h2 className="section-title">A Computer Science base, sharpened by real builds.</h2>
      </div>
      <p className="section-copy">
        Formal foundations plus continuous, project-driven learning — the mix that keeps
        my work both correct and practical.
      </p>
    </div>

    <div className={styles.grid}>
      {items.map((item, index) => (
        <Tilt
          as={motion.article}
          key={item.title}
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <div className={styles.top}>
            <span className={styles.icon}>
              <i className={item.icon} aria-hidden="true" />
            </span>
            <span className={styles.period}>{item.period}</span>
          </div>
          <h3>{item.title}</h3>
          <p className={styles.org}>{item.org}</p>
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Tilt>
      ))}
    </div>
  </Section>
);

export default Education;
