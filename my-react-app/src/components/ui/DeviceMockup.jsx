import React from 'react';
import styles from './DeviceMockup.module.scss';

/*
 * Frames a screenshot inside a phone body (bezel + notch). Purely visual.
 */
const DeviceMockup = ({ src, alt = '', className = '' }) => (
  <div className={`${styles.phone} ${className}`}>
    <span className={styles.notch} aria-hidden="true" />
    <div className={styles.screen}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  </div>
);

export default DeviceMockup;
