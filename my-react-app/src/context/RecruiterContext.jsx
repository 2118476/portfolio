import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const RecruiterContext = createContext({ recruiter: false, toggleRecruiter: () => {} });

/*
 * "Recruiter mode": condenses the site to the essentials (hidden client-y
 * sections via a data attribute on <html>) and is remembered across visits.
 */
export const RecruiterProvider = ({ children }) => {
  const [recruiter, setRecruiter] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('recruiter-mode') === '1';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-recruiter', recruiter ? 'true' : 'false');
    window.localStorage.setItem('recruiter-mode', recruiter ? '1' : '0');
  }, [recruiter]);

  const toggleRecruiter = useCallback(() => setRecruiter((value) => !value), []);

  return (
    <RecruiterContext.Provider value={{ recruiter, toggleRecruiter }}>
      {children}
    </RecruiterContext.Provider>
  );
};

export const useRecruiter = () => useContext(RecruiterContext);
