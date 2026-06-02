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
  X
} from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function TurnkeyProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scopeOfWork = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Consultancy",
      desc: "Expert plant layout planning tailored to capacity requirements, processing flows, and site limits."
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Plant Layout Design",
      desc: "Full 3D computer-aided layout engineering for smooth grain flow, optimized space, and low maintenance."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Engineering Design",
      desc: "Advanced mechanical engineering, structural details, utility planning, and process logic configurations."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Fabrication",
      desc: "Heavy-duty manufacturing of steel columns, plant structures, elevator casings, silos, and air duct systems."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Erection & Commissioning",
      desc: "Precise mechanical/electrical on-site assembly, sensor wiring, test dry-runs, and commercial trials."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Training",
      desc: "Detailed hands-on training for client millers, operators, and maintenance teams on HMI panels."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Automation",
      desc: "Integration of smart touch HMI panels, computerized PLC software (Wonder Miller), and sensor feedback."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Retro-Fitting",
      desc: "Upgrading existing legacy stone mills with smart VFD drives, automatic stone gap controls, and silos."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Product Development",
      desc: "Continuous research on optimizing flour moisture, minimizing starch damage, and improving color."
    }
  ];

  const turnkeySolutions = [
    "Atta / Flour / Semolina Mill",
    "Maize / Corn Flour Grinding Plant",
    "Spices / Herbs Grinding Plant",
    "Besan / Pulse Milling Plant",
    "Rice / Grain Cleaning & Grading",
    "Feed Mills / Animal Feed",
    "Chemicals Grinding",
    "Minerals & Ores Grinding",
    "Salt / Sugar Grinding",
    "Glass Powder / Quartz Grinding",
    "Wood / Biomass Grinding",
    "Guar Gum / Starch Processing"
  ];

  const highlightedProjects = [
    {
      title: "Atta Mill Projects",
      desc: "Fully automatic 150+ TPD commercial whole wheat grinding plant featuring smart Wonder Mill setups and dust-free environments.",
      image: "/images/plants/150_ton_per_day_atta_plant.webp"
    },
    {
      title: "Spices Grinding Projects",
      desc: "Custom low-temperature grinding plants for coriander, chili, turmeric, and dry herbs preserving organic oil content.",
      image: "/images/plants/40_tpd_milling.webp"
    },
    {
      title: "Grain Cleaning Projects",
      desc: "Multi-stage pre-cleaners, destoners, and classifier separators engineered to clean raw wheat at high capacities.",
      image: "/images/plants/turnkey_solutions.webp"
    },
    {
      title: "Specialty Grinding",
      desc: "Heavy-duty industrial setups for quartz powder, minerals, biomass, and starch processing plants deployed globally.",
      image: "/images/plants/dubai_plant.webp"
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
      <section className="w-full relative z-10 bg-brand-primary text-white py-16 lg:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,172,127,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex bg-brand-tertiary/20 text-brand-tertiary border border-brand-tertiary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Turnkey Projects Division
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Turnkey Projects
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
              Customized & automated solutions for grain cleaning, grinding & sorting plants up to 1000 TPD capacity on turnkey basis.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/images/plants/turnkey_solutions.webp" 
              alt="RS Choyal Turnkey Plant Rendering" 
              fill
              className="object-cover"
              priority
            />
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

      {/* Scope of Work Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/40 border-t border-b border-slate-200/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Scope of Work
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We guide plant owners through every single phase of development, offering a complete design-build cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeOfWork.map((scope, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xs hover:border-brand-secondary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  {scope.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-brand-primary transition-colors">
                  {scope.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {scope.desc}
                </p>
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
              We design and construct grinding and grading plants for a massive variety of agricultural and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {turnkeySolutions.map((sol, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200/60 shadow-xs hover:shadow-md hover:border-brand-primary/20 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-brand-tertiary/20 flex items-center justify-center text-brand-tertiary flex-shrink-0 text-xs font-bold">✓</div>
                <span className="text-sm sm:text-base font-bold text-slate-700">{sol}</span>
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
              Realized Installations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Our Turnkey Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightedProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="relative w-full sm:w-[45%] h-56 sm:h-auto min-h-[220px]">
                  <Image 
                    src={proj.image} 
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-primary transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    <span>Request Info</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
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
