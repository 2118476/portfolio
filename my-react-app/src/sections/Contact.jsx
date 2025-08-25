import React, { useState } from 'react';
import Section from '../components/layout/Section';
import { motion, AnimatePresence } from 'framer-motion';
import LogoBadge from '../components/ui/LogoBadge';
import Button from '../components/ui/Button';
import styles from './Contact.module.scss';

/*
 * Contact section with an accessible form.  Utilises Formspree to
 * handle submissions so that the site can be deployed statically.
 * Feedback messages are shown for success and error states.
 */
const Contact = () => {
  const [status, setStatus] = useState(null);

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
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <Section id="contact" className={styles.contact}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p
        className={styles.subtext}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        I'm always open to discussing new projects or opportunities. Feel free
        to reach out!
      </motion.p>
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </motion.form>
      <AnimatePresence>
        {status === 'SUCCESS' && (
          <motion.div
            className={`${styles.popup} ${styles.success}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            role="alert"
          >
            <LogoBadge size={32} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
        {status === 'ERROR' && (
          <motion.div
            className={`${styles.popup} ${styles.error}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            role="alert"
          >
            <LogoBadge size={32} />
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;