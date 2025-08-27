import React, { useRef, useEffect } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import useDarkMode from '../../hooks/useDarkMode';
import styles from './Starfield.module.scss';

/*
 * Renders a simple animated starfield on a `<canvas>` element.  The
 * stars gently shift in response to pointer movement to create
 * depth without overwhelming the rest of the page.  Animation
 * gracefully degrades when the user has enabled reduced motion.
 */
const Starfield = ({ numStars = 200 }) => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  // Determine the current theme (light or dark) to adjust star colours
  const { theme } = useDarkMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Generate initial star positions and depths
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      depth: Math.random() * 0.8 + 0.2
    }));

    // Track pointer for parallax and hover effect
    let pointerX = width / 2;
    let pointerY = height / 2;
    let hovering = false;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
      hovering = true;
    };
    const handleMouseLeave = () => {
      hovering = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    // Drift value to animate stars across the canvas; update over time
    let drift = 0;

    const render = () => {
      // increment drift to create continuous motion.  On hover the
      // drift speed increases slightly to give a reactive feel.
      const driftSpeed = hovering ? 0.6 : 0.2;
      drift = (drift + driftSpeed) % width;
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const dx = (pointerX - centerX) / centerX;
      const dy = (pointerY - centerY) / centerY;
      // Choose a star colour based on the active theme.  White stars
      // look great on dark backgrounds, while black stars ensure
      // visibility on light backgrounds.  Use a little alpha for
      // depth based on the star’s depth value.
      const colourBase = theme === 'light' ? '0,0,0' : '255,255,255';
      stars.forEach((star) => {
        // Wrap star positions when drifting to avoid buildup at edges
        const xPos = (star.x + drift * star.depth) % width;
        const yPos = (star.y + drift * star.depth * 0.5) % height;
        const parallaxX = xPos + dx * 40 * star.depth;
        const parallaxY = yPos + dy * 40 * star.depth;
        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colourBase}, ${star.depth})`;
        ctx.fill();
      });
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [numStars, prefersReducedMotion, theme]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true"></canvas>;
};

export default Starfield;