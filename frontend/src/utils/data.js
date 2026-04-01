const developerFallback = 'https://randomuser.me/api/portraits/men/32.jpg';
const projectFallback = 'https://picsum.photos/600/400?random=12';

export const developers = [
  {
    id: 'dev1',
    name: 'Aarav Malhotra',
    role: 'Lead Frontend Architect',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    fallbackImage: developerFallback,
    about:
      'I architect high-converting, animation-rich product experiences with scalable component systems. I lead interaction design, visual systems, and frontend performance delivery at CodeForge.',
    skills: ['React', 'TypeScript', 'Framer Motion', 'Design Systems', 'Performance'],
    projects: ['Textile Commerce Suite', 'EduLMS Platform', 'Smart Room Booking'],
    achievements: ['Best UX Delivery 2025', '50+ enterprise UI modules', '98+ Lighthouse performance scores'],
    resumeUrl: '#',
    email: 'aarav@codeforge.dev',
    whatsapp: 'https://wa.me/15551234567',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'dev2',
    name: 'Nisha Kapoor',
    role: 'Lead Backend Engineer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    fallbackImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    about:
      'I engineer resilient API systems, clean architecture, and observability-driven infrastructure for modern products. My work ensures CodeForge solutions remain secure, stable, and deployment-ready.',
    skills: ['Node.js', 'Express', 'MongoDB', 'System Design', 'DevOps'],
    projects: ['Chapati Commerce Platform', 'Textile Commerce Suite', 'EduLMS Platform'],
    achievements: ['Zero-downtime API migrations', '40% query optimization gains', 'Audit-ready cloud architecture'],
    resumeUrl: '#',
    email: 'nisha@codeforge.dev',
    whatsapp: 'https://wa.me/15557654321',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/'
  }
];

export const projects = [
  {
    title: 'Textile',
    image: 'https://picsum.photos/600/400?random=1',
    fallbackImage: projectFallback,
    description: 'B2B and B2C textile commerce system with inventory intelligence and analytics dashboards.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Chapati',
    image: 'https://supreme-chappathi.vercel.app/',
    fallbackImage: projectFallback,
    description: 'Modern restaurant experience with menu storytelling, conversion funnels, and local SEO.',
    stack: ['React', 'Express', 'MongoDB'],
    demo: '#',
    code: '#'
  },
  {
    title: 'LMS',
    image: 'https://lms-system-1u71.vercel.app/',
    fallbackImage: projectFallback,
    description: 'Enterprise LMS with adaptive assessments, progress tracking, and analytics dashboards.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Room',
    image: 'https://picsum.photos/600/400?random=4',
    fallbackImage: projectFallback,
    description: 'Real-time room booking platform with conflict prevention and seamless payment flows.',
    stack: ['React', 'Express', 'MongoDB', 'Razorpay'],
    demo: '#',
    code: '#'
  }
];
