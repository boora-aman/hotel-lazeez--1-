// Single source of truth for hotel facts. Update here and every page, schema and
// meta tag picks it up.

export const site = {
  name: "Hotel Lazeez",
  altName: "Lazeez Hotel Barwala",
  url: "https://lazeezhotel.com",
  phone: "+91 91291 91900",
  phoneHref: "tel:+919129191900",
  whatsappHref:
    "https://wa.me/919129191900?text=" +
    encodeURIComponent("Hi Hotel Lazeez, I want to book an AC room in Barwala. Dates: "),
  email: "lazeezhotelindia@gmail.com",
  address: {
    street: "Shop No. 202-203, Taj Colony, Near Bajaj Finance, Hansi Road",
    locality: "Barwala",
    district: "Hisar",
    region: "Haryana",
    postalCode: "125121",
    country: "IN",
  },
  addressLine:
    "Shop No. 202-203, Taj Colony, Near Bajaj Finance, Hansi Road, Barwala, Hisar, Haryana 125121",
  // Opens Google Maps search for the hotel. Works even while the Maps listing is offline.
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Lazeez Hotel, Hansi Road, Barwala, Haryana 125121"),
  // Paste the Google Maps "Embed a map" src here (or set NEXT_PUBLIC_MAPS_EMBED_URL)
  // once the Google Business Profile is live again. Empty = map card with directions button.
  mapsEmbedUrl: process.env.NEXT_PUBLIC_MAPS_EMBED_URL || "",
  // Paste the Google review link (g.page/r/...) when the listing is back.
  reviewsHref: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "",
  rating: { value: 4.8, count: 150 },
  checkIn: "12:00",
  checkOut: "11:00",
  gst: "06BYNPA8832J1ZQ",
} as const

export type Room = {
  slug: string
  name: string
  price: number
  tagline: string
  description: string
  size: string
  floor: string
  maxGuests: number
  features: string[]
  almirah: boolean
  image: string
}

export const rooms: Room[] = [
  {
    slug: "standard-ac-room",
    name: "Standard AC Room",
    price: 800,
    tagline: "Best value AC room in Barwala",
    description:
      "A clean, compact air-conditioned room for solo travellers, drivers and short business stops in Barwala. Everything you need for a good night's sleep at the lowest price.",
    size: "Compact",
    floor: "Lower floor",
    maxGuests: 2,
    features: ["Air conditioning", "Double bed", "LED TV", "Attached bathroom", "Free Wi-Fi", "Hot water"],
    almirah: false,
    image: "/images/lazeez-hotel-ac-rooms-rooftop.webp",
  },
  {
    slug: "deluxe-ac-room",
    name: "Deluxe AC Room",
    price: 1000,
    tagline: "More space + almirah for longer stays",
    description:
      "A larger air-conditioned room with a wardrobe (almirah) to unpack properly. Good for couples, families visiting relatives and guests staying two nights or more.",
    size: "Medium",
    floor: "Upper floor",
    maxGuests: 2,
    features: ["Air conditioning", "Almirah (wardrobe)", "Double bed", "LED TV", "Attached bathroom", "Free Wi-Fi"],
    almirah: true,
    image: "/images/lazeez-hotel-barwala-front-day.webp",
  },
  {
    slug: "super-deluxe-ac-room",
    name: "Super Deluxe AC Room",
    price: 1200,
    tagline: "Our biggest room, with almirah",
    description:
      "Our most spacious air-conditioned room with an almirah and extra floor space. Pick this for families, wedding guests and anyone who wants the most comfortable stay in Barwala.",
    size: "Largest",
    floor: "Top floor",
    maxGuests: 3,
    features: ["Air conditioning", "Almirah (wardrobe)", "Largest room size", "LED TV", "Attached bathroom", "Free Wi-Fi"],
    almirah: true,
    image: "/images/lazeez-hotel-barwala-front-evening.webp",
  },
]

export const amenities = [
  "All rooms fully air-conditioned",
  "Free Wi-Fi",
  "LED TV in every room",
  "Attached bathroom with hot water",
  "In-house restaurant",
  "DJ party hall for small events",
  "Room service",
  "CCTV security",
  "Parking space",
  "24x7 front desk",
]

export const faqs = [
  {
    q: "What is the room price at Hotel Lazeez Barwala?",
    a: "All rooms are AC. Standard AC Room is ₹800 per night, Deluxe AC Room is ₹1,000 per night and Super Deluxe AC Room is ₹1,200 per night. The ₹1,000 and ₹1,200 rooms include an almirah (wardrobe).",
  },
  {
    q: "Are all rooms air-conditioned?",
    a: "Yes. Every room at Hotel Lazeez is fully air-conditioned. The room types differ only by size and floor, and the ₹1,000 and ₹1,200 rooms also have an almirah.",
  },
  {
    q: "Where is Hotel Lazeez located?",
    a: "Hotel Lazeez is on Hansi Road in Barwala, district Hisar, Haryana 125121, at Shop No. 202-203, Taj Colony, near Bajaj Finance. Barwala is about 32 km from Hisar city by road.",
  },
  {
    q: "How do I book a room?",
    a: "Call or WhatsApp +91 91291 91900, or send a booking request from the Book Now page. We confirm availability by phone.",
  },
  {
    q: "Is Hotel Lazeez good for families and couples?",
    a: "Yes. Guests rate us 4.8 out of 5 from 150+ reviews for cleanliness, safety and friendly staff. Rooms have CCTV-monitored corridors and a 24x7 front desk.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 12:00 noon and check-out is by 11:00 am. Early check-in or late check-out depends on availability. Please call ahead.",
  },
  {
    q: "Does the hotel have food and a party hall?",
    a: "Yes. Hotel Lazeez has an in-house restaurant and a DJ party hall for birthdays, kitty parties and small family functions. Call us for menu and hall booking.",
  },
  {
    q: "Is Hotel Lazeez near Hisar?",
    a: "Barwala is about 32 km (around 40 minutes by road) from Hisar. Many guests who visit Hisar, Hansi, Uklana and nearby villages stay with us for lower prices and a quieter stay.",
  },
]
