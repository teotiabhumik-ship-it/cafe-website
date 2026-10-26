import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ShoppingBag, Utensils, Coffee, ChevronRight, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, CAFE_INFO } from '../data/cafeData';

export default function MenuView({ onOpenDelivery }) {
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
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <Utensils className="w-3.5 h-3.5 text-amber-400" />
          The Culinary Collection
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
          Artisanal Brews & Gourmet Comfort
        </h1>
        <p className="text-sm sm:text-base text-amber-200/70 font-light max-w-xl mx-auto leading-relaxed">
          Crafted fresh to order in RDC Raj Nagar. Explore our full range of specialty coffees, signature shakes, and hot kitchen delicacies.
        </p>
      </div>

      {/* Control Bar: Search & Bestseller Toggle */}
      <div className="max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search coffee, crispy corn, pasta, burger..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#160f0c] border border-amber-800/40 text-amber-100 placeholder-amber-400/40 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-amber-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Bestseller Filter Toggle */}
        <button
          onClick={() => setBestsellerOnly(!bestsellerOnly)}
          className={`px-4 py-3 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 border ${
            bestsellerOnly
              ? 'bg-amber-400 text-black font-semibold border-amber-400'
              : 'bg-[#160f0c] text-amber-200 border-amber-800/40 hover:border-amber-600'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${bestsellerOnly ? 'fill-black' : 'text-amber-400'}`} />
          <span>Bestsellers Only</span>
        </button>
      </div>

      {/* Category Tabs (Horizontally Scrollable) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start sm:justify-center mb-12">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-amber-950/30 text-amber-200/80 hover:text-white hover:bg-amber-900/40 border border-amber-900/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Menu Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + searchQuery + bestsellerOnly}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#140e0b] border border-amber-900/30 hover:border-amber-600/50 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Food Image */}
                <div className="relative h-48 w-full overflow-hidden bg-amber-950/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140e0b] via-transparent to-black/30" />

                  {/* Tag Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/70 backdrop-blur-md text-amber-300 border border-amber-700/50">
                    {item.tag}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md flex items-center gap-1 text-[11px] font-semibold text-amber-300">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>

                  {/* Veg Indicator */}
                  <div className="absolute bottom-2 left-3 flex items-center gap-1 text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-emerald-600/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Pure Veg</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif-title text-base sm:text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif-title text-base font-bold text-amber-400 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-amber-200/70 font-light leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-3 border-t border-amber-950/80 flex items-center justify-between">
                    <span className="text-[10px] text-amber-400/80 uppercase tracking-widest font-sans">
                      Freshly Prepared
                    </span>
                    <button
                      onClick={onOpenDelivery}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 bg-amber-950/60 hover:bg-amber-900/80 border border-amber-800/60 hover:border-amber-500 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-amber-400" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-amber-300/70">
              <Coffee className="w-10 h-10 mx-auto text-amber-500 mb-3 opacity-60 animate-pulse" />
              <p className="font-serif-title text-lg font-semibold text-amber-100">No dishes match your selection</p>
              <p className="text-xs text-amber-300/60 mt-1">Try resetting the filters or searching for another dish.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setBestsellerOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-full text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300"
              >
                Reset Menu Filters
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Delivery Card Banner */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#18100c] to-amber-950/40 border border-amber-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <h3 className="font-serif-title text-xl font-bold text-amber-100 mb-1">
            Craving these flavors at home or office?
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/70 font-light">
            We deliver across Raj Nagar, RDC, Kavi Nagar, and surrounding Ghaziabad areas via Swiggy & Zomato.
          </p>
        </div>
        <button
          onClick={onOpenDelivery}
          className="px-6 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md flex items-center gap-2 text-xs sm:text-sm shrink-0"
        >
          <ShoppingBag className="w-4 h-4 text-black" />
          <span>Order on Swiggy / Zomato</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
