import { site, rooms, faqs } from "./site"

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${site.url}/#hotel`,
    name: site.name,
    alternateName: [site.altName, "Lazeez Hotel", "Hotel Lazeez Barwala Hisar"],
    description:
      "Fully AC budget hotel in Barwala, Hisar (Haryana) on Hansi Road. AC rooms at ₹800, ₹1,000 and ₹1,200 per night, in-house restaurant and DJ party hall. Rated 4.8/5 by 150+ guests.",
    url: site.url,
    image: [`${site.url}/og-image.jpg`, `${site.url}/images/lazeez-hotel-barwala-front-day.webp`],
    telephone: site.phone,
    email: site.email,
    priceRange: "₹800 - ₹1,200",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    checkinTime: site.checkIn,
    checkoutTime: site.checkOut,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: site.directionsHref,
    areaServed: ["Barwala", "Hisar", "Hansi", "Uklana", "Agroha", "Haryana"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    amenityFeature: [
      "Air conditioning",
      "Free Wi-Fi",
      "Restaurant",
      "Room service",
      "Parking",
      "24-hour front desk",
      "Party hall",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    makesOffer: rooms.map((r) => ({
      "@type": "Offer",
      name: r.name,
      price: r.price,
      priceCurrency: "INR",
      url: `${site.url}/rooms#${r.slug}`,
      itemOffered: {
        "@type": "HotelRoom",
        name: r.name,
        description: r.description,
        occupancy: { "@type": "QuantitativeValue", maxValue: r.maxGuests },
        amenityFeature: r.features.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
      },
    })),
  }
}

export function faqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  }
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
