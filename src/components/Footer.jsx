import React from 'react';
import { Coffee, MapPin, Phone, Clock, Heart, Navigation } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onSelectView, onOpenReserve, onOpenDelivery }) {
  return (
    <footer className="bg-[#070504] border-t border-amber-950/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-amber-200/80 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-950/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <button 
              onClick={() => {
                onSelectView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/30">
                <Coffee className="w-5 h-5 text-amber-50" />
              </div>
              <div>
                <span className="font-serif-title text-2xl font-bold tracking-wider text-amber-100">
                  Cafe ElleBee
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-amber-400 font-sans">
                  RDC • Raj Nagar, Ghaziabad
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm font-light text-amber-300/70 max-w-sm leading-relaxed">
              Craft coffee, gourmet comfort bites, and an ambient neon glow. A cozy haven designed for memorable conversations, quiet coffee breaks, and joyful birthday celebrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-amber-950/60 hover:bg-amber-900 border border-amber-800/40 flex items-center justify-center text-amber-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-amber-950/60 hover:bg-amber-900 border border-amber-800/40 flex items-center justify-center text-amber-300 hover:text-white transition-colors"
                aria-label="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/919354460764`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-amber-950/60 hover:bg-amber-900 border border-amber-800/40 flex items-center justify-center text-amber-300 hover:text-white transition-colors text-xs font-bold"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Dedicated Section Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-amber-100 uppercase tracking-wider">
              Explore The Experience
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <button
                  onClick={() => {
                    onSelectView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  The Sanctuary (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectView('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Artisanal Food & Sips Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectView('space');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  The Space & Visual Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectView('celebrations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Celebration & Birthday Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectView('visit');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Location, Hours & Google Map
                </button>
              </li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-amber-100 uppercase tracking-wider">
              Visit & Contact
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Daily: {CAFE_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:+919354460764" className="hover:text-amber-300 transition-colors">+91 93544 60764</a>
                  <span>/</span>
                  <a href="tel:+919999286130" className="hover:text-amber-300 transition-colors">+91 99992 86130</a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenReserve}
                className="px-4 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
              >
                Reserve Table
              </button>
              <button
                onClick={onOpenDelivery}
                className="px-4 py-2 text-xs font-medium text-amber-200 bg-amber-950/60 border border-amber-800/50 hover:bg-amber-900 rounded-full transition-colors"
              >
                Order Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-400/60 font-light">
          <p>© {new Date().getFullYear()} Cafe ElleBee, RDC Raj Nagar, Ghaziabad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for coffee lovers & cozy souls
          </p>
        </div>
      </div>
    </footer>
  );
}
