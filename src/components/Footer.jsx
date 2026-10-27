import React from 'react';
import InstagramIcon from './InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onOpenReserve, onOpenDelivery }) {
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#' || !targetId) {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const target = document.querySelector(targetId);
    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const position = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-[var(--color-rule)] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[var(--color-muted)]">
      <div className="max-w-[var(--container)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[var(--color-rule)]">
          
          {/* Brand & Address */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-[var(--font-display)] text-2xl font-normal text-[var(--color-ink)] block">
              Cafe ElleBee
            </span>
            <p className="text-xs sm:text-sm font-normal text-[var(--color-ink-2)] max-w-sm leading-relaxed">
              Specialty coffee, handcrafted shakes, and gourmet casual dining on the ground floor of RDC, Raj Nagar.
            </p>
            <div className="pt-2 text-xs text-[var(--color-muted)] space-y-1">
              <p>{CAFE_INFO.address}</p>
              <p>Hotline: +91 93544 60764</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs text-[var(--color-ink)] font-medium block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs list-none p-0">
              <li>
                <a href="#gallery" onClick={(e) => smoothScrollTo(e, '#gallery')} className="hover:text-[var(--color-ink)] no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm">
                  Spaces & atmosphere
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => smoothScrollTo(e, '#menu')} className="hover:text-[var(--color-ink)] no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm">
                  Curated kitchen menu
                </a>
              </li>
              <li>
                <a href="#celebrations" onClick={(e) => smoothScrollTo(e, '#celebrations')} className="hover:text-[var(--color-ink)] no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm">
                  Private gatherings & lounge
                </a>
              </li>
              <li>
                <a href="#map-location" onClick={(e) => smoothScrollTo(e, '#map-location')} className="hover:text-[var(--color-ink)] no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm">
                  Location & directions
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => smoothScrollTo(e, '#reviews')} className="hover:text-[var(--color-ink)] no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm">
                  Guest reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Actions */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs text-[var(--color-ink)] font-medium block">
              Service hours
            </span>
            <div className="text-xs text-[var(--color-ink-2)] space-y-1 mb-4">
              <p>Monday to Sunday: 11:00 to 23:00</p>
              <p className="text-[var(--color-muted)]">Open all seven days in RDC Raj Nagar</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-1.5 px-3.5 no-underline"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>@cafe_ellebee</span>
              </a>

              <button
                onClick={onOpenDelivery}
                className="btn-secondary text-xs py-1.5 px-3.5"
              >
                Delivery
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Baseline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Cafe ElleBee</p>
          <p>100% pure vegetarian casual dining in RDC Raj Nagar</p>
        </div>
      </div>
    </footer>
  );
}
