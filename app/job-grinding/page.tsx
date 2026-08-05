"use client";

import Link from "next/link";
import { ArrowRight, Phone, Package, Settings, Clock, Beaker, Crosshair, ShieldCheck, Leaf, HeadphonesIcon, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timelineSteps = [
  {
    number: 1,
    title: "1. WHEAT TESTING",
    subtitle: "Quality Assessment",
    desc: "Raw wheat is thoroughly tested for moisture, impurities, protein, and overall quality. Only premium-grade wheat is selected to ensure consistent flour performance.",
    imgPath: "/images/job-grinding/milling-process/wheat-testing.png"
  },
  {
    number: 2,
    title: "2. PRE-CLEANING",
    subtitle: "Initial Removal",
    desc: "Large impurities such as stones, straw, dust, and foreign materials are removed. This initial cleaning protects equipment and prepares the wheat for processing.",
    imgPath: "/images/job-grinding/milling-process/pre-cleaning.png"
  },
  {
    number: 3,
    title: "3. FIRST CLEANING",
    subtitle: "In-Depth Impurity Removal",
    desc: "Advanced cleaning machines eliminate finer impurities and unwanted particles. This step enhances wheat purity before conditioning.",
    imgPath: "/images/job-grinding/milling-process/first-cleaning.png"
  },
  {
    number: 4,
    title: "4. FINAL CLEANING",
    subtitle: "Polishing and Sterilization",
    desc: "A final purification process removes any remaining contaminants. It ensures the wheat is completely clean and ready for milling.",
    imgPath: "/images/job-grinding/milling-process/final-cleaning.png"
  },
  {
    number: 5,
    title: "5. CONDITIONING",
    subtitle: "Optimal Moisture",
    desc: "Water is added to the wheat and allowed to rest for optimal moisture balance. This improves bran separation and enhances flour quality during milling.",
    imgPath: "/images/job-grinding/milling-process/conditioning.png"
  },
  {
    number: 6,
    title: "6. GRINDING",
    subtitle: "Breaking and Reduction",
    desc: "Conditioned wheat is carefully ground using precision roller mills. The process produces fine flour while preserving its natural quality.",
    imgPath: "/images/job-grinding/milling-process/grinding.png"
  },
  {
    number: 7,
    title: "7. SIEVING",
    subtitle: "Separation",
    desc: "Ground material is separated into flour, bran, and semolina using fine sieves. This ensures uniform particle size and consistent product quality.",
    imgPath: "/images/job-grinding/milling-process/sieving.png"
  },
  {
    number: 8,
    title: "8. REDRESSING",
    subtitle: "Final Refining",
    desc: "The flour undergoes additional refining to improve texture and purity. This step delivers a smoother, cleaner, and more consistent final product.",
    imgPath: "/images/job-grinding/milling-process/redressing.png"
  },
  {
    number: 9,
    title: "9. LAB TESTING",
    subtitle: "Quality Verification",
    desc: "Finished flour is tested for quality, safety, and compliance with industry standards. Every batch is verified to ensure consistent performance and customer satisfaction.",
    imgPath: "/images/job-grinding/milling-process/lab-testing.png"
  },
  {
    number: 10,
    title: "10. PACKING",
    subtitle: "Final Dispatch",
    desc: "The finished flour is hygienically packed in food-grade packaging. Secure packaging preserves freshness, quality, and shelf life during storage and transport.",
    imgPath: "/images/job-grinding/milling-process/packing.png"
  }
];

export default function JobGrindingPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[400px] sm:h-[480px] overflow-hidden flex items-center bg-[#0D301F]">
          <div className="absolute inset-0 bg-[url('/images/job-grinding/hero-banner/job-grinding.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C1C] via-[#0B2C1C]/90 to-transparent z-10 w-full sm:w-2/3 lg:w-3/5" />
          
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-20 h-full flex flex-col justify-center pb-8 sm:pb-0">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[11px] font-black text-[#D3994B] tracking-[0.2em] uppercase">
                SERVICES
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-heading font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                Job Grinding
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pt-2 max-w-xl">
                Flexible contract grinding services for grains, spices, pulses, and food ingredients—delivering consistent particle size, hygienic processing, and dependable commercial output.
              </p>
            </div>

            {/* Hero Highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-8 lg:mt-12">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-[#D3994B]" />
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm sm:text-base">Custom Batch Sizes</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Flexible Processing</p>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-white/20"></div>

              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-[#D3994B]" />
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm sm:text-base">Consistent Grinding</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Reliable Particle Control</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/20"></div>

              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#D3994B]" />
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm sm:text-base">Fast Turnaround</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Commercial-Scale Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro & Process Overview */}
        <section className="relative w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden">
          
          {/* Faded Gear Watermark */}
          <div className="absolute right-[-10%] top-[10%] opacity-5 pointer-events-none">
            <Settings className="w-[500px] h-[500px] text-brand-primary" />
          </div>

          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-10 relative z-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Job Grinding</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 relative z-10">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#133020] leading-tight uppercase">
                OUR JOB GRINDING PROCESS IS DESIGNED TO MAKE EVERY BATCH CLEAR, CONTROLLED, AND DEPENDABLE.
              </h2>
              <div className="h-1 w-16 bg-[#D3994B]"></div>
              <div className="text-slate-600 space-y-4 text-sm leading-relaxed font-medium">
                <p>
                  From understanding your raw material and required particle size to trials, grinding, quality checks, and final dispatch, each stage is planned to deliver consistent results while protecting product quality.
                </p>
                <p>
                  Our 40 TPD Flour Milling Facility in Ajmer is more than a plant—it's an experience centre designed to help you make confident, informed decisions.
                </p>
                <p>
                  See a wide range of milling machines in action, evaluate process performance, conduct R&D, and get practical operator training.
                </p>
                <p>
                  From process trials to skill-building, everything you need to validate the right solution—before you invest.
                </p>
              </div>
            </div>

            {/* Facility Details Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#307954]" />
                <h3 className="font-heading font-bold text-[#133020] text-lg">Facility Details</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <img src="/images/job-grinding/facility-details/capacity.png" alt="Capacity" className="w-10 h-10 object-contain" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CAPACITY:</span>
                    <p className="font-black text-[#133020] text-xl">40 TPD</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/images/job-grinding/facility-details/location.png" alt="Location" className="w-10 h-10 object-contain" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">LOCATION:</span>
                    <p className="font-black text-[#133020] text-sm">AJMER, RAJASTHAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facility Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: "JOB GRINDING",
                desc: "From understanding your raw material particle size to trials, grinding product.",
                icon: "/images/job-grinding/facility-services/job-grinding.png"
              },
              {
                title: "CUSTOM RECIPE DESIGN",
                desc: "We adjust dampening and sifting streams to achieve exact gluten.",
                icon: "/images/job-grinding/facility-services/custom-recipe-design.png"
              },
              {
                title: "COMPLIANT FACILITY",
                desc: "Our plant is fully solar-powered, dust-free, and highly tested of quality standards.",
                icon: "/images/job-grinding/facility-services/compliant-facility.png"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-heading font-black text-[#133020] text-lg mb-3">{service.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* The Flour Milling Process */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
            <span className="text-[13px] font-black text-slate-600 tracking-wider">Milling Process</span>
            <h3 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
              The Flour Milling Process
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-[30px] sm:left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2" />

            <div className="space-y-12">
              {timelineSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}>
                    
                    {/* Number Badge */}
                    <div className="absolute left-[30px] sm:left-1/2 top-6 sm:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px] border-4 border-[#F9F6F0]">
                      {step.number}
                    </div>

                    {/* Step Card */}
                    <div className={`w-full sm:w-[47%] pl-16 sm:pl-0 ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}>
                      <div className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow group">
                        
                        {/* If it's a left item on desktop, text comes first, image second. On mobile, always image then text. */}
                        <div className={`flex flex-col sm:flex-row gap-4 w-full ${isLeft ? "sm:flex-row-reverse" : ""}`}>
                          
                          <div className="w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                            <img src={step.imgPath} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>

                          <div className={`flex flex-col justify-center py-2 px-1 ${isLeft ? "sm:text-right" : "sm:text-left"}`}>
                            <h4 className="font-heading font-black text-[#133020] text-sm uppercase leading-tight mb-0.5">{step.title}</h4>
                            <p className="text-[11px] font-bold text-slate-500 mb-2">{step.subtitle}</p>
                            <p className="text-[10px] sm:text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Offered Grid */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
            <h3 className="text-3xl font-heading font-black text-slate-900">
              Services Offered
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              Explore setup options, mill training courses, and product trial runs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Job Grinding Setup",
                desc: "With zero machinery investment, get your atta brand setup easily. Receive freshly milled premium flour packed in your custom sacks.",
                imgPath: "/images/job-grinding/services-offered/jobgrinding_setup.png"
              },
              {
                title: "Product Trials",
                desc: "We determine parameters, evaluate yield, quality, and consistency to find the best outcome.",
                imgPath: "/images/job-grinding/services-offered/product-trials.png"
              },
              {
                title: "Training Facility",
                desc: "We offer world-class practical courses on flour milling technology for operators. Full plant audit to ensure peak performance and compliance.",
                imgPath: "/images/job-grinding/services-offered/training-facility.png"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] w-full overflow-hidden p-3 pb-0">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                     <img src={service.imgPath} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-8 space-y-3">
                  <h4 className="text-xl font-heading font-black text-[#133020] leading-snug">{service.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                  <ArrowRight className="w-4 h-4 text-[#D3994B] mt-2" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="relative w-full rounded-[32px] overflow-hidden bg-[#0D301F] shadow-lg flex flex-col justify-end min-h-[400px]">
            <div className="absolute inset-0 bg-[url('/images/job-grinding/footer-job-grinding-/jobgrinding_services.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C1C] via-[#0B2C1C]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C1C] via-[#0B2C1C]/40 to-transparent" />
            
            <div className="relative z-10 p-8 sm:p-12 space-y-8 flex flex-col justify-between h-full">
              
              <div className="space-y-4 max-w-2xl">
                <span className="text-[11px] font-black text-[#D3994B] tracking-wider uppercase">
                  JOB GRINDING SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-white leading-tight">
                  Have a Product You Need Ground?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl font-medium leading-relaxed">
                  Share your raw material, required particle size, batch quantity, and quality specifications with our team. We will help you evaluate the right grinding process for trial production or commercial-scale requirements.
                </p>
              </div>

              {/* Icons Row */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 pb-4">
                {[
                  { icon: Beaker, label: "Trial to Bulk\nQuantities" },
                  { icon: Crosshair, label: "Process\nRecommendation" },
                  { icon: ShieldCheck, label: "Consistent\nQuality" },
                  { icon: Leaf, label: "Hygienic\nHandling" },
                  { icon: HeadphonesIcon, label: "Expert\nSupport" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 text-center group">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-[#D3994B] transition-colors">
                      <item.icon className="w-5 h-5 text-[#D3994B]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 uppercase leading-tight whitespace-pre-line">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/10 pt-8 justify-between">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a
                    href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20your%20Job%20Grinding%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#D3994B] text-white hover:bg-[#D3994B]/90 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    DISCUSS YOUR GRINDING REQUIREMENT <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-1.5 bg-transparent hover:bg-white/5 text-white border border-[#D3994B] px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    SCHEDULE A PRODUCT TRIAL <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-2.5 border border-white/10 mt-4 sm:mt-0">
                  <Shield className="w-5 h-5 text-[#307954]" />
                  <div>
                    <p className="text-white font-bold text-[11px] leading-tight">Trusted by Businesses Worldwide</p>
                    <p className="text-slate-400 text-[10px]">Delivering quality grinding solutions with reliability, consistency and complete confidentiality.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
