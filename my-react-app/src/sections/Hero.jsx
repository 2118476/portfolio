import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import heroSetup from '../assets/hero-setup.png';
import Starfield from '../components/ui/Starfield';
import styles from './Hero.module.scss';

/*
 * Hero section introducing the developer.  A typewriter effect
 * animates through a set of technologies unless the user has
 * `prefers‑reduced‑motion` enabled, in which case the full list is
 * displayed statically.  The background uses a randomly seeded
 * Unsplash image via the picsum service.
 */
const phrases = ['Java', 'Spring Boot', 'React', 'MySQL', 'Twilio'];

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      setDisplayText(currentPhrase.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentPhrase.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setDisplayText('');
        }, 1000);
      }
    }, 120);
    return () => clearInterval(typeInterval);
  }, [currentPhraseIndex, prefersReducedMotion]);

  return (
    <section id="hero" className={styles.hero}>
      <div
        className={styles.background}
        aria-hidden="true"
        /* Apply the primary desk setup image at runtime.  A remote
           fallback remains in CSS. */
        style={{
          backgroundImage: `url(${heroSetup})`
        }}
      ></div>
      {/* Animated starfield sits behind the overlay. */}
      <Starfield numStars={180} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span>Mihretab Nega</span>
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer specializing in{' '}
          <span className={styles.typewriter}>
            {prefersReducedMotion
              ? 'Java • Spring Boot • React • MySQL • Twilio'
              : displayText}
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#projects" className={styles.cta}>
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;