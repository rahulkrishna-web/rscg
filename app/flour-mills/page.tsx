"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { flourMillsProducts } from "./flourMillsData";

export default function FlourMills() {
  const router = useRouter();
  const productsSectionRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    {
      name: "Digital Mills",
      image: "/category-selection-img/digital_supplementimg.png",
      desc: "Touch screen PLC-driven smart grinders.",
      filter: "Digital Mills"
    },
    {
      name: "Semi-Automatic",
      image: "/category-selection-img/semiautomatic_supplementalimg.png",
      desc: "Sensor-controlled modern mill plants.",
      filter: "Semi-Automatic"
    },
    {
      name: "Horizontal Mills / Sheller",
      image: "/category-selection-img/horizontalmill_supplementimg.png",
      desc: "High capacity gear and pulley drive experts.",
      filter: "Horizontal Mills / Sheller"
    }
  ];

  const filteredProducts = activeTab === "All" 
    ? flourMillsProducts 
    : flourMillsProducts.filter(p => p.category === activeTab);

  const handleCategorySelect = (categoryFilter: string) => {
    setActiveTab(categoryFilter);
    productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary/20">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/plants/flourmill_hero.png" 
            alt="Flour Milling Plants" 
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/95 via-[#0B1510]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-2xl">
            <span className="inline-block py-1.5 px-3 rounded-lg bg-[#f7b032] text-[#0B1510] font-black text-xs tracking-widest uppercase mb-6 shadow-sm border border-[#f7b032]">
              Commercial Milling
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6 tracking-tight">
              Flour Mills & <br className="hidden sm:block" />
              Grinding Plants
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-xl">
              Advanced stone milling technology engineered for high-capacity continuous production, uniform flour quality, and long-term reliability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => productsSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#f7b032] hover:bg-[#ffc254] text-[#0B1510] font-black uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(247,176,50,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Products</span>
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
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Digital Mills</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Touch screen PLC-driven smart grinders for high capacity and efficiency.</p>
          </div>

          <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Semi-Automatic & Sheller Mills</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Sensor-controlled modern mill plants engineered for precision grinding.</p>
          </div>

          <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Operate From Anywhere</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Track status and remote working easily with connected milling technology.</p>
          </div>

        </div>
      </div>

      <section className="pt-4 sm:pt-8 lg:pt-12 pb-24 bg-slate-50 relative -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-850 tracking-tight">
              Select Your Category
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our specific engineering ranges to find the right grinding solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategorySelect(cat.filter)}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/50 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer"
              >
                <div className="relative w-full aspect-square sm:aspect-[4/3] bg-slate-50 border-b border-slate-100">
                  <Image 
                    src={cat.image} 
                    alt={cat.name}
                    fill
                    className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 w-full flex flex-col items-center">
                  <h3 className="font-heading font-bold text-slate-800 group-hover:text-brand-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      <section ref={productsSectionRef} className="py-24 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 space-y-12">
          
          {/* Tab Filter bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-slate-200/60 pb-6">
            {["All", "Digital Mills", "Semi-Automatic", "Horizontal Mills / Sheller"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === tab
                    ? "bg-brand-primary text-white scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
            {filteredProducts.map((prod) => (
              <Link
                key={prod.id}
                href={`/flour-mills/${prod.id}`}
                className="group flex flex-col bg-white rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="relative aspect-square sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                  <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-[10px] font-black uppercase text-brand-primary px-2.5 py-1 rounded-full border border-slate-200/50 shadow-sm">
                    {prod.category}
                  </span>
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                  <Image 
                    src={prod.heroImage} 
                    alt={prod.title} 
                    fill
                    className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-850 tracking-tight group-hover:text-brand-primary transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed flex-1">
                    {prod.desc}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between text-brand-primary font-bold text-sm">
                    <span>View Product</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Link to Contact CTA Banner */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-slate-50 border-t border-slate-200/50 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
            Get in touch
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-slate-850 tracking-tight">
            Ready to Submit Specifications for a Proposal?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tell us about your processing space, layout constraints, power limits, and capacity requirements. 
            Our technical sales team will compile a layout and detailed pricing offer.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact"
              className="inline-flex bg-brand-primary hover:bg-brand-primary/95 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm gap-2 items-center"
            >
              <span>Contact Sales Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
