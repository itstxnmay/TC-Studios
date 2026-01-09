import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto text-center reveal-on-scroll blur-reveal relative z-10">
        <span className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-4 block">Ready To Scale?</span>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">Let's Talk Business.</h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
          If you’re planning content seriously, let’s talk through your goals and see if we’re a good fit.
        </p>

        <a 
          href="mailto:tanmay.chute.official@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all mb-20 rounded-full"
        >
          <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          Contact Us
        </a>

        <div className="flex justify-center gap-12 border-t border-white/5 pt-16">
          <a href="#" className="text-zinc-600 hover:text-white transition-all hover:scale-125 transform duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-600 hover:text-white transition-all hover:scale-125 transform duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-600 hover:text-white transition-all hover:scale-125 transform duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-16 text-zinc-800 text-xs tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} TC Studios. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;