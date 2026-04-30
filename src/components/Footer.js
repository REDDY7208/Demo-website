"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import data from "@/data/data.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl">
                <BookOpen size={24} />
              </div>
              <span className="font-serif font-semibold text-2xl tracking-widest uppercase">
                {data.school.logo}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {data.school.tagline} {data.school.about_snippet}
            </p>
            <div className="flex gap-4">
              <a href={data.contact.socialLinks.facebook} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Globe size={20} /></a>
              <a href={data.contact.socialLinks.twitter} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Youtube"><Globe size={20} /></a>
              <a href={data.contact.socialLinks.instagram} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Globe size={20} /></a>
              <a href={data.contact.socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link href="/academics" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} /> Academics</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} /> Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"><ArrowRight size={14} /> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{data.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-sm">{data.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-sm">{data.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get the latest news and updates from our academy.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-muted border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground border border-primary rounded-lg px-4 py-3 text-xs uppercase tracking-widest font-medium hover:bg-transparent hover:text-primary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} {data.school.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
