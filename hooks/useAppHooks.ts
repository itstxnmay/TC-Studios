import { useState, useEffect, useRef } from 'react';

// 1. Scroll Progress Hook
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) {
        setProgress(0);
        return;
      }

      const scroll = totalScroll / windowHeight;
      setProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

// 2. Optimized Scroll Reveal with Stagger
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = target.dataset.revealDelay || '0';
          
          setTimeout(() => {
            target.classList.add('is-visible');
          }, parseInt(delay));
          
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
};

// 3. Optimized Parallax (rAF based)
export const useParallax = (speed = 0.05) => {
  const [offset, setOffset] = useState(0);
  const scrollRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    // Disable parallax on mobile for performance/battery
    if (window.innerWidth < 768) return;

    const loop = () => {
      setOffset(scrollRef.current * speed);
      frameRef.current = requestAnimationFrame(loop);
    };
    
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    frameRef.current = requestAnimationFrame(loop);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return offset;
};

// 4. Mobile Body Scroll Lock
export const useLockedBody = (locked: boolean) => {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [locked]);
};