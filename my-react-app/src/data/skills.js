export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'fas fa-layer-group',
    summary: 'Responsive product interfaces, dashboards, booking flows, and mobile-first layouts.',
    skills: ['React', 'JavaScript', 'HTML', 'SCSS/CSS', 'Responsive design', 'Vite']
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'fas fa-server',
    summary: 'Production-style APIs with business logic, validation, and clean service layers.',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Service layers', 'Validation']
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'fas fa-database',
    summary: 'Relational data models for bookings, users, listings, orders, and reporting.',
    skills: ['PostgreSQL', 'MySQL', 'SQL design', 'Supabase']
  },
  {
    id: 'apis-auth',
    title: 'APIs & Auth',
    icon: 'fas fa-shield-halved',
    summary: 'Secure REST APIs with token auth, hashing, and role-based access control.',
    skills: ['REST APIs', 'JWT', 'BCrypt', 'Role-based access', 'Postman']
  },
  {
    id: 'deployment',
    title: 'Deployment & Tools',
    icon: 'fas fa-cloud-arrow-up',
    summary: 'Shipping frontend and backend apps with environment-aware configuration.',
    skills: ['Netlify', 'Render', 'GitHub', 'Environment config', 'Docker basics']
  },
  {
    id: 'automation',
    title: 'Automation / Integrations',
    icon: 'fas fa-bolt',
    summary: 'Communication automation, messaging workflows, and mobile publishing.',
    skills: ['Twilio', 'SMS / Voice', 'WhatsApp workflows', 'Android / Play Console']
  }
];

/*
 * Skills placed on the two orbit rings around the central "Core Stack" card.
 * `ring` picks the radius; `tone` maps to a palette accent for the icon.
 */
export const orbitSkills = [
  { label: 'React', icon: 'fab fa-react', ring: 'inner', tone: 'primary' },
  { label: 'JavaScript', icon: 'fab fa-js', ring: 'inner', tone: 'warm' },
  { label: 'Java', icon: 'fab fa-java', ring: 'inner', tone: 'warm' },
  { label: 'Spring Boot', icon: 'fas fa-leaf', ring: 'inner', tone: 'secondary' },
  { label: 'PostgreSQL', icon: 'fas fa-database', ring: 'inner', tone: 'primary' },
  { label: 'REST APIs', icon: 'fas fa-plug', ring: 'outer', tone: 'tertiary' },
  { label: 'JWT', icon: 'fas fa-key', ring: 'outer', tone: 'warm' },
  { label: 'BCrypt', icon: 'fas fa-lock', ring: 'outer', tone: 'secondary' },
  { label: 'SCSS', icon: 'fab fa-sass', ring: 'outer', tone: 'tertiary' },
  { label: 'GitHub', icon: 'fab fa-github', ring: 'outer', tone: 'primary' },
  { label: 'Netlify', icon: 'fas fa-cloud-arrow-up', ring: 'outer', tone: 'secondary' },
  { label: 'Twilio', icon: 'fas fa-comment-sms', ring: 'outer', tone: 'tertiary' }
];
