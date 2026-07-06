import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Tilt from '../components/ui/Tilt';
import styles from './GithubActivity.module.scss';

const GITHUB_USER = '2118476';
const PROFILE_URL = `https://github.com/${GITHUB_USER}`;

const langColors = {
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Python: '#3572A5',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c'
};

const GithubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`)
      .then((response) => {
        if (!response.ok) throw new Error('GitHub API error');
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        const top = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 6);
        setRepos(top);
        setState('ready');
      })
      .catch(() => active && setState('error'));
    return () => {
      active = false;
    };
  }, []);

  return (
    <Section id="github" className={styles.github}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Open source
          </span>
          <h2 className="section-title">Live from my GitHub.</h2>
        </div>
        <p className="section-copy">
          Recently updated public repositories, pulled straight from the GitHub API — real
          code, not just descriptions.
        </p>
      </div>

      {state === 'error' ? (
        <div className={styles.fallback}>
          <p>Could not load repositories right now.</p>
          <Button href={PROFILE_URL} target="_blank" rel="noopener noreferrer" icon="fab fa-github">
            View GitHub profile
          </Button>
        </div>
      ) : (
        <div className={styles.grid}>
          {state === 'loading'
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={`${styles.card} ${styles.skeleton}`} aria-hidden="true" />
              ))
            : repos.map((repo, index) => (
                <Tilt
                  as={motion.a}
                  key={repo.id}
                  className={styles.card}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className={styles.cardTop}>
                    <i className="fab fa-github" aria-hidden="true" />
                    <span className={styles.repoName}>{repo.name}</span>
                  </div>
                  <p className={styles.desc}>{repo.description || 'No description provided.'}</p>
                  <div className={styles.meta}>
                    {repo.language && (
                      <span>
                        <span
                          className={styles.dot}
                          style={{ background: langColors[repo.language] || '#8aa0b6' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span>
                      <i className="far fa-star" aria-hidden="true" /> {repo.stargazers_count}
                    </span>
                  </div>
                </Tilt>
              ))}
        </div>
      )}

      <div className={styles.cta}>
        <Button href={PROFILE_URL} target="_blank" rel="noopener noreferrer" variant="outline" icon="fab fa-github">
          See all repositories
        </Button>
      </div>
    </Section>
  );
};

export default GithubActivity;
