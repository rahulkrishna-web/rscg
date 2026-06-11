"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Shield, GraduationCap, Zap, Sun, Database, Workflow, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FacilityService {
  title: string;
  desc: string;
  iconPath: string;
}

const facilityServices: FacilityService[] = [
  {
    title: "Research & Development",
    desc: "We help you with developing new products, testing, grain analysis, and providing technical assistance of an advisory nature tailored to your unique business needs.",
    iconPath: "/images/facility-centre/randD.png"
  },
  {
    title: "On-Mill Training",
    desc: "We offer hands-on training for mill operations, MIS reporting, process monitoring, safe machinery handling, and production output optimization.",
    iconPath: "/images/facility-centre/Training.png"
  },
  {
    title: "Pilot Plant Auditing",
    desc: "Our 40 TPD plant serves as a model. Inspect how the processing streams and automated panels perform in real-time to make a fully informed business decision.",
    iconPath: "/images/facility-centre/Pilot-project.png"
  }
];

const galleryItems = [
  { path: "/images/facility-centre/gallery_1.jpg", caption: "Interactive Control Panels & Telemetry" },
  { path: "/images/facility-centre/gallery_2.jpg", caption: "Integrated Whole Wheat Milling System" },
  { path: "/images/facility-centre/gallery_3.jpg", caption: "Carr's Flour UK Team Facility Tour" },
  { path: "/images/facility-centre/gallery_4.jpg", caption: "Solar Plant Supplying Clean Energy" },
  { path: "/images/facility-centre/gallery_5.jpg", caption: "Automated Packaging & Weighing Line" }
];

export default function FacilityCentrePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/facility-centre/banner.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Infrastructure
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Our Facility Centre
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                See, feel, compare, and verify before you invest. The ideal place for proof of concept in modern milling.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Facility Centre</span>
          </div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
                100% Green & Solar Powered Facility
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                See and Believe What Our Tech Can Do For You
              </h2>
              <div className="text-slate-600 font-medium space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We strongly believe that our client’s investment is valuable. Hence, we provide our Ajmer 
                  facility centre as an ideal place to see, examine, feel, compare, estimate, and decide the feasibility 
                  of modern milling products. We aspire to present a clear **Proof of Concept** to empower your decisions.
                </p>
                <p>
                  The facility is a technological marvel—completely self-sustained and solar-powered. It houses extensive 
                  testing environments for the grain processing industry, including grain intake, conveying, cleaning, grading, 
                  and grinding.
                </p>
                <p>
                  Our **40 TPD Wholewheat Atta Plant** operates not only as a working model but also serves as the Choyal School of 
                  Milling Technology's practical training ground, enabling operators to gain hands-on expertise on real machinery.
                </p>
              </div>
            </div>

            {/* Quick specifications summary card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] space-y-6">
              <h3 className="text-lg font-heading font-black text-slate-850 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-brand-primary" />
                Pilot Plant Specs
              </h3>
              <div className="space-y-4 text-sm font-semibold text-slate-600">
                <div className="flex justify-between pb-2.5 border-b border-slate-200/60">
                  <span>Capacity</span>
                  <span className="text-slate-900 font-extrabold">40 TPD</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-200/60">
                  <span>Power Source</span>
                  <span className="text-slate-900 font-extrabold">100% Solar Energy</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-200/60">
                  <span>Control Software</span>
                  <span className="text-slate-900 font-extrabold">Miller Lite PLC</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-200/60">
                  <span>Training Streams</span>
                  <span className="text-slate-900 font-extrabold">Intake to Packaging</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-slate-900 font-extrabold">Ajmer, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Miller Lite Software Section */}
          <div className="bg-brand-primary/95 text-white p-8 sm:p-12 rounded-[40px] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase block">
                Automation Brain
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black">
                Powered by "Miller Lite" PLC Software
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                The facility features a highly interactive control setup utilizing our proprietary software 
                <strong> Miller Lite</strong>. It harmonizes software code, hardware, PLC controllers, VFDs, 
                servo drives, electrical panels, and mechanical devices into a single cohesive interface.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Process Monitoring", desc: "Real-time stream telemetry" },
                { title: "Bin Management", desc: "Digital load and fill levels" },
                { title: "Event Logger", desc: "Alarm and log indexing" },
                { title: "Remote Access", desc: "Mobile-ready diagnostics" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 border border-white/10 p-4 rounded-2xl space-y-1">
                  <h4 className="text-xs font-black uppercase text-brand-tertiary tracking-wider">{item.title}</h4>
                  <p className="text-xs text-white/80 font-bold leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facility Services List */}
          <div className="space-y-12 mb-20">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Facility Support Streams
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Maximize the value of your visit with our designated research and testing divisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilityServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="group bg-white border border-slate-200/60 rounded-[28px] p-6 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img 
                        src={service.iconPath} 
                        alt={service.title} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-heading font-black text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center text-xs font-black text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 uppercase tracking-wider cursor-pointer mt-4">
                    <span>Enquire Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Facility Gallery
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Take a visual tour inside our testing grounds, classrooms, solar setups, and operation blocks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.path}
                    alt={item.caption}
                    className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
                    <span className="text-[10px] font-black uppercase text-brand-tertiary tracking-widest">
                      Live Reference
                    </span>
                    <p className="text-xs sm:text-sm font-black tracking-tight leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA Section */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Schedule a Trial run or Site Visit
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            Contact us to request machine slots, training sessions, or schedule a tour at Ajmer with our project directors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20to%20your%20Ajmer%20Facility%20Centre."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-secondary text-brand-foreground hover:bg-brand-secondary/90 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              <Phone className="w-4 h-4" />
              Discuss via WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Book Site Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
