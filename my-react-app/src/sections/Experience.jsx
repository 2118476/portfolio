import React, { useState, useEffect } from 'react';
import Section from '../components/layout/Section';
import { experienceTimeline } from '../data/experience';
import styles from './Experience.module.scss';
import Badge from '../components/ui/Badge';
import BackgroundExperience from '../components/backgrounds/BackgroundExperience';

/*
 * Experience & Education section displaying a vertical timeline.
 * Each entry is clickable; clicking expands to reveal detailed
 * responsibilities, achievements, tech stack and impact.  The
 * expanded state is reflected in the URL hash so entries can be
 * deep‑linked.  A subtle animated background ties into the
 * portfolio’s overall visual language.  Accessibility features
 * include keyboard navigation and ARIA attributes.
 */
const Experience = () => {
  const [activeId, setActiveId] = useState(null);

  // On mount, check the URL hash and expand the corresponding entry
  // if it exists in the timeline.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const exists = experienceTimeline.find((item) => item.id === hash);
      if (exists) setActiveId(hash);
    }
  }, []);

  // Toggle expansion of an entry.  When expanding, update the hash
  // so that the current entry is linkable.  When collapsing, remove
  // the hash to avoid stale references.
  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      if (activeId === id) {
        // collapsing
        history.replaceState(null, '', '#experience');
      } else {
        // expanding
        history.replaceState(null, '', `#${id}`);
      }
    }, 0);
  };

  return (
    <Section id="experience" className={styles.experience}>
      <BackgroundExperience />
      <h2 className="section-title">Experience & Education</h2>
      <div className={styles.timeline}>
        {experienceTimeline.map((item) => {
          const isOpen = activeId === item.id;
          return (
            <div key={item.id} className={styles.entry} id={item.id}>
              <span className={styles.marker} aria-hidden="true" />
              <button
                className={styles.entryHeader}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                type="button"
              >
                <h3>{item.title}</h3>
                <span className={styles.org}>{item.organisation}</span>
                <span className={styles.period}>{item.period}</span>
              </button>
              <div
                id={`panel-${item.id}`}
                className={`${styles.entryContent} ${isOpen ? styles.open : ''}`}
              >
                <div className={styles.entryContentInner}>
                  <p>{item.description}</p>
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <>
                      <h4>Responsibilities</h4>
                      <ul>
                        {item.responsibilities.map((res, idx) => (
                          <li key={idx}>{res}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.achievements && item.achievements.length > 0 && (
                    <>
                      <h4>Achievements</h4>
                      <ul>
                        {item.achievements.map((ach, idx) => (
                          <li key={idx}>{ach}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.techStack && item.techStack.length > 0 && (
                    <>
                      <h4>Tech Stack</h4>
                      <div className={styles.techStack}>
                        {item.techStack.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </>
                  )}
                  {item.impact && item.impact.length > 0 && (
                    <>
                      <h4>Impact</h4>
                      <ul className={styles.impact}>
                        {item.impact.map((imp, idx) => (
                          <li key={idx}>{imp}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;