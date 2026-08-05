"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Settings, CheckCircle2, Factory, MonitorSmartphone, TrendingUp, DollarSign, Database, Settings2, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AutomationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-[#0a3118] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/automation/automation_hero.png"
            alt="Automation Control System"
            fill
            priority
            className="object-cover object-right lg:object-center"
          />
        </div>
        {/* Gradient Overlay to fade the left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3118] via-[#0a3118]/80 to-transparent z-10" />

        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Automation</span>
            </div>

            <div className="inline-block bg-[#f97316] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
              Automation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
              Advanced control systems for modern mill operations
            </h1>
            
            <p className="text-lg text-slate-200 font-medium max-w-xl">
              Intelligent automation that ensures consistent quality, real-time monitoring, and efficient mill performance.
            </p>
          </div>
        </div>
      </section>

      {/* Future-Proof Flour Milling */}
      <section className="w-full py-20 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Content Left */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118]">
              Future-Proof Flour Milling
            </h2>
            <div className="w-16 h-1 bg-[#f97316] mb-6"></div>
            
            <div className="space-y-5 text-slate-600 font-medium leading-relaxed">
              <p>
                Automation is the key to consistent milling quality and reduced dependence on manual calibration. RS Choyal's Wonder Miller and digital control systems monitor grain throughput, temperature, and stone gap settings in real time.
              </p>
              <p>
                By using advanced electronic sensors, precise load balances, and real-time gap adjustments, our automation systems dynamically compensate for stone wear, grain moisture shifts, and friction variables. This guarantees high flour texture uniformity and prevents common operational choke points.
              </p>
              <p>
                Our plug-and-play modules integrate with existing setups or come pre-packaged with our turnkey plants, providing user-friendly HMI touchscreen controls, automated alarms, and full Android/iOS remote monitoring for convenient global oversight.
              </p>
            </div>
          </div>

          {/* Quick Links Right */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-heading font-extrabold text-[#0a3118] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "About us", href: "/about" },
                  { label: "Products", href: "/products" },
                  { label: "Turnkey Solutions", href: "/turnkey-projects" },
                  { label: "Power Saving", href: "/services" },
                  { label: "Flour Mill", href: "/flour-mills" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="flex items-center gap-3 text-slate-700 hover:text-[#0a3118] font-bold transition-colors group">
                      <div className="bg-[#0a3118] text-white rounded-full p-1 group-hover:bg-[#f97316] transition-colors">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Automation */}
      <section className="w-full py-20 bg-slate-50 border-y border-slate-200/60 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118] mb-4">
            Benefits of Automation
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Transforming traditional grinding with intelligent software systems.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            { 
              title: "Increased Yield", 
              desc: "Auto-pressure adjustments ensure steady grinding quality irrespective of grain variety, hardness, or raw input density.",
              img: "/images/automation/increased_yield.png",
              icon: TrendingUp
            },
            { 
              title: "Reliable Engineering", 
              desc: "Robust PLC panels, industrial-grade sensors, and automated safety interlocks ensure continuous, trouble-free plant operation.",
              img: "/images/automation/reliable_engineering.png",
              icon: ShieldCheck
            },
            { 
              title: "Reduced Operation Cost", 
              desc: "Minimizes manual oversight requirements and stone dressing downtime by automatically compensating for stone surface wear.",
              img: "/images/automation/reduce_cost.png",
              icon: DollarSign
            },
            { 
              title: "Data-Driven Decisions", 
              desc: "Live dashboards, performance logs, and production insights help teams make faster and smarter operational decisions.",
              img: "/images/automation/datadriven_decision.png",
              icon: Database
            },
            { 
              title: "Improved Performance", 
              desc: "Continuous monitoring and intelligent controls enhance stability, flour consistency, and overall plant output.",
              img: "/images/automation/improve_performance.png",
              icon: Settings2
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-40 w-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={benefit.img} alt={benefit.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#0a3118] text-white rounded-full flex items-center justify-center border-4 border-white z-10 shadow-sm">
                  <benefit.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="pt-8 px-6 pb-8 flex-1 flex flex-col">
                <h4 className="text-lg font-heading font-extrabold text-[#0a3118] mb-3">{benefit.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white">
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118] mb-4">
            Services Offered
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Expert systems engineering to retrofit or scale your operations.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Plant",
              desc: "Control your entire mill from a single, centralized PLC dashboard featuring automation, data logging, and performance tracking.",
              img: "/images/automation/Digital_Plant.png",
              icon: MonitorSmartphone
            },
            {
              title: "Choyal Remote Support",
              desc: "Instant cloud troubleshooting, remote diagnostics, alerts, and online support by our automation experts anywhere, anytime.",
              img: "/images/automation/Choyal_Remote_Support.png",
              icon: Zap
            },
            {
              title: "MIS Development",
              desc: "Custom MIS dashboards and reports for production, efficiency, maintenance, and energy usage to support better decision-making.",
              img: "/images/automation/MIS_Development.png",
              icon: Database
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col xl:flex-row group hover:shadow-md transition-shadow h-full">
              <div className="relative h-56 xl:h-auto xl:w-[45%] flex-shrink-0 overflow-hidden">
                <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 xl:p-8 xl:w-[55%] flex flex-col justify-center">
                <div className="w-12 h-12 bg-[#0a3118]/10 text-[#0a3118] rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-heading font-extrabold text-[#0a3118] mb-3">{service.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full bg-[#0a3118] text-white py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 relative">
              <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center relative">
                 <Settings className="w-8 h-8 text-[#0a3118] fill-white animate-spin-slow" />
                 <CheckCircle2 className="w-4 h-4 text-white absolute bg-[#0a3118] rounded-full bottom-2 right-2" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black mb-2">Automate. Monitor. Optimize.</h2>
              <p className="text-white/80 font-medium text-sm sm:text-base max-w-xl">
                Upgrade your mill with intelligent automation for higher efficiency and consistent quality.
              </p>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap"
          >
            Get a Digital Plant <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
