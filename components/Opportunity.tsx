import React from 'react';
import { Reveal } from '../utils/animations';

const Opportunity: React.FC = () => {
  return (
    <section className="py-28 px-6 text-center relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-brand-red/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-widest uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Atenção: Janela de Oportunidade
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Este ano teremos <br/>
            <span className="text-brand-red drop-shadow-[0_0_25px_rgba(255,28,28,0.4)]">novos milionários.</span>
          </h2>

          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light">
            Já temos informações estratégicas sobre novos IPOs e movimentos de mercado que estão prestes a acontecer. <br className="hidden md:block"/>
            <span className="text-white font-medium">Você vai assistir ou participar?</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Opportunity;