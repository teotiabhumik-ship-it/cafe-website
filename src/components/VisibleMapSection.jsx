import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Copy, Check, Car, ExternalLink, ShieldCheck } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function VisibleMapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="map-location" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-900">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181513] border border-stone-800 text-stone-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#c8a97e]" />
          Location & Live Map
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5] mb-4">
          Visit Us in RDC, Raj Nagar
        </h2>
        <p className="text-sm sm:text-base text-stone-300/80 font-light max-w-xl mx-auto leading-relaxed">
          Situated on the Ground Floor in the bustling commercial heart of RDC Ghaziabad. Use the live map below for instant turn-by-turn navigation.
        </p>
      </div>

      {/* Main Grid: Details Card + Directly Embedded Interactive Google Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Location, Hours & Direct Hotline */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-[#141210] border border-stone-800/80 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            {/* Live Open Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>Open Today • 11:00 AM – 11:00 PM</span>
            </div>

            {/* Address Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#1f1b17] border border-stone-700/80 flex items-center justify-center text-[#c8a97e] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#fbf9f5]">
                    Cafe ElleBee
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300/80 font-light mt-1 leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#c8a97e] mt-1 font-medium">
                    Landmark: Ground Floor, RDC Commercial Hub, Raj Nagar
                  </p>
                </div>
              </div>

              {/* 1-Click Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1b1815] hover:bg-[#221f1c] border border-stone-700/80 text-stone-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors mt-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Address Copied! Paste in Uber / Ola</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#c8a97e]" />
                    <span>Copy Full Address for Cab Booking</span>
                  </>
                )}
              </button>
            </div>

            {/* Hours Block */}
            <div className="p-4 rounded-2xl bg-[#1a1714] border border-stone-800 space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-200">
                <Clock className="w-4 h-4 text-[#c8a97e]" />
                <span>Operating Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-300 font-light pt-1">
                <span>Monday – Sunday</span>
                <span className="font-medium text-[#fbf9f5]">11:00 AM – 11:00 PM</span>
              </div>
              <p className="text-[11px] text-stone-400 italic">
                Dine-in, takeaway, and delivery active all day.
              </p>
            </div>

            {/* Direct Phone Numbers */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-200">
                <Phone className="w-4 h-4 text-[#c8a97e]" />
                <span>Call for Table Inquiries</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {CAFE_INFO.phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="p-2.5 rounded-xl bg-[#181513] hover:bg-[#221f1c] border border-stone-800 text-xs text-stone-200 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#c8a97e]" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Parking & Transit Advice */}
            <div className="flex items-start gap-2.5 text-xs text-stone-400 pt-3 border-t border-stone-800/80">
              <Car className="w-4 h-4 text-[#c8a97e] shrink-0 mt-0.5" />
              <span>
                Dedicated open-air and complex parking bays are available throughout RDC. Convenient auto-rickshaw and cab drops right at the ground floor entrance.
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-stone-800">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] shadow-xl flex items-center justify-center gap-2 text-xs sm:text-sm transition-all"
            >
              <Navigation className="w-4 h-4 text-[#0c0b0a]" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0c0b0a]" />
            </a>
          </div>
        </div>

        {/* Right Column: DIRECTLY VISIBLE INTERACTIVE GOOGLE MAP */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative min-h-[480px] lg:min-h-full flex flex-col group bg-[#161412]">
          
          {/* Top Bar on Map */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-[#12100e]/90 backdrop-blur-md border border-stone-700/80 text-xs text-stone-200 shadow-xl flex items-center gap-2 pointer-events-auto">
              <MapPin className="w-3.5 h-3.5 text-[#c8a97e]" />
              <span className="font-semibold text-white">Cafe ElleBee</span>
              <span className="text-stone-400">• RDC Raj Nagar</span>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#f5efe6] text-[#0c0b0a] font-semibold text-xs shadow-xl hover:bg-[#ebe1d2] transition-colors pointer-events-auto flex items-center gap-1.5"
            >
              <span>Get Directions</span>
              <Navigation className="w-3 h-3 text-[#0c0b0a]" />
            </a>
          </div>

          {/* Fully Visible Interactive Google Map iframe */}
          <iframe
            title="Cafe ElleBee Location Map"
            src={CAFE_INFO.googleMapsEmbedUrl}
            className="w-full h-full min-h-[480px] filter contrast-[1.02] brightness-[0.92]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Bottom Bar on Map */}
          <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl bg-[#12100e]/90 backdrop-blur-md border border-stone-800 text-xs text-stone-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Business Listing on Google Maps
            </span>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#c8a97e] underline hover:text-white"
            >
              Enlarge Map
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
