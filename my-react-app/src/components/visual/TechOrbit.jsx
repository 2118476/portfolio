import React from 'react';
import styles from './TechOrbit.module.scss';

const nodes = [
  { label: 'React', icon: 'fab fa-react' },
  { label: 'Java', icon: 'fab fa-java' },
  { label: 'API', icon: 'fas fa-diagram-project' },
  { label: 'Data', icon: 'fas fa-database' },
  { label: 'Cloud', icon: 'fas fa-cloud' },
  { label: 'Auth', icon: 'fas fa-shield-halved' }
];

const TechOrbit = () => (
  <div className={styles.orbit} aria-label="Core technology orbit">
    <div className={styles.core}>
      <span>MN</span>
    </div>
    {nodes.map((node, index) => (
      <span key={node.label} className={styles.node} style={{ '--i': index, '--total': nodes.length }}>
        <i className={node.icon} aria-hidden="true" />
        <em>{node.label}</em>
      </span>
    ))}
  </div>
);

export default TechOrbit;
