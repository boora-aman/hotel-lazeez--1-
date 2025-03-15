import type React from "react"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import "./globals.css"

export const metadata = {
  title: "Hotel Lazeez - Best Hotel in Barwala | Luxury AC Rooms & Accommodation",
  description:
    "Experience luxury at Hotel Lazeez, the top-rated hotel in Barwala offering premium AC rooms, exceptional service, and modern amenities. Perfect for business and leisure travelers in Barwala, Haryana.",
  keywords:
    "hotel in Barwala, best hotel in Barwala, AC rooms in Barwala, Barwala accommodation, luxury hotel Barwala, Barwala Haryana hotel, hotel near Hansi Road",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Lazeez",
              description:
                "Experience luxury at Hotel Lazeez, the top-rated hotel in Barwala offering premium AC rooms, exceptional service, and modern amenities.",
              url: "https://lazeezhotel.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 202-203, Taj Market, Hansi - Barwala Rd, near Bajaj Finance",
                addressLocality: "Barwala",
                addressRegion: "Haryana",
                postalCode: "125121",
                addressCountry: "IN",
              },
              telephone: "091291 91900",
              email: "info@lazeezhotel.com",
              priceRange: "₹₹₹",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
                { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
                { "@type": "LocationFeatureSpecification", name: "Room service" },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Navbar */}
          <Navbar />

          <main>{children}</main>

          {/* Footer */}
          <footer className="bg-primary text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6 font-serif">Hotel Lazeez</h3>
                  <p className="text-white/70 mb-6">
                    Experience modern luxury at the best hotel in Barwala, Haryana. Perfect for business and leisure
                    travelers.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-white/70 hover:text-white transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/rooms" className="text-white/70 hover:text-white transition-colors">
                        Rooms & Suites
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/booking" className="text-white/70 hover:text-white transition-colors">
                        Book Now
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                      <span className="text-white/70">
                        Shop 202-203, Taj Market, Hansi - Barwala Rd, near Bajaj Finance, Barwala, Haryana 125121
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <span className="text-white/70">091291 91900</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-secondary" />
                      <span className="text-white/70">info@lazeezhotel.com</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                  <p className="text-white/70 mb-4">
                    Subscribe for exclusive deals and updates about the best hotel in Barwala.
                  </p>
                  <form className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                    />
                    <button
                      type="submit"
                      className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
                <p>© {new Date().getFullYear()} Hotel Lazeez - Best Hotel in Barwala. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'