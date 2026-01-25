"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShieldCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMAIL_ADDRESS } from "@/lib/seo";
import { cn } from "@/lib/utils";
import * as gtag from "@/lib/gtag";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Areas Served", href: "/areas-we-serve" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/90 backdrop-blur-md shadow-sm transition-all">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-12 w-12 mr-2">
            <Image 
              src="/logo.png" 
              alt="Alexas Cleaning Services Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-slate-900">Alexas</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Cleaning Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" onClick={() => gtag.event({ action: "cta_click", category: "Navigation", label: "Header - Get a Quote" })}>
            <Button className="px-6">Get a Free Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden items-center justify-center p-2 text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b shadow-lg md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link 
                href="/contact" 
                onClick={() => {
                  setIsOpen(false);
                  gtag.event({ action: "cta_click", category: "Navigation", label: "Mobile Header - Get a Quote" });
                }}
              >
                <Button className="w-full h-12 text-lg">Get a Free Quote</Button>
              </Link>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-center text-sm font-bold text-primary py-2">
                {EMAIL_ADDRESS}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
