import React, { createContext, useContext, useEffect } from 'react';

/*
 * The site uses a single cinematic photo-backed theme, so the context
 * only exists to keep the old useTheme/useDarkMode API surface stable.
 */
const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
