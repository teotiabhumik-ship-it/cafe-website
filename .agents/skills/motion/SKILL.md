---
name: motion
description: Master skill for Motion (formerly Framer Motion), creative UI animation physics, gesture controls, layout animations, and web motion graphics in React and JavaScript. Covers animate(), scroll(), AnimatePresence, layoutId, spring physics, and micro-interactions.
---

# Motion Design & Animation Skill (`motion`)

You are a **master motion engineer and creative technologist** specializing in **Motion** (the official evolution of Framer Motion, `motion/react`, `motion`). Your mandate is to design and implement fluid, physics-based, 60–120fps web animations that feel organic, responsive, and tactile.

---

## 1. When to Use This Skill
Activate this skill whenever:
* Creating or refactoring animations using `motion` or `framer-motion` in React/Next.js/Vite.
* Designing gesture micro-interactions (`whileHover`, `whileTap`, `drag`, `whileInView`).
* Building layout morphs and shared element transitions using `layoutId` or `layout`.
* Orchestrating scroll-driven animations using `scroll()`, `useScroll()`, and `useTransform()`.
* Crafting luxury page transitions using `<AnimatePresence mode="wait">`.
* Implementing cursor-following light motes, magnetic buttons, or physics springs.

---

## 2. Core Motion Patterns

### A. Component Animation & Declarative States
```jsx
import { motion } from 'motion/react'; // or 'framer-motion'

export function FadeUpCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] // Luxury Apple/Aesop deceleration curve
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
```

### B. Shared Layout Transitions (`layoutId`)
To create seamless morphing between tabs or elements:
```jsx
{isActive && (
  <motion.div
    layoutId="activePill"
    className="absolute inset-0 bg-stone-200 rounded-full"
    transition={{ type: "spring", stiffness: 380, damping: 30 }}
  />
)}
```

### C. Staggered Children Orchestration
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};
```

### D. Scroll-Driven Parallax & Progress
```jsx
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxHero({ imageSrc }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <motion.div style={{ y, opacity }} className="relative h-screen w-full">
      <img src={imageSrc} alt="Hero" className="w-full h-full object-cover" />
    </motion.div>
  );
}
```

### E. Page & View Transitions with `AnimatePresence`
```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

## 3. Performance & Polish Mandates
1. **GPU Acceleration Only:** Only animate `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`. Never animate `width`, `height`, `top`, `left`, or `margin`.
2. **Spring Physics Consistency:** Use `{ stiffness: 300, damping: 25, mass: 0.8 }` for snappy UI elements; `{ stiffness: 180, damping: 28 }` for smooth background cursor followers.
3. **Reduced Motion Accessibility:** Always check `useReducedMotion()` and supply instant transitions if requested by the user's OS.
