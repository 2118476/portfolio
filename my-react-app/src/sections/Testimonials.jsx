import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/layout/Section';
import styles from './Testimonials.module.scss';

/*
 * Sample testimonial layout. Clearly labelled as placeholders so it is
 * never mistaken for real client praise — swap in genuine quotes later.
 */
const testimonials = [
  {
    quote:
      'Clear communication and a working product at the end. He scoped the booking flow properly before building, which saved us time.',
    name: 'Sample client',
    role: 'Local business owner'
  },
  {
    quote:
      'Understood the community need, not just the code. The platform structure made sense for real users from day one.',
    name: 'Sample collaborator',
    role: 'Community project lead'
  },
  {
    quote:
      'Reliable full-stack delivery — frontend, API, database and deployment all handled, with clean handover docs.',
    name: 'Sample teammate',
    role: 'Engineering peer'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const active = testimonials[index];

  return (
    <Section id="testimonials" className={styles.testimonials}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Testimonials
          </span>
          <h2 className="section-title">What working with me is like.</h2>
        </div>
        <p className="section-copy">
          Sample layout shown below — real client and colleague references are available on
          request and will replace these.
        </p>
      </div>

      <div
        className={styles.stage}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          className={styles.arrow}
          onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          <i className="fas fa-chevron-left" aria-hidden="true" />
        </button>

        <div className={styles.card}>
          <span className={styles.sample}>Sample</span>
          <i className={`fas fa-quote-left ${styles.quoteMark}`} aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <p>{active.quote}</p>
              <footer>
                <strong>{active.name}</strong>
                <span>{active.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <i className="fas fa-chevron-right" aria-hidden="true" />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            className={dotIndex === index ? styles.activeDot : ''}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to testimonial ${dotIndex + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
