
import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Info } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="group relative glass rounded-3xl overflow-hidden border-white/10 hover:border-indigo-500/30 transition-all duration-500">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-indigo-600 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-white/5">
          <div className="flex gap-4">
            <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.liveUrl} className="text-slate-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {showDetails ? 'Hide Impact' : 'Case Study'}
            <ChevronRight className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {showDetails && (
          <div className="pt-6 space-y-4 border-t border-white/5 animate-in slide-in-from-top fade-in">
            <div className="space-y-2">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Problem</p>
              <p className="text-sm text-slate-300">{project.problem}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Solution</p>
              <p className="text-sm text-slate-300">{project.solution}</p>
            </div>
            <div className="space-y-2 p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest flex items-center gap-1">
                <Info className="w-3 h-3" />
                Impact
              </p>
              <p className="text-sm text-indigo-200 font-medium italic">"{project.impact}"</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm">My Projects</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured <span className="text-slate-500">Case Studies</span></h3>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-right">
            A selection of projects where technical constraints were met with innovative engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
