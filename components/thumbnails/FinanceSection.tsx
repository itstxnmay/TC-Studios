import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ArrowUpRight, DollarSign, Cpu, ChartBar, Wallet, X, Loader2 } from 'lucide-react';

const FinanceSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const thumbnails = [
        {
            id: 1,
            title: "The AI Labor Crisis",
            category: "Future Tech",
            image: "https://i.postimg.cc/SR5YQzhZ/Will-AI-take-all-the-jobs.png",
            icon: <Cpu className="w-4 h-4" />
        },
        {
            id: 2,
            title: "Scale to $1M",
            category: "Entrepreneurship",
            image: "https://i.postimg.cc/bN7SKbLd/Make-a-buisness-of-1M-using-AI.png",
            icon: <TrendingUp className="w-4 h-4" />
        },
        {
            id: 3,
            title: "$10k/Month Blueprint",
            category: "Side Hustle",
            image: "https://i.postimg.cc/wvj1hkTg/Make-10-000-per-month-using-AI.png",
            icon: <DollarSign className="w-4 h-4" />
        },
        {
            id: 4,
            title: "Gemini Income Strat",
            category: "AI Tools",
            image: "https://i.postimg.cc/wxP1mLKY/Make-100-per-day-using-Gemini.png",
            icon: <Wallet className="w-4 h-4" />
        },
        {
            id: 5,
            title: "The 'Lock In' Effect",
            category: "Mindset",
            image: "https://i.postimg.cc/x8FMk4K7/I-locked-in-until-i-made.png",
            icon: <ChartBar className="w-4 h-4" />
        }
    ];

    const Card = ({ item, isLarge = false }: { item: typeof thumbnails[0], isLarge?: boolean }) => {
        const [loaded, setLoaded] = useState(false);
        const imgRef = useRef<HTMLImageElement>(null);

        useEffect(() => {
            if (imgRef.current && imgRef.current.complete) {
                setLoaded(true);
            }
        }, []);

        return (
            <div 
                className={`group relative rounded-xl overflow-hidden border border-white/5 bg-zinc-900/50 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 w-full aspect-video`}
            >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {!loaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                        </div>
                    )}
                    <img 
                        ref={imgRef}
                        src={item.image} 
                        alt={item.title}
                        onLoad={() => setLoaded(true)}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 will-change-transform ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>

                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 z-20">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                            {item.icon}
                            {item.category}
                        </div>
                        <h4 className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-sm md:text-lg'} font-bold text-white leading-tight`}>
                            {item.title}
                        </h4>
                    </div>
                    
                    {/* External Link Icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full relative py-24 border-b border-white/5 bg-zinc-950">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/30 bg-emerald-950/20 text-emerald-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                        <TrendingUp className="w-3 h-3" /> Industry III : Growth
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                        FINANCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">GROWTH</span>
                    </h3>
                    
                    <p className="text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        High-CTR visuals for the Finance, AI, and Entrepreneurship economy.
                    </p>
                </div>

                {/* Grid Layout: 2 - 2 - 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {thumbnails.map((item, index) => {
                        // Logic for the last item to be centered
                        const isLastItem = index === thumbnails.length - 1;
                        
                        return (
                            <div 
                                key={item.id}
                                className={`reveal-on-scroll blur-reveal cursor-pointer ${isLastItem ? 'md:col-span-2 md:w-[60%] md:mx-auto' : ''}`}
                                data-reveal-delay={index * 100}
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <Card item={item} isLarge={isLastItem} />
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
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
        </div>
    );
};

export default FinanceSection;