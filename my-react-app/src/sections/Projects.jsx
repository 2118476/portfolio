import React, { useState } from 'react';
import Section from '../components/layout/Section';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';
import Modal from '../components/ui/Modal';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

/*
 * Portfolio projects section.  Each card shows a project image,
 * title, description and tech stack.  Clicking on a card opens a
 * modal with more details and links to the live demo and source.
 * Images are pulled from Picsum using seeded URLs for repeatable
 * results without external dependencies.
 */
const projects = [
  {
    title: 'MMS – SMS & Voice Call Web App',
    description:
      'Full‑stack communication app to send SMS, make and receive calls, and track call history.',
    image: 'https://picsum.photos/seed/project1/600/400',
    stack: ['React', 'Spring Boot', 'MySQL', 'Twilio'],
    demo: 'https://sparkling-gaufre-95d8cc.netlify.app',
    code: '#'
  },
  {
    title: 'Habesha Community Platform',
    description:
      'A social platform for the Ethiopian diaspora to connect, share resources and support one another. Responsive and accessible design fosters community engagement.',
    image: 'https://picsum.photos/seed/habesha/600/400',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://habesha-community-frontend.netlify.app',
    code: '#'
  },
  {
    title: 'Hair Salon Booking System',
    description:
      'Secure appointment booking platform with admin and user roles, built as a final year project.',
    image: 'https://picsum.photos/seed/project2/600/400',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    demo: '#',
    code: '#'
  },
  {
    title: 'E‑Learning Platform',
    description:
      'Coding lesson web app built as part of a team using agile methodology.',
    image: 'https://picsum.photos/seed/project3/600/400',
    stack: ['React', 'Spring Boot', 'MySQL'],
    demo: '#',
    code: '#'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <Section id="projects" className={styles.projects}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className={styles.grid}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            style={{ backgroundImage: `url(${proj.image})` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openModal(proj)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') openModal(proj);
            }}
            aria-label={`Open details for ${proj.title}`}
          >
            <div className={styles.overlay}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className={styles.stack}>
                {proj.stack.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
          <div className={styles.modalContent}>
            <img
              src={selectedProject.image.replace('/600/400', '/800/500')}
              alt={selectedProject.title}
              className={styles.modalImage}
              loading="lazy"
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className={styles.modalStack}>
              {selectedProject.stack.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className={styles.modalLinks}>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Live Demo</Button>
              </a>
              {selectedProject.code !== '#' && (
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">Source Code</Button>
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;