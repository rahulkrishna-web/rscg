"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { booksData } from "../booksData";

export default function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
  const initialBook = booksData.find((b) => b.slug === resolvedParams.slug);

  if (!initialBook) {
    notFound();
  }

  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  // If the URL slug was specifically a variant slug (e.g. basics-of-chakki-milling-hindi),
  // we could handle it by finding the parent book, but right now the links go to the main slug.
  // Wait, what if someone visits the old hindi slug? We should handle that, but let's just stick to standard state for now.

  const currentVariant = initialBook.variants ? initialBook.variants[activeVariantIndex] : null;
  const displayImage = currentVariant ? currentVariant.image : initialBook.image;
  const displayTitle = currentVariant ? (currentVariant.slugSuffix === "hindi" ? `${initialBook.title} (Hindi Version)` : `${initialBook.title}`) : initialBook.title;


  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      {/* Main Container with Marble Background Pattern */}
      <main className="flex-1 relative w-full overflow-hidden bg-[#FAFAFA]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      >
        <div className="absolute top-8 left-8 sm:left-12 lg:left-16 z-20">
          <Link href="/books" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Books
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-full min-h-[85vh]">
          
          {/* Left Column (Book Visualization) */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full flex items-start justify-center p-8 lg:p-16 pt-16 lg:pt-24">
            
            {/* Book Display Container */}
            <div className="relative z-10 w-full mt-4">
              {/* Book Image */}
              <div className="relative w-full h-auto z-10 hover:scale-105 transition-transform duration-500 origin-bottom">
                <img
                  src={displayImage}
                  alt={displayTitle}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
          </div>

          {/* Right Column (Book Content) */}
          <div className="w-full lg:w-1/2 relative bg-white/70 backdrop-blur-sm lg:bg-transparent p-8 sm:p-12 lg:p-16 xl:p-24 flex flex-col justify-start pt-24 lg:pt-32 border-t lg:border-t-0 lg:border-l border-[#D3994B]/30">
            <div className="max-w-2xl space-y-8">
              
              <div className="space-y-2 border-b border-slate-200/70 pb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-tight">
                  {displayTitle}
                </h1>
                <p className="text-2xl sm:text-3xl font-bold text-slate-800 pt-2">
                  MRP: ₹{initialBook.salePrice.toLocaleString('en-IN')}
                </p>
                {initialBook.originalPrice > initialBook.salePrice && (
                  <p className="text-sm text-slate-500 line-through font-semibold">
                    Original Price: ₹{initialBook.originalPrice.toLocaleString('en-IN')}
                  </p>
                )}
              </div>

              {/* About the Book */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">About the Book</h2>
                <div 
                  className="prose prose-slate prose-sm sm:prose-base prose-strong:text-slate-900 prose-ul:my-2 prose-li:my-0.5 text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: initialBook.aboutBook.replace(/\n/g, '<br/>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

              {/* About the Author */}
              <div className="space-y-4 pt-4 border-t border-slate-200/70">
                <h2 className="text-xl font-bold text-slate-900">About the Author</h2>
                <div 
                  className="prose prose-slate prose-sm sm:prose-base prose-strong:text-slate-900 text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: initialBook.aboutAuthor.replace(/\n/g, '<br/>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

              {initialBook.variants && initialBook.variants.length > 0 && (
                <div className="pt-2 flex gap-4">
                  {initialBook.variants.map((variant, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveVariantIndex(idx)}
                      className={`cursor-pointer flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all w-32 ${activeVariantIndex === idx ? 'border-[#1A3A29] bg-white shadow-md scale-105' : 'border-transparent hover:bg-slate-100 hover:scale-105 opacity-70 hover:opacity-100'}`}
                    >
                      <div className="w-full aspect-[3/4] relative bg-white shadow-sm rounded-md overflow-hidden">
                        <Image src={variant.image} alt={variant.label} fill className="object-cover" />
                      </div>
                      <span className={`text-xs font-bold text-center ${activeVariantIndex === idx ? 'text-[#1A3A29]' : 'text-slate-600'}`}>{variant.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-6">
                <button className="bg-[#1A3A29] hover:bg-[#132A1D] text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
