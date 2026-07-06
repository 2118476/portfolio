import React, { useEffect, useState } from 'react';

const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]+=';

const randomGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];

const ScrambleText = ({ text, className = '', speed = 26 }) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    let raf;
    const totalFrames = Math.max(12, text.length * 2);

    const tick = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const next = text
        .split('')
        .map((letter, index) => {
          if (letter === ' ') return ' ';
          return index / text.length < progress ? letter : randomGlyph();
        })
        .join('');

      setDisplay(next);

      if (frame < totalFrames) {
        raf = window.setTimeout(tick, speed);
      } else {
        setDisplay(text);
      }
    };

    tick();
    return () => window.clearTimeout(raf);
  }, [speed, text]);

  return <span className={className}>{display}</span>;
};

export default ScrambleText;
