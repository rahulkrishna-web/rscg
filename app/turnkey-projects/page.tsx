"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Settings, 
  Cpu, 
  Layers, 
  Activity, 
  Building,
  CheckCircle,
  FileText,
  Workflow,
  Wrench,
  Users,
  RefreshCw,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  X,
  Maximize2,
  BarChart3,
  MapPin
} from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function TurnkeyProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectCapabilities = [
    {
      id: 1,
      title: "Consultancy",
      desc: "Capacity planning, process flow mapping, and site feasibility for efficient plant execution.",
      image: "/images/turnkey/scope/Consultancy.jpg",
      icon: <Building className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Field Layout Design",
      desc: "3D plant layouts optimized for grain flow, space use, utility routing, and maintainability.",
      image: "/images/turnkey/scope/field layout design.jpg",
      icon: <Workflow className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Engineering Design",
      desc: "Mechanical, structural, utility, and process engineering for reliable plant execution.",
      image: "/images/turnkey/scope/engineering design.jpg",
      icon: <Settings className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Fabrication",
      desc: "Complete plant fabrication, including steel structures, silos, air ducts, elevator casings, and PEB buildings.",
      image: "/images/turnkey/scope/fabricaton.jpg",
      icon: <Wrench className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Erection & Commissioning",
      desc: "On-site erection, dry runs, testing, and commissioning support for smooth plant start-up.",
      image: "/images/turnkey/scope/Erection & commissioning.jpg",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Training",
      desc: "Hands-on training for millers, operators, and maintenance teams on efficient plant operation.",
      image: "/images/turnkey/scope/Training.jpg",
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Automation",
      desc: "Process and plant automation with PLC controls, sensors, digital monitoring, and intelligent systems.",
      image: "/images/turnkey/scope/Automation.jpg",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Retro-Fitting",
      desc: "Upgrade legacy mills with digital mills, VFD drives, digital monitoring, and smarter controls.",
      image: "/images/turnkey/scope/retro fitting.jpg",
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      id: 9,
      title: "Product Development",
      desc: "Product and recipe development support with process optimization and quality improvement.",
      image: "/images/turnkey/scope/product development.jpg",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  const turnkeySolutions = [
    { title: "Whole Wheat Atta Plant", image: "/images/turnkey/capabilities/atta plant.jpg" },
    { title: "Gram Flour (Besan) Plant", image: "/images/turnkey/capabilities/GRAM FLOUR.jpg" },
    { title: "Soya Pulse Plant", image: "/images/turnkey/capabilities/SOYA PULSE.jpg" },
    { title: "Multi Grain Flour Grinding Plant", image: "/images/turnkey/capabilities/MULTIGRAIN Flour.jpg" },
    { title: "Spices & Herbal Grinding Plant", image: "/images/turnkey/capabilities/spices & herbs.jpg" },
    { title: "Pulse Plant", image: "/images/turnkey/capabilities/pulses.jpg" },
    { title: "Flour & Spice Blending System", image: "/images/turnkey/capabilities/flour & spice bending.jpg" },
    { title: "Quinoa Plant", image: "/images/turnkey/capabilities/quinoa.jpg" },
    { title: "Semolina Plant", image: "/images/turnkey/capabilities/semolina.jpg" },
    { title: "Teff Plant", image: "/images/turnkey/capabilities/teff.jpg" },
    { title: "Maida Plant", image: "/images/turnkey/capabilities/maida.jpg" },
    { title: "Psyllium Husk Plant", image: "/images/turnkey/capabilities/psyillum husk.jpg" }
  ];

  const highlightedProjects = [
    {
      title: "Carr's Flour Green Maldon",
      desc: "40 TPD atta plant",
      location: "United Kingdom",
      image: "/images/projects/case_studies/thumbnails/carr_flourmill.jpg",
      logo: "/images/projects/case_studies/logos/carr_flour_mill.png",
      slug: "carrs-flour-uk"
    },
    {
      title: "Al Ghurair Foods",
      desc: "120 TPD atta plant",
      location: "Dubai, UAE",
      image: "/images/projects/case_studies/thumbnails/Alghuriar.jpg",
      logo: "/images/projects/case_studies/logos/al_ghurair.png",
      slug: "al-ghurair-foods-dubai-uae"
    },
    {
      title: "Bakhresa Group",
      desc: "40 TPD atta plant",
      location: "Tanzania, East Africa",
      image: "/images/projects/case_studies/thumbnails/bakhresa.jpg",
      logo: "/images/projects/case_studies/logos/bakhresa.png",
      slug: "bakhresa-group-tanzania"
    },
    {
      title: "Winnie's pure health",
      desc: "40 TPD atta plant",
      location: "Kenya, East Africa",
      image: "/images/projects/case_studies/thumbnails/winnie_pure_health.jpg",
      logo: "/images/projects/case_studies/logos/winnie_pure_health.png",
      slug: "winnies-pure-health-kenya"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>
      
      {/* Header */}
      <Header onRequestCallback={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="w-full relative z-10 bg-[#06331C] text-white py-20 lg:py-28 overflow-hidden">
        {/* Full-bleed Right Image with Gradient Mask */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#06331C] via-[#06331C]/90 to-transparent z-10"></div>
          <Image 
            src="/images/plants/turnkey_solutions.webp" 
            alt="RS Choyal Turnkey Plant Rendering" 
            fill
            className="object-cover object-left scale-[1.15] origin-left"
            priority
          />
        </div>

        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20">
          <div className="max-w-2xl space-y-8">
            
            <div className="flex items-center gap-4">
              <span className="text-brand-tertiary font-bold text-xs tracking-widest uppercase">
                Turnkey Projects Division
              </span>
              <div className="h-[1px] w-12 bg-brand-tertiary"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold tracking-tight leading-[1.1] text-white">
              Turnkey <span className="text-brand-tertiary">Projects.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Customized and automated solutions for grain cleaning, grinding, and sorting plants up to 1000 TPD capacity, delivered end-to-end.
            </p>
            
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-brand-tertiary text-brand-tertiary hover:bg-brand-tertiary hover:text-slate-900 rounded text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature Icons Row */}
            <div className="pt-10 flex flex-wrap items-center gap-y-6 gap-x-6 sm:gap-x-8 lg:gap-x-12 border-t border-white/10 mt-8">
              
              <div className="flex items-center gap-3 sm:gap-4">
                <Maximize2 className="h-5 w-5 sm:h-6 sm:w-6 text-brand-tertiary" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider leading-tight uppercase">
                  From Concept<br/>To Commissioning
                </span>
              </div>
              
              <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-brand-tertiary" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider leading-tight uppercase">
                  Up To<br/>1000 TPD
                </span>
              </div>
              
              <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <RefreshCw className="h-5 w-5 sm:h-6 sm:w-6 text-brand-tertiary" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider leading-tight uppercase">
                  End-To-End<br/>Plant Solutions
                </span>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* Intro details */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c2722]">
            Engineering the Future of Smart Flour Milling
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At RS Choyal, our turnkey projects are designed with state-of-the-art technologies that set new benchmarks in the milling industry. We combine **60+ years of grinding heritage** with modern electronics to engineer plants that achieve up to **30% electricity savings**, optimized layout flows, low maintenance, and exceptionally clean, dust-free operations.
          </p>
        </div>
      </section>

      {/* End-to-End Project Capabilities Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/40 border-t border-b border-slate-200/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              End-to-End Project Capabilities
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              From concept to commissioning, we deliver turnkey grain processing and flour milling solutions built for performance, efficiency, and long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projectCapabilities.map((cap) => (
              <div 
                key={cap.id} 
                className="bg-white rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:border-brand-secondary/40 hover:shadow-md transition-all duration-300 flex flex-row group"
              >
                {/* Image Half */}
                <div className="w-[40%] relative shrink-0 min-h-[160px]">
                  <Image 
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content Half */}
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      {cap.icon}
                    </div>
                    <h3 className="text-[13px] sm:text-sm font-bold text-slate-800 leading-tight">
                      {cap.id}. {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Solutions Available For Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Versatile Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Turnkey Solutions Available For
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We design and build plants for a wide range of agricultural and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {turnkeySolutions.map((sol, idx) => (
              <div 
                key={idx} 
                className="flex items-center p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all duration-200"
              >
                <div className="w-16 h-16 relative flex-shrink-0 mr-4 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                  <Image src={sol.image} alt={sol.title} fill className="object-cover" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">{sol.title}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/40 border-t border-b border-slate-200/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Our completed installations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Our Turnkey Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {highlightedProjects.map((proj, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="sm:w-[40%] h-48 sm:h-auto relative overflow-hidden bg-slate-100 flex-shrink-0">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-tight mb-2">
                        {proj.title}
                      </h3>
                      <div className="flex items-center text-xs font-bold text-slate-500 gap-1 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                        {proj.location}
                      </div>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="h-8 relative w-24">
                      <Image src={proj.logo} alt={proj.title} fill className="object-contain object-left" />
                    </div>
                    <Link 
                      href={`/projects/${proj.slug}`} 
                      className="text-xs font-black text-brand-primary uppercase tracking-wider flex items-center gap-1.5 hover:text-brand-secondary transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Footer */}
      <Footer />

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

    </div>
  );
}
