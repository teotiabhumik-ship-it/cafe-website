import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function VisibleMapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="map-location" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-850">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c8a97e] block mb-3 font-medium">
            Location & Access
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5]">
            Find Us in Raj Nagar
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md leading-relaxed">
          Conveniently located on the Ground Floor in the commercial heart of RDC, Raj Nagar, Ghaziabad. Ample nearby parking available.
        </p>
      </div>

      {/* Main Grid: Details + Directly Embedded Google Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Address, Hours & Contact */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-[#11100e] border border-stone-850 flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            {/* Address */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8a97e] block mb-2">
                Address
              </span>
              <p className="text-sm font-medium text-stone-200 leading-relaxed mb-3">
                {CAFE_INFO.address}
              </p>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Operating Hours */}
            <div className="pt-6 border-t border-stone-850">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8a97e] block mb-2">
                Hours
              </span>
              <p className="text-sm font-medium text-stone-200">
                11:00 AM – 11:00 PM
              </p>
              <p className="text-xs font-mono text-stone-500 mt-0.5">
                Open All 7 Days (Monday – Sunday)
              </p>
            </div>

            {/* Phone */}
            <div className="pt-6 border-t border-stone-850">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8a97e] block mb-2">
                Telephone & Reservations
              </span>
              <div className="flex flex-col gap-1">
                {CAFE_INFO.phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-sm font-mono text-stone-300 hover:text-[#c8a97e] transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Action to open in Google Maps */}
          <div className="pt-6 border-t border-stone-850">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-xs font-mono tracking-wider text-[#090807] bg-[#f5f2eb] hover:bg-[#ded8ce] transition-colors flex items-center justify-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5 text-[#090807]" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-stone-600" />
            </a>
          </div>

        </div>

        {/* Right Column: Directly Visible Google Map */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-850 bg-[#141210] min-h-[420px] lg:min-h-[500px] relative shadow-sm">
          <iframe
            title="Cafe ElleBee Google Maps Location"
            src={CAFE_INFO.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '420px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[25%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
          />
        </div>

      </div>

    </section>
  );
}
