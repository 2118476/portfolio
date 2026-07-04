export const projectCategories = [
  'Full-stack',
  'Community',
  'Business',
  'Automation',
  'AI/Tools'
];

export const projects = [
  {
    id: 'habesha-community',
    title: 'Habesha Community Platform / UK Habesha',
    category: 'Community',
    status: 'Active concept and product build',
    problem:
      'Habesha communities in the UK often rely on scattered WhatsApp groups and informal posts to find services, rentals, events, and trusted recommendations.',
    solution:
      'A mobile-first community platform that brings profiles, local services, rentals, events, classified ads, and messaging into one structured experience.',
    features: [
      'Service, rental, event, and marketplace listings',
      'User profiles, messaging, and saved posts',
      'Admin moderation flows for trusted community content',
      'Responsive UI designed first for phone users'
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'Render', 'Netlify'],
    demo: 'https://habesha-community-frontend.netlify.app',
    code: '',
    caseStudy: {
      role: 'Product thinking, UI architecture, API planning, and full-stack implementation direction.',
      result:
        'Designed as a practical platform for a real diaspora audience, with a structure that can grow into bookings, ads, and paid local business listings.'
    },
    visual: {
      label: 'Community app mockup',
      icon: 'fas fa-users',
      metrics: ['Listings', 'Events', 'Messages']
    }
  },
  {
    id: 'hair-salon',
    title: 'Hair Salon Booking System',
    category: 'Business',
    status: 'Built as a production-style booking system',
    problem:
      'Local salons lose time managing appointments manually, and customers need a simple way to choose services, stylists, and available slots.',
    solution:
      'A full-stack booking platform with customer booking, admin controls, service management, staff availability, and authentication.',
    features: [
      'Customer appointment booking flow',
      'Admin panel for services, stylists, and bookings',
      'Authentication and role-based access',
      'Availability handling for smoother scheduling'
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'JWT'],
    demo: 'https://sparkling-gaufre-95d8cc.netlify.app',
    code: '',
    caseStudy: {
      role: 'Database design, backend API architecture, authentication, and responsive frontend implementation.',
      result:
        'Converted a common local-business workflow into a structured digital product with admin visibility and customer self-service.'
    },
    visual: {
      label: 'Booking calendar mockup',
      icon: 'fas fa-calendar-check',
      metrics: ['Bookings', 'Services', 'Stylists']
    }
  },
  {
    id: 'sms-voice-ivr',
    title: 'SMS and Voice IVR App',
    category: 'Automation',
    status: 'Twilio communication app',
    problem:
      'Small teams need simple communication tools for reminders, outbound calls, inbound flows, recordings, and SMS without manually tracking everything.',
    solution:
      'A Twilio-based web app for SMS, browser voice workflows, IVR-style call handling, recordings, and communication history.',
    features: [
      'Outbound and inbound call handling',
      'SMS sending and conversation history',
      'IVR-style routing and call recordings',
      'Dashboard views for communication status'
    ],
    stack: ['React', 'Spring Boot', 'MySQL', 'Twilio', 'REST APIs'],
    demo: 'https://gorgeous-cendol-eb18cc.netlify.app/',
    code: '',
    caseStudy: {
      role: 'Integrated Twilio APIs, built the dashboard flow, and connected backend communication events to the UI.',
      result:
        'A practical automation foundation for appointment reminders, customer outreach, and phone-based business workflows.'
    },
    visual: {
      label: 'Voice and SMS dashboard mockup',
      icon: 'fas fa-phone-volume',
      metrics: ['SMS', 'Calls', 'Recordings']
    }
  },
  {
    id: 'jobpilot',
    title: 'JobPilot / Job Search Assistant',
    category: 'AI/Tools',
    status: 'Concept and roadmap',
    problem:
      'Job seekers often lose track of applications, repeat CV edits manually, and struggle to compare opportunities quickly.',
    solution:
      'A job-search workspace for tracking applications, ranking opportunities, saving roles, and preparing better tailored CV versions.',
    features: [
      'Job tracker with statuses and saved roles',
      'Opportunity scoring and filtering',
      'CV tailoring workflow concept',
      'Dashboard for actions, deadlines, and progress'
    ],
    stack: ['React', 'Supabase', 'PostgreSQL', 'AI-assisted workflows', 'Netlify'],
    demo: '',
    code: '',
    caseStudy: {
      role: 'Product design, workflow planning, and prototype architecture.',
      result:
        'A focused tool idea shaped around a real job-search workflow, suitable for future AI-assisted CV and cover letter features.'
    },
    visual: {
      label: 'Job pipeline dashboard mockup',
      icon: 'fas fa-briefcase',
      metrics: ['Saved', 'Ranked', 'Applied']
    }
  },
  {
    id: 'trading-dashboard',
    title: 'Trading Bot Dashboard',
    category: 'Full-stack',
    status: 'Dashboard concept',
    problem:
      'Trading systems need clear visibility into decisions, open trades, risk, historical performance, and what the bot is doing right now.',
    solution:
      'A monitoring dashboard concept for XAU/MT5-style strategies with live status panels, trade logs, backtesting views, and risk controls.',
    features: [
      'Live monitoring panels and trade decisions',
      'Risk, exposure, and performance snapshots',
      'Backtesting and analytics layout',
      'Decision logs for transparency'
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'WebSockets', 'Charts'],
    demo: '',
    code: '',
    caseStudy: {
      role: 'Dashboard architecture, data model planning, and interface design for decision-heavy tools.',
      result:
        'A clear product direction for turning automated trading activity into understandable, inspectable data.'
    },
    visual: {
      label: 'Trading analytics mockup',
      icon: 'fas fa-chart-line',
      metrics: ['Risk', 'Trades', 'Signals']
    }
  },
  {
    id: 'business-tools',
    title: 'Business, Order, and Stock Tools',
    category: 'Business',
    status: 'Practical tool suite',
    problem:
      'Small businesses often use manual spreadsheets for stock, orders, receipts, image handling, and WhatsApp sharing.',
    solution:
      'A set of practical full-stack tools for stock records, order tracking, receipt generation, image handling, and WhatsApp export.',
    features: [
      'Stock and order tracking flows',
      'Receipt and business record generation',
      'Image workflow and export support',
      'WhatsApp-friendly sharing paths'
    ],
    stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'WhatsApp workflows'],
    demo: '',
    code: '',
    caseStudy: {
      role: 'Workflow mapping, frontend implementation, backend data modelling, and deployment planning.',
      result:
        'A reusable pattern for turning everyday business admin tasks into small, useful software products.'
    },
    visual: {
      label: 'Operations tool mockup',
      icon: 'fas fa-boxes-stacked',
      metrics: ['Orders', 'Stock', 'Receipts']
    }
  }
];

export function getProjectCategories() {
  return ['All', ...projectCategories];
}
