import React, { useState } from 'react';
import styles from './WhatsAppBubble.module.scss';

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');

/*
 * Floating WhatsApp click-to-chat bubble. When VITE_WHATSAPP_NUMBER is set it
 * links to wa.me; otherwise it shows a clearly-disabled "coming soon" state so
 * there is never a broken WhatsApp link on the live site.
 */
const WhatsAppBubble = () => {
  const [open, setOpen] = useState(false);
  const enabled = Boolean(whatsappNumber);

  const shared = (
    <>
      <i className="fab fa-whatsapp" aria-hidden="true" />
      <span className={styles.pulse} aria-hidden="true" />
    </>
  );

  return (
    <div className={styles.wrap}>
      {open && (
        <div className={styles.tip} role="status">
          {enabled ? 'Chat with me on WhatsApp' : 'WhatsApp coming soon'}
        </div>
      )}
      {enabled ? (
        <a
          className={styles.bubble}
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {shared}
        </a>
      ) : (
        <button
          type="button"
          className={`${styles.bubble} ${styles.disabled}`}
          aria-label="WhatsApp coming soon"
          aria-disabled="true"
          onClick={() => setOpen((value) => !value)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {shared}
        </button>
      )}
    </div>
  );
};

export default WhatsAppBubble;
