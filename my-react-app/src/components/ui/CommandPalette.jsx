import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecruiterMode } from '../../context/RecruiterModeContext';
import styles from './CommandPalette.module.scss';

const staticCommands = [
  { id: 'hero', label: 'Home', icon: 'fas fa-house', type: 'section', target: 'hero' },
  { id: 'snapshot', label: 'Snapshot', icon: 'fas fa-table-cells-large', type: 'section', target: 'snapshot' },
  { id: 'projects', label: 'Projects', icon: 'fas fa-layer-group', type: 'section', target: 'projects' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-code', type: 'section', target: 'skills' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane', type: 'section', target: 'contact' },
  { id: 'resume', label: 'One-page resume', icon: 'fas fa-file-lines', type: 'route', target: '/resume' },
  { id: 'cv', label: 'Download CV', icon: 'fas fa-file-arrow-down', type: 'external', target: '/Mihretab-Nega-CV.pdf' },
  { id: 'github', label: 'GitHub profile', icon: 'fab fa-github', type: 'external', target: 'https://github.com/2118476' },
  { id: 'email', label: 'Email Mihretab', icon: 'fas fa-envelope', type: 'external', target: 'mailto:mihretabtesfahun2124@gmail.com' }
];

const CommandPalette = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recruiterMode, toggleRecruiterMode } = useRecruiterMode();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(
    () => [
      {
        id: 'recruiter-mode',
        label: recruiterMode ? 'Exit recruiter mode' : 'Recruiter mode',
        icon: 'fas fa-user-tie',
        type: 'toggle'
      },
      ...staticCommands
    ],
    [recruiterMode]
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return commands;
    return commands.filter((command) => command.label.toLowerCase().includes(term));
  }, [commands, query]);

  useEffect(() => {
    const openPalette = () => setOpen(true);
    const handleKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('open-command-palette', openPalette);
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('open-command-palette', openPalette);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActiveIndex(0);
    window.setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const close = () => setOpen(false);

  const goToSection = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      close();
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    close();
  };

  const runCommand = (command) => {
    if (!command) return;
    if (command.type === 'toggle') {
      toggleRecruiterMode();
      close();
      return;
    }
    if (command.type === 'section') {
      goToSection(command.target);
      return;
    }
    if (command.type === 'route') {
      navigate(command.target);
      close();
      return;
    }
    window.open(command.target, command.target.startsWith('http') ? '_blank' : '_self', 'noopener,noreferrer');
    close();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, filtered.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      runCommand(filtered[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={close}>
      <div
        className={styles.palette}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={styles.search}>
          <i className="fas fa-magnifying-glass" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search actions"
          />
        </div>
        <div className={styles.results} role="listbox">
          {filtered.length ? (
            filtered.map((command, index) => (
              <button
                key={command.id}
                type="button"
                className={index === activeIndex ? styles.selected : ''}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => runCommand(command)}
                role="option"
                aria-selected={index === activeIndex}
              >
                <i className={command.icon} aria-hidden="true" />
                <span>{command.label}</span>
              </button>
            ))
          ) : (
            <p>No matching action</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
