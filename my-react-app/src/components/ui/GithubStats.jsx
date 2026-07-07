import React, { useEffect, useMemo, useState } from 'react';
import styles from './GithubStats.module.scss';

const langColors = {
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Python: '#3572A5',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Shell: '#89e051'
};

const DONUT = { size: 168, stroke: 22 };

/*
 * Real GitHub proof: a languages donut computed from the given repos, plus a
 * contribution heatmap fetched from a public, keyless endpoint. The heatmap
 * hides itself gracefully if that endpoint is unavailable.
 */
const GithubStats = ({ repos, user }) => {
  const [heatmap, setHeatmap] = useState(null);
  const [total, setTotal] = useState(null);

  const languages = useMemo(() => {
    const counts = {};
    repos.forEach((repo) => {
      if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
    });
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const sum = entries.reduce((acc, [, n]) => acc + n, 0) || 1;
    return entries.slice(0, 6).map(([name, n]) => ({
      name,
      pct: n / sum,
      color: langColors[name] || '#8aa0b6'
    }));
  }, [repos]);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.com/v4/${user}?y=last`)
      .then((response) => {
        if (!response.ok) throw new Error('no heatmap');
        return response.json();
      })
      .then((data) => {
        if (!active || !data.contributions) return;
        const days = data.contributions.slice(-364);
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
        setHeatmap(weeks);
        setTotal(typeof data.total === 'object' ? Object.values(data.total).pop() : data.total);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [user]);

  const { size, stroke } = DONUT;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className={styles.stats}>
      <div className={styles.donutCard}>
        <h3>Language mix</h3>
        <div className={styles.donutRow}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.donut}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={stroke}
            />
            {languages.map((lang) => {
              const len = lang.pct * circumference;
              const dash = `${len} ${circumference - len}`;
              const el = (
                <circle
                  key={lang.name}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={lang.color}
                  strokeWidth={stroke}
                  strokeDasharray={dash}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
              );
              offset += len;
              return el;
            })}
            <text x="50%" y="47%" className={styles.donutNum}>
              {repos.length}
            </text>
            <text x="50%" y="60%" className={styles.donutLabel}>
              repos
            </text>
          </svg>
          <ul className={styles.legend}>
            {languages.map((lang) => (
              <li key={lang.name}>
                <span className={styles.swatch} style={{ background: lang.color }} />
                {lang.name}
                <em>{Math.round(lang.pct * 100)}%</em>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {heatmap && (
        <div className={styles.heatCard}>
          <div className={styles.heatHead}>
            <h3>Contribution activity</h3>
            {total != null && <span>{total} in the last year</span>}
          </div>
          <div className={styles.heat}>
            {heatmap.map((week, wi) => (
              <div key={wi} className={styles.week}>
                {week.map((day) => (
                  <span
                    key={day.date}
                    className={styles.day}
                    data-level={day.level}
                    title={`${day.count} on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className={styles.heatLegend}>
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span key={level} className={styles.day} data-level={level} />
            ))}
            <span>More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubStats;
