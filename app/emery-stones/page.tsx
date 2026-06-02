"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EmeryStones() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1c2722] font-sans relative overflow-hidden">
      
      <Header />

      {/* Hero Banner Section */}
      <section className="w-full relative h-[380px] sm:h-[420px] lg:h-[480px] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <Image 
          src="/images/emery-stones-banner.jpg" 
          alt="RS Choyal Emery Stones Banner" 
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        
        {/* Banner Content Container */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent"></div>
        
        <div className="relative w-full h-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            {/* Gold Title Box */}
            <div className="inline-block bg-[#f5a623] px-6 py-4 rounded-xs shadow-md">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tight">
                Emery Stones
              </h1>
            </div>
            
            {/* White Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-md leading-relaxed max-w-lg">
              Emery Stones are high in quality maintaining the aroma & taste of the flour.
            </p>
          </div>
        </div>

        {/* Choyal Branding Logo on Top Right */}
        <div className="absolute top-6 right-6 sm:right-12 lg:right-16 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-xl shadow-md hidden sm:block border border-white/20">
          <img 
            src="/choyal-logo.png" 
            alt="Choyal Grinding Solution Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="w-full py-10 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 border-b border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto text-center">
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-medium italic">
            "Your favourite recipe will be made with the great taste of 100% whole grain goodness and all the nutrition from every grain with Our flour mills."
          </p>
        </div>
      </section>

      {/* Select Category Grid */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Select your Category
            </h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Category 1: Daniya Type */}
            <Link 
              href="/emery-stones/daniya-type"
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8">
                <img 
                  src="/images/emery-stone-daniya.jpg" 
                  alt="Horizontal Emery Stones - Daniya Type"
                  className="object-contain max-h-full max-w-full group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors">
                  Horizontal Emery Stones - Daniya Type
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Designed and manufactured with premium abrasives to maintain natural wheat aroma & taste.
                </p>
              </div>
            </Link>

            {/* Category 2: Agate/Sheller Type */}
            <Link 
              href="/emery-stones/agate-sheller-type"
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8">
                <img 
                  src="/images/sheller-emery-stones.jpg" 
                  alt="Horizontal Emery Stones - Agate/Sheller Type"
                  className="object-contain max-h-full max-w-full group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors">
                  Horizontal Emery Stones - Agate/Sheller Type
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Agate shelling stones optimized for de-husking, pulse splitting, and industrial mill pre-cleaning.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
