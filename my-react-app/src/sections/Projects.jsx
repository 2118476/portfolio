import React, { useState } from 'react';
import Section from '../components/layout/Section';
import { projects, getProjectTags } from '../data/projects';
import styles from './Projects.module.scss';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import BackgroundProjects from '../components/backgrounds/BackgroundProjects';

/*
 * Projects section with filtering and rich interactions.  Visitors
 * can filter projects by technology tags, view succinct tooltips
 * via an info icon and open a detailed panel for each project.
 * Cards visibly indicate clickability with an affordance arrow or
 * label that slides slightly on hover and focus.  Tags in the
 * filter bar are toggleable; selecting multiple tags filters
 * projects that match all selected technologies.  Additional
 * screenshots can be displayed in the modal if provided.
 */
const Projects = () => {
  const allTags = getProjectTags();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [infoTooltip, setInfoTooltip] = useState(null);

  // Toggle a tag in the filter bar.  When no tags are selected all
  // projects are shown.  Multiple tags result in a logical AND.
  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      }
      return [...prev, tag];
    });
  };

  // Filter the projects based on selected tags.  If no tags are
  // selected the full list is returned.
  const filteredProjects = projects.filter((p) =>
    selectedTags.every((t) => p.tags.includes(t))
  );

  // Show first sentence of overview for tooltip.
  const shortOverview = (overview) => {
    if (!overview) return '';
    const periodIdx = overview.indexOf('.');
    return periodIdx > 0 ? overview.slice(0, periodIdx + 1) : overview;
  };

  return (
    <Section id="projects" className={styles.projects}>
      <BackgroundProjects />
      <h2 className="section-title">Projects</h2>
      <div className={styles.filterBar}>
        <button
          className={`${styles.filterButton} ${selectedTags.length === 0 ? styles.activeFilter : ''}`}
          onClick={() => setSelectedTags([])}
          type="button"
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterButton} ${
              selectedTags.includes(tag) ? styles.activeFilter : ''
            }`}
            onClick={() => toggleTag(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredProjects.map((proj) => (
          <div key={proj.id} className={styles.card}>
            <div
              className={styles.cardInner}
              onClick={() => setSelectedProject(proj)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedProject(proj);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${proj.title}`}
            >
              <div
                className={styles.thumbnail}
                style={{ backgroundImage: `url(${proj.image})` }}
                aria-hidden="true"
              />
              <div className={styles.cardHeader}>
                <h3>{proj.title}</h3>
                <span
                  className={styles.infoIcon}
                  onClick={(e) => {
                    e.stopPropagation();
                    setInfoTooltip((prev) => (prev === proj.id ? null : proj.id));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.stopPropagation();
                      setInfoTooltip((prev) => (prev === proj.id ? null : proj.id));
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show summary of ${proj.title}`}
                >
                  i
                </span>
                {infoTooltip === proj.id && (
                  <div className={styles.tooltip} role="status">
                    <p>{shortOverview(proj.overview)}</p>
                  </div>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.tags}>
                  {proj.tags.map((tag) => (
                    <Badge key={tag} color="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span className={styles.affordance}>View →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          <div className={styles.modalContent}>
            <h3>{selectedProject.title}</h3>
            <img
              src={selectedProject.image.replace('/600/400', '/800/500')}
              alt={selectedProject.title}
              className={styles.modalImage}
              loading="lazy"
            />
            <p>{selectedProject.overview}</p>
            {selectedProject.features && selectedProject.features.length > 0 && (
              <>
                <h4>Features</h4>
                <ul>
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </>
            )}
            {selectedProject.stack && selectedProject.stack.length > 0 && (
              <>
                <h4>Tech Stack</h4>
                <div className={styles.modalStack}>
                  {selectedProject.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </>
            )}
            {selectedProject.role && (
              <>
                <h4>Role</h4>
                <p>{selectedProject.role}</p>
              </>
            )}
            {selectedProject.challenges && selectedProject.challenges.length > 0 && (
              <>
                <h4>Challenges</h4>
                <ul>
                  {selectedProject.challenges.map((ch, idx) => (
                    <li key={idx}>{ch}</li>
                  ))}
                </ul>
              </>
            )}
            {selectedProject.results && selectedProject.results.length > 0 && (
              <>
                <h4>Results</h4>
                <ul>
                  {selectedProject.results.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </>
            )}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <>
                <h4>Screenshots</h4>
                <div className={styles.screenshots}>
                  {selectedProject.screenshots.map((shot, idx) => (
                    <img
                      key={idx}
                      src={shot}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
              </>
            )}
            <div className={styles.modalLinks}>
              {selectedProject.demo && selectedProject.demo !== '#' && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Live Demo</Button>
                </a>
              )}
              {selectedProject.code && selectedProject.code !== '#' && (
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