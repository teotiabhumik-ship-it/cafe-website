import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Star, ShoppingBag, Utensils, Coffee, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';

export default function MenuSection({ onOpenDelivery }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b0807]">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-medium tracking-widest uppercase mb-4"
          >
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            Culinary Craft
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-4"
          >
            Curated Flavors & Artisan Sips
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-200/70 text-sm sm:text-base font-light"
          >
            From freshly pulled espresso to golden stone-baked pizzas and our famous crispy corn — explore the complete menu below.
          </motion.p>
        </div>

        {/* Search Bar & Category Navigation */}
        <div className="mb-10 space-y-6">
          
          {/* Quick Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search your favorite coffee, pizza, or dessert..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-[#160f0c] border border-amber-800/40 text-amber-100 placeholder-amber-400/50 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-inner"
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

          {/* Category Tabs (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-amber-950/40 text-amber-200/80 hover:text-white hover:bg-amber-900/40 border border-amber-900/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl bg-[#140e0b] border border-amber-900/30 hover:border-amber-600/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Food Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-amber-950/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140e0b] via-transparent to-black/30" />

                    {/* Tag Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-700/50">
                      {item.tag}
                    </span>

                    {/* Rating Pill */}
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

                  {/* Card Content */}
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

                    {/* Action Button */}
                    <div className="pt-3 border-t border-amber-950/80 flex items-center justify-between">
                      <span className="text-[11px] text-amber-400/80 uppercase tracking-widest font-sans">
                        Fresh Preparation
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
                <p className="font-serif-title text-lg font-semibold text-amber-100">No dishes match your search</p>
                <p className="text-xs text-amber-300/60 mt-1">Try another keyword or reset the category filter.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-full text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300"
                >
                  View All Dishes
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note with Online Delivery Links */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#160f0c] to-amber-950/40 border border-amber-800/40 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="font-serif-title text-base sm:text-lg font-bold text-amber-200 mb-1">
              Want piping hot food delivered right to your doorstep?
            </h4>
            <p className="text-xs text-amber-300/70 font-light">
              We are live on Swiggy and Zomato across Raj Nagar, Kavi Nagar & Ghaziabad.
            </p>
          </div>
          <button
            onClick={onOpenDelivery}
            className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md flex items-center gap-2 text-xs sm:text-sm shrink-0"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Order via Swiggy / Zomato</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
