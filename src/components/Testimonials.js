"use client";

import data from "@/data/data.json";
import { Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "./Animations";

export default function Testimonials() {
  const testimonials = data.home.testimonials;

  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" direction="up">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
            What Our Community Says
          </h3>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id} direction="up">
              <HoverCard className="h-full">
                <div className="glass-card p-8 rounded-3xl relative h-full flex flex-col justify-between">
                  <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                  <p className="text-muted-foreground italic mb-8 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
