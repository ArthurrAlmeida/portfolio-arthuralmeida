
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="space-y-16">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-px bg-indigo-500"></span>
          04. Carreira Profissional
          <span className="w-8 h-px bg-indigo-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Onde trabalhei</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Minha jornada profissional através de empresas de tecnologia inovadoras e startups dinâmicas.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {EXPERIENCES.map((exp) => (
          <div 
            key={exp.id}
            className="group relative p-8 bg-gray-900/40 border border-gray-800 rounded-3xl hover:border-indigo-500/30 transition-all duration-500 text-left"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  <p className="text-indigo-500 font-semibold">
                    @ {exp.company}
                  </p>
                  {exp.location && (
                    <>
                      <span className="text-gray-600 hidden md:inline">•</span>
                      <p className="text-gray-500 text-sm italic">{exp.location}</p>
                    </>
                  )}
                </div>
              </div>
              <span className="text-gray-500 font-mono text-sm bg-gray-800/50 px-4 py-1.5 rounded-full border border-gray-700 h-fit w-fit shrink-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {exp.description.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                  <span className="mt-1.5 text-indigo-500 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {exp.technologies && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-gray-800/50 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;