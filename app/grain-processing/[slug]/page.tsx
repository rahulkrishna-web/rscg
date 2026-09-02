"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ChevronRight, ArrowLeft, Box, Info, ShieldCheck, Truck, Headphones, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { grainProcessingData } from "../grainProcessingData";

export default function GrainProcessingProductPage() {
  const params = useParams();
  const product = grainProcessingData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const { addToQuote } = useQuote();
  const [qty, setQty] = React.useState(1);

  const handleQtyChange = (delta: number) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const handleAddToQuote = () => {
    addToQuote({
      id: product.slug,
      name: product.title,
      image: product.image
    }, qty);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-slate-800">
      <Header />

      <main className="w-full pb-24">
        
        {/* Top Breadcrumb */}
        <div className="w-full bg-[#f9fafb] py-6">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-widest">
            <Link href="/grain-processing" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              BACK TO GRAIN PROCESSING
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-brand-primary">HOME</Link>
              <span className="text-slate-400">/</span>
              <Link href="/grain-processing" className="hover:text-brand-primary">GRAIN PROCESSING</Link>
              <span className="text-slate-400">/</span>
              <span className="text-brand-primary">{product.title}</span>
            </div>
          </div>
        </div>
        
        {/* Main Content Container */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto pt-10">

        {/* Top Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-24">
          
          {/* Left Column: Image & Note */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-sm aspect-square">
              <img 
                src={product.image} 
                alt={product.title} 
                className="object-contain w-full h-full mix-blend-multiply contrast-[1.05]"
              />
            </div>
            <div className="flex items-start gap-3 bg-[#f6f9f1] border border-[#e5eddb] rounded-2xl p-5">
              <Info className="w-5 h-5 text-[#4a5f36] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#4a5f36] leading-relaxed font-medium">
                * Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups.
              </p>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="flex flex-col justify-start space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight mb-2">
                {product.title}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14663a] mb-6">
                {product.subtitle}
              </h2>
            </div>

            <div className="text-slate-600 leading-relaxed whitespace-pre-line text-[15px]">
              {product.description}
            </div>

            {/* Stats Row */}
            {product.stats && product.stats.length > 0 && (
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                {product.stats.map((stat, idx) => (
                  <div key={idx} className={`flex-1 flex flex-col items-center text-center space-y-1 ${idx !== product.stats.length - 1 ? 'border-r border-slate-100' : ''}`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-sm font-black text-[#0B1510]">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center items-stretch border border-slate-200 rounded-lg h-12 bg-white">
                  <button 
                    onClick={() => handleQtyChange(-1)}
                    className="px-4 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors font-medium rounded-l-lg"
                  >-</button>
                  <span className="px-4 text-sm font-bold text-slate-800 border-x border-slate-200 flex items-center justify-center min-w-[3rem]">
                    {qty}
                  </span>
                  <button 
                    onClick={() => handleQtyChange(1)}
                    className="px-4 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors font-medium rounded-r-lg"
                  >+</button>
                </div>
                
                <button 
                  onClick={handleAddToQuote}
                  className="flex-1 sm:flex-none flex items-center justify-center px-8 h-12 bg-[#0B1510] hover:bg-[#1a2f24] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <Box className="w-4 h-4 mr-2" />
                  Add to Quote List
                </button>

                <Link 
                  href="https://wa.me/911234567890" target="_blank"
                  className="flex-1 sm:flex-none flex items-center justify-center px-6 h-12 border-2 border-[#16a34a] text-[#16a34a] hover:bg-[#f0fdf4] font-bold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Enquiry
                </Link>
              </div>
              


              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#16a34a]" /> 1 Year Warranty
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Truck className="w-4 h-4 text-[#16a34a]" /> Pan India Delivery
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Headphones className="w-4 h-4 text-[#16a34a]" /> After Sales Support
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Key Features Section */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <div className="mb-24">
            <div className="text-center space-y-2 mb-12">
              <h3 className="text-2xl font-heading font-black text-[#0a4c2a]">Key Features</h3>
              <p className="text-slate-500 font-medium">Built for continuous, high efficiency processing</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.keyFeatures.map((feature, idx) => {
                const Icon = require("lucide-react")[feature.icon] || Box;
                return (
                  <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-[#f0fdf4] text-[#16a34a] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">{feature.title}</h4>
                    {feature.description && (
                      <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Technical Specifications Section */}
        {product.specs && product.specs.length > 0 && (
          <div className="mb-24 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-10">
              <h3 className="text-2xl font-heading font-black text-[#0a4c2a]">Technical Specifications</h3>
              <p className="text-slate-500 font-medium">Standard engineering configuration and parameters</p>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-widest text-[10px] font-black">
                  <tr>
                    <th className="px-6 py-4 w-16 text-center">#</th>
                    <th className="px-6 py-4">PARAMETER</th>
                    <th className="px-6 py-4">SPECIFICATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {product.specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-center text-slate-400 font-medium">{idx + 1}</td>
                      <td className="px-6 py-4 font-bold text-slate-700">{spec.parameter}</td>
                      <td className="px-6 py-4 text-slate-600">{spec.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Applications Section */}
        {product.applications && product.applications.length > 0 && (
          <div className="mb-12">
            <div className="text-center space-y-2 mb-10">
              <h3 className="text-2xl font-heading font-black text-[#0a4c2a]">Applications</h3>
              <p className="text-slate-500 font-medium">Widely deployed across grain, seed, and food processing lines</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {product.applications.map((app, idx) => {
                const AppIcon = require("lucide-react")[app.icon] || Box;
                return (
                  <div key={idx} className="bg-white border border-slate-100 py-4 px-6 rounded-xl flex flex-col items-center justify-center gap-3 w-40 shadow-sm hover:border-[#f7b032] hover:shadow-md transition-all group">
                    <div className="text-[#f7b032] group-hover:scale-110 transition-transform">
                      <AppIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 text-center uppercase tracking-wide leading-snug">
                      {app.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
