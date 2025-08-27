import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import styles from './About.module.scss';
import profile from '../assets/me.jpg';

/*
 * About section containing a brief introduction and a portrait.
 * Content is drawn from the user's CV and kept succinct.  Images are
 * imported from the assets folder to leverage bundler optimisation.
 */
const About = () => {
  return (
    <Section id="about" className={styles.about}>
      {/* The portrait is placed first so that on larger screens it
          appears on the left.  The animation slides it in from
          the left for a natural entrance. */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={profile} alt="Mihretab Nega" className={styles.image} />
      </motion.div>
      {/* The text content sits to the right of the portrait on
          desktops and stacks beneath it on mobile.  It slides in
          from the right to complement the image animation. */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <p>
          I’m Mihretab&nbsp;Nega, a full‑stack developer specialising in Java,
          Spring&nbsp;Boot and React. I enjoy building clean, scalable software that
          turns ideas into dependable products.
        </p>
        <p>
          My focus spans APIs, microservices and cloud deployments, but I’m
          always experimenting with new technologies to broaden my expertise.
        </p>
      </motion.div>
    </Section>
  );
};

export default About;