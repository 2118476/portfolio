import React from 'react';
import { useAnimation } from '../../context/AnimationContext';
import Starfield from '../ui/Starfield';
import styles from './BackgroundSkills.module.scss';

/*
 * Animated background for the Skills section.  The pattern uses
 * layered radial gradients to create the impression of sparkling
 * particles gently drifting across the canvas.  When animations
 * are disabled the pattern remains static.  Colours derive from
 * the design tokens defined in tokens.scss and modern.css.
 */
const BackgroundSkills = () => {
  const { animationsEnabled } = useAnimation();
  return (
    <>
      <Starfield numStars={100} />
      <div
        className={`${styles.background} ${!animationsEnabled ? styles.static : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default BackgroundSkills;