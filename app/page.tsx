import { Hero } from "@/components/sections/hero";
import { AboutSummary } from "@/components/sections/about-summary";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSummary />
      <ServicesOverview />
      <FAQ />
      <Testimonials />
      <CTA />
    </div>
  );
}
