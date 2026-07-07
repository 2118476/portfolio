import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteChrome from '../components/layout/SiteChrome';
import Container from '../components/layout/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import {
  cvProfile,
  cvSummary,
  coreStack,
  quickFacts,
  workBackground,
  cvTools,
  strengths
} from '../data/cv';
import profile from '../assets/me.jpg';
import dashboardVisual from '../assets/visuals/dashboard-visual.svg';
import styles from './CV.module.scss';

const education = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'BSc Computer Science',
    org: 'Brunel University London',
    period: 'Graduate',
    points: [
      'Software engineering, databases, and web development',
      'REST API design, AI foundations, and cybersecurity principles'
    ]
  },
  {
    icon: 'fas fa-code',
    title: 'Full-stack practice',
    org: 'Self-directed, project-based',
    period: 'Ongoing',
    points: [
      'React, Java, and Spring Boot production patterns',
      'JWT + BCrypt auth and cloud deployment on Netlify & Render'
    ]
  }
];

const featured = projects.slice(0, 3);

const Panel = ({ icon, title, children, className = '' }) => (
  <motion.section
    className={`${styles.panel} ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
  >
    <div className={styles.panelHead}>
      <span className={styles.panelIcon}>
        <i className={icon} aria-hidden="true" />
      </span>
      <h2>{title}</h2>
    </div>
    {children}
  </motion.section>
);

const CV = () => (
  <SiteChrome>
    <main className={styles.page}>
      <Container>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.heroCopy}>
            <Link to="/" className={styles.back}>
              <i className="fas fa-arrow-left" aria-hidden="true" /> Back to portfolio
            </Link>
            <span className="section-kicker">
              <span className="eyebrow-dot" />
              Detailed CV
            </span>
            <h1>
              {cvProfile.name}
              <span className={styles.roleLine}>{cvProfile.title} · {cvProfile.location}</span>
            </h1>
            <p className={styles.summary}>{cvSummary}</p>
            <div className={styles.heroActions}>
              <Button href="/Mihretab-Nega-CV.pdf" icon="fas fa-file-arrow-down" download>
                Download PDF
              </Button>
              <Button href={`mailto:${cvProfile.email}`} variant="outline" icon="fas fa-envelope">
                Email me
              </Button>
              <Button
                href={cvProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                icon="fab fa-github"
              >
                GitHub
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <img src={dashboardVisual} alt="" loading="eager" width="480" height="360" />
          </div>
        </motion.div>

        <div className={styles.dashboard}>
          <aside className={styles.rail}>
            <div className={`${styles.card} ${styles.profileCard}`}>
              <img src={profile} alt={cvProfile.name} loading="lazy" />
              <div className={styles.profileBody}>
                <strong>{cvProfile.name}</strong>
                <span>{cvProfile.title}</span>
                <span className={styles.availability}>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  {cvProfile.availability}
                </span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.railTitle}>
                <i className="fas fa-address-card" aria-hidden="true" /> Contact
              </h3>
              <ul className={styles.contactList}>
                <li>
                  <i className="fas fa-location-dot" aria-hidden="true" />
                  <span>{cvProfile.location}</span>
                </li>
                <li>
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <a href={`mailto:${cvProfile.email}`}>{cvProfile.email}</a>
                </li>
                <li>
                  <i className="fab fa-github" aria-hidden="true" />
                  <a href={cvProfile.github} target="_blank" rel="noopener noreferrer">
                    github.com/2118476
                  </a>
                </li>
                <li>
                  <i className="fab fa-linkedin" aria-hidden="true" />
                  <a href={cvProfile.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn profile
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.railTitle}>
                <i className="fas fa-cubes" aria-hidden="true" /> Core stack
              </h3>
              <ul className={styles.stackList}>
                {coreStack.map((tech) => (
                  <li key={tech.label}>
                    <i className={tech.icon} aria-hidden="true" />
                    {tech.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.railTitle}>
                <i className="fas fa-circle-info" aria-hidden="true" /> Quick facts
              </h3>
              <ul className={styles.factList}>
                {quickFacts.map((fact) => (
                  <li key={fact.label}>
                    <i className={fact.icon} aria-hidden="true" />
                    <span>
                      <em>{fact.label}</em>
                      {fact.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.main}>
            <Panel icon="fas fa-user-tie" title="Professional summary">
              <p className={styles.body}>{cvSummary}</p>
            </Panel>

            <Panel icon="fas fa-diagram-project" title="Technical skills">
              <div className={styles.skillGrid}>
                {skillCategories.map((category) => (
                  <div key={category.id} className={styles.skillGroup}>
                    <h4>
                      <i className={category.icon} aria-hidden="true" />
                      {category.title}
                    </h4>
                    <div className={styles.badges}>
                      {category.skills.map((skill, index) => (
                        <Badge
                          key={skill}
                          color={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel icon="fas fa-star" title="Featured projects">
              <div className={styles.projectList}>
                {featured.map((project) => (
                  <div key={project.id} className={styles.projectRow}>
                    <div className={styles.projectMeta}>
                      <h4>{project.title}</h4>
                      <span className={styles.projectStatus}>
                        <Badge color="primary">{project.category}</Badge>
                        {project.status}
                      </span>
                      <p>{project.solution}</p>
                      <div className={styles.badges}>
                        {project.stack.slice(0, 5).map((tech) => (
                          <Badge key={tech} color="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link to={`/projects/${project.id}`} className={styles.projectLink}>
                      Case study <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </Panel>

            <div className={styles.twoUp}>
              <Panel icon="fas fa-graduation-cap" title="Education">
                <div className={styles.timeline}>
                  {education.map((item) => (
                    <div key={item.title} className={styles.timelineItem}>
                      <div className={styles.timelineTop}>
                        <strong>{item.title}</strong>
                        <span>{item.period}</span>
                      </div>
                      <em>{item.org}</em>
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel icon="fas fa-briefcase" title="Work background">
                <div className={styles.timeline}>
                  {workBackground.map((item) => (
                    <div
                      key={item.role}
                      className={`${styles.timelineItem} ${item.placeholder ? styles.placeholder : ''}`}
                    >
                      <div className={styles.timelineTop}>
                        <strong>{item.role}</strong>
                        <span>{item.period}</span>
                      </div>
                      <em>{item.org}</em>
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className={styles.twoUp}>
              <Panel icon="fas fa-screwdriver-wrench" title="Tools & technologies">
                <ul className={styles.toolList}>
                  {cvTools.map((tool) => (
                    <li key={tool.label}>
                      <i className={tool.icon} aria-hidden="true" />
                      {tool.label}
                    </li>
                  ))}
                </ul>
              </Panel>

              <Panel icon="fas fa-bolt" title="Strengths">
                <ul className={styles.strengthList}>
                  {strengths.map((item) => (
                    <li key={item.title}>
                      <span className={styles.strengthIcon}>
                        <i className={item.icon} aria-hidden="true" />
                      </span>
                      <span>
                        <strong>{item.title}</strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            <div className={styles.cta}>
              <div>
                <h2>Want the short version?</h2>
                <p>Download the one-page PDF, or reach out and tell me what you are building.</p>
              </div>
              <div className={styles.ctaActions}>
                <Button href="/Mihretab-Nega-CV.pdf" icon="fas fa-file-arrow-down" download>
                  Download PDF
                </Button>
                <Button to="/#contact" variant="outline" icon="fas fa-paper-plane">
                  Contact me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </SiteChrome>
);

export default CV;
