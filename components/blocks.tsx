import Image from "next/image"
import Link from "next/link"
import { Check, MapPin, MessageCircle, Navigation, Phone, Star } from "lucide-react"
import { site, rooms, faqs as defaultFaqs, type Room } from "@/lib/site"

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold tracking-wider text-amber-700 uppercase mb-3">
      {children}
    </span>
  )
}

export function PageHeader({
  title,
  intro,
  crumbs,
}: {
  title: string
  intro: string
  crumbs: { name: string; path?: string }[]
}) {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-4">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.name}>
              {" / "}
              {c.path ? (
                <Link href={c.path} className="hover:text-white">
                  {c.name}
                </Link>
              ) : (
                <span className="text-white">{c.name}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 max-w-3xl">{title}</h1>
        <p className="text-white/80 text-lg max-w-2xl">{intro}</p>
      </div>
    </section>
  )
}

export function RatingBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-sm ${dark ? "text-white" : "text-slate-700"}`}>
      <span className="flex" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
        ))}
      </span>
      <strong>{site.rating.value}/5</strong>
      <span className={dark ? "text-white/75" : "text-slate-500"}>from {site.rating.count}+ guest reviews</span>
    </div>
  )
}

export function RoomCard({ room, headingLevel = "h3" }: { room: Room; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel
  return (
    <article id={room.slug} className="scroll-mt-24 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={room.image}
          alt={`${room.name} at Hotel Lazeez Barwala – ₹${room.price} AC room`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
          Fully AC
        </span>
        {room.almirah && (
          <span className="absolute right-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-slate-900">
            Almirah included
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <H className="text-xl font-bold text-primary">
            <Link href={`/rooms/${room.slug}`} className="hover:underline">
              {room.name}
            </Link>
          </H>
          <p className="whitespace-nowrap text-2xl font-bold text-primary">
            ₹{room.price.toLocaleString("en-IN")}
            <span className="text-sm font-normal text-slate-500">/night</span>
          </p>
        </div>
        <p className="text-sm font-medium text-amber-700 mb-3">{room.tagline}</p>
        <p className="text-slate-600 text-sm mb-4">{room.description}</p>
        <p className="text-xs text-slate-500 mb-3">
          Size: <strong className="text-slate-700">{room.size}</strong> · {room.floor} · Up to {room.maxGuests} guests
        </p>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-6 text-sm text-slate-700">
          {room.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto grid grid-cols-2 gap-3">
          <Link
            href={`/booking?room=${room.slug}`}
            className="rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90"
          >
            Book Now
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border border-slate-300 py-2.5 text-center text-sm font-semibold text-primary hover:bg-slate-50"
          >
            Call to Book
          </a>
        </div>
      </div>
    </article>
  )
}

export function PriceTable() {
  return (
    <div className="max-w-full overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Hotel Lazeez Barwala room prices</caption>
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="p-4 font-semibold">Room type</th>
            <th className="p-4 font-semibold">Price / night</th>
            <th className="p-4 font-semibold">AC</th>
            <th className="p-4 font-semibold">Almirah</th>
            <th className="p-4 font-semibold">Size</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((r) => (
            <tr key={r.slug} className="border-t border-slate-200">
              <td className="p-4 font-medium text-primary">
                <Link href={`/rooms/${r.slug}`} className="hover:underline">
                  {r.name}
                </Link>
              </td>
              <td className="p-4 font-bold">₹{r.price.toLocaleString("en-IN")}</td>
              <td className="p-4">Yes</td>
              <td className="p-4">{r.almirah ? "Yes" : "No"}</td>
              <td className="p-4">{r.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function FaqList({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary">
            <h3 className="text-base">{f.q}</h3>
            <span className="text-xl text-slate-400 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function MapCard() {
  if (site.mapsEmbedUrl) {
    return (
      <div className="relative h-[320px] md:h-[440px] overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src={site.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hotel Lazeez location on Hansi Road, Barwala"
        />
      </div>
    )
  }
  return (
    <div className="flex h-full min-h-[320px] flex-col justify-center rounded-2xl bg-slate-100 p-8 text-center">
      <MapPin className="mx-auto h-10 w-10 text-secondary mb-4" />
      <p className="font-semibold text-primary mb-1">Hotel Lazeez, Hansi Road, Barwala</p>
      <p className="text-sm text-slate-600 mb-6">Near Bajaj Finance, Taj Colony · Hisar, Haryana 125121</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={site.directionsHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Navigation className="h-4 w-4" /> Open in Google Maps
        </a>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" /> Call for directions
        </a>
      </div>
    </div>
  )
}

export function CtaBand({ title = "Need an AC room in Barwala tonight?" }: { title?: string }) {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-14 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        <p className="text-white/80 mb-8">
          Rooms from ₹800. Call or WhatsApp {site.phone} for instant confirmation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3 font-semibold text-slate-900"
          >
            <Phone className="h-5 w-5" /> Call {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-8 py-3 font-semibold hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  )
}
