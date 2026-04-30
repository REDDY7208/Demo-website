"use client";

import { useState } from "react";
import data from "@/data/data.json";
import { X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const { gallery } = data;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === "All" 
    ? gallery.images 
    : gallery.images.filter(img => img.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${gallery.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 md:mb-6 tracking-tight">Gallery</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed px-2">Glimpses of life, learning, and events at our academy.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16 border-b border-border pb-6 md:pb-8">
            {gallery.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs tracking-[0.2em] uppercase font-semibold transition-all relative ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-accent"></div>
                )}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filteredImages.map((img) => (
              <div 
                key={img.id} 
                className="relative group overflow-hidden cursor-pointer aspect-square bg-muted"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ZoomIn className="text-white scale-50 group-hover:scale-100 transition-transform duration-500" size={32} strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
