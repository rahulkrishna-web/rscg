"use client";

import Link from "next/link";
import { CheckCircle, Home, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>

      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-6 relative z-10">
        <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/50 shadow-2xl text-center space-y-8 animate-scale-in">
          
          <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary animate-pulse">
            <CheckCircle className="w-12 h-12" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-heading font-black text-slate-800 tracking-tight">
              Request Received Successfully
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Thank you for submitting your enquiry. We have received your product specifications and preferences.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Steps</h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-brand-primary font-bold">1.</span>
                <span>An engineering coordinator will review your capacity, power, and layout needs.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-brand-primary font-bold">2.</span>
                <span>We will draft a preliminary equipment selection and physical site layout proposal.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-brand-primary font-bold">3.</span>
                <span>Our team will contact you via Email or phone within 24 business hours.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link 
              href="/"
              className="flex-1 py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            
            <Link 
              href="/flour-mills"
              className="flex-1 py-3 px-6 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore More Mills</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
