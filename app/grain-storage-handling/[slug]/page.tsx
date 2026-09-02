"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, MessageCircle, Settings2, Replace, LayoutTemplate, Box, Maximize, TrendingUp, Anchor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { silosData, SiloProduct, SiloCapacity, SiloFeature } from "../silosData";

const IconMap: Record<string, any> = {
  ShieldCheck,
  Settings2,
  Replace,
  LayoutTemplate,
  Box,
  Maximize,
  TrendingUp,
  Anchor,
  CheckCircle2
};

export default function SiloDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = silosData.find((p) => p.slug === slug);
  const { addToQuote } = useQuote();

  // State to track quantities for each capacity row (using model string as key)
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  if (!product) {
    notFound();
  }

  const handleQuantityChange = (model: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [model]: Math.max(1, (prev[model] || 1) + delta)
    }));
  };

  const handleAddToQuote = (capacity: SiloCapacity) => {
    const q = quantities[capacity.model] || 1;
    // Add logic here to addToQuote...
    addToQuote({
      id: capacity.model,
      name: `${product.title} - ${capacity.model} (${capacity.capacity})`,
      image: product.image
    }, q);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans selection:bg-brand-primary/20">
      <Header />

      {/* Top Breadcrumb */}
      <div className="w-full bg-[#f9fafb] py-6">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-widest">
          <Link href="/grain-storage-handling" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Silos
          </Link>
          <div className="flex items-center gap-2">
            <span>Silos</span>
            <span className="text-slate-400">/</span>
            <span className="text-brand-primary">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto py-12">
        {/* Top Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <div className="relative w-full h-[350px] lg:h-[450px] bg-slate-50 rounded-2xl flex items-center justify-center p-8 overflow-hidden group">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex">
              <span className="text-xs font-black uppercase tracking-widest text-[#eab308] bg-amber-50 px-3 py-1 rounded-md">
                {product.category}
              </span>
            </div>
            
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B1510] leading-tight mb-2">
                {product.title}
              </h1>
              <h3 className="text-lg font-bold text-[#14532d]">
                {product.subtitle}
              </h3>
            </div>

            <div 
              className="text-base text-slate-600 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br/>') }}
            />

            <div className="pt-4">
              <Link
                href="https://wa.me/910000000000"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3 rounded-md transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-black text-[#0B1510] mb-2">Key Features</h2>
            <p className="text-slate-500">Engineered for high-efficiency plant integration and low-residue handling</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.keyFeatures.map((feature, idx) => {
              const Icon = IconMap[feature.icon] || CheckCircle2;
              return (
                <div key={idx} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#16a34a] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1510] text-sm mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Capacities */}
        <div className="space-y-12 mb-16">
          {product.capacitySections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#0B1510] mb-2">{section.title}</h2>
                <p className="text-slate-500">Select your required model capacity to add to your enquiry quote list.</p>
              </div>

              <div className="space-y-4">
                {section.items.map((cap, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:border-slate-200 transition-colors">
                    <div className="space-y-3 flex-1">
                      <h4 className="font-bold text-[#0B1510]">{cap.model} / {cap.capacity} Silo</h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Capacity: {cap.capacity}</span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Material: {cap.material}</span>
                      </div>
                      {cap.bestFor && (
                        <div className="text-[10px] font-bold text-[#16a34a] uppercase tracking-widest">
                          BEST FOR: {cap.bestFor}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                      <div className="flex items-center border border-slate-200 rounded-md">
                        <button 
                          onClick={() => handleQuantityChange(cap.model, -1)}
                          className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                        >-</button>
                        <span className="px-3 py-1.5 text-sm font-bold text-slate-800 min-w-[2rem] text-center border-x border-slate-200">
                          {quantities[cap.model] || 1}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(cap.model, 1)}
                          className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => handleAddToQuote(cap)}
                        className="flex items-center px-4 bg-[#0f2e1a] hover:bg-[#1a4a2a] text-white font-bold h-9 rounded-md transition-colors"
                      >
                        <Box className="w-4 h-4 mr-2" /> Add to Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
