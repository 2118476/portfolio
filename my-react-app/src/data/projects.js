/*
 * Project data used to populate the portfolio. Each project
 * includes an identifier, title, overview, a list of features,
 * the technologies used, the developer’s role, challenges faced,
 * results or impact, live demo and code repository links,
 * primary image and optional additional screenshots. Tags are
 * extracted from the tech stack for use in filtering.
 */

export const projects = [
  {
    id: 'mms-app',
    title: 'MMS – SMS & Voice Call Web App',
    overview:
      'A full-stack communication platform enabling users to send SMS messages, initiate and receive voice calls, and maintain a history of conversations.',
    features: [
      'Send and receive SMS messages via Twilio integration',
      'Initiate and answer voice calls directly within the browser',
      'Real-time call status and history tracking',
      'User authentication and personalised dashboard'
    ],
    stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Twilio'],
    role:
      'Designed and implemented both the front-end and back-end layers, integrated Twilio APIs and deployed the application on Render and Vercel.',
    challenges: [
      'Handling asynchronous communication events and state updates across the UI',
      'Securing API keys and managing authentication flows',
      'Ensuring reliable cross-browser media device support for calls'
    ],
    results: [
      'Delivered a robust and responsive communication tool used by small businesses for client outreach.',
      'Achieved smooth voice call connections with minimal latency.',
      'Simplified user experience with a clean dashboard and real-time feedback.'
    ],
    demo: 'https://sparkling-gaufre-95d8cc.netlify.app',
    code: '#',
    image: 'https://picsum.photos/seed/project1/600/400',
    screenshots: ['https://picsum.photos/seed/project1a/800/500'],
    // optional explicit tags (otherwise could derive from `stack`)
    tags: ['React', 'Spring Boot', 'MySQL', 'Twilio']
  },
  {
    id: 'habesha-community',
    title: 'Habesha Community Platform',
    overview:
      'A social platform for the Ethiopian diaspora to connect, share resources and support one another. Responsive and accessible design fosters community engagement.',
    features: [
      'User accounts and authentication',
      'Post and comment system with rich text editing',
      'Resource hub for sharing opportunities and events',
      'Responsive design optimised for mobile and desktop'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    role:
      'Built the front-end using React, designed the UI/UX and collaborated on back-end API development.',
    challenges: [
      'Designing an inclusive community space with intuitive navigation',
      'Implementing real-time updates and notifications',
      'Ensuring robust access control for community moderators'
    ],
    results: [
      'Launched a thriving online community with hundreds of active users.',
      'Facilitated resource sharing and event organisation for members.',
      'Received positive feedback for ease of use and performance.'
    ],
    demo: 'https://habesha-community-frontend.netlify.app',
    code: '#',
    image: 'https://picsum.photos/seed/habesha/600/400',
    screenshots: ['https://picsum.photos/seed/habesha1/800/500'],
    tags: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    id: 'hair-salon',
    title: 'Hair Salon Booking System',
    overview:
      'A secure appointment booking platform built as a final year project, providing separate admin and user roles with role-based access control.',
    features: [
      'User registration and authentication',
      'Appointment scheduling with real-time availability',
      'Admin dashboard for managing services, staff and bookings',
      'Email notifications for confirmations and reminders'
    ],
    stack: ['Java', 'Spring Boot', 'MySQL'],
    role:
      'Architected the back-end API, designed the database schema and implemented the front-end UI.',
    challenges: [
      'Designing a flexible data model to support multiple salons and services',
      'Implementing secure role-based access control',
      'Ensuring smooth user experience across devices'
    ],
    results: [
      'Reduced appointment scheduling errors by providing real-time availability.',
      'Improved administrative efficiency with intuitive dashboards.',
      'Demonstrated as final year project with positive feedback from faculty.'
    ],
    demo: '#',
    code: '#',
    image: 'https://picsum.photos/seed/project2/600/400',
    screenshots: ['https://picsum.photos/seed/project2a/800/500'],
    tags: ['Java', 'Spring Boot', 'MySQL']
  },
  {
    id: 'e-learning',
    title: 'E-Learning Platform',
    overview:
      'A coding lesson web application built as part of a team using agile methodology. Provides interactive lessons and coding challenges.',
    features: [
      'Lesson management with progress tracking',
      'In-browser coding editor and compiler',
      'Discussion forums for peer support',
      'Admin panel for content creation and analytics'
    ],
    stack: ['React', 'Spring Boot', 'MySQL'],
    role:
      'Developed front-end components, integrated REST APIs and contributed to curriculum design.',
    challenges: [
      'Providing an intuitive code editor within the browser',
      'Managing state across complex learning modules',
      'Ensuring scalability for concurrent learners'
    ],
    results: [
      'Enabled learners to practise coding directly within lessons.',
      'Facilitated team collaboration with agile processes.',
      'Increased learner engagement with interactive content.'
    ],
    demo: '#',
    code: '#',
    image: 'https://picsum.photos/seed/project3/600/400',
    screenshots: ['https://picsum.photos/seed/project3a/800/500'],
    tags: ['React', 'Spring Boot', 'MySQL']
  }
];

/*
 * Helper to derive a sorted list of unique tags across all projects.
 * Use this to build a tag filter UI.
 */
export function getProjectTags() {
  const tagSet = new Set();
  projects.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
