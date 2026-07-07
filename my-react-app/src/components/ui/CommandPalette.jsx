import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { useRecruiter } from '../../context/RecruiterContext';
import styles from './CommandPalette.module.scss';

const sections = [
  { id: 'about', label: 'About', icon: 'fas fa-user' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-layer-group' },
  { id: 'projects', label: 'Projects', icon: 'fas fa-table-cells-large' },
  { id: 'services', label: 'Services', icon: 'fas fa-briefcase' },
  { id: 'pricing', label: 'Pricing', icon: 'fas fa-tags' },
  { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
  { id: 'github', label: 'GitHub activity', icon: 'fab fa-github' },
  { id: 'faq', label: 'FAQ', icon: 'fas fa-circle-question' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane' }
];

/*
 * Cmd/Ctrl-K command palette: fuzzy-ish search over sections, project
 * case studies, and quick actions with full keyboard control.
 */
const CommandPalette = () => {
  const navigate = useNavigate();
  const { recruiter, toggleRecruiter } = useRecruiter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(() => {
    const go = (id) => () => navigate({ pathname: '/', hash: `#${id}` });
    const sectionCmds = sections.map((s) => ({
      key: `s-${s.id}`,
      label: s.label,
      hint: 'Section',
      icon: s.icon,
      run: go(s.id)
    }));
    const projectCmds = projects.map((p) => ({
      key: `p-${p.id}`,
      label: p.title,
      hint: 'Case study',
      icon: 'fas fa-book-open',
      run: () => navigate(`/projects/${p.id}`)
    }));
    const actions = [
      {
        key: 'a-cv',
        label: 'Download CV',
        hint: 'Action',
        icon: 'fas fa-file-arrow-down',
        run: () => window.open('/Mihretab-Nega-CV.pdf', '_blank')
      },
      {
        key: 'a-resume',
        label: 'Open one-page resume',
        hint: 'Action',
        icon: 'fas fa-id-card',
        run: () => navigate('/resume')
      },
      {
        key: 'a-recruiter',
        label: recruiter ? 'Turn off recruiter mode' : 'Turn on recruiter mode',
        hint: 'Toggle',
        icon: 'fas fa-user-tie',
        run: toggleRecruiter
      },
      {
        key: 'a-email',
        label: 'Email Mihretab',
        hint: 'Action',
        icon: 'fas fa-envelope',
        run: () => {
          window.location.href = 'mailto:mihretabtesfahun2124@gmail.com';
        }
      },
      {
        key: 'a-github',
        label: 'Open GitHub profile',
        hint: 'Action',
        icon: 'fab fa-github',
        run: () => window.open('https://github.com/2118476', '_blank')
      },
      {
        key: 'a-linkedin',
        label: 'Open LinkedIn',
        hint: 'Action',
        icon: 'fab fa-linkedin',
        run: () => window.open('https://www.linkedin.com/in/mihretab-nega-56292819a/', '_blank')
      }
    ];
    return [...sectionCmds, ...projectCmds, ...actions];
  }, [navigate, recruiter, toggleRecruiter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setCursor(0);
      document.body.style.overflow = 'hidden';
      const id = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => {
        window.clearTimeout(id);
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  const runAt = (index) => {
    const command = filtered[index];
    if (!command) return;
    command.run();
    setOpen(false);
  };

  const onInputKey = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      runAt(cursor);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.palette}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className={styles.search}>
              <i className="fas fa-magnifying-glass" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search sections, projects, actions…"
                aria-label="Search commands"
              />
              <kbd>esc</kbd>
            </div>
            <ul className={styles.results}>
              {filtered.length === 0 && <li className={styles.empty}>No matches</li>}
              {filtered.map((command, index) => (
                <li key={command.key}>
                  <button
                    type="button"
                    className={index === cursor ? styles.selected : ''}
                    onMouseEnter={() => setCursor(index)}
                    onClick={() => runAt(index)}
                  >
                    <i className={command.icon} aria-hidden="true" />
                    <span>{command.label}</span>
                    <em>{command.hint}</em>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
