import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({ text, highlightText = '', className = '', delay = 0 }) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '110%', opacity: 0, rotateZ: 2 },
    visible: {
      y: '0%',
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`overflow-hidden flex flex-wrap justify-center gap-x-3 gap-y-1 ${className}`}
    >
      {words.map((word, i) => {
        const isHighlight = highlightText && highlightText.includes(word);
        return (
          <span key={i} className="inline-block overflow-hidden pb-1">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${
                isHighlight
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#fbf9f5] via-[#e5d2b8] to-[#c8a97e]'
                  : 'text-[#fbf9f5]'
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
}
