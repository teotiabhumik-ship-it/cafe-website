import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, ChevronRight, Music, Wifi } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import TiltCard from './motion/TiltCard';
import { CAFE_GALLERY, CAFE_INFO } from '../data/cafeData';

export default function CafeGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Interior', 'Vibes', 'Brew Bar', 'Kitchen', 'Events'];

  const filteredPhotos = activeFilter === 'All'
    ? CAFE_GALLERY
    : CAFE_GALLERY.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-900">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181513] border border-stone-800 text-stone-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
          Visual Tour & Ambiance
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5] mb-4"
        >
          Inside Cafe ElleBee
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-stone-300/80 font-light max-w-xl mx-auto leading-relaxed"
        >
          Take a peek inside our cozy corners, aesthetic neon quote walls, warm velvet dining booths, and freshly pulled espresso bar.
        </motion.p>
      </div>

      {/* Category Filter Pills with Spring Layout Morph (layoutId) */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
        {filters.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive ? 'text-[#0c0b0a] font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeGalleryTabPill"
                  className="absolute inset-0 bg-[#f5efe6] rounded-full shadow-md"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Tilt Photo Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((item, index) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <TiltCard
                onClick={() => setSelectedPhoto(item)}
                className="h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-stone-800/80 hover:border-[#c8a97e]/60 shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#c8a97e] border border-stone-800">
                    {item.category}
                  </span>
                </div>

                {/* Quick View Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Title & Caption */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif-title text-xl font-bold text-[#fbf9f5] group-hover:text-[#c8a97e] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300/85 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Ambiance Pillars Split */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-[#141210] border border-stone-800/80 space-y-3 transition-shadow hover:shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-[#1f1b17] border border-stone-700/80 flex items-center justify-center text-[#c8a97e]">
            <Music className="w-5 h-5" />
          </div>
          <h4 className="font-serif-title text-lg font-bold text-[#fbf9f5]">Curated Evening Beats</h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Relaxed chill lo-fi and smooth jazz during the day; upbeat party rhythms in the evening for friends' get-togethers.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-[#141210] border border-stone-800/80 space-y-3 transition-shadow hover:shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-[#1f1b17] border border-stone-700/80 flex items-center justify-center text-[#c8a97e]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-serif-title text-lg font-bold text-[#fbf9f5]">Warm Ambient Lighting</h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Soft incandescent lamps paired with signature glowing neon quotes crafted for photos and comfortable eyes.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-[#141210] border border-stone-800/80 space-y-3 transition-shadow hover:shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-[#1f1b17] border border-stone-700/80 flex items-center justify-center text-[#c8a97e]">
            <Wifi className="w-5 h-5" />
          </div>
          <h4 className="font-serif-title text-lg font-bold text-[#fbf9f5]">High-Speed Wi-Fi & Work Booths</h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Charging sockets at key booths and dependable internet for quiet freelance hours and student group study.
          </p>
        </motion.div>
      </div>

      {/* Instagram Banner */}
      <div className="mt-14 text-center">
        <a
          href={CAFE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#181614] hover:bg-[#201d1a] border border-stone-800 hover:border-stone-600 text-stone-300 hover:text-white transition-all text-xs sm:text-sm font-medium group"
        >
          <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform" />
          <span>Follow our stories on Instagram @{CAFE_INFO.instagramHandle}</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#141210] rounded-3xl overflow-hidden border border-stone-700 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-stone-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-80 sm:h-96 w-full">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-[11px] font-semibold text-[#c8a97e] tracking-wider uppercase">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-[#fbf9f5] mt-1 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-stone-300/80 font-light">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
