import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sparkles, Navigation, Calendar, ArrowRight, Star, Heart, Utensils, Music, Users, ShieldCheck } from 'lucide-react';
import { CAFE_INFO, REVIEWS } from '../data/cafeData';

export default function HomeView({ onSelectView, onOpenReserve }) {
  const featuredReview = REVIEWS[0];

  return (
    <div className="relative">
      
      {/* 1. CINEMATIC HERO (BREATHING & COZY) */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 transition-transform duration-10000"
            style={{
              backgroundImage: `url('/images/cafe_interior_main.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0908] via-[#0c0908]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0908] via-transparent to-[#0c0908]" />
          
          {/* Ambient Warm Amber Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-600/12 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />
        </div>

        {/* Floating Steam Plumes & Micro-motes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-400/25 blur-[1px]"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: `${(i * 10) % 100}%`,
                top: `${(i * 12) % 90}%`,
              }}
              animate={{
                y: [-10, -50, -10],
                opacity: [0.15, 0.6, 0.15],
                scale: [0.9, 1.3, 0.9],
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/70 border border-amber-700/40 text-amber-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Artisanal Coffee & Evening Lounge</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-amber-300/80">RDC Raj Nagar, Ghaziabad</span>
          </motion.div>

          {/* Kinetic Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-extrabold text-amber-50 tracking-tight leading-[1.12] mb-6"
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">Cozy Aromas</span> Meet Vibrant Evenings
          </motion.h1>

          {/* Editorial Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-amber-200/80 max-w-2xl font-light leading-relaxed mb-8"
          >
            A sanctuary crafted for slow coffee mornings, gourmet comfort food, and warm neon-lit celebration nights in the heart of Raj Nagar.
          </motion.p>

          {/* Animated Steam Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative my-3 flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => onSelectView('menu')}
          >
            <div className="relative w-16 h-10 flex justify-center items-end gap-2 mb-1">
              <div className="w-1.5 h-7 bg-gradient-to-t from-amber-200/40 via-amber-100/20 to-transparent rounded-full animate-steam" style={{ animationDelay: '0s' }}></div>
              <div className="w-1.5 h-10 bg-gradient-to-t from-amber-200/50 via-amber-100/25 to-transparent rounded-full animate-steam" style={{ animationDelay: '1.2s' }}></div>
              <div className="w-1.5 h-8 bg-gradient-to-t from-amber-200/40 via-amber-100/20 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <div className="px-5 py-2 rounded-full bg-amber-950/40 border border-amber-600/30 backdrop-blur-md flex items-center gap-2 text-xs text-amber-200 group-hover:border-amber-400 transition-colors">
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-serif-title tracking-wider">Explore The Brews</span>
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
          >
            <button
              onClick={onOpenReserve}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Book a Table</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onSelectView('menu')}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-medium text-amber-100 hover:text-white bg-amber-950/50 hover:bg-amber-900/60 border border-amber-700/60 transition-all text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span>Explore The Menu</span>
            </button>

            <button
              onClick={() => onSelectView('visit')}
              className="w-full sm:w-auto px-6 py-4 rounded-full font-medium text-amber-300 hover:text-amber-200 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Visit Us</span>
            </button>
          </motion.div>

          {/* Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 pt-8 border-t border-amber-950/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/30">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold text-base text-white font-serif-title">4.6 / 5.0</span>
              </div>
              <p className="text-[11px] text-amber-300/70">1,200+ Verified Reviews</p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/30">
              <div className="font-bold text-base text-white font-serif-title mb-0.5">₹600 - ₹900</div>
              <p className="text-[11px] text-amber-300/70">Cost for Two People</p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/30">
              <div className="font-bold text-base text-white font-serif-title mb-0.5">11 AM – 11 PM</div>
              <p className="text-[11px] text-amber-300/70">Open Daily in RDC</p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-900/30">
              <div className="flex items-center justify-center gap-1 text-rose-400 mb-0.5">
                <Heart className="w-3.5 h-3.5 fill-rose-500" />
                <span className="font-bold text-base text-white font-serif-title">Private Lounge</span>
              </div>
              <p className="text-[11px] text-amber-300/70">Party Bookings Available</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. THE THREE PORTALS (SEPARATED DOORS TO THE REST OF THE EXPERIENCE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            The Three Chapters
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-amber-100">
            Choose Your Experience
          </h2>
          <p className="text-sm text-amber-200/70 mt-2 font-light">
            Step through each realm of Cafe ElleBee designed for your taste and mood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Portal 1: Culinary Craft & Menu */}
          <div 
            onClick={() => onSelectView('menu')}
            className="group relative rounded-3xl overflow-hidden border border-amber-900/40 hover:border-amber-500/60 bg-[#140e0b] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-xl"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Chapter 01
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                The Artisan Menu
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/70 font-light leading-relaxed">
                Handcrafted espresso, monster thick shakes, our famed crispy corn, gourmet thin-crust pizzas, and Korean cream cheese buns.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Explore All Dishes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>

            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-600/5 rounded-full blur-2xl group-hover:bg-amber-600/15 transition-all" />
          </div>

          {/* Portal 2: The Aesthetic Space */}
          <div 
            onClick={() => onSelectView('space')}
            className="group relative rounded-3xl overflow-hidden border border-amber-900/40 hover:border-amber-500/60 bg-[#140e0b] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-xl"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Chapter 02
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                The Ambiance & Space
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/70 font-light leading-relaxed">
                Step into warm candlelit shadows, plush velvet seating, chill lo-fi playlists, and neon quote backdrops made for storytelling.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>View The Photo Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>

            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/5 rounded-full blur-2xl group-hover:bg-orange-600/15 transition-all" />
          </div>

          {/* Portal 3: Celebrations & Private Lounge */}
          <div 
            onClick={() => onSelectView('celebrations')}
            className="group relative rounded-3xl overflow-hidden border border-amber-900/40 hover:border-amber-500/60 bg-[#140e0b] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-xl"
          >
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:bg-rose-400 group-hover:text-black transition-colors">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                Chapter 03
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                Private Celebrations
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/70 font-light leading-relaxed">
                Host unforgettable birthdays, anniversaries, and reunions with tailored neon decorations, custom menus, and dedicated hospitality.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Explore Party Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>

            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-600/5 rounded-full blur-2xl group-hover:bg-rose-600/15 transition-all" />
          </div>

        </div>

      </section>

      {/* 3. EDITORIAL STORY SPLIT (LUXURIOUS BREATHING ROOM) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-amber-950/60 bg-[#0e0a09]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              The ElleBee Story
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-amber-50 leading-snug">
              A Warm Sanctuary Hidden in the Heart of <span className="text-amber-400">RDC</span>
            </h2>
            <p className="text-sm sm:text-base text-amber-200/80 font-light leading-relaxed">
              Founded on the belief that great cafes are living rooms for the community, Cafe ElleBee brings together artisanal beverage craft and modern casual dining. Whether you're catching up with friends or seeking a cozy retreat with a warm cup of coffee, our doors are open daily.
            </p>
            <div className="p-4 rounded-2xl bg-amber-950/30 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-200/90 italic font-light">
              "{featuredReview.comment}"
              <p className="not-italic text-amber-400 font-semibold mt-2 text-xs">
                — {featuredReview.name}, Local Patron
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-amber-800/40 shadow-2xl aspect-[4/3]">
              <img
                src="/images/cafe_interior_main.jpg"
                alt="Cafe ElleBee Cozy Corner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. INVITATION BANNER TO VISIT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0706] border-t border-amber-950/80 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100">
            Ready to Drop In?
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/70 font-light">
            We are located at B-19, Ground Floor, RDC Raj Nagar, Ghaziabad. Open everyday 11 AM to 11 PM.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onSelectView('visit')}
              className="px-6 py-3 rounded-full text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5 text-black" />
              <span>Get Directions & View Map</span>
            </button>
            <button
              onClick={onOpenReserve}
              className="px-6 py-3 rounded-full text-xs font-semibold text-amber-200 bg-amber-950/60 border border-amber-800/50 hover:bg-amber-900 transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
