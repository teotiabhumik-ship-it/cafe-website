import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';

export default function OutOfBoundsFoodCard({ item, onOpenDelivery }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 280, damping: 22, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const currentMouseX = e.clientX - rect.left;
    const currentMouseY = e.clientY - rect.top;

    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);

    const normalizedX = currentMouseX / width - 0.5;
    const normalizedY = currentMouseY / height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative pt-16 group h-full">
      {/* 3D Tilt Card Base */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="relative perspective-1000 h-full flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#181513] via-[#141210] to-[#0f0e0c] border border-stone-800/80 group-hover:border-[#c8a97e]/45 transition-colors duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.7)] pt-24 pb-6 px-6"
      >
        {/* Out-Of-Bounds Floating Artisan Plate */}
        <div
          className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(55px)',
          }}
        >
          <motion.div
            className="relative"
            animate={
              isHovered
                ? { y: -14, scale: 1.08, rotate: 1.5 }
                : { y: 0, scale: 1, rotate: 0 }
            }
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            {/* Ambient Gold Halo Glow behind the food */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 blur-xl -z-10 scale-110 ${
                isHovered
                  ? 'bg-[#c8a97e]/35 opacity-100'
                  : 'bg-[#c8a97e]/15 opacity-70'
              }`}
            />

            {/* Artisanal Ceramic Plate Framing */}
            <div
              className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-b from-stone-600/50 via-[#1e1b18] to-[#0c0b0a] border border-stone-700/70 transition-all duration-500 ${
                isHovered
                  ? 'shadow-[0_28px_50px_rgba(0,0,0,0.95)] border-[#c8a97e]/60'
                  : 'shadow-[0_18px_35px_rgba(0,0,0,0.85)]'
              }`}
            >
              {/* Inner Plate Bevel & Food Image */}
              <div className="w-full h-full rounded-full overflow-hidden border border-[#c8a97e]/40 relative bg-[#181512]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
              </div>
            </div>

            {/* Pure Veg Badge pinned to the out-of-bounds plate rim */}
            <div className="absolute bottom-1 right-2 px-2.5 py-0.5 rounded-full bg-black/90 backdrop-blur-md border border-emerald-500/50 flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[9px] text-emerald-300 font-semibold uppercase tracking-wider">
                Veg
              </span>
            </div>
          </motion.div>
        </div>

        {/* Card Shoulder Tags (Tag & Rating) */}
        <div
          className="flex items-center justify-between gap-2 mb-4"
          style={{ transform: 'translateZ(25px)' }}
        >
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#1d1a17] text-[#c8a97e] border border-stone-800/90 shadow-sm">
            {item.tag}
          </span>
          <div className="px-2.5 py-1 rounded-full bg-[#1d1a17] border border-stone-800/90 flex items-center gap-1 text-[11px] font-semibold text-stone-200 shadow-sm">
            <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
            <span>{item.rating}</span>
          </div>
        </div>

        {/* Card Body Details */}
        <div
          className="flex-1 flex flex-col justify-between"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#fbf9f5] group-hover:text-[#c8a97e] transition-colors leading-snug">
                {item.name}
              </h3>
              <span className="font-serif-title text-base sm:text-lg font-bold text-[#c8a97e] shrink-0">
                ₹{item.price}
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2 mb-4">
              {item.description}
            </p>
          </div>

          {/* Footer Action */}
          <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
            <span className="text-[10px] text-stone-500 uppercase tracking-widest font-sans font-medium">
              Freshly Prepared
            </span>
            <button
              onClick={onOpenDelivery}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-stone-200 bg-[#1c1916] hover:bg-[#c8a97e] hover:text-[#0c0b0a] border border-stone-700/80 hover:border-[#c8a97e] transition-all shadow-sm active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </button>
          </div>
        </div>

        {/* Interactive Radial Spotlight Glare on Hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none blur-2xl"
              style={{
                left: mouseX,
                top: mouseY,
                background:
                  'radial-gradient(circle, rgba(200, 169, 126, 0.12) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
