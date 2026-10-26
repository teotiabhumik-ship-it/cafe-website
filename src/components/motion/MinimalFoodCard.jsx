import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';

export default function MinimalFoodCard({ item, onOpenDelivery }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl bg-[#11100e] border border-stone-800/70 hover:border-stone-600 transition-colors duration-200 p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md"
    >
      {/* Crisp Rectangular Food Image */}
      <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-[#161412] mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Quiet Corner Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium tracking-wide uppercase bg-black/70 backdrop-blur-sm text-stone-300 border border-stone-700/60">
            {item.tag}
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-stone-700/60 flex items-center gap-1 text-[11px] font-medium text-stone-200">
          <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
          <span>{item.rating}</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-[10px] text-emerald-400 font-medium border border-emerald-900/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Pure Veg</span>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="font-serif-title text-base sm:text-lg font-semibold text-[#f5f2eb] group-hover:text-[#c8a97e] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="font-mono text-sm font-semibold text-stone-300 shrink-0">
              ₹{item.price}
            </span>
          </div>
          <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2 mb-4">
            {item.description}
          </p>
        </div>

        {/* Minimal Footer Action */}
        <div className="pt-3 border-t border-stone-800/60 flex items-center justify-between text-xs">
          <span className="text-[11px] text-stone-500 font-sans">
            Made to Order
          </span>
          <button
            onClick={onOpenDelivery}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-stone-200 hover:text-white bg-[#191715] hover:bg-[#23201d] border border-stone-800 hover:border-stone-700 transition-colors"
          >
            <ShoppingBag className="w-3 h-3 text-[#c8a97e]" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
