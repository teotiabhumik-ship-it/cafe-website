import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Pizza, Sparkles, Users, Wifi, Music, Heart, Utensils } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function AboutSection() {
  const features = [
    {
      icon: Coffee,
      title: "Artisanal Coffee & Shakes",
      desc: "Carefully roasted espresso beans, handcrafted frappes, and indulgent monster shakes crafted to lift your spirits.",
      badge: "Fresh Brews"
    },
    {
      icon: Pizza,
      title: "Multi-Cuisine Delicacies",
      desc: "From crispy corn and Korean buns to stone-baked thin crust pizzas and creamy pastasto satisfy every craving.",
      badge: "Gourmet Kitchen"
    },
    {
      icon: Sparkles,
      title: "Aesthetic Neon Glow",
      desc: "Designed with warm ambient tones, lush seating, and signature neon quote installations built for memorable snapshots.",
      badge: "Photo Friendly"
    },
    {
      icon: Users,
      title: "Celebrations & Parties",
      desc: "Ghaziabad’s preferred venue for customized birthday setups, anniversaries, reunions, and lively get-togethers.",
      badge: "Private Events"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0e0a09]">
      {/* Decorative Warm Backlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-medium tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Our Story & Atmosphere
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-6"
          >
            A Haven of Warmth in the Heart of <span className="text-amber-400">RDC</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-200/70 text-base sm:text-lg leading-relaxed font-light"
          >
            At <strong>Cafe ElleBee</strong>, we believe every cup of coffee tells a story and every gathering deserves a touch of magic. Tucked into the bustling RDC district of Raj Nagar, our space transforms from a serene daylight retreat into a warm, glowing celebration lounge after dark.
          </motion.p>
        </div>

        {/* Story & Visual Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-amber-800/30 shadow-2xl shadow-black/80 aspect-[4/3] group">
                <img
                  src="/images/cafe_interior_main.jpg"
                  alt="Cafe ElleBee Cozy Ambiance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-amber-300 text-xs font-semibold uppercase tracking-wider">Aesthetic Comfort</p>
                  <p className="text-white font-serif-title text-base sm:text-lg">Intimate corners designed for heart-to-heart chats</p>
                </div>
              </div>

              {/* Overlapping Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-48 sm:w-56 p-4 rounded-2xl bg-[#160f0c]/90 border border-amber-600/40 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Music className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-300 font-semibold">Chill Lo-Fi & Grooves</p>
                    <p className="text-[11px] text-amber-200/60">Curated evening vibe</p>
                  </div>
                </div>
              </div>

              {/* Second floating mini-badge */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 p-3 rounded-2xl bg-[#160f0c]/90 border border-amber-600/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs text-amber-200">
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span>High-Speed Wi-Fi</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Amenities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100">
                Designed for Conversation, Celebrations & Comfort Food
              </h3>
              <p className="text-amber-200/80 font-light text-sm sm:text-base leading-relaxed">
                Whether you're stepping in for a quick afternoon cold coffee break, settling down with your laptop, or throwing a memorable birthday party with friends, Cafe ElleBee wraps you in warm hospitality and mouthwatering flavors.
              </p>
            </div>

            {/* Quick Amenity Bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-900/30 text-amber-200 text-xs sm:text-sm">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-900/30 text-amber-200 text-xs sm:text-sm">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Friendly Attentive Staff</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-900/30 text-amber-200 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Party Decor</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-900/30 text-amber-200 text-xs sm:text-sm">
                <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Barista Specialty Coffee</span>
              </div>
            </div>

            {/* Quote / Highlight */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 to-transparent border-l-4 border-amber-500">
              <p className="italic text-xs sm:text-sm text-amber-200/90 font-light">
                “A neighborhood favorite where good food meets genuine smiles. We take pride in being Raj Nagar’s go-to comfort sanctuary.”
              </p>
            </div>
          </motion.div>

        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-amber-950/30 to-[#120d0b] border border-amber-800/30 hover:border-amber-500/60 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/40">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-serif-title text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h4>
                <p className="text-amber-200/70 text-xs sm:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
