"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, X, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function TrainingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroProofPoints = [
    {
      title: "Hands-on plant learning",
      desc: "Direct machine operation, live milling sessions, and hands-on workshop"
    },
    {
      title: "For professionals and freshers",
      desc: "Customized curriculum modules designed for all skill level trainees"
    },
    {
      title: "Industry-led expertise",
      desc: "Curriculum shaped and delivered by milling experts and leaders"
    }
  ];

  const whyChargeFeatures = [
    {
      title: "First-Mover in Chakki Milling Education",
      desc: "One of India's earliest focused training initiatives dedicated to practical chakki and stone-milling knowledge.",
      icon: "/training/why-charge/first_mover_in_chakki_milling.png"
    },
    {
      title: "60+ Years of Industry Backing",
      desc: "Programs supported by decades of experience in flour-mill engineering, emery-stone manufacturing, and plant operations.",
      icon: "/training/why-charge/60-years.png"
    },
    {
      title: "World-Class Machinery Access",
      desc: "Learn around real equipment, live systems, modern plant infrastructure, and industrial milling processes.",
      icon: "/training/why-charge/world_class_machinery.png"
    },
    {
      title: "Research-Led Learning",
      desc: "Training shaped by continuous research, product development, process trials, and practical plant insights.",
      icon: "/training/why-charge/research_led_learning.png"
    },
    {
      title: "Integrity in Assessment",
      desc: "Structured learning with emphasis on safety, discipline, technical understanding, and practical competence.",
      icon: "/training/why-charge/integrity_in_assessment.png"
    },
    {
      title: "Skilled Faculty & Industry Exposure",
      desc: "Learn from experienced professionals with direct knowledge of machinery, production, quality, and plant operations.",
      icon: "/training/why-charge/skilled_faculty.png"
    }
  ];

  const trainingPrograms = [
    {
      title: "Understand the Milling Process",
      desc: "Build a clear understanding of grain, flour, and the complete milling workflow—from cleaning and conditioning to grinding and packing.",
      icon: "/training/training-program-helps-you/understand-milling-process.png"
    },
    {
      title: "Make Better Technical Decisions",
      desc: "Develop the confidence to evaluate equipment, understand process challenges, solve problems, and improve milling operations.",
      icon: "/training/training-program-helps-you/make-better-decisions.png"
    },
    {
      title: "Communicate with Suppliers & Customers",
      desc: "Learn the technical language and industry context required for clearer discussions with machinery suppliers, plant teams, and customers.",
      icon: "/training/training-program-helps-you/communicate-with-suppliers.png"
    },
    {
      title: "Apply Learning at Work",
      desc: "Translate training into better job performance, stronger process awareness, and practical improvement opportunities.",
      icon: "/training/training-program-helps-you/apply-learning-at-work.png"
    }
  ];

  const trainingExperiences = [
    {
      title: "Classroom Learning",
      desc: "Understand concepts, operating principles, process flow, quality parameters, and industry best practices through expert-led sessions.",
      image: "/images/training-page/training-experience/classroom-learning.png",
      icon: "/training/training-experience/classroom_training.png"
    },
    {
      title: "Live Plant Demonstrations",
      desc: "See machinery in action and understand real production processes, controls, material flow, and plant operation.",
      image: "/images/training-page/training-experience/live-plant-demo.png",
      icon: "/training/training-experience/live_plant_demo.png"
    },
    {
      title: "Career-Ready Skill Building",
      desc: "Build practical confidence, technical capability, and work-ready skills for roles across flour milling and grain processing.",
      image: "/images/training-page/training-experience/career-ready-skill-building-(1).png",
      icon: "/training/training-experience/career-ready_skill_building.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header onRequestCallback={() => setIsModalOpen(true)} />

        {/* Hero Section */}
        <section className="w-full relative z-10 bg-[#0B1510] text-white aspect-[1080/1920] md:aspect-[1920/820] flex flex-col justify-center">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src="/training/training_desktop_cropped.png" 
                alt="Flour Milling Training" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/90 via-[#0B1510]/55 to-transparent z-10 w-full" />
            </div>

            {/* Mobile Background Image (1080x1920) */}
            <div className="block md:hidden absolute inset-0">
              <Image 
                src="/training/training_mobile.png" 
                alt="Flour Milling Training" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/90 via-[#0B1510]/55 to-transparent z-10 w-full" />
            </div>
          </div>

          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20 flex-1 flex flex-col justify-center">
            <div className="max-w-2xl space-y-6 pt-12 md:pt-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                <GraduationCap className="h-3.5 w-3.5 text-amber-400" />
                <span>Training</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
                Build Skills for <br className="hidden sm:inline" />
                <span className="text-[#D3994B]">Modern Flour Milling</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium max-w-xl">
                Industry-focused training for professionals, freshers, and mill owners. CHARGE offers hands-on practical exposure, technical knowledge, and real-world milling expertise.
              </p>

              <div className="pt-2">
                <Link
                  href="#programs"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D99B26] hover:bg-[#c4891e] text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(217,155,38,0.7)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Training Programs</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Desktop Proof Points White Container - Full Width Overlapping Hero Bottom */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full px-6 sm:px-12 lg:px-16 xl:px-24 z-30 translate-y-1/2">
              <div className="w-full bg-white rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 border border-slate-100/90">
                <div className="grid grid-cols-3 divide-x divide-slate-200">
                  {heroProofPoints.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 sm:p-5 hover:bg-[#E8F5E9]/70 rounded-xl transition-colors duration-200 cursor-default text-left space-y-1.5"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1510] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Mobile Proof Points - In Document Flow */}
        <div className="block md:hidden relative z-30 px-5 -mt-8 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-100/90">
            <div className="grid grid-cols-1 divide-y divide-slate-200">
              {heroProofPoints.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-[#E8F5E9]/70 rounded-xl transition-colors duration-200 text-left space-y-1">
                  <h3 className="text-base font-bold text-[#0B1510] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learn with CHARGE Section */}
        <section className="w-full pt-12 sm:pt-16 md:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
                  Learn with <span className="text-[#0B2C1C]">CHARGE</span>
                </h2>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-px bg-[#D3994B]" />
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
                  <div className="w-8 h-px bg-[#D3994B]" />
                </div>
              </div>
              
              <div className="text-slate-600 font-medium space-y-4 text-base sm:text-lg leading-relaxed">
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
              <div className="rounded-[28px] overflow-hidden shadow-lg border border-slate-100 h-72 sm:h-84 w-full relative">
                <Image 
                  src="/images/training-page/learn-with-charge/training.png" 
                  alt="Learn with Charge" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Key Facts with Enlarged Clean Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                {[
                  { icon: "/training/learn-with-charge/csr_initiative.png", text: "CSR Initiative of RS Choyal Group" },
                  { icon: "/training/learn-with-charge/legacy.png", text: "Legacy of CSMT" },
                  { icon: "/training/learn-with-charge/training_professionals.png", text: "Training Professionals, Freshers & Youth" }
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-[#F0F7F3] rounded-xl flex items-center justify-center p-2.5 border border-[#133020]/10">
                      <Image 
                        src={fact.icon} 
                        alt={fact.text} 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{fact.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Why CHARGE Grid */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/60">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
              Why <span className="text-[#0B2C1C]">CHARGE</span>
            </h2>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Pioneering excellence in practical milling training, advanced plant education, and industry skills.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChargeFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100/90 rounded-[28px] p-8 flex flex-col items-center text-center gap-4 shadow-xs hover:shadow-md hover:border-[#133020]/20 transition-all group"
              >
                <div className="w-20 h-20 shrink-0 bg-[#F0F7F3] rounded-2xl flex items-center justify-center p-3.5 border border-[#133020]/10 group-hover:scale-105 group-hover:bg-[#E8F5E9] transition-all duration-300">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <h4 className="font-heading font-black text-[#133020] text-base sm:text-lg leading-tight mt-2">
                  {feature.title}
                </h4>
                <div className="w-8 h-[2px] bg-[#D3994B]" />
                <p className="text-sm sm:text-[15px] text-slate-600 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Training Program Helps You */}
        <section id="programs" className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
              Our <span className="text-[#0B2C1C]">Training Program</span> Helps You
            </h2>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Equipping trainees with direct practical competence, problem-solving, and milling mastery.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-[#E1EAE5] rounded-[24px] p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0B2C1C]/30 transition-all duration-300 flex flex-col items-start justify-between"
              >
                <div>
                  {/* Icon with hover effect: turns white and bg shape turns green */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#F0F7F3] group-hover:bg-[#0B2C1C] flex items-center justify-center p-3.5 sm:p-4 transition-colors duration-300 mb-5 border border-[#133020]/10">
                    <Image 
                      src={program.icon} 
                      alt={program.title} 
                      width={56} 
                      height={56} 
                      className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
                    />
                  </div>
                  <h4 className="font-heading font-black text-[#133020] text-base sm:text-lg leading-snug mb-2">
                    {program.title}
                  </h4>
                  <div className="w-8 h-[2px] bg-[#D3994B] mb-3" />
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {program.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Experience Section */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
              Training Experience
            </h2>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Immersive, practical, and hands-on industrial learning environments.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {trainingExperiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[24px] overflow-hidden shadow-xs hover:shadow-md border border-slate-200/80 transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 sm:h-64 lg:h-72 w-full relative overflow-hidden">
                  <Image 
                    src={exp.image} 
                    alt={exp.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 sm:p-7 lg:p-8 flex items-start gap-4 bg-white flex-1">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-[#F0F7F3] rounded-xl flex items-center justify-center p-2.5 border border-[#133020]/10 group-hover:bg-[#E8F5E9] transition-colors">
                    <Image 
                      src={exp.icon} 
                      alt={exp.title} 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-heading font-black text-[#133020] text-base sm:text-lg leading-tight">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="w-full bg-[#0B2C1C] rounded-[28px] p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="flex items-center gap-6 sm:gap-8 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-[#D3994B] rounded-full flex items-center justify-center text-[#D3994B]">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Ready to Build Your Milling Expertise?
                </h3>
                <p className="text-base text-slate-200 leading-relaxed font-normal">
                  Join CHARGE training programs to gain practical knowledge, plant exposure, and the confidence to build a stronger future in flour milling.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D99B26] hover:bg-[#c4891e] text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(217,155,38,0.7)] hover:scale-[1.02] transition-all duration-300 cursor-pointer text-nowrap whitespace-nowrap shrink-0"
            >
              <span>Enquire About Training</span>
              <ChevronRight className="h-4 w-4" />
            </Link>

          </div>
        </section>

      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2722]/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md animate-scale-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer border border-slate-200/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm className="shadow-black/75 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
