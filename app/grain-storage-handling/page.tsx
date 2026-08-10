"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Database, Archive, RefreshCw, Factory, Settings2, LayoutTemplate, ShieldCheck, Headset, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const handlingCards = [
  {
    title: "Atta Flour Silo",
    slug: "atta-flour-silo",
    image: "/images/silos/attasilo_supplementimg.jpg",
    sub: "Flour Storage Silo"
  },
  {
    title: "Bran / Refraction Silo",
    slug: "bran-refraction-silo",
    image: "/images/silos/bransilo_supplementimg.jpg",
    sub: "Mild-Steel Storage Silo"
  },
  {
    title: "Conditioning Silo",
    slug: "conditioning-silo",
    image: "/images/silos/conditioningsilo_supplementimg.jpg",
    sub: "Conditioned Grain Holding"
  },
  {
    title: "Grain Silo - MS",
    slug: "grain-silo-ms",
    image: "/images/silos/grainsilo_supplementimg.jpg",
    sub: "Heavy-Duty Storage Silo"
  }
];

export default function GrainStorageHandlingPage() {


  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[650px] lg:h-[750px] flex items-center bg-[#0a3118] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/silos/silo_hero.png"
            alt="Silos Storage and Handling"
            fill
            priority
            className="object-cover object-right lg:object-center"
          />
        </div>
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-[#0a3118] from-0% via-[#0a3118]/70 via-[30%] to-transparent lg:to-[60%] z-10 w-full" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 z-20 h-full flex flex-col justify-center pb-24">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3 text-sm font-bold text-[#eab308] uppercase tracking-widest mb-4">
              <span className="w-10 h-[3px] bg-[#eab308]"></span>
              SILOS DIVISION
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1] tracking-tight">
              Silos.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Storage and handling silos engineered for reliable material flow, controlled conditioning, and efficient plant performance. Explore bran, atta, conditioning, and grain silos designed for smooth mill operations.
            </p>
            <div className="pt-4">
              <Link 
                href="#products" 
                className="inline-flex items-center gap-2 bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 font-extrabold px-8 py-3.5 rounded shadow-lg transition-all hover:scale-105"
              >
                EXPLORE SILOS <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Highlight Card */}
          <div className="absolute bottom-8 left-6 sm:left-12 lg:left-16 xl:left-24 right-6 sm:right-12 lg:right-16 xl:right-24 z-30">
            <div className="w-full max-w-5xl border border-white/20 bg-black/40 backdrop-blur-md rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
               {/* Optional glow line */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#eab308] to-transparent"></div>
               
               <div className="flex items-center gap-4 w-full md:w-1/3 justify-start md:justify-center">
                  <div className="text-[#eab308] border border-white/10 p-3 rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-sm lg:text-base leading-tight">Bran, Atta &<br/>Conditioning Silos</span>
               </div>
               <div className="hidden md:block w-px h-14 bg-white/10"></div>
               <div className="flex items-center gap-4 w-full md:w-1/3 justify-start md:justify-center">
                  <div className="text-[#eab308] border border-white/10 p-3 rounded-lg">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-sm lg:text-base leading-tight">Controlled<br/>Storage & Flow</span>
               </div>
               <div className="hidden md:block w-px h-14 bg-white/10"></div>
               <div className="flex items-center gap-4 w-full md:w-1/3 justify-start md:justify-center">
                  <div className="text-[#eab308] border border-white/10 p-3 rounded-lg">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-sm lg:text-base leading-tight">Built for<br/>Milling Plants</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Grain storage &amp; handling is crucial for maintaining the quality of grain
          </h2>
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-4xl">
            <p>
              RS Group offers reliable grain storage and handling solutions designed for efficiency and long-term preservation.
            </p>
            <p>
              Our silos storage systems are manufactured keeping in mind the standard of safety and quality of the storage system. Our engineering team designs customized silo systems to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full py-8 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {handlingCards.map((card) => (
              <Link 
                key={card.slug}
                href={`/catalog/${card.slug}`}
                className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-8 relative border-b border-slate-100 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <Database className="h-4 w-4" />
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-lg transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {card.sub}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                    <span>View Specifications</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Silo Solutions CTA Section */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 relative z-10">
        <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col">
          
          {/* Top Main Content Area */}
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center space-y-8 p-8 lg:p-16">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[#eab308] uppercase tracking-widest">
                  <span className="w-10 h-[3px] bg-[#eab308]"></span>
                  SILO SOLUTIONS
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-[#0a3118] leading-[1.1] tracking-tight">
                  Let’s Design the Right<br className="hidden lg:block"/>Silo for Your Plant.
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed max-w-xl text-lg">
                  From capacity planning to layout, materials and integration—our experts help you build efficient, future-ready storage systems.
                </p>
              </div>

              {/* 4 Features Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <Headset className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">Expert<br/>Consultation</h4>
                  <p className="text-xs text-slate-500 font-medium">Get recommendations tailored to your process and capacity.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">Custom<br/>Design & Layout</h4>
                  <p className="text-xs text-slate-500 font-medium">Optimized designs that fit your plant and operations.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">Reliable<br/>Performance</h4>
                  <p className="text-xs text-slate-500 font-medium">Engineered for safety, smooth flow and long-lasting use.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">End-to-End<br/>Support</h4>
                  <p className="text-xs text-slate-500 font-medium">From selection to installation and after-sales service.</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-[500px] overflow-hidden bg-[#f4f2eb]">
              <Image
                src="/images/silos/silo_cta_image.png"
                alt="Silo Solutions Design"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Bottom Contact Strip */}
          <div className="flex flex-col lg:flex-row border-t border-slate-200">
            {/* Dark Green CTA box */}
            <div className="bg-[#0a3118] p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6 lg:w-[45%] rounded-br-[4rem] lg:rounded-br-[0] lg:rounded-tr-[4rem] relative overflow-hidden">
               <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-white z-10">
                 <Phone className="w-6 h-6" />
               </div>
               <div className="z-10">
                 <h3 className="text-white font-heading font-extrabold text-xl lg:text-2xl mb-4">
                   Ready to discuss your<br/>silo requirements?
                 </h3>
                 <Link 
                   href="/contact"
                   className="inline-flex items-center gap-2 bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 font-black px-6 py-3 rounded-lg shadow-lg transition-all hover:scale-105 uppercase text-sm tracking-wide"
                 >
                   GET IN TOUCH <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
               <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
                 <Database className="w-48 h-48 text-white" />
               </div>
            </div>

            {/* Quick Contact Info */}
            <div className="flex-1 bg-slate-50 p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-around gap-8">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                   <p className="text-sm font-extrabold text-[#0a3118]">+91 91161 44665</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                   <p className="text-sm font-extrabold text-[#0a3118]">info@rschoyalgroup.com</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700">
                   <MessageCircle className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Chat on WhatsApp</p>
                   <p className="text-sm font-extrabold text-[#0a3118]">+91 91161 44665</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>



      <Footer />
    </div>
  );
}
