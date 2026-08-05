"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Factory, MapPin, Calendar, Box, Cpu, FileText, CheckCircle, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "../projectsData";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentProject = projectsData.find((project) => project.slug === slug);

  // Carousel state for images
  const [activeImageIdx, setActiveImageIdx] = useState(0);

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

        {/* New Hero Section */}
        <section className="w-full relative lg:h-[500px] xl:h-[600px] flex flex-col lg:block overflow-hidden bg-[#0a2313]">
           {/* Desktop/Global Background Image */}
           <div className="absolute inset-0 w-full h-full">
             <img src={currentImage} alt={currentProject.title} className="w-full h-full object-cover lg:object-right opacity-40 lg:opacity-100" />
           </div>

           {/* Green Overlay - Diagonal on Desktop, Full on Mobile */}
           <div 
             className="relative lg:absolute top-0 left-0 bottom-0 w-full lg:w-[70%] xl:w-[60%] bg-[#0a2313]/90 lg:bg-[#0a2313] z-10 lg:h-full flex items-center [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,75%_100%,0_100%)]"
           >
             <div className="w-full p-8 sm:p-12 lg:p-16 xl:pl-24 max-w-2xl space-y-4 sm:space-y-6">
                <span className="text-xl sm:text-3xl font-bold font-heading text-white">Case Study</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#A6CE39] leading-tight">
                  Real Projects.<br/>Real Impact.
                </h1>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium max-w-md lg:max-w-xl">
                  Explore how our engineering, technology, and turnkey solutions have helped clients build efficient, reliable, and future-ready flour milling plants.
                </p>
             </div>
           </div>
        </section>

        {/* Quick Facts Bar */}
        <div className="relative z-30 -mt-16 sm:-mt-24 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
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
               <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left px-4 gap-4">
                  <div className="bg-slate-50 p-3 rounded-full flex-shrink-0">
                    <Calendar className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Completion</span>
                    <span className="text-[13px] font-black text-slate-800 leading-snug">{currentProject.commissioned || "N/A"}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
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

                <div className="pt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#06331C] hover:bg-[#0a4526] text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-sm text-xs tracking-widest uppercase">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
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
