import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, Sparkles, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/404-bg.png"
          alt="Spotless empty room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Card - Glassmorphism */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl text-white">
          
          <div className="space-y-2 mb-6">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-sm">
              404
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            We scrubbed this spot a little <span className="text-yellow-400 italic">too</span> hard.
          </h2>
          
          <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-lg mx-auto">
            The page you're looking for seems to have been cleaned away or moved to a new location. Don't worry, the rest of our site is spotless!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold border-none">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/40 hover:border-white">
                <Sparkles className="mr-2 h-4 w-4" />
                View Services
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full text-slate-200 hover:text-white hover:bg-white/10">
                <MapPin className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Brand/Footer specific to 404 */}
        <p className="text-slate-400 text-sm font-medium">
          Alexa's Cleaning Services • Philadelphia
        </p>
      </div>
    </div>
  );
}
