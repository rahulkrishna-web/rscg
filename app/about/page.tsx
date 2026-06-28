"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Info,
  Users,
  Eye,
  Heart,
  Milestone,
  Landmark,
  HelpCircle,
  Network,
  Building,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Cpu,
  Workflow,
  Settings,
  Filter,
  Activity,
  Layers,
  Database,
  BookOpen,
  X,
  Zap,
  Globe,
  MapPin,
  ChevronDown,
  UserCheck,
  Clock,
  Compass
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

const globalLogos = [
  { src: "/images/network/brand_1.jpg", name: "Global Partner 1" },
  { src: "/images/network/brand_2.jpg", name: "Global Partner 2" },
  { src: "/images/network/brand_3.jpg", name: "Global Partner 3" },
  { src: "/images/network/brand_4.jpg", name: "Global Partner 4" },
  { src: "/images/network/brand_5.jpg", name: "Global Partner 5" },
  { src: "/images/network/brand_6.jpg", name: "Global Partner 6" },
  { src: "/images/network/brand_7.jpg", name: "Global Partner 7" },
  { src: "/images/network/brand_8.jpg", name: "Global Partner 8" },
  { src: "/images/network/brand_9.jpg", name: "Global Partner 9" },
  { src: "/images/network/brand_10.jpg", name: "Global Partner 10" },
  { src: "/images/network/brand_11.jpg", name: "Global Partner 11" },
  { src: "/images/network/brand_12.jpg", name: "Global Partner 12" }
];

const regionalLogos = [
  { src: "/images/network/brand_13.jpg", name: "Regional Partner 1" },
  { src: "/images/network/brand_14.jpg", name: "Regional Partner 2" },
  { src: "/images/network/brand_15.jpg", name: "Regional Partner 3" },
  { src: "/images/network/brand_16.jpg", name: "Regional Partner 4" },
  { src: "/images/network/brand_17.jpg", name: "Regional Partner 5" },
  { src: "/images/network/brand_18.jpg", name: "Regional Partner 6" },
  { src: "/images/network/brand_19.jpg", name: "Regional Partner 7" },
  { src: "/images/network/brand_20.jpg", name: "Regional Partner 8" },
  { src: "/images/network/brand_21.jpg", name: "Regional Partner 9" },
  { src: "/images/network/brand_22.jpg", name: "Regional Partner 10" },
  { src: "/images/network/brand_23.jpg", name: "Regional Partner 11" },
  { src: "/images/network/brand_24.jpg", name: "Regional Partner 12" }
];

const benchmarkGoals = [
  {
    title: "High-Yield Extraction",
    desc: "Highest possible yield and premium quality extraction from every batch.",
    icon: TrendingUp
  },
  {
    title: "Eco Power Savings",
    desc: "Maximum energy savings with minimized power consumption technology.",
    icon: Zap
  },
  {
    title: "Minimized Foundation",
    desc: "Reduced installation time and overall foundation engineering costs.",
    icon: Layers
  },
  {
    title: "Wear Protection",
    desc: "Minimum wear and tear on grinding surfaces for prolonged operational life.",
    icon: ShieldCheck
  },
  {
    title: "Cold-Milling Tech",
    desc: "Advanced cold-milling technology to retain grain nutrition and flour flavor.",
    icon: Cpu
  },
  {
    title: "Intuitive Control HMI",
    desc: "User-friendly touch-panel interface layouts for seamless control.",
    icon: Settings
  },
  {
    title: "Safety Interlocks",
    desc: "Robust safety interlocks and active hazard warning telemetry sensors.",
    icon: Workflow
  },
  {
    title: "Dust & Hygiene Control",
    desc: "Effective dust mitigation and ultra-sanitary plant hygienic operations.",
    icon: Filter
  },
  {
    title: "Recipe Presets",
    desc: "Flexible recipe presets optimized for varying grain configurations.",
    icon: Database
  },
  {
    title: "Remote Telemetry",
    desc: "Proactive remote telemetry and cloud diagnostics for expert troubleshooting.",
    icon: Globe
  },
  {
    title: "Food-Grade Standard",
    desc: "Zero compromise on certified food-grade material specifications.",
    icon: Heart
  }
];

const timelineMilestones = [
  {
    year: "1960",
    title: "Foundation of Choyal Group",
    desc: "B.M. Choyal along with R.D. Sharma lays the foundation of our legacy by starting the company with a vision to revolutionize the grain milling industry in India."
  },
  {
    year: "1965",
    title: "Our Journey Begins",
    desc: "The company is formally incorporated as “Shri Vishvakarma Industries”, marking the beginning of a new chapter in industrial excellence and innovation."
  },
  {
    year: "1970",
    title: "International Outreach",
    desc: "We became the first company from India in the grain milling sector to export emery stone globally. Our commitment to quality and innovation was recognized with the 'Certificate for Excellence in Export', which we proudly received year after year."
  },
  {
    year: "1978",
    title: "Inauguration of First Factory Unit",
    desc: "We set up our first manufacturing unit at Saradhana in Ajmer under our Pvt. Ltd. company, later known as SVIPL, marking a key step in our industrial journey."
  },
  {
    year: "2000",
    title: "Fully Automated Emery Stone Plant",
    desc: "We launched our automatic modeling workshop, kickstarting a new era of innovation in emery stone manufacturing. This milestone enhanced precision, consistency, and efficiency in our production process."
  },
  {
    year: "2010",
    title: "World’s First Patented Digital Flour Mill",
    desc: "After years of dedicated R&D, we developed the world’s first fully automatic digital stone mill, redefining precision and revolutionizing traditional stone milling."
  },
  {
    year: "2011",
    title: "Turnkey Solutions for Every Need",
    desc: "We launched our complete turnkey solutions, offering end-to-end services in milling. To date, we’ve successfully delivered 250+ turnkey projects worldwide."
  },
  {
    year: "2013",
    title: "Patented Emery Stone Dressing Machine",
    desc: "We introduced a patented emery stone dressing machine, combining innovation and efficiency to transform stone maintenance."
  },
  {
    year: "2018",
    title: "Venturing into Groceries",
    desc: "We ventured into the grocery sector, embracing new opportunities and learning valuable lessons that continue to shape our growth and resilience."
  },
  {
    year: "2021",
    title: "World’s First Patented Digital Fresh Flour Grinding Machine",
    desc: "We introduced the world’s first patented digital fresh flour grinding machine, powered by smart technology to make fresh flour easily accessible worldwide."
  },
  {
    year: "2025",
    title: "A New Chapter Begins",
    desc: "The Choyal legacy evolves into two independent entities, allowing each to focus on specialized innovation and targeted growth. Introducing Choyal Grinding Solutions Pvt. Ltd., a new company under the R.S. Choyal Group, dedicated to advancing cutting-edge grinding technologies."
  }
];

export default function AboutPage() {
  const { setIsDrawerOpen } = useQuote();
  const [activeTab, setActiveTab] = useState("about-us");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sections = [
    { id: "about-us", label: "About Us", icon: Info },
    { id: "philosophy", label: "Our Philosophy", icon: Heart },
    { id: "why-rsc", label: "Why RSC Group", icon: HelpCircle },
    { id: "innovations", label: "Our Innovations", icon: Lightbulb },
    { id: "leadership", label: "Leadership", icon: Users },
    { id: "research-development", label: "R&D Centre", icon: Milestone },
    { id: "network", label: "Our Network", icon: Network },
    { id: "mission-vision", label: "Mission & Vision", icon: Eye },
    { id: "social-responsibility", label: "Social Responsibility", icon: Landmark },
    { id: "infrastructure", label: "Infrastructure", icon: Building },
  ];

  // Monitor scroll to set active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // accounting for sticky header & tabs dropdown
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveTab(id);
    }
  };

  // Handle initial hash routing with correct scroll offset on page mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        scrollToSection(hash);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close TOC dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const container = document.getElementById("toc-dropdown-container");
      if (container && !container.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans selection:bg-brand-primary selection:text-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[360px] sm:h-[450px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/about-unit-2.jpg')] bg-cover bg-center" />
        {/* Deep Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-transparent" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block bg-brand-tertiary text-slate-900 font-black text-xs sm:text-sm px-5 py-2.5 uppercase tracking-widest shadow-md">
              Heritage &amp; Innovation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Pioneering the Future of Smart Grinding
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              Since 1965, RS Choyal Group has combined traditional milling expertise with digital automation to power commercial flour mills across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Table of Contents Header */}
      <div className="sticky top-20 sm:top-24 z-30 w-full bg-white border-b border-slate-200 shadow-xs">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">On this page:</span>
            <span className="text-xs sm:text-sm font-extrabold text-brand-primary uppercase tracking-wider">
              {sections.find(s => s.id === activeTab)?.label || "About Us"}
            </span>
          </div>

          {/* Table of Contents Dropdown Button */}
          <div className="relative" id="toc-dropdown-container">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-50 hover:bg-brand-primary/5 hover:text-brand-primary border border-slate-200 transition-all duration-300 cursor-pointer shadow-2xs"
            >
              <Compass className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="hidden sm:inline">Jump to section</span>
              <span className="sm:hidden">Jump</span>
              <ChevronDown className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-white border border-slate-200/80 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sections</span>
                  <button onClick={() => setIsDropdownOpen(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="max-h-[350px] overflow-y-auto px-2 py-1 space-y-0.5">
                  {sections.map((sec) => {
                    const IconComponent = sec.icon;
                    const isActive = activeTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => {
                          scrollToSection(sec.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 text-left cursor-pointer ${
                          isActive
                            ? "bg-brand-primary text-white"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        }`}
                      >
                        <IconComponent className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                        <span>{sec.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full">

        {/* 1. ABOUT US */}
        <section id="about-us" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-white relative scroll-mt-48">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                  Corporate Profile
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                  Six Decades of Milling Excellence
                </h2>
              </div>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Established in 1965, RS Choyal Group (initially Shri Vishvakarma Emery Stones Industries) broke the European monopoly on abrasive products and flour mills. Over nearly 60 years, the group has transitioned into a global pioneer of heavy commercial grain handling, patented digital chakki controllers, and complete turnkey milling solutions.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                By pairing traditional stone-milling logic with modern PLC automation software and high-grade metallurgy, we support mill operators in achieving maximum yield, cold-grinding nutrition, and unmatched energy savings.
              </p>

              {/* Stat Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary">1965</span>
                  <span className="text-xs text-slate-500 font-bold mt-2 uppercase tracking-wide">Year Founded</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary">20+</span>
                  <span className="text-xs text-slate-500 font-bold mt-2 uppercase tracking-wide">Countries Exported</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between col-span-2 sm:col-span-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary">60+</span>
                  <span className="text-xs text-slate-500 font-bold mt-2 uppercase tracking-wide">Years Experience</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
                <Image
                  src="/images/about-unit-2.jpg"
                  alt="Choyal Headquarters and Factory floor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Chronological Timeline */}
          <div className="mt-20 pt-16 border-t border-slate-100">
            <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Chronological Journey
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                Our History & Milestones
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Key events and technological breakthroughs that shaped Choyal Group into a global leader.
              </p>
            </div>

            {/* Timeline Tree */}
            <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-slate-200 space-y-12">
              {timelineMilestones.map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                  {/* Circle Pin */}
                  <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-2.5 w-4 h-4 rounded-full bg-white border-4 border-brand-primary group-hover:scale-125 transition-all duration-300 shadow-sm z-10" />

                  {/* Date Panel */}
                  <div className="pl-6 md:pl-0 md:w-[calc(50%-2rem)] md:text-right flex items-center md:justify-end gap-3 order-1 md:group-odd:order-1 md:group-even:order-2">
                    <span className="text-2xl font-black text-brand-primary tracking-tight md:group-odd:text-right md:group-even:text-left w-full">{item.year}</span>
                  </div>

                  {/* Content Panel */}
                  <div className="pl-6 md:pl-0 md:w-[calc(50%-2rem)] order-2 md:group-odd:order-2 md:group-even:order-1 bg-slate-50 border border-slate-100 p-6 rounded-2xl group-hover:shadow-md transition-shadow duration-300">
                    <h4 className="font-extrabold text-slate-800 text-base sm:text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. OUR PHILOSOPHY */}
        <section id="philosophy" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-slate-50/50 border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Ethical Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                Corporate Philosophy &amp; Ethics
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our value system revolves around our conduct: what we say, what we do, the products we make, the services we provide, and the way we act and treat others.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShieldCheck className="h-6 w-6" />,
                  title: "Trust & Integrity",
                  desc: "We never forget how much clients rely on Choyal. Transparent dealings and absolute honesty form the bedrock of our business relationships."
                },
                {
                  icon: <Compass className="h-6 w-6" />,
                  title: "National Empowerment",
                  desc: "Promoting self-reliance and establishing the 'Made in India' quality mark as an international benchmark of industrial engineering excellence."
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: "Community & Fairness",
                  desc: "Committed to local community development, fair trade practices, and supporting standard-of-living upgrades where we operate."
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Client-Centric Growth",
                  desc: "Delivering consistent value, fair pricing models, fast turnaround times, and robust after-sales support to ensure customer success."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-slate-800 text-lg tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY RSC GROUP */}
        <section id="why-rsc" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-white border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-slate-200 shadow-md relative bg-slate-50">
                <Image
                  src="/images/mill_close_up.png"
                  alt="Precision Smart Milling machinery close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                  Proven Value
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                  Trust, Reliance &amp; Performance
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Over decades of global installations, commercial mill owners have trusted RSC Group for our engineering standards, reliable support, and cost-effective operations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Indispensable Trust",
                    desc: "Transparent business actions and secure warranties ensure complete peace of mind for heavy capital equipment setup."
                  },
                  {
                    title: "Exemplary Quality",
                    desc: "Rigorous ISO testing protocols and premium grade materials maximize the longevity of every mill system."
                  },
                  {
                    title: "Rigorous R&D",
                    desc: "Ongoing investments in automation and abrasive tech yield smart components tailored for regional food habits."
                  },
                  {
                    title: "Economical Engineering",
                    desc: "Optimized designs reduce electricity consumption and minimize foundation/civil engineering setup expenses."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 font-extrabold text-sm">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-base tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. OUR INNOVATIONS */}
        <section id="innovations" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-slate-50/50 border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Intellectual Property &amp; Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                Patented Innovations &amp; Smart Tech
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                RSC Group continuously files patents and develops proprietary products, prioritizing digital transparency, power efficiency, and cold-milling flour quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Wonder Mill",
                  badge: "Fully Automatic",
                  desc: "The world's first fully computerized horizontal flour mill with integrated touchscreen panel and automated yield optimization.",
                  image: "/images/innovations/wonder_mill.jpg"
                },
                {
                  name: "iQuadra Digital Mill",
                  badge: "Up to 40% Power Savings",
                  desc: "IoT-enabled smart stone mill featuring automated grain feeding, pressure adjusters, load cells, and remote telemetry logging.",
                  image: "/images/innovations/iquadra.jpg"
                },
                {
                  name: "Miller Lite Automation",
                  badge: "System-wide Control",
                  desc: "Custom PLC control panels that handle pre-cleaning, conditioning, milling, and bagging processes via a unified UI dashboard.",
                  image: "/images/innovations/miller_lite.jpg"
                },
                {
                  name: "Automatic Stone Dresser",
                  badge: "Patented Machine",
                  desc: "Replaces slow manual dressing methods with automated groove cutting, completing emery stone dressing in 3-4 minutes.",
                  image: "/images/innovations/stone_dresser.jpg"
                },
                {
                  name: "Floura Vending Chakki",
                  badge: "Retail Innovation",
                  desc: "Self-service fresh stone-ground flour on-demand vending system designed for modern supermarkets and retail channels.",
                  image: "/images/innovations/floura.jpg"
                },
                {
                  name: "Neo Matic Conveying",
                  badge: "High-loading Pneumatic",
                  desc: "Gentle low-speed compressed air conveyor preventing pipelines blockages and preventing heat-friction damage to the grain.",
                  image: "/images/innovations/neo_matic.jpg"
                },
                {
                  name: "Wonder Drop Flow Controller",
                  badge: "Moisture Control",
                  desc: "Plug-and-play grain volumetric system ensuring high moisture absorption precision prior to milling.",
                  image: "/images/innovations/wonder_drop.jpg"
                },
                {
                  name: "Atta Expert Mill",
                  badge: "Continuous Grinding",
                  desc: "Industrial heavy-duty horizontal grinding system equipped with conical feed screws and variable frequency drives.",
                  image: "/images/innovations/atta_expert.jpg"
                }
              ].map((innov, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                      <img 
                        src={innov.image} 
                        alt={innov.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <h4 className="font-extrabold text-slate-800 text-base sm:text-lg tracking-tight group-hover:text-brand-primary transition-colors leading-snug">
                          {innov.name}
                        </h4>
                        <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
                          {innov.badge}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {innov.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LEADERSHIP */}
        <section id="leadership" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-white border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Steering the Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                Our Directors &amp; Leadership
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Combining decades of heavy fabrication experience with global outreach and modern digital engineering practices.
              </p>
            </div>

            {/* Legacy Founders */}
            <div className="space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black uppercase text-brand-primary tracking-widest">
                  Legacy Founders
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Late Mr. B. M. Choyal */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:shadow-md transition-shadow">
                  <div className="w-full md:w-48 shrink-0 aspect-[3/4] relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-sm">
                    <img 
                      src="/images/founders/bm_choyal.jpg" 
                      alt="Late Mr. B. M. Choyal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xl">Late Mr. B. M. Choyal</h4>
                      <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mt-1">Co-Founder &amp; Ex-Chairman</span>
                      <span className="text-slate-400 font-medium text-[11px] block mt-0.5">July 28, 1926 – Ex-Chairman</span>
                    </div>
                    <div className="pt-2">
                      <Link 
                        href="/ex-chairman" 
                        className="inline-flex items-center gap-1.5 text-xs font-black text-brand-primary hover:text-brand-primary/85 uppercase tracking-wider transition-all hover:translate-x-1"
                      >
                        Know More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Late Shri R. D. Sharma */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:shadow-md transition-shadow">
                  <div className="w-full md:w-48 shrink-0 aspect-[3/4] relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-sm">
                    <img 
                      src="/images/founders/rd_sharma.jpg" 
                      alt="Late Shri R. D. Sharma" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xl">Late Shri R. D. Sharma</h4>
                      <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mt-1">Co-Founder &amp; Ex-Managing Director</span>
                      <span className="text-slate-400 font-medium text-[11px] block mt-0.5">January 5, 1939 – Ex-MD</span>
                    </div>
                    <div className="pt-2">
                      <Link 
                        href="/ex-md" 
                        className="inline-flex items-center gap-1.5 text-xs font-black text-brand-primary hover:text-brand-primary/85 uppercase tracking-wider transition-all hover:translate-x-1"
                      >
                        Know More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="space-y-8 pt-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black uppercase text-brand-primary tracking-widest">
                  Leadership
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Mr. R. S. Choyal */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:shadow-md transition-shadow lg:col-span-2">
                  <div className="w-full md:w-48 shrink-0 aspect-[3/4] relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-sm">
                    <img 
                      src="/images/founders/rs_choyal.jpg" 
                      alt="Mr. R. S. Choyal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xl">Mr. R. S. Choyal</h4>
                      <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mt-1">Chairman &amp; Managing Director</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                      <Link 
                        href="/leadership-ed" 
                        className="inline-flex items-center gap-1.5 text-xs font-black text-brand-primary hover:text-brand-primary/85 uppercase tracking-wider transition-all hover:translate-x-1"
                      >
                        Know More
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        <a href="https://www.facebook.com/radhey.choyal.2025" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/radheychoyal/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/rschoyal/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a href="https://www.youtube.com/@rschoyal.official" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. RESEARCH & DEVELOPMENT */}
        <section id="research-development" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-slate-50/50 border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                  Innovation Core
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                  Ajmer R&amp;D Centre
                </h2>
              </div>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Laid on 7th August 2012 in Ajmer, Rajasthan, the foundation stone of our dedicated R&amp;D Centre marked a paradigm shift in our technical output. This facility houses our software simulation lab, specialized tool shop, and testing chambers.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                By investing heavily in metallurgical research and digital control mechanisms, this center has designed multiple international patents, securing our market leadership in advanced cold-grinding stone milling.
              </p>

              {/* R&D Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">✔</div>
                  <span className="text-sm font-semibold text-slate-600">Abrasive compound stress and fatigue testing</span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">✔</div>
                  <span className="text-sm font-semibold text-slate-600">PLC/HMI controller load simulation and diagnostics</span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">✔</div>
                  <span className="text-sm font-semibold text-slate-600">Flow dynamics for pneumatic convey pipelines</span>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">✔</div>
                  <span className="text-sm font-semibold text-slate-600">Digital stone dressing groove geometry profiling</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
                {/* Fallback image, could use factory or engineering mockup */}
                <Image
                  src="/images/mill_close_up.png"
                  alt="RSC Innovation and metallurgy labs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 7. OUR NETWORK */}
        <section id="network" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-white border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full space-y-16">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative order-last lg:order-first">
                <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-slate-200 shadow-md relative bg-slate-50">
                  <Image
                    src="/images/qatar.webp"
                    alt="RS Choyal Middle East Global Setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                    Global Logistical Reach
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                    Global Footprint &amp; Dealer Network
                  </h2>
                </div>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  Our projects process grains daily across over 20 nations, backed by proactive AMC partners and localized technical networks to eliminate downtime.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  RSC Group supports sales and installation sites in:
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Middle East &amp; GCC</h4>
                    <p className="text-xs text-slate-500">Doha (Qatar), Dubai &amp; Abu Dhabi (UAE), Oman.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Africa Network</h4>
                    <p className="text-xs text-slate-500">Kenya, Tanzania, Uganda, South Africa, Nigeria.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">South &amp; East Asia</h4>
                    <p className="text-xs text-slate-500">India (Pan-India networks), Sri Lanka, Nepal, Bangladesh.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Europe &amp; UK</h4>
                    <p className="text-xs text-slate-500">Turnkey custom flour mill installations and spare distribution hubs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global & Regional Alternating Marquees */}
            <div className="w-full pt-10 border-t border-slate-200/60 space-y-16 marquee-container">
              
              {/* Section 1: Global Partners */}
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                    International Markets
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                    Global Network Partners
                  </h3>
                </div>

                <div className="space-y-6 py-2 relative overflow-hidden">
                  {/* Fade Left/Right overlays */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                  {/* Row 1: Left to Right (Reverse Marquee) */}
                  <div className="flex overflow-hidden w-full select-none gap-6">
                    <div className="flex shrink-0 animate-marquee-reverse items-center gap-6 min-w-full">
                      {[...globalLogos.slice(0, 6), ...globalLogos.slice(0, 6), ...globalLogos.slice(0, 6)].map((logo, idx) => (
                        <div 
                          key={`global-r1-1-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex shrink-0 animate-marquee-reverse items-center gap-6 min-w-full" aria-hidden="true">
                      {[...globalLogos.slice(0, 6), ...globalLogos.slice(0, 6), ...globalLogos.slice(0, 6)].map((logo, idx) => (
                        <div 
                          key={`global-r1-2-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Right to Left (Normal Marquee) */}
                  <div className="flex overflow-hidden w-full select-none gap-6">
                    <div className="flex shrink-0 animate-marquee items-center gap-6 min-w-full">
                      {[...globalLogos.slice(6, 12), ...globalLogos.slice(6, 12), ...globalLogos.slice(6, 12)].map((logo, idx) => (
                        <div 
                          key={`global-r2-1-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex shrink-0 animate-marquee items-center gap-6 min-w-full" aria-hidden="true">
                      {[...globalLogos.slice(6, 12), ...globalLogos.slice(6, 12), ...globalLogos.slice(6, 12)].map((logo, idx) => (
                        <div 
                          key={`global-r2-2-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: National & Regional Partners */}
              <div className="space-y-6 pt-6">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                    Domestic Markets
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                    National &amp; Regional Partners
                  </h3>
                </div>

                <div className="space-y-6 py-2 relative overflow-hidden">
                  {/* Fade Left/Right overlays */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                  {/* Row 1: Left to Right (Reverse Marquee) */}
                  <div className="flex overflow-hidden w-full select-none gap-6">
                    <div className="flex shrink-0 animate-marquee-reverse items-center gap-6 min-w-full">
                      {[...regionalLogos.slice(0, 6), ...regionalLogos.slice(0, 6), ...regionalLogos.slice(0, 6)].map((logo, idx) => (
                        <div 
                          key={`regional-r1-1-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex shrink-0 animate-marquee-reverse items-center gap-6 min-w-full" aria-hidden="true">
                      {[...regionalLogos.slice(0, 6), ...regionalLogos.slice(0, 6), ...regionalLogos.slice(0, 6)].map((logo, idx) => (
                        <div 
                          key={`regional-r1-2-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Right to Left (Normal Marquee) */}
                  <div className="flex overflow-hidden w-full select-none gap-6">
                    <div className="flex shrink-0 animate-marquee items-center gap-6 min-w-full">
                      {[...regionalLogos.slice(6, 12), ...regionalLogos.slice(6, 12), ...regionalLogos.slice(6, 12)].map((logo, idx) => (
                        <div 
                          key={`regional-r2-1-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex shrink-0 animate-marquee items-center gap-6 min-w-full" aria-hidden="true">
                      {[...regionalLogos.slice(6, 12), ...regionalLogos.slice(6, 12), ...regionalLogos.slice(6, 12)].map((logo, idx) => (
                        <div 
                          key={`regional-r2-2-${idx}`} 
                          className="w-[240px] h-[120px] bg-white rounded-2xl border border-slate-200/50 shadow-xs flex items-center justify-center p-1 shrink-0 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 8. MISSION & VISION */}
        <section id="mission-vision" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-slate-50/50 border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Mission */}
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Compass className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">Our Mission</h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    To build highly efficient, sustainable, and operator-friendly grain processing setups that maximize commercial margins while protecting the organic flavor and nutritional profile of the flour.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-brand-primary p-8 sm:p-12 rounded-3xl text-white space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">Our Vision</h3>
                  <p className="text-slate-100/90 text-base leading-relaxed font-medium">
                    "To reimagine the future of milling by delivering intelligent, efficient, and sustainable grinding solutions — rooted in decades of expertise and driven by innovation. We commit to advancing the industry through cutting-edge technology, human-centered design, and an focus on quality."
                  </p>
                </div>
              </div>

            </div>

            {/* 11 Benchmark Goals */}
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                  Technical Benchmarks
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                  The 11 Core Benchmark Goals
                </h3>
                <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                  Every plant layout designed by RS Choyal &amp; Co. complies with these 11 parameters to deliver high-quality, profitable, and food-safe operations:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benchmarkGoals.map((goal, idx) => {
                  const IconComponent = goal.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white p-6 rounded-3xl border border-slate-200/50 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="p-3 rounded-2xl bg-brand-primary/5 text-brand-primary border border-brand-primary/10 shrink-0">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-black text-slate-300">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-extrabold text-slate-800 text-base">
                            {goal.title}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                            {goal.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 9. SOCIAL RESPONSIBILITY */}
        <section id="social-responsibility" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-white border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                  Community &amp; Ecology
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                  Social Responsibility (CSR)
                </h2>
              </div>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Sustainability is integral to our trade conduct. We strive to balance heavy fabrication requirements with environmental conservation and social empowerment.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-brand-primary/5 text-brand-primary shrink-0 h-12 w-12 flex items-center justify-center border border-brand-primary/10">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base">Eco-Efficient Milling Systems</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      By designing digital mills that reduce power usage by up to 40%, we help commercial clients directly shrink their carbon emissions and operating footprint.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-brand-primary/5 text-brand-primary shrink-0 h-12 w-12 flex items-center justify-center border border-brand-primary/10">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base">Vocational Training (CHARGE &amp; CSMT)</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      We offer subsidized, professional training classes to local youth and technicians, enabling career paths in sustainable modern agribusiness and engineering.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-brand-primary/5 text-brand-primary shrink-0 h-12 w-12 flex items-center justify-center border border-brand-primary/10">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base">Community Investment</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      Active funding and material support for educational programs, public safety setups, and healthcare drives around Ajmer and RIICO industrial sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
                <Image
                  src="/images/about-unit-2.jpg"
                  alt="Choyal community empowerment program backdrop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 10. OUR INFRASTRUCTURE */}
        <section id="infrastructure" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-slate-50/50 border-t border-slate-200/50 scroll-mt-48">
          <div className="w-full space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Operations &amp; Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                Our Facilities &amp; Heavy Infrastructure
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                RSC Group operates from multiple custom-built manufacturing and administrative hubs in Ajmer, Rajasthan, India:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="h-5 w-5" />,
                  name: "Palra Heavy Engineering Unit",
                  desc: "Primary manufacturing and fabrication floor. Built for heavy commercial layout components, steel silos, pre-fabricated steel structures, and our world-renowned emery stones.",
                  image: "/images/infrastructure/factory_unit.jpg"
                },
                {
                  icon: <Activity className="h-5 w-5" />,
                  name: "Arjunpura Pilot Plant",
                  desc: "A fully operational, digital 40 TPD whole wheat stone mill facility. Serves as our active demonstration testbed and diagnostic playground for automation software updates.",
                  image: "/images/infrastructure/pilot_plant.jpg"
                },
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  name: "CHARGE & CSMT Training School",
                  desc: "Choyal Hub for Agribusiness Research, Growth and Entrepreneurship & School of Milling. Our training facility equipped with live setups for operator training classes.",
                  image: "/images/infrastructure/charge_institute.jpg"
                },
                {
                  icon: <Layers className="h-5 w-5" />,
                  name: "Choyal Corporate Tower",
                  desc: "Corporate headquarters managing global sales, technical diagnostic IT support, international supply logistics, marketing, and corporate finance operations.",
                  image: "/images/infrastructure/corporate_office.jpg"
                },
                {
                  icon: <Settings className="h-5 w-5" />,
                  name: "Precision Machining Workshop",
                  desc: "Houses our CNC machinery, lathe tooling floors, and automated dressers specializing in casting custom grain roller grooves and feeders.",
                  image: "/images/infrastructure/precision_workshop.jpg"
                }
              ].map((fac, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group">
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-100 bg-slate-100">
                      <img 
                        src={fac.image} 
                        alt={fac.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary flex-shrink-0">
                          {fac.icon}
                        </div>
                        <h4 className="font-extrabold text-slate-800 text-base sm:text-lg tracking-tight leading-snug">{fac.name}</h4>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{fac.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 bg-brand-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,172,127,0.15),transparent_60%)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
              Ready to Upgrade Your Milling Operations?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Connect with our heavy engineering design and layout specialists to plan your custom plant upgrade or turnkey mill installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="bg-brand-tertiary text-slate-900 font-extrabold px-8 py-4 rounded-full hover:scale-105 active:scale-98 transition-all shadow-md cursor-pointer text-base"
              >
                Request a Custom Quote
              </button>
              <Link
                href="/contact"
                className="border border-white/40 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all cursor-pointer text-base"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
