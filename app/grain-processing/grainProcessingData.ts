import { ShieldCheck, Settings2, Replace, LayoutTemplate, Zap, Box, Maximize, TrendingUp, Anchor, CheckCircle2, Factory, Shield, Heart, Droplets, Fan, Cog, Hammer, RotateCw } from "lucide-react";

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

export interface GrainProcessingProduct {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: StatInfo[];
  keyFeatures: FeatureInfo[];
  specs: SpecInfo[];
  applications: AppInfo[];
}

export const grainProcessingData: GrainProcessingProduct[] = [
  {
    slug: "magnetic-separator",
    title: "Magnetic Separator",
    subtitle: "High-Intensity Magnetic Separation for Grain Processing",
    description: "The Permanent Drum-Type Magnetic Separator is designed to remove tramp iron and ferrous contamination from free-flowing bulk materials such as grain, flour, food products, and other processed materials.\n\nIt helps improve end-product purity, recover valuable metal contaminants, and protect downstream machinery from damage. A vibratory hopper regulates material feeding for consistent flow, while the geared drive supports reliable continuous operation.",
    image: "/images/grain-processing/magneticseparator_supplementimg_.jpg",
    stats: [
      { label: "MAGNETIC POWER", value: "10,000 Gauss" },
      { label: "CAPACITY", value: "2-4 TPH" },
      { label: "DRIVE TYPE", value: "1 HP Geared" }
    ],
    keyFeatures: [
      { title: "High-intensity permanent magnetic drum", icon: "Zap" },
      { title: "Magnetic strength up to 10,000 gauss", icon: "Settings2" },
      { title: "Removes tramp iron and ferrous contamination", icon: "ShieldCheck" },
      { title: "Improves product purity", icon: "CheckCircle2" },
      { title: "Protects downstream machinery", icon: "Shield" },
      { title: "Vibratory hopper for controlled feeding", icon: "TrendingUp" },
      { title: "Suitable for continuous bulk processing", icon: "RotateCw" }
    ],
    specs: [
      { parameter: "Magnetic Roll Size", specification: "100 mm × 1000 mm" },
      { parameter: "Magnetic Strength", specification: "Up to 10,000 Gauss" },
      { parameter: "Capacity", specification: "2–4 TPH" },
      { parameter: "Drive Motor", specification: "1 HP Geared Motor" },
      { parameter: "Feeding System", specification: "Vibratory Hopper" },
      { parameter: "Separator Type", specification: "Permanent Drum-Type" }
    ],
    applications: [
      { label: "Grain cleaning plants", icon: "Factory" },
      { label: "Flour mills", icon: "Factory" },
      { label: "Food-processing plants", icon: "Heart" },
      { label: "Seed-processing lines", icon: "LayoutTemplate" },
      { label: "Bulk-material handling systems", icon: "Box" },
      { label: "Protection of downstream equipment", icon: "Shield" }
    ]
  },
  {
    slug: "intensive-dampener",
    title: "Intensive Dampener",
    subtitle: "Precision Grain Conditioning System",
    description: "The Intensive Dampener is engineered for precise and uniform grain conditioning before milling. It ensures consistent water distribution across the grain, helping achieve the required moisture level for improved milling performance and product quality.\n\nThe machine supports water addition of up to 8% and features a self-emptying design that reduces residual material, cleaning requirements, and routine maintenance.",
    image: "/images/grain-processing/intensivedampener_supplementimg.jpg",
    stats: [
      { label: "WATER ADDITION", value: "Up to 8%" },
      { label: "ROTOR SPEED", value: "550 RPM" },
      { label: "DRIVE MOTOR", value: "7.5 HP" }
    ],
    keyFeatures: [
      { title: "Uniform water distribution across grain", icon: "Droplets" },
      { title: "Water addition capacity up to 8%", icon: "Zap" },
      { title: "High-performance rotor (550 RPM)", icon: "RotateCw" },
      { title: "Self-emptying design", icon: "Replace" },
      { title: "Improves milling performance", icon: "TrendingUp" }
    ],
    specs: [
      { parameter: "Water Addition", specification: "Up to 8%" },
      { parameter: "Rotor Speed", specification: "550 RPM" },
      { parameter: "Drive Motor", specification: "5.5 kW / 7.5 HP" },
      { parameter: "Maintenance", specification: "Self-emptying, reduced residue" }
    ],
    applications: [
      { label: "Flour mills", icon: "Factory" },
      { label: "Grain conditioning", icon: "Droplets" },
      { label: "Milling performance", icon: "TrendingUp" }
    ]
  },
  {
    slug: "horizontal-scourer",
    title: "Horizontal Scourer",
    subtitle: "High-Efficiency Grain Surface Cleaning",
    description: "The Horizontal Scourer is designed to remove adhering dust, husk, and surface impurities from grain before further processing.\n\nIts gentle yet effective scouring action helps reduce bacterial contamination, remove insect fragments, and improve grain hygiene without damaging grain quality. Powered by an electric motor, the machine is built for reliable and continuous operation in commercial grain-processing and flour-milling plants.",
    image: "/images/grain-processing/scourer_supplementimg.jpg",
    stats: [
      { label: "CAPACITY", value: "2-4 TPH" },
      { label: "DRIVE MOTOR", value: "7.5 HP" },
      { label: "SCREEN HOLE", value: "2 mm" }
    ],
    keyFeatures: [
      { title: "Removes adhering dust, husk, and impurities", icon: "Fan" },
      { title: "Reduces bacterial contamination", icon: "ShieldCheck" },
      { title: "Removes insect fragments", icon: "Shield" },
      { title: "Improves grain hygiene", icon: "Heart" },
      { title: "Continuous operation", icon: "RotateCw" }
    ],
    specs: [
      { parameter: "Capacity", specification: "2–4 TPH" },
      { parameter: "Drive Motor", specification: "5.5 kW / 7.5 HP" },
      { parameter: "Screen Hole Size", specification: "2 mm" },
      { parameter: "Applications", specification: "Commercial grain-processing" }
    ],
    applications: [
      { label: "Grain surface cleaning", icon: "Replace" },
      { label: "Flour milling plants", icon: "Factory" },
      { label: "Hygiene improvement", icon: "Heart" }
    ]
  },
  {
    slug: "bran-finisher",
    title: "Bran Finisher",
    subtitle: "Efficient Flour Recovery from Bran",
    description: "The Bran Finisher is designed to recover flour particles still adhering to bran after milling. By separating this residual flour from the bran, it helps increase overall flour yield, reduce product loss, and improve milling efficiency.\n\nSuitable for common wheat, durum wheat, and rye mills, the machine delivers cleaner bran while supporting reliable and continuous plant operation.",
    image: "/images/grain-processing/branfinisher_supplementimg.jpg",
    stats: [
      { label: "MOTOR", value: "7.5 HP" },
      { label: "LENGTH", value: "800 mm" },
      { label: "WIDTH", value: "350 mm" }
    ],
    keyFeatures: [
      { title: "Recovers adhering flour from bran", icon: "TrendingUp" },
      { title: "Increases flour yield", icon: "CheckCircle2" },
      { title: "Reduces product loss", icon: "ShieldCheck" },
      { title: "Delivers cleaner bran", icon: "Replace" },
      { title: "Suitable for wheat and rye", icon: "Box" }
    ],
    specs: [
      { parameter: "Motor", specification: "7.5 HP" },
      { parameter: "Rotor Length", specification: "800 mm" },
      { parameter: "Width", specification: "350 mm" },
      { parameter: "Application", specification: "Flour Recovery" }
    ],
    applications: [
      { label: "Common wheat mills", icon: "Factory" },
      { label: "Durum wheat mills", icon: "Factory" },
      { label: "Rye mills", icon: "Factory" }
    ]
  },
  {
    slug: "emery-polisher",
    title: "Emery Polisher",
    subtitle: "Precision De-Hulling and Grain Polishing",
    description: "The Emery Polisher is designed for efficient de-hulling and surface polishing of wheat and other grains. It is especially suitable for whole wheat atta plants, where controlled polishing helps improve grain cleanliness, finish, and overall product quality.\n\nThe polishing intensity can be adjusted externally through a slide-control mechanism, allowing operators to fine-tune the processing effect.",
    image: "/images/grain-processing/emerypolisher_supplementimg.jpg",
    stats: [
      { label: "CAPACITY", value: "Up to 5 TPH" },
      { label: "MOTOR", value: "7.5 HP" },
      { label: "DIAMETER", value: "410 mm" }
    ],
    keyFeatures: [
      { title: "Efficient de-hulling and polishing", icon: "RotateCw" },
      { title: "Improves grain cleanliness and finish", icon: "CheckCircle2" },
      { title: "Adjustable polishing intensity", icon: "Settings2" },
      { title: "Ideal for whole wheat atta plants", icon: "Factory" }
    ],
    specs: [
      { parameter: "Capacity", specification: "Up to 5 TPH" },
      { parameter: "Motor", specification: "7.5 HP" },
      { parameter: "Diameter", specification: "410 mm" },
      { parameter: "Mechanism", specification: "Slide-control" }
    ],
    applications: [
      { label: "Whole wheat atta plants", icon: "Factory" },
      { label: "Grain de-hulling", icon: "Replace" },
      { label: "Surface polishing", icon: "RotateCw" }
    ]
  },
  {
    slug: "emery-roll",
    title: "Emery Roll",
    subtitle: "High-Performance De-Hulling",
    description: "The Emery Roll is a high-performance de-hulling machine designed for efficient removal of bran and outer husk from wheat and other grains. It ensures uniform processing, improves flour quality, and enhances milling efficiency. The machine is widely used in whole wheat atta plants and dal processing units for consistent and reliable grain conditioning.",
    image: "/images/grain-processing/emeryroll_supplementalimg.jpg",
    stats: [
      { label: "CAPACITY", value: "4-5 TPH" },
      { label: "MOTOR", value: "7.5 HP" },
      { label: "LENGTH", value: "31.5 in" }
    ],
    keyFeatures: [
      { title: "Efficient de-hulling of wheat and grains", icon: "Hammer" },
      { title: "Improves flour quality", icon: "TrendingUp" },
      { title: "Uniform processing", icon: "CheckCircle2" },
      { title: "Enhances milling efficiency", icon: "Zap" }
    ],
    specs: [
      { parameter: "Capacity", specification: "4-5 TPH" },
      { parameter: "Motor", specification: "7.5 HP" },
      { parameter: "Length", specification: "31.5 inches" }
    ],
    applications: [
      { label: "Whole wheat atta plants", icon: "Factory" },
      { label: "Dal processing units", icon: "Factory" },
      { label: "Grain conditioning", icon: "Droplets" }
    ]
  },
  {
    slug: "drum-sieve",
    title: "Drum Sieve",
    subtitle: "Continuous Sifting and Separation",
    description: "A rotating drum with screens for large-scale, continuous sifting and separation of materials.\n\nDesigned for durable, heavy-duty processing in mills, this sieve separates large impurities like straw, wood, and stones from the grain stream effectively.",
    image: "/images/grain-processing/drumsieve_supplementimg.jpg",
    stats: [
      { label: "CAPACITY", value: "High" },
      { label: "TYPE", value: "Rotating Drum" },
      { label: "SCREEN", value: "Interchangeable" }
    ],
    keyFeatures: [
      { title: "Continuous sifting and separation", icon: "RotateCw" },
      { title: "Removes large impurities", icon: "ShieldCheck" },
      { title: "Heavy-duty processing", icon: "Hammer" },
      { title: "Interchangeable screens", icon: "Settings2" }
    ],
    specs: [
      { parameter: "Capacity", specification: "High Capacity" },
      { parameter: "Mechanism", specification: "Rotating Drum" },
      { parameter: "Application", specification: "Large impurity removal" }
    ],
    applications: [
      { label: "Flour mills", icon: "Factory" },
      { label: "Grain reception", icon: "Box" },
      { label: "Bulk storage pre-cleaning", icon: "Shield" }
    ]
  }
];
