import React, { useState } from 'react';
import Section from '../components/layout/Section';
import Collapse from '../components/ui/Collapse';
import styles from './Faq.module.scss';

const faqs = [
  {
    q: 'Are you available for hire?',
    a: 'Yes. I am open to junior and full-stack developer roles in the UK, and I take on selected freelance and community projects alongside that.'
  },
  {
    q: 'What kinds of projects do you build?',
    a: 'Booking systems, community platforms, business and order tools, dashboards, and automation-focused apps — practical software with real users and data.'
  },
  {
    q: 'Which technologies do you use?',
    a: 'React and JavaScript on the frontend; Java and Spring Boot with REST APIs on the backend; PostgreSQL or MySQL for data; JWT and BCrypt for auth; Netlify and Render for deployment.'
  },
  {
    q: 'Do you handle deployment and handover?',
    a: 'Yes. I set up environment variables, production configuration, and hosting, then hand over documentation so the project can be maintained and grown.'
  },
  {
    q: 'How do we get started?',
    a: 'Send a short brief through the contact form below. I will reply with a sensible next step, usually a quick call to scope the work before any fixed quote.'
  },
  {
    q: 'Where are you based, and do you work remotely?',
    a: 'I am based in London, UK, and I work remotely with clients and teams anywhere.'
  }
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className={styles.faq}>
      <div className="split-heading">
        <div>
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            FAQ
          </span>
          <h2 className="section-title">Questions clients and recruiters ask.</h2>
        </div>
        <p className="section-copy">
          A few quick answers. If something is not covered here, the contact form is the
          fastest way to reach me.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div key={faq.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
              <button
                type="button"
                className={styles.question}
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span>{faq.q}</span>
                <i className={`fas fa-chevron-down ${styles.chevron}`} aria-hidden="true" />
              </button>
              <Collapse open={isOpen} id={`faq-panel-${index}`}>
                <p className={styles.answer}>{faq.a}</p>
              </Collapse>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Faq;
