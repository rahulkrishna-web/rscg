"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LeaderCard {
  name: string;
  tag: string;
  description: string;
  image: string;
  link: string;
}

const leaders: LeaderCard[] = [
  {
    tag: "CO-FOUNDER & EX-CHAIRMAN",
    name: "Late Mr. B. M. Choyal",
    description:
      "One of the founders who helped establish Choyal’s early foundation in indigenous emery stone and milling technology, setting the direction for generations of engineering.",
    image: "/images/about/leadership/B.M%20Choyal.jpg",
    link: "/ex-chairman",
  },
  {
    tag: "CO-FOUNDER & EX-MANAGING DIRECTOR",
    name: "Late Shri R. D. Sharma",
    description:
      "A founding force behind the company’s growth, helping transform early manufacturing capabilities into a disciplined industrial enterprise.",
    image: "/images/about/leadership/R.D%20Sharma.jpg",
    link: "/ex-md",
  },
  {
    tag: "CHAIRMAN & MANAGING DIRECTOR",
    name: "Mr. R. S. Choyal",
    description:
      "Carrying the legacy into a new era through advanced machinery, patented innovations, complete plants and digitally connected milling systems.",
    image: "/images/about/leadership/RS%20Choyal.jpg",
    link: "/leadership-ed",
  },
];

export default function OtherLeadersSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FBFBFA] border-t border-slate-200/60">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-black tracking-tight text-[#0B2C1C] leading-[1.2]">
            Our Leadership
          </h2>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Portrait - Natural True Size without Cropping */}
                <div className="w-full bg-[#EAEAEA] overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto block opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-7 pb-4">
                  <div className="text-xs font-bold text-[#FFAA17] tracking-[0.06em] uppercase mb-2">
                    {leader.tag}
                  </div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 leading-snug mb-3">
                    {leader.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {leader.description}
                  </p>
                </div>
              </div>

              {/* Read Story Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  href={leader.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2C1C] group-hover:text-[#FFAA17] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
