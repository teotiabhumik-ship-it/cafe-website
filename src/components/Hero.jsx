import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sparkles, Navigation, Calendar, ArrowRight, Star, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReserve }) {
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -85,
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const position = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background with Real Cafe Interior Ambience */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-10000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Soft Vignette Gradients (Neutral Espresso) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a] via-transparent to-[#0c0b0a]" />
        
        {/* Subtle Warm Brass Ambient Backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#c8a97e]/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Floating Gentle Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-stone-300/20 blur-[1px]"
            style={{
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              left: `${(i * 12) % 100}%`,
              top: `${(i * 14) % 85}%`,
            }}
            animate={{
              y: [-10, -40, -10],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181614]/80 border border-stone-800 text-stone-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
          <span>Artisanal Coffee & Evening Lounge</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]"></span>
          <span className="text-stone-400">RDC Raj Nagar, Ghaziabad</span>
        </motion.div>

        {/* Refined Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#fbf9f5] tracking-tight leading-[1.12] mb-6"
        >
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbf9f5] via-[#e5d2b8] to-[#c8a97e]">Cozy Aromas</span> Meet Vibrant Evenings
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-stone-300/90 max-w-2xl font-light leading-relaxed mb-8"
        >
          A quiet retreat for freshly ground espresso, gourmet comfort food, and warm ambient neon nights in the heart of Raj Nagar.
        </motion.p>

        {/* Coffee Cup with Animated Steam */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative my-3 flex flex-col items-center justify-center cursor-pointer group"
          onClick={(e) => smoothScrollTo(e, '#menu')}
        >
          <div className="relative w-16 h-10 flex justify-center items-end gap-2 mb-1">
            <div className="w-1.5 h-7 bg-gradient-to-t from-stone-300/30 to-transparent rounded-full animate-steam" style={{ animationDelay: '0s' }}></div>
            <div className="w-1.5 h-10 bg-gradient-to-t from-stone-300/40 to-transparent rounded-full animate-steam" style={{ animationDelay: '1.2s' }}></div>
            <div className="w-1.5 h-8 bg-gradient-to-t from-stone-300/30 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.6s' }}></div>
          </div>
          <div className="px-5 py-2 rounded-full bg-[#181513] border border-stone-800 backdrop-blur-md flex items-center gap-2 text-xs text-stone-300 group-hover:border-[#c8a97e] transition-colors shadow-lg">
            <Coffee className="w-3.5 h-3.5 text-[#c8a97e]" />
            <span className="font-serif-title tracking-wider">Freshly Roasted Everyday</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
        >
          {/* Reserve Table Button */}
          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] shadow-xl hover:scale-105 active:scale-95 transition-all text-sm sm:text-base flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4 text-[#0c0b0a] group-hover:rotate-12 transition-transform" />
            <span>Book a Table</span>
            <ArrowRight className="w-4 h-4 text-[#0c0b0a] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Smooth Scroll to Menu */}
          <a
            href="#menu"
            onClick={(e) => smoothScrollTo(e, '#menu')}
            className="w-full sm:w-auto px-7 py-4 rounded-full font-medium text-stone-200 hover:text-white bg-[#191715] hover:bg-[#221f1c] border border-stone-700/80 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Menu</span>
          </a>

          {/* Smooth Scroll Directly to Visible Map */}
          <a
            href="#map-location"
            onClick={(e) => smoothScrollTo(e, '#map-location')}
            className="w-full sm:w-auto px-6 py-4 rounded-full font-medium text-[#c8a97e] hover:text-[#e5d2b8] hover:bg-[#1a1714] transition-all text-sm flex items-center justify-center gap-2 border border-stone-800 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#c8a97e]" />
            <span>View Location & Map</span>
          </a>
        </motion.div>

        {/* Key Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-stone-900 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80">
            <div className="flex items-center justify-center gap-1 text-[#c8a97e] mb-0.5">
              <Star className="w-3.5 h-3.5 fill-[#c8a97e]" />
              <span className="font-bold text-base text-[#fbf9f5] font-serif-title">4.6 / 5.0</span>
            </div>
            <p className="text-[11px] text-stone-400">1,200+ Google Reviews</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80">
            <div className="font-bold text-base text-[#fbf9f5] font-serif-title mb-0.5">₹600 - ₹900</div>
            <p className="text-[11px] text-stone-400">Cost for Two People</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80">
            <div className="font-bold text-base text-[#fbf9f5] font-serif-title mb-0.5">11 AM – 11 PM</div>
            <p className="text-[11px] text-stone-400">Open Daily in RDC</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80">
            <div className="flex items-center justify-center gap-1 text-rose-400 mb-0.5">
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span className="font-bold text-base text-[#fbf9f5] font-serif-title">Party Lounge</span>
            </div>
            <p className="text-[11px] text-stone-400">Private Celebration Bookings</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
