"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle,
  ShoppingBag,
  FileText,
  Minus,
  Plus,
  Zap,
  Activity,
  Settings,
  Info,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { flourMillsProducts } from "../flourMillsData";
import { useQuote } from "@/components/QuoteContext";

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { addToQuote } = useQuote();
  const resolvedParams = use(params);
  
  const product = flourMillsProducts.find(p => p.id === resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.heroImage);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  const handleAddToQuote = () => {
    // Add the selected model variant to the quote
    const model = product.models[selectedModelIndex] || product.models[0];
    const modelId = `${product.id}-${model?.name || 'base'}`;
    addToQuote({
      id: modelId,
      name: `${product.title}${product.models.length > 1 ? ` - ${model.name}` : ''}`,
      category: product.category,
      image: model?.image || product.heroImage,
    }, quantity);
  };

  const tagColors = [
    "bg-[#0070f3]", // Blue
    "bg-[#79c500]", // Light Green
    "bg-[#f5a623]", // Orange
    "bg-[#0a4c2a]", // Dark Green
  ];

  return (
    <main className="min-h-screen bg-[#f9fafb] selection:bg-brand-primary/20 flex flex-col">
      <Header />

      {/* Top Breadcrumb */}
      <div className="w-full bg-[#f9fafb] py-6">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-widest">
          <Link href={product.category === "Accessories" ? "/emery-stones" : "/flour-mills"} className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
          <div className="flex items-center gap-2">
            <span>{product.category === "Accessories" ? "Emery Stones" : "Flour Mills"}</span>
            <span className="text-slate-400">/</span>
            <span className="text-brand-primary">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto pb-12 flex-1">
        
        {/* Hero Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-square bg-white rounded-2xl flex items-center justify-center p-8">
              <span className="absolute top-0 left-0 z-10 bg-slate-100 text-[10px] font-black uppercase text-slate-500 px-3 py-1.5 rounded-full border border-slate-200">
                {product.category}
              </span>
              <img 
                src={activeImage} 
                alt={product.title} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
            
            {/* Component Thumbnails */}
            {product.showThumbnails !== false && product.keyComponents.length > 0 && (
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <button 
                  onClick={() => setActiveImage(product.heroImage)}
                  className={`flex flex-col items-center gap-2 cursor-pointer group shrink-0 w-[90px] snap-start`}
                >
                  <div className={`relative aspect-square w-full bg-white rounded-xl border flex items-center justify-center p-2 transition-all ${activeImage === product.heroImage ? 'border-brand-primary shadow-sm ring-1 ring-brand-primary/50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <img src={product.heroImage} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <span className="text-[10px] text-center font-semibold text-slate-600 leading-tight">
                    {product.title}
                  </span>
                </button>

                {product.keyComponents.slice(0, 5).map((comp, idx) => (
                  <button 
                    key={idx}
                    onClick={() => comp.image && setActiveImage(comp.image)}
                    className={`flex flex-col items-center gap-2 cursor-pointer group shrink-0 w-[90px] snap-start`}
                  >
                    <div className={`relative aspect-square w-full bg-white rounded-xl border flex items-center justify-center p-2 transition-all ${activeImage === comp.image ? 'border-brand-primary shadow-sm ring-1 ring-brand-primary/50' : 'border-slate-200 hover:border-slate-300'}`}>
                      {comp.image ? (
                        <img src={comp.image} alt={comp.title} className="w-full h-full object-contain mix-blend-multiply" />
                      ) : (
                        <Settings className="w-6 h-6 text-slate-300" />
                      )}
                    </div>
                    <span className="text-[10px] text-center font-semibold text-slate-600 leading-tight">
                      {comp.title}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Disclaimer */}
            {product.productDisclaimer && (
              <div className="flex gap-3 bg-[#f8f9fa] rounded-2xl p-5 border border-slate-200 mt-4">
                <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  * {product.productDisclaimer}
                </p>
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-start pt-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight mb-2">
              {product.title}
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#14663a] mb-6">
              {product.subtitle}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
              {product.desc}
            </p>



            {/* Capacity Stats Grid */}
            <div className={`grid gap-4 mb-10 ${product.heroStats.length === 4 || product.heroStats.length === 8 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {product.heroStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-center bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                  {stat.topLabel && (
                    <div className="pb-3 mb-3 border-b border-slate-100">
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold uppercase tracking-wider">{stat.topLabel}</p>
                    </div>
                  )}
                  <div className="flex flex-col items-center justify-center flex-1">
                    <p className="text-xl sm:text-2xl font-black text-[#0a4c2a]">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1">{stat.label}</p>
                    {stat.sublabel && (
                      <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1">{stat.sublabel}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Variant Selector */}
            {product.models && product.models.length > 1 && (
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Select Model</h4>
                <div className="flex flex-col gap-3">
                  {product.models.map((mod, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedModelIndex(idx)}
                      className={`text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                        selectedModelIndex === idx 
                          ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary/20 shadow-sm' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedModelIndex === idx ? 'border-brand-primary bg-brand-primary' : 'border-slate-300 bg-white'}`}>
                        {selectedModelIndex === idx && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-sm mb-1.5 ${selectedModelIndex === idx ? 'text-brand-primary' : 'text-slate-800'}`}>
                        {mod.name}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        {mod.tableData && (mod.tableData['Size'] || mod.tableData['Size Available']) && (
                          <div className="text-[11px] text-slate-500">
                            <span className="font-semibold text-slate-400">Size:</span> {mod.tableData['Size'] || mod.tableData['Size Available']}
                          </div>
                        )}
                        {mod.tableData && mod.tableData['Capacity'] && (
                          <div className="text-[11px] text-slate-500">
                            <span className="font-semibold text-slate-400">Cap:</span> {mod.tableData['Capacity']}
                          </div>
                        )}
                        {mod.tableData && mod.tableData['Power Load'] && (
                          <div className="text-[11px] text-slate-500">
                            <span className="font-semibold text-slate-400">Power:</span> {mod.tableData['Power Load']}
                          </div>
                        )}
                      </div>
                    </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex flex-col w-full sm:w-auto">
                <span className="text-xs text-slate-500 font-bold mb-1.5 ml-1">Quantity</span>
                <div className="flex items-center bg-white border border-slate-200 rounded-xl h-[46px] overflow-hidden shrink-0 w-[120px]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center text-sm font-bold text-slate-800">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-end gap-4 w-full sm:flex-1 h-full pt-5">
                <button
                  onClick={handleAddToQuote}
                  className="flex-1 h-[46px] bg-[#0a4c2a] hover:bg-[#083a20] text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <FileText className="h-4 w-4" />
                  <span>Add to Quote List</span>
                </button>
                <button
                  onClick={() => window.open("#", "_blank")}
                  className="flex-1 h-[46px] bg-[#1eb557] hover:bg-[#189346] text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 pt-4">
              <div className="flex items-center gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-3.5 py-2 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-[#1eb557]" /> 
                <span className="text-[13px] font-bold text-slate-700">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-3.5 py-2 rounded-xl">
                <CheckCircle className="w-5 h-5 text-[#1eb557]" /> 
                <span className="text-[13px] font-bold text-slate-700">Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-3.5 py-2 rounded-xl">
                <CheckCircle className="w-5 h-5 text-[#1eb557]" /> 
                <span className="text-[13px] font-bold text-slate-700">After Sales Support</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Core Capabilities */}
        {product.coreCapabilities.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-extrabold text-[#0a4c2a] mb-6 tracking-tight">Core Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.coreCapabilities.map((cap, idx) => {
                const colors = [
                  { text: "text-[#79c500]", bg: "bg-[#79c500]/10", Icon: Activity },
                  { text: "text-[#0070f3]", bg: "bg-[#0070f3]/10", Icon: Settings },
                  { text: "text-[#f5a623]", bg: "bg-[#f5a623]/10", Icon: Zap }
                ];
                const c = colors[idx % colors.length];
                const Icon = c.Icon;

                return (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${c.bg} ${c.text}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className={`font-bold text-lg leading-tight ${c.text}`}>{cap.title}</h4>
                    </div>
                    <ul className="space-y-3 flex-1 pl-2">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-slate-700">
                          <span className="text-slate-400 font-bold text-lg leading-none mt-0.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Key Components */}
        {product.keyComponents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-extrabold text-[#0a4c2a] mb-6 tracking-tight">{product.componentsTitle || "Key Components"}</h3>
            <div className={`grid grid-cols-2 gap-4 ${
              product.keyComponents.length === 1 ? 'lg:grid-cols-1 max-w-sm' :
              product.keyComponents.length === 2 ? 'lg:grid-cols-2 max-w-2xl' :
              product.keyComponents.length === 3 ? 'lg:grid-cols-3' :
              product.keyComponents.length === 4 ? 'lg:grid-cols-4' :
              product.keyComponents.length === 5 ? 'lg:grid-cols-5' :
              'lg:grid-cols-6'
            }`}>
              {product.keyComponents.map((comp, idx) => {
                const isCover = comp.title.includes("Control Console");
                return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                  {comp.image && (
                    <div className="relative w-full aspect-[3/2] bg-white border-b border-slate-100 flex items-center justify-center overflow-hidden">
                      <img src={comp.image} alt={comp.title} className={`w-full h-full mix-blend-multiply p-4 ${isCover ? 'object-cover object-top' : 'object-contain object-center'}`} />
                    </div>
                  )}
                  <div className="p-4 flex-1 flex flex-col items-center justify-center">
                    <h4 className="font-semibold text-slate-700 text-[11px] text-center leading-snug">{comp.title}</h4>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Models */}
        {product.showDetailedModels !== false && product.models.length > 0 && (
          <div className="mb-16">
            {product.detailedModelsTitle && (
              <h3 className="text-2xl font-heading font-extrabold text-[#0a4c2a] mb-6 tracking-tight">{product.detailedModelsTitle}</h3>
            )}
            <div className={`grid gap-6 ${
              product.models.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' :
              product.models.length === 2 ? 'grid-cols-1 lg:grid-cols-2' :
              product.models.length === 4 ? 'grid-cols-1 lg:grid-cols-2' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {product.models.map((model, idx) => {
                const isBlue = model.name.toLowerCase().includes("miller");
                const colorTitle = isBlue ? "text-[#0070f3]" : "text-red-500";

                return (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                    <div className="p-6 text-center border-b border-slate-100">
                      <h4 className={`text-2xl font-heading font-extrabold tracking-tight ${colorTitle}`}>
                        {model.name}
                      </h4>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row p-6 gap-6">
                      
                      {model.image && (
                        <div className="w-full sm:w-1/3 flex-shrink-0 flex items-start justify-center overflow-hidden pt-2">
                          <img src={model.image} alt={model.name} className="w-full max-w-[160px] scale-110 object-contain mix-blend-multiply" />
                        </div>
                      )}
                      
                      <div className="flex-1 w-full text-[11px]">
                        {model.tableData && (
                          <div className="flex flex-col border border-slate-200 rounded-lg overflow-hidden">
                            {Object.entries(model.tableData).map(([key, val], i) => (
                              <div key={key} className={`flex border-b border-slate-200 last:border-b-0 ${i % 2 === 0 ? 'bg-[#f8f9fa]' : 'bg-white'}`}>
                                <div className="w-1/2 p-2 border-r border-slate-200 font-semibold text-slate-600 flex items-center">
                                  {key}
                                </div>
                                <div className="w-1/2 p-2 font-medium text-slate-800 flex items-center">
                                  {val}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {model.featuresList && (
                          <div className="flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-white">
                            {model.featuresList.map((feat, i) => (
                              <div key={i} className="flex border-b border-slate-200 last:border-b-0 p-2.5">
                                <span className="font-medium text-slate-700">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#f5a623] flex items-center justify-center shrink-0 border-4 border-white/20">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight mb-1">
                Smart Milling. Smarter Business.
              </h3>
              <p className="text-white/80 font-medium text-sm sm:text-base">
                Save power. Increase production. Deliver consistent quality.
              </p>
            </div>
          </div>

          <Link href="/contact" className="relative z-10 whitespace-nowrap bg-[#f5a623] hover:bg-[#e0961c] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}
