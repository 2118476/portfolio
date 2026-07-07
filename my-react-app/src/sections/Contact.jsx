import React from 'react';
import Section from '../components/layout/Section';
import ContactForm from '../components/ContactForm';
import Button from '../components/ui/Button';
import styles from './Contact.module.scss';

const quickLinks = [
  {
    label: 'Email me',
    href: 'mailto:mihretabtesfahun2124@gmail.com',
    icon: 'fas fa-envelope'
  },
  {
    label: 'WhatsApp coming soon',
    icon: 'fab fa-whatsapp',
    disabled: true
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mihretab-nega-56292819a/',
    icon: 'fab fa-linkedin'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/2118476',
    icon: 'fab fa-github'
  }
];

const Contact = () => {
  return (
    <Section id="contact" className={styles.contact}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Contact
          </span>
          <h2 className="section-title">Tell me what you want to build.</h2>
          <p>
            Available for junior developer roles, freelance websites, booking systems,
            and full-stack apps. Send a short brief and I will come back with the
            next sensible step.
          </p>

          <div className={styles.availability}>
            <span className={styles.availPulse} aria-hidden="true" />
            <span>Open to UK software roles, selected freelance projects, and community-focused products.</span>
          </div>

          <ul className={styles.assurances}>
            <li>
              <i className="fas fa-location-dot" aria-hidden="true" />
              UK-based &amp; remote-friendly
            </li>
            <li>
              <i className="fas fa-route" aria-hidden="true" />
              A clear next step, no spam
            </li>
            <li>
              <i className="fas fa-lock" aria-hidden="true" />
              Your details stay private
            </li>
          </ul>

          <div className={styles.quickLinks}>
            {quickLinks.map((link) =>
              link.disabled ? (
                <Button key={link.label} type="button" variant="secondary" icon={link.icon} disabled>
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={link.label}
                  href={link.href}
                  variant="secondary"
                  icon={link.icon}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </Button>
              )
            )}
          </div>
        </div>

        <div className={styles.formPanel}>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
