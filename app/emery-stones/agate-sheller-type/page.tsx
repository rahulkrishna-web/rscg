"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmeryCTASection from "@/components/EmeryCTASection";
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
    { name: "1200 mm / 30\"", code: "1200MM", thickness: "260 mm", weight: "approx. 495 kg", recommendation: "Large-Scale Soybean Milling" }
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

      {/* Top Breadcrumb */}
      <div className="w-full bg-white/50 py-6 relative z-10 border-b border-slate-200/50">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-widest gap-4">
          <Link href="/emery-stones" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Emery Stones
          </Link>
          <div className="flex items-center gap-2">
            <span>Emery Stones</span>
            <span className="text-slate-400">/</span>
            <span className="text-brand-primary">Agate / Sheller Type</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16 flex-1 relative z-10">
        
        {/* Hero Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mt-8 mb-16">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
            <div className="relative w-full aspect-square bg-white rounded-2xl flex items-center justify-center p-8 border border-slate-100 shadow-xs">
              <span className="absolute top-6 left-6 z-10 bg-slate-100 text-[10px] font-black uppercase text-slate-500 px-3 py-1.5 rounded-full border border-slate-200">
                Emery Stones
              </span>
              <img 
                src="/images/sheller-emery-stones.jpg" 
                alt="Agate/Sheller Type Horizontal Emery Stones" 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl sm:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight mb-2">
              Horizontal Emery Stones
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#14663a] mb-6">
              Agate / Sheller Type
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-sm sm:text-base font-medium">
              These stones are primarily used in soybean and oil extraction plants for breaking soybeans and similar products. Choyal Emery Stones are designed and manufactured with high quality emery & grain to maintain aroma & taste of the flour. Our Emery stones are made on an automatic casting plant to maintain standards and quality. Our high quality emery stones are globally accepted and have been exported to over 20 countries for five decades.
            </p>

            {/* Key Performance Advantages */}
            <div className="space-y-4 mb-10 pb-10 border-b border-slate-200/60">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Key Performance Advantages
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Preserves grain aroma and vital proteins",
                  "Perfect mechanical balancing reduces noise",
                  "Premium hard binders for extreme longevity"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Select Size & Options */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-heading font-extrabold text-slate-800">
                  Select Size & Options
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Select your required sheller stone size parameters to add to your enquiry list.
                </p>
              </div>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
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
        </div>
      </div>

      {/* Link to Contact CTA Banner */}
      <EmeryCTASection />

      <Footer />

    </div>
  );
}
