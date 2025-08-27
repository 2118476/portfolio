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

  // Track whether the mobile navigation is open.  When true the
  // `navLinks` are displayed as a vertical dropdown on small screens.
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu when navigating to a new section or when
  // resizing the window up to a desktop breakpoint.  This ensures
  // that the dropdown doesn’t remain open inadvertently.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo using a distinctive font.  When focused or hovered it
            subtly scales or increases letter-spacing for a micro
            interaction. */}
        <a className={styles.logo} href="#hero">
          Mihretab
        </a>
        {/* Navigation links.  Hidden on small screens. */}
        <nav
          id="main-navigation"
          className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}
          aria-label="Main navigation"
        >
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        {/* Theme toggle button remains visible on all screen sizes. */}
        <div className={styles.toggleGroup}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        {/* Mobile menu toggle positioned at the far right. */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <i
            className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;