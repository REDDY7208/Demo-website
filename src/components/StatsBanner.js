"use client";

import data from "@/data/data.json";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

export default function StatsBanner() {
  const stats = data.home.stats;

  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 divide-x divide-border">
          {stats.map((stat, i) => (
            <StaggerItem key={i} direction="up" className="flex flex-col items-center text-center px-2 md:px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-3 md:mb-4 font-light">
                {stat.value}
              </div>
              <div className="text-muted-foreground uppercase tracking-wider md:tracking-widest text-[10px] sm:text-xs font-semibold max-w-[120px] md:max-w-[150px] mx-auto">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
