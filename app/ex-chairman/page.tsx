"use client";

import Link from "next/link";
import { ArrowLeft, Award, Calendar, GraduationCap, Heart, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExChairmanPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden flex items-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('/images/founders/bm_choyal.jpg')] bg-cover bg-center opacity-20 filter grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tertiary tracking-widest uppercase">
                Legacy Founders
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Late Mr. B. M. Choyal
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Co-Founder &amp; Ex-Chairman of Shri Vishvakarma Industries
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
            <span className="text-slate-600">Late Mr. B. M. Choyal</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-white border border-slate-200/60 p-6 rounded-[32px] shadow-sm space-y-6">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-100 shadow-inner">
                  <img
                    src="/images/founders/bm_choyal.jpg"
                    alt="Late Mr. B. M. Choyal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-heading font-black text-slate-900">Late Mr. B. M. Choyal</h2>
                    <p className="text-brand-primary text-xs font-bold uppercase tracking-wider mt-1">Co-Founder &amp; Ex-Chairman</p>
                    <p className="text-slate-400 font-medium text-[11px] mt-0.5">July 28, 1926 – Ex-Chairman</p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <Calendar className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>Born: July 28, 1926</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>Nava City, Distt. Nagaur, Rajasthan</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <Award className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>Title: &apos;Bhamashah&apos;</span>
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
                  A Pioneer in Milling Engineering
                </h3>
              </div>

              <div className="text-slate-700 font-medium space-y-6 text-sm sm:text-base leading-relaxed">
                <p>
                  Late Mr. B. M. Choyal was born on 28 July 1926 in Nava city, Distt. Nagaur, Rajasthan. At just 16 years of age, he bravely stepped up to shoulder the responsibility of supporting his family and mentoring his younger brother.
                </p>
                <p>
                  He began his career working in wood pattern making and dedicating himself to researching and innovating alternative materials, which ultimately led to the development of high-quality artificial emery stones.
                </p>
                <p>
                  In 1959, he formally entered the emery mill stone business, and in 1965, co-founded <strong>Shri Vishvakarma Industries</strong>, setting the foundation for what would become a highly respected enterprise in milling technologies.
                </p>
                <p>
                  Appointed as Chairman of the group in 1977, Mr. Choyal personally oversaw production standards, product quality control, and manufacturing workflow improvements, guiding the company through its formative years of expansion.
                </p>
                <p>
                  Beyond his remarkable business acumen, he was widely recognized for his philanthropic initiatives in girls&apos; education, local medical support, merit-based student scholarships, and establishing cow shelters (Gau Shalas) in his hometown.
                </p>
                <p>
                  His compassionate contributions earned him the respected title of &apos;Bhamashah&apos; in his native region of Nawa, and his legacy continues to inspire the values of trust, quality, and community support across all RS Choyal Group companies.
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
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Support for Education</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Pioneered local educational opportunities, specifically funding schools and scholarships for girls in Rajasthan.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-extrabold text-slate-800">Social Well-being</h5>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        Established cow shelters (Gau Shalas) and healthcare resources to benefit underprivileged communities.
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
