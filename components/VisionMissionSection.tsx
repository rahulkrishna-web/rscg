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
            Our vision &amp; mission
          </h2>

          {/* 2 Vision & Mission Cards */}
          <div className="flex lg:grid lg:grid-cols-2 gap-4 sm:gap-7 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 lg:mx-0 lg:px-0 scroll-pl-6 sm:scroll-pl-12 lg:scroll-pl-0 pt-2 pb-6 lg:py-0">
            {/* Vision Card */}
            <div className="w-[86vw] max-w-[440px] sm:w-[540px] sm:max-w-none lg:w-auto shrink-0 lg:shrink snap-start lg:snap-align-none bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-row justify-between min-h-[210px] sm:min-h-[250px] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-4 sm:p-8 lg:p-9 pr-[120px] sm:pr-[235px] md:pr-[255px] lg:pr-[265px] xl:pr-[285px] flex flex-col justify-between relative z-10 flex-1 min-w-0 bg-transparent">
                <div>
                  <div className="flex items-start gap-3 sm:gap-5 mb-2.5 sm:mb-4">
                    <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_4px_#E6EFEA] sm:shadow-[0_0_0_5px_#E6EFEA]">
                      <Eye className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] sm:text-xs font-bold text-[#FFAA17] tracking-[0.08em] block mb-0.5 sm:mb-1">
                        Our vision
                      </span>
                      <h3 className="text-[15px] sm:text-2xl font-extrabold text-[#0B2C1C] leading-snug">
                        Aiming for a smarter,
                        <br className="hidden sm:inline" /> stronger tomorrow.
                      </h3>
                      <div className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#FFAA17] mt-2 sm:mt-3.5 mb-2 sm:mb-4 rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                  To combine engineering excellence, innovation and efficiency to create practical
                  solutions that deliver consistent value for our customers.
                </p>
              </div>

              {/* Subtle Bottom-Left to Top-Right White Gradient (above BG, behind text) */}
              <div
                className="absolute inset-0 z-[5] pointer-events-none bg-[linear-gradient(50deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_52%,rgba(255,255,255,0.55)_68%,rgba(255,255,255,0)_84%)] sm:bg-[linear-gradient(50deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_48%,rgba(255,255,255,0)_70%)]"
                aria-hidden="true"
              />

              {/* Graphic Box in Background with 2 Background Circle Arcs & Left-Arced Image */}
              <div className="absolute right-0 inset-y-0 w-[170px] sm:w-[240px] md:w-[260px] lg:w-[270px] xl:w-[290px] z-0 flex items-center justify-end pointer-events-none select-none">
                <svg
                  viewBox="0 0 260 280"
                  className="w-full h-full overflow-visible pointer-events-none"
                  preserveAspectRatio="xMaxYMid slice"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="vision-image-clip">
                      <path d="M 260,0 C 25,60 20,200 75,280 L 260,280 Z" />
                    </clipPath>
                  </defs>

                  {/* 2 Soft Sage Background Circle Arcs (top & bottom) */}
                  <circle cx="180" cy="20" r="110" fill="#E4EEE6" />
                  <circle cx="170" cy="255" r="115" fill="#E4EEE6" />

                  {/* Image with smooth hover scale (bottom-right uncut) */}
                  <g clipPath="url(#vision-image-clip)">
                    <image
                      href="/images/about/mission-vision/vision.png"
                      x="0"
                      y="0"
                      width="260"
                      height="280"
                      preserveAspectRatio="xMidYMid slice"
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ transformOrigin: "center" }}
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Mission Card */}
            <div className="w-[86vw] max-w-[440px] sm:w-[540px] sm:max-w-none lg:w-auto shrink-0 lg:shrink snap-start lg:snap-align-none bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-row justify-between min-h-[210px] sm:min-h-[250px] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-4 sm:p-8 lg:p-9 pr-[120px] sm:pr-[235px] md:pr-[255px] lg:pr-[265px] xl:pr-[285px] flex flex-col justify-between relative z-10 flex-1 min-w-0 bg-transparent">
                <div>
                  <div className="flex items-start gap-3 sm:gap-5 mb-2.5 sm:mb-4">
                    <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_4px_#E6EFEA] sm:shadow-[0_0_0_5px_#E6EFEA]">
                      <Target className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] sm:text-xs font-bold text-[#FFAA17] tracking-[0.08em] block mb-0.5 sm:mb-1">
                        Our mission
                      </span>
                      <h3 className="text-[15px] sm:text-2xl font-extrabold text-[#0B2C1C] leading-snug">
                        Building solutions
                        <br className="hidden sm:inline" /> for a better future.
                      </h3>
                      <div className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#FFAA17] mt-2 sm:mt-3.5 mb-2 sm:mb-4 rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                  To advance milling through intelligent, efficient and sustainable
                  technologies combining experience, experimentation and continuous improvement to
                  build solutions for the future.
                </p>
              </div>

              {/* Subtle Bottom-Left to Top-Right White Gradient (above BG, behind text) */}
              <div
                className="absolute inset-0 z-[5] pointer-events-none bg-[linear-gradient(50deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_52%,rgba(255,255,255,0.55)_68%,rgba(255,255,255,0)_84%)] sm:bg-[linear-gradient(50deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_48%,rgba(255,255,255,0)_70%)]"
                aria-hidden="true"
              />

              {/* Graphic Box in Background with 2 Background Circle Arcs & Left-Arced Image */}
              <div className="absolute right-0 inset-y-0 w-[170px] sm:w-[240px] md:w-[260px] lg:w-[270px] xl:w-[290px] z-0 flex items-center justify-end pointer-events-none select-none">
                <svg
                  viewBox="0 0 260 280"
                  className="w-full h-full overflow-visible pointer-events-none"
                  preserveAspectRatio="xMaxYMid slice"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="mission-image-clip">
                      <path d="M 260,0 C 25,60 20,200 75,280 L 260,280 Z" />
                    </clipPath>
                  </defs>

                  {/* 2 Soft Sage Background Circle Arcs (top & bottom) */}
                  <circle cx="180" cy="20" r="110" fill="#E4EEE6" />
                  <circle cx="170" cy="255" r="115" fill="#E4EEE6" />

                  {/* Image with smooth hover scale (bottom-right uncut) */}
                  <g clipPath="url(#mission-image-clip)">
                    <image
                      href="/images/about/mission-vision/mission.jpg"
                      x="0"
                      y="0"
                      width="260"
                      height="280"
                      preserveAspectRatio="xMidYMid slice"
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ transformOrigin: "center" }}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="w-2 shrink-0 lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
