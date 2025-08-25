import React, { createContext, useContext, useEffect, useState } from 'react';

/*
 * ThemeContext manages the current colour scheme (light or dark) for
 * the application.  It persists the user's preference to
 * `localStorage` and applies a `data-theme` attribute to the root
 * HTML element so that CSS variables can react accordingly.  Use
 * `useTheme()` in your components to access the current theme and
 * toggle between modes.
 */

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Apply the selected theme as a data attribute on the root
    document.documentElement.setAttribute('data-theme', theme);
    // Persist the selection
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);