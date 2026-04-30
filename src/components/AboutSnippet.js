"use client";

import Link from "next/link";
import data from "@/data/data.json";
import { FadeIn, TextReveal } from "./Animations";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

export default function AboutSnippet() {
  const { heading, text, image } = data.home.aboutSnippet;

  return (
    <section className="py-20 lg:py-36 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              <div className="relative">
                {/* Main image */}
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={image}
                    alt="Campus"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Floating quote card */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-accent text-white p-6 lg:p-8 rounded-2xl shadow-2xl hidden md:block max-w-[260px]">
                  <p className="font-serif text-lg lg:text-xl italic leading-snug">"Knowledge • Discipline • Values"</p>
                  <p className="text-white/70 text-xs mt-2 uppercase tracking-widest">Est. 2024</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
              </div>
            </FadeIn>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn direction="up">
              <span className="inline-block text-accent uppercase tracking-[0.25em] text-xs font-bold border-b-2 border-accent pb-1">About Us</span>
            </FadeIn>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary leading-tight">
              <TextReveal text={heading} />
            </h2>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                {text}
              </p>
            </FadeIn>

            {/* Mini feature list */}
            <FadeIn direction="up" delay={0.6}>
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-3 pt-4">
                {[
                  { icon: BookOpen, label: "LKG – 10th", sub: "All Grades" },
                  { icon: Users, label: "1000+", sub: "Students" },
                  { icon: Award, label: "100%", sub: "Pass Rate" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3 bg-muted/60 rounded-xl p-3 sm:p-4">
                    <div className="bg-accent/10 p-2 rounded-lg shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-serif text-primary font-semibold text-base leading-none truncate">{label}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300">
                Learn More <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
