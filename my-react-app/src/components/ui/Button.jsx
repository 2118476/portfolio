import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ variant = 'primary', children, className = '', href, to, icon, ...props }) => {
  const classes = `${styles.button} ${styles[variant] || styles.primary} ${className}`;
  const content = (
    <>
      {icon && <i className={icon} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
