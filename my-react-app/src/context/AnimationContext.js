import React, { createContext, useContext, useEffect, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/*
 * AnimationContext provides a global toggle for animated
 * backgrounds and micro‑interactions.  It respects the user's
 * system‑level `prefers‑reduced‑motion` preference by default
 * (disabling animations) and allows manual override via the
 * provided toggle function.  Components can call
 * `useAnimation()` to access the enabled state and toggle it.
 */
const AnimationContext = createContext({
  animationsEnabled: true,
  toggleAnimations: () => {}
});

export const AnimationProvider = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  // initial state respects system preference
  const [animationsEnabled, setAnimationsEnabled] = useState(
    !prefersReducedMotion
  );

  // Persist preference in localStorage so the toggle survives reloads
  useEffect(() => {
    const stored = window.localStorage.getItem('animationsEnabled');
    if (stored !== null) {
      setAnimationsEnabled(stored === 'true');
    }
  }, []);

  // Save changes to localStorage when user toggles
  useEffect(() => {
    window.localStorage.setItem('animationsEnabled', animationsEnabled);
  }, [animationsEnabled]);

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  return (
    <AnimationContext.Provider
      value={{ animationsEnabled, toggleAnimations }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

/**
 * Hook to access the animation context.  Returns the current
 * animationsEnabled flag and the toggle function.
 */
export function useAnimation() {
  return useContext(AnimationContext);
}