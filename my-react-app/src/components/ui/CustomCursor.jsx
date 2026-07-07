import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

const isFinePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/*
 * Bespoke cursor: an instant dot plus a trailing ring that grows over
 * interactive elements. Also drives the magnetic pull on [data-magnetic]
 * elements. Only activates on fine-pointer, motion-friendly devices; the
 * native cursor is untouched everywhere else.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!isFinePointer()) return undefined;
    document.documentElement.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let raf;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      const interactive = event.target.closest(
        'a, button, [role="button"], [data-magnetic], input, textarea, select'
      );
      ring.classList.toggle(styles.active, Boolean(interactive));

      const magnetic = event.target.closest('[data-magnetic]');
      document.querySelectorAll('[data-magnetic]').forEach((el) => {
        if (el !== magnetic) el.style.transform = '';
      });
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const relX = event.clientX - (rect.left + rect.width / 2);
        const relY = event.clientY - (rect.top + rect.height / 2);
        magnetic.style.transform = `translate(${relX * 0.28}px, ${relY * 0.28}px)`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!isFinePointer()) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
