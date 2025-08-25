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
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <p>
          I'm Mihretab Nega, a junior software developer with strong experience in
          full‑stack Java and React development, currently expanding into .NET and
          cloud technologies. I love building products that deliver real value and
          impact, whether it's a communication app using Twilio APIs or a secure
          booking platform.
        </p>
        <p>
          My interests span web development, APIs, microservices and cloud
          deployment. I’m always eager to learn and explore new tools, from C# and
          ASP.NET to AI and distributed systems.
        </p>
      </motion.div>
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={profile} alt="Mihretab Nega" className={styles.image} />
      </motion.div>
    </Section>
  );
};

export default About;