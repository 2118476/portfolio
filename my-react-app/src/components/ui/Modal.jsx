import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.scss';
import LogoBadge from './LogoBadge';

/*
 * Accessible modal component.  Renders its content in a portal at
 * `document.body` to avoid z‑index issues.  Clicking outside the
 * modal or pressing Escape closes it.  Animations are provided by
 * framer‑motion.  The parent should control the `isOpen` state.
 */
const Modal = ({ isOpen, onClose, children }) => {
  // Lock body scroll when the modal is open.  Store the scroll
  // position so it can be restored on close.  Without this the
  // background would scroll behind the overlay which is
  // distracting and can cause layout shifts.
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    const originalStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      overflow: document.body.style.overflow
    };
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.position = originalStyle.position || '';
      document.body.style.top = originalStyle.top || '';
      document.body.style.overflow = originalStyle.overflow || '';
      // Restore the previous scroll position after releasing the lock
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.header}>
            <LogoBadge size={40} />
            <button
              className={styles.close}
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          <div className={styles.body}>{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Modal;