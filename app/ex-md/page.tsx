"use client";

import Link from "next/link";
import { ArrowLeft, Award, Calendar, GraduationCap, Gavel, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExMdPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/founders/rd_sharma.jpg')] bg-cover bg-center opacity-20 filter grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Legacy Founders
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Late Shri R. D. Sharma
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Co-Founder &amp; Ex-Managing Director of Shri Vishvakarma Industries
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
            <span className="text-slate-600">Late Shri R. D. Sharma</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-white border border-slate-200/60 p-6 rounded-[32px] shadow-sm space-y-6">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-100 shadow-inner">
                  <img
                    src="/images/founders/rd_sharma.jpg"
                    alt="Late Shri R. D. Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-heading font-black text-slate-900">Late Shri R. D. Sharma</h2>
                    <p className="text-brand-primary text-xs font-bold uppercase tracking-wider mt-1">Co-Founder &amp; Ex-Managing Director</p>
                    <p className="text-slate-400 font-medium text-[11px] mt-0.5">January 5, 1939 – Ex-MD</p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <Calendar className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>Born: January 5, 1939</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <GraduationCap className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>B.Com, D.A.V. College, Ajmer (1961)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>Nava City, Distt. Nagaur, Rajasthan</span>
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
                  Legacy &amp; Heritage
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                  A Visionary Leader and Legal Champion
                </h3>
              </div>

              <div className="text-slate-700 font-medium space-y-6 text-sm sm:text-base leading-relaxed">
                <p>
                  Late Mr. R. D. Sharma was born on 5 January 1939 in Nava city, Distt. Nagaur, Rajasthan. He pursued higher education with dedication, successfully completing his Bachelor of Commerce from the prestigious D.A.V. College, Ajmer in 1961. He formally entered the emery mill stones business in 1959.
                </p>
                <p>
                  In 1965, he co-founded <strong>Shri Vishvakarma Industries</strong>, working alongside his brother to build the operational backbone of the business. In 1977, he was officially appointed as the Managing Director of the group, taking complete charge of operational management and legal affairs.
                </p>
                <p>
                  Mr. Sharma was a true pioneer in international commerce. He was the first Indian businessman in the milling sector to export emery stones and flour mills globally, introducing Indian milling technology to the international market and establishing early trade routes.
                </p>
                <p>
                  Beyond expanding the company&apos;s commercial footprint, Mr. Sharma was a deeply progressive leader committed to employee welfare. He proactively reformed internal labor policies, amending regulations to provide maximum possible Provident Fund benefits to the workers.
                </p>
                <p>
                  He is also famously remembered in the industry for fighting and winning a landmark national lawsuit that exempted emery stones from excise duty. This legal victory not only saved his business substantial costs but also protected the entire Indian mill stone manufacturing sector from a heavy tax burden.
                </p>
                <p>
                  His integrity, legal acumen, and operational foresight left an indelible mark on the RS Choyal Group, setting a high benchmark for employee-first corporate responsibility and global vision.
                </p>
              </div>

              {/* Pillars of Legacy */}
              <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-[32px] mt-8">
                <h4 className="text-lg font-heading font-black text-slate-850 mb-6">
                  Key Legacy Contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Export Pioneer</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        First entrepreneur to export Indian-made emery stones and milling systems to foreign nations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Gavel className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Industry Legal Victory</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Won a historic legal battle exempting emery stones from excise duty, saving the wider milling trade.
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
