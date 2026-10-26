import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Calendar, ShoppingBag, Menu as MenuIcon, X, Clock, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ activeView, setActiveView, onOpenReserve, onOpenDelivery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const views = [
    { id: 'home', label: 'The Sanctuary' },
    { id: 'menu', label: 'Artisan Menu' },
    { id: 'space', label: 'The Space' },
    { id: 'celebrations', label: 'Celebrations' },
    { id: 'visit', label: 'Find Us & Map' },
  ];

  const handleSelectView = (id) => {
    setActiveView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090706]/95 backdrop-blur-md border-b border-amber-900/30 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#090706]/90 via-[#090706]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <button
            onClick={() => handleSelectView('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/25 group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-amber-50 animate-pulse" />
            </div>
            <div>
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-wider text-amber-100 group-hover:text-amber-400 transition-colors">
                Cafe ElleBee
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-amber-400/80 -mt-1 font-sans font-medium">
                RDC • Raj Nagar
              </span>
            </div>
          </button>

          {/* Desktop Navigation Pill Bar (Clean & Separated) */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#140e0b]/80 border border-amber-900/40 backdrop-blur-md shadow-inner">
            {views.map((tab) => {
              const isActive = activeView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectView(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-amber-200/80 hover:text-white hover:bg-amber-950/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Status & Modals */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/50 border border-amber-800/40 text-xs text-amber-200 font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>Open • 11 AM - 11 PM</span>
            </div>

            {/* Order Online Button */}
            <button
              onClick={onOpenDelivery}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-amber-200 hover:text-white bg-amber-950/40 hover:bg-amber-900/60 border border-amber-700/50 rounded-full transition-all duration-200"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Order Online</span>
            </button>

            {/* Book Table Button */}
            <button
              onClick={onOpenReserve}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/25 hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenReserve}
              className="px-3 py-1.5 text-xs font-semibold text-black bg-amber-400 rounded-full"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-amber-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0a09] border-b border-amber-900/50 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between py-2 border-b border-amber-950/70 text-xs text-amber-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Daily: 11:00 AM – 11:00 PM
            </span>
            <span className="text-[11px] text-amber-400/80">RDC Raj Nagar</span>
          </div>

          <div className="flex flex-col space-y-1">
            {views.map((tab) => {
              const isActive = activeView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectView(tab.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-400 text-black font-semibold'
                      : 'text-amber-100 hover:bg-amber-950/40 hover:text-amber-300'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDelivery();
              }}
              className="w-full py-2.5 text-xs font-medium text-amber-200 bg-amber-950/60 border border-amber-800/50 rounded-lg flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              Order Food
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full py-2.5 text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              Book Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
