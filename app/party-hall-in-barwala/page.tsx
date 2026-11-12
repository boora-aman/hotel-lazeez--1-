import type { Metadata } from "next"
import Image from "next/image"
import { Cake, Music, PartyPopper, Users } from "lucide-react"
import { CtaBand, Eyebrow, FaqList, PageHeader } from "@/components/blocks"
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Party Hall in Barwala, Hisar – DJ Hall | Hotel Lazeez" },
  description:
    "DJ party hall in Barwala, Hisar for birthdays, kitty parties and family functions. Food from our kitchen and AC rooms for guests. Call 91291 91900.",
  alternates: { canonical: "/party-hall-in-barwala" },
}

const hallFaqs = [
  {
    q: "Is there a party hall in Barwala?",
    a: "Yes. Hotel Lazeez on Hansi Road, Barwala has a DJ party hall for birthdays, anniversaries, kitty parties and small family functions.",
  },
  {
    q: "Can we order food for the party?",
    a: "Yes. Food and snacks come from the Lazeez in-house kitchen. Tell us your guest count and menu choice when you call.",
  },
  {
    q: "Can outstation guests stay at the hotel?",
    a: "Yes. Book AC rooms at ₹800, ₹1,000 or ₹1,200 per night in the same building, so guests do not need to travel back at night.",
  },
  {
    q: "How do I book the party hall?",
    a: `Call or WhatsApp ${site.phone} with your date, time and number of guests. We will share availability and package details.`,
  },
]

export default function PartyHallPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Party Hall", path: "/party-hall-in-barwala" }])} />
      <JsonLd data={faqSchema(hallFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EventVenue",
          name: "Lazeez DJ Party Hall, Barwala",
          url: `${site.url}/party-hall-in-barwala`,
          telephone: site.phone,
          containedInPlace: { "@id": `${site.url}/#hotel` },
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
        }}
      />
      <PageHeader
        title="DJ Party Hall in Barwala, Hisar"
        intro="Celebrate birthdays, anniversaries and family get-togethers at Hotel Lazeez – music, food and AC rooms for guests, all under one roof on Hansi Road."
        crumbs={[{ name: "Party Hall" }]}
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5 text-slate-600 text-lg">
            <Eyebrow>Events at Lazeez</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary">One place for the party and the stay</h2>
            <p>
              Planning a small function in Barwala usually means booking a hall in one place, ordering food from
              another and finding rooms for relatives somewhere else. At Hotel Lazeez you get all three in one
              building on Hansi Road.
            </p>
            <p>
              Our DJ party hall suits birthday parties, kitty parties, engagement get-togethers, anniversary dinners
              and office celebrations. The Lazeez kitchen handles snacks and meals, and guests coming from Hisar, Hansi,
              Uklana or nearby villages can stay the night in our fully AC rooms.
            </p>
          </div>
          <div className="relative aspect-[3/4] max-h-[560px] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/lazeez-hotel-barwala-front-evening.webp"
              alt="Hotel Lazeez Barwala with DJ party hall and restaurant entrance"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 bg-slate-50">
        <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Cake, t: "Birthday parties", d: "Kids' and adults' birthdays with music and cake-cutting." },
            { icon: Users, t: "Kitty & family parties", d: "Comfortable space for ladies' kitty parties and family get-togethers." },
            { icon: PartyPopper, t: "Anniversaries & engagements", d: "Small celebrations with DJ and food from our kitchen." },
            { icon: Music, t: "DJ & music", d: "DJ setup for dancing. Ask about timings and sound rules." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Icon className="h-8 w-8 text-secondary mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">{t}</h3>
              <p className="text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6 text-center">Party hall questions</h2>
          <FaqList items={hallFaqs} />
        </div>
      </section>

      <CtaBand title="Book the party hall in Barwala" />
    </>
  )
}
