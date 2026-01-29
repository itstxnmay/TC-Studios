import React, { useState, useRef, useEffect } from 'react';
import { Play, ArrowRight, Loader2, Clock, Lock, ImageOff } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import { PROJECTS } from '../constants';

const PortfolioItem = ({ project }: { project: any }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <TiltCard 
          className="reveal-on-scroll blur-reveal group aspect-video bg-zinc-900/50 border border-white/5 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm cursor-default"
        >
          {/* Loader */}
          {!loaded && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                  <Loader2 className="w-8 h-8 text-purple-500/50 animate-spin" />
              </div>
          )}

          {/* Error State */}
          {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-20 text-zinc-600">
                   <div className="flex flex-col items-center">
                       <ImageOff className="w-8 h-8 mb-2" />
                       <span className="text-xs uppercase tracking-widest">Image Unavailable</span>
                   </div>
              </div>
          )}

          {/* COMING SOON BADGE */}
          <div className="absolute top-4 right-4 z-50 animate-in fade-in slide-in-from-top-4 duration-700">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/90 text-black text-[10px] font-black tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-md border border-amber-400/50">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
          </div>

          {/* Image with Filter - Darkened to imply locked state */}
          <img 
            ref={imgRef}
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-[0.5] opacity-60 group-hover:opacity-80 will-change-transform ${loaded ? '' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => {
                setError(true);
                setLoaded(true);
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end z-40">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               {/* Client Tag */}
               <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    {project.client}
                  </span>
               </div>
               
               <h3 className="text-3xl font-black text-zinc-500 group-hover:text-white transition-colors duration-300 mb-2 leading-none">{project.title}</h3>
               
               <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 mt-2 border-l-2 border-zinc-700 pl-4 group-hover:text-zinc-400">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest bg-black/50 px-2 py-1 rounded border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest">
                    <Lock className="w-3 h-3" /> Analysis Locked
                  </div>
               </div>
            </div>
          </div>

          {/* Hover Lock Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 z-50 border border-white/10">
            <Lock className="w-6 h-6 text-zinc-400" />
          </div>
        </TiltCard>
    );
};

const Portfolio = () => {
  return (
    <section id="video-editing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 reveal-on-scroll blur-reveal">
           <span className="flex items-center gap-3 text-purple-500 font-bold tracking-widest text-xs uppercase mb-4">
              <span className="w-8 h-[1px] bg-purple-500"></span>
              Service II : Video Production
           </span>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
             RETENTION <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">ENGINEERING.</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl font-light border-l border-white/20 pl-6">
             We don't just edit. We structure your content using data-backed retention strategies to maximize Average View Duration (AVD).
           </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`reveal-on-scroll blur-reveal`}
              data-reveal-delay={index * 100}
            >
               <PortfolioItem project={project} />
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="flex justify-center reveal-on-scroll">
            <button 
                className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-sm text-zinc-400 hover:text-white cursor-not-allowed"
            >
                Full Portfolio Launching Soon <Clock className="w-4 h-4 animate-pulse" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;