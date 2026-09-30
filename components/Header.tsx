"use client";

import { useState, useEffect } from "react";
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

export interface SubmenuItem {
  id: string;
  label: string;
}

interface HeaderProps {
  onRequestCallback?: () => void;
  submenu?: {
    items: SubmenuItem[];
    activeId?: string;
    onItemClick: (id: string) => void;
  };
}

export default function Header({ onRequestCallback, submenu }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  
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
    { name: "About Us", desc: "Our history, milestones, and corporate profile.", href: "/about", icon: Info, imgIcon: "/images/about/about-navbar-icons/about.png" },
    { name: "Leadership", desc: "Meet the directors and management driving the vision.", href: "/about#leadership", icon: Users, imgIcon: "/images/about/about-navbar-icons/leadership.png" },
    { name: "Mission & Vision", desc: "Innovating sustainable solutions for global grain milling.", href: "/about#mission-vision", icon: Eye, imgIcon: "/images/about/about-navbar-icons/vision-and-mission.png" },
    { name: "Our Philosophy", desc: "Quality-first abrasive grinding design & production.", href: "/about#philosophy", icon: Heart, imgIcon: "/images/about/about-navbar-icons/philosophy.png" },
    { name: "Research & Development", desc: "Advanced metallurgy labs and automation test divisions.", href: "/about#research-development", icon: Milestone, imgIcon: "/images/about/about-navbar-icons/research.png" },
    { name: "Social Responsibility", desc: "Community empowerment and ecological sustainability.", href: "/about#social-responsibility", icon: Landmark, imgIcon: "/images/about/about-navbar-icons/social-responsibility.png" },
    { name: "Why RSC Group", desc: "Trusted by commercial mill owners across 20+ countries.", href: "/about#why-rsc", icon: HelpCircle, imgIcon: "/images/about/about-navbar-icons/why-rsc.png" },
    { name: "Our Network", desc: "Worldwide sales office, AMCs, and distribution network.", href: "/about#network", icon: Network, imgIcon: "/images/about/about-navbar-icons/our-network.png" },
    { name: "Our Infrastructure", desc: "Two heavy engineering works facilities at Ajmer.", href: "/about#infrastructure", icon: Building, imgIcon: "/images/about/about-navbar-icons/infrastructure.png" },
    { name: "Our Innovations", desc: "Digital systems, computerized chakkis, and IoT solutions.", href: "/about#innovations", icon: Lightbulb, imgIcon: "/images/about/about-navbar-icons/innovations.png" },
  ];

  const productCategories = [
    { name: "Turnkey Solutions", desc: "Complete customized flour milling plants from design to commissioning.", href: "/turnkey-projects", icon: Factory, imgIcon: "/navbar-icons/turnkey_solution.png" },
    { name: "Flour Mill", desc: "Digital, automatic, vertical, and traditional chakki mills.", href: "/flour-mills", icon: Workflow, imgIcon: "/navbar-icons/flour_mill.png" },
    { name: "Emery Stones", desc: "Daniya and Danish style emery stones for premium cold-grinding.", href: "/emery-stones", icon: Layers, imgIcon: "/navbar-icons/emerystone.png" },
    { name: "Automation", desc: "Wonder Miller PLC system and computerized plant controllers.", href: "/automation", icon: Cpu, imgIcon: "/navbar-icons/automation.png" },
    { name: "Power Saving", desc: "iQuadra smart mills and energy-efficient conveying systems.", href: "/power-saving", icon: Zap, imgIcon: "/navbar-icons/power_saving.png" },
    { name: "Grain Storage & Handling", desc: "Heavy-duty steel silos, load cells, and distribution networks.", href: "/grain-storage-handling", icon: Database, imgIcon: "/navbar-icons/grain_storage.png" },
    { name: "Grain Processing", desc: "High-efficiency scourers, polishers, and entoletors.", href: "/grain-processing", icon: Filter, imgIcon: "/navbar-icons/grain_process.png" },
    { name: "Flour Processing", desc: "Engineered flour processing solutions.", href: "/flour-processing", icon: Workflow, imgIcon: "/navbar-icons/flourprocess.png" },
    { name: "Vending Machines", desc: "Floura fresh stone-ground flour on-demand vending machines.", href: "/vending-machines", icon: ShoppingBag, imgIcon: "/navbar-icons/vending_machine.png" },
    { name: "Books", desc: "Industry-standard guides and publications by RS Choyal.", href: "/books", icon: BookOpen, imgIcon: "/navbar-icons/book.png" },
  ];

  const serviceItems = [
    { name: "Grain 360", desc: "End-to-end consulting for complete mill setup and auditing.", href: "/choyal-360", icon: Briefcase, imgIcon: "/icons/services/grain360.png" },
    { name: "Facility Centre", desc: "Custom trial runs and manufacturing scale tests.", href: "/facility-centre", icon: Shield, imgIcon: "/icons/services/facilitycenter.png" },
    { name: "Job Grinding", desc: "Contract flour grinding and abrasive dressing services.", href: "/job-grinding", icon: RefreshCw, imgIcon: "/icons/services/jobgrinding.png" },
    { name: "Consultancy", desc: "Expert advisory for efficiency and capacity expansions.", href: "/consultancy", icon: Handshake, imgIcon: "/icons/services/consultancy.png" },
    { name: "Training", desc: "On-site operator certification and maintenance guidance.", href: "/training", icon: GraduationCap, imgIcon: "/icons/services/training.png" },
    { name: "Design & Media", desc: "Plant 3D modeling, layout architecture, and documentation.", href: "/design-media", icon: Palette, imgIcon: "/icons/services/design_and_media.png" },
  ];

  const isAnyMenuOpen = isAboutOpen || isProductsOpen || isServicesOpen || mobileMenuOpen || mobileSubmenuOpen;
  const mbClass = submenu ? "-mb-[120px] sm:-mb-[126px] lg:-mb-[132px]" : "-mb-[94px] sm:-mb-[110px]";

  useEffect(() => {
    if (!mobileSubmenuOpen) return;
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-submenu-container")) {
        setMobileSubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [mobileSubmenuOpen]);

  return (
    <header className={`w-full sticky top-0 z-50 p-[5px] ${mbClass} transition-all duration-300 relative pointer-events-none`}>
      <div className={`w-full bg-white rounded-t-xl ${isAnyMenuOpen ? "rounded-b-none" : "rounded-b-xl"} shadow-xs border border-slate-200/80 relative pointer-events-auto transition-all`}>
        
        {/* Top Navbar Row */}
        <div className={`w-full px-6 sm:px-12 lg:px-16 xl:px-24 flex justify-between items-center ${submenu ? "h-16 lg:h-18" : "h-20 sm:h-24"}`}>
          {/* Brand Logos */}
          <div className="flex flex-row items-center select-none h-full">
            <Link href="/" className="inline-flex hover:scale-102 transition-transform">
              <img 
                src="/rscg.png" 
                alt="RS Choyal Group Logo" 
                className={submenu ? "h-[46px] sm:h-[52px] lg:h-[58px] w-auto object-contain" : "h-[56px] sm:h-[70px] w-auto object-contain"}
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
                className="absolute top-full -left-[1px] -right-[1px] w-[calc(100%+2px)] border-x border-b border-slate-200/80 rounded-b-2xl shadow-2xl z-50 animate-fade-in overflow-hidden"
              >
                <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 grid grid-cols-12 gap-8 max-w-[1440px] mx-auto">
                  <div className="col-span-12 grid grid-cols-3 lg:grid-cols-4 gap-6">
                    {aboutItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => {
                            setIsAboutOpen(false);
                            if (item.href === "/about" && typeof window !== "undefined" && window.location.pathname === "/about") {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group border border-transparent hover:border-brand-primary/5"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs group-hover:bg-brand-primary group-hover:border-brand-primary flex items-center justify-center p-2 transition-colors duration-300 flex-shrink-0">
                            {item.imgIcon ? (
                              <img src={item.imgIcon} alt={item.name} className="h-8 w-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            ) : (
                              <Icon className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                            )}
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
                className="absolute top-full -left-[1px] -right-[1px] w-[calc(100%+2px)] border-x border-b border-slate-200/80 rounded-b-2xl shadow-2xl z-50 animate-fade-in overflow-hidden"
              >
                <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 grid grid-cols-12 gap-8 max-w-[1440px] mx-auto">
                  <div className="col-span-12 grid grid-cols-3 gap-6">
                    {productCategories.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group border border-transparent hover:border-brand-primary/5"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs group-hover:bg-brand-primary group-hover:border-brand-primary flex items-center justify-center p-2 transition-colors duration-300 flex-shrink-0">
                            {item.imgIcon ? (
                              <img src={item.imgIcon} alt={item.name} className="h-8 w-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            ) : (
                              <Icon className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                            )}
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
                className="absolute top-full -left-[1px] -right-[1px] w-[calc(100%+2px)] border-x border-b border-slate-200/80 rounded-b-2xl shadow-2xl z-50 animate-fade-in overflow-hidden"
              >
                <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 grid grid-cols-12 gap-8 max-w-[1440px] mx-auto">
                  <div className="col-span-12 grid grid-cols-3 gap-6">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group border border-transparent hover:border-brand-primary/5"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs group-hover:bg-brand-primary group-hover:border-brand-primary flex items-center justify-center p-2 transition-colors duration-300 flex-shrink-0">
                            {item.imgIcon ? (
                              <img src={item.imgIcon} alt={item.name} className="h-8 w-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            ) : (
                              <Icon className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                            )}
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
            href="/downloads" 
            className="h-full flex items-center text-sm font-semibold uppercase text-slate-700 hover:text-brand-primary transition-colors cursor-pointer"
          >
            Downloads
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
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (!mobileMenuOpen) setMobileSubmenuOpen(false);
            }}
            className="lg:hidden p-2 text-slate-700 hover:text-brand-primary focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Submenu (Desktop Row & Mobile Pill) */}
      {submenu && (
        <>
          {/* Desktop Submenu Row */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 border-t border-slate-100/90 px-6 sm:px-12 lg:px-16 xl:px-24 h-10 overflow-x-auto no-scrollbar">
            {submenu.items.map((item) => {
              const isActive = submenu.activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => submenu.onItemClick(item.id)}
                  className={`text-[12.5px] xl:text-[13px] tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer relative py-1.5 ${
                    isActive
                      ? "font-bold text-brand-primary"
                      : "font-semibold text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Submenu Pill Bar */}
          <div
            id="mobile-submenu-container"
            className="lg:hidden relative border-t border-slate-100 px-4 sm:px-6 py-1.5 bg-slate-50/70 flex items-center justify-between"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider shrink-0">Section:</span>
              <button
                type="button"
                onClick={() => {
                  setMobileSubmenuOpen(!mobileSubmenuOpen);
                  if (!mobileSubmenuOpen) setMobileMenuOpen(false);
                }}
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200/90 shadow-2xs hover:border-brand-primary/40 px-3 py-1 rounded-full text-xs font-bold text-brand-primary cursor-pointer transition-all active:scale-95 min-w-0"
                aria-label="Toggle section selector"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate max-w-[170px] sm:max-w-[240px]">
                  {submenu.items.find((i) => i.id === submenu.activeId)?.label || submenu.items[0]?.label || "Jump to section"}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 shrink-0 ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <span className="text-[10px] font-semibold text-slate-400 shrink-0 ml-2">
              {(() => {
                const idx = submenu.items.findIndex((i) => i.id === submenu.activeId);
                return idx >= 0 ? `${idx + 1} of ${submenu.items.length}` : "";
              })()}
            </span>

            {/* Mobile Submenu Dropdown Popover */}
            {mobileSubmenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border-b border-x border-slate-200 shadow-xl rounded-b-xl z-50 p-2 max-h-64 overflow-y-auto animate-fade-in">
                <div className="flex flex-col gap-0.5">
                  {submenu.items.map((item, idx) => {
                    const isActive = submenu.activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          submenu.onItemClick(item.id);
                          setMobileSubmenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-left transition-colors cursor-pointer ${
                          isActive
                            ? "bg-brand-primary text-white font-bold"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono ${isActive ? "text-white/80" : "text-slate-400"}`}>
                            0{idx + 1}
                          </span>
                          <span>{item.label}</span>
                        </span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <div className="lg:hidden -left-[1px] -right-[1px] w-[calc(100%+2px)] bg-brand-bg border-x border-b border-slate-200/80 rounded-b-2xl px-6 py-6 absolute top-full z-40 space-y-4 shadow-xl animate-fade-in max-h-[80vh] overflow-y-auto pointer-events-auto">
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
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (item.href === "/about" && typeof window !== "undefined" && window.location.pathname === "/about") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-brand-primary group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center p-1.5 shrink-0 group-hover:bg-brand-primary transition-colors">
                          {item.imgIcon ? (
                            <img src={item.imgIcon} alt={item.name} className="h-6 w-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                          ) : (
                            <Icon className="h-5 w-5 text-brand-primary group-hover:text-white" />
                          )}
                        </div>
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
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-brand-primary group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center p-1.5 shrink-0 group-hover:bg-brand-primary transition-colors">
                          {item.imgIcon ? (
                            <img src={item.imgIcon} alt={item.name} className="h-6 w-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                          ) : (
                            <Icon className="h-5 w-5 text-brand-primary group-hover:text-white" />
                          )}
                        </div>
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
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-700 hover:text-brand-primary group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center p-1.5 shrink-0 group-hover:bg-brand-primary transition-colors">
                          {item.imgIcon ? (
                            <img src={item.imgIcon} alt={item.name} className="h-6 w-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                          ) : (
                            <Icon className="h-5 w-5 text-brand-primary group-hover:text-white" />
                          )}
                        </div>
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
              href="/downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-brand-primary transition-colors"
            >
              Downloads
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
                if (onRequestCallback) {
                  onRequestCallback();
                } else if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-callback-modal"));
                }
              }}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-5 rounded-xl shadow-md text-center text-sm cursor-pointer"
            >
              Request a Callback
            </button>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
