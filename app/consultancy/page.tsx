"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden flex flex-col justify-end bg-[#0D301F]">
          <div className="absolute inset-0 bg-[url('/images/consultancy/hero-banner/consultancy_hero.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#0B2C1C] from-0% via-[#0B2C1C]/70 via-[30%] to-transparent lg:to-[60%] z-10 w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C1C] via-[#0B2C1C]/60 to-transparent z-10 h-1/2 mt-auto" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-between pt-16 pb-12 sm:pb-16">
            
            <div className="space-y-4 max-w-2xl mt-8">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#D3994B] rounded-sm transform rotate-45" /> SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Consultancy<br/>
                <span className="text-white font-normal">for </span><span className="text-[#D3994B]">Flour Milling</span><span className="text-white font-normal"> Success</span>
              </h1>
              <div className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-4 max-w-lg space-y-3">
                <p>Expert guidance to help you enter, scale and excel in the flour milling industry.</p>
                <p>From concept to continuous improvement, we are your strategic partner at every step.</p>
              </div>
            </div>

            {/* Hero Highlights - Bottom Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-12 border-t border-white/10 pt-8">
              {[
                { icon: "/images/consultancy/hero-banner-icons/industry-expertise.png", title: "Industry Expertise", desc: "Decades of experience in flour milling" },
                { icon: "/images/consultancy/hero-banner-icons/data-driven-approach.png", title: "Data Driven Approach", desc: "Practical solutions backed by analysis" },
                { icon: "/images/consultancy/hero-banner-icons/end-to-end-support.png", title: "End-to-End Support", desc: "From planning to performance improvement" },
                { icon: "/images/consultancy/hero-banner-icons/sustainable-growth.png", title: "Sustainable Growth", desc: "Build efficient, future-ready milling businesses" }
              ].map((highlight, idx) => (
                <div key={idx} className="flex flex-col items-start gap-3">
                  <img src={highlight.icon} alt={highlight.title} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-xs sm:text-sm">{highlight.title}</h4>
                    <p className="text-slate-400 text-[10px] sm:text-xs leading-tight pr-4">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* How We Add Value Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
              How We Add Value
            </h3>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Market Entry Strategy",
                desc: "Assess opportunities, demand, competition and regulations to build a winning entry strategy.",
                icon: "/images/consultancy/how-we-add-value/market-entry-and-strategy.png"
              },
              {
                title: "Plant Planning & Design",
                desc: "Optimize plant layout, capacity, machinery selection and material flow for maximum efficiency.",
                icon: "/images/consultancy/how-we-add-value/plant-planning-and-design.png"
              },
              {
                title: "Process Optimization",
                desc: "Improve yield, quality, capacity and energy efficiency through process improvements.",
                icon: "/images/consultancy/how-we-add-value/process-optimization.png"
              },
              {
                title: "Raw Material & Sourcing",
                desc: "Guidance on wheat quality, sourcing strategy and inventory management for consistent production.",
                icon: "/images/consultancy/how-we-add-value/raw-material-and-sourcing.png"
              },
              {
                title: "Cost & Financial Management",
                desc: "Control costs, reduce wastage and improve profitability with smart financial planning.",
                icon: "/images/consultancy/how-we-add-value/sustainable-growth.png"
              },
              {
                title: "Operations & People",
                desc: "Streamline operations, SOPs and workforce management for higher productivity.",
                icon: "/images/consultancy/how-we-add-value/operations-and-people.png"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 shrink-0 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 p-3">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-heading font-black text-[#133020] text-[15px] sm:text-base">{service.title}</h4>
                  <div className="w-6 h-[2px] bg-[#D3994B] mb-2" />
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work With Us Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-8">
          <div className="bg-[#0B2C1C] rounded-[24px] p-8 sm:p-12 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">Why Work With Us?</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                We combine our deep domain knowledge with hands-on industry experience to deliver practical, result-oriented solutions tailored to your business goals.
              </p>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-between gap-4 w-full">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-5xl font-black text-[#D3994B] font-heading">60+</span>
                <span className="text-white text-[10px] sm:text-[11px] font-bold mt-2 uppercase tracking-wide">Years of Milling<br/>Excellence</span>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-5xl font-black text-[#D3994B] font-heading">20+</span>
                <span className="text-white text-[10px] sm:text-[11px] font-bold mt-2 uppercase tracking-wide">Countries<br/>Served</span>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-5xl font-black text-[#D3994B] font-heading">500+</span>
                <span className="text-white text-[10px] sm:text-[11px] font-bold mt-2 uppercase tracking-wide">Projects<br/>Supported</span>
              </div>
            </div>
          </div>
        </section>

        {/* From Vision to Value Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-12">
          <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row items-stretch">
            
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">From Vision to Value</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Whether you are setting up your first mill, expanding capacity, or looking to improve performance, our consultancy helps you make the right decisions and achieve measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#0B2C1C] text-white hover:bg-[#0B2C1C]/90 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
                >
                  DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  className="flex items-center justify-center gap-2 bg-transparent hover:bg-slate-50 text-[#0B2C1C] border border-[#0B2C1C]/20 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
                >
                  DOWNLOAD BROCHURE <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-[url('/images/consultancy/vision-to-value/vision-to-value.png')] bg-cover bg-center" />
            </div>
            
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="bg-[#F0F4F2] rounded-[24px] p-8 sm:p-10 border border-[#E1EAE5]">
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-black text-[#133020]">Who We Work With</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
              {[
                { label: "New Entrants", icon: "/images/consultancy/who-we-work-with/new-entrants.png" },
                { label: "Existing Millers", icon: "/images/consultancy/who-we-work-with/existing-flour-mill-owners.png" },
                { label: "Investors", icon: "/images/consultancy/who-we-work-with/investors-and-entrepreneurs.png" },
                { label: "Cooperatives", icon: "/images/consultancy/who-we-work-with/farmer-groups-and-cooperatives.png" },
                { label: "Agri Businesses", icon: "/images/consultancy/who-we-work-with/agribusinesses.png" },
                { label: "Food Brands", icon: "/images/consultancy/who-we-work-with/food-brands.png" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                    <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#133020]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
