"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Check, Home, Mail, Phone, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function BookingPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "deluxe",
    specialRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting booking form:", formData)
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("Booking form response:", result)

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit booking request")
      }

      toast({
        title: "Booking Request Received",
        description: "We'll contact you shortly to confirm your reservation.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        roomType: "deluxe",
        specialRequests: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Book your stay at Hotel Lazeez Barwala - Best Accommodation in Haryana"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="relative z-10 text-center px-4 md:px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link href="/" className="text-sm text-white/80 hover:text-white flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-sm text-white">Book Your Stay</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Book Your Stay</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Reserve your room at the best hotel in Barwala for a comfortable and luxurious experience.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Reservation Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="pl-10"
                        />
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                          className="pl-10"
                        />
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                          className="pl-10"
                        />
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="roomType" className="text-sm font-medium text-gray-700">
                        Room Type
                      </label>
                      <select
                        id="roomType"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary appearance-none"
                        required
                      >
                        <option value="deluxe">Deluxe Room</option>
                        <option value="premium">Premium Room</option>
                        <option value="executive">Executive Suite</option>
                        <option value="family">Family Room</option>
                        <option value="twin">Twin Room</option>
                        <option value="business">Business Suite</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="checkIn" className="text-sm font-medium text-gray-700">
                        Check-in Date
                      </label>
                      <div className="relative">
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="checkOut" className="text-sm font-medium text-gray-700">
                        Check-out Date
                      </label>
                      <div className="relative">
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium text-gray-700">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary appearance-none"
                        required
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">
                      Special Requests
                    </label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any special requests or requirements?"
                      rows={4}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit Booking Request"}
                    </Button>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Your booking request will be sent to our email. We'll contact you shortly to confirm.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-primary">Booking Information</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Check-in & Check-out</h4>
                    <p className="text-gray-600">
                      Check-in: 12:00 PM
                      <br />
                      Check-out: 11:00 AM
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Reservation Policy</h4>
                    <p className="text-gray-600">
                      We require a valid ID and credit card for all reservations. For guaranteed reservations, we may
                      charge a one-night deposit.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cancellation Policy</h4>
                    <p className="text-gray-600">
                      Cancellations must be made 24 hours prior to arrival to avoid a one-night room charge.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-primary mb-4">Need Help?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-secondary" />
                        <span className="text-gray-600">091291 91900</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-secondary" />
                        <span className="text-gray-600">bookings@lazeezhotel.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              WHY BOOK WITH US
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Benefits of Direct Booking</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Book directly with Hotel Lazeez Barwala and enjoy these exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Best Rate Guarantee",
                description: "We promise the best rates when you book directly with us.",
              },
              {
                title: "Free Cancellation",
                description: "Flexible cancellation policy with 24-hour notice.",
              },
              {
                title: "No Hidden Fees",
                description: "Transparent pricing with no unexpected charges.",
              },
              {
                title: "Special Requests",
                description: "We can better accommodate your special needs when you book direct.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-muted p-6 rounded-xl">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

