"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Leaf, 
  Cpu,
  Box,
  Archive,
  Factory,
  Scale,
  Wind,
  Database,
  RotateCw,
  Gauge,
  Filter,
  PackageCheck,
  Zap,
  Info,
  CheckCircle2,
  ListFilter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data Structure
const modelsData = {
  V400: {
    name: "V400",
    description: "Engineered for precision and performance, the V400 series delivers consistent flour quality with efficient batch processing technology.",
    capacity: "40 - 60 Kg/hr",
    variants: {
      Eco: {
        name: "Eco",
        subtitle: "Manual Feeding",
        image: "/images/vending-machines/floura_eco.png",
        specs: [
          { label: "Size (L X W X H)", value: "8'-1'' x 3' x 7'-5\"", icon: Box },
          { label: "Root Blower System", value: "Yes", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "180 kg", icon: Database },
          { label: "Feeding System", value: "Manual", icon: Factory },
          { label: "Mill Type", value: '16" Vertical Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "40-60 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Mechanical", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "13 HP / 9.7 kW", icon: Zap },
        ]
      },
      Auto: {
        name: "Auto",
        subtitle: "Automatic Feeding",
        image: "/images/vending-machines/floura_prime.jpg", // Fallback image for Auto since specific one wasn't provided, or assume prime is Auto
        specs: [
          { label: "Size (L X W X H)", value: '10\' x 3\'-4" x 9\'-2"', icon: Box },
          { label: "Root Blower System", value: "No", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "135 kg", icon: Database },
          { label: "Feeding System", value: "Auto Feeding", icon: Factory },
          { label: "Mill Type", value: '16" Vertical Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "40-60 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Mechanical", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "17 HP / 12.7 kW", icon: Zap },
        ]
      }
    }
  },
  H500: {
    name: "H500",
    description: "Designed for high-capacity industrial demands, the H500 series provides unmatched throughput and automated reliability for commercial-scale operations.",
    capacity: "100 - 120 Kg/hr",
    variants: {
      Eco: {
        name: "Eco",
        subtitle: "Manual Feeding",
        image: "/images/vending-machines/floura_eco.png", 
        specs: [
          { label: "Size (L X W X H)", value: '10\' x 3\'-4" x 9\'-2"', icon: Box },
          { label: "Root Blower System", value: "Yes", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "180 kg", icon: Database },
          { label: "Feeding System", value: "Manual Feeding", icon: Factory },
          { label: "Mill Type", value: '20" Horizontal Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "100-120 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Hydraulic", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "17 HP / 12.7 kW", icon: Zap },
        ]
      },
      Auto: {
        name: "Auto",
        subtitle: "Automatic Feeding",
        image: "/images/vending-machines/floura_prime.jpg",
        specs: [
          { label: "Size (L X W X H)", value: '10\' x 3\'-4" x 9\'-2"', icon: Box },
          { label: "Root Blower System", value: "No", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "135 kg", icon: Database },
          { label: "Feeding System", value: "Auto Feeding", icon: Factory },
          { label: "Mill Type", value: '20" Horizontal Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "100-120 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Hydraulic", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "19 HP / 14.2 kW", icon: Zap },
        ]
      }
    }
  }
};

type ModelKey = keyof typeof modelsData;
type VariantKey = "Eco" | "Auto";

export default function BatchProductionPage() {
  const [activeModel, setActiveModel] = useState<ModelKey>("V400");
  const [activeVariant, setActiveVariant] = useState<VariantKey>("Eco");

  const currentModelData = modelsData[activeModel];
  const currentVariantData = currentModelData.variants[activeVariant];

  // Helper for rendering left and right columns of specs
  const leftSpecs = currentVariantData.specs.filter((_, i) => i % 2 === 0);
  const rightSpecs = currentVariantData.specs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-brand-foreground font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col bg-[#1A1A1A]">
        {/* Background Image Container */}
        <div className="relative w-full h-[550px] lg:h-[650px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/vending-machines/floura_hero.png"
              alt="Batch Production Systems"
              fill
              priority
              className="object-cover object-right-bottom lg:object-center"
            />
          </div>
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />

          {/* Hero Content */}
          <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block bg-[#F4B724] text-slate-900 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full tracking-widest shadow-md">
                BATCH PRODUCTION
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-heading font-black text-white leading-[1.1] tracking-tight">
                Batch Production <br />
                <span className="text-[#F4B724]">Systems</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-medium max-w-lg leading-relaxed pt-2">
                Engineered solutions for efficient, hygienic, and scalable batch processing in modern flour and food operations.
              </p>
              <div className="pt-6">
                <button className="inline-flex items-center gap-2 bg-[#F4B724] hover:bg-[#E5A813] text-slate-900 font-extrabold px-8 py-3.5 rounded shadow-lg transition-transform hover:-translate-y-0.5">
                  EXPLORE SOLUTIONS <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="w-full bg-[#18311B] border-t-2 border-[#F4B724]/20 relative z-30">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex items-center gap-4 text-[#C1C9C3] font-medium text-sm sm:text-base flex-1 justify-center md:justify-start pt-4 md:pt-0 w-full">
                <BarChart3 className="w-8 h-8 text-[#F4B724]" />
                Consistent Batch Output
              </div>
              <div className="flex items-center gap-4 text-[#C1C9C3] font-medium text-sm sm:text-base flex-1 justify-center py-4 md:py-0 w-full">
                <ShieldCheck className="w-8 h-8 text-[#F4B724]" />
                Hygienic Processing
              </div>
              <div className="flex items-center gap-4 text-[#C1C9C3] font-medium text-sm sm:text-base flex-1 justify-center md:justify-end pb-4 md:pb-0 w-full">
                <Settings className="w-8 h-8 text-[#F4B724]" />
                Built for Commercial Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Configurator Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative">
        {/* Breadcrumb equivalent / header */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">
          <span>Home</span> <ArrowRight className="w-3 h-3 text-slate-300" />
          <span>Batch Production Systems</span> <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-900">{activeModel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Product Presentation */}
          <div className="flex flex-col bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm relative h-full">
            <div className="space-y-4 relative z-10">
              <h2 className="text-slate-500 font-bold text-lg">Batch Production System</h2>
              <h3 className="text-6xl sm:text-7xl font-heading font-black text-[#154627] tracking-tighter">
                {activeModel}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm max-w-[280px] pt-4">
                {currentModelData.description}
              </p>
            </div>

            {/* Feature Label box */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-5 border border-slate-100 max-w-[280px] relative z-10">
              <div className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-[#154627] mt-1 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-slate-800 leading-snug">Efficient. Hygienic. Scalable.</h4>
                  <p className="text-xs text-slate-500 mt-1">Built for modern flour & food operations.</p>
                </div>
              </div>
            </div>

            {/* Product Image Overlay */}
            <div className="absolute right-0 bottom-10 w-[70%] sm:w-[60%] lg:w-[65%] h-[80%] z-0 flex items-end justify-end overflow-visible pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src={currentVariantData.image}
                  alt={`${activeModel} ${activeVariant}`}
                  fill
                  className="object-contain object-right-bottom scale-110 origin-bottom-right"
                />
              </div>
            </div>

            <div className="mt-auto pt-48 relative z-10">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium bg-white/80 backdrop-blur inline-flex px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                <Info className="w-4 h-4" /> Image shown: {activeModel} {activeVariant}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Selection */}
          <div className="flex flex-col space-y-12 py-4">
            
            {/* Model Selection */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                  <Archive className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">1. Choose Model</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(Object.keys(modelsData) as ModelKey[]).map((mod) => {
                  const isActive = activeModel === mod;
                  return (
                    <button
                      key={mod}
                      onClick={() => {
                        setActiveModel(mod);
                        // Ensure the active variant exists for the new model (both have Eco and Auto here, so it's fine)
                      }}
                      className={`relative flex items-center p-5 rounded-2xl border-2 transition-all duration-200 text-left cursor-pointer group ${
                        isActive 
                          ? "border-[#154627] bg-[#154627] text-white shadow-lg" 
                          : "border-slate-200 bg-white hover:border-[#154627]/40 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <div className="flex flex-col flex-1">
                        <span className="font-black text-xl">{mod}</span>
                        <span className={`text-sm mt-1 font-medium ${isActive ? "text-[#C1C9C3]" : "text-slate-500"}`}>
                          {modelsData[mod].capacity}
                        </span>
                      </div>
                      <div className={`p-3 rounded-xl ${isActive ? "bg-white/10" : "bg-slate-100 group-hover:bg-[#154627]/5"}`}>
                        <Factory className={`w-8 h-8 ${isActive ? "text-white" : "text-[#154627]/60"}`} />
                      </div>
                      
                      {isActive && (
                        <div className="absolute -top-3 -right-3 bg-white rounded-full p-0.5">
                          <CheckCircle2 className="w-6 h-6 text-[#154627] fill-[#154627]/10" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Variant Selection */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                  <ListFilter className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">2. Choose Variant</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(["Eco", "Auto"] as VariantKey[]).map((vari) => {
                  const isActive = activeVariant === vari;
                  const Icon = vari === "Eco" ? Leaf : Cpu;
                  
                  return (
                    <button
                      key={vari}
                      onClick={() => setActiveVariant(vari)}
                      className={`relative flex items-center p-5 rounded-2xl border-2 transition-all duration-200 text-left cursor-pointer group ${
                        isActive 
                          ? "border-[#154627] bg-[#154627] text-white shadow-lg" 
                          : "border-slate-200 bg-white hover:border-[#154627]/40 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <div className="flex flex-col flex-1">
                        <span className="font-black text-xl">{vari}</span>
                        <span className={`text-sm mt-1 font-medium ${isActive ? "text-[#C1C9C3]" : "text-slate-500"}`}>
                          {vari === "Eco" ? "Manual Feeding" : "Automatic Feeding"}
                        </span>
                      </div>
                      <div className={`p-3 rounded-xl ${isActive ? "bg-white/10" : "bg-slate-100 group-hover:bg-[#154627]/5"}`}>
                        <Icon className={`w-8 h-8 ${isActive ? "text-[#8CD5A1]" : "text-[#154627]/60"}`} />
                      </div>
                      
                      {isActive && (
                        <div className="absolute -top-3 -right-3 bg-white rounded-full p-0.5">
                          <CheckCircle2 className="w-6 h-6 text-[#154627] fill-[#154627]/10" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-24 bg-white">
        <div className="w-full bg-[#FAFAFA] rounded-3xl border border-slate-200/70 p-6 sm:p-10 shadow-sm transition-all duration-300">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 border-b border-slate-200 pb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 flex items-center gap-2">
              Specifications 
              <span className="text-[#154627] bg-[#154627]/10 px-3 py-1 rounded-full text-lg ml-2">
                ( {activeModel} {activeVariant} )
              </span>
            </h3>
            <button className="flex items-center gap-2 text-sm font-bold text-[#154627] border border-[#154627]/20 hover:bg-[#154627]/5 px-4 py-2.5 rounded-xl transition-colors cursor-pointer bg-white">
              <RotateCw className="w-4 h-4" /> Compare Variants
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
            {/* Left Specs Column */}
            <div className="flex flex-col divide-y divide-slate-200/60">
              {leftSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="flex items-center justify-between py-4 group hover:bg-white rounded-lg px-2 transition-colors -mx-2">
                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:text-[#154627] group-hover:bg-[#154627]/5 transition-colors">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      {spec.label}
                    </div>
                    <div className="font-bold text-slate-900 text-sm text-right max-w-[50%]">
                      {spec.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Specs Column */}
            <div className="flex flex-col divide-y divide-slate-200/60">
              {rightSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="flex items-center justify-between py-4 group hover:bg-white rounded-lg px-2 transition-colors -mx-2">
                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:text-[#154627] group-hover:bg-[#154627]/5 transition-colors">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      {spec.label}
                    </div>
                    <div className="font-bold text-slate-900 text-sm text-right max-w-[50%]">
                      {spec.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
