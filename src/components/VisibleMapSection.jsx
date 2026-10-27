import React, { useState } from 'react';
import { Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function VisibleMapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="map-location" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[var(--container)] mx-auto border-t border-[var(--color-rule)]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[var(--color-ink)]">
            Find us in Raj Nagar
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] font-normal max-w-md leading-relaxed">
          Ground floor in the commercial heart of RDC, Raj Nagar, Ghaziabad. Ample nearby parking available.
        </p>
      </div>

      {/* Main Grid: Details + Directly Embedded Google Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Address, Hours & Contact */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex flex-col justify-between space-y-6">
          
          <div className="space-y-6">
            {/* Address */}
            <div>
              <span className="text-xs text-[var(--color-muted)] block mb-1">
                Address
              </span>
              <p className="text-sm font-normal text-[var(--color-ink)] leading-relaxed mb-3">
                {CAFE_INFO.address}
              </p>
              <button
                onClick={handleCopyAddress}
                className="btn-secondary text-xs py-1.5 px-3 whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--color-success)]" aria-hidden="true" />
                    <span>Address copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy address</span>
                  </>
                )}
              </button>
            </div>

            {/* Operating Hours */}
            <div className="pt-6 border-t border-[var(--color-rule)]">
              <span className="text-xs text-[var(--color-muted)] block mb-1">
                Opening hours
              </span>
              <p className="text-sm font-normal text-[var(--color-ink)]">
                Daily 11:00 to 23:00
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">
                Open all seven days
              </p>
            </div>

            {/* Phone */}
            <div className="pt-6 border-t border-[var(--color-rule)]">
              <span className="text-xs text-[var(--color-muted)] block mb-1">
                Telephone and reservations
              </span>
              <div className="flex flex-col gap-1">
                {CAFE_INFO.phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-sm text-[var(--color-ink-2)] hover:text-[var(--color-accent)] no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-sm"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Action to open in Google Maps */}
          <div className="pt-6 border-t border-[var(--color-rule)]">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-xs py-2.5 justify-center no-underline whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Get directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-70 shrink-0" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Right Column: Directly Visible Google Map */}
        <div className="lg:col-span-7 rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-2)] min-h-[380px] lg:min-h-[460px] relative">
          <iframe
            title="Cafe ElleBee Google Maps Location"
            src={CAFE_INFO.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

      </div>

    </section>
  );
}
