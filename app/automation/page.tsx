"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Cpu, 
  Layers,
  Zap,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Database,
  Building,
  RefreshCw,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AutomationPage() {


  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/plants/03.webp')] bg-cover bg-center" />
        {/* Dark / Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block bg-brand-tertiary text-slate-900 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-md uppercase tracking-wider shadow-sm select-none">
              Automation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Advanced control systems for modern mill operations
            </h1>
          </div>
        </div>
      </section>

      {/* Main Grid Info Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Description Column */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Future-Proof Flour Milling
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Automation is the key to consistent milling quality and reduced dependence on manual calibration. 
                RS Choyal's Wonder Miller and digital control systems monitor grain throughput, temperature, and stone gap settings in real-time.
              </p>
              <p>
                By using advanced electronic sensors, precise load balances, and real-time gap adjustments, 
                our automation systems dynamically compensate for stone wear, grain moisture shifts, and friction variables. 
                This guarantees high flour texture uniformity and prevents common operational choke points.
              </p>
              <p>
                Our plug-and-play modules integrate with existing setups or come pre-packaged with our turnkey plants, 
                providing user-friendly HMI touchscreen controls, automated alarms, and full Android/iOS remote monitoring 
                for convenient global oversight.
              </p>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-6">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-3">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#about" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/flour-mills" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/turnkey-projects" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Turnkey Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/power-saving" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Power Saving
                  </Link>
                </li>
                <li>
                  <Link href="/flour-mills" className="text-sm font-semibold text-slate-700 hover:text-brand-primary flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
                    Flour Mill
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/40 border-t border-slate-200/50">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Benefits of Automation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Transforming traditional grinding with intelligent software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary w-fit">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                Increased Yield
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Auto-pressure adjustments ensure steady grinding quality irrespective of grain variety, hardiness, or raw input density.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary w-fit">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                Reliable Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Robust PLC panels, industrial-grade heat sensors, and automated safety interlocks ensure continuous, trouble-free plant operation.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
              <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary w-fit">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800">
                Reduced Operation Cost
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Minimizes manual oversight requirements and stone dressing downtime by automatically compensating for stone surface wear.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Offered Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/10 border-t border-b border-slate-200/50 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Services Offered
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Expert systems engineering to retrofit or scale your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Service item 1 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/10">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Digital Plant
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Control your entire mill from a single, centralized PLC dashboard featuring automated recipe pre-sets, logs, and live telemetry tracking.
              </p>
            </div>

            {/* Service item 2 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/10">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Choyal Remote Support
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Instant cloud troubleshooting, remote diagnostic checks, and online setup reviews by certified RS Choyal engineers.
              </p>
            </div>

            {/* Service item 3 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/10">
                <RefreshCw className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Mill Development
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Custom electrical panel upgrades, retrofit sensors for traditional horizontal chakkis, and software updates for legacy plants.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Get in Touch Landscape Banner */}
      <section className="relative w-full h-[240px] sm:h-[320px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_3.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto z-10 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            Consult on Mill Automation
          </h2>
          <Link 
            href="/contact"
            className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-slate-900 font-extrabold px-6 py-3 rounded-xl text-sm shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Get in Touch!</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>



      <Footer />
    </div>
  );
}
