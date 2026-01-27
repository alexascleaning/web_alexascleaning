export const SITE_NAME = "Alexas Cleaning Services";
export const SITE_URL = "https://www.cleaningservicesalexas.com";
export const SITE_DESCRIPTION =
  "Top-rated professional cleaning services in Philadelphia. We offer expert residential cleaning, commercial janitorial services, and deep cleaning for homes and offices across Philly. 100% satisfaction guaranteed.";
export const PHONE_NUMBER = "(555) 123-4567";
export const EMAIL_ADDRESS = "cleaningservicesalexas@gmail.com";
export const ADDRESS = "Philadelphia, PA, United States";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/alexascleaningservices",
  instagram: "https://www.instagram.com/alexascleaningservices/",
};

export const DEFAULT_METADATA = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  title: {
    default: `${SITE_NAME} | #1 House & Office Cleaning in Philadelphia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "cleaning services Philadelphia",
    "house cleaning Philly",
    "commercial cleaning Philadelphia",
    "maid service Philadelphia",
    "deep cleaning services",
    "office cleaning Philly",
    "residential cleaning PA",
    "Alexas Cleaning Services",
    "post-construction cleaning Philadelphia",
    "move-in move-out cleaning Philly",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Professional Cleaning in Philadelphia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Professional Cleaning Philadelphia`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  } as const,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};
