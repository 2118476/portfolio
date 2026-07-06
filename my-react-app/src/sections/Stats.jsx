import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Counter from '../components/ui/Counter';
import styles from './Stats.module.scss';

const stats = [
  { to: 6, suffix: '', label: 'Full-stack builds' },
  { to: 3, suffix: '', label: 'Live demos online' },
  { to: 12, suffix: '', label: 'Core technologies' },
  { to: 4, suffix: '', label: 'Real-world domains' }
];

const Stats = () => (
  <section className={styles.stats} aria-label="Portfolio at a glance">
    <Container>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={styles.item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <strong>
              <Counter to={stat.to} suffix={stat.suffix} />
            </strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default Stats;
