import React from 'react';
import styles from './TechOrbit.module.scss';

const inner = [
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-java', label: 'Java' }
];

const outer = [
  { icon: 'fas fa-leaf', label: 'Spring Boot' },
  { icon: 'fas fa-database', label: 'SQL' },
  { icon: 'fas fa-plug', label: 'REST APIs' },
  { icon: 'fas fa-shield-halved', label: 'JWT / BCrypt' }
];

/*
 * Decorative core with two counter-rotating rings of tech icons; each icon
 * counter-spins so it stays upright.
 */
const TechOrbit = () => (
  <div className={styles.orbit} aria-hidden="true">
    <div className={styles.core}>
      <span>MN</span>
    </div>

    <div className={`${styles.ring} ${styles.ringInner}`}>
      {inner.map((tech, index) => (
        <span
          key={tech.label}
          className={styles.node}
          style={{ '--angle': `${(360 / inner.length) * index}deg` }}
        >
          <i className={`${tech.icon} ${styles.counter}`} />
        </span>
      ))}
    </div>

    <div className={`${styles.ring} ${styles.ringOuter}`}>
      {outer.map((tech, index) => (
        <span
          key={tech.label}
          className={styles.node}
          style={{ '--angle': `${(360 / outer.length) * index}deg` }}
        >
          <i className={`${tech.icon} ${styles.counterOuter}`} />
        </span>
      ))}
    </div>
  </div>
);

export default TechOrbit;
