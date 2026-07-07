import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({
  variant = 'primary',
  children,
  className = '',
  href,
  to,
  icon,
  magnetic = false,
  ...props
}) => {
  const classes = `${styles.button} ${styles[variant] || styles.primary} ${className}`;
  const magneticAttr = magnetic ? { 'data-magnetic': '' } : {};
  const content = (
    <>
      {icon && <i className={icon} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...magneticAttr} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...magneticAttr} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...magneticAttr} {...props}>
      {content}
    </button>
  );
};

export default Button;
