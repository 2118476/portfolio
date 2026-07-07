import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/*
 * Wraps children in a scroll-linked vertical parallax. `speed` is the pixel
 * offset applied across the element's travel through the viewport. Disabled
 * for reduced-motion users.
 */
const Parallax = ({ children, speed = 40, className = '' }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
