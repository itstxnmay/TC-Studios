import React from 'react';
import { Mail, Briefcase } from 'lucide-react';

const SideContactButton = () => {
  const email = "official.tcstudios@gmail.com";
  const subject = encodeURIComponent("Corporate Inquiry: Partnership Proposal");
  const body = encodeURIComponent(`Hi TC Studios,

I represent a company/agency and would like to discuss a formal partnership or bulk retainer.

Company Name:
Website (if applicable):
Project Scope:

Regards,`);

  return (
    <>
        {/* 
            Hidden on Mobile (< md) to prevent blocking content. 
            Visible on Tablet/Desktop (>= md).
        */}
        <a
        href={`mailto:${email}?subject=${subject}&body=${body}`}
        className="fixed z-50 right-0 top-1/2 -translate-y-1/2 group hidden md:flex"
        aria-label="Corporate Email Inquiry"
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