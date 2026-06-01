import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saugat Dawadi - Frontend Developer",
    short_name: "Saugat Dawadi",
    description:
      "Frontend developer based in Kathmandu, Nepal, specializing in React, Next.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}