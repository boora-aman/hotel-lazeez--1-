import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileActionBar } from "@/components/mobile-action-bar"
import { JsonLd, hotelSchema } from "@/lib/schema"
import { site } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hotel Lazeez – Best AC Hotel in Barwala, Hisar | Rooms from ₹800",
    template: "%s | Hotel Lazeez Barwala",
  },
  description:
    "Hotel Lazeez is a fully AC hotel in Barwala, Hisar on Hansi Road. Clean AC rooms at ₹800, ₹1000 & ₹1200, restaurant & party hall. Rated 4.8★ by 150+ guests. Call 91291 91900.",
  applicationName: site.name,
  keywords: [
    "hotel in Barwala",
    "hotel near Barwala",
    "hotel in Barwala Hisar",
    "Barwala hotel",
    "AC rooms in Barwala",
    "budget hotel Barwala",
    "hotel near Hisar",
    "hotel on Hansi Road Barwala",
    "Lazeez Hotel",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Hotel Lazeez – AC Hotel in Barwala, Hisar | Rooms ₹800–₹1200",
    description: "Fully AC rooms on Hansi Road, Barwala. 4.8★ from 150+ guests. Call or WhatsApp 91291 91900.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Lazeez Hotel Barwala – fully AC rooms" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  formatDetection: { telephone: true },
  other: { "geo.region": "IN-HR", "geo.placename": "Barwala, Hisar" },
}

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-800 pb-16 md:pb-0">
        <JsonLd data={hotelSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  )
}
