import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ArrowUpRight, DollarSign, Cpu, ChartBar, Wallet, X, Loader2, ImageOff } from 'lucide-react';

const FinanceSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // RESTORED: User's original PostImage portfolio links
    const thumbnails = [
        {
            id: 1,
            title: "The AI Labor Crisis",
            category: "Future Tech",
            image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473018/Will_AI_take_all_the_jobs.._uh1g2u.webp",
            icon: <Cpu className="w-4 h-4" />
        },
        {
            id: 2,
            title: "Scale to $1M",
            category: "Entrepreneurship",
            image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473030/Make_a_buisness_of_1M_using_AI_uccsfl.webp",
            icon: <TrendingUp className="w-4 h-4" />
        },
        {
            id: 3,
            title: "$10k/Month Blueprint",
            category: "Side Hustle",
            image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472960/Make_10_000_per_month_using_AI_zgnxoa.webp",
            icon: <DollarSign className="w-4 h-4" />
        },
        {
            id: 4,
            title: "Gemini Income Strat",
            category: "AI Tools",
            image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770473010/Make_100_per_day_using_Gemini_ckdgaf.webp",
            icon: <Wallet className="w-4 h-4" />
        },
        {
            id: 5,
            title: "The 'Lock In' Effect",
            category: "Mindset",
            image: "https://res.cloudinary.com/dgbnitsvw/image/upload/v1770472947/I_locked_in_until_i_made.._cnkyqk.webp",
            icon: <ChartBar className="w-4 h-4" />
        }
    ];

    const Card = ({ item, isLarge = false }: { item: typeof thumbnails[0], isLarge?: boolean }) => {
        const [loaded, setLoaded] = useState(false);
        const [error, setError] = useState(false);
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
                    {!loaded && !error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                        </div>
                    )}
                     {error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-20">
                            <ImageOff className="w-8 h-8 text-zinc-600" />
                        </div>
                    )}
                    <img 
                        ref={imgRef}
                        src={item.image} 
                        alt={item.title}
                        onLoad={() => setLoaded(true)}
                        onError={() => { setError(true); setLoaded(true); }}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 will-change-transform ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>

                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 z-20
                    opacity-100 bg-gradient-to-t from-black/90 via-black/40 to-transparent
                    md:opacity-0 md:group-hover:opacity-100"
                >
                    <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                            {item.icon}
                            {item.category}
                        </div>
                        <h4 className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-sm md:text-lg'} font-bold text-white leading-tight`}>
                            {item.title}
                        </h4>
                    </div>
                    
                    {/* External Link Icon - Desktop Only to keep mobile clean */}
                    <div className="hidden md:block absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
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
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                >
                    <X className="w-8 h-8" />
                </button>
                
                {error ? (
                    <div className="flex flex-col items-center text-white">
                        <ImageOff className="w-12 h-12 mb-2 text-zinc-500"/>
                        <span>Image Unavailable</span>
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
        )
    }

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
                <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};

export default FinanceSection;