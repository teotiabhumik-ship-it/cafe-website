import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ShoppingBag, Utensils, Coffee, ChevronRight } from 'lucide-react';
import TiltCard from './motion/TiltCard';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';

export default function MenuSection({ onOpenDelivery }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bestsellerOnly, setBestsellerOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBestseller = !bestsellerOnly || (item.tag && item.tag.toLowerCase().includes('bestseller'));
      return matchesCategory && matchesSearch && matchesBestseller;
    });
  }, [activeCategory, searchQuery, bestsellerOnly]);

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-900">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181513] border border-stone-800 text-stone-300 text-xs font-semibold tracking-widest uppercase mb-4"
        >
          <Utensils className="w-3.5 h-3.5 text-[#c8a97e]" />
          Culinary Craft
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5] mb-4"
        >
          Curated Food & Artisan Sips
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-stone-300/80 font-light max-w-xl mx-auto leading-relaxed"
        >
          From freshly ground single-origin espresso to golden stone-baked pizzas and our famous crispy corn — explore the complete menu below.
        </motion.p>
      </div>

      {/* Search & Bestseller Controls */}
      <div className="max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search coffee, crispy corn, pasta, burger..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#161412] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#c8a97e] transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        <button
          onClick={() => setBestsellerOnly(!bestsellerOnly)}
          className={`px-4 py-3 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 border ${
            bestsellerOnly
              ? 'bg-[#f5efe6] text-[#0c0b0a] font-semibold border-[#f5efe6]'
              : 'bg-[#161412] text-stone-300 border-stone-800 hover:border-stone-600'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${bestsellerOnly ? 'fill-[#0c0b0a]' : 'text-[#c8a97e]'}`} />
          <span>Bestsellers Only</span>
        </button>
      </div>

      {/* Category Tabs with Shared Layout Morphing (layoutId) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start sm:justify-center mb-12">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive ? 'text-[#0c0b0a] font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMenuTabPill"
                  className="absolute inset-0 bg-[#f5efe6] rounded-full shadow-md"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Tilt Menu Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="rounded-2xl bg-[#141210] border border-stone-800/80 hover:border-stone-600/80 overflow-hidden shadow-xl h-full flex flex-col justify-between">
                  {/* Food Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#1a1714]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/30" />

                    {/* Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/70 backdrop-blur-md text-stone-200 border border-stone-700">
                      {item.tag}
                    </span>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md flex items-center gap-1 text-[11px] font-semibold text-stone-200">
                      <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
                      <span>{item.rating}</span>
                    </div>

                    {/* Veg indicator */}
                    <div className="absolute bottom-2 left-3 flex items-center gap-1 text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-emerald-800/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Pure Veg</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#fbf9f5] group-hover:text-[#c8a97e] transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-serif-title text-base font-bold text-[#fbf9f5] shrink-0">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                      <span className="text-[10px] text-stone-500 uppercase tracking-widest font-sans">
                        Freshly Prepared
                      </span>
                      <button
                        onClick={onOpenDelivery}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-200 bg-[#1c1916] hover:bg-[#26231f] border border-stone-700 transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#c8a97e]" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-stone-400">
              <Coffee className="w-10 h-10 mx-auto text-stone-500 mb-3 opacity-60 animate-pulse" />
              <p className="font-serif-title text-lg font-semibold text-stone-200">No dishes match your selection</p>
              <p className="text-xs text-stone-400 mt-1">Try resetting the filters or searching for another dish.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setBestsellerOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-full text-xs font-semibold text-[#0c0b0a] bg-[#f5efe6]"
              >
                Reset Menu Filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Online Delivery Platform Banner with Subtle Hover Lift */}
      <motion.div 
        whileHover={{ y: -3 }}
        className="mt-16 p-8 rounded-3xl bg-[#141210] border border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl transition-shadow hover:shadow-stone-900/50"
      >
        <div>
          <h3 className="font-serif-title text-xl font-bold text-[#fbf9f5] mb-1">
            Want hot food delivered to your door?
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            We deliver across Raj Nagar, RDC, Kavi Nagar, and surrounding Ghaziabad areas via Swiggy & Zomato.
          </p>
        </div>
        <button
          onClick={onOpenDelivery}
          className="px-6 py-3.5 rounded-full font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] shadow-md flex items-center gap-2 text-xs sm:text-sm shrink-0 transition-all hover:scale-105 active:scale-95"
        >
          <ShoppingBag className="w-4 h-4 text-[#0c0b0a]" />
          <span>Order on Swiggy / Zomato</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>

    </section>
  );
}
