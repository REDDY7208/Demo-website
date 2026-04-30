"use client";

import data from "@/data/data.json";
import { Users, Globe, Building, Award } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "./Animations";

const iconMap = { Users, Globe, Building, Award };

const colors = [
  "from-blue-900 to-slate-900",
  "from-slate-800 to-slate-900",
  "from-amber-900 to-slate-900",
  "from-emerald-900 to-slate-900",
];

export default function BentoGrid() {
  const features = data.home.features;

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6">
          <FadeIn direction="up" className="max-w-xl">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Why Choose Us</span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary leading-tight mt-3">
              The Gautam<br /><span className="italic font-light text-accent">Advantage</span>
            </h3>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="md:w-2/5">
            <p className="text-muted-foreground font-light leading-relaxed text-base">
              A school where every child is seen, heard, and empowered to reach their full potential.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Award;
            return (
              <StaggerItem key={feature.id} direction="up">
                <div className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${colors[index]} p-8 h-full min-h-[260px] flex flex-col justify-between cursor-default`}>
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl" />
                  {/* Icon */}
                  <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                    <IconComponent size={28} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 font-light leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-tl-3xl" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
