import Image from "next/image"
import Link from "next/link"
import { Home } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary/10 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-primary">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="text-sm">About Us</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">About Hotel Lazeez</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Learn about our story, our mission, and what makes Hotel Lazeez the best hotel in Barwala.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Hotel Lazeez was established with a vision to provide exceptional hospitality services in Barwala. Since
                our inception, we have been committed to offering comfortable accommodations and personalized service to
                all our guests.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small family-run establishment has grown into one of the most respected hotels in the
                region, known for our attention to detail and commitment to guest satisfaction.
              </p>
              <p className="text-gray-700">
                Today, Hotel Lazeez stands as a symbol of luxury and comfort in Barwala, catering to both business and
                leisure travelers with our modern amenities and warm hospitality.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hotel Lazeez Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Hotel Lazeez, our mission is to provide exceptional hospitality experiences that exceed our guests'
              expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comfort",
                description:
                  "We strive to create a comfortable and relaxing environment for all our guests, ensuring they feel at home during their stay.",
              },
              {
                title: "Quality",
                description:
                  "We are committed to maintaining the highest standards of quality in our accommodations, services, and amenities.",
              },
              {
                title: "Service",
                description:
                  "We believe in providing personalized service that addresses the unique needs and preferences of each guest.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to making your stay at Hotel Lazeez memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajiv Sharma",
                position: "General Manager",
                bio: "With over 15 years of experience in the hospitality industry, Rajiv ensures the smooth operation of Hotel Lazeez.",
              },
              {
                name: "Priya Patel",
                position: "Front Office Manager",
                bio: "Priya leads our front desk team, ensuring all guests receive a warm welcome and exceptional service throughout their stay.",
              },
              {
                name: "Vikram Singh",
                position: "Executive Chef",
                bio: "Chef Vikram brings his culinary expertise to create delicious meals that delight our guests' palates.",
              },
              {
                name: "Anita Verma",
                position: "Housekeeping Manager",
                bio: "Anita ensures that all our rooms and facilities are maintained to the highest standards of cleanliness and comfort.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

