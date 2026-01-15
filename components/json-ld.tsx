import { SITE_NAME, SITE_URL, PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS, SITE_DESCRIPTION, SOCIAL_LINKS } from "@/lib/seo";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": SITE_NAME,
    "image": `${SITE_URL}/og-image.jpg`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": PHONE_NUMBER,
    "email": EMAIL_ADDRESS,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Philadelphia City Center", // Using a general central point as address is placeholder
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "postalCode": "19107",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.952583,
      "longitude": -75.165222
    },
    "areaServed": [
      // Philadelphia
      { "@type": "City", "name": "Philadelphia" },
      { "@type": "Neighborhood", "name": "Center City" },
      { "@type": "Neighborhood", "name": "University City" },
      { "@type": "Neighborhood", "name": "Manayunk" },
      { "@type": "Neighborhood", "name": "Roxborough" },
      { "@type": "Neighborhood", "name": "Chestnut Hill" },
      { "@type": "Neighborhood", "name": "Old City" },
      { "@type": "Neighborhood", "name": "Fishtown" },
      // PA Suburbs
      { "@type": "City", "name": "Narberth" },
      { "@type": "City", "name": "Havertown" },
      { "@type": "City", "name": "Wynnewood" },
      { "@type": "City", "name": "King of Prussia" },
      { "@type": "City", "name": "Berwyn" },
      { "@type": "City", "name": "Paoli" },
      { "@type": "City", "name": "Jenkintown" },
      { "@type": "City", "name": "Bala Cynwyd" },
      { "@type": "City", "name": "Upper Darby" },
      { "@type": "City", "name": "Yeadon" },
      // New Jersey
      { "@type": "City", "name": "Haddon Heights", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
      { "@type": "City", "name": "Haddonfield", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
      { "@type": "City", "name": "Barrington", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
      { "@type": "City", "name": "Audubon", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
      { "@type": "City", "name": "Cherry Hill", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } },
      { "@type": "City", "name": "Collingswood", "address": { "@type": "PostalAddress", "addressRegion": "NJ" } }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "17:00"
      }
    ],
    "description": SITE_DESCRIPTION,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move-In / Move-Out Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleaning"
          }
        }
      ]
    },
    "sameAs": [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
