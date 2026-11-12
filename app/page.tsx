import Image from "next/image"
import Link from "next/link"
import {
  BadgeIndianRupee,
  Car,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  UtensilsCrossed,
  Wifi,
} from "lucide-react"
import { CtaBand, Eyebrow, FaqList, MapCard, PriceTable, RatingBadge, RoomCard } from "@/components/blocks"
import { JsonLd, faqSchema } from "@/lib/schema"
import { site, rooms, amenities } from "@/lib/site"

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src="/images/lazeez-hotel-ac-rooms-rooftop.webp"
          alt="Lazeez Hotel Barwala – fully AC rooms on Hansi Road, Hisar"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="container relative mx-auto px-4 py-16 md:py-28">
          <RatingBadge dark />
          <h1 className="font-serif mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Hotel in Barwala, Hisar – <span className="text-secondary">Fully AC Rooms</span> from ₹800
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            Hotel Lazeez is a clean, safe and affordable hotel on Hansi Road, Barwala. Every room is air-conditioned.
            Choose ₹800, ₹1,000 or ₹1,200 – the bigger rooms come with an almirah.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-slate-900"
            >
              <Phone className="h-5 w-5" /> Call {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#128C7E] px-7 py-3.5 font-semibold"
            >
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 font-semibold hover:bg-white/10"
            >
              See rooms & prices
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl text-sm text-white/85">
            <li className="flex items-center gap-2"><Snowflake className="h-4 w-4 text-secondary" /> 100% AC rooms</li>
            <li className="flex items-center gap-2"><BadgeIndianRupee className="h-4 w-4 text-secondary" /> ₹800 – ₹1,200</li>
            <li className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4 text-secondary" /> In-house restaurant</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Hansi Road, Barwala</li>
          </ul>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-10">
            <Eyebrow>Rooms & prices</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
              Three AC room types. Simple, fixed prices.
            </h2>
            <p className="text-slate-600">
              All rooms at Hotel Lazeez are air-conditioned with attached bathrooms. The only difference is size and
              floor. Pick the ₹1,000 or ₹1,200 room if you want an almirah to keep your clothes and bags.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r) => (
              <RoomCard key={r.slug} room={r} />
            ))}
          </div>
          <div className="mt-10">
            <PriceTable />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Why guests choose us</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
              Rated 4.8★ – the most trusted hotel in Barwala
            </h2>
            <p className="text-slate-600">
              More than 150 guests have reviewed Hotel Lazeez. They keep mentioning the same things: clean rooms,
              strong AC, fair prices and staff who help at any hour.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Snowflake, t: "Every room is AC", d: "No non-AC rooms, no surprise charges for AC. Barwala summers are hot – sleep cool." },
              { icon: BadgeIndianRupee, t: "Honest, fixed prices", d: "₹800, ₹1,000 or ₹1,200 per night. The price you hear on the phone is the price you pay." },
              { icon: Sparkles, t: "Clean & fresh", d: "Rooms cleaned and linen changed for every new guest. Clean washrooms with hot water." },
              { icon: ShieldCheck, t: "Safe for families", d: "CCTV cameras, a staffed front desk and a well-lit building on the main Hansi Road." },
              { icon: UtensilsCrossed, t: "Food on site", d: "Our in-house restaurant serves fresh meals and snacks. Room service on request." },
              { icon: Car, t: "Easy to reach", d: "On Hansi Road in Barwala, about 32 km from Hisar. Parking space in front of the hotel." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <Icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{t}</h3>
                <p className="text-slate-600 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-10">
            <Eyebrow>Photos</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">See Lazeez Hotel, Barwala</h2>
            <p className="text-slate-600">
              Look for the white building with the purple &ldquo;LAZEEZ HOTEL&rdquo; sign on Hansi Road, near Bajaj Finance.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <figure className="relative aspect-[9/16] md:aspect-auto md:row-span-2 overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/lazeez-hotel-barwala-front-evening.webp"
                alt="Lazeez Hotel Barwala building front at evening with lit sign"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[16/9] md:col-span-2 overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/lazeez-hotel-ac-rooms-rooftop.webp"
                alt="Fully AC rooms 205 and 206 at Lazeez Hotel Barwala"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[16/9] md:col-span-2 overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/lazeez-hotel-barwala-front-day.webp"
                alt="Hotel Lazeez entrance on Hansi Road, Barwala, Hisar in daylight"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover object-[50%_70%]"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Amenities + who stays */}
      <section className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Amenities</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Everything you need for a good stay</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm">
                  <Wifi className="h-4 w-4 text-secondary shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Who stays with us</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">A hotel near Barwala for every trip</h2>
            <div className="space-y-5 text-slate-600">
              <p>
                <strong className="text-primary">Business & work trips.</strong> Traders, sales staff, bank and
                government visitors who need a clean AC room close to Barwala market and the Hansi Road offices.
              </p>
              <p>
                <strong className="text-primary">Weddings & family functions.</strong> Guests coming for shaadi and
                family events in Barwala and nearby villages book several rooms together. Call us for group rates.
              </p>
              <p>
                <strong className="text-primary">Highway travellers.</strong> Driving between Hisar, Hansi, Uklana,
                Tohana or Jind? Stop for a night in a real AC room instead of a dhaba bench.
              </p>
              <p>
                <strong className="text-primary">Exams & hospital visits.</strong> Families coming to Barwala or Hisar
                for exams, interviews or medical visits get a quiet, affordable base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>Location</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              On Hansi Road, Barwala – easy from Hisar
            </h2>
            <p className="text-slate-600 mb-6">
              Hotel Lazeez is at {site.addressLine}. We are on the main road, so you can reach us easily by car, bus or
              auto from Barwala bus stand.
            </p>
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex gap-2"><MapPin className="h-5 w-5 text-secondary shrink-0" /> Hisar city – about 32 km</li>
              <li className="flex gap-2"><MapPin className="h-5 w-5 text-secondary shrink-0" /> Barwala bus stand & main market – short auto ride</li>
              <li className="flex gap-2"><Clock className="h-5 w-5 text-secondary shrink-0" /> Check-in 12:00 noon · Check-out 11:00 am</li>
            </ul>
            <Link href="/barwala-guide" className="font-semibold text-amber-700 hover:underline">
              Read our Barwala travel guide →
            </Link>
          </div>
          <MapCard />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Questions about staying in Barwala
            </h2>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
