import React from 'react';
import { STATS } from '../constants';
import AnimatedCounter from './ui/AnimatedCounter';

const StatsBar = () => {
  return (
    <div className="border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center reveal-on-scroll blur-reveal"
              data-reveal-delay={idx * 150}
            >
              <div className="mb-2 p-3 bg-purple-500/10 rounded-full border border-purple-500/20">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;