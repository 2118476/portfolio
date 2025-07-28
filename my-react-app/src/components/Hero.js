// File: src/components/Hero.js
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles'; // Make sure tsparticles is installed
import './Hero.css';
import profileImage from '../assets/logo.png';
import videoBackground from '../assets/Video_Ready_for_Portfolio_Website.mp4';


const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: '#0a1f2c' },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4
        }
      }
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        enable: true,
        color: '#00bcd4',
        distance: 120,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        outModes: { default: 'bounce' }
      },
      number: {
        value: 50,
        density: { enable: true, area: 800 }
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  return (
    <section id="hero" className="hero-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />

      <div className="hero-content">
        <motion.img
          src={profileImage}
          alt="Mihretab Nega"
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mihretab Nega
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
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
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work →
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
