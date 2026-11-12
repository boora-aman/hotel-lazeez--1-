import type { Metadata } from "next"
import Image from "next/image"
import { CtaBand, Eyebrow, PageHeader, RatingBadge } from "@/components/blocks"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "About Hotel Lazeez – Local AC Hotel in Barwala, Hisar" },
  description:
    "Hotel Lazeez is a locally owned, fully AC hotel on Hansi Road, Barwala (Hisar). Registered MSME business with restaurant and DJ party hall. Rated 4.8★ by 150+ guests.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHeader
        title="About Hotel Lazeez, Barwala"
        intro="A locally owned hotel built for one simple promise: a clean, cool, safe room in Barwala at a fair price."
        crumbs={[{ name: "About" }]}
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-5 text-slate-600 text-lg">
            <RatingBadge />
            <p>
              Barwala sits on the busy road between Hisar, Hansi, Uklana and Tohana. For years, travellers here had
              few clean options for a night&apos;s stay. We opened <strong className="text-primary">Hotel Lazeez</strong>{" "}
              on Hansi Road to fix that.
            </p>
            <p>
              Every room in our building is air-conditioned. We keep prices simple – ₹800, ₹1,000 and ₹1,200 – and
              we keep rooms clean. That is why more than {site.rating.count} guests have rated us{" "}
              {site.rating.value} out of 5.
            </p>
            <p>
              Downstairs, the <strong className="text-primary">Lazeez restaurant</strong> serves fresh food, and our{" "}
              <strong className="text-primary">DJ party hall</strong> hosts birthdays, kitty parties and small family
              functions for the Barwala community.
            </p>
          </div>
          <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/lazeez-hotel-barwala-front-day.webp"
              alt="Hotel Lazeez building on Hansi Road, Barwala, Hisar"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 bg-slate-50">
        <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              t: "Rooms",
              d: "Three AC room types from ₹800. The ₹1,000 and ₹1,200 rooms add an almirah and more space.",
            },
            {
              t: "Restaurant",
              d: "In-house kitchen for breakfast, meals and snacks. Order to your room or eat downstairs.",
            },
            {
              t: "Party hall",
              d: "DJ party hall for birthdays, anniversaries and small get-togethers. Call for availability and packages.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-white border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-primary mb-2">{c.t}</h2>
              <p className="text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Eyebrow>Trust & registration</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">A registered local business</h2>
          <ul className="space-y-3 text-slate-600">
            <li>Registered enterprise: <strong>Lazeez Hotel</strong> (MSME / Udyam and Haryana Udhyam Memorandum)</li>
            <li>Activity: Short-term accommodation (NIC 551)</li>
            <li>GSTIN: {site.gst}</li>
            <li>Address: {site.addressLine}</li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
