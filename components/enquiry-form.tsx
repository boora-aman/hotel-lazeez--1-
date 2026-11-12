"use client"

import { useState } from "react"
import { rooms, site } from "@/lib/site"

type Mode = "booking" | "contact"

const input =
  "w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary"

export function EnquiryForm({ mode, defaultRoom }: { mode: Mode; defaultRoom?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const today = new Date().toISOString().slice(0, 10)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch(mode === "booking" ? "/api/booking" : "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      form.reset()
      setStatus("ok")
    } catch {
      setStatus("error")
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-xl font-bold text-emerald-800 mb-2">Request received – thank you!</p>
        <p className="text-emerald-700">
          We will call you shortly to confirm. For an instant reply, call or WhatsApp {site.phone}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Your name *</span>
        <input name="name" required autoComplete="name" className={input} />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Mobile number *</span>
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9+ ]{10,15}" className={input} />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-sm font-medium text-slate-700">Email (optional)</span>
        <input name="email" type="email" autoComplete="email" className={input} />
      </label>

      {mode === "booking" ? (
        <>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Check-in *</span>
            <input name="checkIn" type="date" required min={today} className={input} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Check-out *</span>
            <input name="checkOut" type="date" required min={today} className={input} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Room type *</span>
            <select name="roomType" defaultValue={defaultRoom || rooms[1].slug} className={input}>
              {rooms.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name} – ₹{r.price}/night
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Guests / rooms</span>
            <input name="guests" defaultValue="2 guests, 1 room" className={input} />
          </label>
        </>
      ) : (
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Subject</span>
          <select name="subject" className={input} defaultValue="Room enquiry">
            <option>Room enquiry</option>
            <option>Group / wedding booking</option>
            <option>Party hall booking</option>
            <option>Restaurant / food</option>
            <option>Other</option>
          </select>
        </label>
      )}

      <label className="block sm:col-span-2">
        <span className="text-sm font-medium text-slate-700">{mode === "booking" ? "Special requests" : "Message *"}</span>
        <textarea name="message" rows={4} required={mode === "contact"} className={input} />
      </label>

      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : mode === "booking" ? "Send booking request" : "Send message"}
        </button>
        <span className="text-sm text-slate-500">
          or{" "}
          <a href={site.whatsappHref} target="_blank" rel="noopener" className="font-semibold text-[#128C7E]">
            WhatsApp {site.phone}
          </a>
        </span>
      </div>
      {status === "error" && (
        <p className="sm:col-span-2 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          Could not send right now. Please call or WhatsApp {site.phone} – we answer 24x7.
        </p>
      )}
    </form>
  )
}
