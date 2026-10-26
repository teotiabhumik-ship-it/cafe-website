import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import AmbientCursor from './components/AmbientCursor';
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

  // Initialize Lenis smooth scroll and expose to window for smooth anchor navigation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
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
    <div className="min-h-screen bg-[#0c0b0a] text-[#ede8e1] font-sans selection:bg-[#c8a97e] selection:text-black relative">
      {/* Subtle Ambient Light Follower */}
      <AmbientCursor />

      {/* Top Fixed Navigation with Smooth Animated Section Scrolling */}
      <Navbar
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenDelivery={() => setIsDeliveryOpen(true)}
      />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        {/* 1. Hero with Real Cafe Interior Backdrop & Steam Physics */}
        <Hero
          onOpenReserve={() => setIsReserveOpen(true)}
        />

        {/* 2. Authentic Pictures of the Cafe & Ambiance Tour */}
        <CafeGallerySection />

        {/* 3. Curated Menu with Search & Bestseller Toggle */}
        <MenuSection
          onOpenDelivery={() => setIsDeliveryOpen(true)}
        />

        {/* 4. Celebrations & Private Party Lounge Packages */}
        <PartySection
          onOpenReserve={() => setIsReserveOpen(true)}
        />

        {/* 5. DIRECTLY VISIBLE INTERACTIVE GOOGLE MAP & LOCATION HUB */}
        <VisibleMapSection />

        {/* 6. Guest Reviews & 4.6-Star Google Rating */}
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
