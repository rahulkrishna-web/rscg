"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { booksData } from "../booksData";

export default function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const book = booksData.find((b) => b.slug === resolvedParams.slug);

  if (!book) {
    notFound();
  }

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
                  src={book.image}
                  alt={book.title}
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
                  {book.title}
                </h1>
                <p className="text-2xl sm:text-3xl font-bold text-slate-800 pt-2">
                  MRP: ₹{book.salePrice.toLocaleString('en-IN')}
                </p>
                {book.originalPrice > book.salePrice && (
                  <p className="text-sm text-slate-500 line-through font-semibold">
                    Original Price: ₹{book.originalPrice.toLocaleString('en-IN')}
                  </p>
                )}
              </div>

              {/* About the Book */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">About the Book</h2>
                <div 
                  className="prose prose-slate prose-sm sm:prose-base prose-strong:text-slate-900 prose-ul:my-2 prose-li:my-0.5 text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: book.aboutBook.replace(/\n/g, '<br/>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

              {/* About the Author */}
              <div className="space-y-4 pt-4 border-t border-slate-200/70">
                <h2 className="text-xl font-bold text-slate-900">About the Author</h2>
                <div 
                  className="prose prose-slate prose-sm sm:prose-base prose-strong:text-slate-900 text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: book.aboutAuthor.replace(/\n/g, '<br/>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

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
