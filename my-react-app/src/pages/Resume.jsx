import React from 'react';
import Button from '../components/ui/Button';
import styles from './Resume.module.scss';

const Resume = () => (
  <main className={styles.page}>
    <section className={styles.sheet} aria-label="Mihretab Nega one-page resume">
      <header className={styles.header}>
        <div>
          <span>Full-stack developer</span>
          <h1>Mihretab Nega</h1>
          <p>React, Java, Spring Boot, REST APIs, PostgreSQL, MySQL, JWT, deployment, and practical product workflows.</p>
        </div>
        <div className={styles.actions}>
          <Button href="/" variant="outline" icon="fas fa-arrow-left" magnetic={false}>
            Portfolio
          </Button>
          <Button href="/Mihretab-Nega-CV.pdf" icon="fas fa-file-arrow-down" download magnetic={false}>
            CV
          </Button>
          <Button type="button" variant="secondary" icon="fas fa-print" onClick={() => window.print()} magnetic={false}>
            Print
          </Button>
        </div>
      </header>

      <div className={styles.contact}>
        <a href="mailto:mihretabtesfahun2124@gmail.com">mihretabtesfahun2124@gmail.com</a>
        <a href="https://github.com/2118476">github.com/2118476</a>
        <a href="https://www.linkedin.com/in/mihretab-nega-56292819a/">LinkedIn</a>
        <span>London, UK</span>
      </div>

      <div className={styles.grid}>
        <section>
          <h2>Profile</h2>
          <p>
            Full-stack developer focused on practical web products for local businesses,
            communities, and automation-heavy workflows. Comfortable taking ideas from
            UI and data model through API, auth, deployment, and iteration.
          </p>
        </section>

        <section>
          <h2>Core Stack</h2>
          <p>React, JavaScript, Java, Spring Boot, REST APIs, PostgreSQL, MySQL, JWT, BCrypt, Twilio, Netlify, Render.</p>
        </section>

        <section className={styles.wide}>
          <h2>Featured Projects</h2>
          <article>
            <h3>UK Habesha Community Platform</h3>
            <p>Built a mobile-first community product with listings, services, rentals, events, marketplace, messaging, moderation, JWT auth, PostgreSQL, and deployment.</p>
          </article>
          <article>
            <h3>Hair Salon Booking System</h3>
            <p>Delivered a booking workflow with customer scheduling, service management, staff availability, admin controls, role-based auth, React UI, and Spring Boot API.</p>
          </article>
          <article>
            <h3>SMS and Voice IVR App</h3>
            <p>Integrated Twilio SMS and Voice APIs into a dashboard for outbound/inbound calls, messaging history, call recordings, and communication status.</p>
          </article>
        </section>

        <section>
          <h2>Education</h2>
          <p>BSc Computer Science. Continued growth through full-stack product builds, deployment practice, API integrations, and real workflow mapping.</p>
        </section>

        <section>
          <h2>What I Build</h2>
          <ul>
            <li>Booking and scheduling tools</li>
            <li>Dashboards and admin systems</li>
            <li>Community and marketplace apps</li>
            <li>Automation and communication workflows</li>
          </ul>
        </section>
      </div>
    </section>
  </main>
);

export default Resume;
