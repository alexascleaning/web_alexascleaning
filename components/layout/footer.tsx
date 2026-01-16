import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS, SOCIAL_LINKS } from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-12 w-12">
                <Image 
                  src="/logo.png" 
                  alt="Alexas Cleaning Services Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Alexas Cleaning</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional, reliable, and thorough cleaning services for homes and businesses in Philadelphia. Satisfaction guaranteed.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-sm hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/areas-we-serve" className="text-sm hover:text-primary transition-colors">Areas Served</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary transition-colors">Cleaning Tips</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-sm hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 bg-slate-950" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="container text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Alexas Cleaning Services. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-xs text-slate-600 italic">
              Designed for Excellence.
            </p>
            <div className="text-[10px] text-slate-700 uppercase tracking-widest md:border-l md:border-slate-800 md:pl-6">
              Developed by{" "}
              <a 
                href="https://tecnonets.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors font-bold text-slate-600"
              >
                Tecnonets
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
