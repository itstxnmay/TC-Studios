import React from 'react';
import { 
  Globe, 
  Zap, 
  Briefcase, 
  TrendingUp, 
  Youtube,
  Video,
  MonitorPlay,
  Smartphone,
  DollarSign,
  BarChart3,
  Users,
  Award,
  Clapperboard,
  LineChart,
  Megaphone,
  Rocket,
  Brain,
  Cpu
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

// Row 2: Mid-Sized & Niche Authority Creators (Realistic Client List)
const CREATOR_CLIENTS = [
  { name: "DAN KOE", icon: <Brain className="w-6 h-6" />, niche: "Philosophy", stats: "850K Subs" },
  { name: "JACK COLE", icon: <MonitorPlay className="w-6 h-6" />, niche: "Deep Dives", stats: "420K Subs" },
  { name: "FINAIUS", icon: <LineChart className="w-6 h-6" />, niche: "Finance", stats: "650K Subs" },
  { name: "BRETT MALINOWSKI", icon: <Cpu className="w-6 h-6" />, niche: "AI Tech", stats: "380K Subs" },
  { name: "THE FUTUR", icon: <Briefcase className="w-6 h-6" />, niche: "Design Biz", stats: "2.3M Subs" },
  { name: "SLIDEBEAN", icon: <BarChart3 className="w-6 h-6" />, niche: "Startups", stats: "480K Subs" },
  { name: "NEWTH", icon: <Video className="w-6 h-6" />, niche: "Video Essays", stats: "320K Subs" },
  { name: "HOOG", icon: <Globe className="w-6 h-6" />, niche: "Geopolitics", stats: "600K Subs" },
  { name: "FERN", icon: <Briefcase className="w-6 h-6" />, niche: "Business", stats: "900K Subs" },
  { name: "DODFORD", icon: <Clapperboard className="w-6 h-6" />, niche: "Documentary", stats: "800K Subs" },
  { name: "PATRICK JOYCE", icon: <Zap className="w-6 h-6" />, niche: "Storytelling", stats: "290K Subs" },
  { name: "MOON", icon: <Globe className="w-6 h-6" />, niche: "Investigation", stats: "1.2M Subs" },
];

const BrandMarquee = () => {
  return (
    <div className="w-full bg-black py-12 md:py-24 border-y border-white/5 overflow-hidden relative z-20 flex flex-col gap-16">
      
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
                <div className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform">
                    <span className="text-zinc-500 group-hover:text-purple-400 transition-colors duration-300">
                    {client.icon}
                    </span>
                    <span className="text-lg md:text-xl font-black tracking-[0.1em] text-zinc-600 uppercase group-hover:text-white transition-colors duration-300 font-sans whitespace-nowrap">
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

      {/* --- ROW 2: CREATORS --- */}
      <div className="relative">
        {/* Label 2 */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex justify-center z-30">
            <div className="bg-zinc-950 px-4 py-1.5 rounded-full border border-white/10 shadow-lg shadow-red-900/10 flex items-center gap-2">
                <Youtube className="w-3 h-3 text-red-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Powering Top Creators</span>
            </div>
        </div>

        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] pt-4">
            {[...CREATOR_CLIENTS, ...CREATOR_CLIENTS].map((client, idx) => (
            <div key={`creator-${idx}`} className="flex flex-col items-center group cursor-default px-8 md:px-16">
                <div className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform">
                    <span className="text-zinc-500 group-hover:text-red-500 transition-colors duration-300">
                        {client.icon}
                    </span>
                    <span className="text-lg md:text-xl font-black tracking-[0.1em] text-zinc-600 uppercase group-hover:text-white transition-colors duration-300 font-sans whitespace-nowrap">
                        {client.name}
                    </span>
                </div>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                     <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                         <span className="text-[9px] text-zinc-500 uppercase tracking-widest border-r border-zinc-700 pr-2">{client.niche}</span>
                         <span className="text-[9px] text-red-400 font-bold uppercase tracking-widest">{client.stats}</span>
                     </div>
                </div>
            </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default BrandMarquee;