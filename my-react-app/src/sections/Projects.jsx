import React, { useMemo, useState } from 'react';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
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
  const [selectedProject, setSelectedProject] = useState(null);
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

      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className={`${styles.card} ${styles[accentByCategory[project.category]] || ''}`}
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
                <Button href="#contact" variant="secondary" icon="fas fa-message">
                  Ask for walkthrough
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
              <Button
                type="button"
                variant="outline"
                icon="fas fa-circle-info"
                onClick={() => setSelectedProject(project)}
              >
                View details
              </Button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          title={`${selectedProject.title} case study`}
        >
          <div className={styles.modalContent}>
            <Badge color="primary">{selectedProject.category}</Badge>
            <h3>{selectedProject.title}</h3>

            <div className={styles.modalGrid}>
              <div>
                <h4>Problem</h4>
                <p>{selectedProject.problem}</p>
              </div>
              <div>
                <h4>Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>
              <div>
                <h4>Result / direction</h4>
                <p>{selectedProject.caseStudy.result}</p>
              </div>
            </div>

            {selectedProject.screenshots && (
              <div>
                <h4>Screenshots</h4>
                <div className={styles.gallery}>
                  {selectedProject.screenshots.map((shot) => (
                    <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4>Main features</h4>
              <ul className={styles.modalList}>
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>What I built</h4>
              <p>{selectedProject.caseStudy.role}</p>
            </div>

            <div>
              <h4>Tech stack</h4>
              <div className={styles.stack}>
                {selectedProject.stack.map((tech) => (
                  <Badge key={tech} color="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className={styles.modalActions}>
              {selectedProject.demo && (
                <Button
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="fas fa-arrow-up-right-from-square"
                >
                  Open demo
                </Button>
              )}
              {selectedProject.code && (
                <Button
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  icon="fab fa-github"
                >
                  {selectedProject.codeBackend ? 'Frontend code' : 'Code'}
                </Button>
              )}
              {selectedProject.codeBackend && (
                <Button
                  href={selectedProject.codeBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  icon="fab fa-github"
                >
                  Backend code
                </Button>
              )}
              <Button href="#contact" variant="secondary" icon="fas fa-paper-plane">
                Discuss similar work
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;
