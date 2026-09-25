"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ClipboardCheck, Lightbulb, Headset, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function DesignMediaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroProofPoints = [
    {
      title: "Technical Design",
      desc: "Precision engineering layouts, schematic drafting"
    },
    {
      title: "Design for Manufacturing",
      desc: "Optimizing component geometries for cost effective production"
    },
    {
      title: "Packaging Design",
      desc: "Structural packaging, creative branding and production-ready artwork"
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
                src="/design_media/design_desktop_cropped.png" 
                alt="Design & Media Studio" 
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
                src="/design_media/design_mobile.png" 
                alt="Design & Media Studio" 
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
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
                Ideas <span className="text-[#D3994B]">Engineered.</span><br className="hidden sm:inline" />
                Stories <span className="text-[#D3994B]">Crafted.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium max-w-xl">
                Our design studio combines engineering expertise with creative thinking to deliver technical design, 3D visualization, and packaging solutions.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D99B26] hover:bg-[#c4891e] text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(217,155,38,0.7)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Design Studio</span>
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

        {/* Technical Design Section */}
        <section className="w-full pt-12 sm:pt-16 md:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6 lg:pr-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/design_media/clean-icons/technical_design.png" 
                    alt="Technical Design Icon" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#133020]">
                    Technical Design
                  </h2>
                  <div className="w-12 h-1 bg-[#D3994B] mt-2" />
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Our engineers translate complex requirements into practical, manufacturable solutions.
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {[
                  "CAD design",
                  "Design for manufacture and assembly",
                  "Material and process selection",
                  "Cost reduction and value engineering"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-sm sm:text-base text-slate-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#D3994B] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 relative h-[320px] sm:h-[440px] lg:h-[480px] w-full">
              <Image 
                src="/images/design-media/images/technicaldesign_supplementalimg.png" 
                alt="Technical Design Software" 
                fill
                className="object-cover" 
              />
            </div>

          </div>
        </section>

        {/* Design for Manufacturing Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/60">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 relative h-[320px] sm:h-[440px] lg:h-[480px] w-full order-2 lg:order-1">
              <Image 
                src="/images/design-media/images/designformanufacture_supplementalimg.png" 
                alt="Design for Manufacturing Plant" 
                fill
                className="object-cover" 
              />
            </div>

            <div className="space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/design_media/clean-icons/design_for_manufacture.png" 
                    alt="Design for Manufacturing Icon" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#133020]">
                    Design for Manufacturing
                  </h2>
                  <div className="w-12 h-1 bg-[#D3994B] mt-2" />
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                We design plants and machinery that are not only efficient to operate, but also reliable and economical to manufacture.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 pb-2">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#133020] shrink-0">
                    <ClipboardCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black font-heading text-[#133020]">265+</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide leading-tight mt-0.5">Turnkey Projects<br/>Designed & Delivered</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] flex items-center justify-center text-[#D3994B] shrink-0">
                    <Lightbulb className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black font-heading text-[#133020]">42+</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide leading-tight mt-0.5">Innovations<br/>Developed</p>
                  </div>
                </div>
              </div>

              {/* Contact Prompt */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#133020] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                  <Headset className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  If you would like to discuss your requirement with our experts, fill out our <Link href="/contact" className="text-[#D3994B] font-bold hover:underline">contact form</Link> and we will reach out to you.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Packaging Design Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6 lg:pr-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/design_media/clean-icons/packaging_design.png" 
                    alt="Packaging Design Icon" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#133020]">
                    Packaging Design
                  </h2>
                  <div className="w-12 h-1 bg-[#D3994B] mt-2" />
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  We create packaging that helps products stand out, communicate trust, and build a consistent brand presence.
                </p>
                <p>
                  From start-ups to established companies, we develop packaging systems that are attractive, practical, and aligned with the product.
                </p>
              </div>
            </div>
            
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 relative h-[320px] sm:h-[440px] lg:h-[480px] w-full">
              <Image 
                src="/images/design-media/images/packagingdesign.png" 
                alt="Packaging Design Examples" 
                fill
                className="object-cover" 
              />
            </div>

          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="w-full bg-[#0B2C1C] rounded-[28px] p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="flex items-center gap-6 sm:gap-8 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-[#D3994B] rounded-full flex items-center justify-center text-[#D3994B]">
                <Headset className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Let's Build Something Exceptional
                </h3>
                <p className="text-base text-slate-200 leading-relaxed font-normal">
                  From engineering drawings to 3D presentations and packaging, our team can help bring your ideas to life.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D99B26] hover:bg-[#c4891e] text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(217,155,38,0.7)] hover:scale-[1.02] transition-all duration-300 cursor-pointer text-nowrap whitespace-nowrap shrink-0"
            >
              <span>GET IN TOUCH WITH OUR EXPERTS</span>
              <ArrowRight className="h-4 w-4" />
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
