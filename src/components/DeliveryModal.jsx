import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, ExternalLink, Phone, MessageCircle, Clock, Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative max-w-md w-full bg-[#160f0c] rounded-3xl border border-amber-700/50 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-950 via-[#1e1410] to-amber-950 border-b border-amber-800/40 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-black text-amber-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>Doorstep Delivery & Takeaway</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold text-amber-50">
            Order From Cafe ElleBee
          </h3>
          <p className="text-xs text-amber-200/70 mt-1 font-light">
            Enjoy your favorite sips and bites anywhere in Ghaziabad
          </p>
        </div>

        {/* Options */}
        <div className="p-6 space-y-4">
          
          {/* Swiggy Card */}
          <a
            href={CAFE_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-amber-950/30 hover:bg-amber-900/40 border border-orange-500/40 hover:border-orange-500 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-lg font-serif-title">
                S
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-100 group-hover:text-orange-400 transition-colors">
                  Order via Swiggy
                </h4>
                <p className="text-xs text-amber-300/60 font-light">
                  30–40 mins • Lightning fast delivery
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Zomato Card */}
          <a
            href={CAFE_INFO.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-amber-950/30 hover:bg-amber-900/40 border border-red-500/40 hover:border-red-500 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-lg font-serif-title">
                Z
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-100 group-hover:text-red-400 transition-colors">
                  Order via Zomato
                </h4>
                <p className="text-xs text-amber-300/60 font-light">
                  Live menu tracking & dining discounts
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* WhatsApp Direct Takeaway */}
          <button
            onClick={handleWhatsAppOrder}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-amber-950/30 hover:bg-emerald-950/40 border border-emerald-600/40 hover:border-emerald-500 transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-100 group-hover:text-emerald-400 transition-colors">
                  Direct WhatsApp Takeaway
                </h4>
                <p className="text-xs text-amber-300/60 font-light">
                  Pre-order and pick up fresh on your way
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Call Directly */}
          <div className="pt-2 text-center">
            <p className="text-xs text-amber-300/60 mb-2">Prefer to call the cafe kitchen directly?</p>
            <a
              href="tel:+919354460764"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 93544 60764</span>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
