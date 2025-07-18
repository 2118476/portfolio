import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mihretab Nega. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/mihretab-nega-56292819a" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span> | </span>
        <a href="https://github.com/2118476" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
