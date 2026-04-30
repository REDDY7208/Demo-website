"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }} // Elegant easing
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "", direction = "up" }) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, ...directions[direction] },
    show: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export const HoverCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10, 
        scale: 1.01,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MagneticButton = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className={className}>
      {words.map((word, idx) => (
        <motion.span key={idx} variants={item} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
