import Script from "next/script"

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saugat Dawadi",
    url: "https://saugatdawadi.com",
    image: "https://saugatdawadi.com/og-image.png",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer based in Kathmandu, Nepal, specializing in React, Next.js, and TypeScript. Crafting pixel-perfect, accessible user interfaces with modern web technologies.",
    email: "saugatdwd@gmail.com",
    telephone: "+977 9840298682",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://github.com/saugatdwd",
      "https://linkedin.com/in/saugat-dawadi-475b0619b",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "React Native",
      "Expo",
      "Frontend Development",
      "Web Development",
      "UI/UX Design",
    ],
    worksFor: {
      "@type": "Organization",
      name: "E-Signature Pvt Ltd",
    },
  }

  return (
    <Script
      id="json-ld-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}