"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, Mail, MapPin, Phone, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPageClient() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting contact form:", formData)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("Contact form response:", result)

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
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
          alt="Contact Hotel Lazeez Barwala - Best Hotel in Haryana"
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
            <span className="text-sm text-white">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help with any questions about your stay at Hotel Lazeez in Barwala.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? Fill out the form below and our team will get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        className="pl-10"
                      />
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                CONTACT INFORMATION
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">How to Reach Us</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Address</h3>
                    <p className="text-gray-600">
                      Shop 202-203, Taj Market, Hansi - Barwala Rd,
                      <br />
                      near Bajaj Finance, Barwala, Haryana 125121
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Phone</h3>
                    <p className="text-gray-600">091291 91900</p>
                    <p className="text-gray-600">091291 91901</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Email</h3>
                    <p className="text-gray-600">info@lazeezhotel.com</p>
                    <p className="text-gray-600">bookings@lazeezhotel.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.5123243013!2d76.4335!3d29.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA3JzI0LjAiTiA3NsKwMjYnMDEuMCJF!5e0!3m2!1sen!2sin!4v1616000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Hotel Lazeez Location in Barwala, Haryana"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Common Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Hotel Lazeez, the best hotel in Barwala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What are the check-in and check-out times?",
                answer:
                  "Check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.",
              },
              {
                question: "Is breakfast included in the room rate?",
                answer:
                  "Yes, complimentary breakfast is included with all room bookings at our hotel in Barwala. Our breakfast buffet is served from 7:00 AM to 10:30 AM daily in our dining area.",
              },
              {
                question: "Do you offer airport transfers?",
                answer:
                  "Yes, we can arrange airport transfers for an additional fee. Please contact our front desk at least 24 hours in advance to arrange this service.",
              },
              {
                question: "Is there free Wi-Fi available?",
                answer:
                  "Yes, complimentary high-speed Wi-Fi is available throughout Hotel Lazeez Barwala for all our guests.",
              },
              {
                question: "Do you have parking facilities?",
                answer:
                  "Yes, we offer free parking for all our guests on a first-come, first-served basis at our hotel in Barwala.",
              },
              {
                question: "Are pets allowed in the hotel?",
                answer:
                  "We regret that pets are not allowed in Hotel Lazeez Barwala, with the exception of service animals.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

