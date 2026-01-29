import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const SideContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const email = "official.tcstudios@gmail.com";
  // Updated subject and body as per request
  const subject = encodeURIComponent("Project Inquiry: High-CTR Thumbnail");
  const body = encodeURIComponent(`Hi TC Studios,

I need a premium thumbnail for my upcoming video.

Video Topic / Title: [Type here]
Style Wanted: [e.g., Documentary, Finance, Mr Beast Style]

Let's discuss the concept.`);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        // Show button when Pricing section starts entering the viewport (scrolled past thumbnails)
        // using window.innerHeight * 0.8 triggers it slightly before it's fully top-aligned for better UX
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        {/* 
            Hidden on Mobile (< md). 
            Visible on Tablet/Desktop (>= md) ONLY when pricing section is reached.
            Positioned on the RIGHT side.
        */}
        <a
        href={`mailto:${email}?subject=${subject}&body=${body}`}
        className={`fixed z-50 right-0 top-1/2 -translate-y-1/2 group hidden md:flex transition-all duration-500 ease-out transform ${
            isVisible 
                ? 'translate-x-0 opacity-40 hover:opacity-100' 
                : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        aria-label="Email Inquiry"
        >
            <div className="
                relative flex flex-col items-center gap-4 py-6 px-3 
                bg-zinc-950/80 backdrop-blur-md 
                border-l border-y border-white/10 rounded-l-2xl 
                shadow-[0_0_30px_rgba(0,0,0,0.5)]
                transition-all duration-300 ease-out
                translate-x-0 group-hover:-translate-x-2
                group-hover:border-purple-500/50
                group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
            ">
                {/* Vertical Text */}
                <span 
                    className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white transition-colors whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    Business Inquiry
                </span>

                {/* Separator */}
                <div className="w-px h-8 bg-white/10 group-hover:bg-purple-500/50 transition-colors" />

                {/* Icon */}
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 text-purple-400 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                </div>
            </div>
        </a>
    </>
  );
};

export default SideContactButton;