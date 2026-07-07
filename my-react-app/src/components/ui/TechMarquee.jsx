import React from 'react';
import styles from './TechMarquee.module.scss';

/*
 * Slow, seamless horizontal ribbon of the core tech stack. The track holds
 * two identical copies of the list and translates by -50%, so the loop is
 * gapless. Reduced-motion users get a centered, wrapped static row instead.
 */
const stack = [
  { label: 'React', icon: 'fab fa-react', tone: 'primary' },
  { label: 'Spring Boot', icon: 'fas fa-leaf', tone: 'secondary' },
  { label: 'Java', icon: 'fab fa-java', tone: 'warm' },
  { label: 'JavaScript', icon: 'fab fa-js', tone: 'warm' },
  { label: 'PostgreSQL', icon: 'fas fa-database', tone: 'primary' },
  { label: 'MySQL', icon: 'fas fa-database', tone: 'secondary' },
  { label: 'REST APIs', icon: 'fas fa-plug', tone: 'tertiary' },
  { label: 'JWT', icon: 'fas fa-key', tone: 'warm' },
  { label: 'BCrypt', icon: 'fas fa-lock', tone: 'secondary' },
  { label: 'SCSS', icon: 'fab fa-sass', tone: 'tertiary' },
  { label: 'Vite', icon: 'fas fa-bolt', tone: 'warm' },
  { label: 'GitHub', icon: 'fab fa-github', tone: 'primary' },
  { label: 'Netlify', icon: 'fas fa-cloud-arrow-up', tone: 'secondary' },
  { label: 'Render', icon: 'fas fa-server', tone: 'primary' },
  { label: 'Twilio', icon: 'fas fa-comment-sms', tone: 'tertiary' }
];

const TechMarquee = () => (
  <div className={styles.wrap} aria-label="Core technology stack">
    <div className={styles.track}>
      {[0, 1].map((copy) => (
        <ul key={copy} className={styles.row} aria-hidden={copy === 1 ? 'true' : undefined}>
          {stack.map((tech) => (
            <li key={`${copy}-${tech.label}`} className={styles[tech.tone]}>
              <i className={tech.icon} aria-hidden="true" />
              <span>{tech.label}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default TechMarquee;
