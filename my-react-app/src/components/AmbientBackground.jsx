import React from 'react';
import photoOne from '../assets/bg-photo-1.jpg';
import photoTwo from '../assets/bg-photo-2.jpg';
import photoThree from '../assets/bg-photo-3.jpg';
import photoFour from '../assets/bg-photo-4.jpg';
import styles from './AmbientBackground.module.scss';

/*
 * Fixed, purely decorative background layer: a slow cinematic slideshow
 * of photographs (crossfade + Ken Burns pan/zoom), a readability veil,
 * drifting aurora blobs, rotating decorative rings, and rising light
 * particles. Sits behind all content and ignores pointer events.
 */
const photos = [photoOne, photoTwo, photoThree, photoFour];
const particles = Array.from({ length: 14 }, (_, index) => index);

const AmbientBackground = () => (
  <div className={styles.ambient} aria-hidden="true">
    {photos.map((photo, index) => (
      <div
        key={photo}
        className={styles.slide}
        style={{ backgroundImage: `url(${photo})`, '--slide': index }}
      />
    ))}
    <div className={styles.overlay} />
    <div className={styles.mesh} />
    <div className={`${styles.blob} ${styles.blobOne}`} />
    <div className={`${styles.blob} ${styles.blobTwo}`} />
    <div className={`${styles.ring} ${styles.ringOne}`} />
    <div className={`${styles.ring} ${styles.ringTwo}`} />
    <div className={styles.particles}>
      {particles.map((particle) => (
        <span key={particle} style={{ '--i': particle }} />
      ))}
    </div>
  </div>
);

export default AmbientBackground;
