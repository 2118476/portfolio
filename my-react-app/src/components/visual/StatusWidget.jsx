import React from 'react';
import useLiveTime from '../../hooks/useLiveTime';
import styles from './StatusWidget.module.scss';

const StatusWidget = ({ compact = false }) => {
  const live = useLiveTime();

  return (
    <aside className={`${styles.status} ${compact ? styles.compact : ''}`} aria-label="Live availability">
      <span className={styles.pulse} aria-hidden="true" />
      <div>
        <strong>{live.status}</strong>
        <span>{live.time} UK / {live.date}</span>
      </div>
    </aside>
  );
};

export default StatusWidget;
