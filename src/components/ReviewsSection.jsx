import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/cafeData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-850">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c8a97e] block mb-3 font-medium">
            Testimonials & Praise
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5]">
            Loved by Ghaziabad
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-0.5 text-[#c8a97e]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#c8a97e]" />
            ))}
          </div>
          <span className="font-semibold text-stone-200">4.6 / 5.0</span>
          <span>(1,200+ Google Reviews)</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS.map((rev, idx) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#11100e] border border-stone-850 flex flex-col justify-between"
          >
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[#c8a97e] mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#c8a97e]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                "{rev.comment}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-850 text-xs font-mono">
              <span className="font-medium text-stone-200">
                {rev.author}
              </span>
              <span className="text-stone-500">
                {rev.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
