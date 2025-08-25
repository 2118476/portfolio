import { useEffect, useState } from 'react';

/*
 * A simple scrollspy hook.  Given an array of element IDs this hook
 * returns the ID of the section that is currently scrolled into view.
 * It works by comparing the current scroll position to each
 * section's offsetTop.  You can optionally provide an offset to
 * account for fixed headers.
 */
export default function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 1;
      let currentId = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            currentId = id;
          }
        }
      }
      setActiveId(currentId);
    };
    window.addEventListener('scroll', handleScroll);
    // Call on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}