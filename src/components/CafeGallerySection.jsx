import React from 'react';
import { CAFE_GALLERY } from '../data/cafeData';

export default function CafeGallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Section Header: No eyebrows, plain Young Serif heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Inside the cafe
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] font-normal max-w-md leading-relaxed">
          Crafted for unhurried afternoons, study sessions, and private celebrations under warm incandescent light.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAFE_GALLERY.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] p-4"
          >
            {/* Crisp Local Photo */}
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
            </div>

            {/* Caption Details */}
            <div>
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <h3 className="text-base font-normal text-[var(--color-ink)]">
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

    </section>
  );
}
