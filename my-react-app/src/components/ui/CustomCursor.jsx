import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.scss';

const interactiveSelector = 'a, button, input, textarea, select, [data-cursor="interactive"]';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let raf;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const paint = () => {
      dotRef.current?.style.setProperty('transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
      ringRef.current?.style.setProperty('transform', `translate3d(${position.x}px, ${position.y}px, 0)`);
    };

    const handleMove = (event) => {
      position.x = event.clientX;
      position.y = event.clientY;
      setVisible(true);
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(paint);
    };

    const handleOver = (event) => {
      setActive(Boolean(event.target.closest(interactiveSelector)));
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerover', handleOver);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className={`${styles.cursor} ${visible ? styles.visible : ''} ${active ? styles.active : ''}`} aria-hidden="true">
      <span ref={ringRef} className={styles.ring} />
      <span ref={dotRef} className={styles.dot} />
    </div>
  );
};

export default CustomCursor;
