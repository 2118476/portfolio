import React from 'react';
import Section from '../components/layout/Section';
import Chip from '../components/ui/Chip';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';

/*
 * Skills section organised into categories.  Each skill is wrapped
 * in a Chip component for a pill‑like appearance.  Animations are
 * staggered to draw the eye as the user scrolls.
 */
const categories = [
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'C# (learning)', 'ASP.NET (learning)', 'Node.js']
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server']
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Render', 'Vercel', 'Netlify', 'Azure DevOps (learning)', 'Twilio']
  }
];

const Skills = () => {
  return (
    <Section id="skills" className={styles.skills}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className={styles.grid}>
        {categories.map((category, idx) => (
          <motion.div
            key={category.name}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{category.name}</h3>
            <div className={styles.chips}>
              {category.skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;