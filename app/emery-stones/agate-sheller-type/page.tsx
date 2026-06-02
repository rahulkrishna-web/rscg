"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

interface StoneSize {
  name: string;
  code: string;
  thickness: string;
  weight: string;
  recommendation: string;
}

export default function AgateShellerTypeStones() {
  const { addToQuote } = useQuote();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const sizes: StoneSize[] = [
    { name: "1200 mm / 48\"", code: "1200MM", thickness: "260 mm", weight: "approx. 495 kg", recommendation: "High capacity split pulse mill systems" },
    { name: "1050 mm / 42\"", code: "1050MM", thickness: "230 mm", weight: "approx. 410 kg", recommendation: "Industrial gram / besan mills" },
    { name: "900 mm / 36\"", code: "900MM", thickness: "210 mm", weight: "approx. 310 kg", recommendation: "Standard commercial shelling setups" },
    { name: "750 mm / 30\"", code: "750MM", thickness: "190 mm", weight: "approx. 195 kg", recommendation: "Sheller chakki pre-cleaning systems" },
    { name: "600 mm / 24\"", code: "600MM", thickness: "160 mm", weight: "approx. 130 kg", recommendation: "Pulse splitting grocery retail outlets" },
    { name: "450 mm / 18\"", code: "450MM", thickness: "135 mm", weight: "approx. 80 kg", recommendation: "General pulse split small grinders" },
    { name: "350 mm / 14\"", code: "350MM", thickness: "110 mm", weight: "approx. 45 kg", recommendation: "Micro de-husking test setups" }
  ];

  const handleQtyChange = (key: string, val: number) => {
    setQuantities(prev => ({
      ...prev,
      [key]: Math.max(1, (prev[key] || 1) + val)
    }));
  };

  const handleAddToQuote = (sizeItem: StoneSize) => {
    const itemKey = `emery-stone-agate-${sizeItem.code.toLowerCase()}`;
    const qty = quantities[itemKey] || 1;
    
    addToQuote({
      id: itemKey,
      name: `Horizontal Emery Stones - Agate/Sheller Type (${sizeItem.name})`,
      image: "/images/sheller-emery-stones.jpg",
      category: "Emery Stones",
      size: sizeItem.code
    }, qty);
    
    // Reset quantity
    setQuantities(prev => ({
      ...prev,
      [itemKey]: 1
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>

      <Header />

      {/* Mini Breadcrumb Hero */}
      <section className="w-full bg-brand-primary text-white py-12 lg:py-16 relative z-10 border-b border-white/5">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto space-y-4">
          <Link 
            href="/emery-stones"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-secondary hover:text-brand-tertiary transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Emery Stones</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight leading-none">
            Horizontal Emery Stones - Agate/Sheller Type
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-medium">
            Specialized hard-bonded stones engineered for de-husking, grain shelling, and pulse-splitting applications with minimal dusting.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Product Profile & Specs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative w-full aspect-[4/3] bg-white border border-slate-200/60 rounded-3xl overflow-hidden p-10 flex items-center justify-center shadow-xs">
              <img 
                src="/images/sheller-emery-stones.jpg" 
                alt="Agate/Sheller Type Horizontal Emery Stones" 
                className="object-contain max-h-full max-w-full"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-800">
                Product Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Choyal Agate/Sheller Type Emery Stones are engineered with unique composite binder systems and hard-grained abrasives. These are specifically optimized for pulse de-husking, splitting, and shelling of hard legume seeds (like chickpea/gram into besan, lentils, and peas) with maximum yield recovery and minimum dusting losses.
              </p>
            </div>

            {/* Specifications list */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Key Performance Advantages
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Optimized hard bond mix for pulse shelling",
                  "Reduces bran/husk powdering and dusting losses",
                  "Aggressive grain shear for clean splits",
                  "Perfect balance limits structural vibration",
                  "Resistant to high friction temperatures",
                  "Engineered to fit standard sheller chakkis"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Quote Add Table */}
          <div className="lg:col-span-6 space-y-8 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div>
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-slate-800">
                Select Size & Options
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                Select your required sheller stone size parameters to add to your enquiry list.
              </p>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {sizes.map((sizeItem) => {
                const qtyKey = `emery-stone-agate-${sizeItem.code.toLowerCase()}`;
                const qty = quantities[qtyKey] || 1;

                return (
                  <div 
                    key={sizeItem.code}
                    className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">{sizeItem.name} Sheller Pair</h4>
                      <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-medium">
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md">Thickness: {sizeItem.thickness}</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md">Weight: {sizeItem.weight}</span>
                      </div>
                      <span className="text-[10px] text-brand-primary font-black uppercase tracking-wider block pt-1">
                        Best For: {sizeItem.recommendation}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                      {/* Qty Selector */}
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-8 bg-white flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => handleQtyChange(qtyKey, -1)}
                          className="px-2 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-xs font-black"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-800">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQtyChange(qtyKey, 1)}
                          className="px-2 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-xs font-black"
                        >
                          +
                        </button>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => handleAddToQuote(sizeItem)}
                        className="bg-brand-primary hover:bg-brand-secondary text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add to Quote</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Link to Contact CTA Banner */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-slate-50 border-t border-slate-200/50 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
            Specialized Applications
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-slate-800 tracking-tight">
            Need Layout Offers for Specialized De-husking Plants?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We design complete grain pre-cleaning and de-husking plants incorporating custom sheller mill grids. 
            Share details about your input grain characteristics and target throughput.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact"
              className="inline-flex bg-brand-primary hover:bg-brand-primary/95 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm gap-2 items-center"
            >
              <span>Submit Plant Requirements</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
