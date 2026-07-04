import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      className={styles.scrollTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      type="button"
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
