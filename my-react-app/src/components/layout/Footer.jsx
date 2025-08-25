import React from 'react';
import styles from './Footer.module.scss';

/*
 * Simple site footer that displays the current year and social
 * links.  The icons rely on FontAwesome classes which are made
 * available globally via the imported stylesheet in globals.scss.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Mihretab Nega. All rights reserved.</p>
        <div className={styles.socials}>
          <a
            href="https://github.com/mihretab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://linkedin.com/in/mihretab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:mihretabtesfahun2124@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;