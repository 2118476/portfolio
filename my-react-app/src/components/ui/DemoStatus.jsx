import React from 'react';
import useDemoStatus from '../../hooks/useDemoStatus';
import styles from './DemoStatus.module.scss';

const LABELS = {
  checking: 'Checking…',
  live: 'Live',
  unknown: 'Demo'
};

/*
 * Small pill showing whether a project's live demo is currently reachable.
 */
const DemoStatus = ({ url, className = '' }) => {
  const status = useDemoStatus(url);
  if (status === 'none') return null;

  return (
    <span className={`${styles.badge} ${styles[status]} ${className}`} title="Live demo status">
      <span className={styles.dot} />
      {LABELS[status]}
    </span>
  );
};

export default DemoStatus;
