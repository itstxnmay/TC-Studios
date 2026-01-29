import React from 'react';
import { useParallax } from '../hooks/useAppHooks';

const About = () => {
  const imageParallax = useParallax(0.1);

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <div className="w-full reveal-on-scroll blur-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Driven By Metrics.<br/>Lead By <span className="text-purple-500">Tanmay Chute.</span></h2>
          <h3 className="text-xl text-purple-400 mb-8 font-medium tracking-wide uppercase">TC Studios - Premier Creative Partner</h3>
          
          <p className="text-gray-300 mb-6 text-lg leading-relaxed font-light max-w-2xl mx-auto">
            You don't just need 'graphics'. You need <strong>Clicks</strong>. We combine visual psychology with data-driven design strategies to build your authority and maximize CTR.
          </p>
          <p className="text-gray-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Our creative systems are designed for one thing: <strong>ROI</strong>. Whether it's a high-CTR thumbnail, a viral hook, or a fully automated content asset, we handle the visual packaging so you can focus on scaling your influence.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {['Click-Through Rate', 'Visual Psychology', 'Conversion Design', 'Viral Packaging'].map((skill, i) => (
              <div key={i} className="flex items-center justify-center gap-3 group bg-white/5 border border-white/5 py-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                <span className="text-white font-medium group-hover:text-purple-300 transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;