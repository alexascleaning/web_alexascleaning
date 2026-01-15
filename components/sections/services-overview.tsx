import Link from "next/link";
import { Sparkles, Building2, Home, Truck, BoxSelect } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services customized to your needs. From dusting to deep scrubbing, we do it all.",
    href: "/services/residential-cleaning",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Keep your office or diverse commercial space pristine and professional with our reliable janitorial services.",
    href: "/services/commercial-cleaning",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A thorough top-to-bottom clean for spring cleaning or when your space needs extra attention.",
    href: "/services/deep-cleaning",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Truck, // Changed from Move which might not be in all lucide versions, used Truck for Move-in/out
    title: "Move-In / Move-Out",
    description: "Ensure you get your deposit back or move into a fresh home with our specialized moving cleaning package.",
    href: "/services/move-in-out-cleaning",
    color: "bg-orange-100 text-orange-600",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-primary">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
            Professional Solutions for Every Space
          </h2>
          <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a wide range of cleaning services tailored to meet the unique needs of residential and commercial clients in Philadelphia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.title} className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mb-4 text-slate-600 text-sm">{service.description}</p>
              <Link href={service.href} className="text-sm font-semibold text-primary group-hover:underline inline-flex items-center" aria-label={`Learn more about ${service.title}`}>
                Learn More 
                <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
