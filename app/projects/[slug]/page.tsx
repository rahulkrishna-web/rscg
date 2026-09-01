"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Factory, MapPin, Calendar, Box, Cpu, FileText, CheckCircle, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "../projectsData";

const HERO_BANNER_IMAGES = [
  "/case-studies/herobanner/herobanner.jpg",
  "/case-studies/herobanner/herobanner.png",
  "/case-studies/herobanner/herobanner(1).jpg",
  "/case-studies/herobanner/herobanner(2).jpg",
];

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentProject = projectsData.find((project) => project.slug === slug);

  // Carousel state for project gallery images
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Hero slider state
  const [heroSlide, setHeroSlide] = useState(0);

  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_BANNER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-brand-bg text-slate-800 flex flex-col justify-between">
        <div>
          <Header />
          <div className="flex-1 flex flex-col items-center justify-center p-16 space-y-4 max-w-lg mx-auto text-center">
            <Factory className="h-12 w-12 text-slate-300" />
            <h2 className="text-2xl font-bold">Project Case Study Not Found</h2>
            <p className="text-slate-500">The project case study you are looking for does not exist or has been moved.</p>
            <Link href="/projects" className="bg-brand-primary hover:bg-brand-primary/95 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-sm text-sm">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get other projects to display at the bottom (excluding current one)
  const otherProjects = projectsData.filter((p) => p.slug !== slug);

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev === 0 ? currentProject.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev === currentProject.images.length - 1 ? 0 : prev + 1));
  };

  const totalImages = currentProject.images.length;
  const currentImage = currentProject.images[activeImageIdx];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Breadcrumb Row */}
        <div className="w-full bg-white/50 border-b border-slate-200/50 py-4 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full flex items-center justify-between">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Our Projects
            </Link>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider hidden sm:block max-w-xs truncate">
              Projects / {currentProject.title}
            </div>
          </div>
        </div>

        {/* Hero Section — Full-background image slider */}
        <section className="w-full relative h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-[#0B1510]">
           {/* Slider images with crossfade */}
           {HERO_BANNER_IMAGES.map((src, idx) => (
             <div
               key={src}
               className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
               style={{ opacity: idx === heroSlide ? 1 : 0 }}
             >
               <img src={src} alt={`Plant showcase ${idx + 1}`} className="w-full h-full object-cover" />
             </div>
           ))}

           {/* Dark overlay for text contrast */}
           <div className="absolute inset-0 bg-[#0B1510]/60 z-10" />

           {/* Hero content */}
           <div className="relative z-20 h-full flex flex-col items-start justify-center px-6 sm:px-12 lg:px-16 xl:px-24">
             <div className="max-w-3xl space-y-5 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight font-heading">
                  Transforming Ideas into<br/>Reality
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-medium max-w-2xl">
                  From concept to completion, discover the projects we&apos;ve successfully executed with precision and expertise.
                </p>
                <div className="pt-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-[#ffc254] text-[#0B1510] px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(247,176,50,0.4)]"
                  >
                    Explore Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
             </div>

             {/* Dot indicators */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
               {HERO_BANNER_IMAGES.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setHeroSlide(idx)}
                   className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === heroSlide ? "bg-[#A6CE39] scale-110" : "bg-white/40 hover:bg-white/60"}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
             </div>
           </div>
        </section>

        {/* Quick Facts Bar — straddles hero boundary 50/50 */}
        <div className="relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
               <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left px-4 gap-4">
                  <div className="bg-slate-50 p-3 rounded-full flex-shrink-0">
                    <Factory className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Client</span>
                    <span className="text-[13px] font-black text-slate-800 leading-snug">{currentProject.client || "N/A"}</span>
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left px-4 gap-4">
                  <div className="bg-slate-50 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Location</span>
                    <span className="text-[13px] font-black text-slate-800 leading-snug">{currentProject.location || "N/A"}</span>
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left px-4 gap-4">
                  <div className="bg-slate-50 p-3 rounded-full flex-shrink-0">
                    <Factory className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Plant Capacity</span>
                    <span className="text-[13px] font-black text-slate-800 leading-snug">{currentProject.capacity || "N/A"}</span>
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left px-4 gap-4">
                  <div className="bg-slate-50 p-3 rounded-full flex-shrink-0">
                    <Box className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Project Type</span>
                    <span className="text-[13px] font-black text-slate-800 leading-snug">{currentProject.projectType || "N/A"}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 pt-4 sm:pt-6 lg:pt-12 pb-16 lg:pb-24 -mt-8 sm:-mt-10 lg:-mt-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
             <div className="space-y-6 lg:order-1 order-2">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-[32px] font-heading font-black text-[#133020] leading-tight">Project Overview</h2>
                  <div className="w-12 h-[3px] bg-[#D3994B] mt-4" />
                </div>
                
                <div className="space-y-6">
                  {currentProject.content.map((block, idx) => {
                    if (block.type === 'heading') {
                      return <h3 key={idx} className="text-xl font-heading font-black text-[#133020] mt-8 mb-4">{block.text}</h3>;
                    }
                    if (block.type === 'list') {
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-2.5 text-[15px] sm:text-base text-slate-700 font-medium">
                          {block.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }}></li>)}
                        </ul>
                      );
                    }
                    return <p key={idx} className="text-[15px] sm:text-base text-slate-700 leading-relaxed font-medium">{block.text}</p>;
                  })}
                </div>

             </div>
             
             <div className="lg:order-2 order-1 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-xl sticky top-32">
                   <img src={currentProject.images[0] || currentImage} alt="Project Overview" className="object-cover w-full h-full" />
                </div>
             </div>
          </div>
        </section>

        {/* Project Gallery */}
        {totalImages > 1 && (
          <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-[32px] font-heading font-black text-[#133020] leading-tight">Project Gallery</h2>
              <div className="w-12 h-[3px] bg-[#D3994B] mt-4" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {currentProject.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative group cursor-pointer" onClick={() => setActiveImageIdx(idx + 1)}>
                  <img src={img} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-12 pb-24">
          <div className="bg-[#0b2917] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-white/10">
              <div className="space-y-3 z-10 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">Want to Start Your Plant?</h2>
                <p className="text-white/80 font-medium text-sm sm:text-base">Let's build your next successful milling plant together.</p>
              </div>
              <Link href="/contact" className="z-10 bg-[#f7b032] hover:bg-[#ffc254] text-[#0b2917] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-colors flex items-center gap-2 whitespace-nowrap shadow-md">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs font-bold text-white/90 z-10 relative">
               <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 border border-[#f7b032]/30 rounded-full flex items-center justify-center">
                   <CheckCircle className="text-[#f7b032] w-5 h-5" />
                 </div>
                 <span>60+ Years<br/>of Experience</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 border border-[#f7b032]/30 rounded-full flex items-center justify-center">
                   <Factory className="text-[#f7b032] w-5 h-5" />
                 </div>
                 <span>1000+ Plants<br/>Delivered</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 border border-[#f7b032]/30 rounded-full flex items-center justify-center">
                   <MapPin className="text-[#f7b032] w-5 h-5" />
                 </div>
                 <span>60+ Countries<br/>Worldwide</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 border border-[#f7b032]/30 rounded-full flex items-center justify-center">
                   <Box className="text-[#f7b032] w-5 h-5" />
                 </div>
                 <span>End-to-End<br/>Turnkey Support</span>
               </div>
            </div>
          </div>
        </section>

        {/* Other Reference Projects Section */}
        {otherProjects.length > 0 && (
          <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 border-t border-slate-200/50 bg-slate-50/20 overflow-hidden">
            <div className="w-full space-y-8">
              <h2 className="text-2xl font-heading font-black text-slate-900 tracking-tight">
                Read Other Case Studies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProjects.map((p) => {
                  const cardCover = p.images.length > 0 ? p.images[0] : "/images/plants/turnkey_solutions.webp";
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="group bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-secondary/35 transition-all duration-300 flex flex-col h-full cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center relative border-b border-slate-100 overflow-hidden">
                        <img
                          src={cardCover}
                          alt={p.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-brand-muted font-bold block flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-brand-primary" />
                            {p.location}
                          </span>
                          <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-sm transition-colors leading-snug line-clamp-2">
                            {p.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-xs font-black text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto uppercase tracking-wider">
                          <span>Read Case Study</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
