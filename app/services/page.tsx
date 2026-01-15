import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/sections/testimonials";
import { SERVICES_DATA } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Residential & Commercial Cleaning Philadelphia",
  description: "Explore our professional cleaning services including house cleaning, office cleaning, deep cleaning, and move-in/move-out services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
       <section className="bg-slate-50 py-12 md:py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES_DATA.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md relative group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg text-primary mb-2">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600">{service.fullDescription}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-2">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center text-slate-700 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="gap-2">
                        View Service Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-16 bg-primary text-white text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-4">Unsure what you need?</h2>
          <p className="mb-8 max-w-xl mx-auto text-blue-100">Contact our team for a free consultation and we'll recommend the perfect cleaning package for your space.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-bold">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
