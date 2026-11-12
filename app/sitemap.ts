import type { MetadataRoute } from "next"
import { rooms, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const img = (p: string) => `${site.url}${p}`
  const pages: { path: string; priority: number; images?: string[] }[] = [
    {
      path: "/",
      priority: 1,
      images: [
        img("/images/lazeez-hotel-ac-rooms-rooftop.webp"),
        img("/images/lazeez-hotel-barwala-front-evening.webp"),
        img("/images/lazeez-hotel-barwala-front-day.webp"),
      ],
    },
    { path: "/rooms", priority: 0.9 },
    ...rooms.map((r) => ({ path: `/rooms/${r.slug}`, priority: 0.8, images: [img(r.image)] })),
    { path: "/booking", priority: 0.8 },
    { path: "/barwala-guide", priority: 0.7 },
    { path: "/restaurant-in-barwala", priority: 0.6 },
    { path: "/party-hall-in-barwala", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/about", priority: 0.6 },
  ]
  return pages.map(({ path, priority, images }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
    ...(images ? { images } : {}),
  }))
}
