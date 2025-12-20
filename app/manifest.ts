import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Language Learning Game",
    short_name: "LanguageGame",
    description: "Open Source AI Language Learning Game - Match phrases with translations",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f4",
    theme_color: "#78716c",
    icons: [
      {
        src: "/icon-192.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
