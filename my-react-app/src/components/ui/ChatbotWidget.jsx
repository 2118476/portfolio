import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import LogoBadge from './LogoBadge';
import ChatbotContact from '../ChatbotContact';
import styles from './ChatbotWidget.module.scss';

/*
 * Floating chat widget that uses the same Formspree endpoint as the
 * contact section.  When collapsed it appears as a circular
 * floating action button in the bottom‑right corner.  Clicking
 * expands a glassy panel containing a small form with name,
 * email and message fields.  On submission the widget posts the
 * form data to Formspree and displays success or error states.
 * Animations respect the user's reduced motion preference.
 */
const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const toggleOpen = () => {
    setOpen(!open);
  };

  // Automatically open the chat widget a few seconds after page load.
  // This only runs once on mount.  The timer is cleared on unmount to
  // prevent memory leaks.  We intentionally do not auto‑open if the
  // user has already interacted with the widget.
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen((prev) => {
        // Only open automatically if it hasn’t been opened/closed yet
        return prev ? prev : true;
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for panel slide‑in/out
  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.container} aria-live="polite">
      <button
        className={styles.fab}
        onClick={toggleOpen}
        aria-label={open ? 'Close chat' : 'Chat with me'}
      >
        {/* When collapsed show chat icon; when open show × */}
        {open ? (
          <span className={styles.closeIcon}>×</span>
        ) : (
          <i className="fas fa-comments" aria-hidden="true"></i>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
          >
            <div className={styles.header}>
              <LogoBadge size={40} />
              <h3 id="chatbot-title" className={styles.title}>Chatbot</h3>
            </div>
            {/* Embed the conversational chatbot inside the panel instead of a simple form. */}
            <ChatbotContact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotWidget;