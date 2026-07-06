import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RecruiterModeContext = createContext({
  recruiterMode: false,
  setRecruiterMode: () => {},
  toggleRecruiterMode: () => {}
});

const STORAGE_KEY = 'mihretab-recruiter-mode';

const readInitialMode = () => {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(STORAGE_KEY) === 'true';
};

export const RecruiterModeProvider = ({ children }) => {
  const [recruiterMode, setRecruiterMode] = useState(readInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-recruiter-mode', String(recruiterMode));
    window.localStorage.setItem(STORAGE_KEY, String(recruiterMode));
  }, [recruiterMode]);

  const value = useMemo(
    () => ({
      recruiterMode,
      setRecruiterMode,
      toggleRecruiterMode: () => setRecruiterMode((enabled) => !enabled)
    }),
    [recruiterMode]
  );

  return (
    <RecruiterModeContext.Provider value={value}>
      {children}
    </RecruiterModeContext.Provider>
  );
};

export const useRecruiterMode = () => useContext(RecruiterModeContext);
