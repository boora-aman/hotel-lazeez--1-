"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Star, ArrowRight, Calendar, Users, Coffee, Wifi, Tv, Wind } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [guests, setGuests] = useState("2")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-32 md:pb-48">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury Hotel Room at Hotel Lazeez Barwala - Best Accommodation in Haryana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6"
            >
              #1 Rated Hotel in Barwala, Haryana
            </motion.span>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Experience Luxury <br className="hidden md:block" />
              in the Heart of <span className="text-secondary">Barwala</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Hotel Lazeez offers premium AC rooms, exceptional service, and modern amenities for business and leisure
              travelers in Barwala, Haryana.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8" asChild>
                <Link href="/rooms">View Our Rooms</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form - Repositioned */}
      <section className="relative z-20 -mt-24 md:-mt-32 px-4 mb-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Book Your Stay</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-in Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-out Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Guests</label>
                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary appearance-none"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                    <Users className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-end">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white p-3 rounded-lg font-medium">
                    <Link href="/booking">Check Availability</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience the Best Hotel in Barwala</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hotel Lazeez offers a perfect blend of comfort, convenience, and luxury for your stay in Barwala, Haryana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Coffee className="h-8 w-8 text-secondary" />,
                title: "Premium Amenities",
                description:
                  "Enjoy top-notch facilities including high-speed WiFi, room service, and complimentary breakfast at the best hotel in Barwala.",
              },
              {
                icon: <MapPin className="h-8 w-8 text-secondary" />,
                title: "Prime Location",
                description:
                  "Conveniently located near Barwala's main attractions, business centers, and just minutes from Hansi Road.",
              },
              {
                icon: <Users className="h-8 w-8 text-secondary" />,
                title: "Exceptional Service",
                description:
                  "Our dedicated staff ensures your stay at Hotel Lazeez Barwala is comfortable and memorable with personalized attention.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-muted rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                ACCOMMODATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Luxury AC Rooms in Barwala</h2>
              <p className="text-gray-600 max-w-xl">
                Choose from our selection of well-appointed rooms designed for comfort and relaxation during your stay
                in Barwala.
              </p>
            </div>
            <Button variant="outline" className="mt-6 md:mt-0 flex items-center gap-2" asChild>
              <Link href="/rooms">
                View All Rooms <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Deluxe Room",
                description: "Spacious accommodation with modern amenities for a comfortable stay in Barwala.",
                price: 2500,
                image: "/placeholder.svg?height=400&width=600",
                features: ["Air Conditioning", "Free Wi-Fi", "Flat-screen TV", "Private Bathroom"],
              },
              {
                title: "Premium Suite",
                description: "Elegant suite with additional space and premium furnishings for discerning travelers.",
                price: 3500,
                image: "/placeholder.svg?height=400&width=600",
                features: ["Air Conditioning", "Free Wi-Fi", "Mini Fridge", "Work Desk", "Sitting Area"],
              },
              {
                title: "Executive Room",
                description: "Luxurious room with deluxe amenities perfect for business travelers in Barwala.",
                price: 5000,
                image: "/placeholder.svg?height=400&width=600",
                features: ["Air Conditioning", "Free Wi-Fi", "Premium Toiletries", "Work Station", "Room Service"],
              },
            ].map((room, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.title} at Hotel Lazeez Barwala - Luxury Accommodation in Haryana`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{room.title}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-secondary fill-secondary" />
                          <Star className="h-4 w-4 text-secondary fill-secondary" />
                          <Star className="h-4 w-4 text-secondary fill-secondary" />
                          <Star className="h-4 w-4 text-secondary fill-secondary" />
                          <Star className="h-4 w-4 text-secondary fill-secondary" />
                        </div>
                      </div>
                      <div className="text-white font-bold">
                        ₹{room.price}
                        <span className="text-sm font-normal">/night</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {feature.includes("Air") && <Wind className="h-4 w-4 text-secondary" />}
                        {feature.includes("Wi-Fi") && <Wifi className="h-4 w-4 text-secondary" />}
                        {feature.includes("TV") && <Tv className="h-4 w-4 text-secondary" />}
                        {feature.includes("Bathroom") && <MapPin className="h-4 w-4 text-secondary" />}
                        {feature.includes("Fridge") && <Coffee className="h-4 w-4 text-secondary" />}
                        {feature.includes("Desk") && <Coffee className="h-4 w-4 text-secondary" />}
                        {feature.includes("Area") && <Users className="h-4 w-4 text-secondary" />}
                        {feature.includes("Toiletries") && <Coffee className="h-4 w-4 text-secondary" />}
                        {feature.includes("Station") && <Coffee className="h-4 w-4 text-secondary" />}
                        {feature.includes("Service") && <Coffee className="h-4 w-4 text-secondary" />}
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              GUEST EXPERIENCES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Read testimonials from guests who have experienced our hospitality at Hotel Lazeez in Barwala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                rating: 5,
                testimonial:
                  "The best hotel in Barwala! Excellent service and very comfortable AC rooms. The staff was extremely helpful and made our stay memorable.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5,
                testimonial:
                  "Hotel Lazeez provided the perfect accommodation in Barwala. The AC rooms were perfect for the summer heat. Clean, spacious, and well-maintained.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Amit Singh",
                location: "Chandigarh",
                rating: 5,
                testimonial:
                  "Great location and value for money. The rooms are comfortable and the staff is friendly. Definitely the best place to stay in Barwala.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-white/70 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-secondary fill-secondary" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <p className="text-white/80 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                OUR LOCATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Perfectly Located in Barwala, Haryana
              </h2>
              <p className="text-gray-600 mb-6">
                Hotel Lazeez is strategically located in the heart of Barwala, offering easy access to local
                attractions, business centers, and transportation hubs. Our prime location makes us the ideal choice for
                both business and leisure travelers visiting Barwala.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Address</h3>
                    <p className="text-gray-600">
                      Shop 202-203, Taj Market, Hansi - Barwala Rd, near Bajaj Finance, Barwala, Haryana 125121
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-gray-600">091291 91900</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-primary">Nearby Attractions:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <span className="text-gray-600">Taj Market (0.1 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <span className="text-gray-600">Barwala Bus Stand (1 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <span className="text-gray-600">Hansi Road Commercial Area (0.5 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <span className="text-gray-600">Local Shopping Centers (0.3 km)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.5123243013!2d76.4335!3d29.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA3JzI0LjAiTiA3NsKwMjYnMDEuMCJF!5e0!3m2!1sen!2sin!4v1616000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hotel Lazeez Location in Barwala, Haryana"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            BOOK YOUR STAY TODAY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the Best Hotel in Barwala</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Enjoy premium AC rooms, exceptional service, and modern amenities at Hotel Lazeez, the top-rated
            accommodation in Barwala, Haryana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-8" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white text-white hover:bg-white/20"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

