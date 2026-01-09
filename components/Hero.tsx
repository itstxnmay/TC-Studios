import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
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
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen will-change-transform"></div>
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen will-change-transform"></div>
      </div>
      
      {/* Soft Spotlight Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none mix-blend-soft-light" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto" style={{ transform: `translateY(${-parallaxOffset}px)` }}>
        <div className="inline-block mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <TypewriterText text="Premium Video Editing Services" delay={1000} />
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          RETENTION IS <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-400 animate-text-shimmer bg-[length:200%_auto]">REVENUE</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.5s' }}>
          We engineer video assets that stop the scroll, build authority, and convert viewers into buyers. Don't just post content. Dominate your niche.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <a 
            href="#contact" 
            className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 w-full md:w-auto text-sm rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#work" 
            className="group px-10 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/10 hover:border-purple-500/50 active:scale-95 transition-all w-full md:w-auto text-sm rounded-full backdrop-blur-sm"
          >
            <span className="group-hover:text-purple-400 transition-colors">See Results</span>
          </a>
        </div>
      </div>

      <a href="#work" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hover:text-purple-500 transition-colors cursor-pointer z-20">
        <ChevronDown />
      </a>
    </section>
  );
};

export default Hero;