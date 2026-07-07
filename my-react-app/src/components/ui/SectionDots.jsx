import React, { useEffect, useState } from 'react';
import styles from './SectionDots.module.scss';

const dots = [
  { id: 'hero', label: 'Top' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'github', label: 'Code' },
  { id: 'contact', label: 'Contact' }
];

/*
 * Fixed vertical progress dots that track the section in view and jump to
 * it on click. Hidden on small screens.
 */
const SectionDots = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    dots.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.dots} no-print`} aria-label="Section navigation">
      {dots.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? styles.active : ''}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
        >
          <span className={styles.dot} />
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default SectionDots;
