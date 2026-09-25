"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, ChevronRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workflowSteps = [
  {
    title: "Plan",
    desc: "Reports, approvals, layouts, feasibility, and business planning.",
    iconPath: "/images/services/grain360/new_icons/how 360 helps/plan.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Build",
    desc: "Plant setup, engineering, automation, and execution.",
    iconPath: "/images/services/grain360/new_icons/how 360 helps/build.png",
    iconBg: "bg-[#E8F1F5]"
  },
  {
    title: "Launch",
    desc: "Training, operational support, and growth guidance.",
    iconPath: "/images/services/grain360/new_icons/how 360 helps/launch.png",
    iconBg: "bg-[#FEF3E7]"
  }
];

const coreServices = [
  {
    title: "Project Development",
    desc: "Concept development, plant planning, layout support, feasibility, and project execution guidance.",
    iconPath: "/images/services/grain360/new_icons/our core services/project_deveopment.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Design & Engineering",
    desc: "Plant layouts, technical detailing, system planning, and engineering coordination.",
    iconPath: "/images/services/grain360/new_icons/our core services/design_and_engineering-removebg-previe.png",
    iconBg: "bg-[#E8F1F5]"
  },
  {
    title: "Licensing & Certifications",
    desc: "Support for registrations, approvals, certifications, and statutory compliance.",
    iconPath: "/images/services/grain360/new_icons/our core services/licensing.png",
    iconBg: "bg-[#FEF5E7]"
  },
  {
    title: "Operations & Consultancy",
    desc: "Support for process optimization, quality improvement, and day-to-day plant operations.",
    iconPath: "/images/services/grain360/new_icons/our core services/operation.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Staff & Operator Training",
    desc: "Hands-on training for teams operating, managing, and maintaining the plant.",
    iconPath: "/images/services/grain360/new_icons/our core services/staff_and_operator_training.png",
    iconBg: "bg-[#FEF5E7]"
  },
  {
    title: "Technology Upgradation",
    desc: "Modernization of existing plants with improved systems, automation, and digital capabilities.",
    iconPath: "/images/services/grain360/new_icons/our core services/technology_upgrade.png",
    iconBg: "bg-[#E8F1F5]"
  }
];

const additionalServices = [
  { title: "Government Registrations", iconPath: "/images/services/grain360/new_icons/additional services/governmentregister.png" },
  { title: "Project & Bankable Reports", iconPath: "/images/services/grain360/new_icons/additional services/project report.png" },
  { title: "Subsidies & Policies Guidance", iconPath: "/images/services/grain360/new_icons/additional services/subsidaries.png" },
  { title: "Process Automation", iconPath: "/images/services/grain360/new_icons/additional services/process automation.png" },
];

export default function Grain360Page() {
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
                src="/hero/grain360/grain360_desktop_cropped.png" 
                alt="Grain360 Services & Solutions" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Dark-charcoal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
            </div>

            {/* Mobile Background Image (1080x1920 -> 9:16) */}
            <div className="block md:hidden absolute inset-0">
              <Image 
                src="/hero/grain360/grain360_mobile.png" 
                alt="Grain360 Services & Solutions" 
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
            <div className="w-full max-w-2xl">
              <span className="inline-block py-1.5 px-3 rounded-lg bg-[#f7b032] text-[#0B1510] font-black text-xs tracking-widest uppercase mb-4 sm:mb-6 shadow-sm border border-[#f7b032]">
                Services &amp; Solutions
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-4 sm:mb-6 tracking-tight">
                Grain360
              </h1>
              <p className="text-base sm:text-xl text-slate-200 mb-6 sm:mb-10 leading-relaxed font-light max-w-xl">
                End-to-end services to help you plan, launch, and grow your grain or flour processing business under one roof.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('grain360-services')?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#f7b032] hover:bg-[#ffc254] text-[#0B1510] font-black uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(247,176,50,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="grain360-services" className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* Intro Section: One Partner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1A3A29]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-[#1A3A29]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#1A3A29] leading-tight">
                  One partner for setting up your business
                </h2>
              </div>
              <div className="text-slate-600 space-y-4 text-base sm:text-lg leading-relaxed pl-[72px] font-normal">
                <p>
                  Starting a food or flour business involves many moving parts—from project planning and plant setup to licensing, training, and operations support. <strong>Grain360 brings all of these services together under one roof.</strong>
                </p>
                <p>
                  Instead of coordinating multiple vendors, you get a single partner to guide your journey from idea to commissioning and beyond.
                </p>
              </div>
            </div>

            {/* Why Grain360 Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/60">
              <h3 className="text-xl font-heading font-black text-slate-800 mb-6">
                Why Grain360?
              </h3>
              <ul className="space-y-4">
                {[
                  "Single point of contact",
                  "Project & bankable reports",
                  "Licensing & registrations support",
                  "Plant setup & commissioning",
                  "Post-launch guidance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2E6B4A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workflow Section: How Grain360 helps */}
          <div className="mb-24">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-center text-[#1A3A29] mb-12">
              How Grain360 helps
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="flex items-center w-full md:w-auto">
                  
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm border border-slate-200/50 flex-1 min-w-[280px] max-w-[340px]">
                    <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center shrink-0 p-3 shadow-xs`}>
                      <img src={step.iconPath} alt={step.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-lg text-slate-800 mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Arrow (hidden on mobile, shown between steps on md+) */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-12 shrink-0">
                      <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}

                  {/* Down Arrow for mobile */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="flex md:hidden items-center justify-center w-full py-4 shrink-0">
                      <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Services Section */}
          <div className="mb-24">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-center text-[#1A3A29] mb-12">
              Our Core Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {coreServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 sm:p-7 flex items-start gap-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#D3994B]/30 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center shrink-0 p-3 shadow-xs`}>
                    <img src={service.iconPath} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-lg text-slate-800 mb-1.5 leading-tight">{service.title}</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Support Areas */}
          <div className="mb-20">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-center text-[#1A3A29] mb-10">
              Additional support areas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalServices.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white pl-4 pr-7 py-3 rounded-full shadow-sm border border-slate-200/60 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#EAF3EA] flex items-center justify-center p-2 shrink-0 shadow-xs">
                    <img src={service.iconPath} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-700">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="w-full bg-[#0D301F] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-[url('/images/services/grain360/grain_hero.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            
            <div className="relative z-10 flex items-center gap-6 max-w-2xl">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                  Planning to start or upgrade your plant?
                </h3>
                <p className="text-slate-200 text-base font-normal">
                  Talk to our team for end-to-end business, technical, and operational support.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link 
                href="/contact"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-white text-[#133020] hover:bg-slate-100 px-8 py-4 rounded-xl text-sm font-black tracking-wide transition-transform hover:-translate-y-0.5 shadow-lg"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
