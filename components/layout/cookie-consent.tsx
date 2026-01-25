"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/80 backdrop-blur-lg border-t border-slate-200 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-slate-600 leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic, and serve personalized ads via Google AdSense. 
            By continuing to browse, you agree to our use of cookies. 
            Read our <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">Privacy Policy</Link> for more details.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button 
            onClick={acceptConsent} 
            className="w-full md:w-auto px-8 py-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all"
          >
            Accept & Continue
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
