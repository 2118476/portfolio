import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollSpy from '../../hooks/useScrollSpy';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.scss';

const navItems = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const onHome = pathname === '/';
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds, 96);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On the home page use in-page anchors; elsewhere route back to home + hash.
  const linkFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href={onHome ? '#hero' : '/'} aria-label="Mihretab Nega home">
          <span className={styles.brandMark}>MN</span>
          <span className={styles.brandText}>Mihretab Nega</span>
        </a>

        <nav
          id="main-navigation"
          className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={linkFor(item.id)}
              className={onHome && activeId === item.id ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true" />
          </button>
          <a className={styles.cta} href="/Mihretab-Nega-CV.pdf" download>
            Download CV
          </a>
          <button
            className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
