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
       { id: "d1", title: "Starbucks Truth", category: "Documentary", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472822/Starbucks_Truth_ncan8t.webp" },
       { id: "d2", title: "Dark Truth of Coke", category: "Documentary", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473018/The_Dark_truth_of_Cocacola_q9n42w.webp" },
       { id: "d3", title: "Stock Market Trap", category: "Documentary", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472910/Dark_truth_about_Stock_Market_le7kxj.webp" },
       { id: "d4", title: "Brain Rot", category: "Documentary", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473030/Why_you_are_stuck_pxhxc6.webp" }
    ]
  },
  {
    id: 'cat2',
    title: "Cinematic Realism",
    description: "Atmospheric, story-driven visuals for mature audiences.",
    icon: <Layers className="w-4 h-4 text-purple-500" />,
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl", 
    items: [
       { id: "c1", title: "The Narrative Engine", category: "Cinematic", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472956/Survived_100_days_in_prison_xz88gp.webp" },
       { id: "c2", title: "Survival Thriller", category: "Cinematic", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472984/Survived_100_days_in_forest_a9vmlg.webp" }
    ]
  },
  {
    id: 'cat3',
    title: "Finance & Growth",
    description: "Click-optimized assets for the business ecosystem.",
    icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
    gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    items: [
       { id: "f1", title: "AI Labor Crisis", category: "Finance", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473018/Will_AI_take_all_the_jobs.._uh1g2u.webp" },
       { id: "f2", title: "Scale to $1M", category: "Finance", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473030/Make_a_buisness_of_1M_using_AI_uccsfl.webp" },
       { id: "f3", title: "$10k/Month Blueprint", category: "Finance", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472960/Make_10_000_per_month_using_AI_zgnxoa.webp" },
       { id: "f4", title: "Gemini Income Strat", category: "Finance", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473010/Make_100_per_day_using_Gemini_ckdgaf.webp" },
       { id: "f5", title: "Lock In Effect", category: "Finance", image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472947/I_locked_in_until_i_made.._cnkyqk.webp" }
    ]
  }
];

const ThumbnailItem = ({ thumb, onClick }: { thumb: any, onClick: () => void }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    
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
                src={thumb.image} 
                alt={thumb.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => { setError(true); setLoaded(true); }}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 transition-all duration-300 z-20 p-6 flex flex-col 
                  opacity-100 bg-gradient-to-t from-black/95 via-black/40 to-transparent justify-end items-start
                  lg:opacity-0 lg:group-hover:opacity-100 lg:bg-cyan-950/90 lg:justify-center lg:items-center lg:backdrop-blur-sm"
              >
                <span className="
                    px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2
                    bg-cyan-500/20 text-cyan-300 border border-cyan-500/30
                    lg:bg-black/50 lg:text-cyan-300 lg:border-cyan-500/30 lg:mb-3
                ">
                  {thumb.category}
                </span>
                
                <h3 className="text-white font-bold text-lg lg:text-xl lg:text-center leading-tight mb-0 lg:mb-1">
                    {thumb.title}
                </h3>
                
                <div className="hidden lg:flex mt-4 items-center gap-2 text-xs text-cyan-200 font-bold uppercase tracking-widest border-b border-cyan-500/50 pb-0.5">
                  <ExternalLink className="w-3 h-3" /> View Detail
                </div>
              </div>
            </div>
        </TiltCard>
    );
};

const Lightbox = ({ image, onClose }: { image: string, onClose: () => void }) => {
    const [error, setError] = useState(false);

    return (
        <div 
          className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={onClose}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
            onClick={onClose}
          >
            <X className="w-8 h-8" />
          </button>
          
          {error ? (
              <div className="text-white flex flex-col items-center">
                  <ImageOff className="w-12 h-12 mb-4 text-zinc-500" />
                  <p>Image Unavailable</p>
              </div>
          ) : (
              <img 
                src={image} 
                alt="Thumbnail Preview" 
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl ring-1 ring-white/10 object-contain"
                onClick={(e) => e.stopPropagation()}
                onError={() => setError(true)}
              />
          )}
        </div>
    );
}

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
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
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
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
};

export default Thumbnails;