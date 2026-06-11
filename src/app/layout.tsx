import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "TerraVista | Global Luxury Real Estate Platform",
  description: "Find extraordinary properties across the globe. Explore waterfront villas, penthouses, smart homes, private islands, and luxury real estate.",
  keywords: "luxury real estate, waterfront villas, penthouses, mansions, private islands, Dubai real estate, London premium properties, New York luxury penthouses",
  authors: [{ name: "TerraVista Intl" }],
  openGraph: {
    title: "TerraVista | Global Luxury Real Estate Platform",
    description: "Explore luxury homes, investment opportunities, and premium real estate worldwide.",
    type: "website",
  },
};

import AiAssistant from "@/components/chat/AiAssistant";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${playfair.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-primary flex flex-col font-inter selection:bg-gold selection:text-white">
        {children}
        <AiAssistant />
      </body>
    </html>
  );
}
