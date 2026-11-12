import Link from "next/link"
import { Mail, MapPin, Phone, Star } from "lucide-react"
import { site, rooms } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-bold mb-3">Hotel Lazeez</p>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Fully air-conditioned hotel in Barwala, district Hisar, Haryana. Clean rooms, fair prices and a friendly
            team on Hansi Road.
          </p>
          <p className="flex items-center gap-1 text-sm text-secondary">
            <Star className="h-4 w-4 fill-secondary" /> {site.rating.value} / 5 · {site.rating.count}+ guest reviews
          </p>
        </div>

        <div>
          <p className="font-semibold mb-4">AC Rooms in Barwala</p>
          <ul className="space-y-2 text-sm">
            {rooms.map((r) => (
              <li key={r.slug}>
                <Link href={`/rooms/${r.slug}`} className="text-white/70 hover:text-white">
                  {r.name} – ₹{r.price.toLocaleString("en-IN")}/night
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {[
              ["/rooms", "Rooms & Prices"],
              ["/restaurant-in-barwala", "Restaurant in Barwala"],
              ["/party-hall-in-barwala", "Party Hall in Barwala"],
              ["/barwala-guide", "Hotels in Barwala – Guide"],
              ["/about", "About Hotel Lazeez"],
              ["/contact", "Contact & Directions"],
              ["/booking", "Book a Room"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/70 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic text-sm space-y-3">
          <p className="font-semibold mb-4">Contact</p>
          <p className="flex gap-2 text-white/70">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
            {site.addressLine}
          </p>
          <a href={site.phoneHref} className="flex gap-2 text-white/70 hover:text-white">
            <Phone className="h-4 w-4 mt-0.5 text-secondary" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex gap-2 text-white/70 hover:text-white break-all">
            <Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> {site.email}
          </a>
        </address>
      </div>
      <div className="border-t border-white/15 py-6 text-center text-xs text-white/60 px-4">
        © {new Date().getFullYear()} Hotel Lazeez, Barwala (Hisar). GSTIN {site.gst}. All rooms AC.
      </div>
    </footer>
  )
}
