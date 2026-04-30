"use client";

import data from "@/data/data.json";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { Target, Eye, Clock } from "lucide-react";

export default function AboutPage() {
  const { about } = data;

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative min-h-[45vh] md:min-h-[60vh] flex items-end pb-12 md:pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${about.headerImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Our Story</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mt-2 leading-tight tracking-tight">About Us</h1>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mt-3 font-light leading-relaxed">{about.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <StaggerItem direction="left">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-14 h-full min-h-[280px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-accent/20 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
                  <Target size={28} className="text-accent" />
                </div>
                <div>
                  <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Our Mission</span>
                  <p className="text-white font-serif leading-relaxed text-xl md:text-2xl mt-4">{about.mission}</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem direction="right">
              <div className="group relative overflow-hidden rounded-2xl bg-accent p-10 md:p-14 h-full min-h-[280px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
                  <Eye size={28} className="text-white" />
                </div>
                <div>
                  <span className="text-white/70 uppercase tracking-[0.25em] text-xs font-bold">Our Vision</span>
                  <p className="text-white font-serif leading-relaxed text-xl md:text-2xl mt-4">{about.vision}</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-28 bg-muted/40 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <FadeIn className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" direction="up">
          <div className="flex items-start gap-6 md:gap-10">
            <div className="bg-accent/10 p-4 rounded-2xl shrink-0 hidden md:flex">
              <Clock size={32} className="text-accent" />
            </div>
            <div>
              <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3 mb-6 leading-tight">A Legacy of Learning</h2>
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">{about.history}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Values strip */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            {["Knowledge", "Discipline", "Values"].map((v, i) => (
              <StaggerItem key={v} direction="up">
                <div className="py-8">
                  <div className="text-4xl md:text-6xl font-serif text-accent font-light mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-white uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">{v}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 md:mb-20" direction="up">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Administration</span>
            <h3 className="text-4xl sm:text-5xl font-serif text-primary mt-3 leading-tight">Our Leadership</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {about.leadership.map((leader, i) => (
              <StaggerItem key={i} direction="up">
                <div className="group flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="w-full sm:w-36 h-48 sm:h-36 overflow-hidden rounded-xl shrink-0">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-serif text-primary">{leader.name}</h3>
                    <p className="text-accent uppercase tracking-widest text-xs font-bold mt-1 mb-3">{leader.role}</p>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm">{leader.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
