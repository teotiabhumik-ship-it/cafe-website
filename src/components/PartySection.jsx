import React from 'react';
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
    <section id="celebrations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Header: No eyebrows, plain Young Serif */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Celebrations at ElleBee
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] font-normal max-w-md leading-relaxed">
          From birthday gatherings under balloon canopies to quiet candlelit dates, we arrange custom decor, party platters, and sound for your events.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {CELEBRATION_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="badge-tag">
                  {pkg.badge}
                </span>
                <span className="text-xs text-[var(--color-muted)]">
                  {pkg.popularFor}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-normal text-[var(--color-ink)] mb-2">
                {pkg.title}
              </h3>
              <p className="text-xs text-[var(--color-ink-2)] font-normal leading-relaxed mb-6">
                {pkg.tagline}
              </p>

              {/* Price in Young Serif Lining Nums */}
              <div className="mb-6 pb-6 border-b border-[var(--color-rule)] flex items-baseline gap-2">
                <span className="font-[var(--font-display)] text-3xl font-normal text-[var(--color-accent)]">
                  {pkg.price}
                </span>
                <span className="text-xs text-[var(--color-muted)] font-normal">
                  {pkg.priceUnit || 'all-inclusive'}
                </span>
              </div>

              {/* Inclusions List */}
              <ul className="space-y-2.5 mb-8 p-0 list-none">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-ink-2)] font-normal leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquire Action */}
            <button
              onClick={() => handleWhatsAppInquiry(pkg.title)}
              className="btn-secondary w-full text-xs py-2.5 justify-center"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}
