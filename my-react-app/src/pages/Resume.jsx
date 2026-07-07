import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import styles from './Resume.module.scss';

const featured = projects.slice(0, 5);

const Resume = () => (
  <div className={styles.wrap}>
    <div className={`${styles.toolbar} no-print`}>
      <Link to="/" className={styles.back}>
        <i className="fas fa-arrow-left" aria-hidden="true" /> Back to site
      </Link>
      <Button type="button" icon="fas fa-print" onClick={() => window.print()}>
        Print / Save PDF
      </Button>
    </div>

    <article className={styles.sheet}>
      <header className={styles.head}>
        <div>
          <h1>Mihretab Nega</h1>
          <p className={styles.role}>Full-Stack Developer — React &amp; Spring Boot</p>
        </div>
        <ul className={styles.contact}>
          <li>London, UK</li>
          <li>
            <a href="mailto:mihretabtesfahun2124@gmail.com">mihretabtesfahun2124@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/2118476">github.com/2118476</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mihretab-nega-56292819a/">linkedin.com/in/mihretab-nega</a>
          </li>
        </ul>
      </header>

      <section className={styles.block}>
        <h2>Profile</h2>
        <p>
          London-based full-stack developer with a Computer Science background. I build
          practical web applications — booking systems, community platforms, business tools,
          and automation — using React, Java, Spring Boot, REST APIs, PostgreSQL/MySQL, JWT
          and BCrypt authentication, and cloud deployment.
        </p>
      </section>

      <section className={styles.block}>
        <h2>Technical skills</h2>
        <ul className={styles.skills}>
          {skillCategories.map((category) => (
            <li key={category.id}>
              <strong>{category.title}:</strong> {category.skills.join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2>Selected projects</h2>
        <ul className={styles.projects}>
          {featured.map((project) => (
            <li key={project.id}>
              <div className={styles.projectHead}>
                <strong>{project.title}</strong>
                <span>{project.stack.slice(0, 4).join(' · ')}</span>
              </div>
              <p>{project.solution}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2>Education</h2>
        <p>
          <strong>BSc Computer Science</strong> — Brunel University London. Software
          engineering, databases, web development, AI foundations, and cybersecurity.
        </p>
      </section>
    </article>
  </div>
);

export default Resume;
