"use client";

import data from "@/data/data.json";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

export default function StatsBanner() {
  const stats = data.home.stats;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Full bleed background */}
      <div className="absolute inset-0 bg-accent" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-12">
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold">Gautam High School — By the Numbers</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <StaggerItem key={i} direction="up" className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-white font-light mb-3 leading-none">
                {stat.value}
              </div>
              <div className="text-white/70 uppercase tracking-widest text-[10px] sm:text-xs font-semibold max-w-[140px] mx-auto leading-relaxed">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
