
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="space-y-16">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-px bg-indigo-500"></span>
          05. Credenciais
          <span className="w-8 h-px bg-indigo-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Cursos e Certificações</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Certificações profissionais, cursos e treinamentos especializados que validam minha expertise em tecnologias modernas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div 
            key={cert.id}
            className="group relative p-8 bg-gray-900/40 border border-gray-800 rounded-3xl hover:border-indigo-500/30 transition-all duration-500 text-left"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all">
              {cert.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {cert.title}
            </h3>
            
            <p className="text-indigo-500 font-mono text-xs uppercase tracking-wider mb-4">
              {cert.issuer}
            </p>
            
            <div className="mt-6">
              <span className="text-gray-500 text-sm font-medium">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
