import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 reveal-on-scroll blur-reveal">
           <span className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Systems</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Scale. Engineered by Code.</h2>
           <p className="text-gray-500 max-w-xl text-lg leading-relaxed">
             We don't just edit videos. We build content systems using developer-grade workflows to maximize retention and ROI.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              data-reveal-delay={idx * 100}
              className="reveal-on-scroll blur-reveal p-8 bg-zinc-900/40 border border-white/5 hover:border-purple-500/40 transition-all duration-300 group rounded-3xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10 backdrop-blur-md"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-2xl text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>
                <div className="text-right">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">System {idx + 1}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-medium italic mb-8 min-h-[1.5em]">
                "{service.valueProp}"
              </div>
              
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="mt-0.5 min-w-[16px]">
                        <Check className="w-4 h-4 text-purple-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;