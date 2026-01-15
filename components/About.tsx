
import React from 'react';
import { SITE_CONFIG } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-px bg-indigo-500"></span>
          01. About Me
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight">
          Solving complex problems with <span className="text-indigo-400 italic">simple solutions</span>.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {SITE_CONFIG.about}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-indigo-400 font-bold text-2xl mb-1">5+</h3>
            <p className="text-gray-500 text-sm">Years of Experience</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-indigo-400 font-bold text-2xl mb-1">50+</h3>
            <p className="text-gray-500 text-sm">Projects Delivered</p>
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-3xl group-hover:bg-indigo-500/30 transition-all" />
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/coding/800/600" 
            alt="Workspace"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
