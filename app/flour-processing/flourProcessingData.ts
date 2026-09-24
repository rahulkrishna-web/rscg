
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
  extra?: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
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
  stats?: StatInfo[];
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
    image: "/images/flour-processing/entoleter.png",
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
    keyFeatures: [
      { title: "High-precision screening and grading", icon: "Settings2" },
      { title: "Compact and hygienic design", icon: "Box" },
      { title: "Low noise and vibration operation", icon: "VolumeX" },
      { title: "Quick screen changing and easy maintenance", icon: "Replace" },
      { title: "Suitable for continuous industrial operation", icon: "RotateCw" }
    ],
    specs: [
      { parameter: "900 MM", specification: "300-500 kg/hr", extra: "single" },
      { parameter: "1200 MM", specification: "500-800 kg/hr", extra: "single" },
      { parameter: "1200 MM", specification: "600-900 kg/hr", extra: "double" },
      { parameter: "1500 MM", specification: "1000-1200 kg/hr", extra: "double" }
    ],
    applications: [
      { label: "Flour mills", icon: "Factory" },
      { label: "Food processing", icon: "Heart" },
      { label: "Spice & powder screening", icon: "Settings2" },
      { label: "Grain processing", icon: "LayoutTemplate" },
      { label: "Chemical & pharmaceutical industries", icon: "Box" }
    ]
  },
  {
    slug: "plan-sifter",
    title: "Plan Sifter",
    subtitle: "Precision Sieving and Classification",
    description: "Plan Sifter is a precision sieving machine designed for efficient grading and classification of flour and powdered materials. It ensures uniform particle size, high screening efficiency, and consistent product quality for modern flour milling operations.",
    image: "/images/flour-processing/plansifter.png",
    keyFeatures: [
      { title: "High screening efficiency with accurate separation", icon: "CheckCircle2" },
      { title: "Precision gyratory motion for uniform distribution", icon: "RotateCw" },
      { title: "Heavy-duty, industrial-grade construction", icon: "Hammer" },
      { title: "Smooth and low-vibration operation", icon: "Settings2" },
      { title: "Easy maintenance with long service life", icon: "ShieldCheck" }
    ],
    specs: [
      { parameter: "2×12", specification: "1800 MM", col3: "1200 MM", col4: "2500 MM", col5: "1-1.5 Ton/hr", col6: "2 HP" },
      { parameter: "4×12", specification: "2000 MM", col3: "1800 MM", col4: "3600 MM", col5: "2.5-3 Ton/hr", col6: "3 HP" },
      { parameter: "4×16", specification: "2000 MM", col3: "1800 MM", col4: "3600 MM", col5: "3-4 Ton/hr", col6: "3 HP" },
      { parameter: "8×16", specification: "2400 MM", col3: "2200 MM", col4: "3600 MM", col5: "4-6 Ton/hr", col6: "3 HP" },
      { parameter: "8×20", specification: "2400 MM", col3: "2200 MM", col4: "3800 MM", col5: "6-8 Ton/hr", col6: "3 HP" }
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
