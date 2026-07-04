import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import { skillCategories } from '../data/skills';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <Section id="skills" className={styles.skills}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Skills
          </span>
          <h2 className="section-title">A focused stack for full-stack products.</h2>
        </div>
        <p className="section-copy">
          The stack is intentionally practical: React for interfaces, Java/Spring
          Boot for APIs, SQL databases for durable data, and cloud platforms for
          deploying usable apps.
        </p>
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
