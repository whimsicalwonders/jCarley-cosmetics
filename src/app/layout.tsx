import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Modern, clean font for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Elegant serif font for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "jCarley Cosmetics - Premium Beauty Products",
  description: "Discover your true beauty with jCarley Cosmetics. Premium, inclusive cosmetics crafted with love and expertise. Cruelty-free, high-quality products for every skin tone.",
  keywords: ["cosmetics", "beauty", "makeup", "cruelty-free", "premium", "inclusive beauty"],
  authors: [{ name: "jCarley Cosmetics" }],
  creator: "jCarley Cosmetics",
  publisher: "jCarley Cosmetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jcarley-cosmetics.com"),
  openGraph: {
    title: "jCarley Cosmetics - Premium Beauty Products",
    description: "Discover your true beauty with jCarley Cosmetics. Premium, inclusive cosmetics crafted with love and expertise.",
    url: "https://jcarley-cosmetics.com",
    siteName: "jCarley Cosmetics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "jCarley Cosmetics - Premium Beauty Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jCarley Cosmetics - Premium Beauty Products",
    description: "Discover your true beauty with jCarley Cosmetics. Premium, inclusive cosmetics crafted with love and expertise.",
    images: ["/twitter-image.jpg"],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
