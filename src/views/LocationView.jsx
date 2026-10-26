import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Copy, Check, Car, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { CAFE_INFO, REVIEWS } from '../data/cafeData';

export default function LocationView() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          Location & Google Maps
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
          Finding Cafe ElleBee
        </h1>
        <p className="text-sm sm:text-base text-amber-200/70 font-light max-w-xl mx-auto leading-relaxed">
          Situated on the Ground Floor in RDC (Raj Nagar District Centre) — Ghaziabad's premier hub for food, leisure, and friends' gatherings.
        </p>
      </div>

      {/* Grid: Map & Detailed Visit Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Left: Interactive Details Card */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-[#140e0b] border border-amber-800/40 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            {/* Live Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>Open Today • 11:00 AM – 11:00 PM</span>
            </div>

            {/* Address */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-amber-100">
                    Cafe ElleBee
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-200/80 font-light mt-1 leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                  <p className="text-[11px] text-amber-400/90 mt-1">
                    Landmark: Ground Floor, RDC Commercial Hub
                  </p>
                </div>
              </div>

              {/* 1-Click Copy */}
              <button
                onClick={handleCopyAddress}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/50 text-amber-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Address Copied! Paste in Uber / Ola</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copy Full Address for Cab Booking</span>
                  </>
                )}
              </button>
            </div>

            {/* Hours Block */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/30 space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Operating Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs text-amber-100 font-light pt-1">
                <span>Monday to Sunday</span>
                <span className="font-medium text-amber-300">{CAFE_INFO.hours}</span>
              </div>
              <p className="text-[11px] text-amber-400/60 italic">
                Dine-in, takeaway, and delivery active without interruption.
              </p>
            </div>

            {/* Direct Phone Numbers */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Table & Inquiry Hotlines</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {CAFE_INFO.phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="p-2.5 rounded-xl bg-[#1b1310] hover:bg-amber-950/60 border border-amber-800/40 text-xs text-amber-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Parking & Transit Advice */}
            <div className="flex items-start gap-2.5 text-xs text-amber-300/70 pt-2 border-t border-amber-950">
              <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Dedicated open-air and commercial parking bays are available throughout the RDC complex. Easy auto-rickshaw and cab drops right in front.
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-amber-950">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 text-xs sm:text-sm transition-all"
            >
              <Navigation className="w-4 h-4 text-black" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>

        {/* Right: Embedded Styled Google Map */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-800/50 shadow-2xl relative min-h-[480px] lg:min-h-full flex flex-col group">
          {/* Top Pill Overlay */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-amber-700/50 text-xs text-amber-200 shadow-lg flex items-center gap-2 pointer-events-auto">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">Cafe ElleBee</span>
              <span className="text-amber-400/80">• RDC Raj Nagar</span>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-amber-500 text-black font-semibold text-xs shadow-lg hover:bg-amber-400 transition-colors pointer-events-auto flex items-center gap-1"
            >
              <span>Navigate</span>
              <Navigation className="w-3 h-3" />
            </a>
          </div>

          {/* Iframe with Dark Warm Invert Filter */}
          <iframe
            title="Cafe ElleBee Location Map"
            src={CAFE_INFO.googleMapsEmbedUrl}
            className="w-full h-full min-h-[480px] filter contrast-[1.05] brightness-[0.9] invert-[0.9] hue-rotate-[185deg]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Bottom Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-900/50 text-xs text-amber-200/90 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Business Listing on Google Maps
            </span>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-amber-400 underline hover:text-white"
            >
              View Full Map
            </a>
          </div>
        </div>

      </div>

      {/* Guest Reviews Section (Moved here from the main scroll to keep everything clean & contextual) */}
      <div className="pt-12 border-t border-amber-950/70">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Social Proof
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-100 mt-1">
            Ratings & Reviews from Google
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-amber-200 font-semibold">4.6 / 5.0 (1,200+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#140e0b] border border-amber-900/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-amber-100/90 font-light leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-amber-950">
                <span className="font-semibold text-amber-200">{rev.name}</span>
                <span className="text-amber-400/60">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
