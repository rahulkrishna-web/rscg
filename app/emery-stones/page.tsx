"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Disc, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EmeryStones() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1c2722] font-sans relative overflow-hidden">
      
      <Header />

      {/* Hero Banner Section */}
      <section className="w-full relative h-[600px] lg:h-[700px] overflow-hidden bg-[#061a10]">
        {/* Background Image */}
        <Image 
          src="/images/emerystone_hero.png" 
          alt="Emery Stones Division" 
          fill
          priority
          className="object-cover object-center lg:object-right opacity-80"
        />
        
        {/* Banner Content Container (Gradient Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/95 via-[#0B1510]/80 to-transparent"></div>
        
        <div className="relative w-full h-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto flex flex-col justify-center">
          <div className="max-w-2xl space-y-8 mt-12">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="text-[#cba460] font-bold text-xs tracking-[0.2em] uppercase">
                Emery Stones Division
              </span>
              <div className="h-px w-12 bg-[#cba460]/40"></div>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-none">
              Emery Stones.
            </h1>
            
            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-lg">
              High-performance emery stones engineered for precision grinding, consistent flour quality, and long service life across commercial stone mills.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#f7b032] hover:bg-[#ffc254] text-[#0B1510] font-black uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(247,176,50,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Emery Stones</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Key Proof Points Bar */}
      <div className="relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Precision Grinding</h3>
            <p className="text-xs text-slate-500 leading-relaxed">High-performance emery stones engineered for precise grinding.</p>
          </div>
          <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Consistent Finish</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Consistent flour quality across commercial stone mills.</p>
          </div>
          <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Long-Lasting Performance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Long service life across commercial stone mills.</p>
          </div>
        </div>
      </div>

      {/* Editorial Quote Section */}
      <section className="w-full pb-10 pt-4 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 border-b border-slate-200/50 -mt-10 sm:-mt-12 lg:-mt-14 relative z-20">
        <div className="w-full max-w-[1440px] mx-auto text-center mt-6">
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-medium italic">
            "Your favourite recipe will be made with the great taste of 100% whole grain goodness and all the nutrition from every grain with Our flour mills."
          </p>
        </div>
      </section>

      {/* Select Category Grid */}
      <section id="categories" className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Select your Category
            </h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Category 1: Daniya Type */}
            <Link 
              href="/emery-stones/daniya-type"
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8">
                <img 
                  src="/images/emery-stone-daniya.jpg" 
                  alt="Horizontal Emery Stones - Daniya Type"
                  className="object-contain max-h-full max-w-full group-hover:scale-103 transition-transform duration-300 mix-blend-multiply"
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
                  className="object-contain max-h-full max-w-full group-hover:scale-103 transition-transform duration-300 mix-blend-multiply"
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

            {/* Category 3: Emery Stone Dresser */}
            <Link 
              href="/emery-stones/emery-stone-dresser"
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8">
                <img 
                  src="/images/stone_dresser_hero.png" 
                  alt="Emery Stone Dresser"
                  className="object-contain max-h-full max-w-full group-hover:scale-103 transition-transform duration-300 mix-blend-multiply"
                />
              </div>
              <div className="p-6 text-center flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors">
                    Emery Stone Dresser
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 font-medium">
                    Engineered to restore and maintain the cutting profile of emery stones for consistent performance.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
