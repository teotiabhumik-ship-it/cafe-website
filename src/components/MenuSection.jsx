import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ShoppingBag, Coffee, ChevronRight } from 'lucide-react';
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
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-850">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c8a97e] block mb-3 font-medium">
            Artisan Kitchen & Brew Bar
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#fbf9f5]">
            Curated Menu
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md leading-relaxed">
          Single-origin espresso, gourmet thick shakes, stone-baked pizzas, and our signature crispy corn — freshly prepared to order.
        </p>
      </div>

      {/* Minimal Category Tabs & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 pb-4 border-b border-stone-850">
        
        {/* Category Text Links */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#090807] bg-[#f5f2eb] font-semibold'
                    : 'text-stone-400 hover:text-[#f5f2eb]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Minimal Search & Bestseller Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#11100e] border border-stone-800 text-stone-200 placeholder-stone-500 text-xs focus:outline-none focus:border-[#c8a97e] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-stone-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setBestsellerOnly(!bestsellerOnly)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 border whitespace-nowrap ${
              bestsellerOnly
                ? 'bg-[#f5f2eb] text-[#090807] font-semibold border-[#f5f2eb]'
                : 'text-stone-400 border-stone-800 hover:border-stone-700'
            }`}
          >
            <Star className={`w-3 h-3 ${bestsellerOnly ? 'fill-[#090807]' : 'text-[#c8a97e]'}`} />
            <span>Bestsellers</span>
          </button>
        </div>

      </div>

      {/* Minimalist Menu Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col justify-between rounded-2xl bg-[#11100e] border border-stone-850 hover:border-stone-700 p-4 transition-colors duration-200 shadow-sm"
              >
                {/* Rectangular Food Photo */}
                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-[#161412] mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badges */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-sm text-[#c8a97e] border border-stone-800">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-stone-800 flex items-center gap-1 text-[11px] font-mono text-stone-200">
                    <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
                    <span>{item.rating}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-emerald-400 font-mono border border-emerald-950/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Pure Veg</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#f5f2eb] group-hover:text-[#c8a97e] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-[#c8a97e] shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-stone-850 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                      Freshly Sourced
                    </span>
                    <button
                      onClick={onOpenDelivery}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-stone-300 hover:text-white bg-[#191715] hover:bg-[#221f1c] border border-stone-800 hover:border-stone-700 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#c8a97e]" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-stone-400">
              <Coffee className="w-8 h-8 mx-auto text-stone-600 mb-2 opacity-60" />
              <p className="font-serif-title text-base font-semibold text-stone-300">No dishes match your selection</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setBestsellerOnly(false);
                }}
                className="mt-3 px-4 py-1.5 rounded-full text-xs font-mono text-[#090807] bg-[#f5f2eb]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Online Delivery Platform Banner */}
      <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#11100e] border border-stone-850 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c8a97e] block mb-1">
            Doorstep Delivery
          </span>
          <h3 className="font-serif-title text-xl font-bold text-[#fbf9f5] mb-1">
            Order Hot via Swiggy & Zomato
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Fast delivery across Raj Nagar, RDC, Kavi Nagar, and surrounding Ghaziabad areas.
          </p>
        </div>
        <button
          onClick={onOpenDelivery}
          className="px-6 py-3 rounded-full font-medium text-[#090807] bg-[#f5f2eb] hover:bg-[#ded8ce] flex items-center gap-2 text-xs sm:text-sm shrink-0 transition-colors"
        >
          <ShoppingBag className="w-4 h-4 text-[#090807]" />
          <span>Order on Swiggy / Zomato</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
