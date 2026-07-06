import React from 'react';
import habeshaFeed from '../../assets/shots/habesha-feed.jpg';
import habeshaServices from '../../assets/shots/habesha-services.jpg';
import styles from './DeviceMockup.module.scss';

const DeviceMockup = () => (
  <div className={styles.wrap} aria-label="3D project device previews">
    <div className={styles.browser}>
      <div className={styles.chrome}>
        <span />
        <span />
        <span />
        <strong>community-dashboard.app</strong>
      </div>
      <img src={habeshaServices} alt="UK Habesha services screen inside a dashboard mockup" loading="eager" />
    </div>
    <div className={styles.phone}>
      <span className={styles.speaker} />
      <img src={habeshaFeed} alt="UK Habesha feed screen inside a phone mockup" loading="eager" />
    </div>
  </div>
);

export default DeviceMockup;
