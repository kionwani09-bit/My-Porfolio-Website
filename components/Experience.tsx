
import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Career Path</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Work <span className="text-slate-500">Experience</span></h3>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-right">
          </p>
        </div>

        <div className="space-y-10">
          {EXPERIENCE.map((exp, index) => (
            <div 
              key={exp.id} 
              className="relative group animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass p-8 md:p-10 rounded-[40px] border-white/5 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-indigo-600/10 transition-all" />
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
                  {/* Left Column: Role & Period */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 w-fit mb-4">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-slate-400 font-medium text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400/80 font-bold text-sm bg-indigo-500/5 px-4 py-2 rounded-full border border-indigo-500/10 w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Right Column: Description & Achievements */}
                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex gap-3 text-sm text-slate-400">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
