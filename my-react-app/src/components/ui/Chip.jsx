import React from 'react';
import styles from './Chip.module.scss';

/*
 * Chip component used to display individual skills in groups.  The
 * variant prop allows for future colour customisation but defaults
 * to a neutral style.
 */
const Chip = ({ children, variant = 'default' }) => {
  return <span className={`${styles.chip} ${styles[variant]}`}>{children}</span>;
};

export default Chip;