"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-serif">
          <span className={isScrolled ? "text-primary" : "text-white"}>Hotel Lazeez</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-medium text-sm ${
              isScrolled ? "text-gray-700" : "text-white"
            } hover:text-secondary transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className={`font-medium text-sm ${
              isScrolled ? "text-gray-700" : "text-white"
            } hover:text-secondary transition-colors`}
          >
            Rooms
          </Link>
          <Link
            href="/about"
            className={`font-medium text-sm ${
              isScrolled ? "text-gray-700" : "text-white"
            } hover:text-secondary transition-colors`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-medium text-sm ${
              isScrolled ? "text-gray-700" : "text-white"
            } hover:text-secondary transition-colors`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className={`flex items-center gap-2 ${isScrolled ? "text-primary" : "text-white"}`}>
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">091291 91900</span>
          </div>
          <Button asChild variant={isScrolled ? "default" : "secondary"}>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full py-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="text-2xl font-bold text-primary font-serif" onClick={() => setIsOpen(false)}>
                  Hotel Lazeez
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="text-xl font-medium text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/rooms"
                  className="text-xl font-medium text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Rooms
                </Link>
                <Link
                  href="/about"
                  className="text-xl font-medium text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-xl font-medium text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-gray-700">091291 91900</span>
                </div>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/booking">Book Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

