import React from 'react';
import { Coffee, Navigation } from 'lucide-react';
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
    <footer className="border-t border-stone-850 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-stone-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-850">
          
          {/* Brand & Address */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] uppercase text-[#fbf9f5] block">
              ElleBee
            </span>
            <p className="text-xs sm:text-sm font-light text-stone-400 max-w-sm leading-relaxed">
              Specialty coffees, handcrafted shakes, and gourmet European comfort food. Ground Floor, RDC Raj Nagar, Ghaziabad.
            </p>
            <div className="pt-2 text-xs font-mono text-stone-400 space-y-1">
              <p>{CAFE_INFO.address}</p>
              <p>Hotline: +91 93544 60764</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c8a97e] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#gallery" onClick={(e) => smoothScrollTo(e, '#gallery')} className="hover:text-white transition-colors">
                  01. The Spaces
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => smoothScrollTo(e, '#menu')} className="hover:text-white transition-colors">
                  02. Curated Menu
                </a>
              </li>
              <li>
                <a href="#celebrations" onClick={(e) => smoothScrollTo(e, '#celebrations')} className="hover:text-white transition-colors">
                  03. Celebrations & Lounge
                </a>
              </li>
              <li>
                <a href="#map-location" onClick={(e) => smoothScrollTo(e, '#map-location')} className="hover:text-white transition-colors">
                  04. Location & Map
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => smoothScrollTo(e, '#reviews')} className="hover:text-white transition-colors">
                  05. Guest Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c8a97e] block mb-2">
              Hours & Order
            </span>
            <div className="text-xs font-mono text-stone-300 space-y-1 mb-4">
              <p>Monday – Sunday : 11:00 AM – 11:00 PM</p>
              <p className="text-stone-500">Open all 7 days in RDC Raj Nagar</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>@cafe_ellebee</span>
              </a>

              <button
                onClick={onOpenDelivery}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 transition-colors"
              >
                Delivery
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Baseline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <p>© {new Date().getFullYear()} Cafe ElleBee. All rights reserved.</p>
          <p>100% Pure Vegetarian Kitchen • RDC Commercial Hub, Raj Nagar</p>
        </div>
      </div>
    </footer>
  );
}
