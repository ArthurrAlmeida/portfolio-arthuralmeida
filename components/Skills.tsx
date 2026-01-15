
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-16">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-px bg-indigo-500"></span>
          02. Arsenal Técnico
          <span className="w-8 h-px bg-indigo-500"></span>
        </div>
        <h2 className="text-4xl font-bold text-white">Habilidades e Tecnologias</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Ferramentas e frameworks que utilizo para construir arquiteturas de dados modernas e escaláveis.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {SKILLS.map((skill) => (
          <div 
            key={skill.name}
            className="group p-8 bg-gray-900/40 border border-gray-800 rounded-3xl hover:bg-gray-800/60 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center text-center space-y-4"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-sm">{skill.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
