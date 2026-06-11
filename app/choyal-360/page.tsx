"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Phone, ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceStream {
  title: string;
  desc: string;
  iconPath: string;
}

const serviceStreams: ServiceStream[] = [
  {
    title: "Project Development",
    desc: "We develop complete projects starting from 2D and 3D mechanical drawings, site selection, land development, designing, fabrication, commissioning of the plant, recipe development, and packaging design.",
    iconPath: "/images/services/project-dev.png"
  },
  {
    title: "Operations & Consultancy",
    desc: "We provide expert consultancy on how to maximize your operations for maximum output, efficient plant operations, maintenance checklists, quality control, fumigations, MIS, and overall post-setup project management.",
    iconPath: "/images/services/operations.png"
  },
  {
    title: "Process Automation",
    desc: "Control and optimize key mill processes like raw material sampling, pre-cleaning, storing, blending, cleaning, grinding, and automated packaging to ensure long-term, stable growth of the plant.",
    iconPath: "/images/services/automation.png"
  },
  {
    title: "Licensing & Certifications",
    desc: "We help you acquire all necessary licensing required to start your operations legally and smoothly, including FSSAI, APEDA, IEC (Import Export Code), and other standard regulatory clearances.",
    iconPath: "/images/services/licensing.png"
  },
  {
    title: "Staff & Operator Training",
    desc: "We provide specialized on-site and classroom training to your operating staff, ensuring they are fully ready to manage, run, and maintain the complete milling plant and automation machinery.",
    iconPath: "/images/services/training.png"
  },
  {
    title: "Government Registrations",
    desc: "We assist in securing all essential administrative registrations required for your business setup, such as Udyam, GST, PAN, PMEGP, and other enterprise declarations.",
    iconPath: "/images/services/gov-regis.png"
  },
  {
    title: "Design & Engineering",
    desc: "Our engineering team designs full-scale 2D and 3D mechanical models, plant flow diagrams, and optimized site layouts for efficient, space-saving plant erection and commissioning.",
    iconPath: "/images/services/design-engg.png"
  },
  {
    title: "Technology Upgradation",
    desc: "We analyze, modify, and upgrade your existing conventional mills to match modern industrial standards, integrating smart controllers and digital features easily.",
    iconPath: "/images/services/tech-upgrad.png"
  },
  {
    title: "Project & Bankable Reports",
    desc: "We prepare detailed project reports, feasibility studies, and bankable financial projections to assist in securing business loans, funding, and corporate approvals.",
    iconPath: "/images/services/project-reports.png"
  },
  {
    title: "Subsidies & Policies Guidance",
    desc: "We guide you through the maze of applicable state and central subsidies, capital grants, and government industrial policies to maximize your financial savings.",
    iconPath: "/images/services/subsd.png"
  }
];

export default function Choyal360Page() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/services/banner.jpg')] bg-cover bg-center opacity-35" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Services & Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Choyal 360
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Grain 360 offers you all the services required for starting your food business today, under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Overview Section */}
        <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24">
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-8">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Services</span>
            <span>/</span>
            <span className="text-slate-600">Choyal 360</span>
          </div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                End-To-End Business Enablement
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                Plan Your Operations, We Get Your Business Started
              </h2>
              <div className="text-slate-600 font-medium space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Starting a business can be overwhelming with so many requirements to fulfill. 
                  <strong> Grain 360</strong> takes the stress out of the equation by providing you all the 
                  solutions under one roof. We guide you through preparing your project reports, obtaining 
                  government and export registrations, and taking advantage of applicable subsidies and policies.
                </p>
                <p>
                  From there, we handle turnkey plant setup, design and engineering, packaging design, 
                  operations advisory, web/IoT telemetry integration, and operator training. 
                  Managing so many separate vendors and formalities takes immense time and energy—Grain 360 
                  helps you bypass those complexities and get started in no time.
                </p>
              </div>
            </div>

            {/* Quick highlight banner info */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] space-y-6">
              <h3 className="text-lg font-heading font-black text-slate-800">
                Why Choose Grain 360?
              </h3>
              <ul className="space-y-3">
                {[
                  "Single point of contact for setup & launch",
                  "Government subsidy & bankable report design",
                  "Turnkey mechanical & electrical fabrication",
                  "ISO-compliant regulatory registration support",
                  "Comprehensive post-commissioning audits"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-600">
                    <span className="w-5 h-5 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-1.5 bg-brand-primary text-white hover:bg-brand-primary/95 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Consult an Expert
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services Streams Title */}
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl font-heading font-black text-slate-900">
              Our Services Streams
            </h3>
            <p className="text-sm text-slate-500 font-semibold">
              Explore the ten core focus areas covered under the Choyal 360 setup package.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceStreams.map((stream, idx) => (
              <div 
                key={idx}
                className="group bg-white border border-slate-200/60 rounded-[28px] p-6 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Icon Block */}
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={stream.iconPath} 
                      alt={stream.title} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-heading font-black text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                      {stream.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {stream.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center text-xs font-black text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 uppercase tracking-wider cursor-pointer mt-4">
                  <span>Enquire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* CTA/Request Block */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Ready to Start Your Food Processing Business?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            Contact us today to receive customized layout suggestions, bankable project templates, and technical consulting parameters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20the%20Choyal%20360%20Service%20to%20setup%20a%20new%20milling%20business."
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
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
