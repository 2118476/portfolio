import React, { useState } from 'react';
import Button from './ui/Button';
import styles from '../sections/Contact.module.scss';

/*
 * A simple contact form used in the Contact section.  It exposes
 * name, email and message fields along with a send button.  On
 * submission the data is posted to Formspree and the form shows
 * success or error feedback.  The form respects existing
 * styling from Contact.module.scss so that it integrates with
 * the surrounding section.  All interactive elements are
 * keyboard accessible.
 */
const ContactForm = () => {
  const [status, setStatus] = useState(null);

  // Handle form submission.  Post the form data to the
  // configured Formspree endpoint.  Reset the form on success and
  // provide basic feedback messages.  Errors are caught and
  // reported to the user.  After a delay the status is cleared
  // again so repeated submissions show fresh feedback.
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
    // Clear the feedback after a few seconds so it doesn’t stick
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="contact-name">Name</label>
        <input type="text" id="contact-name" name="name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4" required></textarea>
      </div>
      <Button type="submit" variant="primary">Send</Button>
      {status === 'SUCCESS' && (
        <div className={`${styles.popup} ${styles.success}`} role="alert">
          <span>Thank you! Your message has been sent.</span>
        </div>
      )}
      {status === 'ERROR' && (
        <div className={`${styles.popup} ${styles.error}`} role="alert">
          <span>Something went wrong. Please try again.</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;