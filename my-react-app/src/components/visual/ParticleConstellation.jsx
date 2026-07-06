import React, { useEffect, useRef } from 'react';
import styles from './ParticleConstellation.module.scss';

const ParticleConstellation = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -9999, y: -9999 };
    let particles = [];
    let frame;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(34, Math.min(72, Math.floor((width * height) / 13000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        radius: index % 7 === 0 ? 2.3 : 1.45
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(124, 196, 255, 0.86)';
      ctx.strokeStyle = 'rgba(68, 222, 178, 0.22)';
      ctx.lineWidth = 1;

      particles.forEach((particle, index) => {
        if (!reduced) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 130) {
            particle.x -= dx * 0.0028;
            particle.y -= dy * 0.0028;
          }
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
          if (distance < 104) {
            ctx.globalAlpha = 1 - distance / 104;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }

        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduced) frame = window.requestAnimationFrame(draw);
    };

    const handlePointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointer);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className={`${styles.canvas} ${className}`} aria-hidden="true" />;
};

export default ParticleConstellation;
