"use client";

import React from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section
      id="mission-vision"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/50 scroll-mt-36"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto space-y-16 sm:space-y-20">
        <div>
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-[#0B2C1C] tracking-tight mb-8 sm:mb-10 text-left">
            Our Vision &amp; Mission
          </h2>

          {/* 2 Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
            {/* Vision Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden relative flex flex-col sm:flex-row justify-between min-h-[240px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-7 sm:p-8 flex flex-col justify-between z-10 flex-1">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_5px_#E6EFEA]">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#FFAA17] tracking-[0.08em] uppercase block mb-0.5">
                        Our Vision
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2C1C] leading-snug">
                        Aiming for a smarter,
                        <br className="hidden sm:inline" /> stronger tomorrow.
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-sm">
                  To combine engineering excellence, innovation and efficiency to create practical
                  solutions that deliver consistent value for our customers.
                </p>
              </div>

              {/* Graphic Graphic Box with Organic Rings & Cutout */}
              <div className="w-full sm:w-[220px] h-[160px] sm:h-auto relative shrink-0 overflow-hidden flex items-end justify-end">
                {/* Organic Rings Background */}
                <svg
                  className="absolute -top-10 -right-12 w-64 h-64 pointer-events-none"
                  viewBox="0 0 300 300"
                >
                  <circle cx="150" cy="150" r="145" fill="#EAF0EC" opacity="0.6" />
                  <circle cx="150" cy="150" r="105" fill="#D3E2D8" opacity="0.75" />
                  <circle cx="150" cy="150" r="65" fill="#B9D2C2" opacity="0.85" />
                </svg>

                {/* Silo Image Frame with Organic Arch */}
                <div className="absolute right-0 bottom-0 w-[170px] sm:w-[190px] h-[140px] sm:h-[180px] rounded-tl-[70px] overflow-hidden shadow-sm z-10">
                  <img
                    src="/images/about/leadership/silo-graphic.png"
                    alt="Vision Silo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden relative flex flex-col sm:flex-row justify-between min-h-[240px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-7 sm:p-8 flex flex-col justify-between z-10 flex-1">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_5px_#E6EFEA]">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#FFAA17] tracking-[0.08em] uppercase block mb-0.5">
                        Our Mission
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2C1C] leading-snug">
                        Building solutions
                        <br className="hidden sm:inline" /> for a better future.
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-sm">
                  To advance milling through intelligent, efficient and sustainable
                  technologies—combining experience, experimentation and continuous improvement to
                  build solutions for the future.
                </p>
              </div>

              {/* Graphic Graphic Box with Warm Organic Rings & Wheat Cutout */}
              <div className="w-full sm:w-[220px] h-[160px] sm:h-auto relative shrink-0 overflow-hidden flex items-end justify-end">
                {/* Organic Rings Background */}
                <svg
                  className="absolute -top-10 -right-12 w-64 h-64 pointer-events-none"
                  viewBox="0 0 300 300"
                >
                  <circle cx="150" cy="150" r="145" fill="#F4EFE7" opacity="0.6" />
                  <circle cx="150" cy="150" r="105" fill="#EAE1D2" opacity="0.75" />
                  <circle cx="150" cy="150" r="65" fill="#DECDB8" opacity="0.85" />
                </svg>

                {/* Wheat Image Frame with Organic Arch */}
                <div className="absolute right-0 bottom-0 w-[170px] sm:w-[190px] h-[140px] sm:h-[180px] rounded-tl-[70px] overflow-hidden shadow-sm z-10">
                  <img
                    src="/images/about/leadership/wheat-graphic.jpg"
                    alt="Mission Wheat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
