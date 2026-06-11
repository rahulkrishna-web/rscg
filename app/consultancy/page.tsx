"use client";

import Link from "next/link";
import { ArrowRight, Phone, Award, ShieldAlert, Users, TrendingUp, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ConsultService {
  title: string;
  desc: string;
  iconPath: string;
}

const consultServices: ConsultService[] = [
  {
    title: "How to Start Your Own Agri Business",
    desc: "If you are looking to get into the agriculture business by starting your own company, we have the right team to help you secure financing, acquire licenses, prep land, design market entry paths, and fully support your launch.",
    iconPath: "/images/consultancy/icon_1.png"
  },
  {
    title: "How to Start Your Flour, Pulse or Spice Mill",
    desc: "Our expert team helps you coordinate land development, facility layout, production schedules, bankable reports, machinery selection, operations insights/MIS, and process optimization to run your mill successfully.",
    iconPath: "/images/consultancy/icon_2.png"
  },
  {
    title: "How to Optimise & Make Your Mill Profitable",
    desc: "We help you control and optimize every process—from raw material sampling, pre-cleaning, and storage, to blending, grinding, sifting, and packaging—to drive long-term plant growth and higher margins.",
    iconPath: "/images/consultancy/icon_3.png"
  },
  {
    title: "Custom Machinery & Product Development",
    desc: "Different agri-businesses have unique specifications. Our Technical & Design team designs custom products, machinery specs, and layout parameters tailored directly to your specific milling goals.",
    iconPath: "/images/consultancy/icon_4.png"
  },
  {
    title: "Future of Food Business & Digitisation",
    desc: "The food processing industry is digitizing rapidly. We help you integrate IoT telemetry, cloud reporting, and automation lines so your processing facility remains competitive and future-ready.",
    iconPath: "/images/consultancy/icon_5.png"
  }
];

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/consultancy/banner.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Consultancy Services
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Get our expert team to help you in building your dream agri business.
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
            <span className="text-slate-600">Consultancy</span>
          </div>

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                60+ Years of Milling Lineage
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                Expert Advisory for Agriculture & Food Businesses
              </h2>
              <div className="text-slate-600 font-medium space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  As one of the leading companies in the agriculture sector with over 60 years of technical expertise, 
                  our consulting team helps you navigate the entire journey of setting up and optimizing a food processing plant.
                </p>
                <p>
                  We work side-by-side with you, building your institutional capabilities to better understand your budget 
                  constraints, uncover critical operational insights, and construct highly sustainable, profitable mills.
                </p>
                <p>
                  Entering the food business is a multi-step journey. We guide you through essential phases including land 
                  development feasibility, facility layout planning, capital projections, regulatory licensing, recipe creation, 
                  and product trials.
                </p>
              </div>
            </div>

            {/* Spec Highlights Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] space-y-6">
              <h3 className="text-lg font-heading font-black text-slate-850">
                Consultancy Deliverables
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Award, title: "Industry Heritage", desc: "Advisory backed by 6+ decades of milling expertise" },
                  { icon: Users, title: "Capability Building", desc: "Operational training for staff and managers" },
                  { icon: TrendingUp, title: "Profit Optimization", desc: "Detailed audits targeting yield & power savings" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-extrabold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-semibold leading-normal">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Offered Grid */}
          <div className="space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900">
                Services Offered
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                Explore our designated consulting streams designed to ensure your agri-business is future-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="group bg-white border border-slate-200/60 rounded-[28px] p-6 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <img 
                      src={service.iconPath} 
                      alt={service.title} 
                      className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-heading font-black text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center text-xs font-black text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 uppercase tracking-wider cursor-pointer mt-4">
                    <span>Enquire Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA */}
        <section className="w-full bg-slate-950 text-white py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight max-w-xl mx-auto leading-tight">
            Consult With Our Milling Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-medium">
            Contact us to request feasibility reports, budget breakdowns, machinery specifications, and layout designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20your%20Consultancy%20services%20to%2520start%20or%20improve%20my%20milling%20business."
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
              Request Advisory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
