import React from 'react';
import styles from './Section.module.scss';
import Container from './Container';

/*
 * Generic wrapper for page sections.  Applies top/bottom padding and
 * optional custom class names.  Sections must specify an `id` prop
 * which is used for anchor linking and scrollspying.
 */
const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;