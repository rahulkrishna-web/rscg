"use client";

import React from "react";
import Image from "next/image";

export default function OurNetworkSection() {
  return (
    <section
      id="network"
      className="w-full py-16 sm:py-24 bg-white border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto text-left">
        {/* Header Section */}
        <header className="max-w-3xl mb-8 sm:mb-12 text-left">
          <span className="block text-[#0E3321] font-bold text-[13px] sm:text-[14px] tracking-[0.16em] mb-3 text-left">
            Global network
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E3321] leading-[1.15] font-heading mb-5 text-left">
            Global reach
            <br />
            Trusted <span className="text-[#FFAA17]">worldwide</span>
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
            <p>
              For over{" "}
              <span className="font-semibold text-slate-800">60 years</span>,
              R.S. Choyal Group has built a strong global presence in flour
              milling and emery stone technology. Our products serve
              quality-conscious markets across{" "}
              <span className="font-semibold text-slate-800">25+ countries</span>
              , spanning the Middle East, Gulf and international milling
              markets.
            </p>
            <p>
              Built on consistent quality, engineering expertise and trusted
              performance, Choyal continues to be recognised as a reliable
              Indian name in the global flour-milling industry.
            </p>
          </div>
        </header>

        {/* 3D World Map Graphic with Location Pins (Enlarged) */}
        <div className="mt-10 sm:mt-16 w-full flex justify-center">
          <div className="relative w-full max-w-6xl xl:max-w-7xl">
            <Image
              src="/images/about/network/global-map-v2.png"
              alt="RS Choyal Global Reach - Worldwide Network Map"
              width={1916}
              height={441}
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
