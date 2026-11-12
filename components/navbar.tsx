"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import { site } from "@/lib/site"

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Prices" },
  { href: "/restaurant-in-barwala", label: "Restaurant" },
  { href: "/party-hall-in-barwala", label: "Party Hall" },
  { href: "/barwala-guide", label: "Barwala Guide" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none" aria-label="Hotel Lazeez Barwala home">
          <span className="font-serif text-xl font-bold text-primary">Hotel Lazeez</span>
          <span className="text-[11px] tracking-wide text-slate-500">Fully AC · Barwala, Hisar</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-secondary">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <Link
            href="/booking"
            className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-secondary/90"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-secondary px-5 py-3 text-center font-semibold text-slate-900"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  )
}
