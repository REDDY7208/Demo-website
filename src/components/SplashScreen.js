"use client";

import { useState, useEffect } from "react";
import { TextFlippingBoard } from "./ui/TextFlippingBoard";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "GAUTAM\nHIGH SCHOOL",
  "PRODDATUR\nANDHRA PRADESH",
  "NURTURING\nEXCELLENCE",
  "BUILDING\nFUTURES",
  "WELCOME",
];

export default function SplashScreen({ onDone }) {
  const [msgIdx, setMsgIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Cycle through messages every 2s (5 messages × 2s = 10s total)
    const interval = setInterval(() => {
      setMsgIdx((i) => {
        const next = i + 1;
        if (next >= MESSAGES.length) {
          clearInterval(interval);
          // Fade out after last message
          setTimeout(() => {
            setVisible(false);
            setTimeout(onDone, 600);
          }, 1800);
        }
        return next < MESSAGES.length ? next : i;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          {/* Logo / school name top */}
            {/* Flip board */}
          <div className="relative z-10 text-3xl sm:text-5xl md:text-6xl w-full max-w-2xl px-4">
            <TextFlippingBoard
              key={msgIdx}
              text={MESSAGES[msgIdx]}
              duration={1.2}
              className="w-full"
            />
          </div>

          {/* Progress bar */}
          <motion.div
            className="relative z-10 mt-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-amber-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </motion.div>

          <p className="relative z-10 mt-4 text-white/30 text-xs tracking-widest uppercase">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
