import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  variant = 'primary',
  children,
  className = '',
  href,
  icon,
  ...props
}) => {
  const classes = `${styles.button} ${styles[variant] || styles.primary} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {icon && <i className={icon} aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <i className={icon} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
