import React from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.scss';
import Container from './Container';

/*
 * Generic wrapper for page sections: top/bottom padding plus one quiet
 * fade-and-rise reveal when the section scrolls into view. Sections must
 * specify an `id` prop, used for anchor linking.
 */
const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>{children}</Container>
      </motion.div>
    </section>
  );
};

export default Section;
