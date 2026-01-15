import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Alexas Cleaning Services Philadelphia`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
       {/* Hero for Service */}
       <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
         <Image
           src={service.image}
           alt={service.title}
           fill
           priority
           className="object-cover"
           sizes="100vw"
         />
         <div className="absolute inset-0 bg-black/50 z-10"></div>
         <div className="relative z-20 container px-4 text-center text-white">
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{service.title}</h1>
           <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">{service.shortDescription}</p>
         </div>
       </div>

       <div className="container px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
         {/* Main Content */}
         <div className="lg:col-span-2 space-y-8">
           <h2 className="text-3xl font-bold text-slate-900">About This Service</h2>
           <p className="text-lg text-slate-600 leading-relaxed">
             {service.fullDescription}
             <br /><br />
             At Alexas Cleaning Services, we pride ourselves on using high-quality products and proven techniques to ensure your space looks its best. Whether you need a one-time clean or recurring service, our {service.title.toLowerCase()} is the perfect solution.
           </p>

           <h3 className="text-2xl font-bold text-slate-900 pt-4">What's Included?</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {service.features.map((feature) => (
               <div key={feature} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                 <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                 <span className="font-medium text-slate-800">{feature}</span>
               </div>
             ))}
             <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                 <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                 <span className="font-medium text-slate-800">Trusted Professional Staff</span>
               </div>
               <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                 <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                 <span className="font-medium text-slate-800">100% Satisfaction Guarantee</span>
               </div>
           </div>
         </div>

         {/* Sidebar */}
         <div className="space-y-8">
           <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
             <h3 className="text-xl font-bold text-slate-900 mb-4">Book This Service</h3>
             <p className="text-slate-600 mb-6 text-sm">
               Ready to get started? Contact us today for a personalized quote.
             </p>
             <div className="space-y-4">
               <Link href="/contact" className="w-full">
                 <Button className="w-full text-lg py-8 shadow-lg hover:scale-[1.02] transition-transform active:scale-95">Get Your Free Quote Now</Button>
               </Link>
             </div>
           </div>
           
           <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
             <h3 className="text-xl font-bold text-primary mb-2">Why Choose Us?</h3>
             <ul className="space-y-2 text-sm text-slate-700">

               <li>• Background Checked Staff</li>
               <li>• Eco-Friendly Options</li>
               <li>• 5-Star Rated Service</li>
             </ul>
           </div>
         </div>
       </div>
    </div>
  );
}
