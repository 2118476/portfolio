import React, { useEffect, useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import useDarkMode from '../../hooks/useDarkMode';
import { useAnimation } from '../../context/AnimationContext';
import styles from './Navbar.module.scss';

/*
 * The navigation bar is sticky and uses a glassmorphism effect.  It
 * becomes opaque when the user scrolls beyond a threshold and
 * highlights the active section using a simple scrollspy hook.
 */
const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const { animationsEnabled, toggleAnimations } = useAnimation();
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
        <a className={styles.logo} href="#hero">
          Mihretab
        </a>
        {/* Hamburger button for mobile screens.  This is hidden on larger
            viewports via CSS.  The icon swaps between the bars and a
            close icon based on the open state. */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <i
            className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}
            aria-hidden="true"
          ></i>
        </button>
        <nav
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
        <div className={styles.toggleGroup}>
          <button
            className={styles.animToggle}
            onClick={toggleAnimations}
            aria-label={animationsEnabled ? 'Pause animations' : 'Play animations'}
          >
            {/* Replace the star/pause emoji with FontAwesome icons for a cleaner look */}
            <i
              className={`fas ${animationsEnabled ? 'fa-pause' : 'fa-play'}`}
              aria-hidden="true"
            ></i>
          </button>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;