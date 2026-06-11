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

        {/* Project Content Section */}
        <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
          {/* Header metadata */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-brand-primary/10 text-brand-primary backdrop-blur-md border border-brand-primary/15 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {currentProject.location}
              </span>
              {currentProject.commissioned && (
                <span className="bg-white/60 border border-slate-200/50 text-slate-500 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Commissioned: {currentProject.commissioned}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 leading-tight">
              {currentProject.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              {currentProject.subtitle}
            </p>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Side: Story, Slideshow and Scope of Work (Col Span 2) */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Interactive Image Carousel */}
              {totalImages > 0 && (
                <div className="relative w-full aspect-[16/10] bg-slate-100 rounded-[28px] overflow-hidden group shadow-sm">
                  <img
                    src={currentImage}
                    alt={`${currentProject.title} photo ${activeImageIdx + 1}`}
                    className="object-cover w-full h-full select-none"
                  />
                  
                  {/* Slider controls (only if more than 1 image) */}
                  {totalImages > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full shadow-md backdrop-blur-xs transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full shadow-md backdrop-blur-xs transition-colors z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image Indicator Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/40 backdrop-blur-xs px-3.5 py-2 rounded-full z-10">
                        {currentProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIdx(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeImageIdx ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Photo counter */}
                      <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                        Photo {activeImageIdx + 1} of {totalImages}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Narrative Content */}
              <div className="space-y-6">
                {currentProject.content.map((block, idx) => {
                  if (block.type === 'heading') {
                    const level = block.level || 2;
                    return (
                      <h3 key={idx} className="text-xl sm:text-2xl font-heading font-black text-slate-800 mt-10 mb-4 leading-snug">
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === 'list') {
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-3 mb-6 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                        {block.items?.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {/* Key Features Block (If present) */}
              {currentProject.keyFeatures && currentProject.keyFeatures.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-200/50">
                  <h3 className="text-xl font-heading font-black text-slate-800 flex items-center gap-2">
                    <CheckCircle className="text-brand-primary w-5 h-5" />
                    Key Plant Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/40">
                        <span className="h-5 w-5 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-600 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scope of Work Block (If present) */}
              {currentProject.scopeOfWork && currentProject.scopeOfWork.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-200/50">
                  <h3 className="text-xl font-heading font-black text-slate-800 flex items-center gap-2">
                    <FileText className="text-brand-primary w-5 h-5" />
                    Scope of Project Execution
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProject.scopeOfWork.map((scope, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/40">
                        <span className="h-5 w-5 bg-brand-secondary/15 text-brand-secondary rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          ➔
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-600 leading-snug">{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Side: Plant Details/Specifications Sidebar (Col Span 1) */}
            <div className="space-y-6">
              
              {/* Client spec card */}
              <div className="bg-brand-primary/95 text-white p-8 rounded-[28px] shadow-sm space-y-6">
                <div>
                  <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase block mb-1">
                    Installation Specs
                  </span>
                  <h3 className="text-xl font-heading font-black">
                    Project Reference
                  </h3>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  {/* Client */}
                  <div className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-brand-tertiary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-black uppercase text-brand-tertiary/80 tracking-wider">Client</div>
                      <div className="text-sm font-black">{currentProject.client}</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-tertiary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-black uppercase text-brand-tertiary/80 tracking-wider">Location</div>
                      <div className="text-sm font-black">{currentProject.location}</div>
                    </div>
                  </div>

                  {/* Capacity */}
                  {currentProject.capacity && (
                    <div className="flex items-start gap-3">
                      <Box className="w-5 h-5 text-brand-tertiary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-black uppercase text-brand-tertiary/80 tracking-wider">Milling Capacity</div>
                        <div className="text-sm font-black">{currentProject.capacity}</div>
                      </div>
                    </div>
                  )}

                  {/* Grinding Tech */}
                  {currentProject.technology && (
                    <div className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-brand-tertiary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-black uppercase text-brand-tertiary/80 tracking-wider">Milling Technology</div>
                        <div className="text-sm font-black">{currentProject.technology}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20turnkey%20plant%20solutions%20similar%20to%20your%20project%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-secondary text-brand-foreground hover:bg-brand-secondary/90 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <Phone className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>

              {/* Training section notice block */}
              <div className="bg-white border border-slate-200/50 p-6 rounded-[24px] space-y-3">
                <h4 className="text-sm font-heading font-black text-slate-800">
                  Choyal School of Milling
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  We support skill development and operator training for reference project teams at our specialized training center in Ajmer, India.
                </p>
                <Link
                  href="/about#training"
                  className="inline-flex items-center gap-1 text-xs font-black text-brand-primary hover:text-brand-secondary uppercase tracking-wider pt-1 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
