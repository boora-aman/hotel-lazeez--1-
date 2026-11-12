import type { Metadata } from "next"
import Link from "next/link"
import { CtaBand, Eyebrow, FaqList, MapCard, PageHeader } from "@/components/blocks"
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Hotels in Barwala, Hisar: Where to Stay & How to Reach" },
  description:
    "Planning a stay in Barwala, Hisar? How to reach Barwala from Hisar, Hansi, Delhi & Chandigarh, nearby places like Agroha Dham, and where to find a clean AC hotel near Barwala from ₹800.",
  alternates: { canonical: "/barwala-guide" },
}

const guideFaqs = [
  {
    q: "Which is the best hotel in Barwala, Hisar?",
    a: `Hotel Lazeez on Hansi Road is one of the best-rated hotels in Barwala, with a ${site.rating.value}/5 rating from ${site.rating.count}+ guests. All rooms are AC and prices are ₹800, ₹1,000 and ₹1,200 per night.`,
  },
  {
    q: "How far is Barwala from Hisar?",
    a: "Barwala is about 32 km from Hisar city by road – roughly 40 to 50 minutes by car or bus.",
  },
  {
    q: "Is there a cheap AC hotel near Barwala?",
    a: "Yes. Hotel Lazeez in Barwala has fully AC rooms starting at ₹800 per night, with no extra charge for AC.",
  },
  {
    q: "Can I stay in Barwala instead of Hisar?",
    a: "Yes. If your work, wedding or visit is in Barwala, Uklana, or the villages around, staying in Barwala saves daily travel to Hisar and hotels here are usually cheaper.",
  },
]

export default function BarwalaGuidePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Barwala Guide", path: "/barwala-guide" }])} />
      <JsonLd data={faqSchema(guideFaqs)} />
      <PageHeader
        title="Staying in Barwala, Hisar: A Simple Guide"
        intro="Where Barwala is, how to get here, what is nearby – and how to find a clean, affordable AC hotel near Barwala."
        crumbs={[{ name: "Barwala Guide" }]}
      />

      <article className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-12 text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">About Barwala</h2>
            <p className="mb-4">
              Barwala is a town and sub-division in <strong>Hisar district, Haryana</strong>. It sits on the busy route
              that connects Hisar with Kaithal and Chandigarh, and on the Hansi Road. Barwala has a large grain market
              and serves dozens of surrounding villages, so traders, government staff, wedding guests and families pass
              through every day.
            </p>
            <p>
              Hisar city is about <strong>32 km</strong> away. Many visitors prefer to stay in Barwala itself: hotels
              are cheaper than in Hisar and you skip the daily drive.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">How to reach Barwala</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>From Hisar:</strong> about 32 km by road. Regular Haryana Roadways and private buses run between
                Hisar and Barwala.
              </li>
              <li>
                <strong>From Hansi:</strong> take the Hansi–Barwala road. Hotel Lazeez is right on Hansi Road as you
                enter Barwala.
              </li>
              <li>
                <strong>From Delhi:</strong> drive via Rohtak and Hansi, or take a train/bus to Hisar and then a bus to
                Barwala.
              </li>
              <li>
                <strong>From Chandigarh / Kaithal:</strong> come by road towards Hisar; Barwala is on the way before
                Hisar.
              </li>
              <li>
                <strong>Nearest airport:</strong> Hisar (Maharaja Agrasen Airport). Larger airports: Delhi and
                Chandigarh.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Places to visit near Barwala</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Agroha Dham</strong> – a large temple complex dedicated to Goddess Mahalakshmi and Maharaja
                Agrasen, with the Shakti Sarovar pond. Popular with families and pilgrims.
              </li>
              <li>
                <strong>Agroha Mound (Theh)</strong> – an archaeological site close to Agroha with remains of an old
                city.
              </li>
              <li>
                <strong>Hisar city</strong> – Firoz Shah Palace complex, Gujri Mahal, the Deer Park and the big
                markets.
              </li>
              <li>
                <strong>Hansi</strong> – the historic Asigarh Fort and old town area.
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">Travel times depend on road and traffic. Ask our front desk for the best route.</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Where to stay in Barwala</h2>
            <p className="mb-4">
              Hotel options inside Barwala are limited. Most budget hotels and OYO-type properties are in Hisar city,
              30+ km away. <strong>Hotel Lazeez</strong> is a fully air-conditioned hotel inside Barwala on Hansi Road,
              with three simple room prices:
            </p>
            <ul className="mb-4 space-y-2 list-disc pl-5">
              <li>Standard AC Room – ₹800/night</li>
              <li>Deluxe AC Room with almirah – ₹1,000/night</li>
              <li>Super Deluxe AC Room with almirah (largest) – ₹1,200/night</li>
            </ul>
            <p>
              Guests rate us {site.rating.value}/5 from {site.rating.count}+ reviews.{" "}
              <Link href="/rooms" className="font-semibold text-amber-700 hover:underline">
                See rooms & prices →
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Find Hotel Lazeez</h2>
            <p className="mb-6">{site.addressLine}</p>
            <MapCard />
          </section>

          <section>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Barwala hotel questions</h2>
            <FaqList items={guideFaqs} />
          </section>
        </div>
      </article>

      <CtaBand />
    </>
  )
}
