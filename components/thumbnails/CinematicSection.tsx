import React, { useState, useRef, useEffect } from 'react';
import { Zap, Film, MonitorPlay, Sparkles, Loader2 } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const CinematicImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <div className="relative w-full h-full">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                    <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                </div>
            )}
            <img 
                ref={imgRef}
                src={src} 
                alt={alt} 
                className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`} 
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}

const CinematicSection = () => {
    const examples = [
        {
            id: 1,
            label: "Narrative Storytelling",
            caption: "Survive 100 Days In Prison, Win $10,000",
            beast: {
                image: "https://i.postimg.cc/tJ0d4Pkc/TDv56whos-PQ-HD.jpg",
                title: "The \"Viral Arcade\" Engine",
                desc: "Optimized for mass appeal. High-Saturation and Hyper-Expression create competitive tension."
            },
            tc: {
                image: "https://iili.io/fs9Wqb4.png",
                title: "The \"Cinematic Narrative\" Engine",
                desc: "Optimized for retention. Atmospheric Lighting and Environmental Storytelling create immersion."
            }
        },
        {
            id: 2,
            label: "Survival Thriller",
            caption: "$10,000 Every Day You Survive In The Wilderness",
            beast: {
                image: "https://i.postimg.cc/yYPTKLg8/U-Ll-X4t0A9I-HD.jpg",
                title: "The \"Celebrity Focus\" Engine",
                desc: "Prioritizes personality over danger. High-Key lighting assures safety and fun."
            },
            tc: {
                image: "https://i.postimg.cc/cLvtzhQG/Survived-100-days-in-forest-(1).png",
                title: "The \"True Stakes\" Engine",
                desc: "Prioritizes struggle over personality. Gritty textures sell the reality of the survival challenge."
            }
        }
    ];

    return (
        <div className="w-full relative py-24 border-b border-white/5 bg-zinc-950">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/5 to-transparent pointer-events-none" />

            {/* Header */}
             <div className="text-center mb-16 px-6 reveal-on-scroll relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-purple-500/30 bg-purple-950/20 text-purple-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                    <Film className="w-3 h-3" /> Industry II : Cinematic Realism
                </span>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
                    TWO PHILOSOPHIES. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ONE GOAL.</span>
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    We choose the right visual engine for your audience.
                </p>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* GLOBAL HEADERS (Desktop Only) */}
                <div className="hidden lg:grid grid-cols-2 gap-16 mb-12 border-b border-white/5 pb-4">
                    <div className="flex flex-col items-center justify-center p-6 bg-blue-950/10 rounded-2xl border border-blue-500/10">
                         <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                             <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px]">Industry Standard</span>
                         </div>
                         <h3 className="text-3xl font-black text-white italic tracking-tight opacity-70">MRBEAST'S STYLE</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-purple-950/10 rounded-2xl border border-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                         <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                             <span className="text-purple-500 font-bold tracking-[0.2em] uppercase text-[10px]">Our Approach</span>
                         </div>
                         <h3 className="text-3xl font-black text-white italic tracking-tight">TC STUDIOS STYLE</h3>
                    </div>
                </div>

                {/* EXAMPLES LOOP */}
                {examples.map((ex, index) => (
                    <div key={ex.id} className={`mb-24 last:mb-0 ${index > 0 ? 'pt-24 border-t border-white/5' : ''}`}>
                         {/* Case Label & Shared Caption */}
                         <div className="flex flex-col items-center justify-center mb-12 text-center">
                            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900 text-gray-300 text-xs font-bold tracking-widest uppercase shadow-xl mb-6">
                                Case Study 0{ex.id} : {ex.label}
                            </span>
                            
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-50 rounded-lg"></div>
                                <div className="relative bg-black/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                                    <Film className="w-4 h-4 text-zinc-500" />
                                    <span className="font-mono text-sm md:text-base text-white font-bold tracking-tight">"{ex.caption}"</span>
                                </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
                            
                            {/* VS Divider (Absolute Center) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-white/10 font-black text-white text-xs shadow-xl">
                                VS
                            </div>

                            {/* LEFT: MR BEAST (Desaturated / Standard) */}
                            <div className="reveal-on-scroll blur-reveal group relative">
                                {/* Mobile Header */}
                                <div className="lg:hidden mb-4 flex flex-col items-center">
                                     <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-1">Industry Standard</span>
                                     <h3 className="text-2xl font-black text-white italic">MRBEAST'S STYLE</h3>
                                </div>

                                {/* Card */}
                                <div className="relative mb-6">
                                     <div className="absolute inset-0 bg-blue-500/10 blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity" />
                                     <TiltCard className="aspect-video rounded-xl overflow-hidden border border-white/5 group-hover:border-blue-500/30 shadow-2xl relative bg-zinc-900">
                                         <CinematicImage 
                                            src={ex.beast.image} 
                                            alt="MrBeast Style" 
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                                         />
                                         
                                         {/* Embedded Badge */}
                                         <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-2">
                                            <MonitorPlay className="w-3 h-3" />
                                            Viral Arcade
                                         </div>
                                     </TiltCard>
                                </div>

                                {/* Description */}
                                <div className="px-4 py-4 bg-zinc-900/30 rounded-xl border border-white/5">
                                    <h4 className="text-xl font-bold text-gray-300 mb-2">{ex.beast.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {ex.beast.desc}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT: TC STUDIOS (Premium / Highlighted) */}
                            <div className="reveal-on-scroll blur-reveal group relative" data-reveal-delay="200">
                                {/* Mobile Header */}
                                <div className="lg:hidden mb-4 flex flex-col items-center mt-12 lg:mt-0">
                                     <span className="text-purple-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-1">Our Approach</span>
                                     <h3 className="text-2xl font-black text-white italic">TC STUDIOS STYLE</h3>
                                </div>

                                {/* Card */}
                                <div className="relative mb-6">
                                     <div className="absolute inset-0 bg-purple-500/30 blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity" />
                                     <TiltCard className="aspect-video rounded-xl overflow-hidden border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative bg-zinc-900 ring-1 ring-white/10">
                                         <CinematicImage 
                                            src={ex.tc.image} 
                                            alt="TC Studios Style" 
                                            className="w-full h-full object-cover" 
                                         />
                                         
                                         {/* Embedded Badge */}
                                         <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-lg flex items-center gap-2">
                                            <Sparkles className="w-3 h-3" />
                                            Cinematic Narrative
                                         </div>
                                         <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                     </TiltCard>
                                </div>

                                {/* Description */}
                                <div className="px-6 py-5 bg-gradient-to-b from-purple-900/10 to-zinc-900/30 rounded-xl border border-purple-500/20">
                                    <h4 className="text-2xl font-bold text-white mb-2">{ex.tc.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {ex.tc.desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default CinematicSection;