import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { MapCard, PageHeader } from "@/components/blocks"
import { EnquiryForm } from "@/components/enquiry-form"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Contact Hotel Lazeez – Hansi Road, Barwala, Hisar" },
  description:
    "Contact Hotel Lazeez Barwala: call/WhatsApp 91291 91900. Address: Shop 202-203, Taj Colony, near Bajaj Finance, Hansi Road, Barwala, Hisar, Haryana 125121.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHeader
        title="Contact Hotel Lazeez, Barwala"
        intro="Room bookings, group stays, party hall or food orders – call, WhatsApp or send a message."
        crumbs={[{ name: "Contact" }]}
      />
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <address className="not-italic grid gap-4">
              <a href={site.phoneHref} className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">
                <Phone className="h-6 w-6 text-secondary" />
                <span>
                  <span className="block font-semibold text-primary">Phone / WhatsApp (24x7)</span>
                  <span className="text-slate-600">{site.phone}</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">
                <Mail className="h-6 w-6 text-secondary" />
                <span>
                  <span className="block font-semibold text-primary">Email</span>
                  <span className="text-slate-600 break-all">{site.email}</span>
                </span>
              </a>
              <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <MapPin className="h-6 w-6 text-secondary shrink-0" />
                <span>
                  <span className="block font-semibold text-primary">Address</span>
                  <span className="text-slate-600">{site.addressLine}</span>
                </span>
              </div>
            </address>
            <MapCard />
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm h-fit">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
            <EnquiryForm mode="contact" />
          </div>
        </div>
      </section>
    </>
  )
}
