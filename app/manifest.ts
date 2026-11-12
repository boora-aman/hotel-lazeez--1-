import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotel Lazeez Barwala",
    short_name: "Hotel Lazeez",
    description: "Fully AC hotel in Barwala, Hisar. Rooms ₹800, ₹1000, ₹1200.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F172A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}
