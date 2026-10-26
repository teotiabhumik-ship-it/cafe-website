import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sparkles, Navigation, Calendar, ArrowRight, Star, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReserve }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background with Ambient Radial Glows & Coffee Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-10000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Warm Ambient Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0908] via-[#0c0908]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0908] via-transparent to-[#0c0908]" />
        
        {/* Cozy Amber & Orange Radial Lantern Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Floating Cozy Ambient Motes / Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/30 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: `${(i * 8.5) % 100}%`,
              top: `${(i * 11) % 90}%`,
            }}
            animate={{
              y: [-10, -40, -10],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Glowing Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-950/80 via-amber-900/40 to-amber-950/80 border border-amber-600/40 shadow-lg shadow-amber-950/50 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-amber-200">
            Welcome to Ghaziabad's Cozy Coffeehouse & Lounge
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-xs text-amber-300/80 hidden sm:inline">RDC, Raj Nagar</span>
        </motion.div>

        {/* Brand Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-extrabold text-amber-50 tracking-tight leading-[1.15] mb-6 max-w-4xl"
        >
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 drop-shadow-sm">Cozy Aromas</span> Meet Vibrant Evenings
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-amber-200/80 max-w-2xl font-light leading-relaxed mb-8"
        >
          Immerse yourself in artisanal coffee, gourmet continental & Italian bites, and warm glowing neon interiors. Perfect for quiet coffee dates, friends' reunions, and private birthday celebrations.
        </motion.p>

        {/* Interactive Coffee Cup with Rising Steam Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative my-4 flex flex-col items-center justify-center group cursor-pointer"
        >
          {/* Animated Steam Plumes */}
          <div className="relative w-16 h-12 flex justify-center items-end gap-2 mb-1">
            <div className="w-1.5 h-8 bg-gradient-to-t from-amber-200/40 via-amber-100/20 to-transparent rounded-full animate-steam" style={{ animationDelay: '0s' }}></div>
            <div className="w-1.5 h-11 bg-gradient-to-t from-amber-200/50 via-amber-100/25 to-transparent rounded-full animate-steam" style={{ animationDelay: '1.2s' }}></div>
            <div className="w-1.5 h-9 bg-gradient-to-t from-amber-200/40 via-amber-100/20 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.6s' }}></div>
          </div>

          {/* Coffee Mug Glow Container */}
          <div className="relative px-5 py-2.5 rounded-full bg-amber-950/40 border border-amber-600/30 backdrop-blur-md flex items-center gap-2 text-xs text-amber-200 shadow-xl shadow-amber-900/20 group-hover:border-amber-400/60 transition-colors">
            <Coffee className="w-4 h-4 text-amber-400" />
            <span className="font-serif-title tracking-wider">Freshly Ground Daily</span>
          </div>
        </motion.div>

        {/* Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
        >
          {/* Reserve Table CTA */}
          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* View Menu CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-medium text-amber-100 hover:text-white bg-amber-950/50 hover:bg-amber-900/60 border border-amber-700/60 hover:border-amber-500/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base group shadow-lg"
          >
            <span>Explore Menu</span>
          </a>

          {/* Get Directions CTA */}
          <a
            href="#location"
            className="w-full sm:w-auto px-6 py-4 rounded-full font-medium text-amber-300/90 hover:text-amber-200 hover:bg-amber-950/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>RDC, Raj Nagar</span>
          </a>
        </motion.div>

        {/* Bottom Highlights Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 pt-8 border-t border-amber-950/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/20">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold text-lg text-white font-serif-title">4.6 / 5</span>
            </div>
            <p className="text-xs text-amber-300/70">1,200+ Google Reviews</p>
          </div>

          <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/20">
            <div className="font-bold text-lg text-white font-serif-title mb-1">₹600 - ₹900</div>
            <p className="text-xs text-amber-300/70">Cost for Two People</p>
          </div>

          <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/20">
            <div className="font-bold text-lg text-white font-serif-title mb-1">11 AM – 11 PM</div>
            <p className="text-xs text-amber-300/70">Open Daily in RDC</p>
          </div>

          <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/20">
            <div className="flex items-center justify-center gap-1 text-rose-400 mb-1">
              <Heart className="w-4 h-4 fill-rose-500" />
              <span className="font-bold text-lg text-white font-serif-title">Hangout & Parties</span>
            </div>
            <p className="text-xs text-amber-300/70">Birthday Bookings Available</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
