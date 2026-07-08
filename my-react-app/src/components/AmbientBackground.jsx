import React from 'react';
import styles from './AmbientBackground.module.scss';

/*
 * Fixed, purely decorative background layer: a quiet neutral canvas with
 * subtle structure. Sits behind all content and ignores pointer events.
 */
const AmbientBackground = () => (
  <div className={styles.ambient} aria-hidden="true">
    <div className={styles.grid} />
    <div className={styles.wash} />
    <div className={styles.edge} />
  </div>
);

export default AmbientBackground;
