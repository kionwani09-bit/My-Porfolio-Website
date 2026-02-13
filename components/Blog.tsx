
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Latest <span className="text-slate-500">Writing</span></h3>
          </div>
          <button className="text-indigo-400 font-bold flex items-center gap-2 group hover:text-indigo-300 transition-colors">
            View All Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h4 className="text-xl font-bold group-hover:text-indigo-400 transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-slate-400 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
