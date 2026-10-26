import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Copy, Check, Car, ExternalLink, ShieldCheck } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function MapLocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090706]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-medium tracking-widest uppercase mb-4"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Visit Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-4"
          >
            Find Your Way to <span className="text-amber-400">Cafe ElleBee</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-200/70 text-sm sm:text-base font-light"
          >
            Conveniently situated on the Ground Floor in RDC, Raj Nagar — Ghaziabad's most vibrant commercial and food hub.
          </motion.p>
        </div>

        {/* Map & Info Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 p-6 sm:p-8 rounded-3xl bg-[#140e0b] border border-amber-800/40 shadow-2xl relative"
          >
            <div>
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
                <span>Open Today: 11:00 AM – 11:00 PM</span>
              </div>

              {/* Address Block */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-title text-lg font-bold text-amber-100">
                      Cafe ElleBee
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200/80 font-light mt-1 leading-relaxed">
                      {CAFE_INFO.address}
                    </p>
                    <p className="text-[11px] text-amber-400/80 mt-1">
                      Landmark: Ground Floor, RDC Raj Nagar
                    </p>
                  </div>
                </div>

                {/* 1-Click Copy Button */}
                <button
                  onClick={handleCopyAddress}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-amber-950/50 hover:bg-amber-900/60 border border-amber-800/50 text-amber-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Address Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Copy Address for Cabs (Uber / Ola)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Hours Block */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/30 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Hours of Operation</span>
                </div>
                <div className="flex items-center justify-between text-xs text-amber-100 font-light pt-1">
                  <span>Monday – Sunday</span>
                  <span className="font-medium text-amber-300">11:00 AM – 11:00 PM</span>
                </div>
                <div className="text-[11px] text-amber-400/60 italic">
                  Dine-in, takeaway, and delivery active all day.
                </div>
              </div>

              {/* Contact Hotline & Reservations */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Us for Table Inquiries</span>
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

              {/* Parking and Transit Note */}
              <div className="mt-6 flex items-start gap-2.5 text-xs text-amber-300/70">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Convenient public parking zones and valet slots are available right within the RDC commercial complex.
                </span>
              </div>
            </div>

            {/* Direct Google Maps Action CTA */}
            <div className="pt-4 border-t border-amber-950">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 text-xs sm:text-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Open Directly in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed with Dark & Warm Theming */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-800/50 shadow-2xl relative min-h-[420px] lg:min-h-full flex flex-col group"
          >
            {/* Top Bar on Map */}
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

            {/* Embedded Google Map iframe */}
            <iframe
              title="Cafe ElleBee Location Map"
              src={CAFE_INFO.googleMapsEmbedUrl}
              className="w-full h-full min-h-[420px] filter contrast-[1.05] brightness-[0.9] invert-[0.9] hue-rotate-[185deg]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-900/50 text-xs text-amber-200/90 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Business Location on Google Maps
              </span>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 underline hover:text-white"
              >
                Enlarge Map
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
