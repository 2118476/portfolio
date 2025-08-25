import React, { useRef, useEffect } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
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

    // Track pointer for parallax
    let pointerX = width / 2;
    let pointerY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const dx = (pointerX - centerX) / centerX;
      const dy = (pointerY - centerY) / centerY;
      stars.forEach((star) => {
        const parallaxX = star.x + dx * 50 * star.depth;
        const parallaxY = star.y + dy * 50 * star.depth;
        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + star.depth + ')';
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
      window.removeEventListener('resize', handleResize);
    };
  }, [numStars, prefersReducedMotion]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true"></canvas>;
};

export default Starfield;