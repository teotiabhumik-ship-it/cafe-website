import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronRight, Eye } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { GALLERY_ITEMS, CAFE_INFO } from '../data/cafeData';

export default function AmbianceGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="ambiance" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0e0a09]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-medium tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Visual Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-4"
          >
            The ElleBee Aesthetic
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-200/70 text-sm sm:text-base font-light"
          >
            Warm glows, comfy velvet cushions, and neon signs tailored for memories. Tag us{' '}
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold underline underline-offset-4 hover:text-amber-300"
            >
              @{CAFE_INFO.instagramHandle}
            </a>{' '}
            in your stories to be featured.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-amber-900/30 hover:border-amber-500/60 shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-amber-800/40">
                  {item.category}
                </span>
              </div>

              {/* Quick View Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif-title text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-200/80 font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Banner CTA */}
        <div className="mt-12 text-center">
          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-950/60 to-amber-900/40 border border-amber-700/50 hover:border-amber-400 text-amber-200 hover:text-white transition-all duration-300 shadow-md text-sm font-medium group"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform" />
            <span>Follow us on Instagram @{CAFE_INFO.instagramHandle}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

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
              className="relative max-w-3xl w-full bg-[#140e0b] rounded-3xl overflow-hidden border border-amber-700/50 shadow-2xl"
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
    </section>
  );
}
