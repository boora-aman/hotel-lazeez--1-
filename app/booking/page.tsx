import type { Metadata } from "next"
import { MessageCircle, Phone } from "lucide-react"
import { PageHeader, PriceTable } from "@/components/blocks"
import { EnquiryForm } from "@/components/enquiry-form"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Book AC Room in Barwala – Hotel Lazeez | ₹800–₹1200" },
  description:
    "Book a fully AC room at Hotel Lazeez, Barwala (Hisar). ₹800, ₹1000 or ₹1200 per night. Send a request online or call/WhatsApp 91291 91900 for instant confirmation.",
  alternates: { canonical: "/booking" },
}

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Book Now", path: "/booking" }])} />
      <PageHeader
        title="Book Your AC Room in Barwala"
        intro="Send your dates and we will call to confirm. Fastest option: call or WhatsApp us directly."
        crumbs={[{ name: "Book Now" }]}
      />
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 min-w-0 rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Booking request</h2>
            <EnquiryForm mode="booking" defaultRoom={room} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl bg-primary p-6 text-white">
              <p className="font-bold text-lg mb-2">Instant booking</p>
              <p className="text-white/80 text-sm mb-5">Talk to our front desk – available 24x7.</p>
              <a href={site.phoneHref} className="mb-3 flex items-center justify-center gap-2 rounded-full bg-secondary py-3 font-semibold text-slate-900">
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-[#128C7E] py-3 font-semibold">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
            <PriceTable />
            <p className="text-sm text-slate-500">
              Check-in 12:00 noon · Check-out 11:00 am. Valid photo ID (Aadhaar, driving licence, etc.) required for
              every adult guest.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
