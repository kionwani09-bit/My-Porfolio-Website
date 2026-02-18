
import { Project, SkillCategory, Testimonial, BlogPost, Education, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard 2.0',
    description: 'High-performance real-time financial monitoring platform.',
    problem: 'Clients struggled with slow load times and inaccurate real-time data visualization during market volatility.',
    solution: 'Implemented a WebSocket-driven architecture with React and D3.js, leveraging a Redis cache layer for microsecond response times.',
    impact: 'Reduced data latency by 65% and increased user engagement by 40%.',
    tech: ['React', 'TypeScript', 'Node.js', 'Redis', 'D3.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    category: 'Fullstack'
  },
  {
    id: '2',
    title: 'EcoSphere SaaS',
    description: 'B2B platform for sustainability reporting and carbon footprint tracking.',
    problem: 'Enterprises lacked a centralized system to audit environmental impact across multiple global branches.',
    solution: 'Built a scalable microservices-based application using AWS Lambda and GraphQL for flexible data querying.',
    impact: 'Helped 15+ Fortune 500 companies achieve ISO-14001 compliance.',
    tech: ['Next.js', 'GraphQL', 'AWS', 'Python', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    category: 'Fullstack'
  },
  {
    id: '3',
    title: 'NexGen E-Commerce',
    description: 'Headless commerce solution optimized for Core Web Vitals.',
    problem: 'Existing mobile conversions were low due to poor performance on slow connections.',
    solution: 'Engineered a PWA using Remix and Shopify Storefront API with optimized image loading and edge caching.',
    impact: 'Achieved Lighthouse scores of 100/100 and boosted mobile conversion by 25%.',
    tech: ['Remix', 'Shopify API', 'Vercel', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    githubUrl: '#',
    liveUrl: '#',
    category: 'Frontend'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend Mastery',
    skills: [
      { name: 'React/Next.js', level: 88, icon: 'atom' },
      { name: 'TypeScript', level: 85, icon: 'file-code' },
      { name: 'Tailwind CSS', level: 90, icon: 'wind' },
      { name: 'Framer Motion', level: 80, icon: 'move' }
    ]
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node.js/Express', level: 85, icon: 'server' },
      { name: 'PostgreSQL/MongoDB', level: 80, icon: 'database' }
    ]
  },
  {
    title: 'Design & Workflow',
    skills: [
      { name: 'Figma', level: 85, icon: 'figma' },
      { name: 'System Design', level: 80, icon: 'layout' },
      { name: 'Agile/Scrum', level: 90, icon: 'users' }
    ]
  }
];

export const EXPERIENCE: Experience[] = [

  //ElseSoft Limited - Kampala, Uganda (2025 - Present) - Full Stack Developer
  {
    id: 'w1',
    company: 'ElseSoft Limited - Kampala, Uganda',
    role: 'Full Stack Developer',
    period: '2025 - Present',
     description: 'Crafted high-performance user interfaces for high-traffic  media platforms.',
    achievements: [
      'Optimized Core Web Vitals for major retail clients, leading to a 15% boost in SEO rankings.',
      'Developed a reusable UI component library used across 12 different projects.',
      'Spearheaded the migration from legacy Redux to modern React Query.'
    ],
    tech: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  
  //Halvek Technologies - Kampala, Uganda (2024 - 2025) - Web Developer
  {
    id: 'w2',
    company: 'Halvek Technologies - Kampala, Uganda',
    role: 'Web Developer',
    period: '2024 - 2025',
    description: 'Leading a cross-functional team of 6 engineers to build scalable SaaS solutions for international clients.',
    achievements: [
      'Architected a micro-frontend solution that reduced bundle sizes by 40%.',
      'Implemented automated CI/CD pipelines, increasing deployment frequency by 300%.',
      'Mentored junior developers, resulting in a 20% increase in team sprint velocity.'
    ],
    tech: ['Next.js', 'TypeScript', 'AWS', 'Docker']
  },

];

export const EDUCATION: Education[] = [
  //Uganda Institute of Communication Technology (2025 - 2027) - Diploma in Computer Science
  {
    id: 'e1',
    institution: 'Uganda Institute of Communication Technology',
    degree: 'Diploma in Computer Science',
    period: '2025 - 2027',
    description: 'Comprehensive program focused on software engineering, algorithms, and advanced web technologies. Coursework emphasized scalable system design, algorithmic optimization, and modern full-stack development practices.',
    achievements: [
        'Completed specialized track in Full-Stack Systems',
        'Developed a full-stack web application implementing complex data structures and real-time features'
    ]
  },

  //namasuba college of commerce (2023 - 2024) - Certificate in Computer Science
  {
    id: 'e2',
    institution: 'Namasuba College of Commerce',
    degree: 'Certificate in Computer Science',
    period: '2023 - 2024',
    description: 'Introductory program focused on software engineering, algorithms, and advanced web technologies. Covered foundational programming principles, basic algorithmic thinking, and modern web development concepts.',
    achievements: [
      'Completed specialized track in Full-Stack Systems',
      'Built a responsive web application as a capstone project, applying core algorithms and engineering principles'
    ]
  }
];




