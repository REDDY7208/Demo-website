"use client";

import data from "@/data/data.json";
import { Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

export default function Testimonials() {
  const testimonials = data.home.testimonials;

  return (
    <section className="py-24 lg:py-36 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20" direction="up">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Testimonials</span>
          <h3 className="text-4xl md:text-5xl font-serif text-white mt-3 leading-tight">
            Voices of Our<br /><span className="italic font-light">Community</span>
          </h3>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.id} direction="up">
              <div className={`relative rounded-2xl p-8 h-full flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${
                i === 1
                  ? "bg-accent border-accent/50 shadow-2xl shadow-accent/20"
                  : "bg-white/5 border-white/10 hover:border-accent/40"
              }`}>
                <Quote size={36} className={`mb-6 ${i === 1 ? "text-white/40" : "text-accent/30"}`} />
                <p className={`italic leading-relaxed mb-8 flex-grow text-base ${i === 1 ? "text-white" : "text-white/70"}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                    <p className={`text-xs mt-0.5 ${i === 1 ? "text-white/70" : "text-white/40"}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
