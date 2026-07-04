import React from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.scss';
import Container from './Container';

/*
 * Generic wrapper for page sections.  Applies top/bottom padding and
 * optional custom class names, plus a slide-style entrance when the
 * section scrolls into view — the direction/effect varies per section
 * so the page reads like a sequence of scene transitions.  Sections
 * must specify an `id` prop which is used for anchor linking and
 * scrollspying.
 */
const entrances = [
  { hidden: { opacity: 0, x: -110, rotate: -1.2 }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, scale: 0.9, y: 40 }, visible: { opacity: 1, scale: 1, y: 0 } },
  { hidden: { opacity: 0, x: 110, rotate: 1.2 }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, y: 90, rotateX: 16 }, visible: { opacity: 1, y: 0, rotateX: 0 } }
];

const pickEntrance = (id = '') => {
  let hash = 0;
  for (let index = 0; index < id.length; index += 1) {
    hash += id.charCodeAt(index);
  }
  return entrances[hash % entrances.length];
};

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <motion.div
        variants={pickEntrance(id)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <Container>{children}</Container>
      </motion.div>
    </section>
  );
};

export default Section;
