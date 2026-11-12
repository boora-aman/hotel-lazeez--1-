import type { Metadata } from "next"
import { CtaBand, Eyebrow, FaqList, PageHeader, PriceTable, RoomCard } from "@/components/blocks"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { faqs, rooms } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "AC Rooms in Barwala: ₹800, ₹1000, ₹1200 – Hotel Lazeez" },
  description:
    "Room tariff at Hotel Lazeez Barwala, Hisar: Standard AC ₹800, Deluxe AC ₹1000 (with almirah), Super Deluxe AC ₹1200 (largest, with almirah). All rooms fully AC.",
  alternates: { canonical: "/rooms" },
}

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Rooms & Prices", path: "/rooms" }])} />
      <PageHeader
        title="AC Rooms in Barwala – Prices from ₹800"
        intro="Three room types, all fully air-conditioned. They differ by size and floor. The ₹1,000 and ₹1,200 rooms include an almirah."
        crumbs={[{ name: "Rooms & Prices" }]}
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r) => (
              <RoomCard key={r.slug} room={r} headingLevel="h2" />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Compare</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Room tariff at a glance</h2>
            <PriceTable />
            <p className="mt-4 text-sm text-slate-500">
              Prices are per room per night. Extra mattress, group bookings and long-stay rates on request. GST as
              applicable.
            </p>
          </div>
          <div>
            <Eyebrow>Which room should I pick?</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Quick guide</h2>
            <ul className="space-y-4 text-slate-600">
              <li>
                <strong className="text-primary">One night, travelling light?</strong> The ₹800 Standard AC Room is all
                you need – AC, TV, clean bathroom, Wi-Fi.
              </li>
              <li>
                <strong className="text-primary">Staying 2+ nights or with a couple of bags?</strong> Take the ₹1,000
                Deluxe AC Room. The almirah keeps your clothes neat.
              </li>
              <li>
                <strong className="text-primary">Family, wedding guest or want more space?</strong> The ₹1,200 Super
                Deluxe AC Room is our biggest room, with an almirah.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Room & booking questions</h2>
          <FaqList items={faqs.slice(0, 2).concat(faqs.slice(3, 6))} />
        </div>
      </section>

      <CtaBand title="Book your AC room in Barwala" />
    </>
  )
}
