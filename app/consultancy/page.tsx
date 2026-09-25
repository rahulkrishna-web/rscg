"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function ConsultancyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroProofPoints = [
    { 
      title: "Industry Expertise", 
      desc: "Decades of experience in flour milling" 
    },
    { 
      title: "Data Driven Approach", 
      desc: "Practical solutions backed by analysis" 
    },
    { 
      title: "End-to-End Support", 
      desc: "From planning to performance improvement" 
    },
    { 
      title: "Sustainable Growth", 
      desc: "Build efficient, future-ready milling businesses" 
    }
  ];

  const valueServices = [
    {
      title: "Market Entry Strategy",
      desc: "Assess opportunities, demand, competition and regulations to build a winning entry strategy.",
      icon: "/consultancy/how-we-add-value/market_entry_and_strategy-clean.png"
    },
    {
      title: "Plant Planning & Design",
      desc: "Optimize plant layout, capacity, machinery selection and material flow for maximum efficiency.",
      icon: "/consultancy/how-we-add-value/Plant_Planning___Design-clean.png"
    },
    {
      title: "Process Optimization",
      desc: "Improve yield, quality, capacity and energy efficiency through process improvements.",
      icon: "/consultancy/how-we-add-value/Process_Optimization-clean.png"
    },
    {
      title: "Raw Material & Sourcing",
      desc: "Guidance on wheat quality, sourcing strategy and inventory management for consistent production.",
      icon: "/consultancy/how-we-add-value/raw_material-clean.png"
    },
    {
      title: "Cost & Financial Management",
      desc: "Control costs, reduce wastage and improve profitability with smart financial planning.",
      icon: "/consultancy/how-we-add-value/sustainable_growth-clean.png"
    },
    {
      title: "Operations & People",
      desc: "Streamline operations, SOPs and workforce management for higher productivity.",
      icon: "/consultancy/how-we-add-value/Operations___People-clean.png"
    }
  ];

  const clientTypes = [
    { label: "New Entrants", icon: "/consultancy/who-we-work-with/data_driven_approach-clean.png" },
    { label: "Existing Millers", icon: "/consultancy/who-we-work-with/existing_flour_mill_owner-clean.png" },
    { label: "Investors", icon: "/consultancy/who-we-work-with/investors_and_entrpreneurs-clean.png" },
    { label: "Cooperatives", icon: "/consultancy/who-we-work-with/farmers_and_groups-clean.png" },
    { label: "Agri Businesses", icon: "/consultancy/who-we-work-with/agribusinesses-clean.png" },
    { label: "Food Brands", icon: "/consultancy/who-we-work-with/food_brands-clean.png" }
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header onRequestCallback={() => setIsModalOpen(true)} />

        {/* Hero Section */}
        <section className="w-full relative z-10 bg-[#0B1510] text-white aspect-[1080/1920] md:aspect-[1920/820] flex flex-col justify-center">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src="/consultancy/consultancy_desktop_cropped.png" 
                alt="Flour Milling Consultancy" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/90 via-[#0B1510]/50 to-transparent z-10 w-full" />
            </div>

            {/* Mobile Background Image (1080x1920) */}
            <div className="block md:hidden absolute inset-0">
              <Image 
                src="/consultancy/consultancy_mobile.png" 
                alt="Flour Milling Consultancy" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/90 via-[#0B1510]/55 to-transparent z-10 w-full" />
            </div>
          </div>

          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20 flex-1 flex flex-col justify-center">
            <div className="max-w-2xl space-y-6 pt-12 md:pt-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
                Consultancy <span className="font-normal text-slate-300">for</span> <br className="hidden sm:inline" />
                <span className="text-[#D3994B]">Flour Milling</span> <span className="font-normal text-slate-300">Success</span>
              </h1>

              <div className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium space-y-2 max-w-xl">
                <p>Expert guidance to help you enter, scale, and excel in the flour milling industry.</p>
                <p className="text-slate-300 text-sm sm:text-base">From concept to continuous improvement, we are your strategic partner at every step.</p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D99B26] hover:bg-[#c4891e] text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(217,155,38,0.7)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Consultancy</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Desktop Proof Points White Container - Full Width Overlapping Hero Bottom */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full px-6 sm:px-12 lg:px-16 xl:px-24 z-30 translate-y-1/2">
              <div className="w-full bg-white rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 border border-slate-100/90">
                <div className="grid grid-cols-4 divide-x divide-slate-200">
                  {heroProofPoints.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 sm:p-5 hover:bg-[#E8F5E9]/70 rounded-xl transition-colors duration-200 cursor-default text-left space-y-1.5"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1510] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Mobile Proof Points - Document flow */}
        <div className="block md:hidden relative z-30 px-5 -mt-8 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-100/90">
            <div className="grid grid-cols-1 divide-y divide-slate-200">
              {heroProofPoints.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-[#E8F5E9]/70 rounded-xl transition-colors duration-200 text-left space-y-1">
                  <h3 className="text-base font-bold text-[#0B1510] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Add Value Section */}
        <section className="w-full pt-12 sm:pt-16 md:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
              How We Add Value
            </h2>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Comprehensive milling consultancy services tailored to drive measurable operational and financial growth.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {valueServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100/90 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 shadow-sm hover:shadow-md hover:border-[#133020]/20 transition-all group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#F0F7F3] rounded-2xl flex items-center justify-center border border-[#133020]/10 p-3 sm:p-3.5 group-hover:scale-105 group-hover:bg-[#E8F5E9] transition-all duration-300">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={60} 
                    height={60} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="font-heading font-black text-[#133020] text-lg sm:text-xl">
                    {service.title}
                  </h4>
                  <div className="w-8 h-[2px] bg-[#D3994B]" />
                  <p className="text-sm sm:text-[15px] text-slate-600 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work With Us Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16">
          <div className="w-full bg-[#0B2C1C] rounded-[28px] p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                Why Work With Us?
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                We combine our deep domain knowledge with hands-on industry experience to deliver practical, result-oriented solutions tailored to your business goals.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D3994B] font-heading">
                  60+
                </span>
                <span className="text-white text-sm sm:text-base font-semibold mt-2 leading-snug">
                  Years Milling and engineering experience
                </span>
              </div>
              <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D3994B] font-heading">
                  25+
                </span>
                <span className="text-white text-sm sm:text-base font-semibold mt-2 leading-snug">
                  Countries International market exposure
                </span>
              </div>
              <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D3994B] font-heading">
                  200+
                </span>
                <span className="text-white text-sm sm:text-base font-semibold mt-2 leading-snug">
                  Projects Plants delivered
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* From Vision to Value Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16">
          <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-md border border-slate-100 flex flex-col md:flex-row items-stretch">
            
            <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
                From Vision to Value
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Whether you are setting up your first mill, expanding capacity, or looking to improve performance, our consultancy helps you make the right decisions and achieve measurable results.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#0B2C1C] hover:bg-[#13422b] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto cursor-pointer"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 relative min-h-[340px] lg:min-h-[420px]">
              <Image 
                src="/images/consultancy/vision-to-value/vision-to-value.png" 
                alt="From Vision to Value" 
                fill
                className="object-cover object-center"
              />
            </div>
            
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-24">
          <div className="w-full bg-[#F0F4F2] rounded-[24px] p-8 sm:p-12 lg:p-14 border border-[#E1EAE5]">
            <div className="text-center mb-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#133020]">
                Who We Work With
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
                Partnering with organizations across the grain and milling value chain.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
              {clientTypes.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-[#E1EAE5]/60 hover:border-[#133020]/20 transition-all flex flex-col items-center justify-between group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#E8F5E9]/50 rounded-2xl p-3.5 sm:p-4 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E8F5E9] transition-all duration-300">
                    <Image 
                      src={item.icon} 
                      alt={item.label} 
                      width={72} 
                      height={72} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#133020] mt-4">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2722]/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md animate-scale-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer border border-slate-200/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm className="shadow-black/75 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
