import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CafeGallerySection from './components/CafeGallerySection';
import MenuSection from './components/MenuSection';
import PartySection from './components/PartySection';
import VisibleMapSection from './components/VisibleMapSection';
import ReviewsSection from './components/ReviewsSection';
import ReservationModal from './components/ReservationModal';
import DeliveryModal from './components/DeliveryModal';
import Footer from './components/Footer';

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  // Initialize Lenis smooth scroll for seamless navigation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] relative antialiased">
      {/* Top Fixed Minimal Navigation */}
      <Navbar
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenDelivery={() => setIsDeliveryOpen(true)}
      />

      {/* Main Minimalist Flow */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero
          onOpenReserve={() => setIsReserveOpen(true)}
        />

        {/* 2. Spaces & Atmosphere Gallery */}
        <CafeGallerySection />

        {/* 3. Curated Menu */}
        <MenuSection
          onOpenDelivery={() => setIsDeliveryOpen(true)}
        />

        {/* 4. Celebrations & Private Gatherings */}
        <PartySection
          onOpenReserve={() => setIsReserveOpen(true)}
        />

        {/* 5. DIRECTLY VISIBLE INTERACTIVE GOOGLE MAP & LOCATION */}
        <VisibleMapSection />

        {/* 6. Guest Testimonials & Praise */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenDelivery={() => setIsDeliveryOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
      />

      {/* Quick Delivery Platform Modal */}
      <DeliveryModal
        isOpen={isDeliveryOpen}
        onClose={() => setIsDeliveryOpen(false)}
      />
    </div>
  );
}
