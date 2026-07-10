import React from 'react';
import SiteChrome from '../components/layout/SiteChrome';
import Container from '../components/layout/Container';
import { ProjectCard } from '../sections/Projects';
import { projects } from '../data/projects';
import styles from './AllProjects.module.scss';

const AllProjects = () => (
  <SiteChrome>
    <main className={styles.page}>
      <Container>
        <header className={styles.heading}>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            All projects
          </span>
          <h1 className="section-title">Everything I have built and shipped.</h1>
          <p className="section-copy">
            Each project links to a short case study covering the problem, my role, the
            stack, and links to the live demo and code where available.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </main>
  </SiteChrome>
);

export default AllProjects;
