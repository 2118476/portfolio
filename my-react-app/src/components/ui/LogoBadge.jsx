import React from 'react';
import logoSrc from '../../assets/logo.png';
import styles from './LogoBadge.module.scss';

/*
 * Displays the Mihretab personal logo within a pill‑shaped badge.
 *
 * The `size` prop controls the diameter of the badge in pixels.
 * By default the badge is 48px square.  The logo image is
 * imported from the assets folder and automatically optimised by
 * the bundler.  The badge background uses a subtle gradient and
 * border to stand out against both light and dark themes.  When
 * included in popups or modals, the badge can help reinforce
 * personal branding.
 */
const LogoBadge = ({ size = 48, className = '' }) => {
  return (
    <div
      className={`${styles.badge} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img
        src={logoSrc}
        alt="Mihretab Nega logo"
        loading="lazy"
        className={styles.logo}
      />
    </div>
  );
};

export default LogoBadge;