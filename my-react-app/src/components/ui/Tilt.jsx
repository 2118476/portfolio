import React, { useRef } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/*
 * Wraps any element to add a cursor-following spotlight and, optionally, a
 * subtle 3D tilt toward the pointer. Values are written as CSS custom
 * properties (--mx/--my/--rx/--ry) consumed by the .i-spotlight / .i-tilt
 * helpers in globals.scss. Honors prefers-reduced-motion.
 */
const Tilt = ({ as: Tag = 'div', className = '', tilt = true, max = 6, children, ...props }) => {
  const ref = useRef(null);

  const handleMove = (event) => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    if (tilt) {
      el.style.setProperty('--rx', `${(0.5 - py) * max}deg`);
      el.style.setProperty('--ry', `${(px - 0.5) * max}deg`);
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  const helperClass = `i-spotlight ${tilt ? 'i-tilt' : ''}`.trim();

  return (
    <Tag
      ref={ref}
      className={`${helperClass} ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Tilt;
