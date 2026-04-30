import data from "@/data/data.json";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/Animations";

export default function AboutPage() {
  const { about } = data;

  return (
    <div className="w-full">
      {/* Header */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${about.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <FadeIn className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 md:mb-6 tracking-tight">About Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed px-2">
            {about.intro}
          </p>
        </FadeIn>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-24">
            <StaggerItem direction="left">
              <HoverCard>
                <div className="editorial-card p-8 md:p-12 h-full flex flex-col justify-center">
                  <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3 md:mb-4">Our Mission</h2>
                  <p className="text-primary font-serif leading-relaxed text-xl md:text-3xl">{about.mission}</p>
                </div>
              </HoverCard>
            </StaggerItem>
            <StaggerItem direction="right">
              <HoverCard>
                <div className="p-8 md:p-12 h-full flex flex-col justify-center bg-primary text-primary-foreground border border-primary shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] rounded-sm">
                  <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3 md:mb-4">Our Vision</h2>
                  <p className="font-serif leading-relaxed text-xl md:text-3xl">{about.vision}</p>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* History */}
      <section className="py-16 lg:py-32 bg-muted/30 border-y border-border overflow-hidden">
        <FadeIn className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center" direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 md:mb-8 tracking-tight">Our Heritage</h2>
          <div className="h-px w-16 md:w-24 bg-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-muted-foreground leading-relaxed text-lg md:text-2xl font-light">{about.history}</p>
        </FadeIn>
      </section>



      {/* Leadership */}
      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 md:mb-20" direction="up">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3 md:mb-4">Administration</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tight">Eminent Leadership</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {about.leadership.map((leader, i) => (
              <StaggerItem key={i} direction="up">
                <HoverCard>
                  <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 h-full">
                    <div className="w-full h-64 md:h-80 overflow-hidden rounded-sm">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-primary mb-1">{leader.name}</h3>
                      <p className="text-accent uppercase tracking-wider md:tracking-widest text-[10px] md:text-xs font-semibold mb-3 md:mb-4">{leader.role}</p>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">{leader.bio}</p>
                    </div>
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
