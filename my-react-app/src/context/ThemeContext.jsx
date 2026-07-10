import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/*
 * Light/dark theme with persistence. The initial value is resolved before
 * React mounts by the inline script in index.html (so there is no flash);
 * here we read whatever that script applied and keep it in sync.
 */
const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

const getInitialTheme = () => {
  if (typeof document !== 'undefined') {
    const applied = document.documentElement.getAttribute('data-theme');
    if (applied === 'light' || applied === 'dark') {
      return applied;
    }
  }
  return 'dark';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable (private mode); the choice just won't persist.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
