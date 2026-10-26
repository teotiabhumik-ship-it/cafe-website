import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, ChevronRight, Music, Wifi, Heart } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import { GALLERY_ITEMS, CAFE_INFO } from '../data/cafeData';

export default function SpaceView() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Ambiance', 'Brew Bar', 'Events', 'Photo Corner', 'Kitchen'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Atmospheric Stories
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
          The Space & Atmosphere
        </h1>
        <p className="text-sm sm:text-base text-amber-200/70 font-light max-w-xl mx-auto leading-relaxed">
          From sunlit afternoon coffee corners to the soft hum of evening lo-fi beats and glowing neon installations — take a visual tour through Cafe ElleBee.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              filter === cat
                ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/20'
                : 'bg-amber-950/30 text-amber-200/80 hover:text-white border border-amber-900/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Spacious Photo Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => setSelectedPhoto(item)}
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-amber-900/30 hover:border-amber-500/60 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-amber-800/40">
                {item.category}
              </span>
            </div>

            {/* View Icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4" />
            </div>

            {/* Caption & Title */}
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-serif-title text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-amber-200/80 font-light leading-relaxed">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Atmospheric Features Split */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#140e0b] border border-amber-900/30 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Music className="w-5 h-5" />
          </div>
          <h4 className="font-serif-title text-lg font-bold text-amber-100">Curated Lo-Fi Soundscapes</h4>
          <p className="text-xs text-amber-200/70 font-light leading-relaxed">
            Carefully tuned volume levels that allow deep conversation while keeping the energy lively.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#140e0b] border border-amber-900/30 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-serif-title text-lg font-bold text-amber-100">Warm Amber Lighting</h4>
          <p className="text-xs text-amber-200/70 font-light leading-relaxed">
            Soft indirect illumination paired with glowing neon quotes crafted for photos and relaxed eyes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#140e0b] border border-amber-900/30 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Wifi className="w-5 h-5" />
          </div>
          <h4 className="font-serif-title text-lg font-bold text-amber-100">Fast Wi-Fi & Work Corners</h4>
          <p className="text-xs text-amber-200/70 font-light leading-relaxed">
            Plentiful charging points and reliable high-speed internet for remote work and quiet reading.
          </p>
        </div>
      </div>

      {/* Instagram Community Banner */}
      <div className="mt-16 text-center">
        <a
          href={CAFE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-950/70 via-[#1a120e] to-amber-950/70 border border-amber-700/50 hover:border-amber-400 text-amber-200 hover:text-white transition-all shadow-xl text-sm font-medium group"
        >
          <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform" />
          <span>Follow our stories @{CAFE_INFO.instagramHandle}</span>
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
              className="relative max-w-3xl w-full bg-[#160f0c] rounded-3xl overflow-hidden border border-amber-700/50 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-amber-200 hover:text-white transition-colors"
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
                <span className="text-[11px] font-semibold text-amber-400 tracking-wider uppercase">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-amber-100 mt-1 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-amber-200/80 font-light">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
