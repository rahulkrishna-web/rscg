"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Cpu, 
  Workflow, 
  Settings, 
  Filter, 
  Activity, 
  Layers, 
  Database, 
  BookOpen,
  ArrowRight,
  Search
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData, categoriesData } from "./productsData";

function CatalogContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("*"); // Initialize after parameter read

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && Object.keys(categoriesData).includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
    setSearchQuery("");
  }, [searchParams]);

  // Map icon strings to Lucide icon components
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu": return <Cpu className="h-4 w-4" />;
      case "Workflow": return <Workflow className="h-4 w-4" />;
      case "Settings": return <Settings className="h-4 w-4" />;
      case "Filter": return <Filter className="h-4 w-4" />;
      case "Activity": return <Activity className="h-4 w-4" />;
      case "Layers": return <Layers className="h-4 w-4" />;
      case "Database": return <Database className="h-4 w-4" />;
      case "BookOpen": return <BookOpen className="h-4 w-4" />;
      default: return <Workflow className="h-4 w-4" />;
    }
  };

  // Filter products by selected category and search query
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate counts for each category
  const getCategoryCount = (catKey: string) => {
    if (catKey === "all") return productsData.length;
    return productsData.filter(p => p.category === catKey).length;
  };

  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Categories Sidebar (col-span-3) */}
      <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-6">
        
        {/* Search Input */}
        <div className="relative bg-white rounded-2xl border border-slate-200/60 p-2 shadow-xs">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-100 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-primary/50 transition-colors"
          />
        </div>

        {/* Category Navigation List */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-xs space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-3">
            Categories
          </h3>
          <nav className="flex flex-col gap-1.5">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${
                selectedCategory === "all"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Workflow className="h-4 w-4" />
                <span>All Products</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                selectedCategory === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {getCategoryCount("all")}
              </span>
            </button>

            {Object.entries(categoriesData).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${
                  selectedCategory === key
                    ? "bg-brand-primary text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </div>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  selectedCategory === key ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {getCategoryCount(key)}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Product Grid Column (col-span-9) */}
      <div className="lg:col-span-9 space-y-6">
        
        <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            {selectedCategory === "all" ? "All Products" : categoriesData[selectedCategory as keyof typeof categoriesData]?.name}
          </h2>
          <span className="text-xs text-slate-400 font-semibold">
            Showing {filteredProducts.length} items
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/50 p-12 text-center text-slate-500 space-y-4">
            <Search className="h-12 w-12 mx-auto text-slate-300" />
            <h3 className="text-lg font-bold text-slate-800">No products found</h3>
            <p className="text-sm text-slate-400">Try adjusting your search criteria or switching categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link 
                key={product.slug}
                href={`/catalog/${product.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 hover:shadow-xl hover:border-brand-secondary/35 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="object-contain max-h-full max-w-full group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-primary/10 text-brand-primary border border-brand-primary/15 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {categoriesData[product.category as keyof typeof categoriesData]?.name || "Catalog"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-heading font-bold text-slate-800 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative w-full h-[200px] sm:h-[240px] overflow-hidden flex items-center bg-slate-900">
        <div className="absolute inset-0 bg-[url('/images/plants/dsc_4263.webp')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Product Catalog
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Explore our complete range of smart mills, automation control panels, separation machinery, and technical manuals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <Suspense fallback={
          <div className="w-full text-center py-24 text-slate-400 font-bold">
            Loading Catalog Products...
          </div>
        }>
          <CatalogContent />
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}
