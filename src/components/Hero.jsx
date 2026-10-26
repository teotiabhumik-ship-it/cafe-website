import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Sparkles, Navigation, Calendar, ArrowRight, Star, Heart } from 'lucide-react';
import { useUiMode } from '../context/UiModeContext';
import MagneticButton from './motion/MagneticButton';
import TextReveal from './motion/TextReveal';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReserve }) {
  const containerRef = useRef(null);
  const { isMinimal } = useUiMode();

  // Scroll parallax for atmospheric depth
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 100]);
  const contentY = useTransform(scrollY, [0, 600], [0, 35]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

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
    <section 
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 ${
        isMinimal ? 'min-h-[85vh] pt-32 pb-20' : 'min-h-[94vh] pt-28 pb-16'
      }`}
    >
      {/* Background with Ambient Vignette */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-105 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09] via-transparent to-[#0b0a09]" />
        
        {/* Subtle Ambient Backlight Glow (only in Luxe mode) */}
        {!isMinimal && (
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8a97e]/7 rounded-full blur-[140px]" />
        )}
      </motion.div>

      {/* Floating Gentle Dust Particles (Luxe Mode Only) */}
      {!isMinimal && (
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
                y: [-10, -50, -10],
                x: [-5, 5, -5],
                opacity: [0.1, 0.45, 0.1],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content Flow */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {isMinimal ? (
          /* ================= MINIMAL EDITORIAL HERO ================= */
          <div className="flex flex-col items-center">
            {/* Minimal Monospace/Sans Top Category Label */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#c8a97e] mb-5 block font-medium"
            >
              Specialty Coffee & Bistro • RDC, Raj Nagar
            </motion.span>

            {/* Quiet Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fbf9f5] leading-[1.12] mb-6 max-w-3xl"
            >
              Artisanal Coffee. Thoughtful Plates. Quiet Evenings.
            </motion.h1>

            {/* Refined Minimalist Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-2xl mb-8"
            >
              A calm sanctuary in Ghaziabad designed for unhurried conversations, solitary reading, and freshly pulled single-origin roast.
            </motion.p>

            {/* Minimal Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
              <button
                onClick={onOpenReserve}
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] shadow-sm transition-all"
              >
                Reserve a Table
              </button>
              <a
                href="#menu"
                onClick={(e) => smoothScrollTo(e, '#menu')}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-stone-300 hover:text-white bg-[#141210] hover:bg-[#1e1b18] border border-stone-800 transition-colors flex items-center gap-2"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </motion.div>

            {/* Minimal Status Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-stone-900/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-400 font-sans"
            >
              <span className="flex items-center gap-1.5 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Open 11:00 AM – 11:00 PM
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-stone-300">
                <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
                4.6★ Google (1,200+ Reviews)
              </span>
              <span>•</span>
              <span>100% Pure Veg</span>
              <span>•</span>
              <span>RDC Raj Nagar, Ghaziabad</span>
            </motion.div>
          </div>
        ) : (
          /* ================= LUXE MODE HERO ================= */
          <div className="flex flex-col items-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181614]/85 border border-stone-800 text-stone-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md shadow-lg cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c8a97e] animate-pulse" />
              <span>Artisanal Coffee & Evening Lounge</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]"></span>
              <span className="text-stone-400">RDC Raj Nagar, Ghaziabad</span>
            </motion.div>

            {/* Kinetic Word-by-Word Title Reveal */}
            <TextReveal
              text="Where Cozy Aromas Meet Vibrant Evenings"
              highlightText="Cozy Aromas"
              className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-4xl"
              delay={0.15}
            />

            {/* Subtitle with Fade Up */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-stone-300/90 max-w-2xl font-light leading-relaxed mb-8"
            >
              A quiet retreat for freshly ground espresso, gourmet comfort food, and warm ambient neon nights in the heart of Raj Nagar.
            </motion.p>

            {/* Interactive Coffee Badge with Steam Physics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
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

            {/* Action CTAs with Magnetic Motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
            >
              <MagneticButton
                onClick={onOpenReserve}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] shadow-xl text-sm sm:text-base flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#0c0b0a] group-hover:rotate-12 transition-transform" />
                <span>Book a Table</span>
                <ArrowRight className="w-4 h-4 text-[#0c0b0a] group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="#menu"
                onClick={(e) => smoothScrollTo(e, '#menu')}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-medium text-stone-200 hover:text-white bg-[#191715] hover:bg-[#221f1c] border border-stone-700/80 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>Explore Menu</span>
              </MagneticButton>

              <MagneticButton
                href="#map-location"
                onClick={(e) => smoothScrollTo(e, '#map-location')}
                className="w-full sm:w-auto px-6 py-4 rounded-full font-medium text-[#c8a97e] hover:text-[#e5d2b8] hover:bg-[#1a1714] transition-colors text-sm flex items-center justify-center gap-2 border border-stone-800"
              >
                <Navigation className="w-4 h-4 text-[#c8a97e]" />
                <span>View Location & Map</span>
              </MagneticButton>
            </motion.div>

            {/* Key Indicators with Staggered Fade Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-14 pt-8 border-t border-stone-900 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-center gap-1 text-[#c8a97e] mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#c8a97e]" />
                  <span className="font-bold text-base text-[#fbf9f5] font-serif-title">4.6 / 5.0</span>
                </div>
                <p className="text-[11px] text-stone-400">1,200+ Google Reviews</p>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80 transition-shadow hover:shadow-lg">
                <div className="font-bold text-base text-[#fbf9f5] font-serif-title mb-0.5">₹600 - ₹900</div>
                <p className="text-[11px] text-stone-400">Cost for Two People</p>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80 transition-shadow hover:shadow-lg">
                <div className="font-bold text-base text-[#fbf9f5] font-serif-title mb-0.5">11 AM – 11 PM</div>
                <p className="text-[11px] text-stone-400">Open Daily in RDC</p>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-2xl bg-[#141210] border border-stone-800/80 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-center gap-1 text-rose-400 mb-0.5">
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span className="font-bold text-base text-[#fbf9f5] font-serif-title">100% Veg</span>
                </div>
                <p className="text-[11px] text-stone-400">Pure Veg Kitchen</p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
