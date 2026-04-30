"use client";

import Link from "next/link";
import data from "@/data/data.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, MagneticButton, FadeIn } from "./Animations";
import { ArrowDown, GraduationCap } from "lucide-react";

export default function Hero() {
  const { title, subtitle, ctaText, ctaLink } = data.home.hero;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <img
          src="/Aerial%20%20Top%20View%20(Drone%20Style)/drone.png"
          alt="Gautam High School Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
      </motion.div>

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-accent/60 z-10 hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-accent/60 z-10 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-accent/60 z-10 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-accent/60 z-10 hidden md:block" />

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <FadeIn delay={0.2} direction="up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
            <GraduationCap size={16} className="text-accent" />
            <span className="text-white/90 uppercase tracking-[0.25em] text-xs font-semibold">{data.school.name}</span>
          </div>
        </FadeIn>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl leading-[1.05] tracking-tight mb-6 md:mb-8">
          <TextReveal text={title} delay={0.4} />
        </h1>

        <FadeIn delay={1.2} direction="up">
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed px-4">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={1.5} direction="up" className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto px-4 sm:px-0">
          <MagneticButton>
            <Link href={ctaLink}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-white px-7 py-3.5 rounded-full text-xs tracking-widest uppercase font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/30">
              {ctaText}
            </Link>
          </MagneticButton>
          <Link href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 text-white px-7 py-3.5 rounded-full text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Admissions
          </Link>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={2} direction="up" className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-16 w-full max-w-sm md:max-w-none">
          {data.home.stats.slice(0, 3).map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-serif text-accent font-light">{stat.value}</div>
              <div className="text-white/50 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
