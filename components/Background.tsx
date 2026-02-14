import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-[#050505] overflow-hidden pointer-events-none">
      {/* Mesh Gradients - Red & Dark Red */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/40 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-red-800/30 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Subtle Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-brand-red/5 to-transparent opacity-30"></div>

      {/* Noise Overlay (Optional for texture) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;