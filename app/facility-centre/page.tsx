"use client";

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
  { title: "Machinery in Action", desc: "See a wide range of milling machines running live.", iconPath: "/images/facility-centre/icons/highlighted-/machinery-demo.png" },
  { title: "Research & Development", desc: "Conduct trials, optimize processes, and innovate with our expertise.", iconPath: "/images/facility-centre/icons/highlighted-/randd.png" },
  { title: "Operator Training", desc: "Hands-on training to build skills and improve operational excellence.", iconPath: "/images/facility-centre/icons/highlighted-/operator-training.png" },
  { title: "Process Evaluation", desc: "Evaluate performance and economics to make the right investment decision.", iconPath: "/images/facility-centre/icons/highlighted-/process-evaluation.png" },
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

        {/* Hero Section */}
        <section className="relative w-full h-[400px] sm:h-[480px] overflow-hidden flex items-center bg-[#0D301F]">
          <div className="absolute inset-0 bg-[url('/images/facility-centre/hero-image/turnkey_projects_hero.png')] bg-cover bg-right sm:bg-center" />
          {/* A gradient overlay that is solid green on the left, fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C1C] via-[#0B2C1C]/90 to-transparent z-10 w-full sm:w-2/3 lg:w-3/5" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-center pb-8 sm:pb-0">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase">
                INFRASTRUCTURE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-heading font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Experience 40 TPD <br className="hidden sm:block" /> Flour Milling Facility Centre
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-2 max-w-xl">
                A hands-on experience centre where you can see machinery in action, validate solutions, 
                conduct R&D, and build operator capability through practical training.
              </p>
            </div>

            {/* Hero Highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-8 lg:mt-12">
              <div className="flex items-center gap-3">
                <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-[#D3994B]" />
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm sm:text-base">40 TPD</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Pilot Plant Capacity</p>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-white/20"></div>

              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-[#D3994B]" />
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm sm:text-base">Machinery in Action</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Live Demonstrations</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/20"></div>

              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#D3994B]" />
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm sm:text-base">Train. Test. Validate.</p>
                  <p className="text-slate-400 text-xs sm:text-sm">All in One Place</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* See, Test & Learn Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-black text-[#133020] leading-tight pb-4 border-b-2 border-[#D3994B]/30 inline-block">
                See, Test & Learn Before You Invest
              </h2>
              <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
                <p>
                  Our 40 TPD Flour Milling Facility Centre in Ajmer is more than a pilot plant—it is an experience centre designed to help you make confident, informed investment decisions.
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
                      <span className="text-[13px] font-bold text-slate-600">{spec.label}</span>
                    </div>
                    <span className="text-[13px] font-black text-[#133020]">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capabilities Highlight Banner */}
          <div className="w-full bg-[#0D301F] rounded-[32px] p-8 sm:p-10 mb-16 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {capabilities.map((cap, idx) => (
                <div key={idx} className={`flex items-start gap-4 ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-6" : ""}`}>
                  <div className="w-12 h-12 rounded-full bg-[#D3994B]/10 flex items-center justify-center shrink-0 border border-[#D3994B]/20">
                    <img src={cap.iconPath} alt={cap.title} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[15px] mb-1 leading-tight">{cap.title}</h4>
                    <p className="text-[11px] text-white/70 leading-snug">{cap.desc}</p>
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
                    <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
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
                    <h4 className="text-[10px] sm:text-xs text-white font-bold leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="w-full bg-[#0D301F] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/5">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <img src="/images/facility-centre/icons/highlighted-/schedule-visit.png" alt="Schedule a Visit" className="w-7 h-7 object-contain" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                  Want to Visit Our Facility Centre?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Book a guided visit to explore machinery, evaluate performance, and train your team.
                </p>
              </div>
            </div>

            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D3994B] text-white hover:bg-[#D3994B]/90 px-8 py-3.5 rounded-xl text-sm font-black tracking-wide transition-transform hover:-translate-y-0.5 shadow-md w-full md:w-auto shrink-0"
            >
              <img src="/images/facility-centre/icons/highlighted-/schedule-visit.png" alt="" className="w-4 h-4 brightness-0 invert" />
              Schedule a Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
