import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '../data/cafeData';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '07:00 PM',
    occasion: 'Casual Coffee & Bites',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#c8a97e', '#f5efe6', '#f43f5e'],
      });
    } catch (err) {
      // fallback
    }

    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'd like to reserve a table:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Guests: ${formData.guests}\n` +
      `Date: ${formData.date || 'Today'}\n` +
      `Time: ${formData.time}\n` +
      `Occasion: ${formData.occasion}\n` +
      (formData.notes ? `Special Request: ${formData.notes}\n` : '') +
      `\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 bg-black/85 overflow-y-auto">
      <div
        className="relative max-w-lg w-full bg-[var(--color-paper-2)] rounded-[var(--radius-card)] border border-[var(--color-rule)] shadow-[var(--shadow-card)] overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 bg-[var(--color-paper-3)] border-b border-[var(--color-rule)] relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-[var(--color-paper)] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <span className="text-xs text-[var(--color-muted)] block mb-1">
            Table and party reservation
          </span>
          <h3 className="text-xl sm:text-2xl font-normal text-[var(--color-ink)]">
            {submitted ? 'Reservation requested' : 'Book a table'}
          </h3>
          <p className="text-xs text-[var(--color-muted)] mt-1 font-normal">
            Cafe ElleBee, B-19 Ground Floor, RDC Raj Nagar
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-6 py-2">
              <div className="w-14 h-14 rounded-full bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-center mx-auto text-[var(--color-accent)]">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>

              <div>
                <h4 className="text-lg font-normal text-[var(--color-ink)]">
                  Thank you, {formData.name}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--color-ink-2)] font-normal mt-2 max-w-sm mx-auto leading-relaxed">
                  We received your request for {formData.guests} guests on {formData.date || 'today'} at {formData.time}.
                </p>
              </div>

              <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] text-left text-xs text-[var(--color-ink-2)] space-y-1.5">
                <p><span className="text-[var(--color-muted)]">Occasion:</span> {formData.occasion}</p>
                <p><span className="text-[var(--color-muted)]">Contact:</span> {formData.phone}</p>
                {formData.notes && <p><span className="text-[var(--color-muted)]">Notes:</span> {formData.notes}</p>}
              </div>

              {/* Instant WhatsApp Confirmation */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="btn-primary w-full py-3 justify-center text-xs whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Confirm on WhatsApp</span>
                </button>

                <button
                  onClick={handleClose}
                  className="btn-secondary w-full py-2 justify-center text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                    Your name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-muted)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-muted)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  />
                </div>
              </div>

              {/* Guests & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                    Number of guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  >
                    <option value="1">1 Person (Solo Break)</option>
                    <option value="2">2 People (Cozy Date)</option>
                    <option value="3-4">3 to 4 People (Friends Catchup)</option>
                    <option value="5-8">5 to 8 People (Small Party)</option>
                    <option value="10-15">10 to 15 People (Group Celebration)</option>
                    <option value="15+">15+ People (Private Lounge Booking)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                    Occasion / event
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  >
                    <option value="Casual Coffee & Bites">Casual Coffee & Bites</option>
                    <option value="Birthday Party Celebration">Birthday Party Celebration</option>
                    <option value="Romantic Date Night">Romantic Date Night</option>
                    <option value="Anniversary Gathering">Anniversary Gathering</option>
                    <option value="Kitty Party / Reunion">Kitty Party / Reunion</option>
                    <option value="Work / Freelance Meeting">Work / Freelance Meeting</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                    Reservation date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                    Preferred time slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                  >
                    <option value="12:00 PM">12:00 PM (Lunch)</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:30 PM">03:30 PM (Afternoon Coffee)</option>
                    <option value="05:00 PM">05:00 PM (Evening Snacks)</option>
                    <option value="07:00 PM">07:00 PM (Dinner Hour)</option>
                    <option value="08:30 PM">08:30 PM (Peak Lounge)</option>
                    <option value="10:00 PM">10:00 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-normal text-[var(--color-ink-2)] mb-1">
                  Special notes or decor requests (optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday balloon decor, quiet corner booth..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-muted)] text-xs focus:outline-none focus:border-[var(--color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full py-3 justify-center text-xs"
                >
                  Confirm table request
                </button>
                <p className="text-[11px] text-center text-[var(--color-muted)] mt-2 font-normal">
                  No advance fee required. Tables are held for 15 minutes past reservation time.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
