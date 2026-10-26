import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import AmbientCursor from './components/AmbientCursor';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import SpaceView from './views/SpaceView';
import CelebrationsView from './views/CelebrationsView';
import LocationView from './views/LocationView';
import ReservationModal from './components/ReservationModal';
import DeliveryModal from './components/DeliveryModal';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleSelectView = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0908] text-[#f7ede2] font-sans selection:bg-amber-500 selection:text-black relative">
      {/* Interactive Ambient Amber Light Cursor Follower */}
      <AmbientCursor />

      {/* Top Fixed Navigation with View Switcher */}
      <Navbar
        activeView={activeView}
        setActiveView={handleSelectView}
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenDelivery={() => setIsDeliveryOpen(true)}
      />

      {/* Uncluttered Multi-View Experience with Smooth Transitions */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeView === 'home' && (
              <HomeView
                onSelectView={handleSelectView}
                onOpenReserve={() => setIsReserveOpen(true)}
              />
            )}

            {activeView === 'menu' && (
              <MenuView
                onOpenDelivery={() => setIsDeliveryOpen(true)}
              />
            )}

            {activeView === 'space' && (
              <SpaceView />
            )}

            {activeView === 'celebrations' && (
              <CelebrationsView
                onOpenReserve={() => setIsReserveOpen(true)}
              />
            )}

            {activeView === 'visit' && (
              <LocationView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onSelectView={handleSelectView}
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
