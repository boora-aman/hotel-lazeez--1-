import { MessageCircle, Phone } from "lucide-react"
import { site } from "@/lib/site"

// Sticky call / WhatsApp bar on phones. Most hotel bookings in Barwala come by phone.
export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-3.5 font-semibold text-primary">
        <Phone className="h-5 w-5" /> Call Now
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 py-3.5 font-semibold text-white bg-[#128C7E]"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  )
}
