import React from 'react';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      
      {/* Apple-style Grid Overlay with Radial Mask */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
      />
      
      {/* Film Grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
    </div>
  );
};

export default GlobalBackground;