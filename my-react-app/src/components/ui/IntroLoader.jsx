import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './IntroLoader.module.scss';

/*
 * Short name-reveal shown once per browser session on first load.
 * Skips entirely for reduced-motion users and on repeat visits.
 */
const IntroLoader = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return !window.sessionStorage.getItem('intro-shown');
  });

  useEffect(() => {
    if (!visible) return undefined;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem('intro-shown', '1');
      setVisible(false);
    }, 1900);
    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(timer);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className={styles.mark}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            MN
          </motion.div>
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Mihretab Nega
          </motion.p>
          <div className={styles.barTrack}>
            <motion.div
              className={styles.barFill}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
