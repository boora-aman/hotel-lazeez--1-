import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { path: "/", priority: 1 },
    { path: "/rooms", priority: 0.9 },
    { path: "/booking", priority: 0.8 },
    { path: "/barwala-guide", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/about", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }))
}
