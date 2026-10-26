import React, { useState, useEffect } from 'react';
import { Coffee, Calendar, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReserve, onOpenDelivery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Spaces', href: '#gallery' },
    { name: 'Menu', href: '#menu' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Location', href: '#map-location' },
    { name: 'Reviews', href: '#reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['gallery', 'menu', 'celebrations', 'map-location', 'reviews'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || !href) {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, {
          offset: -80,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#090807]/95 backdrop-blur-md border-b border-stone-800/60 py-3.5'
          : 'bg-[#090807]/60 backdrop-blur-sm border-b border-stone-900/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo in Timeless Tracked Typography */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-baseline gap-2.5 cursor-pointer group"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] uppercase text-[#f5f2eb] group-hover:text-[#c8a97e] transition-colors">
              ElleBee
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-mono hidden sm:inline">
              RDC • Raj Nagar
            </span>
          </a>

          {/* Minimalist Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 cursor-pointer ${
                    isActive ? 'text-[#f5f2eb] font-semibold' : 'text-stone-400 hover:text-[#f5f2eb]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#c8a97e]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Minimal Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[11px] font-mono text-stone-400 tracking-wider hidden lg:inline mr-2">
              11:00 – 23:00
            </span>

            <button
              onClick={onOpenDelivery}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-stone-300 hover:text-white border border-stone-800 hover:border-stone-700 transition-colors"
            >
              Order Food
            </button>

            <button
              onClick={onOpenReserve}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#090807] bg-[#f5f2eb] hover:bg-[#ded8ce] transition-colors shadow-sm"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenReserve}
              className="px-3 py-1 text-xs font-medium text-[#090807] bg-[#f5f2eb] rounded-full"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-300 hover:text-white rounded-md"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0b0a] border-b border-stone-800 px-6 py-5 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono tracking-widest uppercase text-stone-300 hover:text-white py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDelivery();
              }}
              className="w-1/2 py-2 text-xs font-mono text-stone-300 border border-stone-800 rounded-full text-center"
            >
              Order Online
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-1/2 py-2 text-xs font-medium text-[#090807] bg-[#f5f2eb] rounded-full text-center"
            >
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
