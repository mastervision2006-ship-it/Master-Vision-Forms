import React from 'react';
import { Reveal } from '../utils/animations';

const Stats: React.FC = () => {
  return (
    <section className="py-24 relative border-y border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <Reveal delay={0}>
            <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-brand-red/40 hover:bg-neutral-900/80 transition-all duration-500 hover:shadow-glow-sm">
              <h3 className="text-6xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">7+</h3>
              <p className="text-neutral-500 uppercase tracking-widest text-xs font-semibold group-hover:text-white transition-colors">Anos de Mercado</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-brand-red/40 hover:bg-neutral-900/80 transition-all duration-500 hover:shadow-glow-sm">
              <h3 className="text-5xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">10k-50k</h3>
              <p className="text-neutral-500 uppercase tracking-widest text-xs font-semibold group-hover:text-white transition-colors">Renda Mensal dos Alunos</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-brand-red/40 hover:bg-neutral-900/80 transition-all duration-500 hover:shadow-glow-sm">
              <h3 className="text-6xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">100+</h3>
              <p className="text-neutral-500 uppercase tracking-widest text-xs font-semibold group-hover:text-white transition-colors">Vidas Transformadas</p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Stats;