"use client";

import data from "@/data/data.json";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function AcademicsPage() {
  const { academics } = data;

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative min-h-[45vh] md:min-h-[60vh] flex items-end pb-12 md:pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${academics.headerImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Education</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mt-2 leading-tight tracking-tight">Academics</h1>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mt-3 font-light leading-relaxed">{academics.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 md:mb-20" direction="up">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Programs</span>
            <h3 className="text-4xl sm:text-5xl font-serif text-primary mt-3 leading-tight">Academic Departments</h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academics.departments.map((dept, i) => (
              <StaggerItem key={i} direction="up">
                <div className="group rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-2xl transition-all duration-400 bg-card h-full flex flex-col">
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-accent text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300">{dept.name}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm flex-grow">{dept.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn direction="up" className="text-center mb-14">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Curriculum</span>
            <h3 className="text-4xl sm:text-5xl font-serif text-white mt-3 leading-tight">What We Offer</h3>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {academics.curriculumHighlights.map((highlight, i) => (
              <StaggerItem key={i} direction="up">
                <div className="flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent p-6 rounded-2xl transition-all duration-300 group">
                  <div className="bg-accent/20 p-3 rounded-xl shrink-0 group-hover:bg-accent/40 transition-colors">
                    <CheckCircle2 size={22} className="text-accent" />
                  </div>
                  <span className="font-serif text-white text-lg">{highlight}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
