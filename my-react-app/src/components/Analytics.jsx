import { useEffect } from 'react';

const domain = import.meta.env.VITE_ANALYTICS_DOMAIN;

/*
 * Loads privacy-friendly, cookieless Plausible analytics only when
 * VITE_ANALYTICS_DOMAIN is set. Renders nothing and adds no third-party
 * script otherwise, so the default build stays tracker-free.
 */
const Analytics = () => {
  useEffect(() => {
    if (!domain || document.querySelector('script[data-portfolio-analytics]')) return;
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = domain;
    script.dataset.portfolioAnalytics = 'true';
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }, []);

  return null;
};

export default Analytics;
