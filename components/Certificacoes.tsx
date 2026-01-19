import React from 'react';
import { CERTIFICACOES } from '../constants';

const Certificacoes = () => {
  return (
    <section id="certificacoes" className="py-24">
      <div className="container mx-auto px-4">
        
        {/* --- CABEÇALHO --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-indigo-500/60 inline-block"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-500">
              05. CREDENCIAIS
            </span>
            <span className="h-[1px] w-8 bg-indigo-500/60 inline-block"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Certificações de Mercado
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto">
            Credenciais técnicas emitidas por líderes globais de tecnologia que validam oficialmente minha competência em nuvem e dados.
          </p>
        </div>

        {/* --- GRID DE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICACOES.map((cert) => (
            <div 
              key={cert.id} 
              className="group relative flex flex-col h-full bg-gray-900/30 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* --- ÁREA DA IMAGEM --- */}
              {/* h-60: Altura equilibrada (não fica gigante) */}
              <div className="h-60 w-full flex items-center justify-center p-0 relative bg-gray-900/50 overflow-hidden">
                
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  // object-cover: Preenche tudo (corta bordas vazias)
                  // scale-110: Dá um zoom de 10% para o texto ficar maior
                  className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-125" 
                />
              </div>

              {/* --- CONTEÚDO --- */}
              <div className="p-6 flex flex-col flex-grow border-t border-gray-800/50">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  Emitido por {cert.issuer} • {cert.date}
                </p>
                <div className="mt-auto">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Ver Credencial
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificacoes;