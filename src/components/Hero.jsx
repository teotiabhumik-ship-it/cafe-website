import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Star, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReserve }) {
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const position = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Editorial Header Block */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Monospace Overline */}
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c8a97e] mb-6 block font-medium"
        >
          Specialty Coffee & Bistro • RDC, Raj Nagar
        </motion.span>

        {/* Grand Minimalist Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fbf9f5] leading-[1.12] mb-6 max-w-3xl"
        >
          Artisanal Coffee. Thoughtful Plates. Quiet Evenings.
        </motion.h1>

        {/* Minimal Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-stone-400 font-light leading-relaxed max-w-2xl mb-10"
        >
          A quiet sanctuary nestled on the ground floor of RDC, Raj Nagar. Crafted for unhurried conversations, solitary reading, and freshly pulled single-origin roast.
        </motion.p>

        {/* Minimal Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium text-[#090807] bg-[#f5f2eb] hover:bg-[#ded8ce] transition-colors shadow-sm"
          >
            Reserve a Table
          </button>
          <a
            href="#menu"
            onClick={(e) => smoothScrollTo(e, '#menu')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-mono text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </motion.div>
      </div>

      {/* Cinematic Wide Ambient Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-stone-800/60 shadow-2xl mb-12"
      >
        <img
          src="/images/cafe_interior_main.jpg"
          alt="Cafe ElleBee Dining Hall & Skylight Lounge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-black/20" />
        
        {/* Caption in bottom-left */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#c8a97e] block mb-1">
            Ground Floor Lounge • RDC Raj Nagar
          </span>
          <p className="font-serif-title text-base sm:text-lg text-[#fbf9f5] font-semibold">
            Teal banquettes, coffered wooden skylight, and artisan coffee aromas.
          </p>
        </div>
      </motion.div>

      {/* Minimal Status Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="pt-6 border-t border-stone-850 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-stone-400"
      >
        <span className="flex items-center gap-2 text-stone-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Open Daily 11:00 – 23:00
        </span>
        <span className="hidden sm:inline text-stone-700">•</span>
        <span className="flex items-center gap-1.5 text-stone-300">
          <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
          4.6★ Google (1,200+ Reviews)
        </span>
        <span className="hidden sm:inline text-stone-700">•</span>
        <span>100% Pure Veg</span>
        <span className="hidden sm:inline text-stone-700">•</span>
        <span>B-19 Ground Floor, RDC Raj Nagar</span>
      </motion.div>

    </section>
  );
}
