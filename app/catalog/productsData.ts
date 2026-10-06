// Product Catalog Data - Strictly synchronized with live website product landing pages & subpages
export interface ProductVariant {
  name: string;
  size: string;
  specs: string;
  image?: string;
}

export interface ProductItem {
  slug: string;
  title: string;
  subtitle?: string;
  overview?: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  categoryLabel: string;
  url: string;
  badge?: string;
  features?: string[];
  applications?: string[];
  specifications?: Record<string, string>;
  variants: ProductVariant[];
  additionalInfo?: Record<string, string>;
}

export interface CatalogCategory {
  id: string;
  name: string;
  icon?: string;
  desc?: string;
}

export const catalogCategories: CatalogCategory[] = [
  { id: "all", name: "All Products" },
  { id: "flour-mills", name: "Flour Mills" },
  { id: "emery-stones", name: "Emery Stones" },
  { id: "grain-processing", name: "Grain Processing" },
  { id: "flour-processing", name: "Flour Processing" },
  { id: "grain-storage-handling", name: "Grain Storage & Silos" },
  { id: "power-saving", name: "Automation & Power Saving" },
  { id: "vending-machines", name: "Vending Machines" },
  { id: "books", name: "Publications & Books" }
];

export const categoriesData: Record<string, { name: string; icon: string }> = {
  "flour-mills": { name: "Flour Mills", icon: "Workflow" },
  "emery-stones": { name: "Emery Stones", icon: "Layers" },
  "grain-processing": { name: "Grain Processing", icon: "Filter" },
  "flour-processing": { name: "Flour Processing", icon: "Workflow" },
  "grain-storage-handling": { name: "Grain Storage & Silos", icon: "Database" },
  "power-saving": { name: "Automation & Power Saving", icon: "Cpu" },
  "vending-machines": { name: "Vending Machines", icon: "ShoppingBag" },
  "turnkey-projects": { name: "Turnkey Solutions", icon: "Factory" },
  "books": { name: "Publications & Books", icon: "BookOpen" },
  // Compatibility aliases
  "smart": { name: "Smart & Automated", icon: "Cpu" },
  "chakki": { name: "Chakki & Horizontal Mills", icon: "Workflow" },
  "controls": { name: "Automation & Power Saving", icon: "Settings" },
  "cleaning": { name: "Grain Processing", icon: "Filter" },
  "processing": { name: "Flour Processing", icon: "Activity" },
  "stones": { name: "Emery Stones", icon: "Layers" },
  "handling": { name: "Grain Storage & Silos", icon: "Database" }
};

export const productsData: ProductItem[] = [
  // ================= 1. FLOUR MILLS =================
  {
    slug: "wonder-mill",
    title: "Wonder Mill",
    subtitle: "Digital Stone Flour Mill",
    overview: "Wonder Mill is a patented automated stone flour mill with Wonder Miller control technology. Built for efficient commercial grinding, it helps save up to 30% power, improve flour quality, and increase production with intelligent automation.",
    features: [
      "WiFi Enabled & Data Logging",
      "Up to 30% Power Saving",
      "32 Built-in Recipes",
      "Touchscreen PLC Control",
      "Android & iOS Connectivity"
    ],
    applications: ["Commercial flour mills", "Atta processing plants", "Modern whole-grain milling"],
    specifications: {
      "Grinding Capacity (24\")": "200–250 Kg/Hr",
      "Grinding Capacity (30\")": "450–500 Kg/Hr",
      "Grinding Capacity (48\")": "650–700 Kg/Hr",
      "Power Load": "15 / 25 / 40 HP"
    },
    category: "flour-mills",
    categoryLabel: "Flour Mills",
    badge: "Patented",
    image: "/images/plants/flour-mills/products/Wonder mill/wondermill with wondermiller.png",
    description: "Patented automated digital stone flour mill featuring Wonder Miller PLC controls, data logging, and energy optimization.",
    shortDescription: "Patented automated digital stone flour mill with Wonder Miller PLC controls, data logging, and energy optimization.",
    url: "/flour-mills/wonder-mill",
    variants: []
  },
  {
    slug: "iquadra-mill",
    title: "iQuadra Mill",
    subtitle: "Automated Stone Flour Mill",
    overview: "iQuadra is an automated stone flour mill engineered with advanced quadra grinding technology, delivering superior flour quality, precision grain feeding, and high production efficiency.",
    features: [
      "Quadra grinding technology",
      "Precision automated grain feeding",
      "Integrated control panel",
      "Consistent low-temperature milling"
    ],
    applications: ["Commercial atta production", "Multi-grain milling", "Industrial food units"],
    specifications: {
      "Technology": "Quadra Grinding",
      "Milling Type": "Stone Ground Cold Milling",
      "Efficiency": "High Output / Low Heat"
    },
    category: "flour-mills",
    categoryLabel: "Flour Mills",
    badge: "Energy Saving",
    image: "/images/plants/flour-mills/products/iQuadra/iquadra_mainimg.png",
    description: "Automated stone flour mill with quadra grinding technology delivering superior flour quality and energy savings.",
    shortDescription: "Automated stone flour mill with quadra grinding technology delivering superior flour quality and energy savings.",
    url: "/flour-mills/iquadra-mill",
    variants: []
  },
  {
    slug: "atta-expert",
    title: "Atta Expert",
    subtitle: "Vertical Stone Flour Mill",
    overview: "Atta Expert is a robust vertical stone flour mill built for continuous commercial operation. Engineered to produce high-quality stone-ground atta with natural aroma, flavor, and texture.",
    features: [
      "Heavy-duty vertical stone design",
      "Continuous commercial duty cycle",
      "Consistent grain feeding mechanism",
      "Long-life precision emery stones"
    ],
    applications: ["Commercial chakki plants", "Regional wheat flour mills", "Contract grinding units"],
    specifications: {
      "Orientation": "Vertical",
      "Milling Mechanism": "Abrasive Emery Stones",
      "Duty Cycle": "Continuous Commercial"
    },
    category: "flour-mills",
    categoryLabel: "Flour Mills",
    badge: "Commercial",
    image: "/images/plants/flour-mills/products/semi automatic/pneumatic_expert.png",
    description: "Vertical stone flour mill designed for continuous commercial atta production with superior aroma and texture.",
    shortDescription: "Vertical stone flour mill designed for continuous commercial atta production with superior aroma and texture.",
    url: "/flour-mills/atta-expert",
    variants: []
  },
  {
    slug: "horizontal-mill",
    title: "Horizontal Mill",
    subtitle: "Heavy-Duty Horizontal Flour Mill",
    overview: "A proven, heavy-duty horizontal stone mill built for demanding milling applications across grains, pulses, and spices. Features high-tensile bearings and balanced emery stones.",
    features: [
      "Heavy-duty cast and fabricated frame",
      "Dynamic balanced emery stones",
      "Multi-grain and spice milling capability",
      "Low maintenance and long operational lifespan"
    ],
    applications: ["Grain milling", "Spice grinding", "Pulse splitting & flour"],
    specifications: {
      "Orientation": "Horizontal",
      "Construction": "Heavy Duty Steel / Cast Frame",
      "Suitability": "Wheat, Maize, Pulses, Spices"
    },
    category: "flour-mills",
    categoryLabel: "Flour Mills",
    badge: "Chakki Mill",
    image: "/horizontal-mills/squaremagnet_supplementalimg.png",
    description: "Heavy-duty horizontal stone mill built for reliable multi-grain, pulse, and spice grinding.",
    shortDescription: "Heavy-duty horizontal stone mill built for reliable multi-grain, pulse, and spice grinding.",
    url: "/flour-mills/horizontal-mill",
    variants: []
  },
  {
    slug: "ultra-mini-horizontal-mill",
    title: "Ultra Mini Horizontal Mill",
    subtitle: "Compact Horizontal Stone Mill",
    overview: "A compact horizontal stone mill designed for small-scale commercial operations, test batches, specialty flours, and culinary research centers requiring authentic stone grinding.",
    features: [
      "Compact footprint for limited spaces",
      "Precision micro-adjustment of stone gap",
      "Energy efficient motor drive",
      "Authentic cold stone milling performance"
    ],
    applications: ["Specialty grain laboratories", "Small commercial bakeries", "Artisan flour milling"],
    specifications: {
      "Footprint": "Compact / Space-Saving",
      "Feed Control": "Precision Manual Hopper",
      "Stone Type": "Natural / Synthetic Emery Composition"
    },
    category: "flour-mills",
    categoryLabel: "Flour Mills",
    badge: "Compact",
    image: "/horizontal-mills/ultramini/ultramini_supplementalimg.png",
    description: "Compact horizontal stone mill engineered for small-batch specialty grinding, trial laboratories, and artisan flour.",
    shortDescription: "Compact horizontal stone mill engineered for small-batch specialty grinding, trial laboratories, and artisan flour.",
    url: "/flour-mills/ultra-mini-horizontal-mill",
    variants: []
  },

  // ================= 2. EMERY STONES =================
  {
    slug: "horizontal-emery-stone-daniya-type",
    title: "Horizontal Emery Stones - Daniya Type",
    subtitle: "Natural Aroma Preservation Stones",
    overview: "Designed and manufactured with premium abrasives to maintain natural wheat aroma and taste. Precision-balanced for high grinding efficiency, smooth running, and minimal stone wear.",
    features: [
      "Natural wheat aroma retention",
      "Uniform grain reduction without overheating",
      "High abrasive density for extended stone life",
      "Dynamically balanced for smooth operation"
    ],
    applications: ["Commercial stone chakki mills", "Whole wheat atta plants", "Traditional milling lines"],
    specifications: {
      "Type": "Daniya Pattern",
      "Application": "Wheat Atta Grinding",
      "Balancing": "Dynamic Factory Balanced"
    },
    category: "emery-stones",
    categoryLabel: "Emery Stones",
    badge: "Abrasives",
    image: "/emery-stone-dresser/daniya_emery_stone.png",
    description: "Manufactured with premium abrasives to preserve natural wheat aroma, taste, and maximum stone life.",
    shortDescription: "Manufactured with premium abrasives to preserve natural wheat aroma, taste, and maximum stone life.",
    url: "/emery-stones/daniya-type",
    variants: []
  },
  {
    slug: "horizontal-emery-stone-agate-type",
    title: "Horizontal Emery Stones - Agate / Sheller Type",
    subtitle: "De-Husking & Pulse Shelling Stones",
    overview: "Agate shelling stones optimized for efficient de-husking, pulse splitting, and industrial mill pre-cleaning. Engineered with specialized hardness grading for abrasive hull removal.",
    features: [
      "Optimized for pulse shelling and grain de-husking",
      "High resistance to premature surface glazing",
      "Consistent furrow depth and grinding face",
      "Available across multiple industrial diameters"
    ],
    applications: ["Dal mills", "Pulse processing plants", "Industrial de-husking units"],
    specifications: {
      "Type": "Agate / Sheller Composition",
      "Hardness": "Industrial Heavy-Duty",
      "Application": "De-Husking, Hulling & Splitting"
    },
    category: "emery-stones",
    categoryLabel: "Emery Stones",
    badge: "Abrasives",
    image: "/emery-stone-dresser/agate_emery_stone.png",
    description: "Agate shelling stones optimized for efficient de-husking, pulse splitting, and industrial mill pre-cleaning.",
    shortDescription: "Agate shelling stones optimized for efficient de-husking, pulse splitting, and industrial mill pre-cleaning.",
    url: "/emery-stones/agate-sheller-type",
    variants: []
  },
  {
    slug: "emery-stone-dresser",
    title: "Emery Stone Dresser",
    subtitle: "Precision Stone Dressing Machine",
    overview: "A precision stone dressing machine engineered to restore and maintain the cutting profile of emery stones. Dresses grooves in just 3-4 minutes per groove, cutting maintenance downtime significantly.",
    features: [
      "Restores grinding grooves in 3-4 minutes",
      "Dramatically extends emery stone operational life",
      "Eliminates manual chisel errors and uneven dress",
      "Reduces plant downtime and labor requirements"
    ],
    applications: ["Flour mill workshops", "Maintenance centers", "Commercial milling facilities"],
    specifications: {
      "Dressing Time": "3-4 min per groove",
      "Operation": "Precision Guided Dressing",
      "Compatibility": "Horizontal & Vertical Chakki Stones"
    },
    category: "emery-stones",
    categoryLabel: "Emery Stones",
    badge: "Maintenance Tool",
    image: "/emery-stone-dresser/emery_stone_dresser.png",
    description: "Precision stone dressing machine engineered to restore and maintain cutting profiles in 3-4 minutes per groove.",
    shortDescription: "Precision stone dressing machine engineered to restore and maintain cutting profiles in 3-4 minutes per groove.",
    url: "/emery-stones/emery-stone-dresser",
    variants: []
  },

  // ================= 3. GRAIN PROCESSING =================
  {
    slug: "magnetic-separator",
    title: "Magnetic Separator",
    subtitle: "Permanent Drum-Type Magnetic Separator",
    overview: "Designed to remove tramp iron and ferrous contamination from free-flowing grain, flour, and bulk food products. High-intensity magnetic drum reaches up to 10,000 gauss to safeguard downstream equipment.",
    features: [
      "Magnetic field strength up to 10,000 gauss",
      "High-intensity permanent magnetic drum",
      "Vibratory hopper for controlled continuous feeding",
      "Protects downstream mills and rollers from metal damage"
    ],
    applications: ["Grain cleaning sections", "Flour intake lines", "Bulk material handling"],
    specifications: {
      "Magnetic Roll Size": "100 mm × 1000 mm",
      "Magnetic Strength": "Up to 10,000 Gauss",
      "Feeding System": "Vibratory Hopper"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "10,000 Gauss",
    image: "/images/grain-processing/magnetic-separator.png",
    description: "High-intensity permanent magnetic drum separator removing ferrous contamination to protect downstream machinery.",
    shortDescription: "High-intensity permanent magnetic drum separator removing ferrous contamination to protect downstream machinery.",
    url: "/grain-processing/magnetic-separator",
    variants: []
  },
  {
    slug: "intensive-dampener",
    title: "Intensive Dampener",
    subtitle: "High-Efficiency Moisture Conditioning",
    overview: "Engineered for precise water addition and intensive grain dampening to ensure uniform moisture penetration before milling. Ensures optimal bran toughness and clean endosperm separation.",
    features: [
      "Uniform moisture distribution inside grain kernels",
      "High-speed mixing rotor with angled wear-resistant paddles",
      "Self-cleaning housing design",
      "Precise water flow meter regulation"
    ],
    applications: ["Wheat conditioning sections", "Multi-grain conditioning", "Flour mill cleaning houses"],
    specifications: {
      "Operation": "Continuous Intensive Mixing",
      "Wear Protection": "Abrasion-Resistant Blades",
      "Moisture Control": "Fine Regulating Flow Meter"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "Conditioning",
    image: "/images/grain-processing/intensive-dampener.png",
    description: "High-efficiency grain conditioning and moisture addition unit ensuring uniform water penetration before milling.",
    shortDescription: "High-efficiency grain conditioning and moisture addition unit ensuring uniform water penetration before milling.",
    url: "/grain-processing/intensive-dampener",
    variants: []
  },
  {
    slug: "horizontal-scourer",
    title: "Horizontal Scourer",
    subtitle: "Grain Surface Cleaning & De-Bearding",
    overview: "Cleans grain outer surfaces, removes clinging dust, beards, and dirt particles. Significantly improves finished flour brightness, reduces ash content, and enhances microbiological purity.",
    features: [
      "Intensive surface scouring action",
      "Removes clinging soil, beard, and crease dirt",
      "Aspiration channel integration for light particle removal",
      "Hardened beaters and durable screen jackets"
    ],
    applications: ["Pre-cleaning sections", "Tempered grain second-stage scouring", "Organic grain cleaning"],
    specifications: {
      "Design": "Horizontal Cylindrical Screen",
      "Beaters": "Hardened Alloy Steel",
      "Aspiration": "Integrated Dust Aspiration"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "Cleaning",
    image: "/images/grain-processing/horizontal-scourer.png",
    description: "Cleans grain surfaces, removes clinging dust, beards, and dirt particles to improve flour purity.",
    shortDescription: "Cleans grain surfaces, removes clinging dust, beards, and dirt particles to improve flour purity.",
    url: "/grain-processing/horizontal-scourer",
    variants: []
  },
  {
    slug: "bran-finisher",
    title: "Bran Finisher",
    subtitle: "Flour Yield Separation Machine",
    overview: "Separates adhering endosperm flour particles from bran via high-speed centrifugal impact. Delivers maximum flour extraction yield while keeping power consumption low.",
    features: [
      "Centrifugal separation of adhering flour from bran",
      "Maximizes overall mill flour extraction yields",
      "Vibration-isolated dynamic rotor assembly",
      "Easily interchangeable perforated screen baskets"
    ],
    applications: ["Flour mill sifting lines", "Bran treatment lines", "Yield recovery stations"],
    specifications: {
      "Rotor": "Centrifugal High-Speed Beater",
      "Screen": "Perforated Mesh Basket",
      "Yield Benefit": "High Extraction Recovery"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "Yield Booster",
    image: "/images/grain-processing/bran-finisher.png",
    description: "Centrifugal beater system that separates adhering endosperm flour particles from bran to maximize extraction yields.",
    shortDescription: "Centrifugal beater system that separates adhering endosperm flour particles from bran to maximize extraction yields.",
    url: "/grain-processing/bran-finisher",
    variants: []
  },
  {
    slug: "emery-polisher",
    title: "Emery Polisher",
    subtitle: "Abrasive Grain & Pulse Polisher",
    overview: "A high-performance emery stone polishing cylinder designed for surface finishing, bran scouring, and de-husking pulses, cereals, and specialty grains.",
    features: [
      "Abrasive emery stone polishing cylinder",
      "Adjustable discharge counterweight for polishing intensity",
      "Uniform grain polish without high breakage",
      "Heavy-duty industrial bearing support"
    ],
    applications: ["Pulse processing", "Dal mills", "Grain finishing lines"],
    specifications: {
      "Cylinder": "Abrasive Emery Composition",
      "Pressure": "Adjustable Weighted Gate",
      "Application": "Pulse Hulling & Polishing"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "Finishing",
    image: "/images/grain-processing/emery-polisher.png",
    description: "High-speed emery stone polishing cylinder designed for surface finishing, bran scouring, and de-husking pulses.",
    shortDescription: "High-speed emery stone polishing cylinder designed for surface finishing, bran scouring, and de-husking pulses.",
    url: "/grain-processing/emery-polisher",
    variants: []
  },
  {
    slug: "emery-roll",
    title: "Emery Roll",
    subtitle: "Grain De-Husking & Hulling Machine",
    overview: "An abrasive scouring and de-husking roll machine engineered for pulse split milling, grain abrasion, and cereal hull removal.",
    features: [
      "High abrasion efficiency",
      "Even hull removal with minimal grain fracture",
      "Interchangeable abrasive grit formulations",
      "Rugged frame built for 24/7 continuous operation"
    ],
    applications: ["Dal processing plants", "Cereal hulling lines", "Industrial grain conditioning"],
    specifications: {
      "Roll Type": "Emery Abrasive Roll",
      "Operation": "Continuous High-Torque",
      "Target Grains": "Pulses, Lentils, Cereals"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "De-Husking",
    image: "/images/grain-processing/emery-roll.png",
    description: "Abrasive scouring and de-husking roll machine designed for pulse split milling, grain abrasion, and cereal hull removal.",
    shortDescription: "Abrasive scouring and de-husking roll machine designed for pulse split milling, grain abrasion, and cereal hull removal.",
    url: "/grain-processing/emery-roll",
    variants: []
  },
  {
    slug: "drum-sieve",
    title: "Drum Sieve",
    subtitle: "Pre-Cleaning & Scalping Sieve",
    overview: "A rotating cylindrical sieve designed for preliminary grain cleaning, efficiently removing coarse impurities, straw, stalks, strings, and foreign matter from grain intake streams.",
    features: [
      "High throughput scalping and pre-cleaning",
      "Inclined rotating screen drum with self-cleaning brush",
      "Enclosed dust-tight design with aspiration port",
      "Protects subsequent processing machines from foreign material"
    ],
    applications: ["Grain intake stations", "Silo loading systems", "Raw grain cleaning plants"],
    specifications: {
      "Drum Screen": "Perforated Sheet Steel",
      "Drive": "Geared Motor Direct Drive",
      "Enclosure": "Dust-Tight Steel Housing"
    },
    category: "grain-processing",
    categoryLabel: "Grain Processing",
    badge: "Pre-Cleaning",
    image: "/images/grain-processing/drum-sieve.png",
    description: "Rotating cylindrical sieve designed for preliminary grain intake cleaning and coarse impurity separation.",
    shortDescription: "Rotating cylindrical sieve designed for preliminary grain intake cleaning and coarse impurity separation.",
    url: "/grain-processing/drum-sieve",
    variants: []
  },

  // ================= 4. FLOUR PROCESSING =================
  {
    slug: "entoleter",
    title: "Entoleter",
    subtitle: "High-Impact Insect Destroyer",
    overview: "The Entoleter eliminates insects, larvae, and eggs from grain and flour via high-velocity mechanical impact. Ensures product safety, hygiene, and extended shelf life in storage and retail.",
    features: [
      "Destroys insects, larvae, and eggs mechanically",
      "Chemical-free sanitation and food safety",
      "High-speed precision dynamically balanced impact rotor",
      "Installs directly before packing or bulk storage"
    ],
    applications: ["Flour mill finishing sections", "Packing line sanitation", "Grain intake infestation control"],
    specifications: {
      "Operation": "High-Speed Mechanical Impact",
      "Destruction Rate": "100% insect and egg elimination",
      "Construction": "Precision Balanced Stainless / Cast Steel"
    },
    category: "flour-processing",
    categoryLabel: "Flour Processing",
    badge: "Food Safety",
    image: "/images/flour-processing/entoleter.png",
    description: "High-speed impact machine designed to eliminate insect eggs, larvae, and adults from flour and grain.",
    shortDescription: "High-speed impact machine designed to eliminate insect eggs, larvae, and adults from flour and grain.",
    url: "/flour-processing/entoleter",
    variants: []
  },
  {
    slug: "vibro-sifter",
    title: "Vibro Sifter",
    subtitle: "Circular Vibratory Grading Screen",
    overview: "Vibro Sifter is a high-precision screening machine used for grading and separating flour, powders, and granular materials with high accuracy and low noise.",
    features: [
      "High-precision circular multi-deck screening",
      "Quick mesh screen changing and easy sanitization",
      "Low noise and vibration-isolated suspension",
      "Suitable for continuous 24/7 industrial flour grading"
    ],
    applications: ["Flour grading", "Spice & powder screening", "Food processing lines"],
    specifications: {
      "Screen Diameters": "900 mm / 1200 mm / 1500 mm",
      "Capacity Range": "300 - 1200 kg/hr",
      "Decks": "Single or Multi-Deck Configurations"
    },
    category: "flour-processing",
    categoryLabel: "Flour Processing",
    badge: "Grading",
    image: "/images/flour-processing/vibrosifter.png",
    description: "High-precision screening machine used for grading and separating flour, powders, and fine granular materials.",
    shortDescription: "High-precision screening machine used for grading and separating flour, powders, and fine granular materials.",
    url: "/flour-processing/vibro-sifter",
    variants: []
  },
  {
    slug: "plan-sifter",
    title: "Plan Sifter",
    subtitle: "Multi-Deck Gyratory Sifting Machine",
    overview: "Plan Sifter is a precision sieving machine designed for efficient grading and classification of flour streams. Ensures uniform particle size, high throughput, and consistent flour quality.",
    features: [
      "Gyratory motion for uniform material distribution",
      "Multi-stream separation across multiple sieve compartments",
      "Heavy-duty counterbalanced drive mechanism",
      "High sanitation wooden or composite sieve frames"
    ],
    applications: ["Commercial wheat flour plants", "Maize & rice flour grading", "Multi-stream classification"],
    specifications: {
      "Sieve Section Sizes": "2x12, 4x12, 4x16, 8x16, 8x20",
      "Frame Material": "High-Grade Hygienic Frames",
      "Motion": "Smooth Gyratory Sifting"
    },
    category: "flour-processing",
    categoryLabel: "Flour Processing",
    badge: "Multi-Deck",
    image: "/images/flour-processing/plansifter.png",
    description: "Precision sieving machine designed for high-capacity grading, classification, and uniform particle separation.",
    shortDescription: "Precision sieving machine designed for high-capacity grading, classification, and uniform particle separation.",
    url: "/flour-processing/plan-sifter",
    variants: []
  },

  // ================= 5. GRAIN STORAGE & SILOS =================
  {
    slug: "bran-refraction-silo",
    title: "Bran / Refraction Silo",
    subtitle: "Mild-Steel Storage Silo",
    overview: "A durable mild-steel silo designed for the controlled storage and discharge of bran and refraction material in flour milling plants. Features anti-bridging discharge cones and level monitoring.",
    features: [
      "Heavy-duty mild-steel welded construction",
      "Intelligent level sensor monitoring compatibility",
      "Smooth steep hopper cone for free-flowing discharge",
      "Modular design for easy capacity expansion"
    ],
    applications: ["Bran collection stations", "Refraction storage", "Byproduct bagging systems"],
    specifications: {
      "Available Models": "MS-1 (1 Ton) to MS-15 (15 Ton)",
      "Material": "Heavy-Duty Mild Steel",
      "Discharge": "Controlled Cone Discharge"
    },
    category: "grain-storage-handling",
    categoryLabel: "Grain Storage & Silos",
    badge: "Storage",
    image: "/images/silos/bran-silo.png",
    description: "Durable mild-steel silo designed for controlled storage and discharge of bran and refraction material.",
    shortDescription: "Durable mild-steel silo designed for controlled storage and discharge of bran and refraction material.",
    url: "/grain-storage-handling/bran-refraction-silo",
    variants: []
  },
  {
    slug: "atta-flour-silo",
    title: "Atta Flour Silo",
    subtitle: "Sanitary Finished Flour Silo",
    overview: "Engineered specifically for the bulk sanitary storage and fluidization of finished stone-ground flour. Eliminates material packing and supports smooth feeding into packaging lines.",
    features: [
      "Fluidizing discharge system prevents flour compaction",
      "Food-grade interior coating / stainless contact options",
      "Complete dust filtration and explosion relief venting",
      "Direct integration with automated bagging machines"
    ],
    applications: ["Finished atta storage", "Bulk packing buffer", "Blending plants"],
    specifications: {
      "Construction": "Food-Grade Coated Steel",
      "Discharge System": "Fluidizing Air Pads / Bin Activator",
      "Safety": "Overpressure & Explosion Venting"
    },
    category: "grain-storage-handling",
    categoryLabel: "Grain Storage & Silos",
    badge: "Hygienic",
    image: "/images/silos/atta-silo.png",
    description: "Hygienic steel storage silo with fluidization and bin discharge systems for bulk storage of finished stone-ground flour.",
    shortDescription: "Hygienic steel storage silo with fluidization and bin discharge systems for bulk storage of finished stone-ground flour.",
    url: "/grain-storage-handling/atta-flour-silo",
    variants: []
  },
  {
    slug: "conditioning-silo",
    title: "Conditioning Silo",
    subtitle: "Grain Resting & Tempering Silo",
    overview: "Allows uniform moisture distribution throughout grain kernels during tempering to ensure optimal bran toughness and endosperm separation before the milling process.",
    features: [
      "Multiple internal discharge points for first-in, first-out flow",
      "Eliminates dead zones and grain stagnation",
      "Maintains stable grain temperature and moisture",
      "Corrosion-resistant steel fabrication"
    ],
    applications: ["Wheat tempering sections", "Pre-milling resting bins", "Conditioning plants"],
    specifications: {
      "Flow Pattern": "Mass Flow / FIFO Discharge",
      "Construction": "Structural Carbon Steel",
      "Function": "Grain Moisture Equalization"
    },
    category: "grain-storage-handling",
    categoryLabel: "Grain Storage & Silos",
    badge: "Tempering",
    image: "/images/silos/conditioning-silo.png",
    description: "Allows uniform moisture distribution throughout grain kernels during tempering to ensure optimal milling yield.",
    shortDescription: "Allows uniform moisture distribution throughout grain kernels during tempering to ensure optimal milling yield.",
    url: "/grain-storage-handling/conditioning-silo",
    variants: []
  },
  {
    slug: "grain-silo-ms",
    title: "Grain Silo",
    subtitle: "Bulk Raw Grain Storage Silo",
    overview: "Heavy-duty steel grain silo engineered for bulk raw wheat storage, complete with level sensing, ventilation, and smooth hopper bottom discharge.",
    features: [
      "Engineered for heavy bulk storage of raw wheat and grains",
      "Complete aeration and level sensor ports",
      "Self-emptying conical bottom design",
      "Weather-sealed outdoor roof structure"
    ],
    applications: ["Grain intake facilities", "Commercial mill grain terminals", "Raw material storage"],
    specifications: {
      "Capacity": "Modular 10 to 100+ Tons",
      "Bottom": "Hopper Bottom Conical",
      "Material": "Heavy Gauge Steel with Protective Finish"
    },
    category: "grain-storage-handling",
    categoryLabel: "Grain Storage & Silos",
    badge: "Bulk Silo",
    image: "/images/silos/grain-silo.png",
    description: "Heavy-duty steel grain silo engineered for bulk raw wheat storage, complete with level sensing and ventilation.",
    shortDescription: "Heavy-duty steel grain silo engineered for bulk raw wheat storage, complete with level sensing and ventilation.",
    url: "/grain-storage-handling/grain-silo-ms",
    variants: []
  },

  // ================= 6. AUTOMATION & POWER SAVING =================
  {
    slug: "wonder-miller",
    title: "Wonder Miller",
    subtitle: "Intelligent Mill PLC Controller",
    overview: "Patented PLC-based automation system that controls stone pressure, motor load, feed rate, and data logging, delivering up to 30% power savings and consistent grinding performance.",
    features: [
      "Saves up to 30% electrical power consumption",
      "Automatic pressure regulation between emery stones",
      "7\" TFT touchscreen HMI with live telemetry",
      "Cloud IoT connectivity and mobile app data logging"
    ],
    applications: ["Retrofit onto existing chakki mills", "Wonder Mill installations", "Energy optimization projects"],
    specifications: {
      "Energy Savings": "Up to 30%",
      "Screen": "7\" Color Touchscreen HMI",
      "Connectivity": "WiFi, IoT Cloud, Android & iOS"
    },
    category: "power-saving",
    categoryLabel: "Automation & Power Saving",
    badge: "Save up to 30%",
    image: "/images/power-saving/wondermiller.png",
    description: "Intelligent PLC-based automation system designed to optimize stone milling, save up to 30% power, and ensure consistent quality.",
    shortDescription: "Intelligent PLC-based automation system designed to optimize stone milling, save up to 30% power, and ensure consistent quality.",
    url: "/power-saving/wonder-miller",
    variants: []
  },
  {
    slug: "neomatic",
    title: "Neomatic",
    subtitle: "Automated Pneumatic Conveying System",
    overview: "A fully automated pneumatic conveying system designed for efficient material handling, reliable operation, and reduced energy consumption across the complete mill.",
    features: [
      "10-30% energy savings over conventional mechanical elevators",
      "Dust-free, sealed negative pressure conveying",
      "Self-cleaning cyclone receivers and rotary airlocks",
      "Minimizes material stagnation and contamination"
    ],
    applications: ["Flour conveying", "Grain lifting", "Mill pneumatics"],
    specifications: {
      "Power Reduction": "10 - 30%",
      "Type": "Pneumatic Negative / Positive Pressure",
      "System": "Fully Automated with Interlocks"
    },
    category: "power-saving",
    categoryLabel: "Automation & Power Saving",
    badge: "Save 10-30%",
    image: "/images/power-saving/neomatic.png",
    description: "Fully automated pneumatic conveying system designed for efficient material handling and reduced energy consumption.",
    shortDescription: "Fully automated pneumatic conveying system designed for efficient material handling and reduced energy consumption.",
    url: "/power-saving/neomatic",
    variants: []
  },

  // ================= 7. VENDING MACHINES =================
  {
    slug: "floura",
    title: "Floura",
    subtitle: "Fresh Stone-Ground Flour Vending & Batch Production System",
    overview: "Floura is an automated fresh stone-ground flour milling and dispensing system available in V400 (40-60 kg/hr vertical mill) and H500 (100-120 kg/hr horizontal mill) configurations for retail stores and commercial batch production.",
    features: [
      "Available in V400 (40-60 kg/hr) and H500 (100-120 kg/hr) models",
      "Fresh stone grinding on demand with multi-grain storage bins",
      "Eco and Auto variants with automated weighing, sieving, and sealing",
      "Compact hygienic design for retail outlets and commercial batch hubs"
    ],
    applications: ["Supermarkets & grocery stores", "Wholesale grain outlets", "Commercial batch mills"],
    specifications: {
      "Available Models": "Floura V400 & Floura H500",
      "Grinding Capacity": "40 - 120 kg/hr",
      "Variants": "Eco & Auto",
      "Bins": "3 Storage Bins"
    },
    category: "vending-machines",
    categoryLabel: "Vending Machines",
    badge: "On-Demand",
    image: "/images/vending-machines/floura_eco.png",
    description: "Automated fresh stone-ground flour milling and dispensing system available in V400 and H500 models with Eco and Auto variants.",
    shortDescription: "Automated fresh stone-ground flour milling and dispensing system available in V400 and H500 models.",
    url: "/vending-machines",
    variants: [
      {
        name: "Floura V400",
        size: "16\" Vertical Mill",
        specs: "40 - 60 kg/hr | Eco & Auto Variants"
      },
      {
        name: "Floura H500",
        size: "20\" Horizontal Mill",
        specs: "100 - 120 kg/hr | Eco & Auto Variants"
      }
    ]
  },

  // ================= 8. PUBLICATIONS & BOOKS =================
  {
    slug: "basics-of-chakki-milling",
    title: "Basics of Chakki Milling",
    subtitle: "By Prof. R.S. Choyal",
    overview: "Basics of Chakki Milling is a practical and comprehensive guide to traditional stone milling and modern flour milling technology with 22 insightful chapters covering wheat quality, emery stones, automation, and mill management.",
    features: [
      "22 comprehensive chapters on chakki milling science",
      "Detailed analysis of emery stone dressing and metallurgy",
      "Flour quality parameters, fortification, and baking characteristics",
      "Mill planning, pneumatic conveying, and digital automation"
    ],
    applications: ["Mill owners & operators", "Food technologist reference", "University milling curricula"],
    specifications: {
      "Author": "Prof. R.S. Choyal",
      "Chapters": "22 Technical Chapters",
      "Formats": "Hardcover / Softcover (English & Hindi)"
    },
    category: "books",
    categoryLabel: "Publications & Books",
    badge: "Technical Guide",
    image: "/images/books/basics_of_chakkimilling.png",
    description: "Comprehensive 22-chapter technical authority on traditional stone milling, grain quality, modern chakki engineering, and automation.",
    shortDescription: "Comprehensive 22-chapter technical authority on traditional stone milling, grain quality, modern chakki engineering, and automation.",
    url: "/books/basics-of-chakki-milling",
    variants: []
  },
  {
    slug: "wholesome-flour",
    title: "Wholesome Flour",
    subtitle: "By Prof. R.S. Choyal",
    overview: "Wholesome Flour: A Guide to Nourishing & Tasty Flours explores nutritional benefits, stone grinding techniques, and culinary applications of whole wheat, millets, and gluten-free flours.",
    features: [
      "Preserving vitamins, minerals, and bran fiber during milling",
      "Scientific formulation of whole grain and multi-millet flours",
      "Comparative study between stone milling and roller milling",
      "Health benefits of cold stone-ground flours"
    ],
    applications: ["Nutritionists & dietitians", "Bakeries & health food brands", "Milling industry professionals"],
    specifications: {
      "Author": "Prof. R.S. Choyal",
      "Focus": "Grain Nutrition & Milling Science",
      "Audience": "Millers, Food Scientists, Health Enthusiasts"
    },
    category: "books",
    categoryLabel: "Publications & Books",
    badge: "Nutrition Science",
    image: "/images/books/wholesome_flour.png",
    description: "Deep insights into grain nutrition, cold milling techniques, dietary fiber retention, and healthy flour formulation.",
    shortDescription: "Deep insights into grain nutrition, cold milling techniques, dietary fiber retention, and healthy flour formulation.",
    url: "/books/wholesome-flour",
    variants: []
  },
  {
    slug: "grain-goodness-healthy-flour-cereal-recipes",
    title: "Grain Goodness: Healthy Flour & Cereal Recipes",
    subtitle: "By Prof. R.S. Choyal",
    overview: "Combines over three decades of milling expertise with the science of healthy nutrition. Features scientifically developed recipes for multigrain atta, diabetic-friendly flour, and high-protein cereal blends.",
    features: [
      "Scientifically developed recipes for diabetic and heart-healthy flours",
      "Techniques for incorporating millets and ancient grains",
      "Step-by-step guidance on stone grinding at home and commercially",
      "Practical recipes for whole grain baking and cooking"
    ],
    applications: ["Commercial flour developers", "Culinary professionals", "Health conscious households"],
    specifications: {
      "Author": "Prof. R.S. Choyal",
      "Content": "Formulations, Recipes & Milling Science",
      "Status": "Featured Publication"
    },
    category: "books",
    categoryLabel: "Publications & Books",
    badge: "Recipes & Science",
    image: "/images/books/grain_goodness.png",
    description: "Practical nutritional guide combining 30+ years of milling expertise with healthy recipes for multigrain atta and diet mixes.",
    shortDescription: "Practical nutritional guide combining 30+ years of milling expertise with healthy recipes for multigrain atta and diet mixes.",
    url: "/books/grain-goodness-healthy-flour-cereal-recipes",
    variants: []
  },
  {
    slug: "insights-of-flour-milling",
    title: "Insights of Flour Milling",
    subtitle: "By Prof. R.S. Choyal",
    overview: "A masterclass operational guidebook for commercial mill owners and technical managers, covering extraction yield optimization, equipment maintenance, pneumatic balances, and plant profitability.",
    features: [
      "In-depth analysis of mill performance and yield optimization",
      "Troubleshooting guides for stone dress, heat buildup, and flow blockages",
      "Best practices for energy management and electrical conservation",
      "Quality assurance protocols and testing laboratory standards"
    ],
    applications: ["Mill general managers", "Maintenance engineers", "Milling plant investors"],
    specifications: {
      "Author": "Prof. R.S. Choyal",
      "Focus": "Commercial Mill Operations & Engineering",
      "Languages": "English & Hindi Editions"
    },
    category: "books",
    categoryLabel: "Publications & Books",
    badge: "Industry Guide",
    image: "/images/books/insights_flourmilling.png",
    description: "Advanced operational guidebook for commercial mill owners, covering yield optimization, troubleshooting, and plant efficiency.",
    shortDescription: "Advanced operational guidebook for commercial mill owners, covering yield optimization, troubleshooting, and plant efficiency.",
    url: "/books/insights-of-flour-milling",
    variants: []
  }
];
