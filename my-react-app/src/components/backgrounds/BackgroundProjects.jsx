import React from 'react';
import { useAnimation } from '../../context/AnimationContext';
import styles from './BackgroundProjects.module.scss';

/*
 * Animated background for the Projects section.  A grid of soft
 * dots drifts slowly to create a parallax‑like effect.  This
 * pattern hints at isometric dots or gradient grids without
 * overwhelming the project cards.  Animation can be disabled via
 * the global toggle.
 */
const BackgroundProjects = () => {
  const { animationsEnabled } = useAnimation();
  return (
    <div
      className={`${styles.background} ${!animationsEnabled ? styles.static : ''}`}
      aria-hidden="true"
    />
  );
};

export default BackgroundProjects;