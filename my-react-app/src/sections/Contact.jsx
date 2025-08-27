import React from 'react';
import Section from '../components/layout/Section';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import BackgroundContact from '../components/backgrounds/BackgroundContact';
import styles from './Contact.module.scss';

/*
 * Contact section utilising a chatbot interface.  A subtle
 * animated background complements the design.  The ChatbotContact
 * component manages the conversation flow and handles
 * submission to Formspree.
 */
const Contact = () => {
  return (
    <Section id="contact" className={styles.contact}>
      <BackgroundContact />
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
        I\'m always open to discussing new projects or opportunities. Feel free
        to reach out!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Render a simple contact form rather than the chatbot.  The form
            collects name, email and message and submits to Formspree. */}
        <ContactForm />
      </motion.div>
    </Section>
  );
};

export default Contact;