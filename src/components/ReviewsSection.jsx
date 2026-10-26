import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-900">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181513] border border-stone-800 text-stone-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <Star className="w-3.5 h-3.5 fill-[#c8a97e] text-[#c8a97e]" />
          Guest Experiences
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5] mb-4">
          Loved by Ghaziabad
        </h2>

        {/* Rating Pill */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="flex items-center gap-1 text-[#c8a97e]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#c8a97e] text-[#c8a97e]" />
            ))}
          </div>
          <span className="font-serif-title text-lg font-bold text-[#fbf9f5]">4.6 / 5.0</span>
          <span className="text-xs text-stone-400 font-light">
            (1,200+ Verified Google Reviews)
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-6 sm:p-8 rounded-3xl bg-[#141210] border border-stone-800/80 hover:border-stone-700 shadow-xl transition-all duration-300 relative flex flex-col justify-between"
          >
            <MessageSquareQuote className="w-9 h-9 text-stone-700/40 absolute top-6 right-6" />

            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#c8a97e] mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c8a97e] text-[#c8a97e]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                "{rev.comment}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-800/80">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-stone-700"
                />
                <div>
                  <h4 className="font-serif-title text-sm font-bold text-[#fbf9f5]">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-stone-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified Dine-in Guest
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-stone-500">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Google Reviews Link */}
      <div className="mt-12 text-center">
        <a
          href={CAFE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 hover:text-white underline underline-offset-4 transition-colors"
        >
          <span>Read all customer stories on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
}
