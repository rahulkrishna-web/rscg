"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Settings, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const facilitySpecs = [
  { label: "Capacity", value: "40 TPD", iconPath: "/images/facility-centre/icons/see-and-learn/capacity.png" },
  { label: "Purpose", value: "Experience Centre", iconPath: "/images/facility-centre/icons/see-and-learn/purpose.png" },
  { label: "Applications", value: "Machinery Demo / R&D / Training", iconPath: "/images/facility-centre/icons/see-and-learn/application.png" },
  { label: "Software", value: "Miller Lite PLC", iconPath: "/images/facility-centre/icons/see-and-learn/software.png" },
  { label: "Location", value: "Ajmer, Rajasthan", iconPath: "/images/facility-centre/icons/see-and-learn/location.png" },
];

const capabilities = [
  { title: "Machinery in Action", desc: "See a wide range of milling machines running live.", iconPath: "/images/services/facility-center/icons/machinery_demo.png" },
  { title: "Research & Development", desc: "Conduct trials, optimize processes, and innovate with our expertise.", iconPath: "/images/services/facility-center/icons/research_and_development.png" },
  { title: "Operator Training", desc: "Hands-on training to build skills and improve operational excellence.", iconPath: "/images/services/facility-center/icons/operator_training.png" },
  { title: "Process Evaluation", desc: "Evaluate performance and economics to make the right investment decision.", iconPath: "/images/services/facility-center/icons/process_evaluation.png" },
];

const supports = [
  {
    title: "Machinery\nDemonstration",
    desc: "See different flour milling machines in operation and understand their real-world performance.",
    imgPath: "/images/facility-centre/facility-support/machinery-demonstration.png"
  },
  {
    title: "R&D &\nProduct Trials",
    desc: "Test process parameters, evaluate yield, quality, and consistency to find the best outcome.",
    imgPath: "/images/facility-centre/facility-support/randd-and-product-trials.png"
  },
  {
    title: "Training &\nAuditing",
    desc: "Practical operator training and plant audits to ensure peak performance and compliance.",
    imgPath: "/images/facility-centre/facility-support/training-and-auditing.png"
  }
];

const gallery = [
  { title: "Advanced Control & Monitoring", imgPath: "/images/facility-centre/inside-facility/advanced-control-and-monitoring.png" },
  { title: "State-of-the-Art Infrastructure", imgPath: "/images/facility-centre/inside-facility/state-of-the-art-infrastructure.png" },
  { title: "Expert Team & Training", imgPath: "/images/facility-centre/inside-facility/expert-team-and-training.png" },
  { title: "Sustainable & Green Operations", imgPath: "/images/facility-centre/inside-facility/sustainable-operations.png" },
  { title: "Modern Milling Technology", imgPath: "/images/facility-centre/inside-facility/modern-milling-technology.png" }
];

export default function FacilityCentrePage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section - Matches exact aspect ratio so images are never cut off */}
        <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] flex items-center overflow-hidden">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src="/hero/facility-center/facility-center-desktop-cropped.png" 
                alt="40 TPD Flour Milling Facility Centre" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Dark-charcoal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
            </div>

            {/* Mobile Background Image (1079x1920 -> 9:16) */}
            <div className="block md:hidden absolute inset-0">
              <Image 
                src="/hero/facility-center/facility-center-mobile.png" 
                alt="40 TPD Flour Milling Facility Centre" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Mobile gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
            </div>
          </div>

          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24">
            <div className="w-full max-w-3xl">
              <span className="inline-block py-1.5 px-3 rounded-lg bg-[#f7b032] text-[#0B1510] font-black text-xs tracking-widest uppercase mb-4 sm:mb-6 shadow-sm border border-[#f7b032]">
                Infrastructure
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white leading-tight mb-4 sm:mb-6 tracking-tight">
                Experience Our <span className="whitespace-nowrap">40 TPD</span> <br className="hidden sm:block" /> Flour Milling Facility Centre
              </h1>
              <p className="text-base sm:text-xl text-slate-200 mb-6 sm:mb-10 leading-relaxed font-light max-w-xl">
                A hands-on experience centre where you can see machinery in action, validate solutions, conduct R&amp;D, and build operator capability through practical training.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('facility-overview')?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#f7b032] hover:bg-[#ffc254] text-[#0B1510] font-black uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(247,176,50,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore The Facility</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
        <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-row divide-x divide-slate-100 overflow-hidden">
            
            <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">40 TPD</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">Pilot Plant Capacity</p>
            </div>

            <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">Machinery in Action</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">Live Machine Demonstrations</p>
            </div>

            <div className="flex-1 p-6 sm:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-center text-center">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">Train. Test. Validate.</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">All In One Place</p>
            </div>

          </div>
        </div>

        {/* Mobile Key Proof Points Bar (In Document Flow - Prevents Overlapping Next Section) */}
        <div className="block md:hidden relative z-30 px-5 -mt-10 w-full mx-auto max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col divide-y divide-slate-100 overflow-hidden">
            
            <div className="p-6 hover:bg-[#e6f4ea] transition-colors text-center">
              <h3 className="font-heading font-black text-xl text-slate-800 mb-1">40 TPD</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Pilot Plant Capacity</p>
            </div>

            <div className="p-6 hover:bg-[#e6f4ea] transition-colors text-center">
              <h3 className="font-heading font-black text-xl text-slate-800 mb-1">Machinery in Action</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Live Machine Demonstrations</p>
            </div>

            <div className="p-6 hover:bg-[#e6f4ea] transition-colors text-center">
              <h3 className="font-heading font-black text-xl text-slate-800 mb-1">Train. Test. Validate.</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">All In One Place</p>
            </div>

          </div>
        </div>

        <section id="facility-overview" className="w-full pt-10 sm:pt-14 md:pt-16 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 relative md:-mt-12 lg:-mt-16">
          
          {/* See, Test & Learn Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-[#133020] leading-tight pb-4 border-b-2 border-[#D3994B]/30 inline-block">
                See, Test & Learn Before You Invest
              </h2>
              <div className="text-slate-600 space-y-5 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Our <span className="whitespace-nowrap font-bold text-slate-800">40 TPD</span> Flour Milling Facility Centre in Ajmer is more than a pilot plant—it is an experience centre designed to help you make confident, informed investment decisions.
                </p>
                <p>
                  See a wide range of flour-milling machines operating in real conditions, assess process performance, conduct research and development trials, and provide practical training to your operators and technical teams.
                </p>
                <p>
                  From process trials and product development to skill-building and plant evaluation, the facility gives you the opportunity to validate the right solution before making a larger investment.
                </p>
              </div>
            </div>

            {/* Specifications Card */}
            <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <ul className="space-y-5">
                {facilitySpecs.map((spec, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 sm:w-48 shrink-0">
                      <img src={spec.iconPath} alt={spec.label} className="w-5 h-5 object-contain opacity-80" />
                      <span className="text-sm sm:text-base font-bold text-slate-700">{spec.label}</span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-[#133020]">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capabilities Highlight Banner */}
          <div className="w-full bg-[#0D301F] rounded-[32px] p-6 sm:p-8 lg:p-10 mb-16 shadow-lg border border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {capabilities.map((cap, idx) => (
                <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-5 lg:pl-6" : ""}`}>
                  <div className="w-14 h-14 rounded-full bg-[#16442F] border border-[#f7b032]/40 flex items-center justify-center p-3 shrink-0 shadow-sm">
                    <img src={cap.iconPath} alt={cap.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 leading-tight">{cap.title}</h4>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How the Facility Supports You */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 bg-[#D3994B]/30"></div>
              <h3 className="text-xs font-black tracking-[0.15em] text-[#D3994B] uppercase text-center">
                HOW THE FACILITY SUPPORTS YOU
              </h3>
              <div className="h-px w-16 bg-[#D3994B]/30"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {supports.map((item, idx) => (
                <div key={idx} className="bg-white rounded-[24px] overflow-hidden flex flex-col sm:flex-row shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow group">
                  <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-full relative overflow-hidden shrink-0">
                    <img src={item.imgPath} alt={item.title.replace('\n', ' ')} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 sm:p-5 lg:p-6 flex flex-col justify-center space-y-3 sm:w-3/5">
                    <h4 className="font-heading font-black text-[#133020] text-lg whitespace-pre-line leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                    <ArrowRight className="w-4 h-4 text-[#D3994B] group-hover:translate-x-1 transition-transform mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inside the Facility */}
          <div className="mb-20">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#133020] mb-8">
              Inside the Facility
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {gallery.map((item, idx) => (
                <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <img src={item.imgPath} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h4 className="text-xs sm:text-sm text-white font-bold leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="w-full bg-[#0D301F] rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/5">
            <div className="flex items-center gap-6 max-w-2xl">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 p-3.5">
                <img src="/images/services/facility-center/icons/schedule_visit.png" alt="Schedule a Visit" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                  Want to Visit Our Facility Centre?
                </h3>
                <p className="text-slate-200 text-base font-normal">
                  Book a guided visit to explore machinery, evaluate performance, and train your team.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link 
                href="/contact"
                className="bg-[#f7b032] hover:bg-[#ffc254] text-[#0B1510] font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(247,176,50,0.4)] flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto"
              >
                <span>Schedule a Visit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
