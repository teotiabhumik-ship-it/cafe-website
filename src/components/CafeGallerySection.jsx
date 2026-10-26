import React from 'react';
import { motion } from 'framer-motion';
import { CAFE_GALLERY } from '../data/cafeData';

export default function CafeGallerySection() {
  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-850">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c8a97e] block mb-3 font-medium">
            Spaces & Atmosphere
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5]">
            Inside The Cafe
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md leading-relaxed">
          Crafted for unhurried afternoons, intimate conversations, study sessions, and private celebrations under warm incandescent glow.
        </p>
      </div>

      {/* Editorial Numbered Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CAFE_GALLERY.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group flex flex-col justify-between"
          >
            {/* Crisp Photo Container */}
            <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#141210] border border-stone-850 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/70 via-transparent to-transparent pointer-events-none" />

              {/* Number Index */}
              <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest text-stone-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-stone-800">
                0{index + 1}
              </span>
            </div>

            {/* Quiet Caption Details */}
            <div>
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="font-serif-title text-base font-semibold text-[#f5f2eb] group-hover:text-[#c8a97e] transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
