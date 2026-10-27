import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { CAFE_GALLERY } from '../data/cafeData';

export default function CafeGallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrev = useCallback(() => {
    setLightboxIndex((curr) => (curr > 0 ? curr - 1 : CAFE_GALLERY.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((curr) => (curr < CAFE_GALLERY.length - 1 ? curr + 1 : 0));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Inside the cafe
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] font-normal max-w-md leading-relaxed">
          Crafted for unhurried afternoons, study sessions, and private celebrations under warm light. Click any space to explore full view.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAFE_GALLERY.map((item, index) => (
          <div
            key={item.title}
            onClick={() => setLightboxIndex(index)}
            className="group flex flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-muted)] p-4 transition-colors cursor-pointer"
          >
            {/* Crisp Local Photo with micro-zoom */}
            <div className="relative h-60 w-full rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-paper-3)] mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? undefined : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
              />
              
              {/* Number Index */}
              <span className="absolute top-3 left-3 text-xs text-[var(--color-ink)] bg-[var(--color-paper)]/85 px-2 py-0.5 rounded-[var(--radius-pill)] border border-[var(--color-rule)]">
                0{index + 1}
              </span>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors pointer-events-none flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--color-paper)]/95 text-[var(--color-ink)] border border-[var(--color-rule)] shadow-sm flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>

            {/* Caption Details */}
            <div>
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <h3 className="text-base font-normal text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-[var(--color-muted)] lowercase">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-[var(--color-ink-2)] font-normal leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-8 bg-black/90"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[var(--color-paper-2)] rounded-[var(--radius-card)] border border-[var(--color-rule)] shadow-[var(--shadow-card)] overflow-hidden flex flex-col"
            >
              {/* Top Bar */}
              <div className="p-4 px-6 border-b border-[var(--color-rule)] bg-[var(--color-paper-3)] flex items-center justify-between">
                <span className="text-xs text-[var(--color-muted)]">
                  Photo 0{lightboxIndex + 1} of 0{CAFE_GALLERY.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1 rounded-full text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  aria-label="Close photo view"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Photo Display */}
              <div className="relative w-full h-[320px] sm:h-[480px] bg-black/60 flex items-center justify-center">
                <img
                  src={CAFE_GALLERY[lightboxIndex].image}
                  alt={CAFE_GALLERY[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2.5 rounded-full bg-[var(--color-paper)]/85 text-[var(--color-ink)] border border-[var(--color-rule)] hover:bg-[var(--color-paper-3)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2.5 rounded-full bg-[var(--color-paper)]/85 text-[var(--color-ink)] border border-[var(--color-rule)] hover:bg-[var(--color-paper-3)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="p-6 bg-[var(--color-paper-2)] border-t border-[var(--color-rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-normal text-[var(--color-ink)] mb-1">
                    {CAFE_GALLERY[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-[var(--color-ink-2)] font-normal leading-relaxed">
                    {CAFE_GALLERY[lightboxIndex].caption}
                  </p>
                </div>
                <span className="badge-tag shrink-0 self-start sm:self-auto">
                  {CAFE_GALLERY[lightboxIndex].category}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
