import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';

/*
 * Displays a small button in the bottom‑right corner when the user
 * scrolls down the page.  Clicking the button scrolls smoothly back
 * to the top.  The button hides itself at the top of the page.
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    // Invoke once on mount
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;
  return (
    <button
      className={styles.scrollTop}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;