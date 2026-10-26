import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';
import { CELEBRATION_PACKAGES, CAFE_INFO } from '../data/cafeData';

export default function PartySection({ onOpenReserve }) {
  const handleWhatsAppInquiry = (packageTitle) => {
    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'm interested in booking the "${packageTitle || 'Celebration Package'}" at your RDC Raj Nagar cafe. Could you please share slot availability and details?`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  return (
    <section id="celebrations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-850">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c8a97e] block mb-3 font-medium">
            Private Events & Bookings
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5]">
            Celebrations at ElleBee
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md leading-relaxed">
          From glowing birthday celebrations under neon quotes to candlelit dinner dates — we arrange custom decor, party platters, and sound for your moments.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {CELEBRATION_PACKAGES.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-2xl border border-stone-850 bg-[#11100e] p-8 flex flex-col justify-between hover:border-stone-700 transition-colors"
          >
            <div>
              {/* Badge & Popular For */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8a97e]">
                  {pkg.badge}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {pkg.popularFor}
                </span>
              </div>

              {/* Title & Price */}
              <h3 className="font-serif-title text-2xl font-bold text-[#fbf9f5] mb-2">
                {pkg.title}
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
                {pkg.tagline}
              </p>

              <div className="mb-6 pb-6 border-b border-stone-850">
                <span className="font-serif-title text-3xl font-bold text-[#fbf9f5]">
                  {pkg.price}
                </span>
                <span className="text-xs font-mono text-stone-500 ml-2">
                  all-inclusive
                </span>
              </div>

              {/* Inclusions List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-stone-300 font-light leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-[#c8a97e] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquire Action */}
            <button
              onClick={() => handleWhatsAppInquiry(pkg.title)}
              className="w-full py-2.5 rounded-full text-xs font-mono tracking-wider text-stone-200 hover:text-white bg-[#181614] hover:bg-[#201d19] border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#c8a97e]" />
              <span>Inquire via WhatsApp</span>
            </button>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
