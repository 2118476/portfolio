/*
 * Timeline data for work experience and education. Each entry
 * includes an identifier used for deep linking, the role or
 * qualification, the organisation, period of activity and
 * structured details about responsibilities, achievements and
 * technologies used. Components consuming this file should
 * support expansion/collapse interactions and hash navigation.
 */

export const experienceTimeline = [
  {
    id: 'exp-junior-dev',
    title: 'Junior Software Developer',
    organisation: 'Freelance / Personal Projects',
    period: '2023 – Present',
    description:
      'Working on a variety of personal and freelance projects to build full-stack applications and services.',
    responsibilities: [
      'Developed the MMS – SMS & Voice Call Web App using React, Spring Boot, MySQL and Twilio, enabling users to send and receive SMS and voice calls.',
      'Built a secure Hair Salon Booking System as a final year project with Spring Boot and MySQL, implementing authentication, appointment scheduling and admin/user roles.',
      'Collaborated on an E-Learning Platform using agile methodology, building responsive front-end components and integrating back-end APIs.'
    ],
    achievements: [
      'Delivered a robust communication platform that improved user engagement and allowed asynchronous messaging.',
      'Implemented role-based access control to ensure secure appointment booking and management.',
      'Practised agile teamwork resulting in rapid prototype iterations and continuous improvement.'
    ],
    techStack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Twilio'],
    impact: [
      'Reduced manual booking processes by automating appointments.',
      'Improved accessibility and communication for clients and users.'
    ]
  },
  {
    id: 'exp-bsc-cs',
    title: 'BSc Computer Science',
    organisation: 'Brunel University London',
    period: 'Sept 2021 – Jun 2024',
    description:
      'Undergraduate study covering software engineering, algorithms, cybersecurity, artificial intelligence and networking.',
    responsibilities: [
      'Completed modules on data structures, algorithms, operating systems, databases and web development.',
      'Completed group projects emphasising agile methodologies and collaborative development.',
      'Delivered a final year project – Hair Salon Booking System – applying full-stack skills.'
    ],
    achievements: [
      'Graduated with honours.',
      'Final year project demonstrated an end-to-end booking platform with security and administration features.'
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL'],
    impact: []
  },
  {
    id: 'exp-access-he',
    title: 'Access to HE Diploma (Electronics & Software Engineering)',
    organisation: 'Newham College of Further Education',
    period: 'Sept 2020 – Jun 2021',
    description:
      'Foundation programme combining electronics, software engineering and project management.',
    responsibilities: [
      'Studied programming fundamentals, mathematics and electronics.',
      'Completed coursework on project management and web design.'
    ],
    achievements: [
      'Achieved distinctions in programming, project management and web design courses.'
    ],
    techStack: [],
    impact: []
  }
];

/** Helper to find an experience entry by id (useful for deep links). */
export function getExperienceById(id) {
  return experienceTimeline.find((e) => e.id === id) || null;
}
