import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecruiterMode } from '../../context/RecruiterModeContext';
import useScrollSpy from '../../hooks/useScrollSpy';
import styles from './SectionDots.module.scss';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'snapshot', label: 'Snapshot' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Proof' },
  { id: 'contact', label: 'Contact' }
];

const SectionDots = () => {
  const { pathname } = useLocation();
  const { recruiterMode } = useRecruiterMode();
  const visibleSections = useMemo(
    () => sections.filter((section) => !recruiterMode || !['services', 'testimonials'].includes(section.id)),
    [recruiterMode]
  );
  const ids = useMemo(() => visibleSections.map((section) => section.id), [visibleSections]);
  const activeId = useScrollSpy(ids, 120);

  if (pathname !== '/') return null;

  return (
    <nav className={styles.dots} aria-label="Section navigation">
      {visibleSections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeId === section.id ? styles.active : ''}
          aria-label={section.label}
        >
          <span>{section.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default SectionDots;
