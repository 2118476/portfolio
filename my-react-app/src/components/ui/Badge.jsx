import React from 'react';
import styles from './Badge.module.scss';

const Badge = ({ children, color = 'primary', className = '' }) => {
  return <span className={`${styles.badge} ${styles[color] || styles.primary} ${className}`}>{children}</span>;
};

export default Badge;
