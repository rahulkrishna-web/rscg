"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, ChevronRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workflowSteps = [
  {
    title: "Plan",
    desc: "Reports, approvals, layouts, feasibility, and business planning.",
    iconPath: "/images/services/grain360/how 360 helps/plan.png"
  },
  {
    title: "Build",
    desc: "Plant setup, engineering, automation, and execution.",
    iconPath: "/images/services/grain360/how 360 helps/build.png"
  },
  {
    title: "Launch",
    desc: "Training, operational support, and growth guidance.",
    iconPath: "/images/services/grain360/how 360 helps/launch.png"
  }
];

const coreServices = [
  {
    title: "Project Development",
    desc: "Concept development, plant planning, layout support, feasibility, and project execution guidance.",
    iconPath: "/images/services/grain360/our core services/project-deveopment.png"
  },
  {
    title: "Licensing & Certifications",
    desc: "Support for registrations, approvals, certifications, and statutory compliance.",
    iconPath: "/images/services/grain360/our core services/licensing.png"
  },
  {
    title: "Design & Engineering",
    desc: "Plant layouts, technical detailing, system planning, and engineering coordination.",
    iconPath: "/images/services/grain360/our core services/design-and-engineering.png"
  },
  {
    title: "Operations & Consultancy",
    desc: "Support for process optimization, quality improvement, and day-to-day plant operations.",
    iconPath: "/images/services/grain360/our core services/operations-and-consulatncy.png"
  },
  {
    title: "Staff & Operator Training",
    desc: "Hands-on training for teams operating, managing, and maintaining the plant.",
    iconPath: "/images/services/grain360/our core services/staff-and-operator-training.png"
  },
  {
    title: "Technology Upgradation",
    desc: "Modernization of existing plants with improved systems, automation, and digital capabilities.",
    iconPath: "/images/services/grain360/our core services/technology-upgrade.png"
  }
];

const additionalServices = [
  { title: "Government Registrations", iconPath: "/images/services/grain360/additional services/govt-register.png" },
  { title: "Project & Bankable Reports", iconPath: "/images/services/grain360/additional services/project-report.png" },
  { title: "Subsidies & Policies Guidance", iconPath: "/images/services/grain360/additional services/subsidies.png" },
  { title: "Process Automation", iconPath: "/images/services/grain360/additional services/process-automation.png" },
];

export default function Grain360Page() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center bg-[#133020]">
          <div className="absolute inset-0 bg-[url('/images/services/grain360/grain_hero.jpg')] bg-cover bg-center opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#133020] from-0% via-[#133020]/70 via-[30%] to-transparent lg:to-[60%] z-10 w-full" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase">
                SERVICES & SOLUTIONS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-heading font-black text-white tracking-tight leading-none drop-shadow-md">
                Grain360
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-medium pt-2">
                End-to-end services to help you plan, launch, and grow your grain or flour processing business under one roof.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          
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
              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed pl-[72px]">
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
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
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
                  <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm border border-slate-200/50 flex-1 min-w-[280px] max-w-[340px]">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm overflow-hidden p-1.5">
                      <img src={step.iconPath} alt={step.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-lg text-slate-800 mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coreServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 flex gap-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-md hover:border-[#D3994B]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm overflow-hidden p-1">
                    <img src={service.iconPath} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-[15px] text-slate-800 mb-2 leading-tight">{service.title}</h4>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{service.desc}</p>
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
                <div key={idx} className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-full shadow-sm border border-slate-200/60 hover:bg-slate-50 transition-colors">
                  <img src={service.iconPath} alt={service.title} className="w-5 h-5 object-contain" />
                  <span className="text-[13px] font-bold text-slate-700">{service.title}</span>
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
                <p className="text-slate-300 text-sm font-medium">
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
