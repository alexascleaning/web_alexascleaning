import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Ready for a Spotless Space?
        </h2>
        <p className="mx-auto max-w-[700px] text-blue-100 text-lg md:text-xl mb-8">
          Get a free, no-obligation quote today. Our team is ready to make your home or office shine.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-12 py-8 font-extrabold text-[#0284c7] bg-white hover:bg-blue-50 shadow-2xl transition-all hover:scale-105 active:scale-95">
              Get Your Free Quote Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
