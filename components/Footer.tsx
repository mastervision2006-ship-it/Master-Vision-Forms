import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-white/5 bg-[#050505] text-center relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Master Vision Consulting. Todos os direitos reservados.
        </p>
        <p className="text-neutral-600 text-xs mt-3 max-w-2xl mx-auto">
          Investimentos envolvem riscos. Rentabilidade passada não é garantia de rentabilidade futura. A Master Vision atua como empresa de educação e consultoria financeira.
        </p>
      </div>
    </footer>
  );
};

export default Footer;