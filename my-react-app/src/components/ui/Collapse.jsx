import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/*
 * Animated show/hide wrapper used by the accordion-style cards.
 * Renders nothing while closed so collapsed cards stay light, and
 * animates height + opacity when the content is revealed.
 */
const Collapse = ({ open, id, children }) => (
  <AnimatePresence initial={false}>
    {open && (
      <motion.div
        id={id}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Collapse;
