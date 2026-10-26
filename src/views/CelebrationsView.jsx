import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Heart, CheckCircle2, MessageCircle, Calendar, Sparkles, Users, Music } from 'lucide-react';
import { CELEBRATION_PACKAGES, CAFE_INFO } from '../data/cafeData';

export default function CelebrationsView({ onOpenReserve }) {
  const handleWhatsAppInquiry = (packageTitle) => {
    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'm interested in booking the "${packageTitle || 'Celebration Package'}" at your RDC Raj Nagar cafe. Could you please share slot availability and details?`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/70 border border-rose-800/40 text-rose-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <PartyPopper className="w-3.5 h-3.5 text-rose-400" />
          Celebrations & Events
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
          Host Your Special Moments
        </h1>
        <p className="text-sm sm:text-base text-amber-200/70 font-light max-w-xl mx-auto leading-relaxed">
          From glowing birthday celebrations to quiet candlelit dates and friends' reunions — we design custom decor, platters, and soundtracks for memories that linger.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {CELEBRATION_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-3xl border border-amber-900/40 hover:border-amber-500/60 bg-[#140e0b] p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-700/50">
                {pkg.badge}
              </span>
              <span className="text-xs text-amber-400/80 font-medium">
                {pkg.popularFor}
              </span>
            </div>

            {/* Title & Pricing */}
            <div className="space-y-3 mb-6">
              <h3 className="font-serif-title text-2xl font-bold text-amber-100">
                {pkg.title}
              </h3>
              <p className="text-xs text-amber-200/70 font-light leading-relaxed">
                {pkg.tagline}
              </p>
              <div className="pt-2">
                <span className="font-serif-title text-3xl font-extrabold text-amber-400">
                  {pkg.price}
                </span>
                <span className="text-xs text-amber-300/70 ml-2">
                  {pkg.priceUnit}
                </span>
              </div>
            </div>

            {/* Included Features */}
            <div className="space-y-3 pt-4 border-t border-amber-950/80 mb-8 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90">
                Package Inclusions:
              </p>
              {pkg.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-amber-100/90 font-light">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={onOpenReserve}
                className="w-full py-3 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-black" />
                <span>Reserve Package</span>
              </button>
              <button
                onClick={() => handleWhatsAppInquiry(pkg.title)}
                className="w-full py-2.5 rounded-full text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-800/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Decor & Experience Banner */}
      <div className="rounded-3xl border border-amber-800/40 bg-gradient-to-br from-[#18100c] via-[#120d0b] to-[#18100c] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Personalized Hospitality
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-amber-50">
              Need a Customized Menu or Private Wing Booking?
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 font-light leading-relaxed max-w-2xl">
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
              className="px-6 py-3 rounded-full text-xs font-medium text-amber-300 hover:text-white bg-amber-950/50 border border-amber-800/50 text-center transition-colors"
            >
              Direct Call: +91 93544 60764
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
