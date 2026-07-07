import React, { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/*
 * Decrypt/scramble reveal: settles each character from random glyphs into
 * the final text. Renders the final text immediately for reduced-motion.
 */
const ScrambleText = ({ text, className = '', speed = 26, as: Tag = 'span' }) => {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return undefined;
    }

    const total = text.length;
    frame.current = 0;
    const tick = () => {
      const revealed = Math.floor(frame.current / 2);
      let output = '';
      for (let i = 0; i < total; i += 1) {
        if (i < revealed || text[i] === ' ') {
          output += text[i];
        } else {
          output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(output);
      frame.current += 1;
      if (revealed <= total) {
        raf.current = window.setTimeout(() => requestAnimationFrame(tick), speed);
      } else {
        setDisplay(text);
      }
    };
    tick();

    return () => window.clearTimeout(raf.current);
  }, [text, speed]);

  return (
    <Tag className={className} aria-label={text}>
      {display}
    </Tag>
  );
};

export default ScrambleText;
