"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Shield, Layers, Settings, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

export default function FlourProcessingPage() {

  const { addToQuote } = useQuote();

  const advancedProducts = [
    {
      id: 1,
      title: "Entoleter",
      slug: "entoleter",
      image: "/images/flour-processing/entoleter.jpg",
      description: "Destroys insect eggs and larvae using centrifugal impact, ensuring hygienic grain storage."
    },
    {
      id: 2,
      title: "Vibro Sifter",
      slug: "vibro-sifter",
      image: "/images/flour-processing/vibrosifter.png",
      description: "Accurately grades flour and grains by particle size for consistent product quality."
    },
    {
      id: 3,
      title: "Plan Sifter",
      slug: "plan-sifter",
      image: "/images/flour-processing/plansifter.png",
      description: "Delivers precise flour grading and particle separation for consistent milling performance."
    }
  ]

  return (
    <div className="min-h-screen bg-white text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full pb-20 lg:pb-0">
        <div className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-[#0B1510]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/flour-processing/flour_processing_hero.png"
              alt="Flour Processing Solutions"
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
                PRODUCT OVERVIEW
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1] tracking-tight">
                Flour<br/>Processing
              </h1>
              <p className="text-base sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                Explore the full journey of flour processing, from raw wheat fields to finished, high-quality flour. Our solutions cover every step for optimal results.
              </p>
              <div className="pt-4">
                <Link 
                  href="#products" 
                  className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wide"
                >
                  EXPLORE MACHINES <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Proof Points Bar (Straddling Hero Boundary) */}
        <div className="relative z-30 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:translate-y-1/2 px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1400px]">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Hygienic Grain Control</h4>
                <p className="text-xs text-slate-500">Maximum safety and sanitation.</p>
              </div>
            </div>
            
            <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Multi-Pass Precision Grading</h4>
                <p className="text-xs text-slate-500">Perfectly uniform separation.</p>
              </div>
            </div>

            <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">High Throughput & Yield</h4>
                <p className="text-xs text-slate-500">Unmatched production capacity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="products" className="w-full pt-32 lg:pt-40 pb-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white">
        <div className="w-full mx-auto space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              Our Advanced Flour Processing Products
            </h2>
            <p className="text-slate-600 font-medium">
              Engineered flour processing solutions that maximize yield, preserve natural nutrition, and deliver uniform flour quality with efficient, reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {advancedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Image Area */}
                <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 relative border-b border-slate-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details Area */}
                <div className="p-5 flex-1 flex flex-col space-y-3">
                  <h3 className="font-heading font-bold text-slate-800 text-[15px] leading-snug">
                    {product.id}. {product.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 flex-1 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 gap-2 border-t border-slate-100">
                    <Link 
                      href={`/flour-processing/${product.slug}`} 
                      className="text-xs font-bold text-slate-800 hover:text-brand-primary flex items-center gap-1 transition-colors"
                    >
                      View Details <ArrowRight className="w-3 h-3 -rotate-45" />
                    </Link>
                    <button 
                      onClick={() => addToQuote({ 
                        id: product.slug, 
                        name: product.title, 
                        image: product.image 
                      })}
                      className="flex items-center gap-1.5 text-xs font-bold border border-slate-300 text-slate-700 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-[#eab308]" />
                      Add to Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Landscape Banner */}
      <section className="relative w-full h-[240px] sm:h-[320px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_3.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            Need a Customized Flour Processing Setup?
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
