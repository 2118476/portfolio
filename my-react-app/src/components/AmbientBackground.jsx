import React from 'react';
import photoOne from '../assets/bg-photo-1.jpg';
import photoTwo from '../assets/bg-photo-2.jpg';
import photoThree from '../assets/bg-photo-3.jpg';
import photoFour from '../assets/bg-photo-4.jpg';
import styles from './AmbientBackground.module.scss';

/*
 * Fixed decorative layer: muted portfolio photos behind a neutral readability
 * veil. The images give depth while the theme tokens keep light/dark polished.
 */
const photos = [photoOne, photoTwo, photoThree, photoFour];

const AmbientBackground = () => (
  <div className={styles.ambient} aria-hidden="true">
    <div className={styles.photos}>
      {photos.map((photo, index) => (
        <div
          key={photo}
          className={styles.slide}
          style={{ backgroundImage: `url(${photo})`, '--slide': index }}
        />
      ))}
    </div>
    <div className={styles.grid} />
    <div className={styles.wash} />
    <div className={styles.edge} />
  </div>
);

export default AmbientBackground;
