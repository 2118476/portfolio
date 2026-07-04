import React from 'react';
import styles from './Footer.module.scss';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/2118476', icon: 'fab fa-github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mihretab-nega-56292819a/',
    icon: 'fab fa-linkedin'
  },
  { label: 'Email', href: 'mailto:mihretabtesfahun2124@gmail.com', icon: 'fas fa-envelope' }
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.mark}>MN</span>
          <div>
            <strong>Mihretab Nega</strong>
            <p>Full-stack web apps for businesses, communities, and practical tools.</p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
            >
              <i className={item.icon} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} Mihretab Nega. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
