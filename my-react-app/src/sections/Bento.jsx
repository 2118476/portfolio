import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Counter from '../components/ui/Counter';
import StatusWidget from '../components/ui/StatusWidget';
import DeviceMockup from '../components/ui/DeviceMockup';
import Tilt from '../components/ui/Tilt';
import habeshaShot from '../assets/shots/habesha-feed.jpg';
import styles from './Bento.module.scss';

const counters = [
  { to: 6, label: 'Full-stack builds' },
  { to: 3, label: 'Live demos' },
  { to: 12, label: 'Technologies' },
  { to: 4, label: 'Domains' }
];

const topTech = ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'Twilio'];

const Bento = () => (
  <section id="snapshot" className={styles.section} aria-label="Snapshot">
    <Container>
      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Tilt className={`${styles.tile} ${styles.intro}`}>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            At a glance
          </span>
          <h2>Building useful software, end to end.</h2>
          <p>
            Frontend, backend, database, auth, and deployment — designed to work together and
            actually ship.
          </p>
          <div className={styles.introActions}>
            <Button href="#projects" icon="fas fa-table-cells-large" magnetic>
              View work
            </Button>
            <Button href="/Mihretab-Nega-CV.pdf" variant="outline" icon="fas fa-file-arrow-down" download magnetic>
              Download CV
            </Button>
          </div>
        </Tilt>

        <Tilt className={`${styles.tile} ${styles.stats}`}>
          {counters.map((counter) => (
            <div key={counter.label} className={styles.stat}>
              <strong>
                <Counter to={counter.to} />
              </strong>
              <span>{counter.label}</span>
            </div>
          ))}
        </Tilt>

        <Tilt className={`${styles.tile} ${styles.status}`}>
          <StatusWidget />
        </Tilt>

        <Tilt className={`${styles.tile} ${styles.tech}`}>
          <h3>Core stack</h3>
          <div className={styles.badges}>
            {topTech.map((tech, index) => (
              <Badge key={tech} color={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'}>
                {tech}
              </Badge>
            ))}
          </div>
        </Tilt>

        <Tilt className={`${styles.tile} ${styles.featured}`}>
          <div className={styles.featuredText}>
            <span className={styles.pill}>Featured</span>
            <h3>UK Habesha</h3>
            <p>Community platform — React + Spring Boot.</p>
            <Button to="/projects/habesha-community" variant="outline" icon="fas fa-book-open" magnetic>
              Case study
            </Button>
          </div>
          <DeviceMockup src={habeshaShot} alt="UK Habesha community platform" className={styles.device} />
        </Tilt>
      </motion.div>
    </Container>
  </section>
);

export default Bento;
