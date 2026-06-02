"use client";

import { Phone, Mail, Building, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_1.webp')] bg-cover bg-center animate-pulse-slow" />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
        
        {/* Banner Text Content */}
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-brand-tertiary text-slate-900 font-black text-xs sm:text-sm px-5 py-2.5 uppercase tracking-widest shadow-md">
              Contact &amp; Inquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Connect With Our Milling Experts
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Have questions about plant layouts, pricing, upgrading legacy systems, or custom emery stones? Our engineering team is here to help. Reach out directly or submit the inquiry form.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Side: Contact details & Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
                Locations & Details
              </span>
              <h2 className="text-3xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                RS Choyal &amp; Co. (Pvt) Ltd.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our design and engineering teams operate from our heavy industrial works facilities at Ajmer, India. 
                Get in touch for customized layouts, structural designs, and installation planning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-slate-200/60">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">Call/WhatsApp</h4>
                  <a href="tel:+919240289259" className="text-brand-primary font-bold hover:text-brand-primary-hover transition-colors block text-sm">
                    +91 92402 89259
                  </a>
                  <span className="text-xs text-slate-400">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">General Support Email</h4>
                  <a href="mailto:info@rschoyalgroup.com" className="text-slate-600 font-semibold hover:text-slate-900 transition-colors block text-sm">
                    info@rschoyalgroup.com
                  </a>
                  <span className="text-xs text-slate-400">Response within 24 hours</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">Corporate Headquarters</h4>
                  <span className="text-xs sm:text-sm text-slate-600 block leading-relaxed">
                    Choyal Tower, 1180/28, Shalimar Colony, Adarsh Nagar, Ajmer – 305 008, Rajasthan, India
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Building className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">Palra Manufacturing Unit</h4>
                  <span className="text-xs sm:text-sm text-slate-600 block leading-relaxed">
                    Plot No. 11-12, RIICO Industrial Area, Palra, Ajmer – 305025, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Map Box */}
            <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-slate-200/80 shadow-xs relative">
              <iframe
                title="RS Choyal Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.247164993874!2d74.606277!3d26.447547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be71e16f39cd5%3A0xe5a3c9b7de283995!2sR%20S%20Choyal%20%26%20Co%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Consultation Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <LeadForm />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
