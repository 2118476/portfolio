import React from 'react';
import styles from './Badge.module.scss';

/*
 * Small pill‑shaped badge for tagging technologies or categories.
 */
const Badge = ({ children, color = 'primary' }) => {
  return <span className={`${styles.badge} ${styles[color]}`}>{children}</span>;
};

export default Badge;