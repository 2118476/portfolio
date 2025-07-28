// File: src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Stately Hamster App",
      description: "A sleek React-based application showcasing modern design and animations.",
      image: "/project1.jpg",   // You can place an image in the public folder or assets
      demoLink: "https://sparkling-gaufre-95d8cc.netlify.app",
      codeLink: "#"             // Add your GitHub repo if available
    },
    {
      title: "Gorgeous Cendol App",
      description: "A dynamic portfolio project with clean UI and responsive features.",
      image: "/project2.jpg",
      demoLink: "https://gorgeous-cendol-eb18cc.netlify.app",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            style={{ backgroundImage: `url(${proj.image})` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-overlay">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-links">
                <a href={proj.demoLink} className="btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={proj.codeLink} className="btn secondary-btn" target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
