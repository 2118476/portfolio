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
  // Whether to show the chat invitation teaser.  This pill is
  // displayed after a delay for new visitors but is suppressed
  // once dismissed or after the chat has been opened in the
  // current session.
  const [showTeaser, setShowTeaser] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const toggleOpen = () => {
    setOpen(!open);
  };

  // Show a teaser pill after a delay instead of automatically
  // opening the chat.  We rely on sessionStorage to remember
  // whether the invitation has been dismissed or the chat was
  // previously opened.  The teaser will not display again once
  // dismissed for the duration of the session.
  useEffect(() => {
    // If the user has already opened or dismissed the chat in this
    // session then bail early.
    const dismissed = sessionStorage.getItem('chatTeaserDismissed');
    if (dismissed === 'true') return;
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // Whenever the chat is opened, hide the teaser and record the
  // dismissal so it doesn’t reappear this session.  Closing the
  // chat does not reset the flag.
  useEffect(() => {
    if (open) {
      setShowTeaser(false);
      sessionStorage.setItem('chatTeaserDismissed', 'true');
    }
  }, [open]);

  // Animation variants for panel slide‑in/out
  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.container} aria-live="polite">
      {/* Teaser pill inviting the visitor to chat.  Appears after
          a delay and disappears when clicked or dismissed. */}
      {showTeaser && !open && (
        <div
          className={styles.teaser}
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(true);
            }
          }}
          aria-label="Open chat"
        >
          {/* A short, friendly greeting with an emoji.  This shows after
              a 15 second delay and invites the visitor to tap the
              floating button.  Keeping the copy concise avoids
              cluttering the interface. */}
          <span>👋 Hi! Need help? Tap me to chat.</span>
          <button
            type="button"
            className={styles.teaserClose}
            aria-label="Dismiss chat invitation"
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
              sessionStorage.setItem('chatTeaserDismissed', 'true');
            }}
          >
            ×
          </button>
        </div>
      )}
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