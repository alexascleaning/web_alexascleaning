import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote | Alexas Cleaning Services",
  description: "Contact Alexas Cleaning Services in Philadelphia for a free quote. Call us or fill out our online form for residential and commercial cleaning.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available Now in Philadelphia
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Let's Make Your Space <br />
            <span className="text-primary">Shine Again</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether it's your home or office, we're here to help. Reach out for a free consultation and customized estimate tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="container px-4 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <a href={`mailto:${EMAIL_ADDRESS}`} className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="bg-primary/10 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg md:text-xl font-bold text-slate-900 break-all">{EMAIL_ADDRESS}</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl overflow-hidden relative">
              <div className="absolute bottom-0 right-0 opacity-10 translate-x-8 translate-y-8">
                <MapPin className="h-40 w-40" />
              </div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Our Location
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {ADDRESS}
              </p>
              
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Monday - Friday</span>
                  <span className="font-bold uppercase tracking-tight text-primary">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Saturday & Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -z-10 blur-2xl" />
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* Modern Integrated Map */}
      <section className="bg-slate-50 py-20">
        <div className="container px-4">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Where We Serve</h2>
            <p className="text-slate-600 max-w-xl">
              We provide professional cleaning services across Philadelphia and surrounding neighborhoods. Check our map to see if you're in our primary service area.
            </p>
          </div>
          <div className="h-[500px] w-full bg-white rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
             <iframe 
               src="https://maps.google.com/maps?q=Philadelphia%2C+PA&t=&z=13&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               title="Alexas Cleaning Services Location"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
