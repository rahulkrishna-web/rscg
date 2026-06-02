"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Globe, 
  Settings, 
  Cpu, 
  Layers, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight,
  X,
  Phone,
  Mail,
  MapPin,
  Building,
  Clock,
  Workflow,
  Filter,
  Database,
  BookOpen,
  Wheat,
  Flame,
  Store,
  Warehouse,
  Handshake,
  Lightbulb,
  Coins,
  History
} from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import { productsData, categoriesData } from "@/app/catalog/productsData";


interface GlowCardProps {
  children: React.ReactNode;
}

function GlowCard({ children }: GlowCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-brand-primary to-brand-secondary text-white border border-white/10 shadow-md shadow-black/[0.08] hover:shadow-lg hover:shadow-black/[0.12] transition-all duration-300">
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface ClientLogo {
  name: string;
  sub?: string;
  color: string;
  icon?: string;
  image?: string;
  isTesco?: boolean;
  isQfm?: boolean;
  isIffco?: boolean;
  isAzam?: boolean;
  isSquare?: boolean;
  isPatanjali?: boolean;
  isAashirvaad?: boolean;
  isItc?: boolean;
  isIndiaGate?: boolean;
  isShaktiBhog?: boolean;
  isMore?: boolean;
  isPillsbury?: boolean;
  isBirla?: boolean;
}

const internationalClients: ClientLogo[] = [
  { name: "Prima", sub: "Sri Lanka", color: "#d97706", image: "/images/clients/prima.jpg" },
  { name: "Al Ghurair Foods", sub: "UAE", color: "#581c87", icon: "💎" },
  { name: "Tesco", sub: "UK", color: "#dc2626", isTesco: true },
  { name: "QFM", sub: "Qatar", color: "#ea580c", isQfm: true },
  { name: "IFFCO", sub: "UAE", color: "#1e3a8a", image: "/images/clients/iffco.jpg" },
  { name: "SR Foods", sub: "Nepal", color: "#059669", icon: "🏔️" },
  { name: "Bakhresa", sub: "Tanzania", color: "#16a34a", image: "/images/clients/bakhresa.jpg" },
  { name: "Azam", sub: "Tanzania", color: "#1d4ed8", image: "/images/clients/azam.jpg" },
  { name: "PureHealth", sub: "UAE", color: "#0d9488", icon: "💚" },
  { name: "Eminent Group", sub: "Global", color: "#0f172a", icon: "⚡" },
  { name: "Il Molino", sub: "Ukraine", color: "#ca8a04", icon: "🥖" },
  { name: "Coralbell Global", sub: "Singapore", color: "#2563eb", icon: "🔔" },
  { name: "Square Group", sub: "Bangladesh", color: "#16a34a", isSquare: true },
  { name: "Choyal Foods", sub: "India", color: "#015435", icon: "🌾" },
  { name: "Carrs", sub: "UK", color: "#111827", image: "/images/clients/carrs.jpg" },
  { name: "Noor Ghazal", sub: "Global", color: "#ca8a04", image: "/images/clients/noorghazal.jpg" },
  { name: "Seroo", sub: "Global", color: "#ca8a04", image: "/images/clients/seroo.jpg" },
  { name: "Winnies", sub: "Global", color: "#ca8a04", image: "/images/clients/winnies.jpg" }
];

const indianClients: ClientLogo[] = [
  { name: "Patanjali", color: "#15803d", image: "/images/clients/patanjali.jpg" },
  { name: "Aashirvaad", color: "#b91c1c", isAashirvaad: true },
  { name: "ITC Limited", color: "#1d4ed8", image: "/images/clients/itc.jpg" },
  { name: "India Gate", color: "#78350f", image: "/images/clients/indiagate.jpg" },
  { name: "Shakti Bhog", color: "#ea580c", image: "/images/clients/shaktibhog.jpg" },
  { name: "Laxmi Bhog", color: "#c2410c", icon: "🌾" },
  { name: "Suprabhat", color: "#e11d48", icon: "🌅" },
  { name: "Armani", color: "#111827", image: "/images/clients/armania.jpg" },
  { name: "Hi-Tech Natural", color: "#0891b2", icon: "🍃" },
  { name: "Smart Wife", color: "#be185d", icon: "👩" },
  { name: "Aditya Birla", color: "#d97706", isBirla: true },
  { name: "Pillsbury", color: "#1d4ed8", image: "/images/clients/pillsbury.jpg" },
  { name: "Kanha", color: "#b91c1c", icon: "🕉️" },
  { name: "Bansal", color: "#0369a1", icon: "🏭" },
  { name: "More Retail", color: "#ea580c", isMore: true },
  { name: "Uttam Bite", color: "#e11d48", icon: "🍪" },
  { name: "Le Marche", color: "#15803d", icon: "🛒" },
  { name: "Rishta", color: "#b91c1c", icon: "🤝" },
  { name: "Tansukh", color: "#059669", icon: "😊" },
  { name: "Naga", color: "#1e3a8a", icon: "🌾" },
  { name: "Roxy", color: "#4f46e5", image: "/images/clients/roxy.jpg" },
  { name: "Jeeni", color: "#be185d", icon: "🌱" },
  { name: "Goyal Proteins", color: "#1e3a8a", icon: "🧪" },
  { name: "Simran", color: "#0369a1", icon: "🌾" },
  { name: "Godhum", color: "#ca8a04", image: "/images/clients/godhum.jpg" },
  { name: "Hindustan", color: "#ca8a04", image: "/images/clients/hindustan.jpg" },
  { name: "Kalyani", color: "#ca8a04", image: "/images/clients/kalyani.jpg" },
  { name: "Kitchen Express", color: "#ca8a04", image: "/images/clients/kitchenExpress.jpg" },
  { name: "TWF", color: "#ca8a04", image: "/images/clients/twf.jpg" }
];

function renderClientLogo(client: ClientLogo) {
  if (client.image) {
    return (
      <div className="flex items-center justify-center h-28 w-60 px-6 bg-white border border-slate-200/50 rounded-2xl shadow-sm shrink-0 select-none overflow-hidden hover:shadow-md transition-shadow">
        <Image src={client.image} alt={client.name} width={200} height={80} className="max-w-full max-h-full object-contain mix-blend-multiply" />
      </div>
    );
  }
  
  if (client.isTesco) {
    return (
      <div className="flex flex-col items-center justify-center h-28 px-10 bg-white border border-slate-200/50 rounded-2xl shadow-sm shrink-0 select-none">
        <span className="text-red-600 font-black text-3xl tracking-tighter">TESCO</span>
        <div className="w-full h-1 border-b-[3px] border-dashed border-blue-600 mt-1"></div>
      </div>
    );
  }
  if (client.isQfm) {
    return (
      <div className="flex items-center gap-3 h-28 px-10 bg-orange-600 text-white rounded-2xl shadow-sm shrink-0 select-none">
        <span className="font-extrabold text-2xl tracking-widest lowercase">qfm</span>
        <span className="text-sm uppercase tracking-wider opacity-90 border-l border-white/30 pl-3">Qatar</span>
      </div>
    );
  }
  if (client.isIffco) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-[#0b2545] text-white rounded-2xl shadow-sm shrink-0 select-none">
        <span className="font-black text-2xl tracking-wider">IFFCO</span>
      </div>
    );
  }
  if (client.isAzam) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-blue-700 text-white rounded-full shadow-sm border border-blue-800 shrink-0 select-none">
        <span className="font-extrabold text-lg italic tracking-wide">azam</span>
      </div>
    );
  }
  if (client.isSquare) {
    return (
      <div className="flex items-center gap-2 h-28 px-10 bg-green-700 text-white rounded-2xl shadow-sm shrink-0 select-none">
        <span className="font-black text-lg tracking-widest">SQUARE</span>
      </div>
    );
  }
  if (client.isPatanjali) {
    return (
      <div className="flex items-center gap-3 h-28 px-10 bg-white border border-slate-200/50 rounded-2xl shadow-sm shrink-0 select-none">
        <span className="text-green-700 text-xl font-black tracking-tight">PATANJALI</span>
        <span className="w-4 h-4 rounded-full bg-green-500"></span>
      </div>
    );
  }
  if (client.isAashirvaad) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-2xl shadow-sm shrink-0 select-none">
        <span className="text-lg uppercase tracking-widest font-black">Aashirvaad</span>
      </div>
    );
  }
  if (client.isItc) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-[#1e3a8a] text-white rounded-2xl shadow-sm shrink-0 select-none">
        <span className="text-lg font-black tracking-widest">ITC LIMITED</span>
      </div>
    );
  }
  if (client.isIndiaGate) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-white border border-slate-200/50 rounded-2xl shadow-sm shrink-0 select-none">
        <span className="text-amber-800 font-extrabold text-lg tracking-widest uppercase">India Gate</span>
      </div>
    );
  }
  if (client.isShaktiBhog) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-orange-500 text-white rounded-full shadow-sm shrink-0 select-none">
        <span className="font-black text-lg tracking-wider uppercase">Shakti Bhog</span>
      </div>
    );
  }
  if (client.isMore) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-orange-600 text-white rounded-2xl shadow-sm shrink-0 select-none">
        <span className="font-black text-xl uppercase">more</span>
      </div>
    );
  }
  if (client.isPillsbury) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-blue-600 text-white rounded-full shadow-sm shrink-0 select-none">
        <span className="font-black text-lg tracking-wider">Pillsbury</span>
      </div>
    );
  }
  if (client.isBirla) {
    return (
      <div className="flex items-center justify-center h-28 px-10 bg-white border border-slate-200/50 rounded-2xl shadow-sm shrink-0 select-none">
        <span className="text-amber-600 font-black text-lg tracking-wide">ADITYA BIRLA</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 h-28 px-10 bg-white border border-slate-200/50 rounded-2xl shadow-sm shrink-0 select-none">
      {client.icon && <span className="text-3xl select-none">{client.icon}</span>}
      <span className="text-xl font-extrabold text-slate-800">{client.name}</span>
      {client.sub && <span className="text-sm text-slate-400 font-bold bg-slate-100 px-3 py-1.5 rounded">{client.sub}</span>}
    </div>
  );
}


const infraSlides = [
  {
    image: "/images/about-unit-2.jpg",
    title: "Factory Unit",
    caption: "Factory & Office: State-of-the-art facility for building flour mills, turnkey projects, and pre-fabricated buildings."
  },
  {
    image: "/images/other_img_9479.webp",
    title: "Choyal Corporate Office",
    caption: "Corporate Office: Choyal Corporate Tower – central hub for Marketing, Sales, IT, Media, and Finance operations."
  },
  {
    image: "/images/atta_plant_150tpd.webp",
    title: "CHARGE Training School",
    caption: "CHARGE (Training School): Choyal Hub for Agribusiness Research, Growth and Entrepreneurship – supporting innovation and sustainable agribusiness."
  },
  {
    image: "/images/mill_close_up.png",
    title: "Workshop",
    caption: "Workshop: Advanced manufacturing floor equipped with high-precision engineering machinery."
  },
  {
    image: "/images/wondermill_internal.webp",
    title: "Pilot Plant",
    caption: "Pilot Plant: A fully digital 40 TPD whole wheat flour mill that showcases modern milling technology in action."
  }
];

const turnkeyRangeData = [
  {
    title: "Chakki Atta Plant",
    icon: "Wheat",
    image: "/images/plants/150_ton_per_day_atta_plant.webp",
    description: "High-yield commercial Chakki Atta installations engineered for premium quality whole-grain stone ground flour.",
    items: [
      "Whole Wheat Flour",
      "Barley & Amaranth Flour",
      "Millets Plant",
      "Multigrain Flours",
      "Pulse Flour (Besan)",
      "Rice Flour Milling",
      "Soya Flour Plant",
      "Daliya (Broken Wheat) Plant",
      "Cleaning, Sorting & Packing",
      "Blending, Storage & Handling"
    ]
  },
  {
    title: "Roller Flour Mill Plant",
    icon: "Settings",
    image: "/images/plants/40_tpd_milling.webp",
    description: "Highly automated, high-precision roller milling technology designed for high-capacity industrial flour processing.",
    items: [
      "Maida Plant",
      "Semolina (Suji) Plant",
      "Rawa Plant",
      "Biscuit Flour Plant",
      "Maize Flour & Maize Grit"
    ]
  },
  {
    title: "Spice Plant",
    icon: "Flame",
    image: "/images/plants/20230601_130138.webp",
    description: "Robust specialized machinery designed for cool-grinding, sorting, and packaging aromatic spices and herbs.",
    items: [
      "Red Chilly Milling",
      "Turmeric Grinding",
      "Coriander Processing",
      "Garam Masala Setup",
      "Spice & Herbal Grinding",
      "Spice Blending System",
      "Recipe Development",
      "Mix Spices Plant",
      "Instant Masala Plant"
    ]
  },
  {
    title: "Pulse / Dal Plant",
    icon: "Layers",
    image: "/images/plants/samayshri_agro_2.webp",
    description: "Optimized grading, de-husking, splitting, and polishing lines to minimize grain breakage and maximize yield.",
    items: [
      "Pulse Cleaning & Sorting",
      "Pulse Processing Plant",
      "Pulse Grinding Plant",
      "Storage and Handling",
      "Automation & Modernization"
    ]
  },
  {
    title: "Franchisee Stores",
    icon: "Store",
    image: "/images/plants/tablet_controlled_plant.webp",
    description: "Micro-milling setups and retail grind-on-demand store designs to support direct-to-consumer fresh flour businesses.",
    items: [
      "Fresh Ground Flour Grinding Machine",
      "Fresh Ground Spice Grinding Machine",
      "Grocery Retail Store Layout",
      "Food Products Merchandising",
      "Wholesale Product Distribution"
    ]
  },
  {
    title: "Pre-Engineering Buildings (PEB)",
    icon: "Warehouse",
    image: "/images/plants/20221110_131216.webp",
    description: "Quick-deploy, cost-effective structural steel framing for factories, warehousing, and milling facility sheds.",
    items: [
      "Industrial Sheds",
      "Storage Warehouses",
      "Flour Mills PEB Structures",
      "Porta Hut Systems"
    ]
  },
  {
    title: "Storage, Automation & Software",
    icon: "Cpu",
    image: "/images/plants/turnkey_solutions.webp",
    description: "Smart software-driven storage, flow balancing, blending silos, and comprehensive custom digital dashboards for mills.",
    items: [
      "Grain Silo & Blending Silo",
      "Conditioning & Refraction Silo",
      "Atta Silo & Bran Silo",
      "Weighing Systems & Flow Balancer",
      "Flour Mill Automation Systems",
      "Custom Flour Mill Software",
      "E-Commerce Website Setup",
      "POS Systems & Executive Dashboards"
    ]
  }
];

const renderTurnkeyIcon = (iconName: string) => {
  switch (iconName) {
    case "Wheat": return <Wheat className="h-5 w-5" />;
    case "Settings": return <Settings className="h-5 w-5" />;
    case "Flame": return <Flame className="h-5 w-5" />;
    case "Store": return <Store className="h-5 w-5" />;
    case "Warehouse": return <Warehouse className="h-5 w-5" />;
    case "Cpu": return <Cpu className="h-5 w-5" />;
    default: return <Layers className="h-5 w-5" />;
  }
};

const galleryMedia = [
  // Row 1
  { src: "/images/atta_plant.png", title: "Industrial Atta Plant Setup" },
  { src: "/images/plants/samayshri_agro_1.webp", title: "Samayshri Agro Processing Line" },
  { src: "/images/plants/srivari_1.webp", title: "Srivari Milling Factory" },
  { src: "/images/wondermill_internal.webp", title: "Wonder Mill Smart Internal Setup" },
  { src: "/images/plants/sg_foods_1.webp", title: "SG Foods Processing Plant" },
  { src: "/images/other_20221110_1.webp", title: "Choyal Milling Machine Installation" },
  { src: "/images/qatar.webp", title: "Al-Jazeera Flour Mills Doha Plant" },
  { src: "/images/plants/40_tpd_milling.webp", title: "40 TPD Fully Automated Flour Mill" },
  // Row 2
  { src: "/images/about-unit-2.jpg", title: "Choyal Corporate Headquarters & Factory Floor" },
  { src: "/images/plants/banka_and_banka_foods_18.webp", title: "Banka & Banka Foods Facility" },
  { src: "/images/plants/dsc_4263.webp", title: "Industrial Grinding Chakki Installation" },
  { src: "/images/atta_plant_150tpd.webp", title: "150 TPD Agribusiness Atta Plant" },
  { src: "/images/plants/samayshri_agro_2.webp", title: "Samayshri Agro Packaging Section" },
  { src: "/images/other_20221110_3.webp", title: "Choyal Heavy-Duty Fabricated Plant" },
  { src: "/images/zams_milling.webp", title: "Zams Milling Setup" },
  { src: "/images/stone_dresser_cutter.png", title: "Precision Emery Stone Dresser & Cutter" }
];

export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const infraSliderRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInfra, setSelectedInfra] = useState<typeof infraSlides[0] | null>(null);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [activeTurnkeyTab, setActiveTurnkeyTab] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % galleryMedia.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + galleryMedia.length) % galleryMedia.length);
    }
  };

  const scrollInfraLeft = () => {
    if (infraSliderRef.current) {
      const cardWidth = infraSliderRef.current.firstElementChild?.clientWidth || 300;
      infraSliderRef.current.scrollBy({ left: -cardWidth - 24, behavior: "smooth" });
    }
  };

  const scrollInfraRight = () => {
    if (infraSliderRef.current) {
      const cardWidth = infraSliderRef.current.firstElementChild?.clientWidth || 300;
      infraSliderRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredSlugs = [
    "wonder-mill-with-wonder-miller",
    "iquadra-mill",
    "floura",
    "miller-lite"
  ];
  const featuredProducts = featuredSlugs.map(slug => 
    productsData.find(p => p.slug === slug)
  ).filter(Boolean);

  const slides = [
    {
      image: "/images/wondermill_internal.webp",
      tag: "Smart Milling Solutions",
      title: "Wonder Mill IoT Smart Mills",
      description: "Experience the world's smartest digital stone mills. Featuring recipe-driven grinding, remote tablet operation, and up to 30% electricity savings.",
      cta: "Request a Callback"
    },
    {
      image: "/images/atta_plant_150tpd.webp",
      tag: "Industrial Plants",
      title: "Turnkey Flour Mill Plants",
      description: "From engineering design to final on-site commissioning, we manufacture fully automated flour plants from 20 TPD to 150+ TPD.",
      cta: "Request a Quote"
    },
    {
      image: "/images/stone_dresser_hero.png",
      tag: "Patented Automation",
      title: "Emery Stone Dresser",
      description: "Eliminate manual stone dressing. Our automated solutions increase plant safety, reduce downtime, and guarantee consistent flour texture.",
      cta: "Get Spec Sheet"
    },
    {
      image: "/images/qatar.webp",
      tag: "Global Footprint",
      title: "Trusted in 20+ Countries",
      description: "Serving flour manufacturers across India, GCC countries, Africa, and South Asia with robust heavy machinery and global AMC support.",
      cta: "Contact Our Team"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingCTA(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);



  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const stats = [
    { value: "60+", label: "Years of Engineering Legacy" },
    { value: "5,000+", label: "Installations Worldwide" },
    { value: "20+", label: "Countries Served" },
    { value: "45+", label: "Patents & Certifications" },
  ];

  const divisions = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Wonder Mill Smart IoT Mills",
      description: "Patented digital stone mills integrated with smart tablet-driven control systems, recipe-based milling, and up to 30% electricity savings.",
      linkText: "Explore Smart Mills",
      href: "/stone-dresser"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Emery Stone Dresser",
      description: "The world's first patented digital stone dressing system. Automatically profiles and dresses emery stones, reducing labor and downtime.",
      linkText: "Explore Stone Dresser",
      href: "/stone-dresser"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Turnkey Atta & Flour Plants",
      description: "Complete industrial milling plants from 20 TPD to 150+ TPD. Fully automated layouts from grain cleaning to packaging.",
      linkText: "Explore Turnkey Plants",
      href: "#"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Choyal Emery Grinding Stones",
      description: "Manufactured with premium abrasives and proprietary binder formulas. Engineered for low temperature grinding and durability.",
      linkText: "Explore Grinding Stones",
      href: "#"
    }
  ];

  const faqs = [
    {
      q: "What industrial solutions does RS Choyal Group provide?",
      a: "RS Choyal Group is a pioneer in turnkey commercial flour mill setups (from 20 TPD onwards), patented Wonder Mill smart IoT digital stone mills, automated Emery Stone Dressers, and premium emery grinding stones. We offer end-to-end design, manufacturing, installation, and AMC services."
    },
    {
      q: "How does the Wonder Mill save up to 30% electricity?",
      a: "The Wonder Mill is designed with optimized grinding kinetics and automated load balancing. Sensor-driven controls dynamically regulate parameters to maintain optimal friction and grinding pressure, avoiding the massive power wastage found in standard static manual chakkis."
    },
    {
      q: "Does Choyal Group support international installations and shipping?",
      a: "Yes. With installations across East/West Africa, GCC countries (Qatar, UAE, Saudi Arabia), and South Asia, we provide complete global export, custom layout engineering, on-site commissioning technicians, and full warranty support worldwide."
    },
    {
      q: "Where are the manufacturing facilities located?",
      a: "Our state-of-the-art heavy engineering and grinding stone manufacturing facilities ('Works') are located at Arjunpura-Khalsa, Ajmer, Rajasthan, India, with our corporate and city offices situated at Choyal Tower in Shalimar Colony, Ajmer."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>
      <div className="absolute top-[40%] right-[30%] w-[30%] aspect-square bg-brand-tertiary/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

      {/* Navigation Header */}
      <Header onRequestCallback={() => setIsModalOpen(true)} />

      {/* --- Full Width Corporate Slideshow Section --- */}
      <main ref={heroRef} className="w-full relative z-10 h-[70vh] sm:h-[80vh] min-h-[500px] overflow-hidden lead-gradient border-b border-[#1c2722]/5">
        
        {/* Carousel Background Images with Fade transition */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
              currentSlide === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* The Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                currentSlide === index ? "scale-100" : "scale-105"
              }`}
            />
            
            {/* Gradient Overlay for superior text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-transparent pointer-events-none"></div>
            
            {/* Content overlay container */}
            <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-16 xl:px-24">
              <div className="w-full max-w-[1440px] mx-auto">
                <div className="max-w-3xl space-y-6 sm:space-y-8 text-white relative z-10">
                  <span className="inline-flex bg-brand-tertiary/20 text-brand-tertiary border border-brand-tertiary/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-fade-in">
                    {slide.tag}
                  </span>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-slate-900 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => {
                        const section = document.getElementById("brands");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base flex items-center justify-center cursor-pointer w-full sm:w-auto"
                    >
                      Explore Divisions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slideshow Arrow Navigation */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all cursor-pointer ${
                currentSlide === index ? "bg-brand-tertiary w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>

      {/* --- Key Metrics Section --- */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 section-bg-tertiary relative z-10">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-brand-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#3e4d46] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- About Us Section --- */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-10 border-b border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              A Globally Trusted Name in Flour Milling
            </h2>
            <div className="space-y-4 text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              <p>
                For over 60 years, we have been proud industry leaders in the Flour Mills and Emery Stones Manufacturing industry. What began as a small-scale operation has grown into a globally trusted name, known for innovation, quality, and commitment to excellence.
              </p>
              <p>
                Under the leadership of Mr. R.S. Choyal, the company has successfully delivered over 250 turnkey solutions in the past decade alone. Our relentless pursuit of progress led to the development of 6 patented technologies, a testament to our pioneering R&D efforts.
              </p>
              <p>
                CHOYAL has set benchmarks in global markets, exporting Flour Mills, Emery Stones & turnkey solutions to more than 25 countries across Europe, France, United Kingdom, Africa, the Middle East, Australia, Canada, Brazil, Zambia, Hong Kong, Sri Lanka, South Africa, and prominent Gulf nations like the United Arab Emirates, Saudi Arabia, Oman and Qatar. We have proudly received the "Certificate for Excellence in Export" year after year.
              </p>
            </div>
            
            <div className="pt-2">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/95 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Discover Our Legacy</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 group">
            <Image 
              src="/images/about-unit-2.jpg" 
              alt="RS Choyal Unit 2 Manufacturing Facility" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur px-5 py-3 rounded-xl shadow-lg border border-white/20 inline-block">
                <span className="text-brand-primary font-black text-lg block">60+ Years</span>
                <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">of Manufacturing Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Product Category Grid Section --- */}
      <section id="categories" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-20 relative z-10 section-bg-cream">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Explore Our Industrial Catalog
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              Select a category to view high-performance milling machinery, automated systems, and specialized spare parts.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "smart",
                name: "Smart & Automated",
                desc: "IoT-enabled smart flour mills with automated touch controllers.",
                icon: <Cpu className="h-6 w-6" />
              },
              {
                id: "chakki",
                name: "Chakki & Horizontal Mills",
                desc: "Heavy industrial stone mills for flour, spices, and grains.",
                icon: <Workflow className="h-6 w-6" />
              },
              {
                id: "controls",
                name: "Controllers & Smart Feeders",
                desc: "Advanced PLC systems and smart grain feeding units.",
                icon: <Settings className="h-6 w-6" />
              },
              {
                id: "cleaning",
                name: "Cleaning & Separation",
                desc: "Pre-cleaning systems, magnetic separators, and scourers.",
                icon: <Filter className="h-6 w-6" />
              },
              {
                id: "processing",
                name: "Processing & Finishing",
                desc: "Bran finishers, polishes, and specialized finishing units.",
                icon: <Activity className="h-6 w-6" />
              },
              {
                id: "stones",
                name: "Emery Stones & Dressers",
                desc: "World-famous abrasive emery stones and dressing equipment.",
                icon: <Layers className="h-6 w-6" />
              },
              {
                id: "handling",
                name: "Handling & Silos",
                desc: "Integrated handling systems, bucket elevators, and silos.",
                icon: <Database className="h-6 w-6" />
              },
              {
                id: "books",
                name: "Publications & Books",
                desc: "Legendary books and academic papers on milling science.",
                icon: <BookOpen className="h-6 w-6" />
              }
            ].map((cat) => (
              <Link
                key={cat.id}
                href={`/catalog?category=${cat.id}`}
                className="p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-primary/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {cat.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-800 text-base sm:text-lg tracking-tight group-hover:text-brand-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-brand-primary mt-6 group-hover:translate-x-1 transition-transform duration-300">
                  <span>Browse Products</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* --- Featured Products Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Flagship Machinery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
                Featured Innovation Solutions
              </h2>
              <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
                Pioneering the future of flour milling with our industry-leading smart automated mills, electronic feeders, and energy-saving systems.
              </p>
            </div>
            
            <Link 
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/95 transition-all duration-300 shadow-xs cursor-pointer whitespace-nowrap self-start md:self-auto"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              if (!product) return null;
              const categoryInfo = categoriesData[product.category as keyof typeof categoriesData];
              return (
                <div 
                  key={product.slug}
                  className="flex flex-col h-full bg-white border border-slate-200/80 rounded-[28px] overflow-hidden shadow-xs hover:shadow-md hover:border-slate-350 transition-all duration-300 group"
                >
                  {/* Image container */}
                  <div className="relative aspect-square w-full bg-[#fcfbf9] border-b border-slate-100 overflow-hidden flex items-center justify-center p-6">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      {categoryInfo && (
                        <span className="text-[10px] font-bold text-brand-primary tracking-wider uppercase bg-brand-primary/5 px-2.5 py-1 rounded-md inline-block">
                          {categoryInfo.name}
                        </span>
                      )}
                      
                      <h3 className="font-extrabold text-slate-800 text-base sm:text-lg tracking-tight line-clamp-2 min-h-[3rem] group-hover:text-brand-primary transition-colors">
                        {product.title}
                      </h3>
                      
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {product.shortDescription || "High-performance milling machinery manufactured under strict quality standards."}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link 
                        href={`/catalog/${product.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 hover:bg-brand-primary hover:text-white border border-slate-200/60 font-bold text-xs text-slate-700 transition-all duration-300 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- Prestigious Clients Section --- */}
      <section className="w-full py-16 bg-[#F5F2EB] border-b border-slate-200/50 overflow-hidden relative z-10">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 mb-10 space-y-4">
          <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
            Global Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
            Our Prestigious Clients
          </h2>
          <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed max-w-3xl">
            Trusted by the world's leading grain processors, food brands, and agro-exporters across the globe and pan-India.
          </p>
        </div>

        {/* Marquee Wrapper Container */}
        <div className="space-y-8 marquee-container">
          
          {/* INTERNATIONAL ROW */}
          <div className="space-y-2">
            <div className="px-6 sm:px-12 lg:px-16 xl:px-24">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3">
                — International Partners
              </span>
            </div>
            
            <div className="flex overflow-hidden w-full select-none gap-8 relative">
              {/* Fade Left/Right overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F2EB] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F2EB] to-transparent z-20 pointer-events-none"></div>

              <div className="flex shrink-0 animate-marquee items-center gap-8 min-w-full">
                {internationalClients.map((client, idx) => (
                  <div key={`intl-1-${idx}`} className="shrink-0">
                    {renderClientLogo(client)}
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 animate-marquee items-center gap-8 min-w-full" aria-hidden="true">
                {internationalClients.map((client, idx) => (
                  <div key={`intl-2-${idx}`} className="shrink-0">
                    {renderClientLogo(client)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PAN INDIA ROW */}
          <div className="space-y-4">
            <div className="px-6 sm:px-12 lg:px-16 xl:px-24">
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase block mb-3">
                — Pan India Brands
              </span>
            </div>
            
            <div className="flex overflow-hidden w-full select-none gap-8 relative">
              {/* Fade Left/Right overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F2EB] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F2EB] to-transparent z-20 pointer-events-none"></div>

              <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 min-w-full">
                {indianClients.map((client, idx) => (
                  <div key={`ind-1-${idx}`} className="shrink-0">
                    {renderClientLogo(client)}
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 min-w-full" aria-hidden="true">
                {indianClients.map((client, idx) => (
                  <div key={`ind-2-${idx}`} className="shrink-0">
                    {renderClientLogo(client)}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Divisions Bento Grid Section --- */}
      <section id="brands" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 section-bg-cream">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Brands & Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Our Core Business Segments
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              We design, build, and distribute state-of-the-art milling systems and spares designed for commercial flour producers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((div, idx) => (
              <GlowCard key={idx}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-6">
                  {div.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {div.title}
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6">
                  {div.description}
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-bold text-brand-tertiary hover:text-white transition-colors">
                  <span>{div.linkText}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </GlowCard>
            ))}
          </div>

        </div>
      </section>

      {/* --- Turnkey Solutions Section --- */}
      <section id="turnkey-solutions-feature" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 bg-white border-t border-b border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Content - Text and Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase bg-brand-primary/5 px-3 py-1.5 rounded-lg inline-block">
                  Turnkey Engineering
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
                  Turnkey Solutions
                </h2>
                <p className="text-[#3e4d46] text-sm sm:text-base lg:text-lg leading-relaxed">
                  At RS Choyal Group, we specialize in providing turnkey solutions tailored to meet your exact requirements. From micro-mini modules to large-scale plants (20 TPD to 2000 TPD), our services encompass:
                </p>
              </div>

              {/* 6 Key Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Concept Development and Layouts",
                    desc: "Customized designs optimized for efficiency and space utilization."
                  },
                  {
                    title: "Detailed Engineering",
                    desc: "Precision engineering ensuring seamless integration and operation."
                  },
                  {
                    title: "Automation Solutions",
                    desc: "Advanced technologies to enhance productivity and reduce operational costs."
                  },
                  {
                    title: "Training Programs",
                    desc: "Comprehensive training for your team to operate and maintain the facility effectively."
                  },
                  {
                    title: "Design & Engineering Services",
                    desc: "2D/3D mechanical drawings, packaging designs, and field layouts for efficient plant commissioning."
                  },
                  {
                    title: "Technology Upgradation",
                    desc: "Modernizing existing plants to meet current market demands."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-brand-primary font-black mt-0.5 text-base select-none">•</span>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug">{item.title}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <div className="pt-2">
                <Link 
                  href="/turnkey-projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/95 transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span>Explore Turnkey Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Side Content - Visual Image and Badge Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md border border-slate-200/50 group bg-slate-50">
                <Image 
                  src="/images/plants/turnkey_solutions.webp" 
                  alt="Turnkey Solutions Plant Layout" 
                  fill 
                  className="object-cover !scale-[1.28] transition-transform duration-500 group-hover:!scale-[1.35]"
                />
              </div>

              {/* Turnkey highlight details box matching yellow/amber and dark green */}
              <div className="bg-gradient-to-br from-[#E0901A]/10 to-[#F5A623]/25 border border-[#E0901A]/35 p-6 sm:p-8 rounded-3xl space-y-6 text-[#1c2722]">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E0901A] block">
                    We Offer Turnkey Solutions For
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-brand-primary tracking-tight">
                    2 Ton/Day <span className="text-[#E0901A]">To</span> 2000 Ton/Day
                  </div>
                  <span className="text-xs font-bold text-slate-600 block">Capacities</span>
                </div>

                <div className="w-full h-px bg-[#E0901A]/20"></div>

                <div className="text-center space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-brand-primary tracking-tight">
                    250+ Projects
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#E0901A] block">
                    Done In A Span Of 10 Years
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Turnkey Range Section --- */}
      <section id="turnkey-range" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 bg-slate-50 border-b border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase bg-brand-primary/5 px-3 py-1.5 rounded-lg inline-block">
              Turnkey Projects Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Wide Range of Turnkey Project Solutions
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              We design, build, and commission custom industrial systems tailored to your target output. Explore our comprehensive setups across processing categories.
            </p>
          </div>

          {/* Interactive Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Navigation Tabs */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 snap-x [-ms-overflow-style:none] [scrollbar-width:none] &::-webkit-scrollbar:hidden">
              {turnkeyRangeData.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTurnkeyTab(idx)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-left font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer snap-start shrink-0 lg:shrink w-auto lg:w-full select-none ${
                    activeTurnkeyTab === idx
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10 translate-x-0 lg:translate-x-2"
                      : "bg-white border border-slate-200/60 hover:bg-slate-50 hover:border-slate-350 text-slate-700"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    activeTurnkeyTab === idx ? "bg-white/20 text-white" : "bg-[#E0901A]/10 text-[#E0901A]"
                  }`}>
                    {renderTurnkeyIcon(tab.icon)}
                  </div>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Right Side: Showcase Content Panel */}
            <div className="lg:col-span-8 bg-white border border-slate-200/65 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-xs min-h-[420px]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Panel Information */}
                <div className="md:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                      {turnkeyRangeData[activeTurnkeyTab].title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {turnkeyRangeData[activeTurnkeyTab].description}
                    </p>
                  </div>

                  <div className="w-full h-px bg-slate-100"></div>

                  {/* Sub-items List as checked tags */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E0901A] block">
                      Key Plants & Setups Included
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {turnkeyRangeData[activeTurnkeyTab].items.map((sub, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="flex items-center gap-2 bg-slate-50 border border-slate-200/50 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:border-brand-primary/10 transition-colors"
                        >
                          <Check className="h-3 w-3 text-brand-primary shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Panel Graphic Preview */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 group bg-slate-50">
                    <Image 
                      src={turnkeyRangeData[activeTurnkeyTab].image} 
                      alt={turnkeyRangeData[activeTurnkeyTab].title} 
                      fill 
                      className={`object-cover transition-transform duration-500 ${
                        turnkeyRangeData[activeTurnkeyTab].image.includes('turnkey_solutions')
                          ? '!scale-[1.28] group-hover:!scale-[1.35]'
                          : 'group-hover:scale-103'
                      }`}
                    />
                  </div>
                  <div className="bg-[#E0901A]/5 border border-[#E0901A]/10 p-4 rounded-2xl flex items-start gap-3">
                    <span className="text-[#E0901A] font-extrabold text-lg leading-none select-none">✦</span>
                    <p className="text-[11px] sm:text-xs text-[#E0901A] font-semibold leading-relaxed">
                      All installations are fully compliant with ISO certification guidelines and feature custom IoT control integration.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- Global Footprint Banner --- */}
      <section id="global" className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-brand-primary text-white relative z-10 overflow-hidden">
        {/* Background glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,172,127,0.15),transparent_60%)] pointer-events-none"></div>
        
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-tertiary tracking-widest uppercase">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Trusted by Mill Owners Across 20+ Countries
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From our headquarters in Ajmer to installations in Africa, the Middle East, and Asia, we supply custom-built industrial solutions and support them through proactive AMC partners.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-secondary text-xs">✔</div>
                <span className="text-sm font-semibold text-slate-200">State-of-the-art Atta processing setups in Qatar & GCC</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-secondary text-xs">✔</div>
                <span className="text-sm font-semibold text-slate-200">High-capacity automated plants across East and West Africa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-secondary text-xs">✔</div>
                <span className="text-sm font-semibold text-slate-200">Extensive domestic layout operations inside major Indian food hubs</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="/images/qatar.webp" 
              alt="RS Choyal Qatar Global Installation" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- Infrastructure & Manufacturing section --- */}
      <section id="infrastructure" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 section-bg-cream border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              World-Class Manufacturing & Facilities
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              RSC Group is backed by one of the most advanced infrastructures in the industry, designed for innovation, efficiency, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs flex gap-4 items-start hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary shrink-0">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-1">Factory & Office</h4>
                <p className="text-slate-600 text-sm leading-relaxed">State-of-the-art facility for building flour mills, turnkey projects, and pre-fabricated buildings.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs flex gap-4 items-start hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary shrink-0">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-1">CHARGE (Training School)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Choyal Hub for Agribusiness Research, Growth and Entrepreneurship – supporting innovation and sustainable agribusiness.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs flex gap-4 items-start hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary shrink-0">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-1">Pilot Plant</h4>
                <p className="text-slate-600 text-sm leading-relaxed">A fully digital 40 TPD whole wheat flour mill that showcases modern milling technology in action.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs flex gap-4 items-start hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary shrink-0">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-1">Corporate Office</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Choyal Corporate Tower – central hub for Marketing, Sales, IT, Media, and Finance operations.</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Image Slider */}
          <div className="relative w-full group/slider pt-4">
            {/* Left Arrow */}
            <button 
              onClick={scrollInfraLeft}
              className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-slate-200 bg-white shadow-md text-slate-800 flex items-center justify-center transition-all hover:bg-slate-50 cursor-pointer active:scale-95 hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            {/* Scroll Container */}
            <div 
              ref={infraSliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] &::-webkit-scrollbar:hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {infraSlides.map((slide, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedInfra(slide)}
                  className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-start cursor-pointer group"
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 bg-white">
                    <Image 
                      src={slide.image} 
                      alt={slide.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h4 className="font-extrabold text-lg sm:text-xl tracking-tight">{slide.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-200 line-clamp-1 mt-1">Click to view fullscreen</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={scrollInfraRight}
              className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-slate-200 bg-white shadow-md text-slate-800 flex items-center justify-center transition-all hover:bg-slate-50 cursor-pointer active:scale-95 hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

        </div>
      </section>



      {/* --- Legacy & History Grid Section --- */}
      <section id="legacy" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-20 relative z-10 bg-[#F5F2EB] border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Our Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Six Decades of Milling Excellence
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              Explore the key eras that shaped RS Choyal into a global leader in heavy food engineering and smart milling automation.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                era: "1965 – 1975",
                title: "Founding & Global Exports",
                highlights: [
                  "Founded in Ajmer, India, by Mr. B.M. Choyal and Mr. R.D. Sharma.",
                  "Pioneered local flour mill and abrasive emery stone manufacturing.",
                  "First Indian company to export milling systems to East Africa, Europe, & Middle East."
                ]
              },
              {
                era: "1978 – 2012",
                title: "Infrastructure & Expansion",
                highlights: [
                  "Incorporated formally as Shri Vishvakarma Industries Private Limited.",
                  "Built heavy engineering & fabrication works facilities in Arjunpura-Khalsa.",
                  "Established Ajmer's first dedicated R&D Centre for advanced product testing."
                ]
              },
              {
                era: "Present Era",
                title: "Digital Grinding & Automation",
                highlights: [
                  "Pioneered smart mill automation (Miller Lite, iQuadra) for energy-saving controls.",
                  "Remote GUI dashboard & PLC controller integrations for whole grain plants.",
                  "Launched the Choyal School of Milling Technology for professional industry training."
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                {/* Visual Number Watermark */}
                <div className="absolute top-4 right-6 text-slate-100 font-black text-6xl select-none pointer-events-none group-hover:text-slate-200 transition-colors">
                  0{idx + 1}
                </div>
                
                <div className="space-y-6 z-10 relative">
                  <span className="inline-block bg-brand-tertiary text-slate-900 font-extrabold text-xs px-3.5 py-1.5 rounded-lg tracking-wide uppercase">
                    {item.era}
                  </span>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-slate-800 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <ul className="space-y-3 pt-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-2.5 items-start text-slate-600 text-sm leading-relaxed">
                          <span className="text-brand-primary font-bold text-base select-none mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* --- Milling Ecosystem Section --- */}
      <section id="milling-ecosystem" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 bg-white border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Ecosystem Header */}
          <div className="space-y-4 max-w-4xl mb-12">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase bg-brand-primary/5 px-3 py-1.5 rounded-lg inline-block">
              End-to-End Milling Partner
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3e4d46] leading-tight">
              Complete Milling Ecosystem Under One Roof
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              An easy way to do business with Milling Ecosystem. Just plan your business while we help you manage your operations with ease. Managing formalities can take time and energy; our complete ecosystem helps you save time and get started in no time.
            </p>
          </div>

          {/* Ecosystem Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                icon: <Workflow className="h-5 w-5" />,
                title: "Project Development",
                desc: "We will develop complete projects for you starting from 2D/3D drawings, site selection, land development, designing, fabrication, commissioning of plant, recipe development, and packaging design."
              },
              {
                icon: <Activity className="h-5 w-5" />,
                title: "Operations",
                desc: "We will provide consultancy on how to maximize your operations for maximum output, efficient plant operations, maintenance, quality control, fumigation, MIS, and overall project management after setup."
              },
              {
                icon: <Cpu className="h-5 w-5" />,
                title: "Automation",
                desc: "Controlling and optimizing all processes like sampling of raw material, pre-cleaning, storing, blending, cleaning, grinding, and packaging will help in creating long term growth of the plant."
              },
              {
                icon: <BookOpen className="h-5 w-5" />,
                title: "Training",
                desc: "We will provide comprehensive professional training to your staff so they are fully ready to operate your complete plant operations."
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Licensing",
                desc: "We will help you get necessary licensing required to start your operations like FSSAI, APEDA, IEC, and other international/local certificates."
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Government Registrations",
                desc: "We will help you secure the necessary licenses, legal registries, and regulatory clearances required to start your milling operations."
              },
              {
                icon: <Settings className="h-5 w-5" />,
                title: "Design & Engineering",
                desc: "We will develop 2D and 3D mechanical drawings, detailed packaging designs, and optimized field layouts for efficient plant commissioning."
              },
              {
                icon: <Layers className="h-5 w-5" />,
                title: "Technology Upgradation",
                desc: "We can help you modernize and upgrade your existing milling setup with today's market requirements and energy-efficient systems easily."
              },
              {
                icon: <Database className="h-5 w-5" />,
                title: "Project Reports",
                desc: "We will provide high-quality detailed project reports and bankable feasibility/viability project reports to secure funding."
              },
              {
                icon: <Globe className="h-5 w-5" />,
                title: "Subsidies & Policies",
                desc: "We will guide you step-by-step on applicable subsidies, financial grants, and government policies for your agribusiness."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/50 p-6 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md hover:border-brand-primary/10 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E0901A]/10 text-[#E0901A] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Why RS Choyal Group Section --- */}
      <section id="why-choyal" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 bg-slate-50 border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase bg-brand-primary/5 px-3 py-1.5 rounded-lg inline-block">
                Our Core Values
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
                Why RS Choyal Group
              </h2>
              <p className="text-[#3e4d46] text-sm sm:text-base max-w-xl leading-relaxed">
                Over decades of industry leadership, we have built a reputation based on trust, excellence, and cutting-edge agribusiness engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Handshake className="h-5 w-5" />,
                  title: "Trust",
                  desc: "Trust is indispensable for Choyal. We believe only in fair and transparent business so that you can have your peace of mind."
                },
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Quality",
                  desc: "High in quality and excellence is what defines our product range. We provide our clients only the best solutions."
                },
                {
                  icon: <Lightbulb className="h-5 w-5" />,
                  title: "Innovation",
                  desc: "With rigorous R&D, we have superior milling solutions for every budget."
                },
                {
                  icon: <Coins className="h-5 w-5" />,
                  title: "Economical Solutions",
                  desc: "We provide cost effective solutions for every project so you can maximise your operations and profit centres."
                },
                {
                  icon: <History className="h-5 w-5" />,
                  title: "Experience",
                  desc: "With over half a century of experience, we have developed superior milling technological solutions and staff to cater your needs."
                }
              ].map((pillar, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex gap-4 items-start hover:shadow-md hover:border-brand-primary/10 transition-all duration-300 ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Close-Up image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden shadow-md border border-slate-200/50 group bg-slate-50">
              <Image 
                src="/images/mill_close_up.png" 
                alt="Why RS Choyal Group - Precision Milling Machinery" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 section-bg-cream border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Global Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              What Our Global Partners Say
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              Read how mill owners and industrial food processors around the world leverage Choyal's milling innovations to scale their production.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Implementing the Wonder Mill with iQuadra automation transformed our Atta processing facility in Doha. We achieved a 30% reduction in electricity consumption and the digital recipe management ensures consistent quality without manual tweaking.",
                author: "Khalid Al-Mansoori",
                role: "CEO",
                company: "Al-Jazeera Flour Mills, Qatar",
                rating: 5
              },
              {
                quote: "RS Choyal delivered our 100 TPD Turnkey Wheat Mill plant on schedule. Their heavy engineering works are robust, and the local maintenance partners keep our downtime close to zero. The training they provided at Choyal School of Milling was invaluable.",
                author: "Samuel Ndwiga",
                role: "Technical Director",
                company: "Nairobi Agro-Processors, Kenya",
                rating: 5
              },
              {
                quote: "We have used Choyal emery stones and Chakki systems for over two decades. Their craftsmanship is unmatched, and their transition into digital plant automation with Miller Lite has made running heavy mills extremely straightforward.",
                author: "Rajesh Sharma",
                role: "Operations Head",
                company: "Chokhi Dhani Foods, India",
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <svg key={rIdx} className="w-5 h-5 text-brand-tertiary fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-slate-100 pt-4 flex flex-col">
                  <span className="font-extrabold text-slate-800 text-sm sm:text-base">
                    {t.author}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold mt-0.5">
                    {t.role} • <span className="text-brand-primary font-bold">{t.company}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* --- Accordion FAQ Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 section-bg-cream">
        <div className="w-full max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Support & Information
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1c2722]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left text-[#1c2722] font-bold text-base sm:text-lg focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === idx ? "max-h-60 border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Logos and Media Gallery Section --- */}
      <section id="logos-gallery" className="w-full py-16 lg:py-24 bg-white border-t border-slate-200/50 overflow-hidden relative z-10">
        <div className="w-full mx-auto">
          
          {/* 3 Logos Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-24 mb-16 px-6">
            {/* Logo 1: 60 Years Emblem (Custom Inline SVG representing wheat & milling experience) */}
            <div className="flex items-center justify-center p-2 select-none">
              <svg className="h-[50px] sm:h-[65px] w-auto" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 35 45 C 35 25, 80 20, 90 45 C 100 20, 145 25, 145 45 C 145 75, 90 85, 90 85 C 90 85, 35 75, 35 45 Z" stroke="#E0901A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="65" cy="45" r="16" stroke="#E0901A" strokeWidth="3" fill="none"/>
                <circle cx="115" cy="45" r="16" stroke="#E0901A" strokeWidth="3" fill="none"/>
                <path d="M 50 35 C 55 38, 55 52, 50 55" stroke="#E0901A" strokeWidth="2"/>
                <path d="M 130 35 C 125 38, 125 52, 130 55" stroke="#E0901A" strokeWidth="2"/>
                <text x="90" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="30" fill="#E0901A" textAnchor="middle">60</text>
                <text x="90" y="80" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="7" fill="#3e4d46" letterSpacing="0.8" textAnchor="middle">YEARS OF EXPERIENCE</text>
                <text x="90" y="90" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="7" fill="#3e4d46" letterSpacing="2.2" textAnchor="middle">IN MILLING</text>
              </svg>
            </div>

            {/* Logo 2: RS Choyal Group Logo */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200/50 shadow-xs inline-flex items-center justify-center select-none">
              <img 
                src="/rschoyal-logo.svg" 
                alt="RS Choyal Group Logo" 
                className="h-[40px] sm:h-[50px] w-auto object-contain"
              />
            </div>

            {/* Logo 3: Choyal Grinding Solution Logo */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200/50 shadow-xs inline-flex items-center justify-center select-none">
              <img 
                src="/choyal-logo.png" 
                alt="Choyal Grinding Solution Logo" 
                className="h-[40px] sm:h-[50px] w-auto object-contain"
              />
            </div>
          </div>

          {/* 2-Row Media Gallery Marquee */}
          <div className="relative w-full space-y-6 marquee-container mask-gradient">
            
            {/* Row 1: Left Moving Slider */}
            <div className="flex w-full overflow-hidden select-none gap-4">
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee">
                {galleryMedia.slice(0, 8).map((img, idx) => (
                  <div 
                    key={`row1-${idx}`}
                    onClick={() => openLightbox(idx)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee" aria-hidden="true">
                {galleryMedia.slice(0, 8).map((img, idx) => (
                  <div 
                    key={`row1-dup-${idx}`}
                    onClick={() => openLightbox(idx)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Right Moving Slider */}
            <div className="flex w-full overflow-hidden select-none gap-4">
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee-reverse">
                {galleryMedia.slice(8, 16).map((img, idx) => (
                  <div 
                    key={`row2-${idx}`}
                    onClick={() => openLightbox(idx + 8)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee-reverse" aria-hidden="true">
                {galleryMedia.slice(8, 16).map((img, idx) => (
                  <div 
                    key={`row2-dup-${idx}`}
                    onClick={() => openLightbox(idx + 8)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- Footer Component --- */}
      <Footer />

      {/* Floating Bottom CTA */}
      <div
        className="fixed bottom-6 left-1/2 z-40 transition-all duration-500 ease-out flex items-center justify-center"
        style={{
          transform: `translateX(-50%) translateY(${showFloatingCTA ? "0px" : "100px"}) scale(${showFloatingCTA ? 1 : 0.9})`,
          opacity: showFloatingCTA ? 1 : 0,
          pointerEvents: showFloatingCTA ? "auto" : "none",
        }}
      >
        <div className="relative rounded-full p-[2px] animate-shimmer shadow-xl hover:scale-105 transition-all duration-300">
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 px-8 rounded-full flex items-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base"
          >
            <span>Request a Call</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Popup Form Modal */}
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

      {/* Lightbox Modal for Infrastructure Slider */}
      {selectedInfra && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedInfra(null)}
        >
          <button 
            onClick={() => setSelectedInfra(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl flex flex-col items-center gap-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <Image 
                src={selectedInfra.image} 
                alt={selectedInfra.title} 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="text-center max-w-2xl px-6 text-white">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                {selectedInfra.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedInfra.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Double Row Gallery */}
      {lightboxIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fade-in cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10 select-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl flex flex-col items-center gap-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <Image 
                src={galleryMedia[lightboxIdx].src} 
                alt={galleryMedia[lightboxIdx].title} 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="text-center max-w-2xl px-6 text-white mb-4">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                {galleryMedia[lightboxIdx].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Image {lightboxIdx + 1} of {galleryMedia.length}
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10 select-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}


    </div>
  );
}
