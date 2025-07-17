// Hero.js
import React from 'react';
import { motion } from 'framer-motion';  // ensure framer-motion is installed
import './Hero.css';


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Mihretab Nega
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.a 
  href="#projects" 
  className="btn hero-btn"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
  whileHover={{ x: 5 }}  // slide right on hover
  whileTap={{ scale: 0.95 }} // shrink on tap
>
  View My Work &rarr;
</motion.a>

      </div>
    </section>
  );
};

export default Hero;
