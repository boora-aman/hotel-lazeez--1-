import type { Metadata } from "next"
import Image from "next/image"
import { Coffee, Pizza, Soup, Truck } from "lucide-react"
import { CtaBand, Eyebrow, FaqList, PageHeader } from "@/components/blocks"
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Lazeez Restaurant in Barwala, Hisar – Food, Snacks & Room Service" },
  description:
    "Lazeez restaurant at Hotel Lazeez, Hansi Road, Barwala: fresh meals, snacks, pizza, burgers and room service for hotel guests and walk-ins. Call 91291 91900 for orders.",
  alternates: { canonical: "/restaurant-in-barwala" },
}

const foodFaqs = [
  {
    q: "Is there a restaurant at Hotel Lazeez Barwala?",
    a: "Yes. Lazeez has an in-house restaurant on the ground floor serving meals and snacks to hotel guests and walk-in customers.",
  },
  {
    q: "Do you have room service?",
    a: "Yes. Hotel guests can order food to their AC room. Call the front desk from your room.",
  },
  {
    q: "Can I order food for a party?",
    a: "Yes. We cater for parties in our DJ party hall and for small group orders. Call us with guest count and menu.",
  },
]

export default function RestaurantPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Restaurant", path: "/restaurant-in-barwala" }])} />
      <JsonLd data={faqSchema(foodFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Lazeez Restaurant, Barwala",
          url: `${site.url}/restaurant-in-barwala`,
          telephone: site.phone,
          servesCuisine: ["North Indian", "Fast food", "Snacks"],
          priceRange: "₹",
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
        title="Lazeez Restaurant in Barwala"
        intro="Fresh food and snacks on Hansi Road, Barwala – for hotel guests, travellers and local families."
        crumbs={[{ name: "Restaurant" }]}
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5 text-slate-600 text-lg">
            <Eyebrow>Eat at Lazeez</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary">Good food, right where you stay</h2>
            <p>
              &ldquo;Lazeez&rdquo; means delicious – and our kitchen lives up to the name. The ground-floor restaurant at
              Hotel Lazeez serves snacks like pizza, burgers and fries, along with everyday meals.
            </p>
            <p>
              Staying with us? Order to your AC room. Driving through Barwala on the Hisar–Hansi route? Stop in for a
              quick meal. Hosting a party? Our kitchen caters for the DJ party hall too.
            </p>
            <p className="text-base text-slate-500">Menu and timings change by season. Call {site.phone} for today&apos;s menu.</p>
          </div>
          <div className="relative aspect-[3/4] max-h-[560px] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/lazeez-hotel-barwala-front-day.webp"
              alt="Lazeez restaurant and hotel entrance on Hansi Road, Barwala"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_75%]"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 bg-slate-50">
        <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Pizza, t: "Pizza & burgers", d: "Quick fast-food favourites, made fresh." },
            { icon: Soup, t: "Meals", d: "Everyday meals for guests and travellers." },
            { icon: Coffee, t: "Tea & snacks", d: "Chai, cold drinks and snacks any time of day." },
            { icon: Truck, t: "Room service", d: "Hotel guests can order straight to their room." },
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
          <h2 className="font-serif text-3xl font-bold text-primary mb-6 text-center">Restaurant questions</h2>
          <FaqList items={foodFaqs} />
        </div>
      </section>

      <CtaBand title="Hungry in Barwala? Call Lazeez" />
    </>
  )
}
