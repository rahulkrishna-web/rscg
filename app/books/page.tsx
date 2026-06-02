"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/app/catalog/productsData";

const bookPrices: Record<string, { original: string; sale: string }> = {
  "book-basics-of-chakki-milling": { original: "₹9,900.00", sale: "₹6,900.00" },
  "book-choti-si-baat": { original: "₹260.00", sale: "₹250.00" },
  "han-tum-ek-vijeta-ho": { original: "₹240.00", sale: "₹200.00" },
  "mai-mera-man-meri-manjil": { original: "₹160.00", sale: "₹150.00" },
  "marvel-treasure": { original: "₹250.00", sale: "₹200.00" },
  "whole-some-flour": { original: "₹1,500.00", sale: "₹1,000.00" }
};

export default function BooksPage() {
  // Filter books category
  const books = productsData.filter((p) => p.category === "books");

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image of a collage of books */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter scale-105" 
          style={{ backgroundImage: `url('https://rschoyalgroup.com/wp-content/uploads/2025/07/basic-of-chakki-milling-1.jpg')` }}
        />
        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block bg-brand-tertiary text-slate-900 font-black text-xs sm:text-sm px-5 py-2.5 uppercase tracking-widest shadow-md">
              Books
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-200 tracking-wide max-w-2xl leading-relaxed">
              Timeless knowledge on traditional milling, personal growth, and leadership from the desk of Mr. R.S. Choyal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto space-y-12">
          
          {/* Page Intro Text */}
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              Order books
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Welcome to the official book collection by R.S. Choyal — a visionary Industrialist, Innovator, and thought leader who has redefined flour milling in India and beyond. Blending decades of technical expertise with deep human insight, each book offers a unique journey into subjects like traditional chakki milling, personal growth, and purposeful living. Whether you're an aspiring entrepreneur, a curious learner, or someone seeking clarity and motivation, these titles — including <em>Choti Si Baat</em>, <em>Marvel Treasure</em>, and <em>Basics of Chakki Milling</em> — are crafted to inform, inspire, and empower. Explore timeless wisdom drawn from real-life experience and a passion for innovation.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((product) => {
              const prices = bookPrices[product.slug] || { original: "₹300.00", sale: "₹250.00" };
              return (
                <Link 
                  key={product.slug}
                  href={`/catalog/${product.slug}`}
                  className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col relative"
                >
                  {/* Sale Tag */}
                  <span className="absolute top-4 left-4 z-10 bg-brand-secondary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Sale!
                  </span>

                  {/* Image Container */}
                  <div className="aspect-square bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden border-b border-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                      <BookOpen className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-base transition-colors leading-snug min-h-[48px] flex items-center">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Publications
                      </p>
                      {/* Price Section */}
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-xs text-slate-400 line-through font-bold">{prices.original}</span>
                        <span className="text-sm text-brand-secondary font-black">{prices.sale}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                      <span>Read Summary</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
