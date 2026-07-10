import React from 'react';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import { skillCategories } from '../data/skills';
import styles from './Skills.module.scss';

/* Condense the six data categories into the four groups shown on the homepage. */
const groupIds = [
  { id: 'frontend', title: 'Frontend', icon: 'fas fa-layer-group' },
  { id: 'backend', title: 'Backend', icon: 'fas fa-server', mergeWith: 'apis-auth' },
  { id: 'databases', title: 'Databases', icon: 'fas fa-database' },
  { id: 'deployment', title: 'Deployment & Tools', icon: 'fas fa-cloud-arrow-up', mergeWith: 'automation' }
];

const groups = groupIds.map(({ id, title, icon, mergeWith }) => {
  const base = skillCategories.find((category) => category.id === id);
  const extra = mergeWith ? skillCategories.find((category) => category.id === mergeWith) : null;
  return {
    id,
    title,
    icon,
    skills: [...(base?.skills ?? []), ...(extra?.skills.slice(0, 3) ?? [])]
  };
});

const experience = [
  {
    title: 'BSc Computer Science',
    org: 'Brunel University London',
    period: 'Graduate',
    text: 'Software engineering, databases, web development, AI foundations, and cybersecurity principles.'
  },
  {
    title: 'Full-stack project delivery',
    org: 'Self-directed, project-based',
    period: 'Ongoing',
    text: 'Production-style React and Spring Boot apps with JWT auth, role-based access, and Netlify/Render deployment.'
  },
  {
    title: 'Community and business tools',
    org: 'UK Habesha, salons, automation',
    period: 'Recent',
    text: 'Software shaped around real users: local businesses, diaspora communities, and teams needing practical automation.'
  }
];

const Skills = () => (
  <Section id="skills" className={styles.skills}>
    <div className="split-heading">
      <div>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Skills &amp; experience
        </span>
        <h2 className="section-title">A practical stack, proven in real builds.</h2>
      </div>
      <p className="section-copy">
        React for interfaces, Java and Spring Boot for APIs, SQL databases for durable
        data, and cloud platforms for shipping usable apps.
      </p>
    </div>

    <div className={styles.columns}>
      <div className={styles.skillsCol}>
        {groups.map((group) => (
          <article key={group.id} className={styles.group}>
            <h3>
              <i className={group.icon} aria-hidden="true" />
              {group.title}
            </h3>
            <div className={styles.badges}>
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.expCol}>
        {experience.map((item) => (
          <article key={item.title} className={styles.expItem}>
            <span className={styles.period}>{item.period}</span>
            <h3>{item.title}</h3>
            <p className={styles.org}>{item.org}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;
