import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
/*
 * Import the latest hero background.  This high‑resolution image
 * shows a laptop in use with code floating in the air.  It
 * replaces previous desk photos and remains crisp on light and
 * dark backgrounds.  The file is stored in the assets folder
 * alongside other static images.
 */
import heroNew from '../assets/hero-new.png';
import heroVideo from '../assets/Video_Ready_for_Portfolio_Website.mp4';
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
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  /*
   * Cycle through a list of technology names using a simple
   * typewriter effect.  When the user has enabled reduced
   * motion the full list is displayed statically to respect
   * accessibility preferences.
   */
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

  /*
   * Use an IntersectionObserver to pause the background video when
   * the hero is off‑screen.  This greatly reduces CPU usage when
   * the user scrolls to other sections.  The observer watches the
   * hero wrapper and toggles playback accordingly.  If reduced
   * motion is enabled the video never plays.
   */
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const vid = videoRef.current;
        if (!vid) return;
        if (entry.isIntersecting) {
          // attempt to play the video.  Catch and ignore errors
          // that may occur if autoplay is blocked.
          const playPromise = vid.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {
              /* silently ignore playback errors */
            });
          }
          vid.playbackRate = 1.0;
        } else {
          vid.pause();
        }
      },
      { threshold: 0 }
    );
    const element = heroRef.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={heroRef} id="hero" className={styles.hero}>
      {/*
       * Video background wrapper.  When reduced motion is
       * preferred we render a static background image instead of a
       * video.  The wrapper is sticky so that the video remains
       * fixed in the viewport while the hero content scrolls over
       * it.  Once the hero is scrolled out of view the wrapper
       * scrolls away and the video disappears.
       */}
      <div className={styles.heroVideoWrap} aria-hidden="true">
        {prefersReducedMotion ? (
          <div
            className={styles.fallback}
            style={{ backgroundImage: `url(${heroNew})` }}
          />
        ) : (
          <video
            ref={videoRef}
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster={heroNew}
            /* Delay loading until the video is needed */
            preload="none"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>
      {/* Animated starfield sits behind the overlay. */}
      <Starfield numStars={180} />
      <div className={styles.overlay}></div>
      {/*
       * Wrap the content in an absolute positioned container
       * so that it sits centred over the video regardless of
       * the hero’s layout.  This prevents the video wrapper
       * from pushing the content to the side in flex layouts.
       */}
      <div className={styles.contentWrapper}>
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
      </div>
    </section>
  );
};

export default Hero;