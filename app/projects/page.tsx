"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight, Factory, Box } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "./projectsData";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    '/images/projects/hero/hero1.jpg',
    '/images/projects/hero/hero2.jpg',
    '/images/projects/hero/hero3.jpg',
    '/images/projects/hero/hero4.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Helper to extract first paragraph as excerpt
  const getExcerpt = (contentArray: any[]) => {
    // Find the first paragraph that has actual content and isn't just a label
    const validParagraphs = contentArray.filter(c => 
      c.type === 'paragraph' && 
      c.text && 
      c.text.length > 30 &&
      !c.text.toLowerCase().includes('project overview:')
    );
    
    if (validParagraphs.length > 0) {
      const text = validParagraphs[0].text;
      return text.length > 130 ? text.substring(0, 127) + "..." : text;
    }
    return "";
  };

  // Filter projects based on search query matching title, location, client, or content
  const filteredProjects = projectsData.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesClient = project.client.toLowerCase().includes(query);
    const matchesLocation = project.location.toLowerCase().includes(query);
    const matchesContent = project.content.some(
      (paragraph) => 
        paragraph.text?.toLowerCase().includes(query) || 
        paragraph.items?.some(i => i.toLowerCase().includes(query))
    );
    return matchesTitle || matchesClient || matchesLocation || matchesContent;
  });

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[350px] sm:h-[450px] overflow-hidden flex flex-col justify-center bg-[#0D301F]">
          {/* Background Slideshow */}
          {heroImages.map((src, index) => (
            <div 
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#0B2C1C] from-0% via-[#0B2C1C]/70 via-[30%] to-transparent lg:to-[60%] z-10 w-full" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-center">
            <div className="space-y-4 max-w-xl">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase block">
                CASE STUDIES & PROJECTS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
                Transforming Ideas into Reality
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-2">
                From concept to completion, discover the projects we've successfully executed with precision and expertise.
              </p>
              <div className="w-10 h-0.5 bg-[#D3994B] mt-6" />
            </div>
          </div>
        </section>

        {/* Main Listing Section */}
        <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24 z-10">
          {/* Breadcrumbs & Search bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-200/50">
            <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-600">Our Projects</span>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 bg-white rounded-2xl border border-slate-200/60 p-1 shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search projects by country, client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm bg-slate-50 border border-slate-100 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200/50 p-16 text-center text-slate-500 space-y-4 max-w-lg mx-auto">
              <Factory className="h-12 w-12 mx-auto text-slate-300" />
              <h3 className="text-lg font-bold text-slate-800">No installations found</h3>
              <p className="text-sm text-slate-400">No project case studies matched your query. Try searching for a different region or client.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project) => {
                const coverImage = project.images.length > 0 ? project.images[0] : "/images/plants/turnkey_solutions_cropped.webp";
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group cursor-pointer flex flex-col h-full space-y-4"
                  >
                    {/* Cover Image */}
                    <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={coverImage}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/plants/turnkey_solutions.webp";
                        }}
                      />
                    </div>

                    {/* Metadata and Content */}
                    <div className="flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2 text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                          <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                          <span>{project.location || "Global"}</span>
                        </div>
                        <h3 className="text-2xl font-heading font-black text-slate-800 group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight">
                          {project.title}
                        </h3>
                        {project.capacity && (
                          <div className="text-xs font-bold text-[#133020] flex items-start gap-1.5 bg-slate-100/50 p-2.5 rounded-lg border border-slate-100">
                            <Box className="w-4 h-4 text-brand-primary flex-shrink-0" />
                            <span className="leading-snug">{project.capacity}</span>
                          </div>
                        )}
                        <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-3 font-medium">
                          {getExcerpt(project.content)}
                        </p>
                      </div>

                      <div className="pt-3 flex items-center gap-1.5 text-xs font-black text-brand-primary group-hover:text-[#D3994B] transition-colors uppercase tracking-widest">
                        <span>View Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
