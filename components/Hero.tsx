import React from 'react';
import { Reveal } from '../utils/animations';

const Hero: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Previne a navegação padrão que pode causar erro 404
    const element = document.getElementById('cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 lg:py-0">
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        
        <Reveal>
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 backdrop-blur-sm shadow-glow-sm">
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              Master Vision Consulting
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.05]">
            Informação é o ativo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-red-800 drop-shadow-[0_0_15px_rgba(255,28,28,0.3)]">
              mais valioso
            </span> do mundo.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Há 7 anos ajudando pessoas comuns a alcançarem a liberdade financeira através de <span className="text-white font-medium">inteligência de mercado</span>.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a 
            href="#cadastro"
            onClick={scrollToForm}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold text-white transition-all duration-300 bg-brand-red rounded-full hover:bg-[#ff3333] shadow-glow-red hover:shadow-[0_0_40px_-5px_rgba(255,28,28,0.6)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red focus:ring-offset-black cursor-pointer"
          >
            Quero minha consultoria gratuita
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </Reveal>

        {/* Floating Cards (Decorative) */}
        <div className="absolute hidden lg:block top-1/2 -left-8 -translate-y-1/2 animate-pulse-slow">
          <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transform -rotate-6 hover:border-brand-red/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">Rendimento</p>
                <p className="text-xl font-bold text-white">+510%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute hidden lg:block bottom-32 -right-8 animate-pulse-slow animation-delay-2000">
           <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transform rotate-3 hover:border-brand-red/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">Status</p>
                <p className="text-xl font-bold text-white">Consultoria Ativa</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;