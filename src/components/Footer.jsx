import React from 'react';
import { Coffee, MapPin, Phone, Clock, Heart, Navigation } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onOpenReserve, onOpenDelivery }) {
  return (
    <footer className="bg-[#080706] border-t border-stone-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-stone-400 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#181614] border border-stone-700/80 flex items-center justify-center text-[#c8a97e]">
                <Coffee className="w-5 h-5 text-[#c8a97e]" />
              </div>
              <div>
                <span className="font-serif-title text-2xl font-bold tracking-wider text-[#fbf9f5]">
                  Cafe ElleBee
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-stone-400 font-sans -mt-0.5">
                  RDC • Raj Nagar, Ghaziabad
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm font-light text-stone-400 max-w-sm leading-relaxed">
              Craft coffee, gourmet comfort bites, and an ambient neon glow. A cozy haven designed for memorable conversations, quiet coffee breaks, and joyful birthday celebrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#161412] hover:bg-[#201d1a] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#161412] hover:bg-[#201d1a] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/919354460764`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#161412] hover:bg-[#201d1a] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-colors text-xs font-bold"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#fbf9f5] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-stone-300">
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">The Cafe & Ambiance</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Food & Coffee Menu</a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-white transition-colors">Party & Event Packages</a>
              </li>
              <li>
                <a href="#map-location" className="hover:text-white transition-colors">Visible Map & Location</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Guest Reviews</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#fbf9f5] uppercase tracking-wider">
              Visit & Contact
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm font-light text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c8a97e] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c8a97e] shrink-0" />
                <span>Daily: {CAFE_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c8a97e] shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:+919354460764" className="hover:text-white transition-colors">+91 93544 60764</a>
                  <span>/</span>
                  <a href="tel:+919999286130" className="hover:text-white transition-colors">+91 99992 86130</a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenReserve}
                className="px-4 py-2 text-xs font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] rounded-full transition-colors"
              >
                Reserve Table
              </button>
              <button
                onClick={onOpenDelivery}
                className="px-4 py-2 text-xs font-medium text-stone-200 bg-[#161412] border border-stone-700/80 hover:bg-[#201d1a] rounded-full transition-colors"
              >
                Order Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© {new Date().getFullYear()} Cafe ElleBee, RDC Raj Nagar, Ghaziabad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for coffee lovers & cozy souls
          </p>
        </div>
      </div>
    </footer>
  );
}
