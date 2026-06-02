"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle,
  HelpCircle,
  ShoppingBag,
  Zap,
  Cpu,
  Layers,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

interface Product {
  id: string;
  title: string;
  desc: string;
  image: string;
  model: string;
  size: string;
}

export default function PowerSavingPage() {
  const { addToQuote } = useQuote();
  
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const productsList: Product[] = [
    {
      id: "flour-mill",
      title: "Flour Mill",
      desc: "Robust horizontal and vertical stone mills built for commercial heavy-duty environments.",
      image: "/images/plants/samayshri_agro_1.webp",
      model: "750 mm / 30\" Standard Chakki",
      size: "750MM"
    },
    {
      id: "wonder-mill",
      title: "Wonder Mill",
      desc: "World's first touchscreen integrated smart stone mill that auto-optimizes stone pressure.",
      image: "/images/wonder-mill.png",
      model: "Wonder Mill 750 mm",
      size: "750MM"
    },
    {
      id: "stone-ground-mill",
      title: "Stone Ground Mill",
      desc: "Premium Danish-type vertical cold grinders for specialty grain processing.",
      image: "/images/plants/03.webp",
      model: "Stone Ground Mill 600 mm",
      size: "600MM"
    },
    {
      id: "silo-safe",
      title: "Silo Safe",
      desc: "High-capacity automated storage silo cells with digital load cell weight integration.",
      image: "/images/plants/tablet_controlled_plant.webp",
      model: "Silo Safe 100 Ton",
      size: "100T"
    },
    {
      id: "wonder-chakki",
      title: "Wonder Chakki",
      desc: "Compact horizontal milling unit designed for retail stores and organic mills.",
      image: "/images/plants/dsc_4268.webp",
      model: "Wonder Chakki 350 mm",
      size: "350MM"
    },
    {
      id: "daniya-mill",
      title: "Daniya Mill",
      desc: "High-yield spice & pulse cold grinder built for non-heating continuous mills.",
      image: "/images/plants/9.webp",
      model: "Daniya Mill 900 mm",
      size: "900MM"
    }
  ];

  const handleQtyChange = (prodId: string, val: number) => {
    setQuantities(prev => {
      const current = prev[prodId] || 1;
      const next = current + val;
      return {
        ...prev,
        [prodId]: next < 1 ? 1 : next
      };
    });
  };

  const handleAddToQuote = (prod: Product) => {
    const qty = quantities[prod.id] || 1;
    addToQuote({
      id: prod.id,
      name: prod.model,
      category: "Power Saving",
      image: prod.image
    }, qty);
    // Reset quantities
    setQuantities(prev => ({ ...prev, [prod.id]: 1 }));
  };



  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_1.webp')] bg-cover bg-center" />
        {/* Dark / Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block bg-brand-tertiary text-slate-900 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-md uppercase tracking-wider shadow-sm select-none">
              Power Saving
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Innovative energy solutions for modern mill operations
            </h1>
          </div>
        </div>
      </section>

      {/* Main Grid Info Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Description Column */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Optimize Energy Consumption
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                With rising power costs, optimization of energy consumption in flour milling has become critical. 
                RS Choyal provides specialized systems that balance grinding pressure, motor speed, and grain feed rates 
                to ensure maximum flour yield at minimal electrical consumption.
              </p>
              <p>
                By using state-of-the-art electronics, smart PLC-driven feed systems, and energy-efficient mechanics, 
                our setups minimize friction losses and load imbalances. This direct coordination prevents high current spikes 
                and optimizes power factor, enabling mill operators to run more efficiently.
              </p>
              <p>
                Our high-efficiency transmission components, digital control loops, and smart software integration work in harmony 
                to significantly reduce waste, protecting your margins while lowering your carbon footprint and improving overall plant reliability.
              </p>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-6">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-3">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#about" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/flour-mills" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/turnkey-projects" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Turnkey Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/power-saving" className="text-sm font-bold text-brand-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    Power Saving
                  </Link>
                </li>
                <li>
                  <Link href="/flour-mills" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Flour Mill
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/40 border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Benefits of Power Saving Setup
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Pioneering mechanical configurations engineered for operational cost reductions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary w-fit">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                Improved Yield
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Optimized cold grinding preserves grain structure, leading to higher recovery rates of premium flour with less heat-related waste.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary w-fit">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                Improved Lifetime
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Steady, balanced loads reduce thermal stress and mechanical vibration on emery stones, bearings, and shafts, extending machinery life.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary w-fit">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                Reduced Operational Cost
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Intelligent load control limits current spikes and optimizes power factor, saving up to 30-40% on monthly industrial energy bills.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Power Saving Products Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/10 border-t border-b border-slate-200/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Our Power Saving Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select key energy-efficient models to include in your customized mill quote.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((prod) => {
              const qty = quantities[prod.id] || 1;
              return (
                <div 
                  key={prod.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 hover:shadow-xl hover:border-brand-secondary/35 transition-all duration-300 flex flex-col"
                >
                  {/* Product Thumbnail */}
                  <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                    <img 
                      src={prod.image} 
                      alt={prod.title}
                      className="object-contain max-h-[85%] max-w-[85%] p-4"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-heading font-bold text-slate-800">
                        {prod.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {prod.desc}
                      </p>
                    </div>

                    {/* Options & Cart Action */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-slate-800 truncate">{prod.model}</h4>
                          <span className="text-[10px] font-black text-brand-primary uppercase mt-0.5 block">Standard Size: {prod.size}</span>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-8 bg-white">
                            <button
                              type="button"
                              onClick={() => handleQtyChange(prod.id, -1)}
                              className="px-2 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-xs font-black"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-slate-800">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleQtyChange(prod.id, 1)}
                              className="px-2 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-xs font-black"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => handleAddToQuote(prod)}
                            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <ShoppingBag className="h-3 w-3" />
                            <span>Add to Quote</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Get in Touch Landscape Banner */}
      <section className="relative w-full h-[240px] sm:h-[320px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/plants/sg_foods_1.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto z-10 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            Consult on Custom Energy Upgrades
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
