/*
 * Content for the Detailed CV dashboard page. Pulls from the same truthful
 * source material as the rest of the site. Anything that depends on personal
 * detail not present in the codebase is left as a clearly marked TODO for
 * Mihretab to fill in — search this file for "TODO" to complete it.
 */

export const cvProfile = {
  name: 'Mihretab Nega',
  title: 'Full-stack Developer',
  location: 'London, UK',
  availability: 'Open to roles & freelance',
  email: 'mihretabtesfahun2124@gmail.com',
  github: 'https://github.com/2118476',
  linkedin: 'https://www.linkedin.com/in/mihretab-nega-56292819a/'
};

export const cvSummary =
  'London-based full-stack developer with a Computer Science background, focused on building practical web applications that real people use. I work across the whole stack — React interfaces, Java/Spring Boot REST APIs, SQL databases, JWT authentication, and cloud deployment — and enjoy projects where the frontend, backend, data model, and deployment all have to work together cleanly. Available for UK software developer roles and selected full-stack freelance projects.';

export const coreStack = [
  { label: 'React', icon: 'fab fa-react' },
  { label: 'JavaScript', icon: 'fab fa-js' },
  { label: 'Java', icon: 'fab fa-java' },
  { label: 'Spring Boot', icon: 'fas fa-leaf' },
  { label: 'PostgreSQL', icon: 'fas fa-database' },
  { label: 'MySQL', icon: 'fas fa-database' },
  { label: 'REST APIs', icon: 'fas fa-plug' },
  { label: 'JWT / BCrypt', icon: 'fas fa-shield-halved' }
];

export const quickFacts = [
  { icon: 'fas fa-location-dot', label: 'Location', value: 'London, UK' },
  { icon: 'fas fa-graduation-cap', label: 'Education', value: 'BSc Computer Science' },
  { icon: 'fas fa-laptop-code', label: 'Focus', value: 'Full-stack web apps' },
  { icon: 'fas fa-wifi', label: 'Work style', value: 'Remote-friendly' },
  { icon: 'fas fa-circle-check', label: 'Availability', value: 'Roles & selected freelance' }
];

export const workBackground = [
  {
    role: 'Freelance Full-stack Developer',
    org: 'Self-employed · Remote',
    period: 'Recent',
    points: [
      'Built and shipped real products for a diaspora community, local businesses, and service providers.',
      'Delivered React frontends, Spring Boot REST APIs, SQL schemas, JWT authentication, and cloud deployment end to end.',
      'Worked directly with owners to turn manual workflows into dependable software.'
    ]
  },
  {
    role: 'Independent Product Builds',
    org: 'Self-directed',
    period: 'Ongoing',
    points: [
      'Designed and prototyped tools including a job-search assistant and a trading-signal monitoring dashboard.',
      'Integrated third-party APIs such as Twilio for SMS and voice workflows.',
      'Own product design, architecture, and delivery for each build.'
    ]
  },
  {
    // TODO: Replace this block with any formal employment or placement you want
    // to list (role, company, dates, and 2–3 achievement bullet points).
    role: 'TODO: Add role / company',
    org: 'TODO: Employer · Location',
    period: 'TODO: dates',
    placeholder: true,
    points: ['TODO: Add 2–3 short bullet points describing what you did and delivered.']
  }
];

export const cvTools = [
  { label: 'VS Code', icon: 'fas fa-code' },
  { label: 'GitHub', icon: 'fab fa-github' },
  { label: 'Postman', icon: 'fas fa-paper-plane' },
  { label: 'npm & Vite', icon: 'fas fa-bolt' },
  { label: 'Netlify', icon: 'fas fa-cloud-arrow-up' },
  { label: 'Render', icon: 'fas fa-server' },
  { label: 'Twilio', icon: 'fas fa-comment-sms' },
  { label: 'Android / Play Console', icon: 'fab fa-android' }
];

export const strengths = [
  {
    icon: 'fas fa-layer-group',
    title: 'Full-stack ownership',
    text: 'Comfortable across frontend, backend, database, auth, and deployment in one build.'
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Secure authentication',
    text: 'JWT and BCrypt with role-based access, built the way production apps expect.'
  },
  {
    icon: 'fas fa-database',
    title: 'Data modelling',
    text: 'Relational schemas for bookings, listings, orders, users, and reporting.'
  },
  {
    icon: 'fas fa-mobile-screen-button',
    title: 'Mobile-first UI',
    text: 'Responsive, accessible interfaces that work well on phones first.'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Deployment & handover',
    text: 'Environment config, production settings, and documentation for real launches.'
  },
  {
    icon: 'fas fa-comments',
    title: 'Clear communication',
    text: 'Scoping workflows with owners and translating needs into working software.'
  }
];
