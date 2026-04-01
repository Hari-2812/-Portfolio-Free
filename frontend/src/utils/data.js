const developerFallback = 'https://randomuser.me/api/portraits/men/32.jpg';
const projectFallback = 'https://picsum.photos/600/400?random=12';

export const developers = [
  {
    id: 'dev1',
    name: 'Aarav Malhotra',
    role: 'Full Stack MERN Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    fallbackImage: developerFallback,
    about:
      'I architect high-converting, animation-rich product experiences with scalable component systems. I lead interaction design, visual systems, and frontend performance delivery at CodeForge.',
    skills: ['React', 'TypeScript', 'Framer Motion', 'Design Systems', 'Performance'],
    projects: ['LMS System', 'Textile E-commerce', 'Room Booking', 'Chapati Stall Website'],
    achievements: ['Best UX Delivery 2025', '50+ enterprise UI modules', '98+ Lighthouse performance scores'],
    resumeUrl: '/resume.pdf',
    resumeDownloadUrl: '/resume.pdf',
    email: 'aarav@codeforge.dev',
    whatsapp: 'https://wa.me/15551234567',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'dev2',
    name: 'Nisha Kapoor',
    role: 'Full Stack MERN Developer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    fallbackImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    about:
      'I engineer resilient API systems, clean architecture, and observability-driven infrastructure for modern products. My work ensures CodeForge solutions remain secure, stable, and deployment-ready.',
    skills: ['Node.js', 'Express', 'MongoDB', 'System Design', 'DevOps'],
    projects: ['LMS System', 'Textile E-commerce', 'Room Booking', 'Chapati Stall Website'],
    achievements: ['Zero-downtime API migrations', '40% query optimization gains', 'Audit-ready cloud architecture'],
    resumeUrl: '/resume.pdf',
    resumeDownloadUrl: '/resume.pdf',
    email: 'nisha@codeforge.dev',
    whatsapp: 'https://wa.me/15557654321',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/'
  }
];

export const projects = [
  {
    title: 'Textile Commerce Platform',
    image: 'https://picsum.photos/600/400?random=1',
    fallbackImage: projectFallback,
    description: 'B2B and B2C textile commerce system with inventory intelligence and analytics dashboards.',
    tech: ['React', 'Node', 'MongoDB', 'Stripe'],
    live: '#',
    github: '#',
    problem: 'Manual stock control and fragmented order handling reduced fulfillment speed.',
    solution: 'Unified ordering, inventory sync, and real-time operational insights.',
    result: 'Order throughput improved by 50% with better operational visibility.'
  },
  {
    title: 'Chapati Stall Website',
    image: 'https://picsum.photos/600/400?random=2',
    fallbackImage: projectFallback,
    description: 'Modern food business website with mobile-first browsing and conversion-focused sections.',
    tech: ['React', 'Tailwind'],
    live: 'https://supreme-chappathi.vercel.app/',
    github: '#',
    problem: 'No modern online presence for local customers and digital inquiries.',
    solution: 'Built a responsive discovery-first site with high-clarity content architecture.',
    result: 'Significant increase in digital engagement and inquiry volume.'
  },
  {
    title: 'LMS System',
    image: 'https://picsum.photos/600/400?random=3',
    fallbackImage: projectFallback,
    description: 'Enterprise LMS with adaptive assessments, course progress, and analytics dashboards.',
    tech: ['React', 'Node', 'MongoDB'],
    live: 'https://lms-system-1u71.vercel.app/',
    github: '#',
    problem: 'Training programs lacked centralized learner progress tracking.',
    solution: 'Developed a role-based LMS with instructor analytics and assessment flows.',
    result: 'Improved learner completion rates and reduced reporting overhead.'
  },
  {
    title: 'Room Booking Platform',
    image: 'https://picsum.photos/600/400?random=4',
    fallbackImage: projectFallback,
    description: 'Real-time room reservation platform with conflict prevention and payment support.',
    tech: ['React', 'Express', 'MongoDB'],
    live: '#',
    github: '#',
    problem: 'Frequent scheduling conflicts from manual booking workflows.',
    solution: 'Implemented availability checks with transaction-aware booking confirmations.',
    result: 'Booking errors reduced dramatically and support requests dropped.'
  }
];
