"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Award, Cog, Building, ShieldCheck, Lightbulb, Globe } from "lucide-react";

interface AboutHeroProps {
  onScrollToSection: (id: string) => void;
}

// Running animated counter component
function RunningCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutHero({ onScrollToSection }: AboutHeroProps) {
  const slides = [
    { src: "/images/about/hero/img1.png", alt: "Golden wheat harvest under sun" },
    { src: "/images/about/hero/img2.png", alt: "Flour milling online training program" },
    { src: "/images/about/hero/img3.png", alt: "Digital flour milling machinery in facility" },
    { src: "/images/about/hero/img4.png", alt: "Complete turnkey milling plant installation" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow every 5 seconds (no arrow buttons per design instruction)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    {
      end: 60,
      suffix: "+",
      label: "Years of Expertise",
      icon: Award,
    },
    {
      end: 275,
      suffix: "+",
      label: "Projects in 10 Years",
      icon: Cog,
    },
    {
      end: 1200,
      suffix: "+",
      label: "Digital Mills Installed",
      icon: Building,
    },
    {
      end: 6,
      suffix: "+",
      label: "Patented Technologies",
      icon: ShieldCheck,
    },
    {
      end: 44,
      suffix: "+",
      label: "Innovative Products",
      icon: Lightbulb,
    },
    {
      end: 10,
      suffix: "+",
      label: "Years Export Excellence",
      icon: Globe,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* 1. HERO SLIDESHOW BANNER */}
      <div className="relative w-full h-[540px] sm:h-[580px] lg:h-[620px] overflow-hidden flex items-center">
        {/* Slides Images with smooth cross-fade */}
        {slides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Gradient Overlay: Transparent black gradient on left preserving background image vibrance while ensuring crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent z-10" />

        {/* Hero Left Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 py-12">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            
            {/* Choyal Grinding Solution Logo */}
            <div className="inline-block bg-white/95 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-md border border-white/30">
              <img
                src="/images/logos/choyal_grinding_transparent.png"
                alt="CHOYAL Grinding Solution"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain"
              />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#f7b032]" />
              <span className="text-[#f7b032] font-black text-xs sm:text-sm tracking-widest uppercase drop-shadow-xs">
                Over 60 Years of Experience
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-heading font-black tracking-tight leading-[1.12]">
              <span className="text-white block uppercase drop-shadow-md">
                Shaping Stone &amp; Building Trust
              </span>
              <span className="text-slate-100 text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide block mt-2 drop-shadow-sm">
                For Six Decades and Beyond.
              </span>
            </h1>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onScrollToSection("about-us")}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1B5E3C] hover:bg-[#23784e] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer border border-white/25"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Slide Indicator Dots (clickable, no arrows per instructions) */}
        <div className="absolute bottom-6 right-6 sm:right-12 lg:right-24 z-20 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-8 bg-[#f7b032]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. RUNNING STATS BAR (Dark green bar with curved top-left corner) */}
      <div className="relative w-full bg-gradient-to-r from-[#071E14] via-[#0B2C1C] to-[#0D3823] rounded-tl-[36px] sm:rounded-tl-[48px] shadow-2xl border-t border-white/10 z-20">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-6 sm:py-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-3.5 group">
                  {/* Circular badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/90 group-hover:bg-white/15 group-hover:border-white/40 transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5 text-[#f7b032]" />
                  </div>
                  {/* Number & label */}
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                      <RunningCounter end={stat.end} suffix={stat.suffix} />
                    </span>
                    <span className="text-[11px] sm:text-xs text-white/70 font-medium leading-tight mt-1">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
