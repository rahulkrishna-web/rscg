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
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-col sm:flex-row justify-between min-h-[250px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-7 sm:p-8 lg:p-9 flex flex-col justify-between z-10 flex-1">
                <div>
                  <div className="flex items-start gap-4 sm:gap-5 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_5px_#E6EFEA]">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#FFAA17] tracking-[0.08em] uppercase block mb-1">
                        Our Vision
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2C1C] leading-snug">
                        Aiming for a smarter,
                        <br className="hidden sm:inline" /> stronger tomorrow.
                      </h3>
                      <div className="w-10 h-[2.5px] bg-[#FFAA17] mt-3 sm:mt-3.5 mb-4 rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal">
                  To combine engineering excellence, innovation and efficiency to create practical
                  solutions that deliver consistent value for our customers.
                </p>
              </div>

              {/* Graphic Box with 2 Background Circle Arcs & Left-Arced Image */}
              <div className="w-full sm:w-[240px] md:w-[260px] lg:w-[270px] xl:w-[290px] h-[220px] sm:h-auto min-h-[220px] sm:min-h-full relative shrink-0 overflow-hidden flex items-center justify-end select-none">
                <svg
                  viewBox="0 0 260 280"
                  className="w-full h-full min-h-[220px] pointer-events-none"
                  preserveAspectRatio="xMidYMid slice"
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
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-col sm:flex-row justify-between min-h-[250px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-7 sm:p-8 lg:p-9 flex flex-col justify-between z-10 flex-1">
                <div>
                  <div className="flex items-start gap-4 sm:gap-5 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_5px_#E6EFEA]">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#FFAA17] tracking-[0.08em] uppercase block mb-1">
                        Our Mission
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2C1C] leading-snug">
                        Building solutions
                        <br className="hidden sm:inline" /> for a better future.
                      </h3>
                      <div className="w-10 h-[2.5px] bg-[#FFAA17] mt-3 sm:mt-3.5 mb-4 rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal">
                  To advance milling through intelligent, efficient and sustainable
                  technologies combining experience, experimentation and continuous improvement to
                  build solutions for the future.
                </p>
              </div>

              {/* Graphic Box with 2 Background Circle Arcs & Left-Arced Image */}
              <div className="w-full sm:w-[240px] md:w-[260px] lg:w-[270px] xl:w-[290px] h-[220px] sm:h-auto min-h-[220px] sm:min-h-full relative shrink-0 overflow-hidden flex items-center justify-end select-none">
                <svg
                  viewBox="0 0 260 280"
                  className="w-full h-full min-h-[220px] pointer-events-none"
                  preserveAspectRatio="xMidYMid slice"
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
                      href="/images/about/mission-vision/mission.png"
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
          </div>
        </div>
      </div>
    </section>
  );
}
