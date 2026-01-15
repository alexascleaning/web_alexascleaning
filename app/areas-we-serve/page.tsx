import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas We Serve | Cleaning Services Philadelphia, PA & NJ",
  description: "Alexas Cleaning Services proudly serves Philadelphia, PA suburbs, and New Jersey. Check if we cover your neighborhood!",
};

// Categorized for better UX
const PHILLY_NEIGHBORHOODS = [
  "Center City, PA",
  "University City, PA",
  "Manayunk, PA",
  "Roxborough, PA",
  "Chestnut Hill, PA",
  "Philadelphia, PA"
];

const PA_SUBURBS = [
  "Narberth, PA",
  "Havertown, PA",
  "Wynnewood, PA",
  "King of Prussia, PA",
  "Berwyn, PA",
  "Paoli, PA",
  "Jenkintown, PA",
  "Bala Cynwyd, PA",
  "Upper Darby, PA",
  "Yeadon, PA"
];

const NJ_AREAS = [
  "Haddon Heights, NJ",
  "Haddonfield, NJ",
  "Barrington, NJ",
  "Audubon, NJ",
  "Cherry Hill, NJ",
  "Collingswood, NJ"
];

const ALL_AREAS = [...PHILLY_NEIGHBORHOODS, ...PA_SUBURBS, ...NJ_AREAS];

export default function AreasPage() {
  return (
    <div className="flex flex-col">
       <section className="bg-slate-50 py-12 md:py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Areas We Serve</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We bring professional cleaning services to homes and businesses across Philadelphia, the Main Line, and New Jersey.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Service Zones</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our team is constantly on the move. Below is a comprehensive list of the areas we currently cover. If you don't see your specific location but are nearby, please reach out!
            </p>
            
            <div className="space-y-6">
              {/* Philadelphia */}
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Philadelphia
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                  {PHILLY_NEIGHBORHOODS.map(area => (
                    <li key={area} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

               {/* PA Suburbs */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-slate-500" />
                  Main Line & PA Communities
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                   {PA_SUBURBS.map(area => (
                    <li key={area} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* New Jersey */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  New Jersey
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                   {NJ_AREAS.map(area => (
                    <li key={area} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            

          </div>
          
          <div className="h-full min-h-[500px] w-full bg-slate-200 rounded-xl overflow-hidden relative shadow-lg sticky top-24">
             <iframe 
                src="https://maps.google.com/maps?q=Philadelphia%2C+PA&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }} 
                allowFullScreen 
                loading="lazy" 
                title="Service Areas Map"
              ></iframe>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white text-center">
         <div className="container px-4">
           <h2 className="text-3xl font-bold mb-4">Live in our service area?</h2>
           <Link href="/contact">
             <Button size="lg" variant="secondary" className="mt-4 shadow-xl">Get Your Quote</Button>
           </Link>
         </div>
      </section>
    </div>
  );
}
