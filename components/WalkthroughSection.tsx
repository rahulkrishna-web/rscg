"use client";

import React from "react";
import Image from "next/image";

export default function WalkthroughSection() {
  return (
    <section
      id="infrastructure"
      className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 bg-white relative z-10 border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-4xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#133a25] leading-[1.15]">
            A company you can <br className="hidden sm:block" />
            <span className="text-[#f7b032]">walk through.</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-1">
            Manufacturing, testing, operations and learning happen within one
            connected ecosystem. Ideas move from the drawing board to the workshop
            and into working plants — gaining insight at every stage and
            returning stronger.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="space-y-6">
          {/* Top Row: Factory Unit (wide) & Digital Pilot Plant */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Factory Unit (col-span-8) */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900">
              <Image
                src="/images/infrastructure/factory_unit.jpg"
                alt="Factory Unit"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-10 text-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f7b032] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7b032]" />
                  Factory Unit
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                  Where engineering takes physical form.
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal max-w-2xl">
                  Our heavy engineering facility brings together fabrication,
                  emery-stone manufacturing, silos, PEB components and
                  specialised milling equipment — turning engineered concepts into
                  production-ready systems.
                </p>
              </div>
            </div>

            {/* Card 2: Digital Pilot Plant (col-span-4) */}
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900">
              <Image
                src="/images/infrastructure/pilot_plant.jpg"
                alt="Digital Pilot Plant"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 text-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f7b032] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7b032]" />
                  Digital Pilot Plant
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                  Where technology meets the real mill.
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                  A full-scale environment for live demonstrations, milling
                  trials, diagnostics and automation development — giving new
                  technologies a real production setting to perform, adapt and
                  improve.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 3: CHARGE · Training */}
            <div className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900">
              <Image
                src="/images/infrastructure/charge_institute.jpg"
                alt="CHARGE · Training"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-10 text-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f7b032] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7b032]" />
                  CHARGE · Training
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2.5">
                  Where experience becomes expertise.
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                  A hands-on learning environment for mill owners, operators,
                  entrepreneurs and plant teams — building the practical knowledge
                  needed to operate and manage modern milling systems.
                </p>
              </div>
            </div>

            {/* Card 4: Choyal Tower · Corporate Headquarters */}
            <div className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900">
              <Image
                src="/images/infrastructure/corporate_office.jpg"
                alt="Choyal Tower · Corporate Headquarters"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-10 text-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f7b032] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7b032]" />
                  Choyal Tower · Corporate Headquarters
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2.5">
                  Where the Group moves as one.
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                  Our corporate headquarters brings Marketing, Sales, IT, Media
                  and Finance together — connecting people, decisions and ideas
                  that support the Group&apos;s operations and growth.
                </p>
              </div>
            </div>

            {/* Card 5: Workshop · Advanced Manufacturing */}
            <div className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] group shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900">
              <Image
                src="/images/infrastructure/precision_workshop.jpg"
                alt="Workshop · Advanced Manufacturing"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-10 text-white">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f7b032] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7b032]" />
                  Workshop · Advanced Manufacturing
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2.5">
                  Where precision becomes production.
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                  A 46,000 sq. ft. manufacturing facility with CNC machining,
                  welding, design, R&amp;D and warehousing capabilities —
                  supporting precision engineering from development through
                  production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
