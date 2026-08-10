"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
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

      {/* Hero Banner Section */}
      <section className="relative w-full overflow-hidden flex flex-col bg-[#133020]">
        <div className="relative w-full h-[550px] lg:h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center object-contain" 
              style={{ backgroundImage: `url('/images/books/books_hero.png')` }}
            />
          </div>
          
          {/* Tint Overlay for gradient blend if needed */}
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#133020] from-0% via-[#133020]/70 via-[30%] to-transparent lg:to-[60%] z-10 w-full" />
          
          {/* Banner Text Content */}
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block bg-[#D3994B] text-[#133020] font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full tracking-widest shadow-sm">
                FLOUR MILLING BOOKS
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-heading font-black text-white leading-[1.1] tracking-tight">
                Books on <br />
                Flour Milling
              </h1>
              <p className="text-base sm:text-lg text-slate-200 font-medium max-w-lg leading-relaxed pt-2">
                Practical knowledge, technical expertise, and decades of industry insight — authored to help millers, entrepreneurs, and plant teams build better Flour operations.
              </p>
              <div className="pt-6">
                <button className="inline-flex items-center gap-2 bg-[#D3994B] hover:bg-[#C2893F] text-slate-900 font-extrabold px-8 py-3.5 rounded shadow-lg transition-transform hover:-translate-y-0.5">
                  EXPLORE BOOKS <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="w-full bg-[#133020] border-t border-b border-white/10 relative z-30">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex items-center gap-4 text-[#D3994B] font-medium text-sm sm:text-base flex-1 justify-center md:justify-start pt-4 md:pt-0 w-full">
                <GraduationCap className="w-10 h-10 stroke-[1.5]" />
                <div className="flex flex-col text-white text-sm">
                  <span className="font-bold text-base">Technical Expertise</span>
                  <span className="text-[#C1C9C3] text-xs mt-0.5 font-normal">Deep industry knowledge<br/>from the ground-up.</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#D3994B] font-medium text-sm sm:text-base flex-1 justify-center py-4 md:py-0 w-full">
                <BookMarked className="w-10 h-10 stroke-[1.5]" />
                <div className="flex flex-col text-white text-sm">
                  <span className="font-bold text-base">Practical Guidance</span>
                  <span className="text-[#C1C9C3] text-xs mt-0.5 font-normal">Actionable insights for better<br/>milling performance.</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#D3994B] font-medium text-sm sm:text-base flex-1 justify-center md:justify-end pb-4 md:pb-0 w-full">
                <Award className="w-10 h-10 stroke-[1.5]" />
                <div className="flex flex-col text-white text-sm">
                  <span className="font-bold text-base">Industry Legacy</span>
                  <span className="text-[#C1C9C3] text-xs mt-0.5 font-normal">Decades of experience.<br/>A commitment to millers.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#183927]">
        <div className="w-full mx-auto space-y-12">
          
          <div className="text-center w-full flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white capitalize">
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
                    className="group bg-[#F4F4F4] rounded-2xl border-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start"
                  >
                    {/* Sale Tag */}
                    <span className="absolute top-4 right-4 z-10 bg-[#D3994B] text-[#133020] text-[11px] font-black uppercase tracking-wider px-3 py-1 shadow-sm rounded-sm">
                      SALE
                    </span>

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
                          <span className="text-sm text-slate-500 line-through font-semibold">₹{book.originalPrice.toLocaleString('en-IN')}.00</span>
                          <span className="text-base text-slate-900 font-black">₹{book.salePrice.toLocaleString('en-IN')}.00</span>
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
