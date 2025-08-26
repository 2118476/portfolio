import React from 'react';
import { useAnimation } from '../../context/AnimationContext';
import styles from './BackgroundContact.module.scss';

/*
 * Animated background for the Contact section.  A soft
 * diagonal gradient drifts gently back and forth to evoke a
 * calming field or wave.  Animation is disabled when the user
 * opts out via the global toggle or system preference.
 */
const BackgroundContact = () => {
  const { animationsEnabled } = useAnimation();
  return (
    <div
      className={`${styles.background} ${!animationsEnabled ? styles.static : ''}`}
      aria-hidden="true"
    />
  );
};

export default BackgroundContact;