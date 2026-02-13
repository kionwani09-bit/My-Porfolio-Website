
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-4xl md:text-5xl font-bold">My <span className="text-slate-500">Skills</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((category) => (
            <div key={category.title} className="space-y-8">
              <h4 className="text-xl font-bold pb-4 border-b border-white/10">{category.title}</h4>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 group-hover:bg-indigo-400" 
                        style={{ width: `${skill.level}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
