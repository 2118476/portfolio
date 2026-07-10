import React from 'react';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import styles from './Availability.module.scss';

const Availability = () => (
  <Section id="availability" className={styles.availability}>
    <div className={styles.band}>
      <div className={styles.copy}>
        <span className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          Available now
        </span>
        <h2>Open to junior and full-stack developer opportunities.</h2>
        <p>
          I'm looking for a UK-based or remote developer role. I also take on selected
          freelance projects — booking systems, dashboards, and business tools.
        </p>
      </div>
      <div className={styles.actions}>
        <Button href="#contact" icon="fas fa-paper-plane">
          Get in touch
        </Button>
        <Button href="/Mihretab-Nega-CV.pdf" variant="secondary" icon="fas fa-file-arrow-down" download>
          Download CV
        </Button>
      </div>
    </div>
  </Section>
);

export default Availability;
