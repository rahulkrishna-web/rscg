
export interface StatInfo {
  label: string;
  value: string;
}

export interface FeatureInfo {
  title: string;
  description?: string;
  icon: any;
}

export interface SpecInfo {
  parameter: string;
  specification: string;
}

export interface AppInfo {
  label: string;
  icon: any;
}

export interface FlourProcessingProduct {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: StatInfo[];
  keyFeatures: FeatureInfo[];
  productBenefits?: FeatureInfo[];
  specs: SpecInfo[];
  applications: AppInfo[];
}

export const flourProcessingData: FlourProcessingProduct[] = [
  {
    slug: "entoleter",
    title: "Entoleter",
    subtitle: "High-Impact Insect Control for Grain and Flour",
    description: "The Entoleter is designed to eliminate insects, larvae, and eggs from grain and flour during processing. Its high-speed impact action helps improve hygiene, protect product quality, and reduce the risk of infestation in downstream storage and packing.\n\nBuilt for reliable continuous operation, it is suitable for flour mills, grain-processing plants, and food-production lines where consistent sanitation and product safety are essential.",
    image: "/images/flour-processing/entoleter.jpg",
    stats: [
      { label: "ACTION", value: "High-Speed Impact" },
      { label: "TARGET", value: "Insects & Larvae" },
      { label: "OPERATION", value: "Continuous" }
    ],
    keyFeatures: [
      { title: "Eliminates insects at all stages", icon: "ShieldCheck" },
      { title: "Removes eggs, larvae, and adult insects", icon: "Replace" },
      { title: "Supports hygienic processing", icon: "CheckCircle2" },
      { title: "Improves food safety and quality", icon: "Heart" },
      { title: "Reduces downstream infestation risk", icon: "TrendingUp" },
      { title: "Continuous commercial operation", icon: "RotateCw" },
      { title: "Dependable, high-speed performance", icon: "Zap" },
      { title: "Integrates easily into lines", icon: "LayoutTemplate" }
    ],
    productBenefits: [
      { title: "Improved product hygiene", icon: "Shield" },
      { title: "Better protection during storage", icon: "Box" },
      { title: "Reduced infestation risk", icon: "ShieldCheck" },
      { title: "Consistent flour quality", icon: "CheckCircle2" },
      { title: "Lower rejection risk", icon: "TrendingUp" },
      { title: "Reliable continuous performance", icon: "RotateCw" }
    ],
    specs: [],
    applications: [
      { label: "Flour-milling plants", icon: "Factory" },
      { label: "Grain-processing facilities", icon: "Settings2" },
      { label: "Finished-flour treatment", icon: "CheckCircle2" },
      { label: "Pre-packing sanitation", icon: "Box" },
      { label: "Storage systems", icon: "Anchor" },
      { label: "Food-processing plants", icon: "Heart" }
    ]
  },
  {
    slug: "vibro-sifter",
    title: "Vibro Sifter",
    subtitle: "Efficient Screening and Grading",
    description: "Vibro Sifter is an efficient screening machine used for grading and separating flour, powders, and granular materials with high accuracy and consistent performance.",
    image: "/images/flour-processing/vibrosifter.png",
    stats: [
      { label: "ACCURACY", value: "High-Precision" },
      { label: "OPERATION", value: "Low Noise" },
      { label: "DESIGN", value: "Compact & Hygienic" }
    ],
    keyFeatures: [
      { title: "High-precision screening and grading", icon: "Settings2" },
      { title: "Compact and hygienic design", icon: "Box" },
      { title: "Low noise and vibration operation", icon: "VolumeX" },
      { title: "Quick screen changing", icon: "Replace" },
      { title: "Suitable for continuous operation", icon: "RotateCw" }
    ],
    specs: [
      { parameter: "900 MM (Single Deck)", specification: "300-500 kg/hr | 500-800 kg/hr" },
      { parameter: "1200 MM (Single Deck)", specification: "500-800 kg/hr" },
      { parameter: "1200 MM (Double Deck)", specification: "600-900 kg/hr" },
      { parameter: "1500 MM (Double Deck)", specification: "1000-1200 kg/hr" }
    ],
    applications: [
      { label: "Flour mills", icon: "Factory" },
      { label: "Food processing", icon: "Heart" },
      { label: "Spice & powder screening", icon: "Settings2" },
      { label: "Grain processing", icon: "LayoutTemplate" },
      { label: "Chemical & pharma industries", icon: "Box" }
    ]
  },
  {
    slug: "plan-sifter",
    title: "Plan Sifter",
    subtitle: "Precision Sieving and Classification",
    description: "Plan Sifter is a precision sieving machine designed for efficient grading and classification of flour and powdered materials. It ensures uniform particle size, high screening efficiency, and consistent product quality for modern flour milling operations.",
    image: "/images/flour-processing/plansifter.png",
    stats: [
      { label: "EFFICIENCY", value: "High Screening" },
      { label: "MOTION", value: "Precision Gyratory" },
      { label: "CONSTRUCTION", value: "Industrial-Grade" }
    ],
    keyFeatures: [
      { title: "High screening efficiency with accurate separation", icon: "CheckCircle2" },
      { title: "Precision gyratory motion for uniform distribution", icon: "RotateCw" },
      { title: "Heavy-duty, industrial-grade construction", icon: "Hammer" },
      { title: "Smooth and low-vibration operation", icon: "Settings2" },
      { title: "Easy maintenance with long service life", icon: "ShieldCheck" }
    ],
    specs: [
      { parameter: "2x12 Size", specification: "1800x1200x2500 MM | 1-1.5 Ton/hr | 2 HP" },
      { parameter: "4x12 Size", specification: "2000x1800x3600 MM | 2.5-3 Ton/hr | 3 HP" },
      { parameter: "4x16 Size", specification: "2000x1800x3600 MM | 3-4 Ton/hr | 3 HP" },
      { parameter: "8x16 Size", specification: "2400x2200x3600 MM | 4-6 Ton/hr | 3 HP" },
      { parameter: "8x20 Size", specification: "2400x2200x3800 MM | 6-8 Ton/hr | 3 HP" }
    ],
    applications: [
      { label: "Flour mills", icon: "Factory" },
      { label: "Wheat, rice & maize processing", icon: "Settings2" },
      { label: "Grain grading", icon: "LayoutTemplate" },
      { label: "Powder classification", icon: "Box" },
      { label: "Food processing industries", icon: "Heart" }
    ]
  }
];
