import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import profile from '../assets/me.jpg';
import artwork from '../assets/bg-photo-1.jpg';
import styles from './Hero.module.scss';

const roles = [
  'full-stack platforms',
  'booking systems',
  'community apps',
  'business dashboards',
  'automation tools'
];

const trustBadges = ['React', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'JWT', 'Cloud Deployment'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            UK-based full-stack developer
          </span>
          <h1>
            Full-stack developer building <span className="gradient-text">real-world web apps</span>{' '}
            for businesses and communities.
          </h1>
          <p className={styles.lead}>
            I build practical platforms, dashboards, booking systems, community apps, and
            automation tools with React, Spring Boot, databases, authentication, APIs, and
            deployment in mind from day one.
          </p>

          <div className={styles.roleLine} aria-live="polite">
            Building <span>{roles[roleIndex]}</span>
          </div>

          <div className={styles.actions}>
            <Button href="#projects" icon="fas fa-table-cells-large">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" icon="fas fa-handshake">
              Hire Me
            </Button>
            <Button href="/Mihretab-Nega-CV.pdf" variant="outline" icon="fas fa-file-arrow-down" download>
              Download CV
            </Button>
          </div>

          <div className={styles.badges} aria-label="Core technologies">
            {trustBadges.map((badge, index) => (
              <Badge key={badge} color={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'}>
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className={styles.stageGlow} aria-hidden="true" />
          <div className={styles.orbit} aria-hidden="true">
            <span />
            <span />
          </div>

          <div className={styles.floatCard} aria-hidden="true">
            <img src={artwork} alt="" />
            <div className={styles.floatMeta}>
              <strong>Habesha Community Platform</strong>
              <span>React · Spring Boot · PostgreSQL</span>
              <div className={styles.progress}>
                <span style={{ width: '82%' }} />
              </div>
            </div>
            <i className="fas fa-circle-check" aria-hidden="true" />
          </div>

          <div className={`${styles.floatCard} ${styles.floatCardAlt}`} aria-hidden="true">
            <span className={styles.floatIcon}>
              <i className="fas fa-calendar-check" aria-hidden="true" />
            </span>
            <div className={styles.floatMeta}>
              <strong>Hair Salon Booking System</strong>
              <span>Java · Spring Boot · MySQL</span>
              <div className={styles.progress}>
                <span style={{ width: '100%' }} />
              </div>
            </div>
          </div>

          <div className={styles.visual} aria-label="Developer dashboard preview">
          <div className={styles.profileStrip}>
            <img src={profile} alt="Mihretab Nega" loading="eager" />
            <div>
              <strong>Mihretab Nega</strong>
              <span>Software Engineer / Full-stack Developer</span>
            </div>
          </div>

          <div className={styles.window}>
            <div className={styles.windowTop}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.codeRows} aria-hidden="true">
              <span className={styles.wide} />
              <span />
              <span className={styles.short} />
              <span className={styles.medium} />
            </div>
          </div>

          <div className={styles.metrics}>
            <div>
              <strong>6</strong>
              <span>featured builds</span>
            </div>
            <div>
              <strong>BSc</strong>
              <span>Computer Science</span>
            </div>
            <div>
              <strong>UK</strong>
              <span>roles and clients</span>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
