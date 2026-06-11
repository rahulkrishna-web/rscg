"use client";

import Link from "next/link";
import { ArrowRight, Phone, Settings, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TimelineStep {
  number: number;
  title: string;
  desc: string;
}

const timelineSteps: TimelineStep[] = [
  {
    number: 1,
    title: "Wheat Testing",
    desc: "Ensures that the incoming wheat meets quality standards, customer specifications, and has other desirable milling characteristics."
  },
  {
    number: 2,
    title: "Pre Cleaning",
    desc: "Elimination of natural and unnatural contaminants from the wheat before it is sent to storage or processed into flour."
  },
  {
    number: 3,
    title: "First Cleaning",
    desc: "The flow balancer passes the wheat in exact weight and measurement, routing it through the magnetic destoner."
  },
  {
    number: 4,
    title: "Final Cleaning",
    desc: "With the help of high-efficiency vibro separators and destoners, final cleaning is done to ensure the complete elimination of finer impurities."
  },
  {
    number: 5,
    title: "Conditioning",
    desc: "Wheat conditioning is done with the help of Wonder Drop. It controls and optimizes the moisture levels of the wheat."
  },
  {
    number: 6,
    title: "Cleaning & Conditioning",
    desc: "Wheat goes into final cleaning with the help of an emery polisher, aspiration channel, centrifugal fans, reverse jet filters, and magnetic destoners."
  },
  {
    number: 7,
    title: "Grinding",
    desc: "Wheat is sent to the Wonder Mill for milling, where with the help of emery stones it is broken down into finer particles. Wonder Mill yields 30% more output."
  },
  {
    number: 8,
    title: "Sieving",
    desc: "The milled flour is sieved to separate whole wheat flour, bran, and non-grounded wheat particles."
  },
  {
    number: 9,
    title: "Re-Dressing",
    desc: "The flour is now routed to high-precision vibro sifters to remove any remaining microscopic impurities from the flour."
  },
  {
    number: 10,
    title: "Lab Testing",
    desc: "Before packaging, the flour is tested for moisture content, CCL4, ash content, and bran scan, ensuring that the premium quality standards are met."
  },
  {
    number: 11,
    title: "Packaging",
    desc: "The flour is finally packed in multilayer pouch bags with the help of an automatic packaging and sacking machine."
  }
];

export default function JobGrindingPage() {

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/job-grinding/banner.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Job Grinding Services
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                With zero investment in machineries, we take care of your complete milling and packaging needs.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Job Grinding</span>
          </div>

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                Turnkey Milling Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                Launch Your Flour Brand with Zero Machinery Capex
              </h2>
              <div className="text-slate-600 font-medium space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Setting up a modern flour mill requires heavy capital investment and compliance formalities. 
                  With our **Job Grinding services**, you can bypass these hurdles completely. We operate a state-of-the-art 
                  **40 TPD Wholewheat Atta Plant** at our facility centre in Ajmer, dedicated to milling on contract.
                </p>
                <p>
                  Optimal milling is all about the process. We follow extensive processing under one roof—from raw material 
                  sampling, pre-cleaning, storage, and blending, to grinding, sifting, and final automated packaging. 
                  You get freshly milled flour packaged in your own branded bags, ready for market.
                </p>
              </div>
            </div>

            {/* Quick spec cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {[
                {
                  icon: Settings,
                  title: "Custom Recipe Design",
                  desc: "We adjust dampening, conditioning, and sifting streams to achieve the exact gluten, ash, and moisture level your clients demand."
                },
                {
                  icon: ShieldCheck,
                  title: "Certified Clean Facility",
                  desc: "Our plant is fully solar-powered, dust-free, and regularly audited to maintain absolute FSSAI compliance."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-extrabold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-bold leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Process Flow Diagram */}
          <div className="space-y-12 mb-24">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                Work Flow
              </span>
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Milling Process Involved
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Trace the 11 sequential stages your grain goes through at our facility to achieve premium flour quality.
              </p>
            </div>

            {/* Alternating CSS Timeline */}
            <div className="relative max-w-4xl mx-auto py-8">
              {/* Central track line */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

              <div className="space-y-12 relative">
                {timelineSteps.map((step, idx) => {
                  const isLeft = idx % 2 === 0;

                  return (
                    <div 
                      key={step.number} 
                      className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* Central Node Badge */}
                      <div className="absolute left-[20px] md:left-1/2 top-1.5 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-9 h-9 bg-brand-primary text-white border-4 border-brand-bg rounded-full flex items-center justify-center font-extrabold text-xs shadow-xs">
                        {step.number}
                      </div>

                      {/* Content Card container */}
                      <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                        <div className="bg-white border border-slate-200/60 rounded-2xl p-5 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 relative group">
                          
                          {/* Connection line indicator on desktop */}
                          <div 
                            className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-0.5 bg-slate-200 group-hover:bg-brand-primary/45 transition-colors ${
                              isLeft ? "-right-10" : "-left-10"
                            }`} 
                          />
                          
                          {/* Small dots on connector ends */}
                          <div 
                            className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-brand-primary transition-colors ${
                              isLeft ? "-right-10 translate-x-1/2" : "-left-10 -translate-x-1/2"
                            }`} 
                          />

                          <div className="space-y-1.5">
                            <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Offered Grid */}
          <div className="space-y-12 mb-24">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Services Offered
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Explore setup options, mill training courses, and product trial runs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Job Grinding Setup",
                  desc: "With zero machinery investment, get your atta brand setup easily. Receive freshly milled premium flour packed in your custom sacks."
                },
                {
                  title: "Product Trials",
                  desc: "Intending to install a new plant? Get first-hand trial outputs at our Ajmer facility to test moisture, recipe, and yields beforehand."
                },
                {
                  title: "Training Facility",
                  desc: "We offer world-class practical courses on flour milling technology for operators, alongside customized modules for enterprise milling groups."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-6 rounded-[28px] space-y-3">
                  <div className="w-4 h-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                  </div>
                  <h4 className="text-lg font-heading font-black text-slate-800 leading-snug">{service.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </section>

        {/* CTA */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Schedule a Trial Milling Run Today
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            Send us raw material specifications, ask for custom flour testing runs, or book operator training slots.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20your%20Job%20Grinding%20service%20to%20mill%20under%20my%20own%20atta%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-secondary text-brand-foreground hover:bg-brand-secondary/90 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              <Phone className="w-4 h-4" />
              Discuss via WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Inquire Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
