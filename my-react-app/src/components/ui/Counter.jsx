import React from 'react';
import useCountUp from '../../hooks/useCountUp';

const Counter = ({ to, prefix = '', suffix = '' }) => {
  const [ref, value] = useCountUp(to);
  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export default Counter;
