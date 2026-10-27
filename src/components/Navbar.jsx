import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReserve, onOpenDelivery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Spaces', href: '#gallery' },
    { name: 'Menu', href: '#menu' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Location & hours', href: '#map-location' },
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
      className={`fixed top-0 left-0 right-0 z-[var(--z-sticky-nav)] transition-colors duration-200 ${
        scrolled
          ? 'bg-[var(--color-paper)]/95 backdrop-blur-md border-b border-[var(--color-rule)] py-3'
          : 'bg-[var(--color-paper)]/75 backdrop-blur-sm border-b border-[var(--color-rule)]/50 py-4'
      }`}
    >
      <div className="max-w-[var(--container)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark in Young Serif */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-baseline gap-2.5 cursor-pointer no-underline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm"
          >
            <span className="font-[var(--font-display)] text-xl font-normal text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
              Cafe ElleBee
            </span>
            <span className="text-xs text-[var(--color-muted)] font-normal hidden sm:inline">
              RDC, Raj Nagar
            </span>
          </a>

          {/* Nav links: body face, step smaller, sentence case, untracked */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm no-underline transition-colors relative py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm ${
                    isActive ? 'text-[var(--color-ink)] font-medium' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--color-accent)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary & Secondary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-[var(--color-muted)] font-normal hidden lg:inline mr-1">
              Daily 11:00 to 23:00
            </span>

            <button
              onClick={onOpenDelivery}
              className="btn-secondary text-xs py-1.5 px-3.5 active:translate-y-px disabled:opacity-50"
            >
              Order takeaway
            </button>

            <button
              onClick={onOpenReserve}
              className="btn-primary text-xs py-1.5 px-4 active:translate-y-px disabled:opacity-50"
            >
              Book table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenReserve}
              className="btn-primary text-xs py-1 px-3"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[var(--color-muted)] hover:text-[var(--color-ink)] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <MenuIcon className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-paper-2)] border-b border-[var(--color-rule)] px-6 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[var(--color-ink-2)] hover:text-[var(--color-ink)] py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--color-rule)] flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDelivery();
              }}
              className="btn-secondary w-1/2 text-xs py-2 text-center"
            >
              Order takeaway
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="btn-primary w-1/2 text-xs py-2 text-center"
            >
              Book table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
