import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Parallax from '../components/ui/Parallax';
import ScrambleText from '../components/ui/ScrambleText';
import DeviceMockup from '../components/visual/DeviceMockup';
import ParticleConstellation from '../components/visual/ParticleConstellation';
import StatusWidget from '../components/visual/StatusWidget';
import TechOrbit from '../components/visual/TechOrbit';
import profile from '../assets/me.jpg';
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
  'Spring Boot',
  'PostgreSQL',
  'MySQL',
  'JWT',
  'Twilio',
  'Netlify',
  'Render'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <ParticleConstellation className={styles.constellation} />
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58 }}
        >
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            UK-based full-stack developer
          </span>
          <h1>
            <span className={styles.name}>Mihretab Nega</span>
            <span className={styles.headline}>
              Building practical <span className="gradient-text">React + Spring Boot</span> systems.
            </span>
          </h1>
          <p className={styles.lead}>
            Secure web platforms for communities, local businesses, dashboards,
            booking flows, and automation-heavy workflows.
          </p>

          <div className={styles.roleLine} aria-live="polite">
            Current build lane <ScrambleText text={roles[roleIndex]} />
          </div>

          <div className={styles.actions}>
            <Button href="#projects" icon="fas fa-table-cells-large">
              View Projects
            </Button>
            <Button to="/resume" variant="secondary" icon="fas fa-file-lines">
              Resume
            </Button>
            <Button href="#contact" variant="outline" icon="fas fa-paper-plane">
              Contact
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

        <Parallax className={styles.stage} distance={28}>
          <motion.div
            className={styles.osWindow}
            initial={{ opacity: 0, y: 32, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div className={styles.windowTop}>
              <span />
              <span />
              <span />
              <strong>builder-os/live</strong>
            </div>

            <div className={styles.windowGrid}>
              <div className={styles.profileCard}>
                <img src={profile} alt="Mihretab Nega" loading="eager" />
                <div>
                  <strong>Mihretab Nega</strong>
                  <span>Full-stack developer</span>
                </div>
              </div>

              <div className={styles.statusPanel}>
                <StatusWidget />
              </div>

              <div className={styles.devicePanel}>
                <DeviceMockup />
              </div>

              <div className={styles.orbitPanel}>
                <TechOrbit />
              </div>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
};

export default Hero;
