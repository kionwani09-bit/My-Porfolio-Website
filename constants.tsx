
import { Project, SkillCategory, Testimonial, BlogPost, Education, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Inventory Management System',
    description: 'Developed a full stack inventory management system to help small businesses track products, stock levels, and low-stock alerts. Implemented full CRUD operations, data validation, and an admin dashboard..',
    problem: 'Small businesses often rely on manual record-keeping or basic spreadsheets to manage inventory, which leads to inaccurate stock records, frequent stockouts or overstocking, limited visibility into real-time inventory levels, and costly operational inefficiencies.',
    solution: 'To address these challenges, I developed a full-stack inventory management system that provides a centralized digital platform for tracking products and stock levels in real time.',
    impact: 'The solution significantly improves inventory accuracy and operational efficiency by reducing manual errors and preventing stock-related losses.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Rest API', 'JWT Authentication'],
    image: 'https://abdiaziz-portfolio-gray.vercel.app/projects_image/inventoryMock.png',
    githubUrl: '#',
    liveUrl: 'https://inventory-manager-two-pi.vercel.app/',
    category: 'Fullstack'
  },
  {
    id: '2',
    title: 'DreamHome – Real Estate Platform',
    description: 'Created a real estate web application where users can browse properties, view details, and contact agents. Implemented responsive layouts, property listings, and dynamic routing.',
    problem: 'Many real estate businesses struggle with limited online presence and outdated property listing methods, making it difficult for potential buyers or renters to easily browse available properties, access detailed information, and directly connect with agents.',
    solution: 'To address this, I developed a real estate web application that enables users to browse property listings, view detailed property information, and seamlessly contact agents.',
    impact: 'The application enhances property visibility, improves user engagement, and streamlines communication between clients and agents.',
    tech: ['React', 'TypeScript', 'Express', 'Node.js', 'Tailwind CSS'],
    image: 'https://abdiaziz-portfolio-gray.vercel.app/projects_image/dreamhomeMock.png',
    githubUrl: '#',
    liveUrl: 'https://dreamhomes3.netlify.app/',
    category: 'Frontend'
  },
  {
    id: '3',
    title: 'SpendWise',
    description: 'Built an expense and income tracking application that allows users to record transactions, categorize expenses, and view summaries. Focused on clean UX and accurate data handling.',
    problem: 'Individuals and small business owners often struggle to effectively track their income and expenses, relying on manual records or scattered tools that lack structure and clarity.',
    solution: 'To address this challenge, I built an expense and income tracking application that enables users to record transactions, categorize expenses, and view clear financial summaries.',
    impact: 'The application empowers users with better financial visibility and control by providing organized, real-time insights into their income and spending patterns.',
    tech: ['React', 'TypeScript', 'Express', 'Node.js', 'Tailwind CSS'],
    image: 'https://abdiaziz-portfolio-gray.vercel.app/projects_image/spendwiseMock.png',
    githubUrl: '#',
    liveUrl: 'https://spendwise-1.vercel.app/',
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
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB',]
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




