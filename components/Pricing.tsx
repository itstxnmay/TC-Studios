import React, { useState } from 'react';
import { 
  Check, 
  Zap, 
  Crown, 
  Sparkles, 
  Phone, 
  CircleHelp, 
  CreditCard, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Search 
} from 'lucide-react';
import TiltCard from './ui/TiltCard';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-900/30 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/50">
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-6 text-left group cursor-pointer"
        >
            <h4 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors">{question}</h4>
            <div className={`p-1 rounded-full bg-white/5 border border-white/5 transition-all duration-300 ${isOpen ? 'bg-cyan-500/10 border-cyan-500/20' : ''}`}>
                <ChevronDown className={`w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </div>
        </button>
        <div 
            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
            <div className="overflow-hidden">
                <p className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {answer}
                </p>
            </div>
        </div>
    </div>
  );
};

const Pricing = () => {
  const WHATSAPP_NUMBER = "919921444504";

  const handlePurchase = (plan: string) => {
    let message = "";
    if (plan === 'credit') {
        message = "Hey TC Studios, I want to buy 1 Credit ($149). Let's discuss the onboarding.";
    } else if (plan === 'weekly') {
        message = "Hey TC Studios, I am ready to start the Weekly Partnership ($449). Let's discuss the onboarding.";
    } else if (plan === 'domination') {
        message = "Hi TC Studios, I am interested in the Domination Partner Plan ($849). Do you have slots open?";
    }
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleStrategyCall = () => {
      const message = "Hi TC Studios, I have a custom request . I would like to discuss a tailored plan for my channel.";
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold tracking-widest uppercase mb-6">
            <CreditCard className="w-3 h-3" /> Investment
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            INVEST IN YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">CLICK-THROUGH RATE.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Flexible credit plans. Unused credits roll over. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-start">
            
            {/* TIER 1: PAY AS YOU GO */}
            <div className="reveal-on-scroll blur-reveal flex flex-col h-full bg-zinc-900/40 border border-white/5 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 relative group">
                <div className="mb-6">
                    <div className="text-zinc-500 font-bold tracking-widest text-xs uppercase mb-2">Pay As You Go</div>
                    <div className="text-3xl font-black text-white mb-2">$149 <span className="text-lg font-medium text-zinc-500">/ asset</span></div>
                    <p className="text-zinc-400 text-sm h-10">Best for: Testing the waters or Irregular schedules.</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-zinc-800"><Check className="w-3 h-3 text-white" /></div>
                        1 Thumbnail Credit
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-zinc-800"><Check className="w-3 h-3 text-white" /></div>
                        Standard Delivery (48 Hours)
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-zinc-800"><Check className="w-3 h-3 text-white" /></div>
                        2 Revisions per thumbnail
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-zinc-800"><Check className="w-3 h-3 text-white" /></div>
                        Strategy Breakdown
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-zinc-500 italic">
                        Ideal for: One-off Viral Concepts.
                    </div>
                </div>

                <button 
                  onClick={() => handlePurchase('credit')}
                  className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest text-xs transition-all duration-300"
                >
                    Buy 1 Credit
                </button>
            </div>

            {/* TIER 2: WEEKLY PARTNER (POPULAR) */}
            <div className="reveal-on-scroll blur-reveal flex flex-col h-full bg-black border border-purple-500/50 hover:border-purple-400 shadow-[0_0_50px_rgba(168,85,247,0.15)] rounded-2xl p-8 transition-all duration-300 lg:transform lg:scale-105 z-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> Popular
                </div>
                
                <div className="mb-6 relative">
                    <div className="absolute top-0 right-0 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                        Save $150
                    </div>
                    <div className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-2">Weekly Partner</div>
                    <div className="text-4xl font-black text-white mb-2">$449 <span className="text-lg font-medium text-zinc-500">/ month</span></div>
                    <p className="text-zinc-400 text-sm h-10">Best for: Channels posting 1 video per week.</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                        <div className="p-1 rounded-full bg-purple-500/20 text-purple-400"><Zap className="w-3 h-3" /></div>
                        4 Thumbnail Credits <span className="text-zinc-500 text-xs font-normal ml-auto">($112.25/thumb)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-purple-500/10 text-purple-400"><Check className="w-3 h-3" /></div>
                        Unused Credits Roll Over
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-purple-500/10 text-purple-400"><Check className="w-3 h-3" /></div>
                        Priority Delivery (&lt; 24 Hours)
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-purple-500/10 text-purple-400"><Check className="w-3 h-3" /></div>
                        4 Revisions per thumbnail
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-purple-500/10 text-purple-400"><Check className="w-3 h-3" /></div>
                        Direct Slack/WhatsApp Access
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-purple-500/10 text-purple-400"><Check className="w-3 h-3" /></div>
                        Pre-Production Audit
                    </div>
                </div>

                <button 
                  onClick={() => handlePurchase('weekly')}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                    Start Partnership
                </button>
            </div>

            {/* TIER 3: DOMINATION PARTNER */}
            <div className="reveal-on-scroll blur-reveal flex flex-col h-full bg-black border border-amber-500/50 hover:border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.15)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 relative group z-10" data-reveal-delay="200">
                <div className="mb-6 relative">
                    <div className="absolute top-0 right-0 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                        Save $340
                    </div>
                    <div className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2">Domination Partner</div>
                    <div className="text-4xl font-black text-white mb-2">$849 <span className="text-lg font-medium text-zinc-500">/ month</span></div>
                    <p className="text-zinc-400 text-sm h-10">Best for: Creators posting 2 videos per week or Multi-Channel Empires.</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                        <div className="p-1 rounded-full bg-amber-500/20 text-amber-400"><Crown className="w-3 h-3" /></div>
                        8 Thumbnail Credits
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><Check className="w-3 h-3" /></div>
                        Unused Credits Roll Over
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><Check className="w-3 h-3" /></div>
                        Top Priority Status (Skip line)
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><Check className="w-3 h-3" /></div>
                        Unlimited Revisions
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><Check className="w-3 h-3" /></div>
                        A/B Test Variants Included
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><Check className="w-3 h-3" /></div>
                        Monthly Analytics Deep Dive
                    </div>
                </div>

                <button 
                  onClick={() => handlePurchase('domination')}
                  className="w-full py-4 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-500 font-bold uppercase tracking-widest text-xs transition-all duration-300"
                >
                    Become A Partner
                </button>
            </div>
        </div>

        {/* Custom / Negotiate Section */}
        <div className="reveal-on-scroll blur-reveal rounded-3xl bg-zinc-900 border border-white/10 p-8 md:p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-2 block">Custom Solutions</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4">NEED A CUSTOM PLAN?</h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                        For Agencies, High-Volume Networks (8+ videos/mo), or Special Budgets. Whether you need a bulk pack of 20 thumbnails, a "Documentary-Only" retainer, or regional pricing parity, let's build a plan that fits.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="px-3 py-1 bg-white/5 rounded border border-white/5 text-xs text-zinc-300">Volume Discounts (10+)</span>
                        <span className="px-3 py-1 bg-white/5 rounded border border-white/5 text-xs text-zinc-300">Long-term Retainers</span>
                        <span className="px-3 py-1 bg-white/5 rounded border border-white/5 text-xs text-zinc-300">White-Label Services</span>
                    </div>
                    <button 
                        onClick={handleStrategyCall}
                        className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest hover:gap-4 transition-all bg-transparent border-none cursor-pointer"
                    >
                        Book Strategy Call <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <button 
                     onClick={handleStrategyCall}
                     className="h-full min-h-[200px] w-full bg-black/50 hover:bg-zinc-800/50 transition-colors rounded-2xl border border-white/5 flex items-center justify-center p-8 relative overflow-hidden group cursor-pointer"
                >
                     {/* Abstract decorative graphic */}
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
                     <div className="text-center">
                        <Phone className="w-12 h-12 text-zinc-600 mx-auto mb-4 group-hover:text-cyan-400 transition-colors duration-300" />
                        <div className="text-lg font-bold text-white">Let's Negotiate</div>
                        <div className="text-zinc-500 text-sm">We are open to custom offers.</div>
                     </div>
                </button>
            </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto reveal-on-scroll">
            <div className="flex items-center gap-3 mb-8 justify-center">
                <CircleHelp className="w-5 h-5 text-zinc-500" />
                <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase">How Credits Work</span>
            </div>
            
            <div className="space-y-4">
                <FAQItem 
                    question="&quot;What if I don't use all my credits?&quot;"
                    answer="No stress. If you are on the Weekly Plan (4 credits) but only upload 3 videos, 1 credit rolls over to the next month. You paid for them; you keep them."
                />
                <FAQItem 
                    question="&quot;What counts as 1 Credit?&quot;"
                    answer="1 Credit = 1 Standard Thumbnail (Finance, Vlog, Talking Head, Gaming). Complex 3D Modeling or Multi-Character Posters may require 2 Credits. We always warn you first."
                />
            </div>
        </div>

        {/* ROI Justification - Highlighting the "Why Higher Rates" Question */}
        <div className="max-w-4xl mx-auto mt-24 reveal-on-scroll blur-reveal">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-cyan-500/20 shadow-2xl">
                <div className="absolute inset-0 blur-xl bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-cyan-500/10" />
                <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-8 md:p-12 border border-white/10">
                    
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <span className="text-4xl animate-pulse">💎</span>
                        <span>&quot;Why are your rates higher than Fiverr or Upwork?&quot;</span>
                    </h3>

                    <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
                        <p>
                            Because we don&apos;t sell &quot;images.&quot; <strong className="text-white font-bold bg-white/5 px-2 py-0.5 rounded">We sell Return on Investment (ROI).</strong>
                        </p>
                        
                        <p className="text-base text-zinc-400 border-l-2 border-white/10 pl-6 italic">
                            A $10 thumbnail might save you money today, but it costs you thousands of views tomorrow. In the high-stakes YouTube economy, &quot;Cheap&quot; is actually the most expensive option because it costs you the one thing you can&apos;t buy back: <span className="text-white not-italic font-bold">Attention.</span>
                        </p>

                        <p className="mt-8">
                            When you invest in TC Studios, you aren&apos;t paying for &quot;Photoshop time.&quot; You are paying for:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            <li className="flex gap-4 items-start bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 shrink-0">
                                    <Search className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base mb-2">Deep Niche Research</h4>
                                    <p className="text-sm text-zinc-400 leading-snug">We analyze your competitors before we even open the software.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                                    <Brain className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base mb-2">Psychological Engineering</h4>
                                    <p className="text-sm text-zinc-400 leading-snug">Every color, font, and shadow is chosen to trigger a specific dopamine response.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left">
                            <h4 className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                                The Result
                            </h4>
                            <p className="text-xl md:text-2xl font-medium text-white max-w-2xl">
                                If our asset brings you just one extra high-ticket client or boosts your video by 20%, <span className="underline decoration-emerald-500/50 underline-offset-4 decoration-2">it pays for itself instantly.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;