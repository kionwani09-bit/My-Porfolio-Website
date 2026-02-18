
import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, MousePointer2, Zap, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = ["Creative Freelancer", "Web Developer"];

  // Typewriter effect logic
  useEffect(() => {
    let timer: number;
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setDisplayText(
        isDeleting 
          ? fullText.substring(0, displayText.length - 1) 
          : fullText.substring(0, displayText.length + 1)
      );

      // Snappy cleaning/typing speeds
      setTypingSpeed(isDeleting ? 30 : 60);

      if (!isDeleting && displayText === fullText) {
        timer = window.setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = window.setTimeout(() => {}, 500);
      } else {
        timer = window.setTimeout(handleType, typingSpeed);
      }
    };

    timer = window.setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const CTAButtons = () => (
    <div className="flex flex-wrap gap-4 pt-4">
      <a 
        href="#projects" 
        className="flex-1 sm:flex-none px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-600/20"
      >
        View Projects
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    <a href="https://drive.google.com/file/d/1d9NG1vpuK6vNOuXGW02YD-xxrAAoSY36/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
      <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
        Download CV
        <Download className="w-5 h-5" />
      </button>
      </a>
    </div>
  );

  const ImageContent = () => (
    <div className="relative group animate-in zoom-in duration-1000">
      <div className="relative z-10 glass rounded-3xl overflow-hidden border-white/10 aspect-[4/3] max-w-[450px] mx-auto lg:max-w-none lg:max-h-[450px]">
        <img 
          src="https://richardremo.wuaze.com/wp-content/uploads/2025/05/banner-02-912x1024.jpg" 
          alt="Richard Remo Photo" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
        
        {/* Floating UI Elements */}
        <div className="absolute top-10 -right-4 lg:-right-8 glass p-4 rounded-2xl animate-float shadow-2xl">
          
        </div>
      </div>
      
      {/* Decorative frames */}
      <div className="absolute -inset-4 border border-indigo-500/20 rounded-[40px] z-0" />
      <div className="absolute -inset-8 border border-white/5 rounded-[48px] z-0" />
    </div>
  );

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-8 lg:pt-20 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Main Column */}
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left duration-1000">
            {/* Title & Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm <span className="gradient-text">Remo</span>
              </h1>
              
              <div className="min-h-[1.2em]">
                <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 flex items-center">
                  {displayText}
                  <span className="w-[3px] h-[0.8em] bg-indigo-500 ml-1 animate-pulse" />
                </h2>
              </div>
            </div>

            {/* Brand Statement - Now Static */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed">
              Building modern web apps with <span className="text-indigo-400 font-bold">clean code</span> and <span className="text-indigo-400 font-bold">scalable architecture.</span>
            </p>

            {/* Mobile View: Image appears here between text and CTAs */}
            <div className="block lg:hidden mt-4">
              <ImageContent />
            </div>

            {/* CTAs */}
            <CTAButtons />
          </div>

          {/* Desktop Column (Image) */}
          <div className="hidden lg:block">
            <ImageContent />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
