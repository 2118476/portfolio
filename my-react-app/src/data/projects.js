import habeshaFeed from '../assets/shots/habesha-feed.jpg';
import habeshaServices from '../assets/shots/habesha-services.jpg';
import habeshaRental from '../assets/shots/habesha-rental.jpg';
import habeshaSwap from '../assets/shots/habesha-swap.jpg';

export const projects = [
  {
    id: 'habesha-community',
    title: 'Habesha Community Platform / UK Habesha',
    category: 'Community',
    featured: true,
    status: 'Live product build',
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
    code: 'https://github.com/2118476/Habesha-community-Frontend',
    codeBackend: 'https://github.com/2118476/Habesha-community-backend',
    screenshots: [
      { src: habeshaFeed, alt: 'UK Habesha community feed screen' },
      { src: habeshaServices, alt: 'UK Habesha local services listings screen' },
      { src: habeshaRental, alt: 'UK Habesha rental listing detail screen' },
      { src: habeshaSwap, alt: 'UK Habesha marketplace swap screen' }
    ],
    caseStudy: {
      role: 'I built the full product: React frontend, Spring Boot REST API, PostgreSQL schema, JWT authentication, listing/moderation flows, and Netlify + Render deployment.',
      result:
        'A working platform for a real diaspora audience, with a structure that can grow into bookings, ads, and paid local business listings.'
    },
    visual: {
      label: 'UK Habesha app screenshots',
      icon: 'fas fa-users',
      metrics: ['Listings', 'Events', 'Messages']
    }
  },
  {
    id: 'hair-salon',
    title: 'Hair Salon Booking System',
    category: 'Business',
    status: 'Production-style booking system',
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
    code: 'https://github.com/2118476/hair-salon-frontend',
    codeBackend: 'https://github.com/2118476/hair-salon-backend',
    caseStudy: {
      role: 'I designed the MySQL schema, built the Spring Boot API with role-based JWT auth, and implemented the responsive React booking and admin interfaces.',
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
    code: 'https://github.com/2118476/Mms',
    caseStudy: {
      role: 'I integrated the Twilio SMS and Voice APIs, built the dashboard flow, and connected backend communication events to the UI.',
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
    status: 'In development',
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
    privateCode: true,
    caseStudy: {
      role: 'I own the product design, workflow planning, and prototype architecture.',
      result:
        'A focused tool shaped around a real job-search workflow, suitable for future AI-assisted CV and cover letter features.'
    },
    visual: {
      label: 'Job pipeline dashboard mockup',
      icon: 'fas fa-briefcase',
      metrics: ['Saved', 'Ranked', 'Applied']
    }
  },
  {
    id: 'goldsignal',
    title: 'GoldSignal / Trading Signal Platform',
    category: 'Full-stack',
    status: 'Python MT5 bot public · dashboard in development',
    problem:
      'Automated trading strategies need clear visibility into decisions, open trades, risk, historical performance, and what the bot is doing right now.',
    solution:
      'A Python XAU/MT5 strategy bot with entry, risk, and exposure logic (public repo). A monitoring dashboard with live status panels, trade logs, and backtesting views is designed and currently in development.',
    features: [
      'Automated XAU/MT5 strategy and risk logic (public repo)',
      'Backtesting and parameter iteration workflow',
      'Trade and decision logging for transparency',
      'Monitoring dashboard UI — designed, in development'
    ],
    stack: ['Python', 'MT5', 'Backtesting', 'Risk logic', 'React (planned UI)'],
    demo: '',
    code: 'https://github.com/2118476/bot15COrv5-15b-18v4',
    caseStudy: {
      role: 'I wrote the Python strategy, risk, and logging logic in the public bot repo; the monitoring dashboard and its data model are designed and being built.',
      result:
        'A working automated strategy whose decisions are logged and inspectable, with a clear path to a full monitoring UI.'
    },
    visual: {
      label: 'Trading analytics mockup',
      icon: 'fas fa-chart-line',
      metrics: ['Risk', 'Trades', 'Signals']
    }
  },
  {
    id: 'enku-habesha',
    title: 'Enku Habesha / Business & Order Management',
    category: 'Business',
    status: 'Real-world business tool',
    problem:
      'A Habesha clothing business managed stock, orders, receipts, product photos, and customer updates manually across spreadsheets and WhatsApp.',
    solution:
      'A practical full-stack toolset for stock records, order tracking, receipt generation, product image handling, and WhatsApp-ready sharing.',
    features: [
      'Stock and order tracking flows',
      'Receipt and business record generation',
      'Product image workflow and export support',
      'WhatsApp-friendly sharing for customer updates'
    ],
    stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'WhatsApp workflows'],
    demo: '',
    code: '',
    privateCode: true,
    caseStudy: {
      role: 'I mapped the real order workflow with the business owner, then built the frontend, backend data model, and deployment plan.',
      result:
        'Everyday business admin turned into a small, dependable software product used for real orders.'
    },
    visual: {
      label: 'Operations tool mockup',
      icon: 'fas fa-boxes-stacked',
      metrics: ['Orders', 'Stock', 'Receipts']
    }
  }
];
