import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Music, Sparkles, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function PartySection({ onOpenReserve }) {
  const partyFeatures = [
    "Customised Neon & Balloon Decor Setups",
    "Tailored Party Snack Platters & Mocktails",
    "Dedicated High-Energy Lounge Music Playlist",
    "Complimentary Cake Cutting & Staff Hospitality",
    "Cozy Private Seating Zones for 10 to 40+ Guests",
    "Special Student & Group Discount Combos"
  ];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      "Hi Cafe ElleBee! I'm planning to host a party/celebration at your RDC Raj Nagar cafe. Can you please share package details and availability?"
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  return (
    <section id="parties" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#0b0807] via-[#140e0b] to-[#0b0807] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-600/10 via-rose-600/10 to-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="rounded-3xl border border-amber-800/40 bg-gradient-to-br from-[#18100c] via-[#120d0b] to-[#18100c] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Graphic */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <PartyPopper className="w-3.5 h-3.5 text-amber-400" />
                Celebrations & Private Events
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50 leading-tight">
                Turn Birthdays & Milestones into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-rose-400">Glowing Celebrations</span>
              </h2>

              <p className="text-amber-200/80 font-light text-sm sm:text-base leading-relaxed">
                Make your special day effortless and memorable. From customized neon backdrops to signature finger food menus and lively music, we create the perfect party ambiance for friend circles, families, and colleagues.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {partyFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-200/90">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={onOpenReserve}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Cake className="w-4 h-4 text-black" />
                  <span>Reserve Party Hall / Table</span>
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-medium text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/50 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-amber-700/40 shadow-2xl aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
                  alt="Party Setup at Cafe ElleBee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-amber-900/50">
                  <div className="flex items-center justify-between text-xs text-amber-200">
                    <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      100+ Celebrations Hosted
                    </span>
                    <span>RDC Raj Nagar</span>
                  </div>
                  <p className="text-[11px] text-amber-100/70 mt-1">
                    Direct inquiries & customized quotes via phone or WhatsApp.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
