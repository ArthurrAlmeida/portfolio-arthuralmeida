
import React from 'react';
import { ACADEMIC_INFO } from '../constants';

const Academic: React.FC = () => {
  return (
    <section id="academic" className="space-y-16">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-px bg-indigo-500"></span>
          03. Formação Acadêmica
          <span className="w-8 h-px bg-indigo-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Educação</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Minha base teórica e especializações em Inteligência Artificial e Big Data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {ACADEMIC_INFO.map((item) => (
          <div 
            key={item.id}
            className="group relative p-8 bg-gray-900/40 border border-gray-800 rounded-3xl hover:border-indigo-500/30 transition-all duration-500 text-left"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-indigo-500 font-semibold">{item.institution}</p>
              </div>
              <span className="text-gray-500 font-mono text-xs bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                {item.period}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;