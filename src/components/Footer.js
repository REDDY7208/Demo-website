"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import data from "@/data/data.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Top CTA band */}
      <div className="bg-accent py-10 md:py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-3xl font-serif text-white font-light">Ready to join Gautam High School?</h3>
            <p className="text-white/70 mt-1 text-sm">Admissions open for 2025–26. Limited seats available.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-accent font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-white/90 transition-colors">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo/logo.png" alt="Gautam High School" width={52} height={52} className="rounded-xl object-contain" />
              <span className="font-serif font-semibold text-xl tracking-widest uppercase text-white">Gautam</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              {data.school.tagline} Proddatur, Andhra Pradesh.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: data.contact.socialLinks.facebook },
                { label: "Instagram", href: data.contact.socialLinks.instagram },
                { label: "Youtube", href: data.contact.socialLinks.twitter },
                { label: "Twitter", href: data.contact.socialLinks.linkedin },
              ].map(({ href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 text-xs font-bold">
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Academics", href: "/academics" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}
                    className="text-white/60 hover:text-accent transition-colors inline-flex items-center gap-2 text-sm group">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{data.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={16} className="text-accent shrink-0" />
                <span className="text-sm">{data.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={16} className="text-accent shrink-0" />
                <span className="text-sm">{data.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-6">Stay Updated</h3>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">Get school news, events, and updates in your inbox.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all"
                required
              />
              <button type="submit"
                className="bg-accent text-white rounded-xl px-4 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-accent/80 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">&copy; {currentYear} {data.school.name}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/30">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
