import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import LogoBadge from './LogoBadge';
import Button from './Button';
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
  const [status, setStatus] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xanbnewg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
    // Reset status after a delay
    setTimeout(() => setStatus(null), 5000);
  };

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
              <h3 id="chatbot-title" className={styles.title}>Let's chat!</h3>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="chatbot-name">Name</label>
                <input type="text" id="chatbot-name" name="name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="chatbot-email">Email</label>
                <input type="email" id="chatbot-email" name="email" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="chatbot-message">Message</label>
                <textarea id="chatbot-message" name="message" rows="3" required></textarea>
              </div>
              <Button type="submit" variant="primary">Send</Button>
            </form>
            {status === 'SUCCESS' && (
              <div className={`${styles.popup} ${styles.success}`} role="alert">
                <LogoBadge size={32} className={styles.popupLogo} />
                <span>Message sent successfully!</span>
              </div>
            )}
              {status === 'ERROR' && (
              <div className={`${styles.popup} ${styles.error}`} role="alert">
                <LogoBadge size={32} className={styles.popupLogo} />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotWidget;