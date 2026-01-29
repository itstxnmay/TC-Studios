import React from 'react';
import ComparisonSlider from '../ui/ComparisonSlider';
import { Film, Aperture, TrendingUp, Palette, Layers, MousePointer2, ChartPie, Target, Brain, Zap, ScanFace, ChartLine } from 'lucide-react';

const DocumentarySection = () => {
  // ==================================================================================
  // IMAGE ASSETS
  // ==================================================================================

  // Case 1: Starbucks
  const starbucksBefore = "https://i.postimg.cc/cJgpGLYQ/Low-Budget-Thumbnail.jpg"; 
  const starbucksAfter = "https://i.postimg.cc/sxQQpSZc/Starbucks-Truth.png"; 

  // Case 2: Coca Cola
  const cokeBefore = "https://i.postimg.cc/W15dHTcH/coca-cola-low-budget-thumbnail.jpg";
  const cokeAfter = "https://i.postimg.cc/XNkw4MfB/The-Dark-truth-of-Cocacola.png";

  // Case 3: Stock Market
  const stockBefore = "https://i.postimg.cc/4y18Cm54/stock-market-trap-low-budget-thumbnail.jpg";
  const stockAfter = "https://i.postimg.cc/LsTh1SN1/Dark-truth-about-Stock-Market.png";

  // Case 4: Brain Rot
  const brainRotBefore = "https://i.postimg.cc/brCS7hKm/brain-rot-low-budget-thumbnail-image.jpg";
  const brainRotAfter = "https://i.postimg.cc/dtCqPvPr/Why-you-are-stuck.jpg";

  return (
    <div className="w-full relative py-20 border-b border-white/5">
      {/* Atmospheric Background - Deep Amber/Red/Emerald/Fuchsia mix for "Mystery/Documentary" vibe */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-amber-900/10 via-black to-black pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

      {/* =======================================================
          ROW 1: STARBUCKS (Text Left, Image Right)
      ======================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        
        {/* Left: Copy & Explanation */}
        <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-amber-500/30 bg-amber-950/20 text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            <Film className="w-3 h-3" /> Industry I : Documentary Style
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Psychology.</span>
          </h3>

          <div className="space-y-6">
             <div className="flex gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <Aperture className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Visual Hierarchy</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        We don't just paste faces. We composite scenes that hint at a narrative, forcing the viewer to click to find the answer.
                    </p>
                </div>
             </div>
             
             <div className="flex gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <TrendingUp className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">The "Netflix" Effect</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        High contrast grading and texture overlays that make your YouTube video feel like a premium documentary production.
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right: The Comparison Hero */}
        <div className="lg:col-span-7 reveal-on-scroll blur-reveal">
            <div className="flex items-center gap-4 mb-4 opacity-70">
                <div className="w-8 h-[1px] bg-amber-500"></div>
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Example 01 : Investigation</span>
            </div>
            {/* The Main Comparison Card */}
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-transparent blur-xl opacity-50" />
                <ComparisonSlider 
                  imageBefore={starbucksBefore} 
                  imageAfter={starbucksAfter} 
                  labelBefore="AMATEUR WORK ($10)" 
                  labelAfter="TC STUDIOS ($100)"
                  theme="amber"
                />
            </div>
        </div>

      </div>

      {/* =======================================================
          ROW 2: COCA COLA (Image Left, Text Right)
      ======================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        
        {/* Left: The Comparison Hero (Swapped order on Desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 reveal-on-scroll blur-reveal">
            <div className="flex items-center gap-4 mb-4 opacity-70 justify-end lg:justify-start">
                <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Example 02 : Dark Truth</span>
                <div className="w-8 h-[1px] bg-red-500"></div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-transparent blur-xl opacity-50" />
                <ComparisonSlider 
                  imageBefore={cokeBefore} 
                  imageAfter={cokeAfter} 
                  labelBefore="AMATEUR WORK ($10)" 
                  labelAfter="TC STUDIOS ($100)"
                  theme="red"
                />
            </div>
        </div>

        {/* Right: Copy & Explanation */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-8 reveal-on-scroll text-right lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-red-500/30 bg-red-950/20 text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase ml-auto lg:ml-0">
            <Palette className="w-3 h-3" /> Color Theory
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Implicit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-600">Narrative.</span>
          </h3>

          <div className="space-y-6">
             {/* Feature 1 */}
             <div className="flex gap-4 flex-row-reverse lg:flex-row">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <Layers className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Contextual Compositing</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        The background isn't filler; it's the hook. We merge environments that suggest a 'Dark Truth', instantly qualifying the viewer's curiosity.
                    </p>
                </div>
             </div>
             
             {/* Feature 2 */}
             <div className="flex gap-4 flex-row-reverse lg:flex-row">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <MousePointer2 className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Click-Through Tension</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        By contrasting innocent branding (Coke) with ominous imagery, we create cognitive dissonance that can only be resolved by clicking.
                    </p>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* =======================================================
          ROW 3: STOCK MARKET (Text Left, Image Right)
      ======================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        
        {/* Left: Copy & Explanation */}
        <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/30 bg-emerald-950/20 text-emerald-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            <ChartLine className="w-3 h-3" /> Finance & Biz
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Financial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-600">Stakes.</span>
          </h3>

          <div className="space-y-6">
             <div className="flex gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <ChartPie className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Trust Architecture</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        In finance, design equals trust. We use clean composition and sharp focus to position you as an unquestionable authority figure.
                    </p>
                </div>
             </div>
             
             <div className="flex gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <Target className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">The "Fear Factor"</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        Visualizing abstract concepts like "The Trap" creates an immediate emotional response, driving clicks from viewers who fear missing out.
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right: The Comparison Hero */}
        <div className="lg:col-span-7 reveal-on-scroll blur-reveal">
            <div className="flex items-center gap-4 mb-4 opacity-70">
                <div className="w-8 h-[1px] bg-emerald-500"></div>
                <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase">Example 03 : Market Trap</span>
            </div>
            {/* The Main Comparison Card */}
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-transparent blur-xl opacity-50" />
                <ComparisonSlider 
                  imageBefore={stockBefore} 
                  imageAfter={stockAfter} 
                  labelBefore="AMATEUR WORK ($10)" 
                  labelAfter="TC STUDIOS ($100)"
                  theme="emerald"
                />
            </div>
        </div>

      </div>

      {/* =======================================================
          ROW 4: BRAIN ROT (Image Left, Text Right)
      ======================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: The Comparison Hero (Swapped order on Desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 reveal-on-scroll blur-reveal">
            <div className="flex items-center gap-4 mb-4 opacity-70 justify-end lg:justify-start">
                <span className="text-fuchsia-500 text-xs font-bold tracking-widest uppercase">Example 04 : Brain Rot</span>
                <div className="w-8 h-[1px] bg-fuchsia-500"></div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/20 to-transparent blur-xl opacity-50" />
                <ComparisonSlider 
                  imageBefore={brainRotBefore} 
                  imageAfter={brainRotAfter} 
                  labelBefore="AMATEUR WORK ($10)" 
                  labelAfter="TC STUDIOS ($100)"
                  theme="fuchsia"
                />
            </div>
        </div>

        {/* Right: Copy & Explanation */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-8 reveal-on-scroll text-right lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-fuchsia-500/30 bg-fuchsia-950/20 text-fuchsia-500 text-[10px] font-bold tracking-[0.3em] uppercase ml-auto lg:ml-0">
            <Brain className="w-3 h-3" /> Psychology
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Dopamine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-fuchsia-600">Control.</span>
          </h3>

          <div className="space-y-6">
             {/* Feature 1 */}
             <div className="flex gap-4 flex-row-reverse lg:flex-row">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <Zap className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Pattern Interrupt</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        In a sea of sameness, we design visual 'glitches'—anomalies that force the scrolling brain to pause, process, and click.
                    </p>
                </div>
             </div>
             
             {/* Feature 2 */}
             <div className="flex gap-4 flex-row-reverse lg:flex-row">
                <div className="mt-1 p-2 bg-zinc-900 rounded-lg h-fit border border-white/5">
                    <ScanFace className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Emotional Mirroring</h4>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        Reflecting the viewer's internal state (stuckness, anxiety) creates an instant subconscious connection.
                    </p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DocumentarySection;