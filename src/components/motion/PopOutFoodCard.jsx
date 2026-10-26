import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, ShoppingBag, Sparkles, X, ChevronUp, Flame } from 'lucide-react';

export default function PopOutFoodCard({ item, onOpenDelivery, isPopped, onTogglePop }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt tracking on hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 22, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], isPopped ? [-3, 3] : [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], isPopped ? [3, -3] : [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative perspective-1200 h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onTogglePop}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isPopped ? 1.03 : 1,
          z: isPopped ? 25 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`group relative rounded-3xl bg-[#141210] border transition-all duration-300 cursor-pointer select-none h-full flex flex-col justify-between overflow-visible ${
          isPopped
            ? 'border-[#c8a97e] shadow-2xl shadow-black/90 ring-1 ring-[#c8a97e]/40 z-30'
            : 'border-stone-800/80 hover:border-stone-600 shadow-xl z-10'
        }`}
      >
        {/* Top Header Tags */}
        <div className="p-5 pb-0 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#1e1b18] text-stone-200 border border-stone-700/80">
              {item.tag}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Veg</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-200 bg-[#1e1b18] px-2.5 py-1 rounded-full border border-stone-800">
            <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
            <span>{item.rating}</span>
          </div>
        </div>

        {/* 3D POP-OUT FOOD & SERVING PLATE STAGE */}
        <div className="relative h-56 sm:h-60 w-full flex items-center justify-center overflow-visible py-4 my-2">
          
          {/* Subtle Ambient Plate Pedestal on Card Surface */}
          <div className="absolute w-44 h-44 rounded-full bg-[#191714] border border-stone-800/60 shadow-inner flex items-center justify-center pointer-events-none">
            <div className="w-36 h-36 rounded-full border border-dashed border-stone-800/40" />
          </div>

          {/* DYNAMIC CAST SHADOW (Lies on card surface beneath the floating plate) */}
          <motion.div
            animate={{
              opacity: isPopped ? 0.65 : 0.25,
              scale: isPopped ? 1.35 : 0.95,
              y: isPopped ? 42 : 8,
              filter: isPopped ? 'blur(16px)' : 'blur(8px)',
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="absolute w-40 h-28 rounded-full bg-black pointer-events-none"
          />

          {/* THE FOOD ITEM & PLATE (POPS OUT OF THE CARD ON CLICK!) */}
          <motion.div
            animate={{
              translateZ: isPopped ? 95 : 0,
              scale: isPopped ? 1.28 : isHovered ? 1.06 : 1,
              y: isPopped ? -28 : isHovered ? -4 : 0,
              rotateX: isPopped ? 10 : 0,
            }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative z-20 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* The Ceramic Serving Plate with Food */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-2.5 bg-gradient-to-br from-[#26221d] via-[#1a1714] to-[#12100e] border-2 border-stone-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex items-center justify-center">
              
              {/* Outer Ceramic Plate Rim Texture */}
              <div className="absolute inset-1.5 rounded-full border border-stone-600/40 pointer-events-none" />

              {/* Food Image masked directly into the plate */}
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-[#100e0d]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Interactive Pop-Out Floating Indicator */}
              <AnimatePresence>
                {isPopped && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="absolute -top-3 right-0 px-2.5 py-1 rounded-full bg-[#f5efe6] text-[#0c0b0a] font-semibold text-[10px] tracking-wider shadow-2xl flex items-center gap-1 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePop();
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-[#c8a97e]" />
                    <span>Popped Out</span>
                    <X className="w-3 h-3 ml-0.5 text-stone-500 hover:text-black" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Gentle Steam Rising from Hot Food when Popped */}
              {isPopped && (
                <div className="absolute -top-8 flex gap-1.5 pointer-events-none">
                  <div className="w-1.5 h-6 bg-gradient-to-t from-stone-200/40 to-transparent rounded-full animate-steam" style={{ animationDelay: '0s' }} />
                  <div className="w-1.5 h-8 bg-gradient-to-t from-stone-200/50 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.8s' }} />
                  <div className="w-1.5 h-5 bg-gradient-to-t from-stone-200/40 to-transparent rounded-full animate-steam" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
            </div>

            {/* Hint Badge when not popped */}
            {!isPopped && (
              <span className="text-[10px] tracking-widest uppercase text-stone-400 group-hover:text-[#c8a97e] transition-colors mt-2 font-medium flex items-center gap-1 opacity-60 group-hover:opacity-100">
                <span>Click to Pop Out</span>
                <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            )}
          </motion.div>

        </div>

        {/* Card Body Info (On the card background) */}
        <div className="p-5 pt-2 relative z-10">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#fbf9f5] group-hover:text-[#c8a97e] transition-colors">
              {item.name}
            </h3>
            <span className="font-serif-title text-base font-bold text-[#fbf9f5] shrink-0">
              ₹{item.price}
            </span>
          </div>

          <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Expanded Details when Popped Out */}
          <AnimatePresence>
            {isPopped && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden pb-3 mb-2"
              >
                <div className="p-3 rounded-2xl bg-[#1a1714] border border-stone-800 text-[11px] text-stone-300 space-y-1.5">
                  <p className="text-[#c8a97e] font-semibold flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#c8a97e]" /> Chef's Preparation Note:
                  </p>
                  <p className="font-light text-stone-300 leading-relaxed">
                    Freshly plated to order with signature spice seasoning, herbs, and gourmet artisanal presentation.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Row */}
          <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
            <span className="text-[10px] text-stone-400 uppercase tracking-widest font-sans">
              {isPopped ? '3D Active' : 'Fresh Kitchen'}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDelivery();
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-stone-200 bg-[#1c1916] hover:bg-[#26231f] border border-stone-700 hover:border-stone-500 transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-3 h-3 text-[#c8a97e]" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
