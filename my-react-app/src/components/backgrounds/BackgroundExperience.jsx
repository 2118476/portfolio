import React from 'react';
import { useAnimation } from '../../context/AnimationContext';
import styles from './BackgroundExperience.module.scss';

/*
 * Animated background for the Experience & Education section.  A
 * subtle pattern of vertical lines creates the feel of a glowing
 * timeline.  The pattern slowly slides horizontally to imply
 * progression.  When animations are disabled the lines remain
 * static.
 */
const BackgroundExperience = () => {
  const { animationsEnabled } = useAnimation();
  return (
    <div
      className={`${styles.background} ${!animationsEnabled ? styles.static : ''}`}
      aria-hidden="true"
    />
  );
};

export default BackgroundExperience;