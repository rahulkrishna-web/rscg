"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Plus, Minus, Send, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { productsData, categoriesData } from "../productsData";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToQuote } = useQuote();
  
  const slug = params.slug as string;
  const product = productsData.find((p) => p.slug === slug);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedMessage, setAddedMessage] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'description' | 'additionalInfo'>('description');

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 340; // width + gap
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    setSelectedVariantIndex(0);
    setQuantity(1);
    setAddedMessage(false);
    setActiveTab('description');
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg text-slate-800 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4">
          <h2 className="text-2xl font-bold">Product Not Found</h2>
          <p className="text-slate-500">The product you are looking for does not exist in our sitemap catalog.</p>
          <Link href="/catalog" className="btn btn-primary bg-brand-primary text-white px-6 py-2.5 rounded-xl font-bold">
            Back to Catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQtyChange = (val: number) => {
    setQuantity((prev) => Math.max(1, prev + val));
  };

  const handleAddToQuote = () => {
    const variant = product.variants[selectedVariantIndex] || { name: product.title, size: "Standard" };
    
    addToQuote({
      id: `${product.slug}-${selectedVariantIndex}`,
      name: `${product.title} - ${variant.name}`,
      image: product.image,
      category: categoriesData[product.category as keyof typeof categoriesData]?.name || "Products",
      size: variant.size
    }, quantity);

    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  const handleWhatsAppEnquiry = () => {
    const variant = product.variants[selectedVariantIndex] || { name: product.title, size: "Standard" };
    const message = `Hello, I am interested in your product: *${product.title}* (${variant.name}) and would like to receive more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919240289259?text=${encodedMessage}`, '_blank');
  };

  const activeCategory = categoriesData[product.category as keyof typeof categoriesData];

  // Related products: same category first, then others to fill up to 8 items
  const sameCategoryProducts = productsData.filter((p) => p.category === product.category && p.slug !== product.slug);
  const otherProducts = productsData.filter((p) => p.category !== product.category && p.slug !== product.slug);
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 8);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Breadcrumb Area */}
      <div className="w-full bg-white/50 border-b border-slate-200/50 py-4 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto flex items-center justify-between">
          <Link 
            href="/catalog" 
            className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Catalog
          </Link>
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider hidden sm:block">
            {activeCategory?.name} / {product.title}
          </div>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Product Image (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-[32px] border border-slate-200/60 p-8 shadow-xs flex items-center justify-center aspect-square relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-6 left-6 bg-brand-primary/10 text-brand-primary border border-brand-primary/15 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                {activeCategory?.name}
              </span>
            </div>
            
            {/* Disclaimer card */}
            <div className="bg-white/40 border border-slate-200/40 rounded-2xl p-5 text-center text-[11px] text-slate-400 font-semibold leading-relaxed">
              * Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups.
            </div>
          </div>

          {/* Right Column: Title, Variants, Actions, and Tabs (col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                {product.title}
              </h1>
            </div>

            {/* Variants Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Available Models & Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.variants.map((v, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex justify-between items-start ${
                        selectedVariantIndex === idx
                          ? "bg-white border-brand-primary shadow-md ring-2 ring-brand-primary/10"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-black text-slate-800">
                          {v.name}
                        </div>
                        <div className="text-xs text-slate-400 font-semibold">
                          Specs: {v.specs}
                        </div>
                      </div>
                      <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedVariantIndex === idx
                          ? "border-brand-primary bg-brand-primary text-white"
                          : "border-slate-300"
                      }`}>
                        {selectedVariantIndex === idx && <Check className="h-2.5 w-2.5" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

             {/* Add to Quote Box */}
             <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row gap-6 items-center justify-between">
               
               {/* Quantity */}
               <div className="flex flex-col gap-2 items-center lg:items-start shrink-0">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   Quantity
                 </span>
                 <div className="flex items-center gap-1 border border-slate-200 rounded-xl p-1 bg-slate-50">
                   <button 
                     onClick={() => handleQtyChange(-1)}
                     className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white transition-colors cursor-pointer"
                   >
                     <Minus className="h-4 w-4" />
                   </button>
                   <span className="w-12 text-center text-sm font-black text-slate-800">
                     {quantity}
                   </span>
                   <button 
                     onClick={() => handleQtyChange(1)}
                     className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white transition-colors cursor-pointer"
                   >
                     <Plus className="h-4 w-4" />
                   </button>
                 </div>
               </div>
 
               {/* Action Buttons Grid */}
               <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-6">
                 <button
                   onClick={handleAddToQuote}
                   className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm sm:text-base ${
                     addedMessage 
                       ? "bg-brand-secondary text-white scale-[0.98]" 
                       : "bg-brand-primary text-white hover:bg-brand-primary/95 hover:-translate-y-0.5"
                   }`}
                 >
                   {addedMessage ? (
                     <>
                       <Check className="h-5 w-5" />
                       <span>Added to Quote!</span>
                     </>
                   ) : (
                     <>
                       <Send className="h-4 w-4 rotate-45" />
                       <span>Add to Quote List</span>
                     </>
                   )}
                 </button>

                 <button
                   onClick={handleWhatsAppEnquiry}
                   className="w-full py-4 rounded-2xl font-bold transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm sm:text-base bg-emerald-600 hover:bg-emerald-500 text-white hover:-translate-y-0.5"
                 >
                   <svg 
                     className="h-5 w-5 fill-current" 
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.26-3.411a9.78 9.78 0 0 0 5.753 1.822c5.626 0 10.201-4.542 10.204-10.126.002-2.707-1.048-5.253-2.956-7.164C17.41 3.21 14.86 2.16 12.012 2.16c-5.635 0-10.21 4.542-10.213 10.128a9.73 9.73 0 0 0 1.517 5.163l-.995 3.635 3.734-.972zm11.393-7.793c-.31-.155-1.838-.901-2.11-.999-.271-.099-.469-.149-.667.148-.198.298-.766.999-.94 1.198-.173.198-.347.222-.657.067-.31-.156-1.309-.48-2.493-1.532-.92-.816-1.541-1.826-1.72-2.133-.18-.306-.019-.472.136-.626.14-.139.31-.36.465-.54.155-.18.207-.306.31-.51.103-.204.052-.382-.026-.54-.077-.156-.667-1.606-.914-2.201-.24-.579-.487-.5-.667-.51-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.838-.752 2.097-1.442.259-.69.259-1.282.182-1.402-.077-.12-.272-.194-.583-.349z"/>
                   </svg>
                   <span>WhatsApp Enquiry</span>
                 </button>
               </div>
 
             </div>

            {/* Tabs Section: Description & Additional Information */}
            <div className="border border-slate-200/60 rounded-[32px] bg-white overflow-hidden shadow-xs">
              {/* Tab Header Row */}
              <div className="flex border-b border-slate-100 bg-slate-50/50">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 sm:px-8 py-5 text-xs sm:text-sm font-black uppercase tracking-widest transition-all cursor-pointer border-b-2 ${
                    activeTab === "description"
                      ? "border-brand-primary text-brand-primary bg-white"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("additionalInfo")}
                  className={`px-6 sm:px-8 py-5 text-xs sm:text-sm font-black uppercase tracking-widest transition-all cursor-pointer border-b-2 ${
                    activeTab === "additionalInfo"
                      ? "border-brand-primary text-brand-primary bg-white"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Additional Information
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="p-6 sm:p-8">
                {activeTab === "description" ? (
                  <div 
                    className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed font-medium space-y-4
                      [&>p]:leading-relaxed [&>p]:mb-4
                      [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-4
                      [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-4
                      [&>li]:text-slate-600
                      [&>h2]:text-lg [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mt-6 [&>h2]:mb-3"
                    dangerouslySetInnerHTML={{ __html: product.description || "No description available." }}
                  />
                ) : (
                  <div className="space-y-4">
                    {product.additionalInfo && Object.keys(product.additionalInfo).length > 0 ? (
                      <div className="border border-slate-100 rounded-2xl overflow-hidden w-full">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {Object.entries(product.additionalInfo).map(([key, value]) => (
                              <tr key={key} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="bg-slate-50/60 px-4 sm:px-6 py-4 text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider w-1/3 border-r border-slate-100">
                                  {key}
                                </td>
                                <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-600 font-semibold">
                                  {value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-slate-400 text-sm font-semibold">No additional information parameters available.</p>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 border-t border-slate-200/50 bg-slate-50/20 overflow-hidden">
        <div className="w-full mx-auto space-y-8">
          
          {/* Hide Scrollbars Utility */}
          <style dangerouslySetInnerHTML={{ __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}} />

          {/* Header Row */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
              Related Products
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scrollSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {relatedProducts.map((p) => {
              const cat = categoriesData[p.category as keyof typeof categoriesData];
              return (
                <div 
                  key={p.slug}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-start"
                >
                  <Link 
                    href={`/catalog/${p.slug}`}
                    className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-6 relative border-b border-slate-100 overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-base transition-colors leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          {cat?.name || "Products"}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                        <span>View Product</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
