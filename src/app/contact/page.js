"use client";

import { useState } from "react";
import data from "@/data/data.json";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const { contact } = data;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-24 md:pt-32 pb-32 md:pb-40 text-primary-foreground text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 md:mb-6 tracking-tight text-white">Contact Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Begin your journey with St. Jude International. We welcome inquiries from prospective families.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 mb-16 md:mb-32 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8 mt-12 lg:mt-0">
            <div className="editorial-card p-8 md:p-10 bg-primary text-primary-foreground h-full">
              <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-6 md:mb-8">Admissions Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl">Address</h4>
                    <p className="text-primary-foreground/70 mt-1 font-light">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl">Phone</h4>
                    <p className="text-primary-foreground/70 mt-1 font-light">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl">Email</h4>
                    <p className="text-primary-foreground/70 mt-1 font-light">{contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

    {/* Contact Form */}
    <div className="lg:col-span-2">
      <div className="editorial-card p-8 md:p-14 bg-card border border-border">
        <h3 className="text-2xl md:text-3xl font-serif text-primary tracking-tight mb-6 md:mb-8">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500 text-green-700 p-6 rounded-2xl text-center flex flex-col items-center justify-center h-[300px]">
                  <Send className="w-12 h-12 mb-4 text-green-500" />
                  <h4 className="text-xl font-serif text-primary mb-2">Message Received</h4>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-border px-0 py-3 text-sm focus:outline-none focus:border-accent transition-all rounded-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-border px-0 py-3 text-sm focus:outline-none focus:border-accent transition-all rounded-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border px-0 py-3 text-sm focus:outline-none focus:border-accent transition-all rounded-none"
                      placeholder="Admissions Inquiry"
                    />
                  </div>

                  <div className="space-y-2 mt-8">
                    <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border px-0 py-3 text-sm focus:outline-none focus:border-accent transition-all resize-none rounded-none"
                      placeholder="How can we assist you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-3 hover:bg-accent transition-colors duration-500 disabled:opacity-70 mt-8"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Transmitting...</span>
                    ) : (
                      <>Send Inquiry <Send size={16} strokeWidth={2} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[500px] w-full bg-muted border-y border-border p-2">
        <iframe 
          src={contact.mapEmbedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
}
