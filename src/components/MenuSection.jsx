import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Utensils, Coffee, ChevronRight, ShoppingBag } from 'lucide-react';
import { useUiMode } from '../context/UiModeContext';
import MinimalFoodCard from './motion/MinimalFoodCard';
import OutOfBoundsFoodCard from './motion/OutOfBoundsFoodCard';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';

export default function MenuSection({ onOpenDelivery }) {
  const { isMinimal } = useUiMode();
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
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {isMinimal ? (
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#c8a97e] mb-3 block font-medium">
            The Menu • Artisan Kitchen & Sips
          </span>
        ) : (
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
        )}
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
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#141210] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:border-[#c8a97e] transition-all shadow-inner"
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
              : 'bg-[#141210] text-stone-300 border-stone-800 hover:border-stone-600'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${bestsellerOnly ? 'fill-[#0c0b0a]' : 'text-[#c8a97e]'}`} />
          <span>Bestsellers Only</span>
        </button>
      </div>

      {/* Category Tabs with Shared Layout Morphing */}
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

      {/* Menu Cards Grid: Minimal Grid or 3D Out-Of-Bounds depending on UI mode */}
      <motion.div
        layout
        className={
          isMinimal
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16 pt-4'
        }
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
                transition={{ duration: 0.25 }}
              >
                {isMinimal ? (
                  <MinimalFoodCard
                    item={item}
                    onOpenDelivery={onOpenDelivery}
                  />
                ) : (
                  <OutOfBoundsFoodCard
                    item={item}
                    onOpenDelivery={onOpenDelivery}
                  />
                )}
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

      {/* Online Delivery Platform Banner */}
      <motion.div 
        whileHover={{ y: -3 }}
        className={`mt-16 rounded-3xl bg-[#12100e] border border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl transition-shadow ${
          isMinimal ? 'p-6 sm:p-7' : 'p-8'
        }`}
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
