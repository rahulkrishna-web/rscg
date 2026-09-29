"use client";

import React from "react";

interface WhyRSCItem {
  number: string;
  title: string;
  description: string;
}

const whyRSCItems: WhyRSCItem[] = [
  {
    number: "01",
    title: "Trust",
    description:
      "Trust is indispensable to Choyal. We believe in fair and transparent business, giving our clients peace of mind.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "Quality and excellence define our product range. We provide solutions built to deliver dependable performance.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Driven by rigorous R&D, we develop advanced milling solutions for different budgets and industrial scales.",
  },
  {
    number: "04",
    title: "Economical Solutions",
    description:
      "We provide cost-effective solutions designed to maximise operational efficiency and support profitable growth.",
  },
  {
    number: "05",
    title: "Experience",
    description:
      "With 60+ years of experience, we bring deep milling expertise, proven technology, and skilled teams to every project.",
  },
];

export default function WhyRSCGSection() {
  const firstFour = whyRSCItems.slice(0, 4);
  const fifth = whyRSCItems[4];

  const renderCardContent = (item: WhyRSCItem) => (
    <>
      <span className="text-xs sm:text-sm font-bold text-[#FFAA17] tracking-wider block mb-3">
        {item.number}
      </span>
      <h3 className="text-xl sm:text-2xl font-bold text-[#0E3321] mb-3.5 tracking-tight font-heading">
        {item.title}
      </h3>
      <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
        {item.description}
      </p>
    </>
  );

  return (
    <section
      id="why-rsc"
      className="w-full py-16 sm:py-24 bg-[#F3F4F2] border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto text-left">
        {/* Left-aligned Header Section */}
        <header className="mb-10 sm:mb-14 text-left max-w-3xl">
          <span className="block text-[#0E3321] font-bold text-[13px] sm:text-[14px] tracking-[0.16em] uppercase mb-3 text-left">
            Why RSCG
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15] font-heading mb-4 text-left">
            <span className="block text-[#0E3321]">A legacy built a</span>
            <span className="block text-[#0E3321]">
              future <span className="text-[#FFAA17]">evolving</span>.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Built through generations, shaping excellence, evolving with the industry.
          </p>
        </header>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* First 4 Cards (Row 1 & Row 2) */}
          {firstFour.map((item) => (
            <article
              key={item.number}
              className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1 text-left"
            >
              {renderCardContent(item)}
            </article>
          ))}

          {/* 5th Card: Centered underneath across the 2-column grid */}
          <div className="md:col-span-2 flex justify-center w-full">
            <article className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1 text-left">
              {renderCardContent(fifth)}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
