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
  Plus,
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
  History,
  Star,
  User
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

interface ClientPartner {
  name: string;
  src: string;
}

const internationalClientsRow1: ClientPartner[] = [
  { name: "Square Bangladesh", src: "/images/clients/client-logo-indian/17.png" },
  { name: "Noor Ghazal", src: "/images/clients/client-logo-indian/11.png" },
  { name: "Al Ghurair Foods", src: "/images/clients/client-logo-indian/21.png" },
  { name: "IFFCO", src: "/images/clients/client-logo-indian/5.png" },
  { name: "Prima Sri Lanka", src: "/images/clients/client-logo-indian/1.png" },
  { name: "SR Foods Nepal", src: "/images/clients/client-logo-indian/10.png" },
  { name: "Carr's", src: "/images/clients/client-logo-indian/3.png" },
  { name: "Tesco", src: "/images/clients/client-logo-indian/2.png" },
  { name: "Azam", src: "/images/clients/client-logo-indian/4.png" },
  { name: "Bakhresa", src: "/images/clients/client-logo-indian/18.png" },
  { name: "Sam Mills", src: "/images/clients/client-logo-indian/16.png" },
];

const internationalClientsRow2: ClientPartner[] = [
  { name: "Baker's Dream", src: "/images/clients/client-logo-indian/7.png" },
  { name: "ZAMS Milling", src: "/images/clients/client-logo-indian/14.png" },
  { name: "Coralbell Global", src: "/images/clients/client-logo-indian/15.png" },
  { name: "QFM Qatar Flour Mills", src: "/images/clients/client-logo-indian/20.png" },
  { name: "CFL", src: "/images/clients/client-logo-indian/19.png" },
  { name: "il molino", src: "/images/clients/client-logo-indian/6.png" },
  { name: "Madhoor", src: "/images/clients/client-logo-indian/8.png" },
  { name: "Winnie's PureHealth", src: "/images/clients/client-logo-indian/9.png" },
  { name: "Noor Gold", src: "/images/clients/client-logo-indian/12.png" },
  { name: "Riverbank Foods", src: "/images/clients/client-logo-indian/13.png" },
];

const domesticClientsRow1: ClientPartner[] = [
  { name: "Rishta", src: "/images/clients/client-logo-international/7.png" },
  { name: "Purity & Trust", src: "/images/clients/client-logo-international/42.png" },
  { name: "Anupama Aahar", src: "/images/clients/client-logo-international/3.png" },
  { name: "Patanjali", src: "/images/clients/patanjali.jpg" },
  { name: "Tansukh", src: "/images/clients/client-logo-international/2.png" },
  { name: "Desigold", src: "/images/clients/client-logo-international/4.png" },
  { name: "BioLife", src: "/images/clients/client-logo-international/5.png" },
  { name: "Sangale Agro Foods", src: "/images/clients/client-logo-international/6.png" },
  { name: "Le Marche", src: "/images/clients/client-logo-international/1.png" },
  { name: "Pitamber", src: "/images/clients/client-logo-international/14.png" },
  { name: "Shabri Organics", src: "/images/clients/client-logo-international/15.png" },
  { name: "Grow Fresh", src: "/images/clients/client-logo-international/16.png" },
  { name: "Jeeni Millet Health Mix", src: "/images/clients/client-logo-international/19.png" },
  { name: "Karuna Agro Industries", src: "/images/clients/client-logo-international/20.png" },
  { name: "Srilalitha", src: "/images/clients/client-logo-international/22.png" },
  { name: "Naga", src: "/images/clients/client-logo-international/23.png" },
  { name: "Goyal Proteins", src: "/images/clients/client-logo-international/24.png" },
  { name: "Rajan Agro", src: "/images/clients/client-logo-international/25.png" },
  { name: "Kalyani's & Mundra", src: "/images/clients/client-logo-international/26.png" },
  { name: "Kitchen Xpress", src: "/images/clients/client-logo-international/27.png" },
  { name: "ITC Limited", src: "/images/clients/itc.jpg" },
  { name: "India Gate", src: "/images/clients/indiagate.jpg" },
  { name: "Shakti Bhog", src: "/images/clients/shaktibhog.jpg" },
];

const domesticClientsRow2: ClientPartner[] = [
  { name: "Pillsbury", src: "/images/clients/pillsbury.jpg" },
  { name: "Raj Bhog", src: "/images/clients/client-logo-international/8.png" },
  { name: "RSY", src: "/images/clients/client-logo-international/9.png" },
  { name: "Healthfull", src: "/images/clients/client-logo-international/10.png" },
  { name: "Samayshri Agro", src: "/images/clients/client-logo-international/12.png" },
  { name: "Annveda", src: "/images/clients/client-logo-international/18.png" },
  { name: "Ripuraj", src: "/images/clients/client-logo-international/21.png" },
  { name: "RR", src: "/images/clients/client-logo-international/28.png" },
  { name: "Vadera Industries", src: "/images/clients/client-logo-international/29.png" },
  { name: "Rathi Agro Products", src: "/images/clients/client-logo-international/30.png" },
  { name: "Sri Bhagyalakshmi", src: "/images/clients/client-logo-international/31.png" },
  { name: "Shri Sitaram", src: "/images/clients/client-logo-international/32.png" },
  { name: "King Porus Flour", src: "/images/clients/client-logo-international/33.png" },
  { name: "Seroo", src: "/images/clients/client-logo-international/34.png" },
  { name: "Bardana Traders", src: "/images/clients/client-logo-international/35.png" },
  { name: "Simran Agritech", src: "/images/clients/client-logo-international/36.png" },
  { name: "Samastipur", src: "/images/clients/client-logo-international/38.png" },
  { name: "TWF", src: "/images/clients/client-logo-international/39.png" },
  { name: "Hi-Tech Organic Food", src: "/images/clients/client-logo-international/40.png" },
  { name: "Vedic Arotech", src: "/images/clients/client-logo-international/41.png" },
  { name: "PB", src: "/images/clients/client-logo-international/43.png" },
  { name: "SG Food Mart", src: "/images/clients/client-logo-international/44.png" },
  { name: "Hindustan Agro Products", src: "/images/clients/client-logo-international/45.png" },
  { name: "Godhum", src: "/images/clients/client-logo-international/47.png" },
  { name: "Uttarakhand Gramya Vikas Samiti", src: "/images/clients/client-logo-international/48.png" },
  { name: "Roxy", src: "/images/clients/client-logo-international/24(1).png" },
];

function ClientLogoCard({ client }: { client: ClientPartner }) {
  return (
    <div className="flex items-center justify-center h-[90px] sm:h-[102px] md:h-[114px] w-40 sm:w-52 md:w-56 p-2 sm:p-2.5 bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl shadow-xs shrink-0 select-none hover:shadow-md hover:border-slate-300 transition-all duration-300">
      <img
        src={encodeURI(client.src)}
        alt={client.name}
        className="max-h-[66px] sm:max-h-[76px] md:max-h-[86px] max-w-[88%] w-auto object-contain"
        loading="lazy"
      />
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
  const [activeExpertise, setActiveExpertise] = useState<number | null>(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleExpertise = (index: number) => {
    setActiveExpertise(activeExpertise === index ? null : index);
  };

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

  const testimonials = [
    {
      author: "Mr. Altaf Inamdar",
      company: "Shahi Flour Mills, Gulbarga, Karnataka",
      quote: "Team Choyal has been very supportive since the initial idea of our project. They have been elemental in providing services like designing and commissioning till implementation. Your support for startups like us has provided us a helping hand constantly.",
      rating: 5
    },
    {
      author: "Mr. Kamaljeet Singh",
      company: "B&B Flour Mills, Ropar, Punjab",
      quote: "We are very satisfied with our project with Choyal. Choyal's consistent quality has helped us to gain momentum in the market. We are running our project for 5 years with just basic maintenance.",
      rating: 5
    },
    {
      author: "Samuel Ndwiga",
      role: "Technical Director",
      company: "Nairobi Agro-Processors, Kenya",
      quote: "RS Choyal delivered our 100 TPD Turnkey Wheat Mill plant on schedule. Their heavy engineering works are robust, and the local maintenance partners keep our downtime close to zero. The training they provided at Choyal School of Milling was invaluable.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "What industrial solutions does RS Choyal Group provide?",
      a: "RS Choyal Group provides turnkey commercial flour mill setups, Wonder Mill smart IoT digital stone mills, automated Emery Stone Dressers, and premium emery grinding stones. Services include design, manufacturing, installation, and AMC."
    },
    {
      q: "How does the Wonder Mill save up to 30% electricity?",
      a: "The Wonder Mill uses optimized grinding, automated load balancing, and sensor-driven controls to regulate grinding pressure and reduce power wastage."
    },
    {
      q: "Does Choyal Group support international installations and shipping?",
      a: "Yes. Choyal supports installations across East/West Africa, GCC countries and South Asia, with export support, custom layout engineering, on-site commissioning, and warranty support."
    },
    {
      q: "Where are the manufacturing facilities located?",
      a: "The heavy engineering and grinding stone manufacturing facilities are located at Arjunpura-Khalsa, Ajmer, Rajasthan, with corporate and city offices at Choyal Tower, Shalimar Colony, Ajmer."
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

      {/* --- End-to-End Milling Solutions Section --- */}
      <section id="end-to-end-solutions" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-[#FAF9F5] border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto space-y-12 sm:space-y-14">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              End-to-End Milling Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
              Solutions for<br className="hidden sm:inline" /> Every Stage of <span className="text-amber-500">Your Mill</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
              From setting up a new plant to upgrading a single process, choose the machinery and technology that fits your operation today and its growth tomorrow.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                tag: "01 · CREATE",
                heading: "Build a Complete Flour Plant",
                desc: "From planning and layout to installation and commissioning, we build your complete milling plant with one experienced team.",
                cta: "Explore Turnkey Solutions",
                href: "/turnkey-projects"
              },
              {
                tag: "02 · EXPAND",
                heading: "Upgrade What You Already Have",
                desc: "Improve capacity and efficiency by upgrading individual processes without rebuilding your entire plant.",
                cta: "See Systems by Section",
                href: "/flour-processing"
              },
              {
                tag: "03 · SOLVE",
                heading: "Find the Right Technology",
                desc: "Choose the right milling solutions for your process, capacity and production needs from individual equipment to complete systems.",
                cta: "Explore The Product Range",
                href: "/catalog"
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-9 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group min-h-[300px]"
              >
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-amber-500 tracking-wider uppercase mb-3 block">
                    {card.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1c2722] tracking-tight leading-snug mb-3 group-hover:text-[#015435] transition-colors">
                    {card.heading}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Link 
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Our Expertise & Capabilities Section --- */}
      <section id="our-expertise" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Eyebrow & Subtitle */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-32">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Our Expertise & Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-[#1c2722] leading-[1.12]">
              Solutions Built Around<br />
              <span className="text-amber-500">Milling Needs.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md pt-1">
              Complete end-to-end execution, consultancy, plant engineering, and strategic regulatory compliance tailored to your scale.
            </p>
          </div>

          {/* Right Column: Accordion Items with smooth grid-template-rows transition */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 border-t border-b border-slate-200/80 min-h-[460px] sm:min-h-[500px]">
            {[
              {
                id: "01",
                title: "PROJECT PLANNING & DEVELOPMENT",
                desc: "Complete project development, land appraisal, conceptual planning, DPR preparation, techno-economic studies, commissioning, and handover."
              },
              {
                id: "02",
                title: "PLANT OPERATIONS & ENGINEERING",
                desc: "Operational consultancy, production optimisation, bottleneck resolution, plant layouts, structural design, electrical and civil engineering, and load assessments."
              },
              {
                id: "03",
                title: "AUTOMATION & TECHNOLOGY",
                desc: "SCADA, PLCs, smart telemetry, custom automation, modern machinery, energy-efficient drives, and IoT-based upgrades for existing plants."
              },
              {
                id: "04",
                title: "TRAINING & COMPLIANCE",
                desc: "Hands-on staff training, SOPs, safety practices, factory registrations, environmental permissions, and statutory compliance."
              },
              {
                id: "05",
                title: "SUBSIDIES & POLICY ADVISORY",
                desc: "Guidance on central and state incentives, capital subsidies, government schemes, grants, and applicable industrial policies."
              },
              {
                id: "06",
                title: "QUALITY & MAINTENANCE",
                desc: "Quality-control systems, preventive audits, ISO alignment, breakdown support, preventive servicing, and Annual Maintenance Contracts."
              }
            ].map((item, idx) => {
              const isOpen = activeExpertise === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleExpertise(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-sm sm:text-base font-extrabold text-amber-500 tracking-wider w-7 sm:w-9 shrink-0">
                        {item.id}
                      </span>
                      <h3 className={`text-sm sm:text-[15px] lg:text-base font-extrabold tracking-wide uppercase transition-colors ${
                        isOpen ? "text-[#1c2722]" : "text-[#1c2722] group-hover:text-[#015435]"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? "bg-amber-500 text-white shadow-sm" 
                        : "border border-slate-200/90 bg-white text-slate-500 group-hover:border-slate-300 group-hover:text-slate-700 shadow-2xs"
                    }`}>
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-11 sm:pl-15 pr-4 pt-2.5 pb-1 text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- Industrial Solutions Section --- */}
      <section id="industrial-solutions" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-[#FAF9F5] border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto space-y-12 sm:space-y-16">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Industrial Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
              Comprehensive Milling<br className="hidden sm:inline" /> & Grain <span className="text-amber-500">Solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Precision engineering for maximum flour yield, efficient energy use, and dependable industrial performance.
            </p>
          </div>

          {/* 10 Solutions 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {[
              {
                id: "01",
                title: "Turnkey Solutions",
                desc: "End-to-end milling solutions covering planning, engineering, machinery, installation, automation, and commissioning.",
                cta: "View Solutions",
                href: "/turnkey-projects",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-full h-full text-[#bfac24] fill-current">
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path d="M1.463 2.442A1.5 1.5 0 0 1 2.963 1h1.075a1.5 1.5 0 0 1 1.499 1.442l.423 11A1.5 1.5 0 0 1 4.46 15H2.54a1.5 1.5 0 0 1-1.5-1.558zM2.963 2a.5.5 0 0 0-.5.48l-.424 11a.5.5 0 0 0 .5.52h1.922a.5.5 0 0 0 .5-.52l-.424-11a.5.5 0 0 0-.5-.48zM13.5 15a1.5 1.5 0 0 0 1.5-1.5v-9a.5.5 0 0 0-.854-.354L11 7.293V4.5a.5.5 0 0 0-.832-.374L6.72 7.191l.05 1.294L10 5.613V8.5a.5.5 0 0 0 .854.354L14 5.707V13.5a.5.5 0 0 1-.5.5H13v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6.91a2.5 2.5 0 0 1-.45 1zM9 14v-3h3v3z" />
                  </svg>
                )
              },
              {
                id: "02",
                title: "Flour Mills",
                desc: "Complete flour milling systems designed for consistent quality, efficient production, and reliable performance across different capacities.",
                cta: "View Flour Mills",
                href: "/flour-mills",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#bfac24]">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.35 9.65L3 21M19.67 8.586c-2.128 2.128-5.32 1.064-5.32 1.064s-1.064-3.192 1.064-5.32c1.389-1.389 3.231-1.418 4.343-1.27a1.36 1.36 0 0 1 1.184 1.183c.147 1.112.118 2.954-1.271 4.343m-3.902 7.094c-2.837 0-4.256-2.837-4.256-2.837s1.419-2.837 4.256-2.837c1.82 0 3.056 1.166 3.709 2.003a1.34 1.34 0 0 1 0 1.668c-.653.837-1.89 2.003-3.709 2.003M8.32 8.232c0 2.838 2.838 4.256 2.838 4.256s2.837-1.418 2.837-4.256c0-1.819-1.166-3.055-2.004-3.708a1.34 1.34 0 0 0-1.667 0c-.837.653-2.004 1.89-2.004 3.708m2.838 12.058c-2.838 0-4.257-2.837-4.257-2.837s1.42-2.837 4.257-2.837c1.819 0 3.055 1.166 3.708 2.003a1.34 1.34 0 0 1 0 1.668c-.653.837-1.89 2.003-3.708 2.003m-7.449-7.447c0 2.837 2.838 4.255 2.838 4.255s2.837-1.418 2.837-4.255c0-1.82-1.166-3.056-2.004-3.709a1.34 1.34 0 0 0-1.667 0c-.837.653-2.004 1.89-2.004 3.708" />
                  </svg>
                )
              },
              {
                id: "03",
                title: "Emery Stones & Dressing",
                desc: "Precision-made emery stones and professional dressing solutions engineered for consistent grinding performance and long service life.",
                cta: "View Stones & Dressers",
                href: "/emery-stones",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#bfac24] fill-current">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m0 13c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3m2.75-7.17A4.9 4.9 0 0 0 13 7.1V4.07c1.46.18 2.79.76 3.9 1.62l-2.14 2.14ZM11 7.1c-.64.13-1.23.38-1.75.73L7.11 5.69a7.94 7.94 0 0 1 3.9-1.62V7.1ZM7.83 9.25c-.35.52-.6 1.12-.73 1.75H4.07c.18-1.46.76-2.79 1.62-3.9zM7.1 13c.13.64.38 1.23.73 1.75L5.69 16.9A7.94 7.94 0 0 1 4.07 13zm2.15 3.17c.52.35 1.12.6 1.75.73v3.03a7.94 7.94 0 0 1-3.9-1.62l2.14-2.14Zm3.75.73c.64-.13 1.23-.38 1.75-.73l2.14 2.14a7.94 7.94 0 0 1-3.9 1.62V16.9Zm3.17-2.15c.35-.52.6-1.12.73-1.75h3.03a7.94 7.94 0 0 1-1.62 3.9zM16.9 11c-.13-.64-.38-1.23-.73-1.75l2.14-2.15a7.94 7.94 0 0 1 1.62 3.9z" />
                  </svg>
                )
              },
              {
                id: "04",
                title: "Power Saving",
                desc: "Energy-efficient solutions designed to reduce power consumption, optimise plant performance, and improve overall operating efficiency.",
                cta: "View Power Systems",
                href: "/power-saving",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full text-[#bfac24]">
                    <path d="M0 0h48v48H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M26.92 38.382h10.218m-5.108-5.109V43.49m-19.692.01L37.14 18.698H25.76L36.903 4.5H24.33c-1.25 0-2.405.667-3.03 1.75L10.86 24.333h8.94z" />
                  </svg>
                )
              },
              {
                id: "05",
                title: "Automation",
                desc: "Smart automation and control systems that connect machinery, processes, and plant operations for greater control and visibility.",
                cta: "View Automation",
                href: "/automation",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full text-[#bfac24]">
                    <path d="M0 0h48v48H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19.77a11 11 0 0 0-2.26.94l.26 4.53L5.44 25a11 11 0 0 0-.94 2.26l3.37 3.05l-3.37 3a10.7 10.7 0 0 0 .94 2.26l4.56-.18l-.23 4.54a11 11 0 0 0 2.26.93l3.05-3.37l3 3.37a10.6 10.6 0 0 0 2.26-.93l-.23-4.54l4.54.23a10.6 10.6 0 0 0 .93-2.26l-3.37-3l3.37-3.05a11 11 0 0 0-.92-2.31l-4.54.23l.23-4.53a10.7 10.7 0 0 0-2.26-.94l-3 3.37Z" />
                    <circle cx="15.05" cy="30.32" r="3.96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M29.91 7.14a11 11 0 0 0-2.27.93l.24 4.54l-4.54-.23a10.6 10.6 0 0 0-.93 2.26l3.36 3l-3.36 3.05a11 11 0 0 0 .93 2.31l4.54-.23l-.24 4.53a11 11 0 0 0 2.27.94l3-3.37l3 3.37a11 11 0 0 0 2.26-.94L38 22.76l4.53.23a11 11 0 0 0 .94-2.26l-3.37-3.05l3.37-3a10.7 10.7 0 0 0-.94-2.26l-4.53.19l.23-4.54A11 11 0 0 0 36 7.14l-3 3.37Z" />
                    <circle cx="32.95" cy="17.68" r="3.96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )
              },
              {
                id: "06",
                title: "Grain Storage & Handling Systems",
                desc: "Integrated silos, conveyors, elevators, and handling systems for safe storage and smooth movement of grain throughout the plant.",
                cta: "View Silos & Handling",
                href: "/grain-storage-handling",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-full h-full text-[#bfac24] fill-current">
                    <path d="M0 0h36v36H0z" fill="none" />
                    <path d="M33 6.69c-.18-3.41-9.47-4.33-15-4.33S3 3.29 3 6.78v22.59c0 3.49 9.43 4.43 15 4.43s15-.93 15-4.43zm-2 7.56c-.33.86-5.06 2.45-13 2.45a37.5 37.5 0 0 1-11-1.36v2.08a43.3 43.3 0 0 0 11 1.28c4 0 9.93-.48 13-2v5.17c-.33.86-5.06 2.45-13 2.45a37.5 37.5 0 0 1-11-1.4V25a43.3 43.3 0 0 0 11 1.28c4 0 9.93-.48 13-2v5.1c-.35.86-5.08 2.45-13 2.45S5.3 30.2 5 29.37V6.82c.3-.82 5-.246 13-.246c7.77 0 12.46 1.53 13 2.37c-.52.87-5.21 2.39-13 2.39A37.6 37.6 0 0 1 7 7.76v2.09a43.5 43.5 0 0 0 11 1.27c4 0 9.93-.48 13-2Z" />
                  </svg>
                )
              },
              {
                id: "07",
                title: "Grain Processing",
                desc: "Complete grain-processing solutions covering cleaning, grading, conditioning, and preparation for efficient milling.",
                cta: "View Processing",
                href: "/grain-processing",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full text-[#bfac24]">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c-2 2-3 5-1 7s5 1 7-1 3-5 1-7-5-1-7 1zm2 1.5c1.5 1.5 2.5 3.5 2 4.5" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 8c-1.8 1.8-2.6 4.5-.9 6.2s4.4.9 6.2-.9 2.6-4.5.9-6.2-4.4-.9-6.2.9zm1.7 1.3c1.3 1.3 2.2 3.1 1.8 4" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 20c-1.8 1.8-2.6 4.5-.9 6.2s4.4.9 6.2-.9 2.6-4.5.9-6.2-4.4-.9-6.2.9zm1.7 1.3c1.3 1.3 2.2 3.1 1.8 4" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M30 14c-1.8 1.8-2.6 4.5-.9 6.2s4.4.9 6.2-.9 2.6-4.5.9-6.2-4.4-.9-6.2.9zm1.7 1.3c1.3 1.3 2.2 3.1 1.8 4" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 34c0-3.3 9-6 20-6s20 2.7 20 6-9 6-20 6-20-2.7-20-6z" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 34v4c0 3.3 9 6 20 6s20-2.7 20-6v-4" />
                    <circle cx="18" cy="34" r="1.2" fill="currentColor" />
                    <circle cx="26" cy="33" r="1.2" fill="currentColor" />
                    <circle cx="34" cy="35" r="1.2" fill="currentColor" />
                  </svg>
                )
              },
              {
                id: "08",
                title: "Flour Processing",
                desc: "Advanced grinding, sifting, separation, and refining solutions for consistent flour quality and controlled particle size.",
                cta: "View Grinding & Sifting",
                href: "/flour-processing",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full text-[#bfac24] fill-current">
                    <path d="M0 0h512v512H0z" fill="none" />
                    <path d="M275.8 42.39c-18.5.45-46.9 19.85-69 40.34c-4.6 4.26-8.8 8.41-12.7 12.39c56.2 2.45 109.2-.36 161.8-4.21c-5.1-4.92-11-10.33-17.6-15.86c-20.5-17.21-46.6-33.05-62.5-32.66M436 102.9c-100 7.3-198.7 18.6-313.9 4.3c-5.2 5.1-7.9 9.6-8.7 13.3c-.7 3.6-.2 6.9 2.2 11.1c113.5 25.3 227 25.9 327.2-6.6c.5-2.8.1-5.7-1.1-9.4c-1.2-3.8-3.3-8.1-5.7-12.7m-12.5 46.6c-89.1 23.9-186.5 23.7-284.1 5.4c-23.9 92.3-70 175.4-56.93 272.7l1.16 8.6l-8.57 1.5c-9.83 1.6-23.83 10.3-31.95 19.3c-4.07 4.5-6.59 9-7.18 11.5c-.59 2.4-.94 1.4.33 2.2c5.18 3.5 21 5.4 37.83 2.8s34.81-8.9 45.71-15.8l3-1.9l3.5.7c87.2 16.5 166.5 24.8 254 3.6l4.3-1.1l3.5 2.8c5.6 4.6 23.7 8.4 42.4 9c17 .6 33.8-.5 45.2-1c-1.1-3-3.3-7.6-6.6-12.5c-4.2-6-9.5-12.2-14.5-16.9c-5.1-4.7-10.4-7.4-11.1-7.6l-8.9-1.7l1.8-8.9c18.1-89.2 26.5-179.5-12.9-272.7M271 184.9c59.3 0 106.2 54.7 106.2 120.6S330.3 426.1 271 426.1s-106.2-54.7-106.2-120.6S211.7 184.9 271 184.9m0 18c-48.1 0-88.2 45.2-88.2 102.6c0 52.7 33.8 95.1 76.6 101.7l2-39.1c-30.8-6-39.8-39.4-39.9-51.7c9.3 1 30 8.3 41.3 24.8l1.3-24.4c-30.9-5.9-39.9-39.4-40-51.7c9.2 1 30.1 8.3 41.4 25l1.3-24.3c-17.8-7.4-23.3-29.1-23.4-37.5c8 .8 27.4 8.2 33.9 25.5c8.4-16.4 28.3-21.7 36.2-21.7c-.9 8.8-9 30.6-28.8 35.4l-1.2 23.3c12.9-15.3 34.3-20.4 43.7-20.3c-1.5 12.1-13.8 44.5-45.1 47.2l-1.3 24.6c12.9-15.4 34.4-20.5 43.7-20.5c-1.3 12.1-13.7 44.6-45.1 47.2l-2 38.8c45.2-3.8 81.8-47.5 81.8-102.3c0-57.4-40.1-102.6-88.2-102.6" />
                  </svg>
                )
              },
              {
                id: "09",
                title: "Packaging & Vending Machines",
                desc: "Efficient packaging and vending solutions that take freshly processed flour from production to convenient distribution and sale.",
                cta: "View Packaging Solutions",
                href: "/vending-machines",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-full h-full text-[#bfac24] fill-current">
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path d="M1.5 1c-.277 0-.5.223-.5.5v13c0 .277.223.5.5.5h12c.277 0 .5-.223.5-.5v-13c0-.277-.223-.5-.5-.5zm1 1h8c.277 0 .5.223.5.5v10c0 .277-.223.5-.5.5h-8a.5.5 0 0 1-.5-.5v-10c0-.277.223-.5.5-.5m10 0c.277 0 .5.223.5.5v1a.499.499 0 1 1-1 0v-1c0-.277.223-.5.5-.5m-6 2a.5.5 0 0 0-.465.314s-.257.644-.514 1.477q-.093.305-.183.633l-.033-.057a3.8 3.8 0 0 0-.742-.916c-.276-.238-.61-.427-.998-.447a.5.5 0 0 0-.25.96c.513.206.648.422.738.725c.09.304.072.725.072 1.186s.017 1.01.399 1.463c.31.368.796.576 1.476.64V12h1V9.979c.68-.065 1.166-.273 1.477-.641c.381-.453.398-1.002.398-1.463s-.018-.882.072-1.186s.226-.519.739-.724a.5.5 0 0 0-.25-.961h-.002c-.388.02-.721.209-.996.447c-.291.252-.535.57-.743.916l-.033.057q-.09-.328-.183-.633c-.257-.833-.514-1.477-.514-1.477A.5.5 0 0 0 6.5 4m6 1a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1" />
                  </svg>
                )
              },
              {
                id: "10",
                title: "Books",
                desc: "Practical knowledge and resources covering flour milling, grain processing, technology, entrepreneurship, and the craft behind the industry.",
                cta: "View Publications",
                href: "/books",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full text-[#bfac24] fill-current">
                    <path d="M0 0h32v32H0z" fill="none" />
                    <path d="M3.5 23A1.5 1.5 0 0 1 2 21.5V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v2h5a2 2 0 0 1 2 2v15H16.5a.5.5 0 0 0 0 1h13.415a1.5 1.5 0 0 1-1.415 1h-12a1.5 1.5 0 0 1-1.5-1.5V26H9.5A1.5 1.5 0 0 1 8 24.5V23zm13.415-1a1.5 1.5 0 0 1-1.415 1H22V9a1 1 0 0 0-1-1h-4v13H3.5a.5.5 0 0 0 0 1zM9 23h.5q-.264.001-.5.085zm7-3V6a1 1 0 0 0-1-1H5v15zm0 6v1.085q.236-.084.5-.085H29V13a1 1 0 0 0-1-1h-5v12H9.5a.5.5 0 0 0 0 1h13.415a1.5 1.5 0 0 1-1.415 1z" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[220px]"
              >
                {/* Text Content */}
                <div className="relative z-10 max-w-[68%] sm:max-w-[70%]">
                  <span className="text-xs font-black text-amber-500 tracking-wider block mb-1.5">
                    {card.id}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-[#015435] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="relative z-10 pt-5">
                  <Link 
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Right Decorative SVG Art */}
                <div className="absolute right-3.5 bottom-3.5 sm:right-5 sm:bottom-5 w-20 h-20 sm:w-24 sm:h-24 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none flex items-center justify-center">
                  {card.svg}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Rooted in Tradition / Why RSC Section --- */}
      <section id="why-rsc" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-[#FAF8F5] border-t border-slate-200/50 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-between">
          
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight text-[#1c2722] leading-[1.12]">
              Rooted in tradition,<br />
              driven by<br />
              <span className="text-amber-500">modern innovation.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md pt-2">
              Delivering precision, endurance, and customer trust across every milestone of our engineering journey.
            </p>
          </div>

          {/* Right Column: Orbital Circular Diagram */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end select-none py-6 lg:py-0">
            
            {/* Desktop Orbital Diagram (visible lg and up) */}
            <div className="hidden lg:block relative w-[640px] h-[640px]">
              
              {/* Concentric Golden Orbit Rings & Ambience */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] rounded-full bg-amber-200/20 blur-3xl" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 640 640" fill="none">
                  {/* Inner subtle concentric circle */}
                  <circle cx="320" cy="320" r="100" stroke="#FDE68A" strokeWidth="1.5" strokeOpacity="0.7" />
                  
                  {/* Primary Golden Circular Orbit Path (passes smoothly behind card centers) */}
                  <circle cx="320" cy="320" r="215" stroke="#E5A93C" strokeWidth="2.5" strokeOpacity="0.95" />
                  
                  {/* Outer subtle concentric circle */}
                  <circle cx="320" cy="320" r="290" stroke="#FDE68A" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="5 5" />
                </svg>
              </div>

              {/* Central WHY RSC Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-[#FFFDF8] via-[#FFF9ED] to-[#FEF3C7] border-2 border-amber-300 shadow-[0_8px_25px_rgba(245,158,11,0.18)] flex flex-col items-center justify-center text-center z-10">
                <span className="text-slate-900 font-extrabold text-xs xl:text-sm tracking-[0.25em] uppercase">
                  WHY RSC
                </span>
                <div className="w-8 h-0.5 bg-amber-400 mt-1.5 rounded-full" />
              </div>

              {/* 5 Orbital Cards positioned in a mathematically regular circle */}
              {[
                {
                  title: "Trust",
                  desc: "Trust is indispensable to Choyal. We believe in fair and transparent business, giving our clients peace of mind.",
                  icon: "/images/why-rscg-section/icons/trust.png",
                  x: 320,
                  y: 105
                },
                {
                  title: "Quality",
                  desc: "Quality and excellence define our product range. We provide solutions built to deliver dependable performance.",
                  icon: "/images/why-rscg-section/icons/quality.png",
                  x: 525,
                  y: 254
                },
                {
                  title: "Innovation",
                  desc: "Driven by rigorous R&D, we develop advanced milling solutions for different budgets and industrial scales.",
                  icon: "/images/why-rscg-section/icons/innovation.png",
                  x: 446,
                  y: 494
                },
                {
                  title: "Economical Solutions",
                  desc: "We provide cost-effective solutions designed to maximise operational efficiency and support profitable growth.",
                  icon: "/images/why-rscg-section/icons/economical-solutions.png",
                  x: 194,
                  y: 494
                },
                {
                  title: "Experience",
                  desc: "With 60+ years of experience, we bring deep milling expertise, proven technology, and skilled teams to every project.",
                  icon: "/images/why-rscg-section/icons/experience.png",
                  x: 115,
                  y: 254
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    left: `${item.x}px`,
                    top: `${item.y}px`,
                    transform: "translate(-50%, -50%)"
                  }}
                  className="absolute w-[180px] xl:w-[190px] z-20 group"
                >
                  <div className="relative pt-5">
                    {/* Circular Icon Badge centered directly on top border */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border-2 border-amber-300 flex items-center justify-center p-2 z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>

                    {/* Card Body seamlessly joined under the icon badge */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl pt-7 pb-3.5 px-3.5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-amber-100/90 text-center flex flex-col items-center hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                      <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-[10.5px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Mobile / Tablet View (grid format for optimal responsiveness) */}
            <div className="block lg:hidden w-full space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFFDF8] via-[#FFF9ED] to-[#FEF3C7] border-2 border-amber-200 shadow-md flex flex-col items-center justify-center text-center">
                  <span className="text-slate-900 font-extrabold text-xs tracking-[0.2em] uppercase">
                    WHY RSC
                  </span>
                  <div className="w-8 h-0.5 bg-amber-400 mt-1.5 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {[
                  {
                    icon: "/images/why-rscg-section/icons/trust.png",
                    title: "Trust",
                    desc: "Trust is indispensable to Choyal. We believe in fair and transparent business, giving our clients peace of mind."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/quality.png",
                    title: "Quality",
                    desc: "Quality and excellence define our product range. We provide solutions built to deliver dependable performance."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/innovation.png",
                    title: "Innovation",
                    desc: "Driven by rigorous R&D, we develop advanced milling solutions for different budgets and industrial scales."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/economical-solutions.png",
                    title: "Economical Solutions",
                    desc: "We provide cost-effective solutions designed to maximise operational efficiency and support profitable growth."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/experience.png",
                    title: "Experience",
                    desc: "With 60+ years of experience, we bring deep milling expertise, proven technology, and skilled teams to every project."
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative bg-white rounded-2xl pt-7 pb-4 px-4 shadow-sm border border-amber-100/70 text-center flex flex-col items-center ${
                      idx === 4 ? "sm:col-span-2 sm:max-w-xs sm:mx-auto" : ""
                    }`}
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border border-amber-100 flex items-center justify-center p-2">
                      <Image src={item.icon} alt={item.title} width={24} height={24} className="object-contain" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm tracking-tight mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* --- Turnkey Solutions Section --- */}
      <section id="turnkey-projects-showcase" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto space-y-10 sm:space-y-12">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Turnkey Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
              From vision to a mill<br className="hidden sm:inline" /> in <span className="text-amber-500">action.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Completed turnkey projects shaped from the ground up—from the first concept to a fully operational mill.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
            
            {/* Left Tall Feature Card: Carr's green Flour Mill */}
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-lg min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-between p-6 sm:p-8 bg-slate-900 border border-slate-100">
              <Image 
                src="/images/turnkey-section/carrs-flour-mill.png" 
                alt="Carr's green Flour Mill" 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 z-10 pointer-events-none" />

              {/* Top-Right Location Badge */}
              <div className="relative z-20 flex justify-end">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">Maldon, UK</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-20 space-y-4 pt-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Carr's green <span className="text-amber-400">Flour Mill</span>
                </h3>
                <div>
                  <Link 
                    href="/projects/carrs-flour" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:gap-3 group/btn"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: 2 Stacked Feature Cards */}
            <div className="flex flex-col gap-6 lg:gap-7 h-full">
              
              {/* Card 1: Al Ghurair Foods */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-lg min-h-[220px] sm:min-h-[245px] lg:min-h-[275px] flex-1 flex flex-col justify-between p-6 sm:p-7 bg-slate-900 border border-slate-100">
                <Image 
                  src="/images/turnkey-section/al-ghurair.png" 
                  alt="Al Ghurair Foods" 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 pointer-events-none" />

                {/* Top-Right Location Badge */}
                <div className="relative z-20 flex justify-end">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Dubai, UAE</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 space-y-3 pt-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    Al Ghurair Foods
                  </h3>
                  <div>
                    <Link 
                      href="/projects/al-ghurair-foods" 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:gap-2.5 group/btn"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Patanjali Foods */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-lg min-h-[220px] sm:min-h-[245px] lg:min-h-[275px] flex-1 flex flex-col justify-between p-6 sm:p-7 bg-slate-900 border border-slate-100">
                <Image 
                  src="/images/turnkey-section/patanjali-foods.png" 
                  alt="Patanjali Foods" 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 pointer-events-none" />

                {/* Top-Right Location Badge */}
                <div className="relative z-20 flex justify-end">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Haridwar, India</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 space-y-3 pt-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    Patanjali Foods
                  </h3>
                  <div>
                    <Link 
                      href="/projects/patanjali-ayurveda" 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:gap-2.5 group/btn"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-[#F6F6F2] border-t border-slate-200/60 overflow-hidden">
        

        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-between relative">
          
          {/* Left Column: Heading, Subtitle & Interactive Navigation Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-sm font-bold text-[#015435] tracking-wide block">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
                What our clients are<br className="hidden sm:inline" /> saying
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              Experiences shared by our clients who trusted us with their industrial projects and milling solutions.
            </p>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2 ml-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonial === i ? "w-7 bg-[#015435]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stacked Carousel Deck */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end select-none">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[660px] h-[440px] sm:h-[460px] flex items-center justify-center">
            {testimonials.map((t, idx) => {
              const diff = (idx - activeTestimonial + testimonials.length) % testimonials.length;
              
              let positionClasses = "";
              let clickHandler = () => {};

              if (diff === 0) {
                // Center active card
                positionClasses = "z-20 scale-100 opacity-100 translate-x-0 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.14)] border border-slate-100 pointer-events-auto";
              } else if (diff === 1) {
                // Next card (Right)
                positionClasses = "z-10 scale-[0.88] opacity-50 sm:opacity-60 translate-x-[42%] sm:translate-x-[50%] md:translate-x-[54%] shadow-md border border-slate-200/60 cursor-pointer hover:opacity-80 pointer-events-auto";
                clickHandler = () => setActiveTestimonial(idx);
              } else {
                // Prev card (Left)
                positionClasses = "z-10 scale-[0.88] opacity-50 sm:opacity-60 -translate-x-[42%] sm:-translate-x-[50%] md:-translate-x-[54%] shadow-md border border-slate-200/60 cursor-pointer hover:opacity-80 pointer-events-auto";
                clickHandler = () => setActiveTestimonial(idx);
              }

              return (
                <div
                  key={idx}
                  onClick={clickHandler}
                  className={`absolute top-1/2 -translate-y-1/2 w-[270px] sm:w-[310px] md:w-[340px] h-[370px] sm:h-[390px] p-6 sm:p-7 rounded-[24px] bg-white transition-all duration-500 ease-out flex flex-col justify-between ${positionClasses}`}
                >
                  {/* Top Avatar with Verified Green Badge */}
                  <div className="flex items-center">
                    <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center relative shrink-0">
                      <User className="w-5 h-5 text-slate-700" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#015435] border-2 border-white flex items-center justify-center">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal my-auto py-2">
                    “{t.quote}”
                  </p>

                  {/* Star Rating & Author Info */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                        {t.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 line-clamp-1">
                        {t.role ? `${t.role}, ` : ""}{t.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

        </div>
      </section>

      {/* --- Accordion FAQ Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white border-t border-slate-100 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center justify-between">
          
          {/* Left Column: Heading & Accordion Items */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-sm sm:text-base font-bold text-[#015435] tracking-wide block">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
                Building the Future of Milling:{" "}
                <span className="text-amber-500 block sm:inline">Every Query Answered</span>
              </h2>
            </div>

            <div className="space-y-3.5 sm:space-y-4 pt-1">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-[22px] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-7 flex justify-between items-center text-left focus:outline-none cursor-pointer gap-4 group"
                  >
                    <span className="text-[#1c2722] font-bold text-base sm:text-lg leading-snug group-hover:text-[#015435] transition-colors">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      activeFaq === idx 
                        ? "bg-amber-100 text-amber-700 rotate-180" 
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200/80"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 sm:px-7 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/90">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase with Blob, Floating Images & Vector Accents */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] select-none py-6 lg:py-0">
            
            {/* Background Organic Amber Blob */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <div className="w-[340px] sm:w-[420px] lg:w-[460px] h-[340px] sm:h-[400px] bg-gradient-to-tr from-amber-300/40 via-amber-200/50 to-amber-100/30 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] filter blur-xl opacity-90 transform scale-105" />
              <svg
                viewBox="0 0 500 500"
                className="absolute w-[360px] sm:w-[440px] lg:w-[480px] h-[360px] sm:h-[420px] text-amber-200/40 fill-current"
              >
                <path d="M421.5,317.5Q386,385,317.5,422.5Q249,460,183.5,422.5Q118,385,86,317.5Q54,250,86,182.5Q118,115,183.5,78Q249,41,317.5,78Q386,115,421.5,182.5Q457,250,421.5,317.5Z" />
              </svg>
            </div>

            {/* Top-Right Vector Accent: Wheat Stalk */}
            <div className="absolute -top-3 right-2 sm:right-6 lg:-right-1 z-20 pointer-events-none animate-faq-sway">
              <svg
                className="w-14 h-24 sm:w-16 sm:h-28 text-amber-500 drop-shadow-xs"
                viewBox="0 0 60 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M28 92 C 28 65, 30 35, 30 8" />
                <path d="M30 18 C 38 14, 44 8, 44 4 C 38 8, 32 14, 30 18 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 22 C 22 18, 16 12, 16 8 C 22 12, 28 18, 30 22 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 34 C 40 30, 48 24, 48 20 C 40 24, 32 30, 30 34 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 38 C 20 34, 12 28, 12 24 C 20 28, 28 34, 30 38 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 50 C 40 46, 48 40, 48 36 C 40 40, 32 46, 30 50 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 54 C 20 50, 12 44, 12 40 C 20 44, 28 50, 30 54 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 66 C 39 62, 46 57, 46 53 C 39 57, 32 62, 30 66 Z" fill="#F59E0B" fillOpacity="0.15" />
                <path d="M30 70 C 21 66, 14 61, 14 57 C 21 61, 28 66, 30 70 Z" fill="#F59E0B" fillOpacity="0.15" />
                <line x1="30" y1="8" x2="30" y2="1" />
                <line x1="44" y1="4" x2="50" y2="0" />
                <line x1="16" y1="8" x2="10" y2="4" />
              </svg>
            </div>

            {/* Bottom-Left Vector Accent: Amber Dot Cluster Matrix */}
            <div className="absolute bottom-4 left-2 sm:left-6 lg:left-0 z-0 pointer-events-none">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" viewBox="0 0 80 80" fill="currentColor">
                {Array.from({ length: 7 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => {
                    const dx = col - 3;
                    const dy = row - 3;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist <= 3.2) {
                      return (
                        <circle
                          key={`dot-${row}-${col}`}
                          cx={col * 11 + 7}
                          cy={row * 11 + 7}
                          r={dist > 2.2 ? 1.6 : 2.2}
                          opacity={0.35 + (3.2 - dist) * 0.2}
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>
            </div>

            {/* Floating Overlapping Image Cards */}
            <div className="relative flex flex-col items-center">
              
              {/* Card 1: Top Tilted Plant Image */}
              <div className="relative z-10 w-[240px] sm:w-[280px] lg:w-[310px] xl:w-[330px] -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30 animate-faq-float-1">
                <div className="bg-white p-2.5 sm:p-3 rounded-3xl sm:rounded-[28px] shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-slate-100/90">
                  <div className="aspect-[4/3] rounded-2xl sm:rounded-[20px] overflow-hidden relative bg-slate-100">
                    <Image
                      src="/images/faq/img1.png"
                      alt="Modern Milling Plant & Engineering"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 330px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Bottom Tilted Emery Stone Machine Image */}
              <div className="relative z-20 -mt-16 sm:-mt-20 ml-16 sm:ml-24 md:ml-28 w-[240px] sm:w-[280px] lg:w-[310px] xl:w-[330px] rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30 animate-faq-float-2">
                <div className="bg-white p-2.5 sm:p-3 rounded-3xl sm:rounded-[28px] shadow-[0_20px_45px_rgba(0,0,0,0.16)] border border-slate-100/90">
                  <div className="aspect-[4/3] rounded-2xl sm:rounded-[20px] overflow-hidden relative bg-slate-100">
                    <Image
                      src="/images/faq/img2.png"
                      alt="Emery Stone Dressing Precision Engineering"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 330px"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- Logos and Media Gallery Section (Hidden for now) --- */}
      {/* 
      <section id="logos-gallery" className="w-full py-16 lg:py-24 bg-white border-t border-slate-200/50 overflow-hidden relative z-10">
        <div className="w-full mx-auto">
          
          <div className="relative w-full space-y-6 marquee-container mask-gradient">
            
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
      */}
      {/* --- Prestigious Clients Section (Redesigned & Rearranged) --- */}
      <section className="w-full py-16 lg:py-24 bg-[#FBFBF9] border-t border-slate-200/50 overflow-hidden relative z-10">
        <div className="w-full space-y-12 lg:space-y-16">
          
          {/* Subsection 1: International Markets */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center px-6 sm:px-12 space-y-1.5">
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#015435] uppercase block">
                International Markets
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#133a25] tracking-tight">
                Global Network Partners
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 marquee-container">
              {/* Row 1 */}
              <div className="flex overflow-hidden w-full select-none gap-5 sm:gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#FBFBF9] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#FBFBF9] to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full">
                  {internationalClientsRow1.map((client, idx) => (
                    <ClientLogoCard key={`intl-r1-1-${idx}`} client={client} />
                  ))}
                </div>
                <div className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full" aria-hidden="true">
                  {internationalClientsRow1.map((client, idx) => (
                    <ClientLogoCard key={`intl-r1-2-${idx}`} client={client} />
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex overflow-hidden w-full select-none gap-5 sm:gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#FBFBF9] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#FBFBF9] to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 animate-marquee-reverse items-center gap-5 sm:gap-6 min-w-full">
                  {internationalClientsRow2.map((client, idx) => (
                    <ClientLogoCard key={`intl-r2-1-${idx}`} client={client} />
                  ))}
                </div>
                <div className="flex shrink-0 animate-marquee-reverse items-center gap-5 sm:gap-6 min-w-full" aria-hidden="true">
                  {internationalClientsRow2.map((client, idx) => (
                    <ClientLogoCard key={`intl-r2-2-${idx}`} client={client} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subsection 2: Domestic Markets */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center px-6 sm:px-12 space-y-1.5">
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#015435] uppercase block">
                Domestic Markets
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#133a25] tracking-tight">
                National &amp; Regional Partners
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 marquee-container">
              {/* Row 1 */}
              <div className="flex overflow-hidden w-full select-none gap-5 sm:gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#FBFBF9] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#FBFBF9] to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full">
                  {domesticClientsRow1.map((client, idx) => (
                    <ClientLogoCard key={`dom-r1-1-${idx}`} client={client} />
                  ))}
                </div>
                <div className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full" aria-hidden="true">
                  {domesticClientsRow1.map((client, idx) => (
                    <ClientLogoCard key={`dom-r1-2-${idx}`} client={client} />
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex overflow-hidden w-full select-none gap-5 sm:gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#FBFBF9] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#FBFBF9] to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 animate-marquee-reverse items-center gap-5 sm:gap-6 min-w-full">
                  {domesticClientsRow2.map((client, idx) => (
                    <ClientLogoCard key={`dom-r2-1-${idx}`} client={client} />
                  ))}
                </div>
                <div className="flex shrink-0 animate-marquee-reverse items-center gap-5 sm:gap-6 min-w-full" aria-hidden="true">
                  {domesticClientsRow2.map((client, idx) => (
                    <ClientLogoCard key={`dom-r2-2-${idx}`} client={client} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Pre-Footer CTA Section --- */}
      <section className="w-full py-10 sm:py-14 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#f6f6f4] relative z-10">
        <div className="w-full mx-auto">
          <div className="w-full bg-[#0B1510] rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border border-emerald-950/60 relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="max-w-3xl space-y-2.5 relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-tight tracking-tight">
                Come and see how the thinking becomes a plant.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                Visit the factory, workshop, Experience Centre and training facility in Ajmer or bring us the next milling problem worth solving.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-[#e5a024] text-slate-900 font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 text-sm sm:text-base uppercase tracking-wider cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Requirement</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </Link>
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
