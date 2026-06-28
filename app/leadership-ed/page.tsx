"use client";

import Link from "next/link";
import { ArrowLeft, Award, Globe, Users, Heart, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeadershipEdPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/founders/rs_choyal.jpg')] bg-cover bg-center opacity-20 filter blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Leadership Profile
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Mr. R. S. Choyal
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Chairman &amp; Managing Director of Choyal Grinding Solution
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24">
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link>
            <span>/</span>
            <Link href="/about#leadership" className="hover:text-brand-primary transition-colors">Leadership</Link>
            <span>/</span>
            <span className="text-slate-600">Mr. R. S. Choyal</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-white border border-slate-200/60 p-6 rounded-[32px] shadow-sm space-y-6">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-100 shadow-inner">
                  <img
                    src="/images/founders/rs_choyal.jpg"
                    alt="Mr. R. S. Choyal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-heading font-black text-slate-900">Mr. R. S. Choyal</h2>
                    <p className="text-brand-primary text-xs font-bold uppercase tracking-wider mt-1">Chairman &amp; Managing Director</p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">Connect With CMD</p>
                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a href="https://www.facebook.com/radhey.choyal.2025" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all hover:scale-105">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/radheychoyal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all hover:scale-105">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/rschoyal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all hover:scale-105">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/@rschoyal.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-brand-primary hover:border-brand-primary flex items-center justify-center transition-all hover:scale-105">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about#leadership"
                className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-brand-primary uppercase tracking-widest transition-colors pl-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Leadership
              </Link>
            </div>

            {/* Right Biography Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-brand-primary tracking-wider uppercase">
                  Current Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                  Driving Global Milling Innovation
                </h3>
              </div>

              <div className="text-slate-700 font-medium space-y-6 text-sm sm:text-base leading-relaxed">
                <p>
                  Mr. R. S. Choyal is the Chairman and Managing Director of Choyal Grinding Solution Private Limited, the progressive, new-age milling venture under the RS Choyal Group. This entity was established following a strategic demerger from Shri Vishvakarma (E.S.) Industries Pvt. Ltd. to streamline specialized operations.
                </p>
                <p>
                  With more than three decades of direct leadership in the manufacturing and milling machinery industry, Mr. Choyal has played an instrumental role in modernizing flour milling technology in India and dramatically expanding its global footprint.
                </p>
                <p>
                  Widely respected for his deep technical understanding and industrial foresight, he has pioneered the development of custom-built plant layouts, advanced stone grinding solutions, and energy-efficient processing systems. These technologies have revolutionized grain milling for partners across 20+ countries.
                </p>
                <p>
                  He has spearheaded several landmark initiatives, including the integration of automatic telemetry systems into traditional stone mills, encouraging large-scale turnkey plant installations, and promoting rigorous R&amp;D. His steadfast belief in preserving the organic aroma and nutritional value of grain has established his ventures as market leaders in the stone-ground milling revival.
                </p>
                <p>
                  In addition to his corporate achievements, Mr. Choyal is deeply committed to mental development and emotional wellness. He actively runs the <strong>Brains Trust Society</strong>, where he regularly conducts seminars and shares valuable guidance on emotional intelligence, leadership mindfulness, and purposeful living, bridging industrial excellence with holistic human growth.
                </p>
              </div>

              {/* Pillars of Leadership */}
              <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] mt-8">
                <h4 className="text-lg font-heading font-black text-slate-850 mb-6">
                  Key Focus Areas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Global Milling Solutions</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Pioneering the export of high-capacity automated chakki mills and turnkey solutions to over 20 nations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Nutrition &amp; Innovation</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Championing stone-ground milling techniques to preserve natural wheat nutrients and flour freshness.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Emotional Intelligence</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Promoting mindfulness, leadership ethics, and community upliftment through the Brains Trust Society.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Traditional Chakki Revival</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Re-engineering traditional grinding methods with modern automated controls for maximum yield and quality.
                      </p>
                    </div>
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
