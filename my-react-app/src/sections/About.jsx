import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import profile from '../assets/me.jpg';
import styles from './About.module.scss';

const timeline = [
  {
    title: 'Computer Science graduate',
    meta: 'Brunel University London',
    text: 'Built a strong foundation in software engineering, databases, web development, AI, cybersecurity, and practical project delivery.'
  },
  {
    title: 'Full-stack project delivery',
    meta: 'React, Spring Boot, SQL',
    text: 'Focused on full-stack apps with authentication, REST APIs, dashboards, admin panels, and database-backed workflows.'
  },
  {
    title: 'Community and business tools',
    meta: 'UK Habesha, salons, automation',
    text: 'Shaping software around real users: local businesses, diaspora communities, job seekers, and teams that need practical automation.'
  },
  {
    title: 'Current focus',
    meta: 'Jobs, freelance, product builds',
    text: 'Available for UK software developer roles and selected freelance projects where clean delivery matters.'
  }
];

const About = () => {
  return (
    <Section id="about" className={styles.about}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            About
          </span>
          <h2 className="section-title">Practical software for real workflows.</h2>
        </div>
        <p className="section-copy">
          I am Mihretab Nega, a Computer Science graduate and full-stack developer
          focused on building useful software rather than surface-level demos.
        </p>
      </div>

      <div className={styles.grid}>
        <motion.div
          className={styles.profile}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <img src={profile} alt="Mihretab Nega" loading="lazy" />
          <div>
            <strong>Based in the UK</strong>
            <p>Building for software teams, local businesses, and the Ethiopian/Habesha community.</p>
          </div>
        </motion.div>

        <div className={styles.copy}>
          <p>
            My main stack is Java, Spring Boot, React, PostgreSQL/MySQL, JWT, REST APIs,
            Netlify, Render, and Twilio. I enjoy projects where the frontend, backend,
            data model, and deployment all have to work together cleanly.
          </p>
          <p>
            The portfolio highlights production-style thinking: authentication, admin
            dashboards, booking flows, messaging, automation, database design, and
            deployment. The goal is simple: software that helps people do something
            faster, clearer, or more reliably.
          </p>

          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <span className={styles.marker}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.meta}</span>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
