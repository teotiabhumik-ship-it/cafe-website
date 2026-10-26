import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Heart, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { CELEBRATION_PACKAGES, CAFE_INFO } from '../data/cafeData';

export default function PartySection({ onOpenReserve }) {
  const handleWhatsAppInquiry = (packageTitle) => {
    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'm interested in booking the "${packageTitle || 'Celebration Package'}" at your RDC Raj Nagar cafe. Could you please share slot availability and details?`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  return (
    <section id="celebrations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-900">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181513] border border-stone-800 text-stone-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <PartyPopper className="w-3.5 h-3.5 text-[#c8a97e]" />
          Celebrations & Private Events
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5] mb-4">
          Host Your Special Moments
        </h2>
        <p className="text-sm sm:text-base text-stone-300/80 font-light max-w-xl mx-auto leading-relaxed">
          From glowing birthday celebrations under neon lights to quiet candlelit dates and friends' reunions — we design custom decor, platters, and soundtracks for memories that linger.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {CELEBRATION_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-3xl border border-stone-800/80 hover:border-stone-600 bg-[#141210] p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#1c1916] text-[#c8a97e] border border-stone-700">
                {pkg.badge}
              </span>
              <span className="text-xs text-stone-400 font-medium">
                {pkg.popularFor}
              </span>
            </div>

            {/* Title & Pricing */}
            <div className="space-y-3 mb-6">
              <h3 className="font-serif-title text-2xl font-bold text-[#fbf9f5]">
                {pkg.title}
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {pkg.tagline}
              </p>
              <div className="pt-2">
                <span className="font-serif-title text-3xl font-extrabold text-[#fbf9f5]">
                  {pkg.price}
                </span>
                <span className="text-xs text-stone-400 ml-2">
                  {pkg.priceUnit}
                </span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-4 border-t border-stone-800/80 mb-8 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-300">
                Package Inclusions:
              </p>
              {pkg.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#c8a97e] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={onOpenReserve}
                className="w-full py-3 rounded-full text-xs font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0c0b0a]" />
                <span>Reserve Package</span>
              </button>
              <button
                onClick={() => handleWhatsAppInquiry(pkg.title)}
                className="w-full py-2.5 rounded-full text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/20 hover:bg-emerald-950/50 border border-emerald-800/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Group Party Banner */}
      <div className="rounded-3xl border border-stone-800 bg-[#161412] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c8a97e]">
              Personalized Hospitality
            </span>
            <h3 className="font-serif-title text-3xl font-bold text-[#fbf9f5]">
              Need a Customized Menu or Private Wing Booking?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-2xl">
              We frequently accommodate farewell parties, college get-togethers, and family celebrations with custom budgets and diet preferences (Jain food options, eggless bakeries, and custom photo backdrops).
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => handleWhatsAppInquiry('Custom Group Event')}
              className="px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to Event Coordinator</span>
            </button>
            <a
              href="tel:+919354460764"
              className="px-6 py-3 rounded-full text-xs font-medium text-stone-300 hover:text-white bg-[#1a1714] border border-stone-700 text-center transition-colors"
            >
              Direct Call: +91 93544 60764
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
