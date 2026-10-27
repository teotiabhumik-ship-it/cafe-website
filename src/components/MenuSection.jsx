import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ShoppingBag, UtensilsCrossed } from 'lucide-react';
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
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesBestseller = !bestsellerOnly || (item.tag && item.tag.toLowerCase().includes('bestseller'));
      return matchesCategory && matchesSearch && matchesBestseller;
    });
  }, [activeCategory, searchQuery, bestsellerOnly]);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Curated kitchen menu
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] font-normal max-w-md leading-relaxed">
          Single-origin espresso, gourmet pizzas, dim sums, and signature pastas prepared fresh to order.
        </p>
      </div>

      {/* Category Glider Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--color-rule)]">
        
        {/* Kinetic Category Pills with Spring Glider */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] active:opacity-80 disabled:opacity-50 cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-[var(--radius-pill)] bg-[var(--color-accent)] -z-0"
                  />
                )}
                <span className={`relative z-10 transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent-ink)] font-semibold'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                }`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Bestseller Toggle */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-60">
            <Search className="w-3.5 h-3.5 text-[var(--color-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-muted)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[var(--color-muted)] hover:text-[var(--color-ink)] active:opacity-75 disabled:opacity-50"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setBestsellerOnly(!bestsellerOnly)}
            className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] active:opacity-85 disabled:opacity-50 cursor-pointer ${
              bestsellerOnly
                ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-semibold'
                : 'bg-[var(--color-paper-2)] text-[var(--color-muted)] border border-[var(--color-rule)] hover:text-[var(--color-ink)]'
            }`}
          >
            <Star className={`w-3 h-3 ${bestsellerOnly ? 'fill-current' : 'text-[var(--color-accent)]'}`} aria-hidden="true" />
            <span>Bestsellers</span>
          </button>
        </div>

      </div>

      {/* Animated Dynamic Menu Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-muted)] p-4 transition-colors"
              >
                {/* Food Photo Container */}
                <div className="relative h-48 w-full rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-paper-3)] mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading={idx === 0 ? undefined : "lazy"}
                    fetchPriority={idx === 0 ? "high" : undefined}
                  />
                  
                  {/* Tag pill */}
                  {item.tag && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[var(--radius-pill)] text-[11px] text-[var(--color-ink)] bg-[var(--color-paper)]/85 border border-[var(--color-rule)] lowercase">
                      {item.tag}
                    </span>
                  )}

                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-[var(--radius-pill)] text-[10px] text-[var(--color-ink-2)] bg-[var(--color-paper)]/90 border border-[var(--color-rule)]">
                    Pure veg
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <h3 className="text-base font-normal text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                        {item.name}
                      </h3>
                      <span className="price-figure shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-ink-2)] font-normal leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-[var(--color-rule)] flex items-center justify-between text-xs">
                    <span className="text-xs text-[var(--color-muted)]">
                      Freshly prepared
                    </span>
                    <button
                      type="button"
                      onClick={onOpenDelivery}
                      className="btn-secondary text-xs py-1 px-3 group-hover:border-[var(--color-muted)] active:opacity-85 disabled:opacity-50 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[var(--color-accent)]" aria-hidden="true" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-[var(--color-muted)]">
              <UtensilsCrossed className="w-8 h-8 mx-auto text-[var(--color-muted)] mb-2 opacity-50" aria-hidden="true" />
              <p className="text-sm">No dishes found matching your search.</p>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
