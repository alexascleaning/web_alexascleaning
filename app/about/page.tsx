import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "About Us | Alexas Cleaning Services Philadelphia",
  description: "Learn about the team behind Alexas Cleaning Services. We are a locally owned, top-rated cleaning company in Philadelphia.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">About Us</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Dedicated to bringing sparkle and peace of mind to Philadelphia homes and businesses for **more than 25 years**.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-team.png"
                alt="Alexas Cleaning Services Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
           
           <div className="space-y-6">
             <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                Alexas Cleaning Services started with a simple mission: to provide the most reliable and detailed cleaning service in Philadelphia. With **over 25 years of experience**, what began as a small family operation has grown into a full-service cleaning company trusted by hundreds of local residents and business owners.
              </p>
             <p className="text-slate-600 leading-relaxed">
               We believe that a clean space fosters clarity and happiness. That's why we treat every home and office as if it were our own, paying attention to the smallest details that others might miss.
             </p>
             
             <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="text-center p-4 bg-blue-50 rounded-lg">
                 <p className="text-3xl font-bold text-primary">500+</p>
                 <p className="text-sm text-slate-600">Happy Clients</p>
               </div>
               <div className="text-center p-4 bg-teal-50 rounded-lg">
                 <p className="text-3xl font-bold text-teal-600">100%</p>
                 <p className="text-sm text-slate-600">Satisfaction Rate</p>
               </div>
             </div>
           </div>
        </div>
      </section>

       {/* Values Section */}
       <section className="py-16 bg-slate-900 text-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 !text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Reliability", desc: "We show up on time, every time, ready to work." },
              { title: "Integrity", desc: "Honest pricing, thoroughly vetted staff, and transparent communication." },
              { title: "Excellence", desc: "We don't cut corners; we clean them. Perfection is our standard." }
            ].map((value) => (
              <div key={value.title} className="bg-slate-800 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-3 !text-white">{value.title}</h3>
                <p className="!text-slate-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Join Our Family of Happy Customers</h2>
        <Link href="/contact">
           <Button size="lg" className="px-8">Get a Free Quote</Button>
        </Link>
      </section>
    </div>
  );
}
