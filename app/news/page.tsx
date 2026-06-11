"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsData } from "./newsData";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Helper to extract first paragraph as excerpt
  const getExcerpt = (contentArray: any[]) => {
    const firstParagraph = contentArray.find(c => c.type === 'paragraph');
    if (firstParagraph && firstParagraph.text) {
      const text = firstParagraph.text;
      return text.length > 150 ? text.substring(0, 147) + "..." : text;
    }
    return "";
  };

  // Helper to format date into readable text
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  // Filter news based on query matching title or paragraphs
  const filteredNews = newsData.filter((item) => {
    const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContent = item.content.some(
      (paragraph) => 
        paragraph.text?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        paragraph.items?.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return matchesTitle || matchesContent;
  });

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Header Hero Banner */}
        <section className="relative w-full h-[200px] sm:h-[240px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/infrastructure/corporate_office.jpg')] bg-cover bg-center opacity-35" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                RS Choyal Updates
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                News & Press Releases
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Stay updated with the latest events, conventions, international exhibitions, and trade missions of RS Choyal Group.
              </p>
            </div>
          </div>
        </section>

        {/* Main Section */}
        <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24 z-10">
          {/* Breadcrumb & Search Container */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-200/50">
            <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-600">News</span>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-80 bg-white rounded-2xl border border-slate-200/60 p-1 shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm bg-slate-50 border border-slate-100 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              />
            </div>
          </div>

          {/* News Cards Grid */}
          {filteredNews.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200/50 p-16 text-center text-slate-500 space-y-4 max-w-lg mx-auto">
              <BookOpen className="h-12 w-12 mx-auto text-slate-300" />
              <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
              <p className="text-sm text-slate-400">No news articles matched your search query. Try typing something else.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredNews.map((item) => {
                const cardImage = item.images.length > 0 ? item.images[0].local_path : "/images/other_3.webp";
                return (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group cursor-pointer flex flex-col h-full space-y-4"
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={cardImage}
                        alt={item.title}
                        className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-brand-primary/10 text-brand-primary backdrop-blur-md border border-brand-primary/15 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                        Press Release
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-brand-muted">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <h3 className="text-xl font-heading font-black text-slate-800 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 font-medium">
                          {getExcerpt(item.content)}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-black text-brand-primary group-hover:text-brand-secondary transition-colors uppercase tracking-wider">
                        <span>Read Full Story</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
