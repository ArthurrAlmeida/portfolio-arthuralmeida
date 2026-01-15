
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-8 h-px bg-indigo-500"></span>
            01. Portfólio
          </div>
          <h2 className="text-4xl font-bold text-white">Projetos em Destaque</h2>
        </div>
        <p className="text-gray-400 max-w-sm">
          Uma seleção de trabalhos recentes focados em Engenharia de Dados, orquestração de pipelines ETL e arquiteturas de nuvem escaláveis.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative flex flex-col bg-gray-900/30 border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-700 transition-all h-full"
          >
            <div className="h-32 sm:h-36 md:h-40 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-10 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-semibold flex items-center gap-2 hover:text-indigo-400 transition-colors"
                >
                  Ver Estudo de Caso
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;