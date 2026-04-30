"use client";

import data from "@/data/data.json";
import { Users, Globe, Building, Award } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "./Animations";

const iconMap = {
  Users, Globe, Building, Award
};

export default function BentoGrid() {
  const features = data.home.features;

  return (
    <section className="py-16 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <FadeIn direction="up" className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4 md:mb-6">The St. Jude Advantage</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              A Foundation Built on <span className="italic font-light">Excellence</span>.
            </h3>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="md:w-1/3">
            <p className="text-primary-foreground/70 font-light leading-relaxed text-sm md:text-base">
              We provide an environment where brilliant minds thrive, supported by unparalleled resources and global perspective.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-px bg-primary-foreground/10">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Award;
            
            // Asymmetric editorial grid
            let colSpan = "md:col-span-6";
            let padding = "p-8 md:p-12 lg:p-16";
            
            if (index === 0) {
              colSpan = "md:col-span-7";
            } else if (index === 1) {
              colSpan = "md:col-span-5";
            } else if (index === 2) {
              colSpan = "md:col-span-4";
              padding = "p-8 md:p-10";
            } else if (index === 3) {
              colSpan = "md:col-span-8";
              padding = "p-8 md:p-12 lg:p-20";
            }
            
            return (
              <StaggerItem key={feature.id} className={`${colSpan} bg-primary relative group overflow-hidden`}>
                <div className={`h-full w-full ${padding} flex flex-col justify-between`}>
                  <div className="text-accent mb-8 md:mb-12 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                    <IconComponent size={36} strokeWidth={1.5} className="w-8 h-8 md:w-9 md:h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-primary-foreground/60 font-light leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
