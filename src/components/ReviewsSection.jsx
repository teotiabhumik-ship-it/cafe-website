import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0c0908]">
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
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Loved by Ghaziabad
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-4"
          >
            What Our Guests Say
          </motion.h2>

          {/* Aggregate Rating Pill */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-serif-title text-xl font-bold text-white">4.6</span>
            <span className="text-xs text-amber-300/70 font-light">
              based on 1,200+ Google Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#140e0b] border border-amber-900/30 hover:border-amber-600/40 shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <MessageSquareQuote className="w-10 h-10 text-amber-500/15 absolute top-6 right-6" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-amber-100/90 text-sm sm:text-base font-light leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-amber-950">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-600/40"
                  />
                  <div>
                    <h4 className="font-serif-title text-sm font-bold text-amber-200">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-amber-300/60 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified Dine-in Guest
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-amber-400/60">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
          >
            <span>Read more reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
