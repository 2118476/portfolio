import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { skillCategories } from '../../data/skills';
import styles from './AskAssistant.module.scss';

const EMAIL = 'mihretabtesfahun2124@gmail.com';

const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({ skill, category: category.title }))
);

// Distinctive keywords per project so questions map to the right one.
const projectKeywords = {
  'habesha-community': ['habesha', 'community', 'uk habesha', 'diaspora', 'listings', 'rentals'],
  'hair-salon': ['salon', 'hair', 'booking', 'appointment', 'stylist'],
  'sms-voice-ivr': ['sms', 'voice', 'ivr', 'twilio', 'call', 'text message'],
  jobpilot: ['jobpilot', 'job', 'application', 'cv tracker'],
  goldsignal: ['gold', 'trading', 'signal', 'bot', 'mt5', 'forex'],
  'enku-habesha': ['enku', 'order', 'stock', 'clothing', 'business tool']
};

const findProject = (q) =>
  projects.find((project) => (projectKeywords[project.id] || []).some((kw) => q.includes(kw)));

/*
 * Grounded, fully-local Q&A. Matches the question against real project and
 * skills data plus a few static facts — no external API, no made-up claims.
 */
function answer(query) {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  if (/(avail|hir(e|ing)|open to|looking for work|freelanc|take on|for hire)/.test(q)) {
    return {
      text: "Yes — Mihretab is open to UK junior/full-stack developer roles and selected freelance and community projects. He's based in London and works remotely.",
      to: '/#contact',
      label: 'Get in touch'
    };
  }
  if (/(price|cost|charge|rate|how much|budget|quote)/.test(q)) {
    return {
      text: 'Guide prices: Starter sites from £350, booking/business apps from £900, and full platforms from £1,800. Every project is scoped for a fixed quote first.',
      to: '/#pricing',
      label: 'See packages'
    };
  }
  if (/(where|based|location|london|uk|located|remote)/.test(q)) {
    return { text: 'London, UK — and he works remotely with clients and teams anywhere.' };
  }
  if (/(cv|resume)/.test(q)) {
    return { text: 'You can view his detailed CV dashboard or a printable one-page resume.', to: '/cv', label: 'Open CV' };
  }
  if (/(contact|email|reach|get in touch|message)/.test(q)) {
    return { text: `Email ${EMAIL}, or use the contact form and he'll reply with a next step.`, to: '/#contact', label: 'Contact form' };
  }
  if (/(education|degree|study|studi|universit|graduate|qualif)/.test(q)) {
    return { text: 'BSc Computer Science from Brunel University London — software engineering, databases, web development, AI foundations, and cybersecurity.', to: '/#education', label: 'Education' };
  }

  const project = findProject(q);
  if (project) {
    return {
      text: `${project.title}: ${project.solution} Stack: ${project.stack.join(', ')}.`,
      to: `/projects/${project.id}`,
      label: 'Read the case study'
    };
  }

  const tech = allSkills.find(({ skill }) => q.includes(skill.toLowerCase()));
  if (tech) {
    const used = projects.filter((p) =>
      p.stack.some((s) => s.toLowerCase().includes(tech.skill.toLowerCase()))
    );
    const where = used.length
      ? ` He's used it in ${used.slice(0, 3).map((p) => p.title.split(' / ')[0]).join(', ')}.`
      : '';
    return { text: `Yes — ${tech.skill} is part of his ${tech.category} toolkit.${where}`, to: '/#skills', label: 'See skills' };
  }

  if (/(project|built|work|portfolio|made)/.test(q)) {
    return {
      text: 'He has built a community platform (UK Habesha), a salon booking system, an SMS/voice app, a trading bot, a job assistant, and a business order tool.',
      to: '/#projects',
      label: 'See projects'
    };
  }

  return {
    text: "I can answer about Mihretab's projects, skills, availability, pricing, or how to reach him. Try one of the suggestions, or use the contact form.",
    to: '/#contact',
    label: 'Contact'
  };
}

const suggestions = [
  'Are you available for work?',
  'Do you know Spring Boot?',
  'What did you build for UK Habesha?',
  'How much do you charge?'
];

const AskAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! Ask me anything about Mihretab's work, skills, or availability." }
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);

  const ask = (text) => {
    const question = text.trim();
    if (!question) return;
    const response = answer(question);
    setMessages((current) => [
      ...current,
      { from: 'user', text: question },
      { from: 'bot', ...response }
    ]);
    setInput('');
  };

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const chips = useMemo(() => suggestions, []);

  return (
    <div className={`${styles.wrap} no-print`}>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Ask about Mihretab"
          >
            <div className={styles.head}>
              <span className={styles.avatar}>MN</span>
              <div>
                <strong>Ask about Mihretab</strong>
                <span>Grounded in his real work</span>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                <i className="fas fa-xmark" aria-hidden="true" />
              </button>
            </div>

            <div className={styles.body} ref={bodyRef}>
              {messages.map((message, index) => (
                <div key={index} className={message.from === 'user' ? styles.user : styles.bot}>
                  <p>{message.text}</p>
                  {message.to &&
                    (message.to.startsWith('/#') || message.to.startsWith('/projects') || message.to === '/cv' ? (
                      <Link to={message.to} className={styles.answerLink} onClick={() => setOpen(false)}>
                        {message.label} <i className="fas fa-arrow-right" aria-hidden="true" />
                      </Link>
                    ) : (
                      <a className={styles.answerLink} href={message.to}>
                        {message.label}
                      </a>
                    ))}
                </div>
              ))}
            </div>

            <div className={styles.chips}>
              {chips.map((chip) => (
                <button key={chip} type="button" onClick={() => ask(chip)}>
                  {chip}
                </button>
              ))}
            </div>

            <form
              className={styles.inputRow}
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type a question…"
                aria-label="Ask a question"
              />
              <button type="submit" aria-label="Send">
                <i className="fas fa-paper-plane" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={styles.launcher}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close assistant' : 'Ask about Mihretab'}
      >
        <i className={open ? 'fas fa-xmark' : 'fas fa-comment-dots'} aria-hidden="true" />
      </button>
    </div>
  );
};

export default AskAssistant;
