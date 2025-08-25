import React from 'react';
import styles from './Button.module.scss';

/*
 * Generic button component.  Supports different visual variants
 * (primary, secondary, outline) through CSS modules.  Additional
 * props such as `type`, `onClick`, or `href` are forwarded to
 * the underlying element.
 */
const Button = ({ variant = 'primary', children, ...props }) => {
  const className = `${styles.button} ${styles[variant]}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;