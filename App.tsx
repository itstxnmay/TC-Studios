import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Thumbnails from './components/Thumbnails';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import GlobalBackground from './components/GlobalBackground';
import SideContactButton from './components/ui/SideContactButton';
import { useScrollReveal } from './hooks/useAppHooks';

const App = () => {
  useScrollReveal(); // Initialize scroll observer

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <GlobalBackground />
      <Navigation />
      
      {/* Fixed UI Elements */}
      <SideContactButton />
      
      <Hero />
      <Thumbnails />
      <Pricing />
      <Portfolio />
      <About />
      <Contact />
      
      {/* Global CSS for Animations */}
      <style>{`
        /* --- UTILITIES --- */
        .will-change-transform {
          will-change: transform;
        }

        /* --- SKELETON LOADER --- */
        @keyframes skeleton-loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .skeleton-loader {
          background: linear-gradient(90deg, #18181b 25%, #27272a 50%, #18181b 75%);
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s infinite ease-in-out;
        }

        /* --- SCROLL REVEAL --- */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- BLUR REVEAL VARIANT --- */
        .blur-reveal {
          filter: blur(10px);
          transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1s ease-out;
        }
        .blur-reveal.is-visible {
          filter: blur(0);
        }

        /* --- KEYFRAMES --- */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes text-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 4s linear infinite;
        }

        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;