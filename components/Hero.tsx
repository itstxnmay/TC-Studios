import React from 'react';
import { ArrowRight, ChevronDown, MousePointerClick, Play } from 'lucide-react';
import { useParallax } from '../hooks/useAppHooks';
import TypewriterText from './ui/TypewriterText';

const Hero = () => {
  const parallaxOffset = useParallax(0.2);
  const blobOffset = useParallax(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Moving Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transform: `translateY(${blobOffset}px)` }}>
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] animate-blob mix-blend-screen will-change-transform"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen will-change-transform"></div>
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen will-change-transform"></div>
      </div>
      
      {/* Soft Spotlight Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none mix-blend-soft-light" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto" style={{ transform: `translateY(${-parallaxOffset}px)` }}>
        <div className="inline-block mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-lg">
            <TypewriterText text="Creative Agency for Creators" delay={1000} />
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          SCALE YOUR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-text-shimmer bg-[length:200%_auto]">INFLUENCE</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.5s' }}>
          We provide independent, high-end services for the world's best creators. <br/>
          <span className="text-white font-medium">Click-Optimized Thumbnails</span> & <span className="text-white font-medium">Retention-Focused Editing</span>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <a 
            href="#thumbnails" 
            className="group relative px-8 py-4 bg-cyan-950/50 border border-cyan-500/30 text-cyan-100 font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 w-full md:w-auto text-sm rounded-full overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <MousePointerClick className="w-4 h-4" /> View Thumbnails
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#video-editing" 
            className="group relative px-8 py-4 bg-purple-950/50 border border-purple-500/30 text-purple-100 font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 w-full md:w-auto text-sm rounded-full overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> View Video Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>

      <a href="#thumbnails" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hover:text-white transition-colors cursor-pointer z-20">
        <ChevronDown />
      </a>
    </section>
  );
};

export default Hero;