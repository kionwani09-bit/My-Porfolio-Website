
import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4 flex flex-col items-start">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <User className="w-4 h-4" />
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-left">
              Building <span className="text-slate-500">impactful</span> digital solutions.
            </h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed text-left">
              I am a results-oriented Web Developer with a focus on building scalable, high-performance web applications that solve real-world problems. With expertise across the modern JavaScript ecosystem, I bridge the gap between complex technical requirements and intuitive user experiences.
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed text-left">
              My approach focuses on delivering professional credibility through clean, maintainable code and performance-optimized architectures. Whether it's a startup MVP or a large-scale enterprise system, I prioritize solutions that drive user engagement and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
