// Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  // Example projects data (replace with your actual projects)
  const projects = [
    {
      title: "Project One",
      description: "Description of project one.",
      image: "project1.jpg",   // path or URL to project image
      demoLink: "#",           // replace '#' with actual live demo URL
      codeLink: "#"            // replace '#' with actual source code URL
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "project2.jpg",
      demoLink: "#",
      codeLink: "#"
    }
    // ... add more projects as needed
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
              <a href={proj.demoLink} className="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={proj.codeLink} className="btn" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
