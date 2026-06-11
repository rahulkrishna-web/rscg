"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, Ruler, Box, Sparkles, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceCard {
  title: string;
  desc: string;
  imagePath: string;
  icon: any;
  features: string[];
}

const serviceCards: ServiceCard[] = [
  {
    title: "Technical Design",
    desc: "Our Design Studio is able to convert your ideas to reality by offering customised turnkey solutions, making every project better than the previous! We can tailor-fit our design and creative solutions to the varying needs of our clients.",
    imagePath: "/images/design-media/technical-design.png",
    icon: Ruler,
    features: [
      "3D CAD equipment modeling",
      "Structural layout planning",
      "Custom turnkey parameters",
      "High-fidelity visual renders"
    ]
  },
  {
    title: "Design for Manufacturing",
    desc: "A great mill not only needs to work well but also must be manufactured reliably. Our design team takes into account the materials and manufacturing processes in order to create a design which is as functionally and cost effective as possible giving you a sustainable and economical processing plant.",
    imagePath: "/images/design-media/design-for-manufacturing.png",
    icon: Factory,
    features: [
      "Optimized fabrication layouts",
      "Sustainable material selection",
      "Cost-effective operations",
      "Seamless equipment integration"
    ]
  },
  {
    title: "Packaging Design",
    desc: "Product packaging is key to create the first impression to the customers about your product. The customer purchases the product only when they like, relate, and approve the brand manufacturing the product. For start-ups or multinationals, our philosophy is the same—leave no stone unturned in the pursuit of beautiful, effective, and consistent brand stories across all packaging segments.",
    imagePath: "/images/design-media/packaging.jpg",
    icon: Box,
    features: [
      "Shelf-ready product mockups",
      "Consistent label architecture",
      "Beautiful brand stories",
      "Premium finishing & typography"
    ]
  }
];

export default function DesignMediaPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/design-media/banner.jpg')] bg-cover bg-center opacity-35" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Design & Media
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Creative design studio, layout engineering, and brand packaging solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center justify-center gap-1.5 mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Design & Media</span>
          </div>

          {/* Intro Section */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Studio & Engineering Division</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
              Bespoke Layout Engineering & Consistent Brand Stories
            </h2>
            <p className="text-slate-650 font-semibold text-sm sm:text-base leading-relaxed">
              Our design & media team is at your service to develop your business solutions targeted for specific marketplaces. 
              From initial structural calculations and equipment modeling to commercial shelf-ready packaging, we ensure every detail 
              aligns with high-efficiency operations and brand consistency.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] text-center">
            <div className="space-y-1">
              <h4 className="text-3xl font-black text-brand-primary font-heading">245+</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 font-extrabold uppercase tracking-wider">
                Turnkey Projects Delivered
              </p>
            </div>
            <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-slate-200 py-4 sm:py-0">
              <h4 className="text-3xl font-black text-brand-primary font-heading">42+</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 font-extrabold uppercase tracking-wider">
                Patents & Innovations
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl font-black text-brand-primary font-heading">60+</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 font-extrabold uppercase tracking-wider">
                Years of Industrial Legacy
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-200/60 rounded-[32px] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-52 w-full overflow-hidden bg-slate-100 flex items-center justify-center border-b border-slate-100">
                      <img 
                        src={card.imagePath} 
                        alt={card.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-md sm:text-lg font-heading font-black text-slate-850 leading-snug group-hover:text-brand-primary transition-colors">
                          {card.title}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                        {card.desc}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-[11px] sm:text-xs text-slate-400 font-bold flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* CTA Section */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Discuss Your Design & Media Project
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            Let's plan your customized mill layout, 3D modeling projections, or premium retail packaging design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20discussing%20a%20design%20and%20media%20project."
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
              Contact Studio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
