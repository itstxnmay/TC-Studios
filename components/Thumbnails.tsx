import React, { useState, useEffect, useRef } from 'react';
import TiltCard from './ui/TiltCard';
import { X, ExternalLink, MousePointerClick, ArrowRight, LayoutGrid, FolderOpen, Film, Layers, TrendingUp, ImageOff, Loader2 } from 'lucide-react';
import DocumentarySection from './thumbnails/DocumentarySection';
import CinematicSection from './thumbnails/CinematicSection';
import FinanceSection from './thumbnails/FinanceSection';

// Data for the bottom gallery
const ARCHIVE = [
  {
    id: 'cat1',
    title: "Documentary Style",
    description: "High-retention investigative journalism style thumbnails.",
    icon: <Film className="w-4 h-4 text-amber-500" />,
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    items: [
       { id: "d1", title: "Starbucks Truth", category: "Documentary", image: "https://i.postimg.cc/sxQQpSZc/Starbucks-Truth.png" },
       { id: "d2", title: "Dark Truth of Coke", category: "Documentary", image: "https://i.postimg.cc/XNkw4MfB/The-Dark-truth-of-Cocacola.png" },
       { id: "d3", title: "Stock Market Trap", category: "Documentary", image: "https://i.postimg.cc/LsTh1SN1/Dark-truth-about-Stock-Market.png" },
       { id: "d4", title: "Brain Rot", category: "Documentary", image: "https://i.postimg.cc/dtCqPvPr/Why-you-are-stuck.jpg" }
    ]
  },
  {
    id: 'cat2',
    title: "Cinematic Realism",
    description: "Atmospheric, story-driven visuals for mature audiences.",
    icon: <Layers className="w-4 h-4 text-purple-500" />,
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl", 
    items: [
       { id: "c1", title: "The Narrative Engine", category: "Cinematic", image: "https://iili.io/fs9Wqb4.png" },
       { id: "c2", title: "Survival Thriller", category: "Cinematic", image: "https://i.postimg.cc/cLvtzhQG/Survived-100-days-in-forest-(1).png" }
    ]
  },
  {
    id: 'cat3',
    title: "Finance & Growth",
    description: "Click-optimized assets for the business ecosystem.",
    icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    items: [
       { id: "f1", title: "AI Labor Crisis", category: "Finance", image: "https://i.postimg.cc/SR5YQzhZ/Will-AI-take-all-the-jobs.png" },
       { id: "f2", title: "Scale to $1M", category: "Finance", image: "https://i.postimg.cc/bN7SKbLd/Make-a-buisness-of-1M-using-AI.png" },
       { id: "f3", title: "$10k/Month Blueprint", category: "Finance", image: "https://i.postimg.cc/wvj1hkTg/Make-10-000-per-month-using-AI.png" },
       { id: "f4", title: "Gemini Income Strat", category: "Finance", image: "https://i.postimg.cc/wxP1mLKY/Make-100-per-day-using-Gemini.png" },
       { id: "f5", title: "Lock In Effect", category: "Finance", image: "https://i.postimg.cc/x8FMk4K7/I-locked-in-until-i-made.png" }
    ]
  }
];

const ThumbnailItem = ({ thumb, onClick }: { thumb: any, onClick: () => void }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <TiltCard className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-cyan-500/50 bg-zinc-900 shadow-2xl transition-all duration-300">
            <div onClick={onClick} className="w-full h-full relative">
              {/* Spinner Loader */}
              {!loaded && !error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                      <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                  </div>
              )}

              {/* Error State */}
              {error && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 z-20 text-zinc-600">
                      <ImageOff className="w-6 h-6 mb-2" />
                      <span className="text-[10px] uppercase tracking-widest">Load Failed</span>
                  </div>
              )}
              
              {/* Thumbnail Image */}
              <img 
                ref={imgRef}
                src={thumb.image} 
                alt={thumb.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => {
                    setError(true);
                    setLoaded(true);
                }}
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-cyan-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-sm z-20">
                <span className="px-3 py-1 bg-black/50 border border-cyan-500/30 rounded-full text-cyan-300 text-[10px] font-bold uppercase tracking-widest mb-3">
                  {thumb.category}
                </span>
                <h3 className="text-white font-bold text-xl text-center mb-1">{thumb.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-xs text-cyan-200 font-bold uppercase tracking-widest border-b border-cyan-500/50 pb-0.5">
                  <ExternalLink className="w-3 h-3" /> View Detail
                </div>
              </div>
            </div>
        </TiltCard>
    );
};

const Thumbnails = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="thumbnails" className="py-24 md:py-32 relative bg-black">
      {/* Background Separation Gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Global Header */}
        <div className="text-center mb-20 px-6 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            <MousePointerClick className="w-3 h-3" /> Service I : Graphic Design
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            THE ART OF THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CLICK</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Your video is only as good as its packaging. We design high-psychology thumbnails that stop the scroll and drive massive CTR.
          </p>
        </div>

        {/* 1. DOCUMENTARY STYLE SHOWCASE (Feature Section) */}
        <div className="mb-0 px-6">
            <DocumentarySection />
        </div>

        {/* 2. CINEMATIC REALISM SHOWCASE (Comparison Section) */}
        <div className="mb-0">
            <CinematicSection />
        </div>

        {/* 3. FINANCE & GROWTH (Bento Grid) */}
        <div className="mb-32">
            <FinanceSection />
        </div>

        <div className="px-6">
            {/* 4. CONSOLIDATED ARCHIVE (Gallery) */}
            <div className="flex items-center gap-4 mb-16 reveal-on-scroll">
                <span className="h-px flex-1 bg-white/10"></span>
                <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" /> Full Archive
                </span>
                <span className="h-px flex-1 bg-white/10"></span>
            </div>

            {ARCHIVE.map((cat, catIndex) => (
                <div key={cat.id} className="mb-20 last:mb-0">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8 reveal-on-scroll">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                            {cat.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                            <p className="text-zinc-500 text-sm font-light">{cat.description}</p>
                        </div>
                    </div>

                    {/* Category Grid */}
                    <div className={`grid gap-6 ${cat.gridClass} reveal-on-scroll blur-reveal`}>
                        {cat.items.map((thumb, index) => (
                            <div 
                                key={thumb.id}
                                data-reveal-delay={index * 50}
                            >
                                <ThumbnailItem thumb={thumb} onClick={() => setSelectedImage(thumb.image)} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Dedicated CTA for Thumbnails */}
            <div className="flex justify-center reveal-on-scroll mt-20">
                <a 
                    href="#pricing" 
                    className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-50 transition-colors rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                >
                    Order Your Thumbnails <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>

      </div>

      {/* Lightbox for Thumbnails */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Thumbnail Preview" 
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Thumbnails;