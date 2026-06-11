"use client";

import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ShieldCheck } from "lucide-react";

const groupLogos = [
  { name: "RS Choyal Group", src: "/images/logos/rsc_group.jpg" },
  { name: "Choyal Grinding Solutions", src: "/images/logos/choyal_grinding.png" },
  { name: "CHARGE Milling Institute", src: "/images/logos/charge.jpg" },
  { name: "Shri Agro Industries", src: "/images/logos/shri_agro.png" },
  { name: "Floura", src: "/images/logos/floura.png" },
  { name: "Mavian", src: "/images/logos/mavian.png" },
  { name: "Shrihit", src: "/images/logos/shrihit.png" },
  { name: "Brains Trust Society", src: "/images/logos/brains_trust.jpg" },
  { name: "R. S. Choyal Branding", src: "/images/logos/rs_choyal.jpg" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#f3f4f1] text-[#3e4d46] border-t border-slate-300/80 relative z-10">
      <div className="w-full mx-auto space-y-12">
        
        {/* Group Companies Marquee Slider */}
        <div className="w-full pb-10 border-b border-slate-300/40 space-y-6 marquee-container">
          <div className="text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-black text-[#1c2722] tracking-widest uppercase">
              Our Group Companies &amp; Ventures
            </span>
          </div>

          <div className="flex overflow-hidden w-full select-none gap-6 relative py-2">
            {/* Fade Left/Right overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f3f4f1] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f3f4f1] to-transparent z-20 pointer-events-none"></div>

            <div className="flex shrink-0 animate-marquee items-center gap-6 min-w-full">
              {groupLogos.map((logo, idx) => (
                <div 
                  key={`group-logo-1-${idx}`} 
                  className="w-[185px] h-[95px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-2 shrink-0 hover:shadow-md hover:border-slate-300/80 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex shrink-0 animate-marquee items-center gap-6 min-w-full" aria-hidden="true">
              {groupLogos.map((logo, idx) => (
                <div 
                  key={`group-logo-2-${idx}`} 
                  className="w-[185px] h-[95px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-2 shrink-0 hover:shadow-md hover:border-slate-300/80 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Profile & Accreditations */}
          <div className="lg:col-span-4 space-y-6">

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              RS Choyal Group is a global leader in manufacturing stone grinding mills, premium emery stones, and turnkey milling plants. Pioneering smart IoT milling solutions since 1966.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-slate-600 bg-white px-4 py-2.5 rounded-xl border border-slate-200 inline-block w-fit shadow-xs">
              <ShieldCheck className="h-4.5 w-4.5 text-brand-primary flex-shrink-0" />
              <span className="font-semibold">ISO 9001:2015 Certified Manufacturing Plant</span>
            </div>
          </div>

          {/* Col 2: Product Ranges */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-[#1c2722] tracking-widest uppercase">
              Product Range
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/turnkey-projects" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Turnkey Plant Solutions
                </Link>
              </li>
              <li>
                <Link href="/flour-mills" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Chakki Flour Mills
                </Link>
              </li>
              <li>
                <Link href="/emery-stones" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Daniya Emery Stones
                </Link>
              </li>
              <li>
                <Link href="/emery-stones/agate-sheller-type" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Agate / Sheller Stones
                </Link>
              </li>
              <li>
                <a href="#brands" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Wonder Mill (Smart PLC)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-[#1c2722] tracking-widest uppercase">
              Corporate Info
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" className="text-slate-600 hover:text-brand-primary transition-colors">
                  About the Group
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Infrastructure & R&D
                </a>
              </li>
              <li>
                <a href="#global" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Global Export Network
                </a>
              </li>
              <li>
                <a href="https://rschoyalgroup.com/charge/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-primary transition-colors">
                  CHARGE Milling Institute
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-brand-primary transition-colors">
                  Milling FAQs & Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-[#1c2722] tracking-widest uppercase">
              Locations & Contact
            </h4>
            
            <div className="space-y-4 text-xs font-medium text-slate-600">
              {/* Corporate Tower */}
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-[#1c2722] block">Corporate Headquarters</span>
                  <span>Choyal Tower, Shalimar Colony, Adarsh Nagar, Ajmer – 305008, Rajasthan, India</span>
                </div>
              </div>
              
              {/* Manufacturing Plant */}
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-[#1c2722] block">Palra Manufacturing Unit</span>
                  <span>Plot No. 11-12, RIICO Industrial Area, Palra, Ajmer – 305025, Rajasthan, India</span>
                </div>
              </div>

              {/* Call & Mail */}
              <div className="pt-2 space-y-2 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="h-4.5 w-4.5 text-brand-primary flex-shrink-0" />
                  <a href="tel:+919240289259" className="text-[#1c2722] hover:text-brand-primary font-bold transition-colors">
                    +91 92402 89259
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4.5 w-4.5 text-brand-primary flex-shrink-0" />
                  <a href="mailto:info@rschoyalgroup.com" className="text-slate-600 hover:text-brand-primary transition-colors">
                    info@rschoyalgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4.5 w-4.5 text-brand-primary flex-shrink-0" />
                  <a href="https://www.rschoyalgroup.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-primary transition-colors">
                    www.rschoyalgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-slate-500 font-medium">
          <p>
            © {currentYear} RS Choyal Group. All rights reserved. 
            <span className="block sm:inline sm:ml-2">· CIN: U29191RJ1999PTC015792 ·</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="italic">Wonder Mill®, Emery Stone Dresser®, and Choyal® are registered trademarks.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
