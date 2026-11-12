import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, MessageCircle, Phone } from "lucide-react"
import { CtaBand, PageHeader, PriceTable, RatingBadge } from "@/components/blocks"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { rooms, site } from "@/lib/site"

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const room = rooms.find((r) => r.slug === slug)
  if (!room) return {}
  return {
    title: { absolute: `${room.name} in Barwala – ₹${room.price}/night | Hotel Lazeez` },
    description: `${room.name} at Hotel Lazeez, Barwala (Hisar): ₹${room.price} per night, fully AC${
      room.almirah ? ", almirah included" : ""
    }, ${room.size.toLowerCase()} size, attached bathroom, TV, Wi-Fi. Call 91291 91900 to book.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: { images: [{ url: room.image }] },
  }
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const room = rooms.find((r) => r.slug === slug)
  if (!room) notFound()
  const others = rooms.filter((r) => r.slug !== room.slug)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: `${room.name} – Hotel Lazeez Barwala`,
    description: room.description,
    image: `${site.url}${room.image}`,
    occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests },
    amenityFeature: room.features.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    containedInPlace: { "@id": `${site.url}/#hotel` },
    offers: {
      "@type": "Offer",
      price: room.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/rooms/${room.slug}`,
    },
  }

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Rooms & Prices", path: "/rooms" },
          { name: room.name, path: `/rooms/${room.slug}` },
        ])}
      />
      <PageHeader
        title={`${room.name} in Barwala – ₹${room.price.toLocaleString("en-IN")}/night`}
        intro={room.tagline + ". Fully air-conditioned, at Hotel Lazeez on Hansi Road, Barwala (Hisar)."}
        crumbs={[{ name: "Rooms & Prices", path: "/rooms" }, { name: room.name }]}
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={room.image}
              alt={`${room.name} – AC room at Hotel Lazeez Barwala`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <RatingBadge />
            <p className="mt-4 text-4xl font-bold text-primary">
              ₹{room.price.toLocaleString("en-IN")}
              <span className="text-base font-normal text-slate-500"> per night</span>
            </p>
            <p className="mt-4 text-lg text-slate-600">{room.description}</p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Air conditioning", "Yes"],
                ["Almirah (wardrobe)", room.almirah ? "Included" : "No"],
                ["Room size", room.size],
                ["Floor", room.floor],
                ["Max guests", String(room.maxGuests)],
                ["Check-in / out", `${site.checkIn} / ${site.checkOut}`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-slate-200 p-3">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="font-semibold text-primary">{v}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 mb-3 text-xl font-bold text-primary">What&apos;s in the room</h2>
            <ul className="grid grid-cols-2 gap-2 text-slate-700">
              {room.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/booking?room=${room.slug}`}
                className="rounded-full bg-primary px-7 py-3 text-center font-semibold text-white"
              >
                Book this room
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3 font-semibold text-slate-900">
                <Phone className="h-5 w-5" /> Call
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#128C7E] px-7 py-3 font-semibold text-white">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Compare with our other AC rooms</h2>
          <PriceTable />
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/rooms/${o.slug}`} className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-primary hover:bg-slate-50">
                  {o.name} – ₹{o.price.toLocaleString("en-IN")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Book the ${room.name} in Barwala`} />
    </>
  )
}
