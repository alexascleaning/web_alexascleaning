import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50 overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Professional Cleaning Services in Philadelphia"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/90"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            #1 Rated Cleaning Service in Philadelphia
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-3xl text-slate-900 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Professional Cleaning Services in <span className="text-primary">Philadelphia</span> - Sparkling Results Guaranteed
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
             We deliver immaculate homes and offices with our reliable, detail-oriented cleaning team. Ready to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 min-w-[200px] animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur">
                View Services
              </Button>
            </Link>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-6 text-slate-500 text-sm animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
             <div className="flex items-center gap-1">
               <div className="flex text-yellow-500">
                 <Star className="h-4 w-4 fill-current" />
                 <Star className="h-4 w-4 fill-current" />
                 <Star className="h-4 w-4 fill-current" />
                 <Star className="h-4 w-4 fill-current" />
                 <Star className="h-4 w-4 fill-current" />
               </div>
               <span className="font-semibold">5.0</span> (120+ Reviews)
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
