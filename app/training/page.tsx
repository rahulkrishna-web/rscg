"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle, GraduationCap, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TrainingPage() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const galleryImages = [
    "/images/training/gallery_1.jpg",
    "/images/training/gallery_2.jpg",
    "/images/training/gallery_3.jpg",
    "/images/training/gallery_4.jpg",
    "/images/training/gallery_5.jpg",
    "/images/training/gallery_6.jpg"
  ];

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    if (activeImageIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIdx(null);
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIdx, galleryImages.length]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/training/banner.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                CSR & EDUCATION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Milling Training & Education
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                CHARGE Academy: India’s first school dedicated exclusively to Chakki Milling Technology.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Training</span>
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                CSR Initiative by RSC Group
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                Choyal Hub for Agribusiness, Research, Growth & Entrepreneurship (CHARGE)
              </h2>
              <div className="text-slate-600 font-medium space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Originally founded as the **Choyal School of Milling Technology (CSMT)** and now rebranded to **CHARGE**, 
                  this academy serves as the primary CSR division of the RSC Group. We firmly believe that what we take from 
                  society must be given back.
                </p>
                <p>
                  CHARGE operates on a strict **No Profit – No Loss basis**, catering to fresh graduates as well as 
                  seasoned milling professionals. We offer customized vocational courses for local unemployed youth, 
                  helping them develop valuable mechanical and technical skills to secure steady employment in the grain industry.
                </p>
              </div>
            </div>

            {/* Spec Highlights Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] flex flex-col items-center justify-center text-center space-y-4">
              <img 
                src="/images/training/certified.png" 
                alt="CHARGE Certification" 
                className="h-28 w-auto object-contain"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                  Global Standards
                </h4>
                <p className="text-xs text-slate-500 font-bold max-w-xs leading-normal">
                  Our curriculum represents the international benchmark for excellence in Chakki milling education.
                </p>
              </div>
            </div>
          </div>

          {/* Why CHARGE Grid */}
          <div className="space-y-12 mb-24">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Why Study at CHARGE?
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                India’s premier school focused on modern digital milling technologies and quality assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Chakki Milling Focus",
                  desc: "The only academic institution in India built specifically to address high-performance chakki stone milling.",
                  image: "/images/training/why_1.png"
                },
                {
                  title: "60-Year Industry Legacy",
                  desc: "Courses are curated and taught by engineers backed by RS Choyal’s extensive manufacturing heritage.",
                  image: "/images/training/why_2.png"
                },
                {
                  title: "Unrivalled Qualifications",
                  desc: "We offer qualifications spanning grain chemistry, storage biology, machinery maintenance, and software diagnostics.",
                  image: "/images/training/why_3.png"
                },
                {
                  title: "Integrity & Assessment",
                  desc: "Rigorous evaluations and standardized testing guidelines ensure graduates meet top milling credentials.",
                  image: "/images/training/why_4.png"
                },
                {
                  title: "Practical Pilot Plant",
                  desc: "Students gain hands-on experience using state-of-the-art PLC panels, cleaning balancers, and grinding units.",
                  image: "/images/training/why_5.png"
                },
                {
                  title: "Digital Chakki Training",
                  desc: "Learn automated operations using proprietary 'Miller Lite' PLC code and remote telemetry systems.",
                  image: "/images/training/why_6.png"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-200/60 rounded-[32px] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-48 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6 space-y-2">
                      <h4 className="text-md sm:text-lg font-heading font-black text-slate-850 leading-snug group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits of Courses to Employers */}
          <div className="max-w-4xl mx-auto mb-24 space-y-6">
            <h3 className="text-lg font-heading font-black text-slate-900 tracking-wider uppercase">
              BENEFITS OF COURSES TO EMPLOYERS
            </h3>

            <div className="divide-y divide-slate-150 border-b border-slate-150">
              {[
                "The courses provide participants with the background to effectively integrate their job function into the goals of their.",
                "The courses enhance participant’s understanding of the chakki milling process empowering them to make better decisions relative to grain and flour.",
                "The courses provide the tools, language and understanding to communicate your company’s needs effectively when dealing with suppliers or customers.",
                "The training empowers employees to be better problem solvers by giving them the tools to better define improvement opportunities, evaluate potential solutions and make recommendations based on an understanding of milling principles and sound evaluation methods balancing technical and economic considerations."
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 py-5">
                  <ChevronRight className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://charge.org.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#004d26] hover:bg-[#003c1e] text-white font-extrabold text-xs uppercase px-8 py-3.5 tracking-wider transition-colors"
              >
                KNOW MORE
              </a>
            </div>
          </div>

          {/* Reference Photo Gallery Grid */}
          <div className="space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Training Facility Gallery
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Take a look at the labs, classrooms, and operations training floors at our facility. Click any image to view it in full screen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className="relative group h-64 overflow-hidden rounded-[28px] border border-slate-200/60 bg-slate-900 cursor-zoom-in"
                >
                  <img 
                    src={src} 
                    alt={`CSMT Classroom ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Lightbox Slider Popup */}
        {activeImageIdx !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setActiveImageIdx(null)}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-105 transition-all p-2 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer z-55"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Control Arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:scale-105 transition-all p-3 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer z-55"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[activeImageIdx]} 
                alt={`Expanded training view ${activeImageIdx + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl transition-all duration-300 ease-out"
              />
              {/* Image Counter Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white/80 text-xs font-semibold backdrop-blur-xs">
                {activeImageIdx + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Right Control Arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:scale-105 transition-all p-3 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer z-55"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* CTA */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Enroll Your Team at CHARGE
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            Book operator certifications, vocational seats, or request a custom syllabus for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%2520am%20interested%20in%20enrolling%20my%20operators%20in%20the%20CHARGE%2520milling%20training%20courses."
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
              Contact CSMT
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
