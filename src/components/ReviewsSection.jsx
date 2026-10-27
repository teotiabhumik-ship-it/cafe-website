import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/cafeData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Guest reviews
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] font-normal">
          <div className="flex items-center gap-0.5 text-[var(--color-accent)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <span className="font-semibold text-[var(--color-ink)]">4.6 of 5.0</span>
          <span>from 1,200 Google reviews</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex flex-col justify-between"
          >
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[var(--color-accent)] mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" aria-hidden="true" />
                ))}
              </div>

              {/* Text with typographic quotes */}
              <p className="text-[var(--color-ink-2)] text-sm sm:text-base font-normal leading-relaxed mb-6">
                “{rev.comment}”
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-rule)] text-xs">
              <span className="font-medium text-[var(--color-ink)]">
                {rev.author || rev.name}
              </span>
              <span className="text-[var(--color-muted)]">
                {rev.time || rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
