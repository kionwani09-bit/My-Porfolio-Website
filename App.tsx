import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
      
      // Update progress bar
      const bar = document.getElementById('scroll-bar');
      if (bar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-2">
            <span className="text-xl font-bold font-heading">RE<span className="text-indigo-500">MO</span></span>
            <p className="text-sm text-slate-500">© 2026 All rights reserved. Built with passion.</p>
          </div>
        </div>
      </footer>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-[60]">
        <div 
          className="h-full bg-indigo-600 transition-all" 
          id="scroll-bar"
          style={{ width: '0%' }}
        />
      </div>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-2xl transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-50 pointer-events-none'
        } hover:bg-indigo-500 hover:-translate-y-1 active:scale-95`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;