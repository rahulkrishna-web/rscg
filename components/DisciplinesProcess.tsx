"use client";

import React from "react";

interface DisciplineCard {
  num: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

const disciplines: DisciplineCard[] = [
  {
    num: "01",
    tag: "THE MATERIAL",
    title: "Stone & Abrasive Science",
    description:
      "Understanding the grinding surface at its core — from emery composition and profiles to dressing, groove geometry, wear and flour interaction.",
    image: "/images/about/process/image/Emery%20stones.png",
  },
  {
    num: "02",
    tag: "THE MACHINE",
    title: "Machine & Plant Engineering",
    description:
      "Machines, cleaners, sifters, conveyors, silos and plant structures designed around process flow, performance and practical operation.",
    image: "/images/about/process/image/Emery%20stones%20(2).png",
  },
  {
    num: "03",
    tag: "THE CONTROL",
    title: "Automation & Process Intelligence",
    description:
      "PLC controls, intelligent feeding, recipe management, power monitoring and plant data that bring consistency and visibility to every operation.",
    image: "/images/about/process/image/Automation.png",
  },
  {
    num: "04",
    tag: "THE PRACTICE",
    title: "Operating Capability",
    description:
      "Trials, commissioning, diagnostics, training and knowledge transfer that turn engineered systems into capabilities plant teams can operate and improve.",
    image: "/images/about/process/image/Operation.png",
  },
];

export default function DisciplinesProcess() {
  return (
    <section
      id="disciplines"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60 scroll-mt-36"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#0B2C1C] mb-3">
            Disciplines &amp; Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-black tracking-tight text-[#0B2C1C] leading-[1.2] mb-4">
            Four distinct disciplines.
            <br className="hidden sm:inline" />{" "}
            One <span className="text-[#FFAA17]">connected way</span> of working.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            From material science to plant operations, specialized expertise connects together to
            create milling systems that work as one.
          </p>
        </div>

        {/* 2x2 Connected Disciplines Grid (Horizontally swipable on mobile) */}
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-px overflow-x-auto md:overflow-hidden snap-x snap-mandatory no-scrollbar -mx-6 px-8 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-8 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0 md:border md:border-slate-200 md:bg-slate-200 md:rounded-xl shadow-xs">
          {disciplines.map((card) => (
            <div
              key={card.num}
              className="w-[78vw] max-w-[325px] md:w-full md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none bg-white rounded-2xl md:rounded-none p-6 sm:p-8 lg:p-12 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between overflow-hidden group cursor-pointer transition-colors relative border border-slate-200/90 md:border-none shadow-xs md:shadow-none"
            >
              {/* Image Background revealing on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-0 pointer-events-none"
                style={{ backgroundImage: `url("${card.image}")` }}
              >
                {/* Frosted gradient overlay ensuring text legibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-white/50 backdrop-blur-[1px]" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Category Pill Tag */}
                <div className="text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase text-slate-500 mb-4 flex items-center">
                  <span className="text-[#FFAA17] font-black mr-1">{card.num}</span>
                  <span>· {card.tag}</span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-bold text-[#0B2C1C] tracking-tight leading-[1.3] mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] font-medium text-slate-700 leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] max-w-xl">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
