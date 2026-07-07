import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Tilt from '../components/ui/Tilt';
import DemoStatus from '../components/ui/DemoStatus';
import { getProjectCategories, projects } from '../data/projects';
import styles from './Projects.module.scss';

const accentByCategory = {
  Community: 'community',
  Business: 'business',
  Automation: 'automation',
  'AI/Tools': 'ai',
  'Full-stack': 'fullstack'
};

const titleWords = 'Strongest builds first, with business context.'.split(' ');

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
};

const headingItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const headingWord = {
  hidden: { y: '115%' },
  visible: { y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(() => getProjectCategories(), []);

  const visibleProjects = projects.filter((project) => {
    return activeCategory === 'All' || project.category === activeCategory;
  });

  return (
    <Section id="projects" className={styles.projects}>
      <motion.div
        className={styles.heading}
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.span className={`section-kicker ${styles.headingKicker}`} variants={headingItem}>
          <span className="eyebrow-dot" />
          Featured projects
        </motion.span>
        <h2 className={styles.headingTitle} aria-label="Strongest builds first, with business context.">
          {titleWords.map((word, index) => (
            <span key={`${word}-${index}`} className={styles.wordMask} aria-hidden="true">
              <motion.span className={styles.word} variants={headingWord}>
                {word}
              </motion.span>
            </span>
          ))}
        </h2>
        <motion.p className={styles.headingCopy} variants={headingItem}>
          These projects highlight the type of work I want to do more of: useful full-stack
          products with clear users, data, authentication, dashboards, APIs, and deployment.
        </motion.p>
      </motion.div>

      <div className={styles.filters} aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? styles.activeFilter : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className={styles.railHint} aria-hidden="true">
        <i className="fas fa-arrows-left-right" /> Scroll to explore
      </p>

      <motion.div className={styles.grid} layout>
        <AnimatePresence initial={false}>
        {visibleProjects.map((project) => (
          <Tilt
            as={motion.article}
            tilt={false}
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`${styles.card} ${styles[accentByCategory[project.category]] || ''} ${
              project.featured ? styles.featuredCard : ''
            }`}
          >
            <div className={styles.mockup} aria-label={project.visual.label}>
              {project.demo && <DemoStatus url={project.demo} className={styles.demoStatus} />}
              {project.screenshots ? (
                <img
                  className={styles.mockupShot}
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  loading="lazy"
                />
              ) : (
                <>
                  <div className={styles.mockupTop}>
                    <i className={project.visual.icon} aria-hidden="true" />
                    <span>{project.category}</span>
                  </div>
                  <div className={styles.mockupBody}>
                    <span className={styles.lineWide} />
                    <span />
                    <span className={styles.lineShort} />
                  </div>
                  <div className={styles.mockupMetrics}>
                    {project.visual.metrics.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                  <span className={styles.mockupNote}>
                    Illustrative preview — screenshots coming soon
                  </span>
                </>
              )}
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <Badge color="primary">{project.category}</Badge>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className={styles.summary}>{project.solution}</p>
              <div className={styles.stack}>
                {project.stack.slice(0, 5).map((tech, index) => (
                  <Badge key={tech} color={index % 2 === 0 ? 'secondary' : 'tertiary'}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className={styles.cardActions}>
              {project.demo ? (
                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="fas fa-arrow-up-right-from-square"
                >
                  Live demo
                </Button>
              ) : (
                <Button type="button" variant="secondary" icon="far fa-clock" disabled>
                  Demo coming soon
                </Button>
              )}
              {project.code && (
                <Button
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  icon="fab fa-github"
                >
                  Code
                </Button>
              )}
              {!project.code && project.privateCode && (
                <Button type="button" variant="outline" icon="fas fa-lock" disabled>
                  Private repo
                </Button>
              )}
              <Button
                to={`/projects/${project.id}`}
                variant="outline"
                icon="fas fa-book-open"
              >
                Case study
              </Button>
            </div>
          </Tilt>
        ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
