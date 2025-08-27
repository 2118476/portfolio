import React, { useState } from 'react';
import Section from '../components/layout/Section';
import { skillCategories } from '../data/skills';
import styles from './Skills.module.scss';
import Modal from '../components/ui/Modal';
import BackgroundSkills from '../components/backgrounds/BackgroundSkills';

/*
 * The revamped Skills section presents categories of technologies in an
 * accordion‑like interface. Each category can be expanded to reveal a
 * grid of individual skills. Clicking on a skill opens a detail panel
 * inline, showing a summary, typical use‑cases and a simple
 * proficiency indicator. Years‑of‑experience badges on categories
 * and skills are clickable; they open a small modal describing how
 * that category or skill has been used. All interactive elements are
 * keyboard navigable and include appropriate ARIA attributes.
 */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [badgeInfo, setBadgeInfo] = useState(null);

  // Toggle a category open or closed.  Reset the active skill when
  // toggling categories to avoid showing a stale detail panel.
  const handleCategoryToggle = (id) => {
    setActiveSkill(null);
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  // Select a skill within a category.  We track the category ID on the
  // skill so that we can conditionally render the detail panel in the
  // correct place.
  const handleSkillSelect = (categoryId, skill) => {
    setActiveSkill({ ...skill, categoryId });
  };

  // Open a modal with information about how a category or skill has
  // been used.  The payload should contain a title, number of years
  // and a list of details.
  const openBadgeInfo = (info) => setBadgeInfo(info);
  const closeBadgeInfo = () => setBadgeInfo(null);

  // Render the badge modal when badgeInfo is set.  We reuse the
  // existing Modal component for accessibility and keyboard handling.
  const renderBadgeModal = () => {
    if (!badgeInfo) return null;
    const { title, years, details } = badgeInfo;
    return (
      <Modal isOpen={!!badgeInfo} onClose={closeBadgeInfo}>
        <h3>{title} – {years} {years === 1 ? 'year' : 'years'}</h3>
        {details && details.length > 0 && (
          <ul className={styles.badgeDetails}>
            {details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </Modal>
    );
  };

  return (
    <Section id="skills" className={styles.skills}>
      {/* Animated background specific to the Skills section.  It is
          positioned absolutely within the Section component. */}
      <BackgroundSkills />
      <h2 className="section-title">Skills</h2>
      <div className={styles.categories}>
        {skillCategories.map((cat) => {
          // Build a simple description of how a category has been
          // applied.  This is shown when the years badge is clicked.
          const categoryDetails = [
            `Technologies: ${cat.skills.map((s) => s.name).join(', ')}`,
            `Used to build diverse projects ranging from web UIs to APIs.`
          ];
          return (
            <div key={cat.id} className={styles.category}>
              <button
                className={styles.categoryHeader}
                onClick={() => handleCategoryToggle(cat.id)}
                aria-expanded={activeCategory === cat.id}
                aria-controls={`panel-${cat.id}`}
                type="button"
              >
                <span className={styles.categoryTitle}>{cat.title}</span>
                {/* Years of experience badge; clicking it shows how the
                    category has been used.  Stop propagation so
                    clicking the badge doesn’t toggle the category. */}
                <span
                  className={styles.yearsBadge}
                  onClick={(e) => {
                    e.stopPropagation();
                    openBadgeInfo({ title: cat.title, years: cat.years, details: categoryDetails });
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.stopPropagation();
                      openBadgeInfo({ title: cat.title, years: cat.years, details: categoryDetails });
                    }
                  }}
                  aria-label={`Show how I used ${cat.title}`}
                >
                  {cat.years} yrs
                </span>
              </button>
              {activeCategory === cat.id && (
                <div id={`panel-${cat.id}`} className={styles.panel}>
                  <div className={styles.skillGrid}>
                    {cat.skills.map((skill) => (
                      <button
                        key={skill.id}
                        className={`${styles.skillButton} ${
                          activeSkill?.id === skill.id && activeSkill.categoryId === cat.id
                            ? styles.activeSkill
                            : ''
                        }`}
                        onClick={() => handleSkillSelect(cat.id, skill)}
                        type="button"
                        aria-pressed={
                          activeSkill?.id === skill.id && activeSkill.categoryId === cat.id
                        }
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                  {activeSkill && activeSkill.categoryId === cat.id && (
                    <div className={styles.skillDetails}>
                      <h4>{activeSkill.name}</h4>
                      {/* Years badge within the skill detail; clicking
                          reveals how the skill has been used. */}
                      <span
                        className={styles.skillYearsBadge}
                        onClick={(e) => {
                          e.stopPropagation();
                          openBadgeInfo({
                            title: activeSkill.name,
                            years: activeSkill.years,
                            details: [
                              ...activeSkill.useCases,
                              `Summary: ${activeSkill.summary}`
                            ]
                          });
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            openBadgeInfo({
                              title: activeSkill.name,
                              years: activeSkill.years,
                              details: [
                                ...activeSkill.useCases,
                                `Summary: ${activeSkill.summary}`
                              ]
                            });
                          }
                        }}
                        aria-label={`Show how I used ${activeSkill.name}`}
                      >
                        {activeSkill.years} yrs
                      </span>
                      <p className={styles.summary}>{activeSkill.summary}</p>
                      {activeSkill.useCases && activeSkill.useCases.length > 0 && (
                        <>
                          <h5>Typical use cases</h5>
                          <ul className={styles.useCases}>
                            {activeSkill.useCases.map((u, i) => (
                              <li key={i}>{u}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      <div className={styles.proficiency}>
                        <span className={styles.proficiencyLabel}>Proficiency</span>
                        <div className={styles.proficiencyBar}>
                          <span
                            className={styles.proficiencyFill}
                            style={{ width: `${(activeSkill.proficiency / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {renderBadgeModal()}
    </Section>
  );
};

export default Skills;