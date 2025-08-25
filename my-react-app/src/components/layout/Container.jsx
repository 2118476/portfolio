import React from 'react';
import styles from './Container.module.scss';

/*
 * Constrains its children to a centred column with a maximum width.
 */
const Container = ({ children, className = '' }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;