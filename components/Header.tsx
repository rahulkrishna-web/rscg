"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Factory, 
  Workflow, 
  Layers, 
  Cpu, 
  Zap, 
  Database, 
  Filter, 
  ShoppingBag, 
  BookOpen,
  Info,
  Users,
  Eye,
  Heart,
  Milestone,
  Landmark,
  HelpCircle,
  Network,
  Building,
  Lightbulb,
  Briefcase,
  Shield,
  RefreshCw,
  Handshake,
  GraduationCap,
  Globe,
  Palette,
  ArrowRight
} from "lucide-react";
import { useQuote } from "./QuoteContext";

interface HeaderProps {
  onRequestCallback?: () => void;
}

export default function Header({ onRequestCallback }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop Hover states
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Mobile Accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const { quoteItems, setIsDrawerOpen } = useQuote();
  const totalQuoteItems = quoteItems.reduce((acc, item) => acc + item.qty, 0);

  // Fully opaque paper / book texture style
  const paperTextureStyle = {
    backgroundColor: "#F9F6F0",
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
  };

  const aboutItems = [
    { name: "About Us", desc: "Our history, milestones, and corporate profile.", href: "/about#about-us", icon: Info },
    { name: "Leadership", desc: "Meet the directors and management driving the vision.", href: "/about#leadership", icon: Users },
    { name: "Mission & Vision", desc: "Innovating sustainable solutions for global grain milling.", href: "/about#mission-vision", icon: Eye },
    { name: "Our Philosophy", desc: "Quality-first abrasive grinding design & production.", href: "/about#philosophy", icon: Heart },
    { name: "Research & Development", desc: "Advanced metallurgy labs and automation test divisions.", href: "/about#research-development", icon: Milestone },
    { name: "Social Responsibility", desc: "Community empowerment and ecological sustainability.", href: "/about#social-responsibility", icon: Landmark },
    { name: "Why RSC Group", desc: "Trusted by commercial mill owners across 20+ countries.", href: "/about#why-rsc", icon: HelpCircle },
    { name: "Our Network", desc: "Worldwide sales office, AMCs, and distribution network.", href: "/about#network", icon: Network },
    { name: "Our Infrastructure", desc: "Two heavy engineering works facilities at Ajmer.", href: "/about#infrastructure", icon: Building },
    { name: "Our Innovations", desc: "Digital systems, computerized chakkis, and IoT solutions.", href: "/about#innovations", icon: Lightbulb },
  ];

  const productCategories = [
    { name: "Turnkey Solutions", desc: "Complete customized flour milling plants from design to commissioning.", href: "/turnkey-projects", icon: Factory },
    { name: "Flour Mill", desc: "Digital, automatic, vertical, and traditional chakki mills.", href: "/flour-mills", icon: Workflow },
    { name: "Emery Stones", desc: "Daniya and Danish style emery stones for premium cold-grinding.", href: "/emery-stones", icon: Layers },
    { name: "Automation", desc: "Wonder Miller PLC system and computerized plant controllers.", href: "/automation", icon: Cpu },
    { name: "Power Saving", desc: "iQuadra smart mills and energy-efficient conveying systems.", href: "/power-saving", icon: Zap },
    { name: "Grain Storage & Handling", desc: "Heavy-duty steel silos, load cells, and distribution networks.", href: "/grain-storage-handling", icon: Database },
    { name: "Grain Processing", desc: "High-efficiency scourers, polishers, and entoletors.", href: "/grain-processing", icon: Filter },
    { name: "Vending Machines", desc: "Floura fresh stone-ground flour on-demand vending machines.", href: "/vending-machines", icon: ShoppingBag },
    { name: "Books", desc: "Industry-standard guides and publications by RS Choyal.", href: "/books", icon: BookOpen },
  ];

  const serviceItems = [
    { name: "Grain 360", desc: "End-to-end consulting for complete mill setup and auditing.", href: "/choyal-360", icon: Briefcase },
    { name: "Facility Centre", desc: "Custom trial runs and manufacturing scale tests.", href: "/facility-centre", icon: Shield },
    { name: "Job Grinding", desc: "Contract flour grinding and abrasive dressing services.", href: "/job-grinding", icon: RefreshCw },
    { name: "Consultancy", desc: "Expert advisory for efficiency and capacity expansions.", href: "/consultancy", icon: Handshake },
    { name: "Training", desc: "On-site operator certification and maintenance guidance.", href: "/training", icon: GraduationCap },
    { name: "Web Solutions", desc: "Digital systems design, IoT monitoring, and cloud telemetry.", href: "/web-solutions", icon: Globe },
    { name: "Design & Media", desc: "Plant 3D modeling, layout architecture, and documentation.", href: "/design-media", icon: Palette },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-brand-bg/60 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 relative">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 flex justify-between items-center h-20 sm:h-24">
        
        {/* Brand Logos */}
        <div className="flex flex-row items-center select-none h-full">
          <Link href="/" className="inline-flex hover:scale-102 transition-transform">
            <img 
              src="/rschoyal-logo.svg" 
              alt="RS Choyal Group Logo" 
              className="h-[56px] sm:h-[70px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          
          {/* ABOUT US Dropdown */}
          <div 
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
            className="h-full flex items-center"
          >
            <button className="flex items-center gap-1 text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer focus:outline-none h-full">
              About Us
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isAboutOpen && (
              <div 
                style={paperTextureStyle}
                className="absolute top-full left-0 w-full border-b border-slate-200/80 shadow-2xl z-50 animate-fade-in"
              >
                <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 grid grid-cols-12 gap-8 max-w-[1440px] mx-auto">
                  <div className="col-span-9 grid grid-cols-3 gap-6">
                    {aboutItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group border border-transparent hover:border-brand-primary/5"
                        >
                          <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm group-hover:text-brand-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  {/* Feature highlight box */}
                  <div className="col-span-3 bg-white/80 border border-brand-primary/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-brand-primary tracking-widest uppercase">RSC Group Heritage</span>
                      <h5 className="font-bold text-slate-800 text-base leading-snug">60+ Years of Grinding Excellence</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Pioneering advanced abrasive casting and industrial mill solutions since 1968.
                      </p>
                    </div>
                    <Link href="/about#about-us" className="text-xs font-bold text-brand-primary flex items-center gap-1 mt-6 hover:underline">
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PRODUCTS Dropdown */}
          <div 
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
            className="h-full flex items-center"
          >
            <button className="flex items-center gap-1 text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer focus:outline-none h-full">
              Products
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isProductsOpen && (
              <div 
                style={paperTextureStyle}
                className="absolute top-full left-0 w-full border-b border-slate-200/80 shadow-2xl z-50 animate-fade-in"
              >
                <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 grid grid-cols-12 gap-8 max-w-[1440px] mx-auto">
                  <div className="col-span-9 grid grid-cols-3 gap-6">
                    {productCategories.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group border border-transparent hover:border-brand-primary/5"
                        >
                          <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm group-hover:text-brand-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  {/* Feature highlight box */}
                  <div className="col-span-3 bg-white/80 border border-brand-primary/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-brand-primary tracking-widest uppercase">Smart Grinding</span>
                      <h5 className="font-bold text-slate-800 text-base leading-snug">Wonder Miller Automation</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Transforming manual mills with computerized smart controllers and load sensors.
                      </p>
                    </div>
                    <Link href="/catalog" className="text-xs font-bold text-brand-primary flex items-center gap-1 mt-6 hover:underline">
                      <span>View Full Catalog</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SERVICES Dropdown */}
          <div 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="h-full flex items-center"
          >
            <button className="flex items-center gap-1 text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer focus:outline-none h-full">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isServicesOpen && (
              <div 
                style={paperTextureStyle}
                className="absolute top-full left-0 w-full border-b border-slate-200/80 shadow-2xl z-50 animate-fade-in"
              >
                <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 grid grid-cols-12 gap-8 max-w-[1440px] mx-auto">
                  <div className="col-span-9 grid grid-cols-3 gap-6">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group border border-transparent hover:border-brand-primary/5"
                        >
                          <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm group-hover:text-brand-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  {/* Feature highlight box */}
                  <div className="col-span-3 bg-white/80 border border-brand-primary/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-brand-primary tracking-widest uppercase">Expert Consulting</span>
                      <h5 className="font-bold text-slate-800 text-base leading-snug">Turnkey 360 Milling Support</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Custom design layouts, operator certification, and system audit checks.
                      </p>
                    </div>
                    <Link href="/turnkey-projects" className="text-xs font-bold text-brand-primary flex items-center gap-1 mt-6 hover:underline">
                      <span>Contact Us</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/news" 
            className="h-full flex items-center text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer"
          >
            News
          </Link>
          <Link 
            href="/projects" 
            className="h-full flex items-center text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer"
          >
            Our Projects
          </Link>
          <Link 
            href="/contact" 
            className="h-full flex items-center text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer"
          >
            Contact Us
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4 h-full">
          
          {/* Global Quote List Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 hover:border-brand-primary/30 transition-all duration-200 cursor-pointer text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-primary"
            aria-label="Open Quote List"
          >
            <ShoppingBag className="h-4 w-4 text-brand-primary" />
            <span className="hidden md:inline">Quote List</span>
            {totalQuoteItems > 0 && (
              <span className="flex items-center justify-center bg-brand-tertiary text-slate-900 text-[10px] font-black w-5 h-5 rounded-full shadow-sm animate-scale-in">
                {totalQuoteItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-brand-primary focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-brand-bg border-b border-slate-200/80 px-6 py-6 absolute top-full left-0 z-40 space-y-4 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            
            {/* Mobile Accordion for About Us */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-brand-primary transition-colors focus:outline-none text-left py-1"
              >
                <span>About Us</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="grid grid-cols-1 gap-1 mt-2 pl-4 border-l-2 border-slate-100">
                  {aboutItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-brand-primary"
                      >
                        <Icon className="h-4 w-4 text-brand-primary" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Accordion for Products */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-brand-primary transition-colors focus:outline-none text-left py-1"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="grid grid-cols-1 gap-1 mt-2 pl-4 border-l-2 border-slate-100">
                  {productCategories.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-brand-primary"
                      >
                        <Icon className="h-4 w-4 text-brand-primary" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Accordion for Services */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-brand-primary transition-colors focus:outline-none text-left py-1"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="grid grid-cols-1 gap-1 mt-2 pl-4 border-l-2 border-slate-100">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-brand-primary"
                      >
                        <Icon className="h-4 w-4 text-brand-primary" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-brand-primary transition-colors"
            >
              News
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-brand-primary transition-colors"
            >
              Our Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="text-base font-bold text-slate-800 hover:text-brand-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
          
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRequestCallback) onRequestCallback();
              }}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-5 rounded-xl shadow-md text-center text-sm cursor-pointer"
            >
              Request a Callback
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
