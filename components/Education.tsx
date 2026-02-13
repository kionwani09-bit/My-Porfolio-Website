
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Academic Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Educational <span className="text-slate-500">Background</span></h3>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-right italic">
            "Education is the foundation upon which we build our future through code."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group glass p-8 md:p-10 rounded-[40px] border-white/5 hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="p-5 rounded-3xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-10 h-10" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-indigo-400/80 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm font-bold whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {edu.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-300">
                          <Award className="w-3 h-3 text-cyan-400" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
