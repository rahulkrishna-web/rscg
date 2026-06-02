"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Shield, Layers, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/app/catalog/productsData";

export default function GrainProcessingPage() {


  // The 6 exact products for grain processing
  const targetSlugs = [
    "magnetic-separator",
    "intensive-dampener",
    "bran-finisher",
    "horizontal-scourer",
    "emery-polisher",
    "entoletor"
  ];

  const processingProducts = targetSlugs.map(slug => 
    productsData.find(p => p.slug === slug)
  ).filter(Boolean);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/plants/12.webp')] bg-cover bg-center" />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block bg-brand-tertiary text-slate-900 font-black text-xs sm:text-sm px-5 py-2.5 uppercase tracking-widest shadow-md">
              Grain Processing
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Flour mills are built of bunch of machinery and cleaner plays the main role in cleaning of the grain.
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            A cleaning section plays the main role
          </h2>
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-4xl">
            <p>
              Separation of the impurities, dust, stones, straw, sand, metal and other grains from the wheat is very important to get a quality flour.
            </p>
            <p>
              Our machinery operates cleaning and separation section for various grains. Our expert team have worked closely to develop the finest solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full py-8 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processingProducts.map((product) => {
              if (!product) return null;
              return (
                <Link 
                  key={product.slug}
                  href={`/catalog/${product.slug}`}
                  className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col"
                >
                  {/* Image Area */}
                  <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-8 relative border-b border-slate-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                      <Settings className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Details Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-lg transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Cleaning &amp; Processing
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                      <span>View Specifications</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get in Touch Landscape Banner */}
      <section className="relative w-full h-[240px] sm:h-[320px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_3.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            Need a Customized Cleaning Line Setup?
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
