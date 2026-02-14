import React from 'react';
import { Reveal } from '../utils/animations';

const PowerOfInfo: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-20 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">O Custo da <span className="text-neutral-500">Ignorância</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
              No mercado financeiro, chegar atrasado custa caro. Ter a informação certa antes da multidão é o que separa <span className="text-white border-b border-brand-red/50 pb-0.5">investidores comuns</span> de <span className="text-brand-red font-bold">milionários</span>.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Card Bitcoin */}
          <Reveal>
            <div className="relative group p-8 rounded-[2rem] bg-[#0F0F0F] border border-white/10 overflow-hidden hover:border-brand-red/30 transition-all duration-500 shadow-2xl">
              {/* Glow effect behind card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 group-hover:opacity-30"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 mb-8 rounded-2xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-brand-red">₿</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Exemplo Real: Bitcoin</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-neutral-400 text-sm">Investimento há 10 anos</span>
                    <span className="text-white font-mono font-medium">R$ 1.000,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 text-sm">Valor Hoje</span>
                    <span className="text-brand-red font-bold font-mono text-2xl drop-shadow-[0_0_10px_rgba(255,28,28,0.4)]">R$ 510.000,00+</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text Content */}
          <div className="space-y-8 md:pl-8">
            <Reveal delay={200}>
              <h3 className="text-3xl font-bold text-white">Não é apenas Cripto.</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Pode ser um IPO da Apple, Tesla, Facebook ou Nubank. O segredo não é o ativo em si, mas o <span className="text-white font-bold bg-brand-red/20 px-1">timing</span>.
              </p>
              <ul className="space-y-5 mt-6">
                {['Informações privilegiadas', 'Análise de tendências', 'Estratégia consolidada'].map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-300 group cursor-default">
                    <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center mr-4 border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-all">
                      <svg className="w-4 h-4 text-brand-red group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PowerOfInfo;