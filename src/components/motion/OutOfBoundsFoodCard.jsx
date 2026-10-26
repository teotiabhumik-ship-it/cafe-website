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

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

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
    <div className="relative pt-10 sm:pt-12 group h-full">
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
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.25 }}
        className="relative perspective-1000 h-full flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#181513] via-[#141210] to-[#0f0e0c] border border-stone-800/80 group-hover:border-[#c8a97e]/45 transition-colors duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.7)] p-4 sm:p-5"
      >
        {/* Out-Of-Bounds Normal Rectangular Photo Breakout */}
        <div
          className="relative -mt-10 sm:-mt-12 z-20"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(45px)',
          }}
        >
          <motion.div
            className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden border border-stone-700/70 group-hover:border-[#c8a97e]/60 transition-colors duration-300"
            animate={
              isHovered
                ? { y: -8, scale: 1.03 }
                : { y: 0, scale: 1 }
            }
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            style={{
              boxShadow: isHovered
                ? '0 24px 45px -8px rgba(0, 0, 0, 0.95), 0 0 25px rgba(200, 169, 126, 0.2)'
                : '0 16px 30px -6px rgba(0, 0, 0, 0.85)',
            }}
          >
            {/* Full Normal Rectangular Food Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Tag Badge */}
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/75 backdrop-blur-md text-[#c8a97e] border border-stone-700/80 shadow-md">
              {item.tag}
            </span>

            {/* Rating Badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-stone-700/80 flex items-center gap-1 text-[11px] font-semibold text-stone-200 shadow-md">
              <Star className="w-3 h-3 fill-[#c8a97e] text-[#c8a97e]" />
              <span>{item.rating}</span>
            </div>

            {/* Pure Veg Badge */}
            <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-emerald-500/50 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-[10px] text-emerald-300 font-semibold tracking-wide">
                Pure Veg
              </span>
            </div>
          </motion.div>
        </div>

        {/* Card Body Details */}
        <div
          className="flex-1 flex flex-col justify-between mt-4"
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
