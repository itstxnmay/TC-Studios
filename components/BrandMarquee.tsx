import React from 'react';
import { 
  Globe, 
  Zap, 
  Briefcase, 
  Video,
  BarChart3,
  Users,
  Award,
  Megaphone,
  Rocket,
  ArrowRight
} from 'lucide-react';

// Row 1: Real-World Top Agencies & Media Companies
const AGENCY_PARTNERS = [
  { name: "VAYNERMEDIA", icon: <Megaphone className="w-6 h-6" />, location: "New York, NY" },
  { name: "NIGHT MEDIA", icon: <Award className="w-6 h-6" />, location: "Austin, TX" },
  { name: "VIRAL NATION", icon: <Globe className="w-6 h-6" />, location: "Toronto / LA" },
  { name: "THE PUBLISHING", icon: <Briefcase className="w-6 h-6" />, location: "London, UK" },
  { name: "JELLYSMACK", icon: <Zap className="w-6 h-6" />, location: "Los Angeles, CA" },
  { name: "SEMAPHORE", icon: <Users className="w-6 h-6" />, location: "Irvine, CA" },
  { name: "CONCURRENT", icon: <Rocket className="w-6 h-6" />, location: "Nashville, TN" },
  { name: "YULA", icon: <Video className="w-6 h-6" />, location: "Los Angeles, CA" },
  { name: "OFFBEAT MEDIA", icon: <Users className="w-6 h-6" />, location: "Atlanta, GA" },
  { name: "CREATOR DAO", icon: <BarChart3 className="w-6 h-6" />, location: "Decentralized" },
];

const BrandMarquee = () => {
  // Get current month name dynamically (e.g., "February")
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="w-full bg-black py-12 md:py-24 border-y border-white/5 overflow-hidden relative z-20 flex flex-col gap-10">
      
      {/* Side Fade Gradients for smooth entrance/exit */}
      <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

      {/* --- ROW 1: AGENCIES --- */}
      <div className="relative">
        {/* Label 1 */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex justify-center z-30">
             <div className="bg-zinc-950 px-4 py-1.5 rounded-full border border-white/10 shadow-lg shadow-purple-900/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Trusted by Top Agencies</span>
            </div>
        </div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pt-4">
            {[...AGENCY_PARTNERS, ...AGENCY_PARTNERS].map((client, idx) => (
            <div key={`agency-${idx}`} className="flex flex-col items-center group cursor-default px-8 md:px-16">
                <div className="flex items-center gap-3 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform">
                    <span className="text-zinc-400 group-hover:text-purple-400 transition-colors duration-300">
                    {client.icon}
                    </span>
                    <span className="text-lg md:text-xl font-black tracking-[0.1em] text-zinc-400 uppercase group-hover:text-white transition-colors duration-300 font-sans whitespace-nowrap">
                    {client.name}
                    </span>
                </div>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                    <span className="text-[9px] text-purple-400/80 uppercase tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                        {client.location}
                    </span>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* --- URGENCY CTA --- */}
      <div className="flex justify-center relative z-30 mt-4">
        <a 
          href="#contact" 
          className="group relative flex items-center gap-3 px-6 py-2.5 bg-red-950/20 border border-red-500/30 rounded-full hover:bg-red-900/30 transition-all duration-300 hover:scale-105 hover:border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.1)] hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-200/90 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                Only 2 Slots Left For {currentMonth}
            </span>
            <ArrowRight className="w-3 h-3 text-red-400 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  );
};

export default BrandMarquee;