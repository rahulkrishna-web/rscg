"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, Globe, Shield, Code, ShoppingCart, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface SolutionCard {
  title: string;
  desc: string;
  imagePath: string;
  features: string[];
}

const solutionCards: SolutionCard[] = [
  {
    title: "Website Development",
    desc: "Build a powerful, responsive digital presence tailored to represent your brand. From corporate identity landing pages to sophisticated multi-tier web portals.",
    imagePath: "/images/web-solutions/code.png",
    features: [
      "Responsive layout for mobile, tablet, and desktop",
      "High performance & fast loading speeds",
      "Search Engine Optimization (SEO) structured code",
      "Robust security & privacy compliance"
    ]
  },
  {
    title: "E-Commerce Solutions",
    desc: "Turn your business into an online retail powerhouse. We develop secure, scalable, and conversion-optimized storefronts that streamline inventory and sales.",
    imagePath: "/images/web-solutions/ecom.png",
    features: [
      "Custom shopping carts & secure checkout checkout",
      "Integrated credit cards, UPI, and net banking gateways",
      "Automated stock monitoring & inventory management",
      "Customer analytics & marketing telemetry panels"
    ]
  },
  {
    title: "CMS Development",
    desc: "Empower your team with intuitive content management frameworks. Update pages, upload media, publish news posts, and structure your catalog without writing code.",
    imagePath: "/images/web-solutions/cms.png",
    features: [
      "User-friendly admin dashboards and controls",
      "WordPress & headless CMS customization",
      "Role-based edit permissions and approval loops",
      "Scalable database models & media libraries"
    ]
  }
];

export default function WebSolutionsPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/web-solutions/banner.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Web Solutions
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Creating bespoke solutions for your business requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Web Solutions</span>
          </div>

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                Digital Presence & Telemetry
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                Establish Your Brand & Empower Your Operations Online
              </h2>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                If you want to turn your small business into a big one, at some point you’re going to need to go digital. 
                Our team will guide you through the process and create your digital presence. Be it a business website, 
                e-commerce shop, content management system, or custom web platform, we build the solutions your business needs.
              </p>
              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#004d26] hover:bg-[#003c1e] text-white text-xs font-black uppercase tracking-wider px-6 py-3 transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200/60 p-4 rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="/images/web-solutions/website-gif.gif" 
                alt="Web Solutions GIF Animation" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-12 mb-24">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-wider">
                Services Offered
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Comprehensive digital platforms designed to drive business efficiency and online engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutionCards.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-200/60 rounded-[32px] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center p-6 border-b border-slate-100">
                      <img 
                        src={item.imagePath} 
                        alt={item.title} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h4 className="text-md sm:text-lg font-heading font-black text-slate-850 leading-snug group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-[11px] sm:text-xs text-slate-400 font-bold flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA Section */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Build Your Digital Presence
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            We develop custom websites, e-commerce stores, content management platforms, and web telemetry systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20discussing%20a%20web%20solutions%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-secondary text-brand-foreground hover:bg-brand-secondary/90 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              <Phone className="w-4 h-4" />
              Discuss via WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Contact Developer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
