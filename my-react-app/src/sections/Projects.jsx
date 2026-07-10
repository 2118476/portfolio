import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import { projects } from '../data/projects';
import styles from './Projects.module.scss';

const featuredIds = ['habesha-community', 'hair-salon', 'sms-voice-ivr'];
const featured = featuredIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

export const ProjectCard = ({ project, large = false }) => (
  <motion.article
    className={`${styles.card} ${large ? styles.cardLarge : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link to={`/projects/${project.id}`} className={styles.cardLink}>
      <div className={styles.visual}>
        {project.screenshots ? (
          <img
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <i className={project.visual.icon} />
            <span>{project.category}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.solution}</p>
        <div className={styles.meta}>
          <span className={styles.stack}>
            {project.stack.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </span>
          <span className={styles.caseLink}>
            View case study <i className="fas fa-arrow-right" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const Projects = () => (
  <Section id="projects" className={styles.projects}>
    <div className={styles.heading}>
      <div>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Featured work
        </span>
        <h2 className="section-title">Projects built for real users.</h2>
      </div>
      <Link to="/projects" className={styles.allLink}>
        View all projects <i className="fas fa-arrow-right" aria-hidden="true" />
      </Link>
    </div>

    <div className={styles.grid}>
      <ProjectCard project={featured[0]} large />
      <div className={styles.row}>
        {featured.slice(1).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </Section>
);

export default Projects;
