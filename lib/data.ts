import { Home, Building2, Sparkles, Truck, ShieldCheck, RefreshCw } from "lucide-react";

export const SERVICES_DATA = [
  {
    id: "recurring-cleaning",
    title: "Recurring Cleaning",
    slug: "recurring-cleaning",
    icon: RefreshCw,
    shortDescription: "Scheduled upkeep to maintain your home's sparkle.",
    fullDescription: "Consistent cleaning is the secret to a stress-free life. Our recurring cleaning services are tailored to your preferred frequency - weekly, bi-weekly, or monthly - ensuring your space stays pristine without you lifting a finger.",
    features: ["Customized Cleaning Schedule", "Same Trusted Team Every Time", "Priority Scheduling", "Fixed, Affordable Rates"],
    image: "/images/service-recurring.png"
  },
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    icon: Home,
    shortDescription: "Customized home cleaning plans for your lifestyle.",
    fullDescription: "Our residential cleaning services are designed to keep your home sparkling clean and healthy. We offer weekly, bi-weekly, and monthly flexible schedules.",
    features: ["Dusting & Polishing", "Vacuuming & Mopping", "Kitchen & Bathroom Sanitization", "Bed Making & Linen Change"],
    image: "/images/service-residential.png"
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    icon: Building2,
    shortDescription: "Professional cleaning for offices and retail spaces.",
    fullDescription: "A clean office boosts productivity and leaves a great impression on clients. We provide reliable commercial cleaning tailored to your business hours.",
    features: ["Office Desk Cleaning", "Restroom Sanitization", "Trash Removal", "Floor Care & Maintenance"],
    image: "/images/service-commercial.png"
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    icon: Sparkles,
    shortDescription: "Intensive cleaning for hard-to-reach areas.",
    fullDescription: "Our deep cleaning service goes beyond the surface to remove hidden dirt, grime, and allergens. Perfect for spring cleaning or seasonal refreshes.",
    features: ["Behind Appliances", "Baseboards & Door Frames", "Interior Window Cleaning", "Cabinet Organization"],
    image: "/images/service-deep.png"
  },
  {
    id: "move-in-out-cleaning",
    title: "Move-In / Move-Out",
    slug: "move-in-out-cleaning",
    icon: Truck,
    shortDescription: "Stress-free cleaning for your move.",
    fullDescription: "Moving is stressful enough. Let us handle the cleaning. We ensure the property is spotless for the next tenant or ready for you to move in.",
    features: ["Empty House Cleaning", "Inside Cabinets & Drawers", "Appliance Deep Clean", "Deposit Back Guarantee focus"],
    image: "/images/service-moving.png"
  },
  {
    id: "post-construction",
    title: "Post-Construction",
    slug: "post-construction",
    icon: ShieldCheck,
    shortDescription: "Removing dust and debris after renovation.",
    fullDescription: "Construction leaves a mess. Our specialized team removes fine dust, sticker residue, and debris to make your renovated space livable.",
    features: ["Fine Dust Removal", "Sticker & Paint Removal", "Floor Polishing", "Safety Cleanup"],
    image: "/images/service-commercial.png" // Using commercial as placeholder for construction
  },
];
