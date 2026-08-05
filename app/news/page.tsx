"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsData } from "./newsData";

export default function NewsPage() {

  // Helper to extract first paragraph as excerpt
  const getExcerpt = (contentArray: any[]) => {
    const firstParagraph = contentArray.find(c => c.type === 'paragraph');
    if (firstParagraph && firstParagraph.text) {
      const text = firstParagraph.text;
      return text.length > 100 ? text.substring(0, 97) + "..." : text;
    }
    return "";
  };

  // Helper to format date like "14 APR 2015"
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[350px] sm:h-[450px] overflow-hidden flex flex-col justify-center bg-[#0D301F]">
          <div className="absolute inset-0 bg-[url('/images/news-page/news_hero.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C1C] via-[#0B2C1C]/90 to-transparent z-10 w-full sm:w-2/3 lg:w-3/5" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-center">
            <div className="space-y-4 max-w-xl">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase block">
                NEWS & UPDATES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
                News & Updates
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-2">
                Stay informed with the latest announcements, product launches, industry insights, and milestones from RS Choyal Group.
              </p>
              <div className="w-10 h-0.5 bg-[#D3994B] mt-6" />
            </div>
          </div>
        </section>

        {/* Main Section */}
        <section className="relative w-full py-20 z-10">
          {/* Split Background: Top White, Bottom Beige */}
          <div className="absolute inset-0 z-0 flex flex-col">
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#F9F6F0]" />
          </div>

          <div className="relative z-10 px-6 sm:px-12 lg:px-16 xl:px-24 w-full">
            {/* Header */}
            <div className="text-center space-y-2 mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading text-slate-900">
                News & Events
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Industry News, Upcoming Exhibitions, and Corporate Updates
              </p>
            </div>

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {newsData.map((item) => {
                const cardImage = item.images.length > 0 ? item.images[0].local_path : "/images/other_3.webp";
                return (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group bg-white rounded-[24px] border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={cardImage}
                        alt={item.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">
                          {formatDate(item.date)} <span className="mx-1 text-slate-300">|</span> Expositions
                        </div>
                        <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-2 font-medium">
                          {getExcerpt(item.content)}
                        </p>
                      </div>

                      <div className="pt-6 mt-auto">
                        <div className="inline-flex items-center gap-1 text-[13px] font-bold text-[#4A7264] hover:text-[#133020] transition-colors border-b border-transparent hover:border-[#133020]">
                          Read More <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
