import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function AmbientCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-opacity duration-500"
      style={{
        x: cursorX,
        y: cursorY,
        width: 320,
        height: 320,
        background: 'radial-gradient(circle, rgba(200, 169, 126, 0.08) 0%, rgba(200, 169, 126, 0.02) 50%, transparent 75%)',
      }}
    />
  );
}
