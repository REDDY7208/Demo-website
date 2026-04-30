import data from "@/data/data.json";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/Animations";

export default function AcademicsPage() {
  const { academics } = data;

  return (
    <div className="w-full">
      {/* Header */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${academics.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <FadeIn className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 md:mb-6 tracking-tight">Academics</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed px-2">{academics.intro}</p>
        </FadeIn>
      </section>

      {/* Departments Grid */}
      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 md:mb-20" direction="up">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3 md:mb-4">Disciplines</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tight">Our Academic Departments</h3>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academics.departments.map((dept, i) => (
              <StaggerItem key={i} direction="up">
                <HoverCard className="h-full">
                  <div className="editorial-card rounded-sm overflow-hidden flex flex-col group h-full">
                    <div className="h-48 md:h-64 overflow-hidden">
                      <img 
                        src={dept.image} 
                        alt={dept.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex-grow flex flex-col bg-card">
                      <h3 className="text-xl md:text-2xl font-serif text-primary mb-3 md:mb-4">{dept.name}</h3>
                      <div className="h-px w-8 md:w-12 bg-accent mb-3 md:mb-4"></div>
                      <p className="text-muted-foreground font-light leading-relaxed flex-grow text-sm md:text-base">{dept.description}</p>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 lg:py-32 bg-primary text-primary-foreground border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn direction="up" className="text-center mb-12 md:mb-16">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3 md:mb-4">The Standard</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight">Curriculum Distinctions</h3>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {academics.curriculumHighlights.map((highlight, i) => (
              <StaggerItem key={i} direction="up">
                <HoverCard>
                  <div className="flex items-center gap-4 md:gap-6 bg-primary-foreground/5 p-6 md:p-8 rounded-sm border border-primary-foreground/10 h-full hover:border-accent transition-colors duration-300">
                    <div className="text-accent shrink-0">
                      <CheckCircle2 size={24} strokeWidth={1.5} className="md:w-8 md:h-8" />
                    </div>
                    <span className="font-serif text-lg md:text-xl tracking-wide">{highlight}</span>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
