import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight, ImageOff } from 'lucide-react';

interface ComparisonSliderProps {
  imageBefore: string;
  imageAfter: string;
  labelBefore?: string;
  labelAfter?: string;
  theme?: 'amber' | 'red' | 'emerald' | 'fuchsia';
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  imageBefore,
  imageAfter,
  labelBefore = "AMATEUR WORK ($10)", 
  labelAfter = "TC STUDIOS ($100)",
  theme = 'amber'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  const handleImageError = () => {
    setHasError(true);
    setLoadedCount(prev => prev + 1);
  };

  useEffect(() => {
    if (loadedCount >= 2) setIsReady(true);
  }, [loadedCount]);

  const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    // Calculate position relative to container
    let pos = ((clientX - containerRect.left) / containerRect.width) * 100;
    
    // Clamp between 0 and 100
    pos = Math.max(0, Math.min(100, pos));
    
    setSliderPosition(pos);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, handleMove]);

  // Dynamic Theme Classes
  const themeStyles = {
    amber: {
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      handle: "bg-amber-500 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    },
    red: {
      badge: "bg-red-500/10 text-red-400 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]",
      handle: "bg-red-500 border-red-300 shadow-[0_0_20px_rgba(239,68,68,0.5)]",
    },
    emerald: {
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
      handle: "bg-emerald-500 border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    },
    fuchsia: {
      badge: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.2)]",
      handle: "bg-fuchsia-500 border-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.5)]",
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-video select-none group overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl ${!isReady ? 'animate-pulse' : ''}`}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
        {/* Loading State - Skeleton */}
        {!isReady && (
           <div className="absolute inset-0 skeleton-loader z-50" />
        )}

        {/* Hidden Loading Triggers */}
        <img src={imageBefore} className="hidden" onLoad={handleImageLoad} onError={handleImageError} />
        <img src={imageAfter} className="hidden" onLoad={handleImageLoad} onError={handleImageError} />

        {/* Content (Fade in when ready) */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            
            {hasError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800 text-zinc-500">
                    <ImageOff className="w-8 h-8 mb-2 opacity-50" />
                    <span className="text-xs uppercase tracking-widest">Image Error</span>
                </div>
            ) : (
                <>
                    {/* 1. After Image (Background / High Budget) */}
                    <img 
                        src={imageAfter} 
                        className="absolute inset-0 w-full h-full object-cover" 
                        draggable={false} 
                        alt="After"
                    />

                    {/* 2. Before Image (Foreground / Low Budget / Clipped) */}
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img 
                            src={imageBefore} 
                            className="absolute inset-0 w-full h-full object-cover" 
                            draggable={false}
                            alt="Before"
                        />
                    </div>
                </>
            )}

            {/* 3. Labels */}
            {/* Left Label (Amateur) */}
            <div className={`absolute top-4 left-4 z-20 transition-opacity duration-300 ${sliderPosition < 10 ? 'opacity-0' : 'opacity-100'}`}>
                <div className="px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold tracking-widest uppercase text-zinc-400 shadow-xl flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    {labelBefore}
                </div>
            </div>

            {/* Right Label (Pro) */}
            <div className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${sliderPosition > 90 ? 'opacity-0' : 'opacity-100'}`}>
                 <div className={`px-3 py-1.5 backdrop-blur-md border rounded text-[10px] font-bold tracking-widest uppercase shadow-xl flex items-center gap-2 ${currentTheme.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    {labelAfter}
                </div>
            </div>

            {/* 4. Slider Handle */}
            <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white/50 cursor-ew-resize z-30"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${currentTheme.handle} rounded-full border-[3px] border-white shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95`}>
                    <ChevronsLeftRight className="w-4 h-4 text-white" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ComparisonSlider;