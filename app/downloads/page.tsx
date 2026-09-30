"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Download, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { downloadCategories, downloadsData, DownloadItem } from "./downloadsData";

function DownloadsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const fileQuery = searchParams.get("file");

  const [activeCategory, setActiveCategory] = useState("all");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<{ title: string; show: boolean } | null>(null);
  const initialTriggerRef = useRef(false);

  // Filter items based on active category
  const filteredItems = activeCategory === "all"
    ? downloadsData
    : downloadsData.filter((item) => item.category === activeCategory);

  // Function to track and trigger download
  const handleDownload = (item: DownloadItem, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    // 1. Update browser URL cleanly to /downloads?file=[id] without reloading
    const newUrl = `/downloads?file=${item.id}`;
    window.history.pushState({ path: newUrl }, "", newUrl);

    // 2. Track download count on server
    try {
      fetch("/api/track-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId: item.id, title: item.title }),
      }).catch((err) => console.error("Tracking error:", err));

      // Also track in Google Analytics if configured
      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "download_brochure", {
          file_id: item.id,
          file_name: item.title,
          category: item.categoryLabel,
        });
      }
    } catch {
      // Ignore background errors
    }

    // 3. Show confirmation toast
    setToastMessage({ title: item.title, show: true });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);

    // 4. Open/Download the file
    window.open(item.driveUrl, "_blank", "noopener,noreferrer");
  };

  // Handle direct link with ?file=[id] on page mount
  useEffect(() => {
    if (!fileQuery || initialTriggerRef.current) return;
    initialTriggerRef.current = true;

    const matchedItem = downloadsData.find(
      (item) => item.id.toLowerCase() === fileQuery.toLowerCase()
    );

    if (matchedItem) {
      // Set category to 'all' or the item's category so the card is visible
      setActiveCategory("all");
      setHighlightedId(matchedItem.id);

      // Smooth scroll to card
      setTimeout(() => {
        const el = document.getElementById(`card-${matchedItem.id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);

      // Remove highlight after 5 seconds
      setTimeout(() => {
        setHighlightedId(null);
      }, 5000);
    }
  }, [fileQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col">
      <Header />

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full bg-gradient-to-b from-[#06180f] via-[#0b281b] to-[#082015] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden border-b border-emerald-950/40">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Accent Line */}
          <div className="w-12 h-1 bg-[#c58a2d] rounded-full mb-4" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-tight">
            Downloads
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-emerald-100/80 font-normal max-w-2xl leading-relaxed">
            Explore our brochures to discover more about our milling technologies
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-9 sm:mb-11">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[#133a25] tracking-tight relative inline-block pb-3">
              Select Category
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e35a27] rounded-full" />
            </h2>
          </div>

          {/* Filter Tabs Wrapper */}
          <div className="w-full mb-8 sm:mb-12">
            <div className="flex items-center sm:justify-center sm:flex-wrap gap-2.5 sm:gap-3 max-w-[1350px] mx-auto overflow-x-auto sm:overflow-visible no-scrollbar -mx-4 px-6 sm:mx-auto sm:px-0 scroll-pl-6 sm:scroll-pl-0 pb-2 sm:pb-0">
              {downloadCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-none shrink-0 w-[130px] sm:w-[148px] h-[46px] sm:h-[48px] px-2.5 py-1.5 rounded-full text-xs font-semibold leading-tight text-center flex flex-col justify-center items-center cursor-pointer transition-all duration-200 select-none snap-start ${
                      isActive
                        ? "bg-[#0b4627] text-white font-bold shadow-[0_4px_12px_rgba(11,70,39,0.25)] border-[1.5px] border-[#0b4627]"
                        : "bg-white text-[#334155] border-[1.5px] border-[#e2e8f0] hover:border-[#0b4627] hover:text-[#0b4627] hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    {cat.lines.map((line, idx) => (
                      <span key={idx} className="block truncate w-full">
                        {line}
                      </span>
                    ))}
                  </button>
                );
              })}
              <div className="w-2 shrink-0 sm:hidden" aria-hidden="true" />
            </div>
          </div>

          {/* Cards Grid - 2 columns on mobile, 3 columns on lg+ */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-7">
            {filteredItems.map((item) => {
              const isCardHighlighted = highlightedId === item.id;
              return (
                <div
                  key={item.id}
                  id={`card-${item.id}`}
                  onClick={() => handleDownload(item)}
                  className={`group relative flex flex-col rounded-2xl sm:rounded-[22px] overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] sm:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)] transition-all duration-300 cursor-pointer ${
                    isCardHighlighted
                      ? "ring-4 ring-amber-400 ring-offset-2 scale-[1.02]"
                      : ""
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-full aspect-[4/3] sm:aspect-auto sm:h-[275px] relative overflow-hidden bg-[#e2e8f0] flex-shrink-0">
                    <Image
                      src={encodeURI(item.image)}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Bottom Body */}
                  <div className="flex-1 p-3 sm:p-5 flex flex-col justify-center items-start bg-white">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.5px] text-[#e28838] mb-0.5 sm:mb-1 leading-tight line-clamp-1">
                      {item.categoryLabel}
                    </span>
                    <h3
                      className="text-xs sm:text-[1.12rem] font-bold text-[#133a25] leading-snug line-clamp-2 sm:truncate w-full"
                      title={item.title}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Overlay (Desktop) */}
                  <div className="hidden sm:flex absolute inset-0 bg-[#073f27]/90 backdrop-blur-[2px] rounded-[22px] items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <span
                      className="inline-flex items-center justify-center gap-2.5 bg-[#e39b27] hover:bg-[#d48c1e] text-white px-7 py-3.5 rounded-xl font-bold text-[14.5px] shadow-[0_8px_20px_rgba(227,90,39,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 text-decoration-none cursor-pointer"
                    >
                      <span>Download Brochure</span>
                      <Download className="w-4.5 h-4.5 stroke-[2.4]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-500 text-base font-medium">
                No brochures found in this category.
              </p>
            </div>
          )}

        </div>
      </main>

      {/* Floating Download Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d2e1f] text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center gap-3.5 animate-bounce-short">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
              Opening Brochure
            </p>
            <p className="text-sm font-bold text-white max-w-xs truncate">
              {toastMessage.title}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function DownloadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <DownloadsContent />
    </Suspense>
  );
}
