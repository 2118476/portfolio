import { useEffect, useState } from 'react';

/*
 * Best-effort reachability check for a live demo URL. A no-cors request can't
 * read the response, but it resolves when the server is reachable and rejects
 * on connection failure — enough for a "live" indicator. Returns
 * 'none' | 'checking' | 'live' | 'unknown' (never a false "down").
 */
export default function useDemoStatus(url) {
  const [status, setStatus] = useState(url ? 'checking' : 'none');

  useEffect(() => {
    if (!url) {
      setStatus('none');
      return undefined;
    }
    let active = true;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 6000);

    fetch(url, { mode: 'no-cors', signal: controller.signal })
      .then(() => active && setStatus('live'))
      .catch(() => active && setStatus('unknown'))
      .finally(() => window.clearTimeout(timer));

    return () => {
      active = false;
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [url]);

  return status;
}
