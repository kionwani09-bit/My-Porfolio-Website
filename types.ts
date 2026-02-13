
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: 'Fullstack' | 'Frontend' | 'Backend';
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements?: string[];
}
