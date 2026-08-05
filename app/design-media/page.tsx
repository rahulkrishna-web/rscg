"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, PenTool, Box, Settings, Package, CheckCircle2, ClipboardCheck, Lightbulb, Headset } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DesignMediaPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden flex flex-col justify-end bg-[#0D301F]">
          <div className="absolute inset-0 bg-[url('/images/design-media/hero-image/design_hero.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C1C] via-[#0B2C1C]/90 to-transparent z-10 w-full sm:w-2/3 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C1C] via-[#0B2C1C]/60 to-transparent z-10 h-1/2 mt-auto" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-between pt-16 pb-12 sm:pb-16">
            
            <div className="space-y-4 max-w-2xl mt-8">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase flex items-center gap-2">
                HOME <ChevronRight className="w-3 h-3 text-slate-400" /> DESIGN & MEDIA
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Ideas <span className="text-[#D3994B]">Engineered.</span><br/>Stories <span className="text-[#D3994B]">Crafted.</span>
              </h1>
              
              <div className="w-12 h-1 bg-[#D3994B] mt-4 mb-2" />

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-4 max-w-lg">
                Our design studio combines engineering expertise with creative thinking to deliver technical design, 3D visualization, and packaging solutions.
              </p>
            </div>

            {/* Hero Highlights - Bottom Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-12 lg:gap-16 mt-12 pt-8 border-t border-white/10">
              {[
                { icon: PenTool, title: "Technical", subtitle: "Design" },
                { icon: Box, title: "3D", subtitle: "Visualization" },
                { icon: Settings, title: "Design for", subtitle: "Manufacturing" },
                { icon: Package, title: "Packaging", subtitle: "Design" }
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white relative">
                    <highlight.icon className="w-6 h-6 stroke-1" />
                    {/* Add a subtle orange accent dot/line to mimic the screenshot */}
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D3994B]" />
                  </div>
                  <div className="space-y-0.5 leading-tight">
                    <h4 className="text-white font-bold text-xs sm:text-sm">{highlight.title}</h4>
                    <h4 className="text-white font-bold text-xs sm:text-sm">{highlight.subtitle}</h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Technical Design Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-[#0B2C1C]">
                  <img src="/images/design-media/icons/technical-design.png" alt="Technical Design" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">
                  Technical Design
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-slate-300" />
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Our engineers translate complex requirements into practical, manufacturable solutions.
              </p>
              
              <ul className="space-y-3 pt-4">
                {[
                  "CAD design",
                  "Design for manufacture and assembly",
                  "Material and process selection",
                  "Cost reduction and value engineering"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 stroke-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-100 relative h-64 sm:h-[400px]">
              <img src="/images/design-media/images/technicaldesign_supplementalimg.png" alt="Technical Design Software" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Design for Manufacturing Section */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-100 relative h-64 sm:h-[400px] order-2 lg:order-1">
              <img src="/images/design-media/images/designformanufacture_supplementalimg.png" alt="Design for Manufacturing Factory" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 max-w-lg order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-[#0B2C1C]">
                  <img src="/images/design-media/icons/design-for-manufacturing.png" alt="Design for Manufacturing" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">
                  Design for Manufacturing
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-slate-300" />
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                We design plants and machinery that are not only efficient to operate, but also reliable and economical to manufacture.
              </p>

              {/* Metrics */}
              <div className="flex items-center gap-8 pt-4 pb-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E1EAE5] flex items-center justify-center text-[#133020]">
                    <ClipboardCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-heading text-[#133020]">265+</h4>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide leading-tight">Turnkey Projects<br/>Designed & Delivered</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#D3994B]">
                    <Lightbulb className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-heading text-[#133020]">42+</h4>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide leading-tight">Innovations<br/>Developed</p>
                  </div>
                </div>
              </div>

              {/* Contact Prompt */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#133020] flex items-center justify-center text-white shrink-0 mt-1">
                  <Headset className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                  If you would like to discuss your requirement with our experts, fill out our <Link href="/contact" className="text-[#D3994B] font-bold hover:underline">contact form</Link> and we will reach out to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging Design Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-[#0B2C1C]">
                  <img src="/images/design-media/icons/packaging-design.png" alt="Packaging Design" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#133020]">
                  Packaging Design
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-slate-300" />
              <div className="space-y-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                <p>
                  We create packaging that helps products stand out, communicate trust, and build a consistent brand presence.
                </p>
                <p>
                  From start-ups to established companies, we develop packaging systems that are attractive, practical, and aligned with the product.
                </p>
              </div>
            </div>
            
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-100 relative h-64 sm:h-[350px]">
              <img src="/images/design-media/images/packagingdesign.png" alt="Packaging Design Examples" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16">
          <div className="bg-[#0B2C1C] rounded-[24px] p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-6 sm:gap-8 max-w-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 border border-white/20 rounded-full flex items-center justify-center text-[#D3994B]">
                <Headset className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-heading font-black text-white">Let's Build Something Exceptional</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  From engineering drawings to 3D presentations and packaging, our team can help bring your ideas to life.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#D3994B] text-[#0B2C1C] hover:bg-[#c48d45] px-6 py-3.5 rounded-lg text-[11px] font-black tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-nowrap whitespace-nowrap shrink-0 uppercase"
            >
              GET IN TOUCH WITH OUR DESIGN EXPERTS <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
