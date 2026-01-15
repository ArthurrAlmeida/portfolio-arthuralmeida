
import React from 'react';
import { SITE_CONFIG } from '../constants';
import profileImage from '../img/perfil.jpg';

const Hero: React.FC = () => {
  // usando imagem local importada acima

  const aboutText = Array.isArray(SITE_CONFIG.about) ? SITE_CONFIG.about : [SITE_CONFIG.about];

  return (
    <section className="flex flex-col items-center text-center pt-20 md:pt-32 w-full">
      <div className="relative mb-10">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 rounded-full" />
        
        {/* Profile Image Container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-2xl overflow-hidden group">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-gray-950">
            <img 
              src={profileImage} 
              alt={SITE_CONFIG.name}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              onError={(e) => {
                // Fallback caso a imagem não exista na pasta
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            {SITE_CONFIG.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-400 font-mono font-medium">
            {SITE_CONFIG.role}
          </h2>
        </div>

        {/* Bloco de Texto Centralizado mas com alinhamento à esquerda */}
        <div className="max-w-2xl mx-auto text-left space-y-4">
          {aboutText.map((paragraph, index) => (
            <p key={index} className="text-gray-400 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href={SITE_CONFIG.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-gray-950 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 flex items-center gap-2"
          >
            Medium
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <a 
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gray-900 border border-gray-800 text-white rounded-full font-bold hover:bg-gray-800 transition-all active:scale-95 flex items-center gap-2"
          >
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
