/*
 * Centralised skill definitions for the portfolio. Each category
 * contains a unique identifier, display title, an overall years
 * of experience and a list of individual skills. Skills include
 * a brief summary, typical use-cases and a simple proficiency
 * indicator on a 1–5 scale. Adjust these values to reflect
 * your actual experience; the UI will automatically consume
 * whatever is defined here.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    years: 5,
    skills: [
      {
        id: 'react',
        name: 'React.js',
        years: 5,
        summary:
          'Component-driven UI library for building single-page and server-rendered applications.',
        useCases: [
          'Interactive user interfaces',
          'Reusable component architectures',
          'Single Page Applications (SPA)'
        ],
        proficiency: 4
      },
      {
        id: 'javascript',
        name: 'JavaScript (ES6+)',
        years: 5,
        summary:
          'Language of the web; mastery of modern syntax, async patterns and modules.',
        useCases: [
          'Client-side scripting',
          'API consumption and integration',
          'Framework and tooling development'
        ],
        proficiency: 4
      },
      {
        id: 'html',
        name: 'HTML5',
        years: 5,
        summary: 'Semantic markup focusing on accessibility and SEO.',
        useCases: ['Page structure and semantics', 'Accessibility compliance'],
        proficiency: 5
      },
      {
        id: 'css',
        name: 'CSS3',
        years: 5,
        summary:
          'Responsive layouts, animations and modern CSS features like Flexbox and Grid.',
        useCases: [
          'Responsive layouts',
          'Component styling',
          'CSS animations and transitions'
        ],
        proficiency: 4
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    years: 4,
    skills: [
      {
        id: 'java',
        name: 'Java',
        years: 4,
        summary:
          'Strongly typed object-oriented language used for API development and services.',
        useCases: ['RESTful API development', 'Microservices', 'Enterprise applications'],
        proficiency: 4
      },
      {
        id: 'springboot',
        name: 'Spring Boot',
        years: 4,
        summary:
          'Production-ready framework for building stand-alone Java services with security and data integration.',
        useCases: [
          'REST API and microservice development',
          'Authentication and authorization (Spring Security)',
          'Data persistence with JPA'
        ],
        proficiency: 4
      }
    ]
  },
  {
    id: 'database',
    title: 'Database',
    years: 5,
    skills: [
      {
        id: 'mysql',
        name: 'MySQL',
        years: 5,
        summary:
          'Relational database design, indexing strategies and query optimisation for performant data access.',
        useCases: [
          'Schema design and normalisation',
          'Writing efficient SQL queries',
          'Database administration and tuning'
        ],
        proficiency: 4
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    years: 3,
    skills: [
      {
        id: 'git',
        name: 'Git & GitHub',
        years: 5,
        summary:
          'Version control and collaboration on codebases using Git and GitHub.',
        useCases: ['Branching and merging', 'Pull requests and code reviews', 'Continuous Integration'],
        proficiency: 5
      },
      {
        id: 'docker',
        name: 'Docker',
        years: 3,
        summary:
          'Containerisation for consistent development and deployment environments.',
        useCases: [
          'Packaging applications',
          'Local development environments',
          'Deployment in cloud'
        ],
        proficiency: 3
      },
      {
        id: 'render',
        name: 'Render',
        years: 2,
        summary: 'Platform-as-a-service for hosting web apps and APIs.',
        useCases: ['Deploying full-stack applications', 'Database hosting', 'Continuous deployment'],
        proficiency: 3
      },
      {
        id: 'vercel',
        name: 'Vercel',
        years: 2,
        summary:
          'Front-end hosting platform optimised for Jamstack and serverless functions.',
        useCases: ['Hosting React and Next.js apps', 'Serverless API routes', 'Preview deployments'],
        proficiency: 3
      },
      {
        id: 'netlify',
        name: 'Netlify',
        years: 2,
        summary:
          'Static site hosting with CI/CD and serverless functions.',
        useCases: ['Deploying static sites', 'Edge functions', 'Form handling'],
        proficiency: 3
      },
      {
        id: 'twilio',
        name: 'Twilio',
        years: 2,
        summary: 'Cloud communications platform for SMS, voice and email.',
        useCases: [
          'Sending SMS notifications',
          'Building voice call workflows',
          'Two-factor authentication'
        ],
        proficiency: 3
      }
    ]
  }
];

/*
 * Helper to flatten all skills into a single array. Each entry includes
 * the category id for grouping in UIs.
 */
export function getAllSkills() {
  return skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({ ...skill, category: category.id }))
  );
}
