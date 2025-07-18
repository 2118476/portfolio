// About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Hello!</h3>
          <p>I am Mihretab Nega, a passionate developer with experience in building web applications and solving problems.</p>
          <p>I specialize in modern technologies (like React, Node.js, and Python) and I'm always eager to learn new skills and take on challenges.</p>
        </motion.div>
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Mihretab Nega" className="profile-pic" />

        </motion.div>
      </div>
    </section>
  );
};

export default About;
