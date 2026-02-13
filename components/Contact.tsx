
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Ready to build <span className="text-slate-500">your next idea?</span></h3>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to discuss high-level engineering strategies, I'm always open to new connections.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@devflow.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                  <p className="text-slate-200">hello@devflow.com</p>
                </div>
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-10 rounded-[40px] border-white/5 relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Message Sent!</h4>
                  <p className="text-slate-400">I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                  <textarea 
                    required
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-600/20"
                >
                  {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Send Message <Send className="w-5 h-5" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
