"use client";

import Link from "next/link";
import data from "@/data/data.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, MagneticButton, FadeIn } from "./Animations";

export default function Hero() {
  const { title, subtitle, ctaText, ctaLink, image } = data.home.hero;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]); // Parallax effect

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Elegant vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90"></div>
      </motion.div>

      {/* Editorial Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <FadeIn delay={0.2} direction="up" className="mb-6">
          <div className="inline-block text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            {data.school.name}
          </div>
        </FadeIn>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl leading-tight tracking-tight mb-6 md:mb-8">
          <TextReveal text={title} delay={0.4} />
        </h1>
        
        <FadeIn delay={1.2} direction="up">
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={1.5} direction="up">
          <MagneticButton>
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center border border-accent/50 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-xs md:text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 backdrop-blur-sm"
            >
              {ctaText}
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
      
      {/* Scroll Down Line */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 80 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/30 hidden md:block"
      />
    </section>
  );
}
