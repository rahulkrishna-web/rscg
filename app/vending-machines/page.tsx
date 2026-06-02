"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/app/catalog/productsData";

export default function VendingMachinesPage() {
  // Filter vending machine products (e.g. Floura)
  const vendingProducts = productsData.filter(
    (p) => p.slug === "floura" || p.category === "vending"
  );

  // If none matches the above query, fallback to floura explicitly
  const productsToDisplay = vendingProducts.length > 0 
    ? vendingProducts 
    : productsData.filter((p) => p.slug === "floura");

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image with slight blurred effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-xs scale-105" 
          style={{ backgroundImage: `url('https://rschoyalgroup.com/wp-content/uploads/2021/07/floura.jpg')` }}
        />
        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block bg-brand-tertiary text-slate-900 font-black text-xs sm:text-sm px-5 py-2.5 uppercase tracking-widest shadow-md">
              Vending Machines
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-200 tracking-wide max-w-2xl leading-relaxed">
              Our expert team have worked closely to develop a solution that's capable to provide you with the most innovative food vending machines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto space-y-12">
          
          {/* Page Intro Text */}
          <div className="max-w-3xl">
            <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              Provide your customers with the freshest food products with Our innovative vending machines. 
              Our expert team have worked closely to develop the finest solutions.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productsToDisplay.map((product) => (
              <Link 
                key={product.slug}
                href={`/catalog/${product.slug}`}
                className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="aspect-square bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden border-b border-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-lg transition-colors leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      Vending System
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                    <span>View Product Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
