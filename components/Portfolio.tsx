import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import { PROJECTS } from '../constants';

const Portfolio = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="work" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-white/10 pb-8 reveal-on-scroll blur-reveal">
          <div>
            <span className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2 block">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Work</h2>
          </div>
          <p className="text-zinc-500 mt-4 md:mt-0 text-sm max-w-xs text-left md:text-right">
            Short-form work showcasing our approach to pacing, motion, and retention.
          </p>
        </div>

        {/* Video Lightbox Modal */}
        {isVideoOpen && (
            <div 
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300 backdrop-blur-md"
              onClick={() => setIsVideoOpen(false)}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-[110]"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Video Container - Optimized for all devices using max-dimensions and aspect ratio */}
              <div 
                className="relative w-auto h-auto max-w-[90vw] max-h-[85vh] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black"
                onClick={(e) => e.stopPropagation()} 
              >
                 <iframe 
                    src="https://streamable.com/e/wm1d8v?autoplay=1&muted=0&playsinline=1"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    className="w-full h-full"
                    style={{ background: '#000' }}
                ></iframe>
              </div>
            </div>
        )}

        {/* Featured Reel Section */}
        <div 
          onClick={() => setIsVideoOpen(true)}
          className="flex flex-col items-center justify-center mb-24 reveal-on-scroll cursor-pointer group"
        >
          <div 
            className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-105 bg-black"
          >
             {/* Logo Hiding Overlay for Preview Only */}
             <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>

             <iframe 
                src="https://streamable.com/e/wm1d8v?autoplay=1&muted=1&loop=1&controls=0&nocontrol=1"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; fullscreen"
                className="w-full h-full object-cover" 
                style={{ pointerEvents: 'none' }}
            ></iframe>
             {/* Shine effect */}
             <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-3xl"></div>
             
             {/* Play Icon Overlay on Hover */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm z-30">
                <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <div className="absolute bottom-12 text-white font-bold tracking-widest text-sm uppercase">Click to Watch</div>
             </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
             <span className="h-px w-8 bg-purple-500/50"></span>
             <p className="text-xs font-medium text-purple-300/80 tracking-[0.2em] uppercase">
                Motion Graphics · Kinetic Typography · Short-Form
             </p>
             <span className="h-px w-8 bg-purple-500/50"></span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <TiltCard 
              key={project.id} 
              className="reveal-on-scroll blur-reveal group aspect-video bg-zinc-900/50 border border-white/5 hover:border-purple-500/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm cursor-pointer"
            >
              {/* Image with Filter */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 will-change-transform"
                loading="lazy"
                decoding="async"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-40">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 backdrop-blur-md">{project.category}</span>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;