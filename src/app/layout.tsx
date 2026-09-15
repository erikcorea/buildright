import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { business } from "@/data/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.buildrightconstructionllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Chicago General Contractor & Remodeling`,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  keywords: [
    "general contractor Chicago",
    "kitchen remodeling Chicago",
    "bathroom remodeling Chicago",
    "basement finishing Chicago",
    "deck and fence builder Chicago",
    "home renovation Chicago suburbs",
  ],
  openGraph: {
    title: `${business.name} | Chicago General Contractor & Remodeling`,
    description: business.shortDescription,
    url: siteUrl,
    siteName: business.name,
    locale: "en_US",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  description: business.shortDescription,
  telephone: business.phone,
  email: business.email,
  areaServed: business.serviceAreaPrimary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-[15px] text-brand-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
