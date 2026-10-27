import React, { useState } from 'react';
import { MessageCircle, Check, Users } from 'lucide-react';
import { CELEBRATION_PACKAGES, CAFE_INFO } from '../data/cafeData';

export default function PartySection({ onOpenReserve }) {
  const [selectedGuests, setSelectedGuests] = useState(8);

  const guestOptions = [8, 12, 16, 24, 30];

  const handleWhatsAppInquiry = (pkg) => {
    const isPerGuest = pkg.price.includes('699') || pkg.price.includes('599');
    const rate = pkg.price.replace(/[^\d]/g, '');
    const totalEstimate = isPerGuest ? parseInt(rate, 10) * selectedGuests : rate;

    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'd like to plan an event:\n\n` +
      `🎉 Package: ${pkg.title}\n` +
      `👥 Guest count: ${selectedGuests} guests\n` +
      `💰 Estimated total: ₹${totalEstimate}\n\n` +
      `Please let me know slot availability and menu customizations. Thank you!`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  return (
    <section id="celebrations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Celebrations at ElleBee
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] font-normal max-w-md leading-relaxed">
          From birthday gatherings under balloon canopies to quiet candlelit dates, we arrange custom decor, party platters, and sound for your events.
        </p>
      </div>

      {/* Interactive Guest Count Controller */}
      <div className="mb-10 p-4 rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
          <span className="text-xs text-[var(--color-ink)] font-medium">Select your gathering size:</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {guestOptions.map((count) => {
            const isActive = selectedGuests === count;
            return (
              <button
                key={count}
                onClick={() => setSelectedGuests(count)}
                className={`px-3 py-1 rounded-[var(--radius-pill)] text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-semibold'
                    : 'bg-[var(--color-paper-3)] text-[var(--color-muted)] hover:text-[var(--color-ink)] border border-[var(--color-rule)]'
                }`}
              >
                {count} guests
              </button>
            );
          })}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {CELEBRATION_PACKAGES.map((pkg) => {
          const isPerGuest = pkg.price.includes('699') || pkg.price.includes('599');
          const rateNum = parseInt(pkg.price.replace(/[^\d]/g, ''), 10);
          const computedTotal = isPerGuest ? rateNum * selectedGuests : rateNum;

          return (
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

                {/* Dynamic Price Display */}
                <div className="mb-6 pb-6 border-b border-[var(--color-rule)]">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-[var(--font-display)] text-3xl font-normal text-[var(--color-accent)]">
                      {isPerGuest ? `₹${computedTotal.toLocaleString('en-IN')}` : pkg.price}
                    </span>
                    <span className="text-xs text-[var(--color-muted)] font-normal">
                      {isPerGuest ? `total for ${selectedGuests} guests` : 'per couple'}
                    </span>
                  </div>
                  {isPerGuest && (
                    <span className="text-[11px] text-[var(--color-muted)] block">
                      Based on {pkg.price} per person
                    </span>
                  )}
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
                onClick={() => handleWhatsAppInquiry(pkg)}
                className="btn-secondary w-full text-xs py-2.5 justify-center"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                <span>Inquire for {selectedGuests} guests</span>
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
