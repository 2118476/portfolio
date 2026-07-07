import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import { skillCategories, orbitSkills } from '../data/skills';
import styles from './Skills.module.scss';

const inner = orbitSkills.filter((skill) => skill.ring === 'inner');
const outer = orbitSkills.filter((skill) => skill.ring === 'outer');

const Ring = ({ items, className }) => (
  <div className={className} aria-hidden="true">
    {items.map((skill, index) => (
      <span
        key={skill.label}
        className={styles.slot}
        style={{ '--i': index, '--total': items.length }}
      >
        <span className={styles.spin}>
          <span className={`${styles.orbitBadge} ${styles[skill.tone]}`}>
            <i className={skill.icon} aria-hidden="true" />
            <em>{skill.label}</em>
          </span>
        </span>
      </span>
    ))}
  </div>
);

const Skills = () => {
  return (
    <Section id="skills" className={styles.skills}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Skills
          </span>
          <h2 className="section-title">A focused stack, orbiting one goal.</h2>
        </div>
        <p className="section-copy">
          The stack is intentionally practical: React for interfaces, Java/Spring
          Boot for APIs, SQL databases for durable data, and cloud platforms for
          deploying usable apps.
        </p>
      </div>

      <div className={styles.orbitWrap}>
        <div className={styles.orbit}>
          <div className={styles.orbitGlow} aria-hidden="true" />
          <div className={`${styles.ringLine} ${styles.ringLineInner}`} aria-hidden="true" />
          <div className={`${styles.ringLine} ${styles.ringLineOuter}`} aria-hidden="true" />

          <div className={styles.core}>
            <i className="fas fa-code" aria-hidden="true" />
            <strong>Core Stack</strong>
            <span>Full-stack developer</span>
          </div>

          <Ring items={inner} className={`${styles.ring} ${styles.ringInner}`} />
          <Ring items={outer} className={`${styles.ring} ${styles.ringOuter}`} />
        </div>

        <ul className={styles.orbitFallback} aria-label="Core technologies">
          {orbitSkills.map((skill) => (
            <li key={skill.label} className={styles[skill.tone]}>
              <i className={skill.icon} aria-hidden="true" />
              {skill.label}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.id}
            className={styles.card}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <i className={category.icon} aria-hidden="true" />
              <div>
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
              </div>
            </div>
            <div className={styles.badges}>
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  color={skillIndex % 3 === 0 ? 'primary' : skillIndex % 3 === 1 ? 'secondary' : 'tertiary'}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
