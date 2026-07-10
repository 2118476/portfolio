import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import habeshaShot from '../assets/shots/habesha-feed.jpg';
import styles from './Hero.module.scss';

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.inner}>
      <motion.div
        className={styles.copy}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Full-Stack Developer · London
        </span>

        <h1 className={styles.headline}>
          I build reliable web applications with{' '}
          <span className="gradient-text">React and Spring Boot</span>.
        </h1>

        <p className={styles.lead}>
          Computer Science graduate creating community platforms, booking systems and
          business tools — from frontend to deployment.
        </p>

        <div className={styles.actions}>
          <Button href="#projects" icon="fas fa-arrow-down">
            View My Work
          </Button>
          <Button
            href="/Mihretab-Nega-CV.pdf"
            variant="secondary"
            icon="fas fa-file-arrow-down"
            download
          >
            Download CV
          </Button>
        </div>
      </motion.div>

      <motion.div
        className={styles.stage}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          to="/projects/habesha-community"
          className={styles.shotFrame}
          aria-label="UK Habesha community platform — view case study"
        >
          <img
            src={habeshaShot}
            alt="UK Habesha community platform feed"
            fetchPriority="high"
          />
          <span className={styles.shotCaption}>
            <strong>UK Habesha</strong>
            <span>Community platform · React + Spring Boot</span>
          </span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;
