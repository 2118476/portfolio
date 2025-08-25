import React, { useEffect, useState } from 'react';
import Section from '../components/layout/Section';
import { motion } from 'framer-motion';
import styles from './Stats.module.scss';

/*
 * Optional statistics section.  Displays a few meaningful numbers
 * about the developer with a simple counting animation.  In a real
 * portfolio this could reflect metrics such as projects shipped,
 * contributions or years of experience.
 */
const statsData = [
  { label: 'Projects', value: 3 },
  { label: 'Years of Experience', value: 2 },
  { label: 'Languages', value: 3 }
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = stat.value / 50;
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = Math.min(
            stat.value,
            parseFloat((newCounts[idx] + increment).toFixed(1))
          );
          return newCounts;
        });
      }, 40);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <Section id="stats" className={styles.stats}>
      <div className={styles.grid}>
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <span className={styles.value}>{Math.round(counts[idx])}+</span>
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;