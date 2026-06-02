"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowRight, 
  Settings, 
  Cpu, 
  Layers, 
  Activity, 
  Plus,
  Minus,
  CheckCircle,
  FileText,
  ShoppingBag,
  HelpCircle,
  X
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

interface ProductModel {
  name: string;
  size: string;
  image: string;
}

interface Product {
  id: string;
  title: string;
  category: "Digital Mills" | "Semi-Automatic" | "Sheller Mills" | "Traditional Mills";
  desc: string;
  price: string;
  image: string;
  specs: string[];
  models: ProductModel[];
}

export default function FlourMills() {
  const router = useRouter();
  const { addToQuote } = useQuote();
  const productsSectionRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const categories = [
    {
      name: "Digital Mills",
      image: "/images/plants/tablet_controlled_plant.webp",
      desc: "Touch screen PLC-driven smart grinders.",
      filter: "Digital Mills"
    },
    {
      name: "Semi-Automatic",
      image: "/images/plants/03.webp",
      desc: "Sensor-controlled modern mill plants.",
      filter: "Semi-Automatic"
    },
    {
      name: "Sheller Mills",
      image: "/images/plants/2_1.webp",
      desc: "High capacity gear and pulley drive experts.",
      filter: "Sheller Mills"
    },
    {
      name: "Traditional Mills",
      image: "/images/plants/dsc_4263.webp",
      desc: "Horizontal & vertical emery stone chakkis.",
      filter: "Traditional Mills"
    }
  ];

  const productsList: Product[] = [
    {
      id: "iquadra-mill",
      title: "iQuadra Mill",
      category: "Digital Mills",
      desc: "The world's most advanced digital stone mill. Features 2-way gap adjustment, android connectivity, data logging, and auto pressure.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/tablet_controlled_plant.webp",
      specs: [
        "Less space required",
        "Improved Output & Starch Damage control",
        "Up to 40% Power Saving",
        "Ethernet Enabled & Android Connectivity",
        "Hydraulic operated Auto Pressure System",
        "Controlled by 7\" TFT HMI touch screen panel"
      ],
      models: [
        { name: "iQuadra Mill - 1200 mm/48\" Sheller Type", size: "1200MM", image: "/images/plants/tablet_controlled_plant.webp" },
        { name: "iQuadra Mill - 900 mm/36\" Standard Type", size: "900MM", image: "/images/plants/tablet_controlled_plant.webp" }
      ]
    },
    {
      id: "wonder-mill",
      title: "Wonder Mill with Wonder Miller",
      category: "Digital Mills",
      desc: "World's first fully automated touchscreen integrated stone mill. Power-saving control balances friction and motor load.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/wonder-mill.png",
      specs: [
        "Fully automated touchscreen operation",
        "Complete PLC panel with CPU & HMI touch screen",
        "Sensors for grain flow and motor load",
        "Automatic stone gap adjustment",
        "Reduces electricity waste up to 30%"
      ],
      models: [
        { name: "Wonder Mill with Wonder Miller - 750 mm", size: "750MM", image: "/images/wonder-mill.png" }
      ]
    },
    {
      id: "wonder-mill-neo",
      title: "Wonder Mill Neo",
      category: "Semi-Automatic",
      desc: "Semi-automatic flour mill with integrated recipe parameters, VFD-driven screw feeder, and tiltable feeding hopper.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/03.webp",
      specs: [
        "Semi-automatic digital interface",
        "VFD screw feeder for steady grain feed",
        "Tiltable hopper with magnetic separator",
        "Consistent milling texture profiles"
      ],
      models: [
        { name: "Wonder Mill Neo - 750 mm", size: "750MM", image: "/images/plants/03.webp" }
      ]
    },
    {
      id: "atta-expert",
      title: "Atta Expert Mill",
      category: "Semi-Automatic",
      desc: "Heavy-duty horizontal mill with motorized feed screw, conical hopper, and high-efficiency bevel gear.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/samayshri_agro_1.webp",
      specs: [
        "Conical hopper with screw feeder",
        "PBL make geared motor",
        "Grain level sensor and automatic alarm panel",
        "Spiral bevel gearbox with 90-degree input"
      ],
      models: [
        { name: "Atta Expert Mill - 750 mm", size: "750MM", image: "/images/plants/samayshri_agro_1.webp" }
      ]
    },
    {
      id: "sheller-gear",
      title: "Sheller Mill with Gear Drive",
      category: "Sheller Mills",
      desc: "Industrial heavy-duty mill designed for double bearings, high-torque gear coupling, and heavy steel frame.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/2_1.webp",
      specs: [
        "Pedestal made of TATA heavy hollow pipe",
        "EN-8 hardened shaft edge with steel ball",
        "Double upper bearing No. 6312 & 22212",
        "Hardened lower housing with double SKF bearing"
      ],
      models: [
        { name: "Sheller Gear Drive Mill - 1200 mm", size: "1200MM", image: "/images/plants/2_1.webp" }
      ]
    },
    {
      id: "sheller-pulley",
      title: "Sheller Mill with Pulley Drive",
      category: "Sheller Mills",
      desc: "Belt-driven sheller horizontal chakki for high volume processing plants and general grain grinding.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/4.webp",
      specs: [
        "Standard belt-driven pulley configuration",
        "Double bearing housing (No. 6312 & 22212)",
        "TATA heavy steel pedestal channels",
        "Adjustable motor stand with safety guard"
      ],
      models: [
        { name: "Sheller Pulley Drive Mill - 1200 mm", size: "1200MM", image: "/images/plants/4.webp" },
        { name: "Sheller Pulley Drive Mill - 900 mm", size: "900MM", image: "/images/plants/4.webp" }
      ]
    },
    {
      id: "traditional-square",
      title: "Traditional Chakki (Square Frame)",
      category: "Traditional Mills",
      desc: "Classic horizontal grinding stone mill with motor, traditional hopper, or magnetic glass inlet.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/dsc_4263.webp",
      specs: [
        "750 mm Square Frame Horizontal Mill",
        "Heavy duty long frame - 1M base height",
        "Premium emery grinding stones included",
        "Optional conical screw feeder hopper"
      ],
      models: [
        { name: "Traditional Square Mill with Hopper", size: "750MM", image: "/images/plants/dsc_4263.webp" },
        { name: "Traditional Square Mill with Magnet", size: "750MM", image: "/images/plants/dsc_4263.webp" }
      ]
    },
    {
      id: "mini-horizontal",
      title: "Mini Horizontal Chakki",
      category: "Traditional Mills",
      desc: "Compact horizontal mill with motor stand, perfect for grocery shops, small outlets, and home start-ups.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/dsc_4268.webp",
      specs: [
        "350 mm (14\") Horizontal Mill with 2 HP motor",
        "Durable SKF Bearings",
        "Simple manual pressure wheel system",
        "3D computer-aided space saving design"
      ],
      models: [
        { name: "Mini Horizontal Chakki - 350 mm", size: "350MM", image: "/images/plants/dsc_4268.webp" }
      ]
    },
    {
      id: "vertical-danish",
      title: "Vertical Flour Mill (Danish Type)",
      category: "Traditional Mills",
      desc: "Danish style vertical grinding stone mill engineered for low temperature specialty flour milling.",
      price: "₹0.00 (Enquiry Only)",
      image: "/images/plants/9.webp",
      specs: [
        "Vertical mounting configuration",
        "Danish style vertical emery stones",
        "Ideal for spice and cereal de-husking",
        "High mechanical efficiency"
      ],
      models: [
        { name: "Vertical Danish Mill - 600 mm", size: "600MM", image: "/images/plants/9.webp" }
      ]
    }
  ];

  const filteredProducts = activeTab === "All" 
    ? productsList 
    : productsList.filter(p => p.category === activeTab);

  const handleCategorySelect = (categoryFilter: string) => {
    setActiveTab(categoryFilter);
    productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQtyChange = (modelId: string, val: number) => {
    setQuantities(prev => ({
      ...prev,
      [modelId]: Math.max(1, (prev[modelId] || 1) + val)
    }));
  };

  const handleAddToQuote = (prod: Product, model: ProductModel) => {
    const modelKey = `${prod.id}-${model.name.replace(/\s+/g, "-").toLowerCase()}`;
    const qty = quantities[modelKey] || 1;
    addToQuote({
      id: modelKey,
      name: model.name,
      image: prod.image,
      category: prod.category,
      size: model.size
    }, qty);
    
    // Reset quantity back to 1
    setQuantities(prev => ({
      ...prev,
      [modelKey]: 1
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>

      <Header onRequestCallback={() => router.push("/contact")} />

      {/* Hero Section */}
      <section className="w-full relative z-10 bg-brand-primary text-white py-16 lg:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,172,127,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex bg-brand-tertiary/20 text-brand-tertiary border border-brand-tertiary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Product Category
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-black tracking-tight leading-[1.1] text-white">
              Flour Mills
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
              Safe, wholesome, nutritious, and fresh cold-ground stone-milled flour using our advanced engineering technology.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/images/plants/turnkey_solutions.webp" 
              alt="RS Choyal Flour Mill Plant" 
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* Select Category Grid */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-800">
              Select Your Category
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Explore our specific engineering ranges to find the right grinding solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategorySelect(cat.filter)}
                className="group flex flex-col items-center bg-white rounded-3xl p-6 border border-slate-200/50 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-100 flex items-center justify-center">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="object-contain max-h-[85%] max-w-[85%] group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-bold text-slate-800 group-hover:text-brand-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {cat.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Product catalog */}
      <section ref={productsSectionRef} className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/40 border-t border-b border-slate-200/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          {/* Tab Filter bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-slate-200/60 pb-6">
            {["All", "Digital Mills", "Semi-Automatic", "Sheller Mills", "Traditional Mills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab 
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10" 
                    : "bg-white border border-slate-200/60 text-slate-600 hover:text-brand-primary hover:border-brand-primary/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 hover:shadow-xl hover:border-brand-secondary/35 transition-all duration-300 flex flex-col"
              >
                {/* Product Thumbnail */}
                <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    className="object-contain max-h-[85%] max-w-[85%] p-4"
                  />
                  <span className="absolute top-4 left-4 bg-brand-primary/10 text-brand-primary border border-brand-primary/15 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {prod.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-bold text-slate-800">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {prod.desc}
                    </p>
                    
                    {/* Collapsible Tech specs preview */}
                    <button 
                      onClick={() => setSelectedProduct(prod)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer"
                    >
                      <HelpCircle className="h-3.5 w-3.5" />
                      <span>View Technical Specs</span>
                    </button>
                  </div>

                  {/* Options & Cart Action */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Available Options
                    </div>

                    <div className="space-y-2">
                      {prod.models.map((model) => {
                        const modelKey = `${prod.id}-${model.name.replace(/\s+/g, "-").toLowerCase()}`;
                        const qty = quantities[modelKey] || 1;
                        
                        return (
                          <div 
                            key={modelKey} 
                            className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                          >
                            <div className="min-w-0">
                              <h4 className="text-xs font-bold text-slate-800 truncate">{model.name}</h4>
                              <span className="text-[10px] font-black text-brand-primary uppercase mt-0.5 block">Size: {model.size}</span>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                              {/* Quantity Selector */}
                              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-8 bg-white">
                                <button
                                  type="button"
                                  onClick={() => handleQtyChange(modelKey, -1)}
                                  className="px-2 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-xs font-black"
                                >
                                  -
                                </button>
                                <span className="w-6 text-center text-xs font-bold text-slate-800">
                                  {qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleQtyChange(modelKey, 1)}
                                  className="px-2 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors h-full text-xs font-black"
                                >
                                  +
                                </button>
                              </div>

                              <button
                                onClick={() => handleAddToQuote(prod, model)}
                                className="bg-brand-primary hover:bg-brand-secondary text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                <ShoppingBag className="h-3 w-3" />
                                <span>Add to Quote</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Link to Contact CTA Banner */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-slate-50 border-t border-slate-200/50 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
            Get in touch
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-slate-850 tracking-tight">
            Ready to Submit Specifications for a Proposal?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tell us about your processing space, layout constraints, power limits, and capacity requirements. 
            Our technical sales team will compile a layout and detailed pricing offer.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact"
              className="inline-flex bg-brand-primary hover:bg-brand-primary/95 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm gap-2 items-center"
            >
              <span>Contact Sales Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Technical Specs Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="p-6 bg-brand-primary text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black uppercase bg-white/20 px-2 py-0.5 rounded-full">{selectedProduct.category}</span>
                <h3 className="text-xl font-heading font-bold mt-1">{selectedProduct.title} Specs</h3>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6 overflow-y-auto max-h-[70vh]">
              <div className="flex gap-6 items-center border-b border-slate-100 pb-6">
                <div className="relative w-24 h-24 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="object-contain p-2 max-h-full max-w-full" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">{selectedProduct.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{selectedProduct.desc}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Engineering Specifications</h4>
                <ul className="space-y-3">
                  {selectedProduct.specs.map((spec, index) => (
                    <li key={index} className="flex gap-2.5 items-start text-sm text-slate-600">
                      <span className="text-brand-primary font-bold">✔</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Close Specs
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
