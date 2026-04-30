"use client";

import data from "@/data/data.json";
import { FadeIn, TextReveal } from "./Animations";

export default function AboutSnippet() {
  const { heading, text, image } = data.home.aboutSnippet;

  return (
    <section className="py-16 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                <img 
                  src={image} 
                  alt="Campus Heritage" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 border border-primary/10 m-4 rounded-sm pointer-events-none"></div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="absolute -bottom-6 -right-4 lg:-bottom-8 lg:-right-8 bg-card p-6 lg:p-8 shadow-2xl hidden md:block max-w-[250px] lg:max-w-xs border border-border">
              <p className="font-serif text-xl lg:text-2xl italic text-primary">"Excellence is not an act, but a habit."</p>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn direction="up">
              <div className="h-px w-24 bg-accent mb-8"></div>
            </FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary leading-tight">
              <TextReveal text={heading} />
            </h2>
            <FadeIn direction="up" delay={0.6}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                {text}
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
