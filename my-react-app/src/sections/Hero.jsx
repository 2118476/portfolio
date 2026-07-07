import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ScrambleText from '../components/ui/ScrambleText';
import ParticleField from '../components/ui/ParticleField';
import Parallax from '../components/ui/Parallax';
import TechOrbit from '../components/ui/TechOrbit';
import DeviceMockup from '../components/ui/DeviceMockup';
import StatusWidget from '../components/ui/StatusWidget';
import habeshaShot from '../assets/shots/habesha-feed.jpg';
import styles from './Hero.module.scss';

const roles = [
  'full-stack platforms',
  'booking systems',
  'community apps',
  'business dashboards',
  'automation tools'
];

const trustBadges = [
  'React',
  'JavaScript',
  'Java',
  'Spring Boot',
  'REST APIs',
  'PostgreSQL',
  'MySQL',
  'JWT',
  'BCrypt',
  'Twilio',
  'Netlify',
  'Render'
];

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
      <ParticleField />

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
            <ScrambleText text="Mihretab Nega" className={styles.name} />
            <span className={styles.headline}>
              Full-stack developer building real-world{' '}
              <span className="gradient-text">React + Spring Boot</span> applications for
              businesses and communities.
            </span>
          </h1>
          <p className={styles.lead}>
            I create practical web platforms, booking systems, community apps, business
            tools, and automation-focused software with clean frontend experiences and
            secure backend APIs.
          </p>

          <div className={styles.roleLine} aria-live="polite">
            Building <span>{roles[roleIndex]}</span>
          </div>

          <div className={styles.actions}>
            <Button href="#projects" icon="fas fa-table-cells-large" magnetic>
              View Projects
            </Button>
            <Button href="/Mihretab-Nega-CV.pdf" variant="secondary" icon="fas fa-file-arrow-down" download magnetic>
              Download CV
            </Button>
            <Button href="#contact" variant="outline" icon="fas fa-paper-plane" magnetic>
              Contact Me
            </Button>
            <Button
              href="https://github.com/2118476"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon="fab fa-github"
              magnetic
            >
              GitHub
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

        <Parallax speed={26} className={styles.stageParallax}>
        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className={styles.stageGlow} aria-hidden="true" />

          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span className={styles.lights}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.windowTitle}>mihretab.dev — workspace</span>
              <span className={styles.liveTag}>
                <span className={styles.liveDot} /> live
              </span>
            </div>

            <div className={styles.windowBody}>
              <DeviceMockup
                src={habeshaShot}
                alt="UK Habesha community platform"
                className={styles.device}
              />

              <div className={styles.panel}>
                <StatusWidget />
                <div className={styles.orbitWrap}>
                  <TechOrbit />
                </div>
                <div className={styles.metrics}>
                  <div>
                    <strong>6</strong>
                    <span>builds</span>
                  </div>
                  <div>
                    <strong>BSc</strong>
                    <span>Comp Sci</span>
                  </div>
                  <div>
                    <strong>3</strong>
                    <span>live demos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </Parallax>
      </div>
    </section>
  );
};

export default Hero;
