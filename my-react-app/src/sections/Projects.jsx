import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Tilt from '../components/ui/Tilt';
import { getProjectCategories, projects } from '../data/projects';
import styles from './Projects.module.scss';

const accentByCategory = {
  Community: 'community',
  Business: 'business',
  Automation: 'automation',
  'AI/Tools': 'ai',
  'Full-stack': 'fullstack'
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(() => getProjectCategories(), []);

  const visibleProjects = projects.filter((project) => {
    return activeCategory === 'All' || project.category === activeCategory;
  });

  return (
    <Section id="projects" className={styles.projects}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Featured projects
          </span>
          <h2 className="section-title">Strongest builds first, with business context.</h2>
        </div>
        <p className="section-copy">
          These projects highlight the type of work I want to do more of:
          useful full-stack products with clear users, data, authentication,
          dashboards, APIs, and deployment.
        </p>
      </div>

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

      <div className={styles.grid} role="list">
        <AnimatePresence initial={false}>
        {visibleProjects.map((project) => (
          <Tilt
            as={motion.article}
            tilt={false}
            key={project.id}
            layout
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            role="listitem"
            className={`${styles.card} ${styles[accentByCategory[project.category]] || ''} ${
              project.featured ? styles.featuredCard : ''
            }`}
          >
            <div className={styles.mockup} aria-label={project.visual.label}>
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
      </div>
    </Section>
  );
};

export default Projects;
