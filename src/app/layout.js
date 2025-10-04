import "./globals.css";

export const metadata = {
  title: "The Snow Guy | Family-Owned Snow Removal in St. Clair County, MI",
  description: "Family-owned snow removal serving Kimball, Port Huron, Marysville & nearby. Driveways, walkways, commercial lots. Fast quotes. Licensed & insured.",
  keywords: "snow removal St. Clair County, snow shoveling Kimball MI, walkway snow removal Port Huron, commercial snow removal near me",
  openGraph: {
    title: "The Snow Guy | Family-Owned Snow Removal in St. Clair County, MI",
    description: "Family-owned snow removal serving Kimball, Port Huron, Marysville & nearby. Driveways, walkways, commercial lots. Fast quotes. Licensed & insured.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Snow Guy | Family-Owned Snow Removal in St. Clair County, MI",
    description: "Family-owned snow removal serving Kimball, Port Huron, Marysville & nearby. Driveways, walkways, commercial lots. Fast quotes. Licensed & insured.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Snow Guy",
  "description": "Family-owned snow removal service serving St. Clair County, Michigan",
  "url": "https://thesnowguy.com",
  "telephone": "(810) 555-0123",
  "email": "hello@thesnowguy.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "St. Clair County",
    "addressRegion": "MI",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.8",
    "longitude": "-82.5"
  },
  "areaServed": [
    "Kimball, MI",
    "Port Huron, MI", 
    "Marysville, MI",
    "Fort Gratiot, MI",
    "St. Clair, MI",
    "Clyde, MI",
    "Columbus, MI"
  ],
  "serviceType": "Snow Removal Service",
  "priceRange": "$25-$399",
  "openingHours": "Mo-Su 07:00-19:00",
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Snow Removal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Snow Removal",
          "description": "Driveway and walkway snow removal for homes"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Snow Removal",
          "description": "Parking lot and storefront snow removal for businesses"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "15"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amanda"
      },
      "reviewBody": "They showed up before I finished my coffee. Professional, fast, and didn't miss a spot.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Person",
        "name": "Mike"
      },
      "reviewBody": "Finally, a snow service that actually shows up when they say they will. Worth every penny.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you handle commercial jobs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yep. Lots, storefronts, HOAs—ask about our storm priority routes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you clear walkways and steps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. That's kind of our thing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer salting/ice melt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On request. We use pet- and concrete-considerate options."
      }
    },
    {
      "@type": "Question",
      "name": "What if it keeps snowing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We return during active events per plan or per-visit terms."
      }
    },
    {
      "@type": "Question",
      "name": "Are you insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Licensed & insured. Happy to send COI."
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" href="/fonts/system-ui.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-white text-body-text antialiased selection:bg-winter-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
