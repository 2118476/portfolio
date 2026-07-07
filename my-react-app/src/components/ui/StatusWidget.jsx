import React from 'react';
import useLondonTime from '../../hooks/useLondonTime';
import styles from './StatusWidget.module.scss';

/*
 * Live "now" panel: availability, location, London local time, and focus.
 */
const StatusWidget = ({ className = '' }) => {
  const time = useLondonTime();

  return (
    <div className={`${styles.status} ${className}`}>
      <div className={styles.available}>
        <span className={styles.pulse} aria-hidden="true" />
        Available for work
      </div>
      <ul>
        <li>
          <i className="fas fa-location-dot" aria-hidden="true" /> London, UK
        </li>
        <li>
          <i className="fas fa-clock" aria-hidden="true" /> {time || '--:--:--'} local
        </li>
        <li>
          <i className="fas fa-code" aria-hidden="true" /> Focus: full-stack builds
        </li>
      </ul>
    </div>
  );
};

export default StatusWidget;
