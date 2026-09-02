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
  Target, Minus, Plus, CheckCircle2, MessageCircle,
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

      {/* Hero Banner Section */}
      <section className="relative w-full pb-20 lg:pb-0">
        <div className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-[#0B1510]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/vending-machines/floura_hero.png"
              alt="Batch Production Systems"
              fill
              priority
              className="object-cover object-right lg:object-center"
            />
          </div>
          {/* Dark Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#0B1510] from-0% via-[#0B1510]/80 via-[40%] to-transparent lg:to-[70%] z-10 w-full" />
          
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20 -mt-16 lg:-mt-24">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3 text-sm font-bold text-[#f7b032] uppercase tracking-widest mb-4">
                <span className="w-10 h-[3px] bg-[#f7b032]"></span>
                BATCH PRODUCTION
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-heading font-black text-white leading-[1.1] tracking-tight">
                Batch Production <br />
                <span className="text-[#f7b032]">Systems</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                Engineered solutions for efficient, hygienic, and scalable batch processing in modern flour and food operations.
              </p>
              <div className="pt-4">
                <button className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wide">
                  EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Proof Points Bar (Straddling Hero Boundary) */}
        <div className="relative z-30 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:translate-y-1/2 px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1400px]">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Consistent Batch Output</h4>
                <p className="text-xs text-slate-500">Uncompromised quality.</p>
              </div>
            </div>
            
            <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Hygienic Processing</h4>
                <p className="text-xs text-slate-500">Sanitary design standards.</p>
              </div>
            </div>

            <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Built for Commercial Operations</h4>
                <p className="text-xs text-slate-500">Robust and dependable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Configurator Section */}
      <section className="w-full pt-32 lg:pt-40 pb-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative">
        {/* Breadcrumb equivalent / header */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">
          <span>Home</span> <ArrowRight className="w-3 h-3 text-slate-300" />
          <span>Batch Production Systems</span> <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-900">{activeModel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Product Image & Note */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-sm aspect-square p-8">
              <Image
                src={currentVariantData.image}
                alt={`${activeModel} ${activeVariant}`}
                fill
                className="object-contain mix-blend-multiply contrast-[1.05] p-8"
              />
            </div>
            <div className="flex items-start gap-3 bg-[#f6f9f1] border border-[#e5eddb] rounded-2xl p-5">
              <Info className="w-5 h-5 text-[#4a5f36] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#4a5f36] leading-relaxed font-medium">
                * Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Selection */}
          <div className="flex flex-col space-y-10 py-4 justify-start">
            
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight">
                Floura
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                Floura is a high-performance flour mill with batch production designed for efficient commercial grinding, high flour extraction, and effortless operation. Built for modern atta mills, Floura combines robust engineering with user-friendly operation to provide reliable performance and better control over the milling process.
              </p>
            </div>

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
            
            {/* Actions */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center items-stretch border border-slate-200 rounded-lg h-12 bg-white">
                  <button 
                    type="button"
                    className="w-10 sm:w-12 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:bg-slate-50 rounded-l-lg transition-colors border-r border-slate-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="w-12 sm:w-16 flex items-center justify-center font-black text-slate-800 text-sm">
                    1
                  </div>
                  <button 
                    type="button"
                    className="w-10 sm:w-12 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:bg-slate-50 rounded-r-lg transition-colors border-l border-slate-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  type="button"
                  className="h-12 flex-1 w-full flex items-center justify-center gap-2 bg-[#0B1510] hover:bg-[#1a2e23] text-white px-6 sm:px-8 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <PackageCheck className="w-4 h-4" />
                  Add to Quote List
                </button>
                
                <button 
                  type="button"
                  className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Enquiry
                </button>
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
