"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import data from "@/data/data.json";
import { FadeIn } from "./Animations";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CampusSlider() {
  const images = data.gallery.images.slice(0, 5); // Use first 5 images for the slider

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <FadeIn direction="up">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3 md:mb-4">The Estate</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary-foreground tracking-tight">Our Historic Campus</h3>
          </FadeIn>
          
          {/* Custom Navigation Buttons */}
          <FadeIn direction="up" delay={0.2} className="flex gap-4 hidden md:flex">
            <button className="swiper-button-prev-custom flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button className="swiper-button-next-custom flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </FadeIn>
        </div>
      </div>

      <FadeIn direction="up" delay={0.4} className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{ 
            clickable: true,
            el: ".swiper-pagination-custom"
          }}
          className="w-full h-[50vh] md:h-[70vh]"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative w-full h-full">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-12 left-4 right-4 md:right-auto md:bottom-12 md:left-12 bg-card/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-3 border border-border">
                  <p className="font-serif text-base md:text-lg text-primary">{img.alt}</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">{img.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-4 md:mt-6 absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10"></div>
        </Swiper>
      </FadeIn>
      
      {/* Add custom Swiper pagination styles in globals.css or here */}
      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.4);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: var(--color-accent);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
