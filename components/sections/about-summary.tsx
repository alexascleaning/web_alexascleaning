import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AboutSummary() {
  const benefits = [
    "Experienced & Vetted Staff",
    "Eco-Friendly Cleaning Products",
    "Flexible Scheduling",
    "100% Satisfaction Guarantee",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-semibold text-primary">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
              Your Trusted Cleaning Partner in Philadelphia
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Alexas Cleaning Services, we understand that a clean environment is essential for peace of mind and productivity. We are proud to serve the community with more than 25 years of experience providing top-tier cleaning solutions for homes and businesses across Philadelphia.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
          </div>
          
          {/* Optimized Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl bg-slate-100 group">
             <Image
               src="/images/about-team.png"
               alt="Our Professional Cleaning Team in Action"
               fill
               className="object-cover transition-transform duration-500 group-hover:scale-105"
               sizes="(max-width: 768px) 100vw, 50vw"
             />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px] z-10">
                 <p className="text-3xl font-bold text-primary">25+</p>
                 <p className="text-sm font-medium text-slate-600">Years of Experience in Philadelphia</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
