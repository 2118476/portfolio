import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({
  variant = 'primary',
  children,
  className = '',
  href,
  to,
  icon,
  magnetic = true,
  onPointerMove,
  onPointerLeave,
  ...props
}) => {
  const ref = useRef(null);
  const classes = `${styles.button} ${magnetic ? styles.magnetic : ''} ${styles[variant] || styles.primary} ${className}`;
  const content = (
    <>
      {icon && <i className={icon} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  const handlePointerMove = (event) => {
    onPointerMove?.(event);
    if (!magnetic || props.disabled || props['aria-disabled'] === 'true') return;
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.setProperty('--mag-x', `${x * 0.16}px`);
    element.style.setProperty('--mag-y', `${y * 0.18}px`);
  };

  const handlePointerLeave = (event) => {
    onPointerLeave?.(event);
    ref.current?.style.setProperty('--mag-x', '0px');
    ref.current?.style.setProperty('--mag-y', '0px');
  };

  const sharedProps = {
    ref,
    className: classes,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    'data-cursor': 'interactive',
    ...props
  };

  if (to) {
    return (
      <Link to={to} {...sharedProps}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <button {...sharedProps}>
      {content}
    </button>
  );
};

export default Button;
