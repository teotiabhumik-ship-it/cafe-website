import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Calendar, ShoppingBag, Menu as MenuIcon, X, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReserve, onOpenDelivery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Cafe', href: '#gallery' },
    { name: 'Menu', href: '#menu' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Location & Map', href: '#map-location' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0e0d]/95 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0c0b0a]/90 via-[#0c0b0a]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1e1b18] border border-stone-700/80 flex items-center justify-center text-[#c8a97e] group-hover:border-[#c8a97e] transition-colors">
              <Coffee className="w-5 h-5 text-[#c8a97e]" />
            </div>
            <div>
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-wider text-[#f5f2eb] group-hover:text-[#c8a97e] transition-colors">
                Cafe ElleBee
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-stone-400 font-sans font-medium -mt-1">
                RDC • Raj Nagar, Ghaziabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-stone-300 hover:text-[#f5f2eb] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c8a97e] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions: Live Status & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Open Status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171513] border border-stone-800 text-xs text-stone-300 font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>Open • 11 AM - 11 PM</span>
            </div>

            {/* Order Online Button */}
            <button
              onClick={onOpenDelivery}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-200 hover:text-white bg-[#191715] hover:bg-[#221f1c] border border-stone-700/80 rounded-full transition-all duration-200"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#c8a97e]" />
              <span>Order Online</span>
            </button>

            {/* Book Table Button (Refined Cream & Dark Obsidian) */}
            <button
              onClick={onOpenReserve}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] rounded-full shadow-md hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0c0b0a]" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenReserve}
              className="px-3 py-1.5 text-xs font-semibold text-[#0c0b0a] bg-[#f5efe6] rounded-full"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6 text-stone-300" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12100e] border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between py-2 border-b border-stone-800/80 text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c8a97e]" />
              Daily: 11:00 AM – 11:00 PM
            </span>
            <span className="text-[11px] text-stone-400">RDC Raj Nagar</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium text-stone-200 hover:bg-[#1a1714] hover:text-[#f5f2eb] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDelivery();
              }}
              className="w-full py-2.5 text-xs font-medium text-stone-200 bg-[#1a1714] border border-stone-700 rounded-lg flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#c8a97e]" />
              Order Food
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#0c0b0a] bg-[#f5efe6] rounded-lg flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0c0b0a]" />
              Book Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
