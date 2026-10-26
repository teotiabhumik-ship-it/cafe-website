import React from 'react';
import { motion } from 'framer-motion';
import { useUiMode } from '../context/UiModeContext';

export default function FloatingModeToggle() {
  const { uiMode, setUiMode, isMinimal } = useUiMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 p-1 rounded-full bg-[#141210]/95 backdrop-blur-md border border-stone-800 shadow-2xl text-xs select-none"
    >
      <span className="text-[10px] uppercase tracking-wider text-stone-400 pl-2 pr-1 font-mono hidden sm:inline">
        View:
      </span>
      <button
        onClick={() => setUiMode('minimal')}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          isMinimal
            ? 'bg-[#f5efe6] text-[#0c0b0a] font-semibold shadow-sm'
            : 'text-stone-400 hover:text-white'
        }`}
      >
        ✦ Minimal
      </button>
      <button
        onClick={() => setUiMode('luxe')}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          !isMinimal
            ? 'bg-[#c8a97e] text-[#0c0b0a] font-semibold shadow-sm'
            : 'text-stone-400 hover:text-white'
        }`}
      >
        ✨ Luxe
      </button>
    </motion.div>
  );
}
