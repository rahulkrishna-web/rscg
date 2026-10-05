export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  fileUrl: string;
  driveUrl?: string;
}

export interface CategoryFilter {
  id: string;
  name: string;
  lines: string[];
}

export const downloadCategories: CategoryFilter[] = [
  { id: "all", name: "All", lines: ["All"] },
  { id: "about-company", name: "About Company", lines: ["About", "Company"] },
  { id: "turnkey", name: "Turnkey Projects", lines: ["Turnkey", "Projects"] },
  { id: "training", name: "Training", lines: ["Training"] },
  { id: "digital-flour-mill", name: "Digital Flour Mill", lines: ["Digital", "Flour Mill"] },
  { id: "semi-auto-mill", name: "Semi Automatic Flour Mill", lines: ["Semi Automatic", "Flour Mill"] },
  { id: "horizontal-flour-mill", name: "Horizontal Flour Mill", lines: ["Horizontal", "Flour Mill"] },
  { id: "flour-processing", name: "Flour Processing", lines: ["Flour", "Processing"] },
  { id: "conveying-system", name: "Conveying System", lines: ["Conveying", "System"] },
  { id: "emery-stone", name: "Emery Stone Dresser", lines: ["Emery Stone", "Dresser"] },
  { id: "vending-machine", name: "Vending Machine", lines: ["Vending", "Machine"] },
  { id: "automatic-machines", name: "Automatic Machines", lines: ["Automatic", "Machines"] },
  { id: "semi-auto-machines", name: "Semi Automatic Machines", lines: ["Semi Automatic", "Machines"] },
];

export const downloadsData: DownloadItem[] = [
  // 1. About Company
  {
    id: "company-profile",
    title: "Company Profile",
    category: "about-company",
    categoryLabel: "About Company",
    image: "/images/downloads/thumbnails/Company Profile.png",
    fileUrl: "/downloads/files/company-profile.pdf",
  },
  // 2. Turnkey Projects
  {
    id: "turnkey-solution",
    title: "Turnkey Solution",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/Turnkey Projects.png",
    fileUrl: "/downloads/files/turnkey-solution.pdf",
  },
  {
    id: "10-tpd-mini-chakki-atta-plant",
    title: "10 TPD Mini Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/10 TPD mini atta chakki palnt.png",
    fileUrl: "/downloads/files/10-tpd-mini-chakki-atta-plant.pdf",
  },
  {
    id: "10-tpd-chakki-atta-plant",
    title: "10 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/10 TPD ATTA CHAKKI PLANT.png",
    fileUrl: "/downloads/files/10-tpd-chakki-atta-plant.pdf",
  },
  {
    id: "20-tpd-chakki-atta-plant",
    title: "20 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/20 TPD Atta Chakki plant.png",
    fileUrl: "/downloads/files/20-tpd-chakki-atta-plant.pdf",
  },
  {
    id: "40-tpd-chakki-atta-plant",
    title: "40 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/40 TPD Atta Chakki plant.png",
    fileUrl: "/downloads/files/40-tpd-chakki-atta-plant.pdf",
  },
  {
    id: "60-tpd-chakki-atta-plant",
    title: "60 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/60 TPD Plant.png",
    fileUrl: "/downloads/files/60-tpd-chakki-atta-plant.pdf",
  },
  {
    id: "besan-plant",
    title: "Besan Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/Besan Plant.png",
    fileUrl: "/downloads/files/besan-plant.pdf",
  },
  {
    id: "spice-plant",
    title: "Spice Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/Spice Plant.png",
    fileUrl: "/downloads/files/spice-plant.pdf",
  },
  // 3. Training
  {
    id: "charge",
    title: "CHARGE",
    category: "training",
    categoryLabel: "Training",
    image: "/images/downloads/thumbnails/CHARGE.png",
    fileUrl: "/downloads/files/charge.pdf",
  },
  // 4. Digital Flour Mill
  {
    id: "wondermill-with-wondermiller",
    title: "Wondermill with Wondermiller",
    category: "digital-flour-mill",
    categoryLabel: "Digital Flour Mill",
    image: "/images/downloads/thumbnails/Wonder Mills.png",
    fileUrl: "/downloads/files/wondermill-with-wondermiller.pdf",
  },
  {
    id: "iquadra",
    title: "iQuadra",
    category: "digital-flour-mill",
    categoryLabel: "Digital Flour Mill",
    image: "/images/downloads/thumbnails/iQuadra.png",
    fileUrl: "/downloads/files/iquadra.pdf",
  },
  // 5. Semi Automatic Flour Mill
  {
    id: "atta-expert",
    title: "Atta Expert",
    category: "semi-auto-mill",
    categoryLabel: "Semi Automatic Flour Mill",
    image: "/images/downloads/thumbnails/Atta expert.png",
    fileUrl: "/downloads/files/atta-expert.pdf",
  },
  // 6. Horizontal Flour Mill
  {
    id: "horizontal-square-type-flour-mill",
    title: "Horizontal Square Type Flour Mill",
    category: "horizontal-flour-mill",
    categoryLabel: "Horizontal Flour Mill",
    image: "/images/downloads/thumbnails/HORIZONTAL SQUARE TYPE FLOUR MILL.png",
    fileUrl: "/downloads/files/horizontal-square-type-flour-mill.pdf",
  },
  {
    id: "horizontal-flour-mill-mini-ultra-mini",
    title: "Horizontal Flour Mill - Mini & Ultra Mini",
    category: "horizontal-flour-mill",
    categoryLabel: "Horizontal Flour Mill",
    image: "/images/downloads/thumbnails/Mini and ultra mini.png",
    fileUrl: "/downloads/files/horizontal-flour-mill-mini-ultra-mini.pdf",
  },
  // 7. Flour Processing
  {
    id: "plan-sifter-vibro-sifter-centrifugal",
    title: "Plan Sifter, Vibro Sifter, Centrifugal",
    category: "flour-processing",
    categoryLabel: "Flour Processing",
    image: "/images/downloads/thumbnails/Plan Sifter, Vibro Sifter, Centrifugal.png",
    fileUrl: "/downloads/files/plan-sifter-vibro-sifter-centrifugal.pdf",
  },
  // 8. Conveying System
  {
    id: "neomatic",
    title: "Neomatic",
    category: "conveying-system",
    categoryLabel: "Conveying System",
    image: "/images/downloads/thumbnails/Neomatic.png",
    fileUrl: "/downloads/files/neomatic.pdf",
  },
  // 9. Emery Stone Dresser
  {
    id: "emery-stone-dresser",
    title: "Emery Stone Dresser",
    category: "emery-stone",
    categoryLabel: "Emery Stone Dresser",
    image: "/images/downloads/thumbnails/eMERY STONE DRESSER.png",
    fileUrl: "/downloads/files/emery-stone-dresser.pdf",
  },
  // 10. Vending Machine
  {
    id: "floura",
    title: "Floura",
    category: "vending-machine",
    categoryLabel: "Vending Machine",
    image: "/images/downloads/thumbnails/Floura.png",
    fileUrl: "/downloads/files/floura.pdf",
  },
  // 11. Automatic Machines
  {
    id: "oil-extraction-machine",
    title: "Oil Extraction Machine",
    category: "automatic-machines",
    categoryLabel: "Automatic Machines",
    image: "/images/downloads/thumbnails/OIL EXTRACTION MACHINE.png",
    fileUrl: "/downloads/files/oil-extraction-machine.pdf",
  },
  {
    id: "micro-powder-doser",
    title: "Micro Powder Doser",
    category: "automatic-machines",
    categoryLabel: "Automatic Machines",
    image: "/images/downloads/thumbnails/micRO POWDER DOSER.png",
    fileUrl: "/downloads/files/micro-powder-doser.pdf",
  },
  // 12. Semi Automatic Machines
  {
    id: "wonder-drop",
    title: "Wonder Drop",
    category: "semi-auto-machines",
    categoryLabel: "Semi Automatic Machines",
    image: "/images/downloads/thumbnails/WONDER DROP.png",
    fileUrl: "/downloads/files/wonder-drop.pdf",
  },
  {
    id: "spice-grinding-machine",
    title: "Spice Grinding Machine",
    category: "semi-auto-machines",
    categoryLabel: "Semi Automatic Machines",
    image: "/images/downloads/thumbnails/SPICE GRINDING MACHINE.png",
    fileUrl: "/downloads/files/spice-grinding-machine.pdf",
  },
  {
    id: "floura-fresh",
    title: "Floura Fresh",
    category: "semi-auto-machines",
    categoryLabel: "Semi Automatic Machines",
    image: "/images/downloads/thumbnails/FLOURA FRESH.png",
    fileUrl: "/downloads/files/floura-fresh.pdf",
  },
];
