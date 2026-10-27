import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ShoppingBag, UtensilsCrossed, X, Plus, Minus, MessageCircle, ExternalLink } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, CAFE_INFO } from '../data/cafeData';

export default function MenuSection({ onOpenDelivery }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bestsellerOnly, setBestsellerOnly] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handleOpenDish = (dish) => {
    setSelectedDish(dish);
    setQuantity(1);
  };

  const handleCloseDish = () => {
    setSelectedDish(null);
    setQuantity(1);
  };

  const handleWhatsAppDishOrder = (dish, qty) => {
    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'd like to order:\n\n` +
      `🍽️ ${qty}x ${dish.name} (₹${dish.price * qty})\n` +
      `Category: ${dish.category}\n\n` +
      `Please let me know preparation time and delivery/takeaway details. Thank you!`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

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
          Single-origin espresso, gourmet pizzas, dim sums, and signature pastas prepared fresh to order. Click any dish for details and quick ordering.
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
                className="relative px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] cursor-pointer"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setBestsellerOnly(!bestsellerOnly)}
            className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] cursor-pointer ${
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
                onClick={() => handleOpenDish(item)}
                className="group flex flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-muted)] p-4 transition-colors cursor-pointer"
              >
                {/* Food Photo Container with Micro-zoom */}
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

                  {/* Gentle hover overlay prompt */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors pointer-events-none flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--color-paper)]/95 text-[var(--color-ink)] border border-[var(--color-rule)] shadow-md">
                      View dish details
                    </span>
                  </div>
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDish(item);
                      }}
                      className="btn-secondary text-xs py-1 px-3 group-hover:border-[var(--color-muted)] transition-colors"
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

      {/* Interactive Dish Quick View Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 bg-black/85">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg w-full bg-[var(--color-paper-2)] rounded-[var(--radius-card)] border border-[var(--color-rule)] shadow-[var(--shadow-card)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseDish}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[var(--color-paper)]/85 text-[var(--color-ink)] border border-[var(--color-rule)] hover:bg-[var(--color-paper-3)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                aria-label="Close dish details"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Large Authentic Dish Photo */}
              <div className="relative h-64 sm:h-72 w-full bg-[var(--color-paper-3)]">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper-2)] via-transparent to-transparent pointer-events-none" />
                
                {selectedDish.tag && (
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-[var(--radius-pill)] text-xs text-[var(--color-ink)] bg-[var(--color-paper)]/90 border border-[var(--color-rule)] lowercase">
                    {selectedDish.tag}
                  </span>
                )}
              </div>

              {/* Dish Content Details */}
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-normal text-[var(--color-ink)]">
                    {selectedDish.name}
                  </h3>
                  <span className="price-figure text-2xl shrink-0">
                    ₹{selectedDish.price * quantity}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-ink-2)] font-normal leading-relaxed mb-6">
                  {selectedDish.description}
                </p>

                {/* Dietary and Category Attributes */}
                <div className="flex flex-wrap items-center gap-3 py-3 border-y border-[var(--color-rule)] text-xs text-[var(--color-muted)] mb-6">
                  <span className="badge-tag">pure veg</span>
                  <span className="badge-tag capitalize">{selectedDish.category}</span>
                  <span className="badge-tag">prepared to order</span>
                </div>

                {/* Quantity Controller & Order Actions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-muted)] font-medium">Quantity:</span>
                    <div className="flex items-center gap-3 bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-[var(--radius-pill)] px-3 py-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-[var(--color-muted)] hover:text-[var(--color-ink)] focus-visible:outline-none cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span className="font-[var(--font-display)] text-sm text-[var(--color-ink)] min-w-[16px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-[var(--color-muted)] hover:text-[var(--color-ink)] focus-visible:outline-none cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => handleWhatsAppDishOrder(selectedDish, quantity)}
                      className="btn-primary flex-1 py-3 justify-center text-xs"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Order on WhatsApp (₹{selectedDish.price * quantity})</span>
                    </button>
                    <button
                      onClick={() => {
                        handleCloseDish();
                        onOpenDelivery();
                      }}
                      className="btn-secondary py-3 px-4 justify-center text-xs"
                    >
                      <span>Delivery platforms</span>
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
