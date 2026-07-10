import React from 'react';
import Section from '../components/layout/Section';
import styles from './About.module.scss';

const profile = '/me.jpg';

const facts = [
  { icon: 'fas fa-location-dot', text: 'Based in London, UK' },
  { icon: 'fas fa-graduation-cap', text: 'BSc Computer Science, Brunel University' },
  { icon: 'fas fa-code', text: 'React and Spring Boot focus' },
  { icon: 'fas fa-briefcase', text: 'Open to junior / full-stack opportunities' }
];

const About = () => (
  <Section id="about" className={styles.about}>
    <div className={styles.grid}>
      <div className={styles.photoCol}>
        <img src={profile} alt="Mihretab Nega" loading="lazy" />
      </div>

      <div className={styles.copy}>
        <span className="section-kicker">
          <span className="eyebrow-dot" />
          About me
        </span>
        <h2 className="section-title">Hi, I'm Mihretab.</h2>
        <p>
          I'm a full-stack developer who likes building software people actually use:
          a community platform for the UK Habesha diaspora, booking systems for local
          businesses, and practical automation tools. I care about the whole picture —
          the interface, the API, the data model, and getting it deployed and working.
        </p>
        <p>
          Away from the keyboard I'm usually learning something new in the ecosystem,
          improving one of my live projects, or helping someone in my community turn a
          manual workflow into working software.
        </p>

        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li key={fact.text}>
              <i className={fact.icon} aria-hidden="true" />
              {fact.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default About;
