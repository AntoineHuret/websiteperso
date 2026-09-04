import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import ScrollProgress from "@/components/ScrollProgress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antoinehuret.com"),
  // 48 caractères : Google tronque au-delà d’environ 60, l’intitulé de poste
  // exact passe donc en entier.
  title: "Antoine HURET — Lead Product Manager Marketplace",
  // 154 caractères : au-delà d’environ 155, Google coupe au milieu d’un mot.
  description:
    "Lead Product Manager Marketplace chez Digisap Solutions. Acquisition, produit, data, code. 10 ans de growth & CRO chez Swatch, Disneyland Paris, Carglass.",
  keywords: [
    "Antoine Huret",
    "Product Manager",
    "Lead Product Manager",
    "Product Manager full-stack",
    "Marketplace",
    "SaaS",
    "Growth",
    "CRO",
    "E-commerce",
    "Marketing Digital",
    "SEO",
    "SEA",
    "Paris",
  ],
  openGraph: {
    title: "Antoine HURET — Lead Product Manager Marketplace",
    description:
      "Lead Product Manager Marketplace chez Digisap Solutions. Acquisition, produit, data et code — Swatch, Disneyland Paris, Carglass, Le Masque Français.",
    url: "https://www.antoinehuret.com",
    siteName: "Antoine HURET",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine HURET — Lead Product Manager Marketplace",
    description:
      "Lead Product Manager Marketplace chez Digisap Solutions. Acquisition, produit, data et code — Swatch, Disneyland Paris, Carglass, Le Masque Français.",
  },
  alternates: {
    canonical: "https://www.antoinehuret.com",
  },
}

// Données structurées : permettent à Google d’identifier la page comme le
// profil d’une personne et de la relier à ses profils LinkedIn et GitHub.
const personneJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antoine Huret",
  url: "https://www.antoinehuret.com",
  image: "https://www.antoinehuret.com/profil.jpg",
  jobTitle: "Lead Product Manager Marketplace",
  description:
    "Lead Product Manager Marketplace chez Digisap Solutions : acquisition, produit, data et code.",
  worksFor: { "@type": "Organization", name: "Digisap Solutions" },
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Le Wagon" },
    { "@type": "EducationalOrganization", name: "INSEEC" },
  ],
  knowsAbout: ["Product Management", "Marketplace", "SaaS", "E-commerce", "Growth", "CRO", "SEO"],
  sameAs: [
    "https://www.linkedin.com/in/antoinehuret/",
    "https://github.com/AntoineHuret",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personneJsonLd) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
