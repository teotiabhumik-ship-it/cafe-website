import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onOpenReserve }) {
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const position = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto">
      
      {/* Stage Header Block */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Headline: seven words, Young Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal text-[var(--color-ink)] leading-[1.05] tracking-tight"
        >
          Artisanal coffee and dining in Raj Nagar
        </motion.h1>

        {/* One sentence: ten words, Instrument Sans */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[var(--color-ink-2)] font-normal leading-relaxed max-w-xl mx-auto mt-4 mb-6"
        >
          Freshly pulled espresso, stone-baked pizzas, and booth seating in RDC.
        </motion.p>

        {/* Primary and secondary actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={onOpenReserve}
            className="btn-primary"
          >
            Reserve a table
          </button>
          <a
            href="#menu"
            onClick={(e) => smoothScrollTo(e, '#menu')}
            className="btn-secondary"
          >
            <span>View the menu</span>
            <ArrowDown className="w-3.5 h-3.5 text-[var(--color-muted)]" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Stage Photograph: Authentic Cafe ElleBee Interior */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="group relative w-full h-[340px] sm:h-[460px] lg:h-[500px] rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-rule)] hover:border-[var(--color-muted)] shadow-[var(--shadow-card)] mb-8 bg-[var(--color-paper-2)] transition-colors"
      >
        <img
          src="/images/cafe_interior_main.jpg"
          alt="Cafe ElleBee main dining hall with teal booths and skylight"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)]/75 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
          <p className="font-[var(--font-display)] text-sm sm:text-base text-[var(--color-ink)] font-normal">
            Ground floor dining hall with floral skylight and teal banquettes.
          </p>
        </div>
      </motion.div>

      {/* Meta Strip: 3 Clean Columns with Hairlines, Zero Middle Dots */}
      <div className="pt-4 border-t border-[var(--color-rule)] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--color-muted)] font-normal">
        <div className="sm:text-left">
          <span className="text-[var(--color-ink-2)] font-medium">Hours: </span>
          <span>Daily 11:00 to 23:00</span>
        </div>
        <div className="sm:text-center">
          <a
            href="#map-location"
            onClick={(e) => smoothScrollTo(e, '#map-location')}
            className="hover:text-[var(--color-ink)] transition-colors no-underline"
          >
            <span className="text-[var(--color-ink-2)] font-medium">Location: </span>
            <span>B-19 Ground Floor, RDC Raj Nagar</span>
          </a>
        </div>
        <div className="sm:text-right">
          <span className="text-[var(--color-ink-2)] font-medium">Kitchen: </span>
          <span>100% pure vegetarian casual dining</span>
        </div>
      </div>

    </section>
  );
}
