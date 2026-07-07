import React from 'react';
import styles from './ArchitectureDiagram.module.scss';

const match = (stack, keywords) =>
  stack.filter((tech) => keywords.some((kw) => tech.toLowerCase().includes(kw)));

/*
 * Derives a simple, honest system diagram from a project's real stack:
 * Frontend → API → Database, with auth / integrations / deploy as
 * cross-cutting chips, plus a small impact-metrics band.
 */
const ArchitectureDiagram = ({ project }) => {
  const stack = project.stack || [];
  const frontend = match(stack, ['react', 'javascript', 'js', 'scss', 'html', 'planned ui']);
  const backend = match(stack, ['spring', 'java', 'python', 'node', 'rest']);
  const database = match(stack, ['postgres', 'mysql', 'supabase', 'sql']);
  const auth = match(stack, ['jwt', 'bcrypt', 'auth']);
  const deploy = match(stack, ['netlify', 'render', 'vercel']);
  const integrations = match(stack, ['twilio', 'whatsapp', 'mt5', 'ai', 'backtesting', 'risk']);

  const flow = [
    { key: 'fe', label: 'Frontend', icon: 'fas fa-display', techs: frontend },
    { key: 'api', label: 'API / Backend', icon: 'fas fa-server', techs: backend },
    { key: 'db', label: 'Database', icon: 'fas fa-database', techs: database }
  ].filter((node) => node.techs.length > 0);

  const chips = [
    auth.length && { icon: 'fas fa-shield-halved', label: 'Auth', value: auth.join(' · ') },
    integrations.length && {
      icon: 'fas fa-plug',
      label: 'Integrations',
      value: integrations.join(' · ')
    },
    deploy.length && { icon: 'fas fa-cloud-arrow-up', label: 'Deploy', value: deploy.join(' · ') }
  ].filter(Boolean);

  const metrics = [
    { label: 'My role', value: 'End-to-end build' },
    { label: 'Layers', value: `${flow.length} (${flow.map((n) => n.label.split(' ')[0]).join(' · ')})` },
    auth.length ? { label: 'Security', value: auth.join(' + ') } : null,
    { label: 'Stack depth', value: `${stack.length} technologies` }
  ].filter(Boolean);

  if (flow.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.metric}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className={styles.flow}>
        {flow.map((node, index) => (
          <React.Fragment key={node.key}>
            <div className={styles.node}>
              <span className={styles.nodeIcon}>
                <i className={node.icon} aria-hidden="true" />
              </span>
              <strong>{node.label}</strong>
              <span className={styles.nodeTechs}>{node.techs.join(', ')}</span>
            </div>
            {index < flow.length - 1 && (
              <div className={styles.arrow} aria-hidden="true">
                <span className={styles.flowDot} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {chips.length > 0 && (
        <div className={styles.chips}>
          {chips.map((chip) => (
            <div key={chip.label} className={styles.chip}>
              <i className={chip.icon} aria-hidden="true" />
              <span>
                <em>{chip.label}</em>
                {chip.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
