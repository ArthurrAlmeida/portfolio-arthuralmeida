import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Certifications from './components/Certifications';
import Certificacoes from './components/Certificacoes';
import { SITE_CONFIG } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Gradientes de Fundo Abstratos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      
      <main className="container mx-auto px-6 py-20 space-y-32">
        <Hero />
        
        {/* Ordem Reorganizada Conforme Solicitação */}
        <Projects />      {/* 01. Portfólio */}
        <Skills />        {/* 02. Arsenal Técnico */}
        <Academic />      {/* 03. Formação Acadêmica */}
        <Experience />    {/* 04. Carreira Profissional */}
        <Certificacoes />
        <Certifications /> {/* 05. Credenciais */}
      </main>

      <footer className="py-12 border-t border-gray-800/50 text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Engenharia de Dados & IA.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;