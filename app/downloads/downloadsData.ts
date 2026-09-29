export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  driveUrl: string;
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
    driveUrl: "https://drive.google.com/drive/folders/1DIpm5ReyK2p_XLT9ckQekQ5jeINGcexD",
  },
  // 2. Turnkey Projects
  {
    id: "turnkey-solution",
    title: "Turnkey Solution",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/Turnkey Projects.png",
    driveUrl: "https://drive.google.com/drive/folders/1WAfqCxQmqMTeM1a-eg4vlH-gRoekCtxx",
  },
  {
    id: "10-tpd-mini-chakki-atta-plant",
    title: "10 TPD Mini Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/10 TPD mini atta chakki palnt.png",
    driveUrl: "https://drive.google.com/drive/folders/1xMSXJK-xL17uOzt6F8lmRpQkWXcetYpt",
  },
  {
    id: "10-tpd-chakki-atta-plant",
    title: "10 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/10 TPD ATTA CHAKKI PLANT.png",
    driveUrl: "https://drive.google.com/drive/folders/1SnUsBvK-paw6UWDveCdxVRT_QGXxx0tw",
  },
  {
    id: "20-tpd-chakki-atta-plant",
    title: "20 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/20 TPD Atta Chakki plant.png",
    driveUrl: "https://drive.google.com/drive/folders/1-oj8rUgK4sP6vvhrINgqp2Psu2IHsKkN",
  },
  {
    id: "40-tpd-chakki-atta-plant",
    title: "40 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/40 TPD Atta Chakki plant.png",
    driveUrl: "https://drive.google.com/drive/folders/1hRNj0PhNhV7ghJp8dcbdr6DUDB9YXzlf",
  },
  {
    id: "60-tpd-chakki-atta-plant",
    title: "60 TPD Chakki Atta Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/60 TPD Plant.png",
    driveUrl: "https://drive.google.com/drive/folders/1yqkHpeibbULk4PkcBqU1GLS6v4FfP-Vf",
  },
  {
    id: "besan-plant",
    title: "Besan Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/Besan Plant.png",
    driveUrl: "https://drive.google.com/drive/folders/18S4In5BHtG78uPyseZqjCPxpy-jwVwR4",
  },
  {
    id: "spice-plant",
    title: "Spice Plant",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    image: "/images/downloads/thumbnails/Spice Plant.png",
    driveUrl: "https://drive.google.com/drive/folders/1rLnHryyb-3bYn5hVeeNY6CHxLJ4M1o5D",
  },
  // 3. Training
  {
    id: "charge",
    title: "CHARGE",
    category: "training",
    categoryLabel: "Training",
    image: "/images/downloads/thumbnails/CHARGE.png",
    driveUrl: "https://drive.google.com/drive/folders/1XM_MVL9iRPgy-CvTBUHJeLjAJfvhk1LO",
  },
  // 4. Digital Flour Mill
  {
    id: "wondermill-with-wondermiller",
    title: "Wondermill with Wondermiller",
    category: "digital-flour-mill",
    categoryLabel: "Digital Flour Mill",
    image: "/images/downloads/thumbnails/Wonder Mills.png",
    driveUrl: "https://drive.google.com/drive/folders/1yBOtkgb-877-cF9sE73wS_D5sgvvAlg9",
  },
  {
    id: "iquadra",
    title: "iQuadra",
    category: "digital-flour-mill",
    categoryLabel: "Digital Flour Mill",
    image: "/images/downloads/thumbnails/iQuadra.png",
    driveUrl: "https://drive.google.com/drive/folders/1dUSMrDvQYE0eUghO4_NOpHqo__d01woI",
  },
  // 5. Semi Automatic Flour Mill
  {
    id: "atta-expert",
    title: "Atta Expert",
    category: "semi-auto-mill",
    categoryLabel: "Semi Automatic Flour Mill",
    image: "/images/downloads/thumbnails/Atta expert.png",
    driveUrl: "https://drive.google.com/drive/folders/1fTtVxGlXNhU4OQ8aOP2BVQIjjJQ8YVDo",
  },
  // 6. Horizontal Flour Mill
  {
    id: "horizontal-square-type-flour-mill",
    title: "Horizontal Square Type Flour Mill",
    category: "horizontal-flour-mill",
    categoryLabel: "Horizontal Flour Mill",
    image: "/images/downloads/thumbnails/HORIZONTAL SQUARE TYPE FLOUR MILL.png",
    driveUrl: "https://drive.google.com/drive/folders/1DpkmOeKDU1pleOkQck33WC2ijTBa8vWW",
  },
  {
    id: "horizontal-flour-mill-mini-ultra-mini",
    title: "Horizontal Flour Mill - Mini & Ultra Mini",
    category: "horizontal-flour-mill",
    categoryLabel: "Horizontal Flour Mill",
    image: "/images/downloads/thumbnails/Mini and ultra mini.png",
    driveUrl: "https://drive.google.com/drive/folders/1J3QKrFb_EW4rDzkFkVVHucO5cLO6w6y7",
  },
  // 7. Flour Processing
  {
    id: "plan-sifter-vibro-sifter-centrifugal",
    title: "Plan Sifter, Vibro Sifter, Centrifugal",
    category: "flour-processing",
    categoryLabel: "Flour Processing",
    image: "/images/downloads/thumbnails/Plan Sifter, Vibro Sifter, Centrifugal.png",
    driveUrl: "https://drive.google.com/drive/folders/1PaVFJiO5SHWCpqJQymm0JK_CNK-xDoYt",
  },
  // 8. Conveying System
  {
    id: "neomatic",
    title: "Neomatic",
    category: "conveying-system",
    categoryLabel: "Conveying System",
    image: "/images/downloads/thumbnails/Neomatic.png",
    driveUrl: "https://drive.google.com/drive/folders/1oUJh4e4fHMTeJzurt6b8m8y4ELofcXCu",
  },
  // 9. Emery Stone Dresser
  {
    id: "emery-stone-dresser",
    title: "Emery Stone Dresser",
    category: "emery-stone",
    categoryLabel: "Emery Stone Dresser",
    image: "/images/downloads/thumbnails/eMERY STONE DRESSER.png",
    driveUrl: "https://drive.google.com/drive/folders/1UQz-jSriiDJHyR4TGIb42LySzozQcr-P",
  },
  // 10. Vending Machine
  {
    id: "floura",
    title: "Floura",
    category: "vending-machine",
    categoryLabel: "Vending Machine",
    image: "/images/downloads/thumbnails/Floura.png",
    driveUrl: "https://drive.google.com/drive/folders/1hj1d16OIflOBHWwBanbLnLbNKGafUuN8",
  },
  // 11. Automatic Machines
  {
    id: "oil-extraction-machine",
    title: "Oil Extraction Machine",
    category: "automatic-machines",
    categoryLabel: "Automatic Machines",
    image: "/images/downloads/thumbnails/OIL EXTRACTION MACHINE.png",
    driveUrl: "https://drive.google.com/drive/folders/13u5vnatkL-ThRVcvTrdkXRFRGQ83pIbB",
  },
  {
    id: "micro-powder-doser",
    title: "Micro Powder Doser",
    category: "automatic-machines",
    categoryLabel: "Automatic Machines",
    image: "/images/downloads/thumbnails/micRO POWDER DOSER.png",
    driveUrl: "https://drive.google.com/drive/folders/1dNmz__tR0QU1bnBhS9bmzz2wScgX2_E1",
  },
  // 12. Semi Automatic Machines
  {
    id: "wonder-drop",
    title: "Wonder Drop",
    category: "semi-auto-machines",
    categoryLabel: "Semi Automatic Machines",
    image: "/images/downloads/thumbnails/WONDER DROP.png",
    driveUrl: "https://drive.google.com/drive/folders/1nR2zWFiZNEprnrXW8rMxGwQzx37vkCvC",
  },
  {
    id: "spice-grinding-machine",
    title: "Spice Grinding Machine",
    category: "semi-auto-machines",
    categoryLabel: "Semi Automatic Machines",
    image: "/images/downloads/thumbnails/SPICE GRINDING MACHINE.png",
    driveUrl: "https://drive.google.com/drive/folders/1d62wP3ajM9EY7xA4x3xq5J8C_Am73e32",
  },
  {
    id: "floura-fresh",
    title: "Floura Fresh",
    category: "semi-auto-machines",
    categoryLabel: "Semi Automatic Machines",
    image: "/images/downloads/thumbnails/FLOURA FRESH.png",
    driveUrl: "https://drive.google.com/drive/folders/1DaH7iGKkY1YliVA5ioXxO3vc-dj-tKY8",
  },
];
