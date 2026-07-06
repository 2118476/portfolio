import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteChrome from '../components/layout/SiteChrome';
import Container from '../components/layout/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import styles from './CaseStudy.module.scss';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <SiteChrome>
        <main className={styles.notFound}>
          <Container>
            <h1>Project not found</h1>
            <p>That case study does not exist or may have moved.</p>
            <Button to="/#projects" icon="fas fa-arrow-left">
              Back to projects
            </Button>
          </Container>
        </main>
      </SiteChrome>
    );
  }

  return (
    <SiteChrome>
      <main className={styles.page}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/#projects" className={styles.back}>
              <i className="fas fa-arrow-left" aria-hidden="true" /> Back to projects
            </Link>

            <div className={styles.header}>
              <Badge color="primary">{project.category}</Badge>
              <span className={styles.status}>{project.status}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.lead}>{project.solution}</p>

            <div className={styles.actions}>
              {project.demo && (
                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="fas fa-arrow-up-right-from-square"
                >
                  Live demo
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
                  {project.codeBackend ? 'Frontend code' : 'Code'}
                </Button>
              )}
              {project.codeBackend && (
                <Button
                  href={project.codeBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  icon="fab fa-github"
                >
                  Backend code
                </Button>
              )}
              {!project.code && project.privateCode && (
                <Button type="button" variant="outline" icon="fas fa-lock" disabled>
                  Code available on request
                </Button>
              )}
            </div>
          </motion.div>

          {project.screenshots && (
            <div className={styles.gallery}>
              {project.screenshots.map((shot) => (
                <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
              ))}
            </div>
          )}

          <div className={styles.body}>
            <section className={styles.block}>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>
            <section className={styles.block}>
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </section>
            <section className={styles.block}>
              <h2>What I built</h2>
              <p>{project.caseStudy.role}</p>
            </section>
            <section className={styles.block}>
              <h2>Result / direction</h2>
              <p>{project.caseStudy.result}</p>
            </section>
          </div>

          <div className={styles.split}>
            <section>
              <h2>Key features</h2>
              <ul className={styles.features}>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Tech stack</h2>
              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <Badge key={tech} color="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          <div className={styles.cta}>
            <h2>Want something similar?</h2>
            <p>Tell me what you are trying to build and I will map out a sensible path.</p>
            <Button to="/#contact" icon="fas fa-paper-plane">
              Start a conversation
            </Button>
          </div>
        </Container>
      </main>
    </SiteChrome>
  );
};

export default CaseStudy;
