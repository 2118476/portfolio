import React, { useState } from 'react';
import Section from '../components/layout/Section';
import Collapse from '../components/ui/Collapse';
import styles from './Process.module.scss';

const steps = [
  {
    title: 'Discovery call / requirements',
    text: 'We clarify the real goal, users, pages, workflows, integrations, and what success looks like.'
  },
  {
    title: 'UI/UX design plan',
    text: 'I map the screens, data, and key user journeys before code so the build has direction.'
  },
  {
    title: 'Full-stack development',
    text: 'React frontend, Spring Boot or suitable backend, database schema, authentication, and APIs.'
  },
  {
    title: 'Testing and feedback',
    text: 'I test core flows, fix rough edges, and adjust based on real use rather than assumptions.'
  },
  {
    title: 'Deployment',
    text: 'The app is prepared for hosting with environment variables, deployment settings, and launch checks.'
  },
  {
    title: 'Support and improvements',
    text: 'After launch, I can help improve features, fix bugs, and keep the system moving forward.'
  }
];

const Process = () => {
  const [openStep, setOpenStep] = useState(0);

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

      <div className={styles.steps}>
        {steps.map((step, index) => {
          const open = openStep === index;
          return (
            <article key={step.title} className={`${styles.step} ${open ? styles.openStep : ''}`}>
              <button
                type="button"
                className={styles.stepHeader}
                onClick={() => setOpenStep(open ? -1 : index)}
                aria-expanded={open}
                aria-controls={`process-panel-${index}`}
              >
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <i className={`fas fa-chevron-down ${styles.chevron}`} aria-hidden="true" />
              </button>
              <Collapse open={open} id={`process-panel-${index}`}>
                <p className={styles.stepBody}>{step.text}</p>
              </Collapse>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Process;
