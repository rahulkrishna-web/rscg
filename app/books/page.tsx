"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, BookMarked, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { booksData } from "./booksData";

export default function BooksPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Use a small buffer (e.g., 2px) for floating point inaccuracies
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#133020] text-brand-foreground font-sans">
      <Header />

      {/* Hero Section - Matches exact aspect ratio so images are never cut off */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/books/books_desktop_cropped.png" 
              alt="Books on Flour Milling" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Dark-charcoal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
          </div>

          {/* Mobile Background Image (9:16) */}
          <div className="block md:hidden absolute inset-0">
            <Image 
              src="/hero/books/books-mobile.png" 
              alt="Books on Flour Milling" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Mobile gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
          </div>
        </div>

        {/* Banner Text Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] uppercase tracking-widest">
              <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
              FLOUR MILLING BOOKS
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[68px] font-heading font-black text-white leading-[1.1] tracking-tight">
              Books on <br />
              <span className="text-[#f7b032]">Flour Milling</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Practical knowledge, technical expertise, and decades of industry insight — authored to help millers, entrepreneurs, and plant teams build better Flour operations.
            </p>
            <div className="pt-2 sm:pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('order-books');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE BOOKS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-row items-center justify-between gap-6 divide-x divide-slate-100">
          <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Technical Expertise</h4>
              <p className="text-xs text-slate-500">Deep industry knowledge.</p>
            </div>
          </div>
          
          <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Practical Guidance</h4>
              <p className="text-xs text-slate-500">Actionable insights.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Industry Legacy</h4>
              <p className="text-xs text-slate-500">Decades of experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar (In natural document flow) */}
      <div className="block md:hidden relative z-30 w-full px-6 -mt-6 mb-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 flex flex-col gap-4 divide-y divide-slate-100">
          <div className="w-full flex items-center gap-4 pt-2 first:pt-0 group">
            <div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Technical Expertise</h4>
              <p className="text-xs text-slate-500">Deep industry knowledge.</p>
            </div>
          </div>
          
          <div className="w-full flex items-center gap-4 pt-3 group">
            <div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Practical Guidance</h4>
              <p className="text-xs text-slate-500">Actionable insights.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4 pt-3 group">
            <div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Industry Legacy</h4>
              <p className="text-xs text-slate-500">Decades of experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section id="order-books" className="w-full pt-12 md:pt-24 lg:pt-28 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#F8F9FA]">
        <div className="w-full mx-auto space-y-12">
          
          <div className="text-center w-full flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 capitalize">
              Order Books
            </h2>
          </div>

          {/* Product Grid / Slider */}
          <div className="relative w-full group/slider">
            {/* Slider Controls */}
            {canScrollLeft && (
              <div 
                onClick={() => scroll('left')}
                className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-xl cursor-pointer hover:bg-slate-50 transition-colors opacity-0 group-hover/slider:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </div>
            )}
            
            {canScrollRight && (
              <div 
                onClick={() => scroll('right')}
                className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-xl cursor-pointer hover:bg-slate-50 transition-colors opacity-0 group-hover/slider:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </div>
            )}

            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .overflow-x-auto::-webkit-scrollbar { display: none; }
              `}} />
              {booksData.map((book) => {
                return (
                  <Link 
                    key={book.slug}
                    href={`/books/${book.slug}`}
                    className="group bg-white border border-slate-100 rounded-2xl border-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start"
                  >
                    {/* Sale Tag */}
                    {book.comingSoon ? (
                      <span className="absolute top-4 right-4 z-10 bg-slate-800 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 shadow-sm rounded-sm">
                        COMING SOON
                      </span>
                    ) : (
                      <span className="absolute top-4 right-4 z-10 bg-[#D3994B] text-[#133020] text-[11px] font-black uppercase tracking-wider px-3 py-1 shadow-sm rounded-sm">
                        SALE
                      </span>
                    )}

                    {/* Image Container */}
                    <div className="aspect-[4/5] w-full flex items-center justify-center p-6 relative overflow-hidden bg-white/50 border-b border-slate-200/50 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0"></div>
                      <img 
                        src={book.image} 
                        alt={book.title} 
                        className="object-contain max-h-[85%] max-w-[85%] drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out z-10 relative"
                      />
                    </div>

                    {/* Details Container */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#F2F1ED]">
                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-slate-800 text-lg leading-snug line-clamp-2 min-h-[50px]">
                          {book.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mt-2 mb-1">
                          PUBLICATIONS
                        </p>
                        {/* Price Section */}
                        <div className="flex items-center gap-2 pt-1">
                          {book.comingSoon ? (
                            <span className="text-base text-slate-500 font-bold italic">Coming Soon</span>
                          ) : (
                            <>
                              <span className="text-sm text-slate-500 line-through font-semibold">₹{book.originalPrice.toLocaleString('en-IN')}.00</span>
                              <span className="text-base text-slate-900 font-black">₹{book.salePrice.toLocaleString('en-IN')}.00</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center text-xs font-bold text-slate-800 group-hover:text-[#D3994B] group-hover:translate-x-1 transition-all duration-300 gap-1 mt-auto pt-2">
                        <span>Read Summary</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
