import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — Local Snow Shoveling in St. Clair County, MI`,
  description:
    "Reliable driveway & walkway clearing, salting, and seasonal coverage in Port Huron, Kimball, Fort Gratiot, Marysville, and St. Clair.",
  keywords: [
    "snow removal",
    "snow shoveling",
    "Port Huron",
    "St. Clair County",
    "Michigan",
    "driveway clearing",
    "salting",
    "ice control",
    "seasonal contracts",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Local Snow Shoveling in St. Clair County, MI`,
    description:
      "Reliable driveway & walkway clearing, salting, and seasonal coverage in Port Huron, Kimball, Fort Gratiot, Marysville, and St. Clair.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Local Snow Shoveling in St. Clair County, MI`,
    description:
      "Reliable driveway & walkway clearing, salting, and seasonal coverage in Port Huron, Kimball, Fort Gratiot, Marysville, and St. Clair.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Huron",
      addressRegion: "MI",
      addressCountry: "US",
    },
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    ...(siteConfig.social.facebook && {
      sameAs: [siteConfig.social.facebook],
    }),
  };

  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

