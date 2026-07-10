import React from 'react';
import Section from '../components/layout/Section';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.scss';

const channels = [
  {
    label: 'Email',
    value: 'mihretabtesfahun2124@gmail.com',
    href: 'mailto:mihretabtesfahun2124@gmail.com',
    icon: 'fas fa-envelope'
  },
  {
    label: 'LinkedIn',
    value: 'mihretab-nega',
    href: 'https://www.linkedin.com/in/mihretab-nega-56292819a/',
    icon: 'fab fa-linkedin'
  },
  {
    label: 'GitHub',
    value: '2118476',
    href: 'https://github.com/2118476',
    icon: 'fab fa-github'
  }
];

const Contact = () => (
  <Section id="contact" className={styles.contact}>
    <div className={styles.grid}>
      <div className={styles.copy}>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          Contact
        </span>
        <h2 className="section-title">Have a project or opportunity?</h2>
        <p>
          Send a short message about the role or the thing you want to build, and I'll
          reply with a clear next step.
        </p>

        <ul className={styles.channels}>
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <i className={channel.icon} aria-hidden="true" />
                <span>
                  <strong>{channel.label}</strong>
                  <em>{channel.value}</em>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.formPanel}>
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;
