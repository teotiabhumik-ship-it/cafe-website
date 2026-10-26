import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Sparkles, MessageCircle, CheckCircle2, Phone, Heart } from 'lucide-react';
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
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c8a97e', '#f5efe6', '#10b981', '#f43f5e'],
      });
    } catch (err) {
      // fallback
    }

    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Cafe ElleBee! I'd like to reserve a table:\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `👥 Guests: ${formData.guests}\n` +
      `📅 Date: ${formData.date || 'Today'}\n` +
      `⏰ Time: ${formData.time}\n` +
      `🎉 Occasion: ${formData.occasion}\n` +
      (formData.notes ? `📝 Special Request: ${formData.notes}\n` : '') +
      `\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/919354460764?text=${text}`, '_blank');
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative max-w-lg w-full bg-[#161412] rounded-3xl border border-stone-700 shadow-2xl overflow-hidden my-8"
      >
        {/* Header Ribbon */}
        <div className="p-6 bg-[#1b1815] border-b border-stone-800 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-black text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8a97e] mb-1">
            <Sparkles className="w-4 h-4 text-[#c8a97e]" />
            <span>Table & Party Reservation</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold text-[#fbf9f5]">
            {submitted ? 'Reservation Requested!' : 'Book Your Cozy Spot'}
          </h3>
          <p className="text-xs text-stone-400 mt-1 font-light">
            Cafe ElleBee • B-19 Ground Floor, RDC Raj Nagar
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-serif-title text-xl font-bold text-[#fbf9f5]">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-stone-300 font-light mt-2 max-w-sm mx-auto leading-relaxed">
                  We have received your reservation request for <strong>{formData.guests} guests</strong> on <strong>{formData.date || 'today'}</strong> at <strong>{formData.time}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#13110f] border border-stone-800 text-left text-xs text-stone-300 space-y-1.5">
                <p><strong>Occasion:</strong> {formData.occasion}</p>
                <p><strong>Contact:</strong> {formData.phone}</p>
                {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
              </div>

              {/* Instant WhatsApp Confirmation */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to Cafe on WhatsApp</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 text-xs text-stone-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-[#c8a97e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-[#c8a97e]"
                  />
                </div>
              </div>

              {/* Guests & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-[#c8a97e]"
                  >
                    <option value="1">1 Person (Solo Break)</option>
                    <option value="2">2 People (Cozy Date)</option>
                    <option value="3-4">3 – 4 People (Friends Catchup)</option>
                    <option value="5-8">5 – 8 People (Small Party)</option>
                    <option value="10-15">10 – 15 People (Group Celebration)</option>
                    <option value="15+">15+ People (Private Lounge Booking)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Occasion / Event
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-[#c8a97e]"
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
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-[#c8a97e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-[#c8a97e]"
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
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Special Notes or Decor Requests (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday balloon decor, quiet corner table, custom dessert..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#12100e] border border-stone-800 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-[#c8a97e]"
                ></textarea>
              </div>

              {/* Submit CTA (Ivory & Obsidian) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-[#0c0b0a] bg-[#f5efe6] hover:bg-[#ebe1d2] shadow-xl text-sm transition-all"
                >
                  Confirm Table Request
                </button>
                <p className="text-[11px] text-center text-stone-400 mt-2 font-light">
                  No advance fee required. Tables are held for 15 minutes past reservation time.
                </p>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
