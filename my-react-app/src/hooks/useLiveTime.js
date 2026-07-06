import { useEffect, useState } from 'react';

const formatParts = () => {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London'
  }).format(now);
  const date = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    timeZone: 'Europe/London'
  }).format(now);
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      hour12: false,
      timeZone: 'Europe/London'
    }).format(now)
  );

  return {
    time,
    date,
    timezone: 'Europe/London',
    status: hour >= 8 && hour < 19 ? 'Online for build work' : 'Async replies open'
  };
};

export default function useLiveTime() {
  const [parts, setParts] = useState(formatParts);

  useEffect(() => {
    const timer = window.setInterval(() => setParts(formatParts()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  return parts;
}
