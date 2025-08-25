import React, { useEffect, useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import useDarkMode from '../../hooks/useDarkMode';
import styles from './Navbar.module.scss';

/*
 * The navigation bar is sticky and uses a glassmorphism effect.  It
 * becomes opaque when the user scrolls beyond a threshold and
 * highlights the active section using a simple scrollspy hook.
 */
const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const sectionIds = [
    'hero',
    'about',
    'skills',
    'experience',
    'projects',
    'stats',
    'contact'
  ];
  const activeId = useScrollSpy(sectionIds, 80);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a className={styles.logo} href="#hero">
          Mihretab
        </a>
        <nav className={styles.navLinks} aria-label="Main navigation">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? styles.active : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;