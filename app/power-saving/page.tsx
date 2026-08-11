"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

export default function PowerSavingPage() {
  const { addToQuote } = useQuote();

  const products = [
    {
      name: "Wonder Mill",
      tag: "Save up to 30%",
      desc: "A high-efficiency automated stone mill engineered for improved output, consistent flour quality, and lower power usage.",
      img: "/images/power-saving/wondermill_supplementimg.png",
      href: "/catalog/wonder-mill",
      code: "WONDERMILL"
    },
    {
      name: "Wonder Miller",
      tag: "Save up to 30%",
      desc: "An intelligent PLC-based automation system designed to optimize stone milling, maximize productivity, and ensure consistent grinding performance.",
      img: "/images/power-saving/wondermiller_supplementalimg.jpg",
      href: "/catalog/wonder-miller",
      code: "WONDERMILLER"
    },
    {
      name: "iQuadra",
      tag: "Save up to 30%",
      desc: "A smart mill solution engineered to deliver up to 30% power savings, higher productivity, and precision-controlled flour production.",
      img: "/images/power-saving/quadra_supplementalimg.png",
      href: "/catalog/iquadra-mill",
      code: "IQUADRA"
    },
    {
      name: "Floura",
      tag: "Save 15-30%",
      desc: "A versatile stone flour milling solution designed for reliable grinding, superior flour quality, and efficient daily operation.",
      img: "/images/power-saving/floura_supplementalimg.png",
      href: "/catalog/floura",
      code: "FLOURA"
    },
    {
      name: "Emery Stone Dresser",
      tag: "3-4 min per groove dressed",
      desc: "A precision stone dressing machine engineered to restore grinding efficiency, extend stone life, and minimize production downtime.",
      img: "/images/power-saving/emerydresser_supplementalimg.jpg",
      href: "/catalog/emery-stone-dresser",
      code: "STONEDRESSER"
    },
    {
      name: "Neomatic",
      tag: "Save 10-30%",
      desc: "A fully automated pneumatic conveying system designed for efficient material handling, reliable operation, and reduced energy consumption.",
      img: "/images/power-saving/neomatic_supplementimg.png",
      href: "/catalog",
      code: "NEOMATIC"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-[#0a3118] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/power-saving/powersaving_hero.png"
            alt="Power Saving Control System"
            fill
            priority
            className="object-cover object-right lg:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#0a3118] from-0% via-[#0a3118]/70 via-[30%] to-transparent lg:to-[60%] z-10 w-full" />

        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Power Saving</span>
            </div>

            <div className="inline-block bg-[#eab308] text-[#0a3118] text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
              Power Saving
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
              Innovative Energy Solutions for Modern Mill Operations
            </h1>
            
            <p className="text-lg text-slate-200 font-medium max-w-xl">
              Engineered systems and intelligent controls that reduce power consumption, improve efficiency, and lower operating costs across the complete milling plant.
            </p>
          </div>
        </div>
      </section>

      {/* Optimize Energy Consumption */}
      <section className="w-full py-20 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Content Left */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118]">
              Optimize Energy Consumption
            </h2>
            <div className="w-16 h-1 bg-[#eab308] mb-6"></div>
            
            <div className="space-y-5 text-slate-600 font-medium leading-relaxed">
              <p>
                With rising power costs, energy optimization in flour milling has become critical. RS Choyal Group provides specialized systems that balance grinding pressure, motor speed, grain flow, and process loads to achieve maximum output with minimum electrical consumption.
              </p>
              <p>
                Our energy-efficient electronics, smart PLC-driven feeding systems, optimized transmission components, and intelligent control systems help reduce friction losses, load imbalance, and unnecessary power spikes. This enables smoother operation and better overall plant efficiency.
              </p>
              <p>
                High-efficiency drives, digital control loops, and advanced software work together to reduce energy waste, protect operating margins, and improve long-term plant reliability.
              </p>
            </div>
          </div>

          {/* Quick Links Right */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-heading font-extrabold text-[#0a3118] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "About us", href: "/about" },
                  { label: "Products", href: "/products" },
                  { label: "Turnkey Solutions", href: "/turnkey-projects" },
                  { label: "Power Saving", href: "/power-saving" },
                  { label: "Flour Mill", href: "/flour-mills" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="flex items-center gap-3 text-slate-700 hover:text-[#0a3118] font-bold transition-colors group">
                      <div className="text-[#eab308] group-hover:translate-x-1 transition-transform">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advanced Milling Products */}
      <section className="w-full py-20 bg-slate-50 border-t border-slate-200/60 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118] mb-4">
            Our Advanced Milling Products
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Optimized and Automated solutions for your milling needs.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-[#F9F6F0] text-[#0a3118] text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm z-10">
                  {product.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-heading font-extrabold text-[#0a3118] mb-3">{product.name}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link href={product.href} className="text-sm font-bold text-[#0a3118] hover:text-[#eab308] flex items-center gap-1 transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => addToQuote({ 
                      id: product.code, 
                      name: product.name, 
                      image: product.img 
                    })}
                    className="flex items-center gap-2 text-sm font-bold border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 text-[#eab308]" />
                    Add to Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits Strip */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white border-b border-slate-200/60">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {[
            { title: "Lower power consumption", icon: "/images/power-saving/lower_power_consumption.png" },
            { title: "Improved efficiency", icon: "/images/power-saving/Improved_Efficiency.png" },
            { title: "Reduced wear & maintenance", icon: "/images/power-saving/Reduced_Wear_Maintenance.png" },
            { title: "Greener operations, lower footprint", icon: "/images/power-saving/Greener_Operations_Lower_Footprint.png" }
          ].map((benefit, idx) => (
            <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src={benefit.icon} alt={benefit.title} fill className="object-contain" />
              </div>
              <h4 className="font-bold text-[#0a3118] text-sm leading-snug">{benefit.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Power Saving Setup */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50">
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-green-500"></div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118]">
              Benefits of Power Saving Setup
            </h2>
            <div className="h-px w-12 bg-green-500"></div>
          </div>
          <p className="text-slate-500 font-medium max-w-2xl">
            Pioneering mechanical and control solutions engineered for real savings.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Improved Yield",
              desc: "Stable and optimized grinding preserves grain structure, leading to higher recovery rates and less heat-related waste.",
              icon: "/images/power-saving/Improved_Efficiency.png" 
            },
            {
              title: "Improved Lifetime",
              desc: "Balanced loads reduce thermal stress and mechanical vibration on key components, extending equipment life.",
              icon: "/images/power-saving/improved_lifetime.png"
            },
            {
              title: "Reduced Operational Cost",
              desc: "Intelligent load control limits spikes and optimizes power factor, saving up to 30-40% on monthly electricity bills.",
              icon: "/images/power-saving/reduced_operation_cost.png"
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#0a3118]/5 flex items-center justify-center flex-shrink-0 relative p-4">
                <Image src={benefit.icon} alt={benefit.title} fill className="object-contain p-4" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-extrabold text-[#0a3118] mb-3">{benefit.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full bg-[#0a3118] text-white py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-black mb-2">Save Energy. Save Costs. Increase Efficiency.</h2>
            <p className="text-white/80 font-medium text-sm sm:text-base max-w-xl">
              Upgrade your plant with intelligent power-saving solutions from RS Choyal Group.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap"
          >
            TALK TO OUR EXPERT <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
