import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Star, Check, Coffee, Wifi, Tv, Wind, Users } from "lucide-react"

export const metadata = {
  title: "Luxury Rooms & Suites | Hotel Lazeez Barwala - Best Accommodation in Haryana",
  description:
    "Explore our premium AC rooms and suites at Hotel Lazeez, the best hotel in Barwala. Comfortable, modern accommodations with exceptional amenities for business and leisure travelers.",
  keywords:
    "hotel rooms Barwala, AC rooms Barwala, luxury accommodation Barwala, best hotel rooms Haryana, Barwala hotel suites, premium rooms Barwala",
}

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Luxury Hotel Rooms at Hotel Lazeez Barwala - Best Accommodation in Haryana"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="relative z-10 text-center px-4 md:px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link href="/" className="text-sm text-white/80 hover:text-white">
              Home
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-sm text-white">Rooms & Suites</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Luxury Rooms & Suites</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience comfort and elegance in our premium accommodations at the best hotel in Barwala.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Find Your Perfect Room</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Check-in Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Check-out Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Guests</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary appearance-none">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white p-3 rounded-lg font-medium">
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deluxe Room",
                description:
                  "Spacious room with a king-size bed and modern amenities for a comfortable stay in Barwala.",
                price: 2500,
                image: "/placeholder.svg?height=400&width=600",
                features: ["Air Conditioning", "Free Wi-Fi", "Flat-screen TV", "Private Bathroom", "Room Service"],
              },
              {
                title: "Premium Room",
                description:
                  "Elegant room with additional space and premium furnishings for discerning travelers visiting Barwala.",
                price: 3500,
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Air Conditioning",
                  "Free Wi-Fi",
                  "Flat-screen TV",
                  "Mini Fridge",
                  "Work Desk",
                  "Premium Toiletries",
                ],
              },
              {
                title: "Executive Suite",
                description:
                  "Luxurious suite with separate living area and deluxe amenities for an exceptional stay in Barwala.",
                price: 5000,
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Air Conditioning",
                  "Free Wi-Fi",
                  "Flat-screen TV",
                  "Mini Fridge",
                  "Sitting Area",
                  "Premium Toiletries",
                  "Work Station",
                ],
              },
              {
                title: "Family Room",
                description:
                  "Spacious room designed for families with multiple beds, perfect for family trips to Barwala.",
                price: 4000,
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Air Conditioning",
                  "Free Wi-Fi",
                  "Flat-screen TV",
                  "Multiple Beds",
                  "Extra Space",
                  "Family Amenities",
                ],
              },
              {
                title: "Twin Room",
                description: "Comfortable room with two single beds, ideal for sharing during your stay in Barwala.",
                price: 3000,
                image: "/placeholder.svg?height=400&width=600",
                features: ["Air Conditioning", "Free Wi-Fi", "Flat-screen TV", "Twin Beds", "Work Desk"],
              },
              {
                title: "Business Suite",
                description:
                  "Designed for business travelers with work area and premium amenities for productive stays in Barwala.",
                price: 4500,
                image: "/placeholder.svg?height=400&width=600",
                features: [
                  "Air Conditioning",
                  "Free Wi-Fi",
                  "Flat-screen TV",
                  "Work Station",
                  "Coffee Maker",
                  "Ironing Facilities",
                  "Meeting Space",
                ],
              },
            ].map((room, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.title} at Hotel Lazeez Barwala - Luxury Accommodation in Haryana`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-primary">{room.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary fill-secondary" />
                      <span className="ml-1 text-gray-700">5.0</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-secondary" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">
                      ₹{room.price}
                      <span className="text-sm font-normal text-gray-500">/night</span>
                    </div>
                    <div className="text-sm text-gray-500">Includes taxes & fees</div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              ROOM AMENITIES
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our rooms at Hotel Lazeez Barwala come with these premium amenities to ensure your comfort.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Wind className="h-6 w-6" />,
                title: "Air Conditioning",
                description: "Stay cool in Barwala's climate",
              },
              { icon: <Wifi className="h-6 w-6" />, title: "Free Wi-Fi", description: "High-speed internet access" },
              { icon: <Tv className="h-6 w-6" />, title: "Flat-screen TV", description: "With premium channels" },
              { icon: <Coffee className="h-6 w-6" />, title: "Tea/Coffee Maker", description: "In-room refreshments" },
              { icon: <Users className="h-6 w-6" />, title: "Room Service", description: "Available 24/7" },
              { icon: <Coffee className="h-6 w-6" />, title: "Mini Fridge", description: "For your convenience" },
              {
                icon: <Coffee className="h-6 w-6" />,
                title: "Premium Toiletries",
                description: "Luxury bathroom amenities",
              },
              {
                icon: <Coffee className="h-6 w-6" />,
                title: "Daily Housekeeping",
                description: "For a clean, comfortable stay",
              },
            ].map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 text-secondary">
                  {amenity.icon}
                </div>
                <h3 className="font-semibold mb-2 text-primary">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                BOOKING INFORMATION
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">Policies & Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Check-in & Check-out</h3>
                  <p className="text-gray-600">
                    Check-in time: 12:00 PM
                    <br />
                    Check-out time: 11:00 AM
                    <br />
                    Early check-in and late check-out available upon request and subject to availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Reservation Policy</h3>
                  <p className="text-gray-600">
                    We require a valid ID and credit card for all reservations at our hotel in Barwala. For guaranteed
                    reservations, we may charge a one-night deposit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Cancellation Policy</h3>
                  <p className="text-gray-600">
                    Cancellations must be made 24 hours prior to arrival to avoid a one-night room charge. Please
                    contact our front desk for any changes to your reservation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Special Requests</h3>
                  <p className="text-gray-600">
                    We are happy to accommodate special requests for your stay at Hotel Lazeez Barwala. Please contact
                    us directly to discuss your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Make a Reservation</h3>
              <p className="text-gray-600 mb-6">
                Book directly with us for the best rates and special offers at the top hotel in Barwala. Contact our
                reservation team or book online.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <h4 className="font-medium text-primary">Phone</h4>
                    <p className="text-gray-600">091291 91900</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-gray-600">reservations@lazeezhotel.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-primary mb-2">Why Book Direct:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-gray-600">Best rate guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-gray-600">Free cancellation (24 hours notice)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-gray-600">Priority room allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-gray-600">Special requests accommodated</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button size="lg" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Best Hotel in Barwala</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book your stay at Hotel Lazeez today and enjoy our premium AC rooms and exceptional service in Barwala,
            Haryana.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us for Special Rates</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

