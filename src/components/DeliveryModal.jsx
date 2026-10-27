import React from 'react';
import { X, ShoppingBag, ExternalLink, MessageCircle, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function DeliveryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      "Hi Cafe ElleBee! I'd like to place a takeaway / direct food order. Please share your current menu and delivery options."
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 bg-black/85">
      <div
        className="relative max-w-md w-full bg-[var(--color-paper-2)] rounded-[var(--radius-card)] border border-[var(--color-rule)] shadow-[var(--shadow-card)] overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 bg-[var(--color-paper-3)] border-b border-[var(--color-rule)] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-[var(--color-paper)] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
            aria-label="Close delivery options"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <span className="text-xs text-[var(--color-muted)] block mb-1">
            Doorstep delivery and takeaway
          </span>
          <h3 className="text-xl sm:text-2xl font-normal text-[var(--color-ink)]">
            Order online
          </h3>
          <p className="text-xs text-[var(--color-muted)] mt-1 font-normal">
            Enjoy your favourite dishes delivered across Ghaziabad
          </p>
        </div>

        {/* Options */}
        <div className="p-6 space-y-3.5">
          
          {/* Swiggy Card */}
          <a
            href={CAFE_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-[var(--radius-card)] bg-[var(--color-paper)] hover:bg-[var(--color-paper-3)] border border-[var(--color-rule)] transition-colors group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-accent)] font-semibold text-base">
                S
              </div>
              <div>
                <h4 className="text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  Order on Swiggy
                </h4>
                <p className="text-xs text-[var(--color-muted)] font-normal">
                  Fast local delivery in Raj Nagar
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" aria-hidden="true" />
          </a>

          {/* Zomato Card */}
          <a
            href={CAFE_INFO.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-[var(--radius-card)] bg-[var(--color-paper)] hover:bg-[var(--color-paper-3)] border border-[var(--color-rule)] transition-colors group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-accent)] font-semibold text-base">
                Z
              </div>
              <div>
                <h4 className="text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  Order on Zomato
                </h4>
                <p className="text-xs text-[var(--color-muted)] font-normal">
                  Live menu tracking and delivery
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" aria-hidden="true" />
          </a>

          {/* WhatsApp Direct Takeaway */}
          <button
            onClick={handleWhatsAppOrder}
            className="w-full flex items-center justify-between p-4 rounded-[var(--radius-card)] bg-[var(--color-paper)] hover:bg-[var(--color-paper-3)] border border-[var(--color-rule)] transition-colors group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">
                  WhatsApp takeaway
                </h4>
                <p className="text-xs text-[var(--color-muted)] font-normal whitespace-nowrap">
                  Pre-order for kitchen pickup
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" aria-hidden="true" />
          </button>

          {/* Phone Hotline */}
          <div className="pt-2 text-center">
            <p className="text-xs text-[var(--color-muted)] mb-1.5">Direct kitchen telephone:</p>
            <a
              href="tel:+919354460764"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>+91 93544 60764</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
