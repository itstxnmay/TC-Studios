import React from 'react';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 reveal-on-scroll blur-reveal">
           <span className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Systems</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Scale Your Brand</h2>
           <p className="text-gray-500 max-w-xl text-lg leading-relaxed">
             Most editors just cut clips. We build assets that bring you traffic, authority, and revenue.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              data-reveal-delay={idx * 100}
              className="reveal-on-scroll blur-reveal p-8 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10 backdrop-blur-sm cursor-default"
            >
              <div className="mb-8 p-4 bg-black/50 w-fit rounded-xl text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors duration-300 group-hover:scale-110 transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-100 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;