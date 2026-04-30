"use client";

import { useState } from "react";
import data from "@/data/data.json";
import { X, ZoomIn } from "lucide-react";
import { FadeIn } from "@/components/Animations";

export default function GalleryPage() {
  const { gallery } = data;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", ...gallery.categories];
  const filteredImages = activeCategory === "All"
    ? gallery.images
    : gallery.images.filter(img => img.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-background">
      <section
        className="relative min-h-[50vh] flex items-end pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${gallery.headerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Visual Tour</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white mt-3 leading-tight tracking-tight">Gallery</h1>
            <p className="text-lg text-gray-300 max-w-xl mt-4 font-light">Glimpses of life, learning, and events at Gautam High School.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${activeCategory === cat ? "bg-accent text-white shadow-lg" : "bg-muted text-muted-foreground hover:text-accent"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredImages.map((img, i) => (
              <div key={img.id}
                className={`relative group overflow-hidden cursor-pointer rounded-xl bg-muted ${i % 7 === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
                onClick={() => setSelectedImage(img)}>
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-serif text-sm">{img.alt}</p>
                  <span className="text-accent text-[10px] uppercase tracking-widest">{img.category}</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl mx-auto" />
            <div className="text-center mt-4">
              <p className="text-white font-serif text-lg">{selectedImage.alt}</p>
              <span className="text-accent text-xs uppercase tracking-widest">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
