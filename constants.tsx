
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
      { name: 'React/Next.js', level: 95, icon: 'atom' },
      { name: 'TypeScript', level: 90, icon: 'file-code' },
      { name: 'Tailwind CSS', level: 98, icon: 'wind' },
      { name: 'Framer Motion', level: 85, icon: 'move' }
    ]
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node.js/Express', level: 92, icon: 'server' },
      { name: 'PostgreSQL/MongoDB', level: 88, icon: 'database' }
    ]
  },
  {
    title: 'Design & Workflow',
    skills: [
      { name: 'Figma', level: 85, icon: 'figma' },
      { name: 'System Design', level: 90, icon: 'layout' },
      { name: 'Agile/Scrum', level: 95, icon: 'users' }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'w1',
    company: 'TechFlow Systems',
    role: 'Lead Web Developer',
    period: '2023 - Present',
    description: 'Leading a cross-functional team of 6 engineers to build scalable SaaS solutions for international clients.',
    achievements: [
      'Architected a micro-frontend solution that reduced bundle sizes by 40%.',
      'Implemented automated CI/CD pipelines, increasing deployment frequency by 300%.',
      'Mentored junior developers, resulting in a 20% increase in team sprint velocity.'
    ],
    tech: ['Next.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    id: 'w2',
    company: 'PixelPerfect Agency',
    role: 'Senior Frontend Engineer',
    period: '2021 - 2023',
    description: 'Crafted high-performance user interfaces for high-traffic e-commerce and media platforms.',
    achievements: [
      'Optimized Core Web Vitals for major retail clients, leading to a 15% boost in SEO rankings.',
      'Developed a reusable UI component library used across 12 different projects.',
      'Spearheaded the migration from legacy Redux to modern React Query.'
    ],
    tech: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Jest']
  },
  {
    id: 'w3',
    company: 'StartUp Hub',
    role: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Built MVPs and rapidly iterated on features for early-stage tech startups.',
    achievements: [
      'Built a real-time messaging engine using WebSockets and Node.js.',
      'Integrated multiple third-party APIs for payment processing and analytics.',
      'Transitioned application from a monolith to a serverless architecture.'
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'React Native']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'e1',
    institution: 'University of Technology',
    degree: 'B.Sc. in Computer Science',
    period: '2019 - 2023',
    description: 'Focused on software engineering, algorithms, and advanced web technologies.',
    achievements: [
      'Dean’s List for Academic Excellence',
      'Lead Developer for University Tech Club',
      'Completed specialized track in Full-Stack Systems'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinLeap',
    content: 'An absolute professional. Their ability to bridge the gap between complex engineering and user-centric design is rare and invaluable.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'EcoTrack',
    content: 'Delivered our MVP 2 weeks ahead of schedule with code that was clean, tested, and highly scalable. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Scaling React Apps for 1M+ Users',
    excerpt: 'Architectural patterns and performance bottlenecks you need to know before going live.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    tags: ['Architecture', 'React']
  },
  {
    id: '2',
    title: 'The Future of Serverless Architecture',
    excerpt: 'Why edge computing is changing the way we think about backend infrastructure.',
    date: 'February 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Cloud', 'DevOps']
  }
];
