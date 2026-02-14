import React from 'react';
import { Reveal } from '../utils/animations';

const CeoStory: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900/30 backdrop-blur-sm relative overflow-hidden border-y border-white/5">
      {/* Decorative BG element */}
      <div className="absolute -left-32 top-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <Reveal>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="aspect-[4/5] rounded-2xl bg-[#080808] border border-white/10 flex items-end p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900 animate-pulse opacity-10"></div>
                     {/* 
                        Image updated to a high-quality portrait fitting the 'AI CEO' aesthetic.
                        Removed mix-blend-overlay to ensure facial features are visible against dark bg, 
                        relying on grayscale and opacity for the mood.
                     */}
                    <img 
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                        alt="Roberto Marçal CEO" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                    
                    {/* Dark gradient at bottom to make text readable */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 w-full">
                        <div className="h-0.5 w-12 bg-brand-red mb-4 shadow-[0_0_10px_rgba(255,28,28,0.8)]"></div>
                        <p className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2 drop-shadow-md">CEO & FUNDADOR</p>
                        <h3 className="text-3xl font-bold text-white drop-shadow-lg">Roberto Marçal</h3>
                    </div>
                </div>
            </div>
        </Reveal>

        <div className="space-y-8">
            <Reveal delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                    De R$ 1.000 a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
                        R$ 1 Milhão em 6 meses
                    </span>
                </h2>
            </Reveal>

            <Reveal delay={300}>
                <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                    <p>
                        Isso não é mágica. É <strong className="text-white">método</strong>. Roberto Marçal decodificou os padrões do mercado financeiro que bancos e grandes instituições tentam esconder.
                    </p>
                    <p>
                        Começando com um capital mínimo, ele aplicou estratégias de alavancagem inteligente e timing preciso para multiplicar seu patrimônio exponencialmente em tempo recorde.
                    </p>
                    <blockquote className="border-l-2 border-brand-red pl-6 italic text-white/90 font-light">
                        "O mercado transfere dinheiro dos impacientes para os impacientes bem informados."
                    </blockquote>
                </div>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default CeoStory;