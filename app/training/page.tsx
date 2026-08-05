"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Factory, Users, GraduationCap, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden flex flex-col justify-end bg-[#0D301F]">
          <div className="absolute inset-0 bg-[url('/images/training-page/hero-image/training_hero.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C1C] via-[#0B2C1C]/90 to-transparent z-10 w-full sm:w-2/3 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C1C] via-[#0B2C1C]/60 to-transparent z-10 h-1/2 mt-auto" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-between pt-16 pb-12 sm:pb-16">
            
            <div className="space-y-4 max-w-2xl mt-8">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#D3994B] rounded-sm transform rotate-45" /> TRAINING
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Build Skills for<br/>Modern Flour Milling
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-4 max-w-lg">
                Industry-focused training for professionals, freshers, and future mill leaders—combining practical exposure, technical learning, and real-world milling expertise.
              </p>
            </div>

            {/* Hero Highlights - Bottom Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 mt-12 pt-8">
              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                {[
                  { icon: Factory, title: "Hands-On", subtitle: "Plant Learning" },
                  { icon: Users, title: "For Professionals", subtitle: "& Freshers" },
                  { icon: GraduationCap, title: "Industry-Led", subtitle: "Skill Development" }
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#D3994B] flex items-center justify-center text-[#D3994B]">
                      <highlight.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-white font-bold text-xs sm:text-sm">{highlight.title}</h4>
                      <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">{highlight.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#programs"
                className="flex items-center justify-center gap-2 bg-[#D3994B] text-[#0B2C1C] hover:bg-[#c48d45] px-6 py-3 rounded-lg text-xs font-black tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
              >
                Explore Training Programs <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* Learn with CHARGE Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
                Learn with <span className="text-[#0B2C1C]">CHARGE</span>
              </h2>
              
              <div className="text-slate-600 font-medium space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  CHARGE—Choyal Hub for Agribusiness, Research, Growth and Entrepreneurship—is a CSR initiative of RS Choyal Group and the next chapter in the legacy of Choyal School of Milling Technology.
                </p>
                <p>
                  We offer practical training for professionals, freshers, and local youth. CHARGE operates on a no-profit, no-loss basis and combines classroom learning with hands-on exposure to real milling machinery and processes.
                </p>
                <p>
                  Our aim is to build technical capability, improve employability, and prepare people for real roles across the flour milling and grain-processing industry.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] overflow-hidden shadow-lg border border-slate-100 h-64 sm:h-80 w-full relative">
                <img 
                  src="/images/training-page/learn-with-charge/training.png" 
                  alt="Learn with Charge" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Facts */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                {[
                  { icon: "/images/training-page/icons/learn-with-charge/csr-initiative-of-rs-choyal-group.png", text: "CSR Initiative of RS Choyal Group" },
                  { icon: "/images/training-page/icons/learn-with-charge/legacy-of-csmt.png", text: "Legacy of CSMT" },
                  { icon: "/images/training-page/icons/learn-with-charge/training-professionals-and-youth.png", text: "Training Professionals, Freshers & Youth" }
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-3 w-full justify-center sm:justify-start">
                    <img src={fact.icon} alt={fact.text} className="w-10 h-10 object-contain flex-shrink-0" />
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-snug max-w-[120px]">{fact.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Why CHARGE Grid */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">
              Why <span className="text-[#0B2C1C]">CHARGE</span>
            </h3>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "First-Mover in Chakki Milling Education", desc: "One of India's earliest focused training initiatives dedicated to practical chakki and stone-milling knowledge.", icon: "/images/training-page/icons/why-charge/first-mover-in-chakki-milling-education.png" },
              { title: "60+ Years of Industry Backing", desc: "Programs supported by decades of experience in flour-mill engineering, emery-stone manufacturing, and plant operations.", icon: "/images/training-page/icons/why-charge/60-years.png" },
              { title: "World-Class Machinery Access", desc: "Learn around real equipment, live systems, modern plant infrastructure, and industrial milling processes.", icon: "/images/training-page/icons/why-charge/world-class-machinery-access.png" },
              { title: "Research-Led Learning", desc: "Training shaped by continuous research, product development, process trials, and practical plant insights.", icon: "/images/training-page/icons/why-charge/research-led-learning.png" },
              { title: "Integrity in Assessment", desc: "Structured learning with emphasis on safety, discipline, technical understanding, and practical competence.", icon: "/images/training-page/icons/why-charge/integrity-in-assessment.png" },
              { title: "Skilled Faculty & Industry Exposure", desc: "Learn from experienced professionals with direct knowledge of machinery, production, quality, and plant operations.", icon: "/images/training-page/icons/why-charge/skilled-faculty-and-industry-exposure.png" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[28px] p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-heading font-black text-[#133020] text-sm sm:text-base leading-tight mt-2">{feature.title}</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Training Program Helps You */}
        <section id="programs" className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">
              Our <span className="text-[#0B2C1C]">Training Program</span> Helps You
            </h3>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Understand the Milling Process", desc: "Build a clear understanding of grain, flour, and the complete milling workflow—from cleaning and conditioning to grinding and packing.", icon: "/images/training-page/icons/training-program-helps-you/understand-the-milling-process.png" },
              { title: "Make Better Technical Decisions", desc: "Develop the confidence to evaluate equipment, understand process challenges, solve problems, and improve milling operations.", icon: "/images/training-page/icons/training-program-helps-you/make-better-technical-decisions.png" },
              { title: "Communicate with Suppliers & Customers", desc: "Learn the technical language and industry context required for clearer discussions with machinery suppliers, plant teams, and customers.", icon: "/images/training-page/icons/training-program-helps-you/communicate-with-suppliers-and-customers.png" },
              { title: "Apply Learning at Work", desc: "Translate training into better job performance, stronger process awareness, and practical improvement opportunities.", icon: "/images/training-page/icons/training-program-helps-you/apply-learning-at-work.png" }
            ].map((program, idx) => (
              <div key={idx} className="bg-white border border-[#E1EAE5] rounded-[16px] overflow-hidden flex flex-col xl:flex-row shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 gap-4">
                <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src={program.icon} alt={program.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-black text-[#133020] text-sm sm:text-[15px] leading-snug">{program.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-relaxed">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Experience Section */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 pb-24">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">
              Training Experience
            </h3>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Classroom Learning", desc: "Understand concepts, operating principles, process flow, quality parameters, and industry best practices through expert-led sessions.", image: "/images/training-page/training-experience/classroom-learning.png", icon: "/images/training-page/icons/training-experience/classroom-learning.png" },
              { title: "Live Plant Demonstrations", desc: "See machinery in action and understand real production processes, controls, material flow, and plant operation.", image: "/images/training-page/training-experience/live-plant-demo.png", icon: "/images/training-page/icons/training-experience/live-plant-demonstrations.png" },
              { title: "Career-Ready Skill Building", desc: "Build practical confidence, technical capability, and work-ready skills for roles across flour milling and grain processing.", image: "/images/training-page/training-experience/career-ready-skill-building-(1).png", icon: "/images/training-page/icons/training-experience/career-ready-skill-building.png" }
            ].map((exp, idx) => (
              <div key={idx} className="bg-[#0B2C1C] rounded-[28px] overflow-hidden flex flex-col shadow-lg border border-[#0B2C1C]">
                <div className="h-48 sm:h-56 w-full relative">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:p-8 flex items-start gap-4 h-full">
                  <div className="w-10 h-10 shrink-0 mt-1">
                    <img src={exp.icon} alt={exp.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-heading font-bold text-white text-[15px] sm:text-base leading-tight">{exp.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16">
          <div className="bg-[#0B2C1C] rounded-[24px] p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="flex items-center gap-6 sm:gap-8 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-[#D3994B] rounded-full flex items-center justify-center text-[#D3994B]">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">Ready to Build Your Milling Expertise?</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Join CHARGE training programs to gain practical knowledge, plant exposure, and the confidence to build a stronger future in flour milling.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#D3994B] text-[#0B2C1C] hover:bg-[#c48d45] px-8 py-4 rounded-xl text-xs font-black tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-nowrap whitespace-nowrap shrink-0 uppercase"
            >
              Enquire About Training <ChevronRight className="w-4 h-4" />
            </Link>

          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
