"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsData } from "../newsData";

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentPost = newsData.find((post) => post.slug === slug);

  // Helper to format date into readable text
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-brand-bg text-slate-800 flex flex-col justify-between">
        <div>
          <Header />
          <div className="flex-1 flex flex-col items-center justify-center p-16 space-y-4 max-w-lg mx-auto text-center">
            <BookOpen className="h-12 w-12 text-slate-300" />
            <h2 className="text-2xl font-bold">Article Not Found</h2>
            <p className="text-slate-500">The news article you are looking for does not exist or has been moved.</p>
            <Link href="/news" className="bg-brand-primary hover:bg-brand-primary/95 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-sm text-sm">
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get other news articles to display at the bottom (excluding current one)
  const otherNews = newsData.filter((post) => post.slug !== slug);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Breadcrumb Row */}
        <div className="w-full bg-white/50 border-b border-slate-200/50 py-4 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full flex items-center justify-between">
            <Link
              href="/news"
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider hidden sm:block max-w-xs truncate">
              News / {currentPost.title}
            </div>
          </div>
        </div>

        {/* Article Body Section */}
        <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="space-y-8">
            
            {/* Meta Information & Title */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted bg-white/60 border border-slate-200/50 px-3.5 py-1.5 rounded-full shadow-xs">
                <Calendar className="h-3.5 w-3.5" />
                <span>{formatDate(currentPost.date)}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                {currentPost.title}
              </h1>
            </div>

            {/* Featured Image */}
            {currentPost.images.length > 0 && (
              <div className="rounded-[24px] overflow-hidden aspect-[16/9] bg-slate-100 relative w-full flex items-center justify-center">
                <img
                  src={currentPost.images[0].local_path}
                  alt={currentPost.title}
                  className="object-cover w-full h-full hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            )}

            {/* Structured Content Block */}
            <div className="space-y-6">
              {currentPost.content.map((block, idx) => {
                if (block.type === 'heading') {
                  const headingLevel = block.level || 2;
                  if (headingLevel === 3) {
                    return (
                      <h3 key={idx} className="text-lg font-heading font-black text-slate-800 mt-8 mb-3 leading-snug">
                        {block.text}
                      </h3>
                    );
                  }
                  return (
                    <h2 key={idx} className="text-xl font-heading font-black text-slate-800 mt-8 mb-4 leading-snug">
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === 'list') {
                  return (
                    <ul key={idx} className="list-disc pl-6 space-y-2.5 mb-6 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                // Default paragraph
                return (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
                    {block.text}
                  </p>
                );
              })}
            </div>

          </div>
        </section>

        {/* Other News Section */}
        {otherNews.length > 0 && (
          <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 border-t border-slate-200/50 bg-slate-50/20 overflow-hidden">
            <div className="w-full space-y-8">
              <h2 className="text-2xl font-heading font-black text-slate-900 tracking-tight">
                Read Other Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherNews.map((p) => {
                  const cardImage = p.images.length > 0 ? p.images[0].local_path : "/images/other_3.webp";
                  return (
                    <Link
                      key={p.slug}
                      href={`/news/${p.slug}`}
                      className="group bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-secondary/35 transition-all duration-300 flex flex-col h-full cursor-pointer"
                    >
                      <div className="aspect-[16/10] bg-slate-50 flex items-center justify-center relative border-b border-slate-100 overflow-hidden">
                        <img
                          src={cardImage}
                          alt={p.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-brand-muted font-bold">
                            {formatDate(p.date)}
                          </span>
                          <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-sm sm:text-base transition-colors leading-snug line-clamp-2">
                            {p.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-xs font-black text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto uppercase tracking-wider">
                          <span>Read Story</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
