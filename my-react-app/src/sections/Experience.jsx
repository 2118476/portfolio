import React from 'react';
import Section from '../components/layout/Section';
import styles from './Experience.module.scss';
import { motion } from 'framer-motion';

/*
 * Experience & Education timeline.  Each entry may include multiple
 * bullet points describing achievements or responsibilities.
 */
const timeline = [
  {
    title: 'Junior Software Developer',
    company: 'Freelance / Personal Projects',
    period: '2023 – Present',
    description: [
      'Developed MMS – SMS & Voice Call Web App using React, Spring Boot, MySQL and Twilio, deploying to Render and Vercel.',
      'Built Hair Salon Booking System as final year project using Spring Boot and MySQL, implementing authentication and admin/user roles.',
      'Collaborated on E‑Learning Platform using agile methodology, building frontend components and integrating APIs.'
    ]
  },
  {
    title: 'BSc Computer Science',
    company: 'Brunel University London',
    period: 'Sept 2021 – Jun 2024',
    description: [
      'Studied software development, algorithms, cybersecurity, AI and networking.',
      'Completed final year project: Hair Salon Booking System.'
    ]
  },
  {
    title: 'Access to HE Diploma (Electronics & Software Engineering)',
    company: 'Newham College of Further Education',
    period: 'Sept 2020 – Jun 2021',
    description: [
      'Achieved distinctions in programming, project management and web design.'
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience" className={styles.experience}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>
      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.marker}></div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <span className={styles.company}>{item.company}</span>
              <span className={styles.period}>{item.period}</span>
              <ul>
                {item.description.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;