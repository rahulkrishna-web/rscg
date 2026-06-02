"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Database, Archive } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const handlingCards = [
  {
    title: "Steel Silo",
    slug: "grain-silo",
    image: "https://rschoyalgroup.com/wp-content/uploads/2021/03/Grain-Silo.jpg",
    sub: "Silo Storage"
  },
  {
    title: "Flat Silo",
    slug: "conditioning-silo",
    image: "https://rschoyalgroup.com/wp-content/uploads/2021/03/Atta-Silo.jpg",
    sub: "Silo Storage"
  },
  {
    title: "Grain Tempering Silo",
    slug: "bran-silo",
    image: "https://rschoyalgroup.com/wp-content/uploads/2021/03/Bran-Sailo.jpg",
    sub: "Silo Storage"
  },
  {
    title: "Z-elevator",
    slug: "neo-matic",
    image: "https://rschoyalgroup.com/wp-content/uploads/2021/03/Nio-Matic.jpg",
    sub: "Handling Systems"
  }
];

export default function GrainStorageHandlingPage() {


  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_1.webp')] bg-cover bg-center" />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block bg-brand-tertiary text-slate-900 font-black text-xs sm:text-sm px-5 py-2.5 uppercase tracking-widest shadow-md">
              Grain Storage &amp; Handling
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              P.S. Group offers silos storage system keeping in mind the standard of safety and quality of the storage system.
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Grain storage &amp; handling is crucial for maintaining the quality of grain
          </h2>
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-4xl">
            <p>
              RS Group offers reliable grain storage and handling solutions designed for efficiency and long-term preservation.
            </p>
            <p>
              Our silos storage systems are manufactured keeping in mind the standard of safety and quality of the storage system. Our engineering team designs customized silo systems to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full py-8 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {handlingCards.map((card) => (
              <Link 
                key={card.slug}
                href={`/catalog/${card.slug}`}
                className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-8 relative border-b border-slate-100 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <Database className="h-4 w-4" />
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-lg transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {card.sub}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                    <span>View Specifications</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Landscape Banner */}
      <section className="relative w-full h-[240px] sm:h-[320px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_3.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            Consult on Grain Storage &amp; Handling Layouts
          </h2>
          <Link 
            href="/contact"
            className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-slate-900 font-extrabold px-6 py-3 rounded-xl text-sm shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Get in Touch!</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>



      <Footer />
    </div>
  );
}
