import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollSpy from '../../hooks/useScrollSpy';
import { useRecruiter } from '../../context/RecruiterContext';
import styles from './Navbar.module.scss';

const openCommandPalette = () => {
  window.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true })
  );
};

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { recruiter, toggleRecruiter } = useRecruiter();
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
          <span className={styles.brandText}>
            <strong>Mihretab Nega</strong>
            <span>Full-stack developer</span>
          </span>
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
            className={`${styles.iconButton} ${styles.social}`}
            type="button"
            onClick={openCommandPalette}
            aria-label="Open command palette"
            title="Search (Ctrl/Cmd + K)"
          >
            <i className="fas fa-magnifying-glass" aria-hidden="true" />
          </button>
          <button
            className={`${styles.iconButton} ${styles.social} ${recruiter ? styles.activeToggle : ''}`}
            type="button"
            onClick={toggleRecruiter}
            aria-pressed={recruiter}
            aria-label="Toggle recruiter mode"
            title="Recruiter mode"
          >
            <i className="fas fa-user-tie" aria-hidden="true" />
          </button>
          <a
            className={`${styles.iconButton} ${styles.social}`}
            href="https://github.com/2118476"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>
          <a className={styles.cta} href={linkFor('contact')}>
            Let's Build
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
