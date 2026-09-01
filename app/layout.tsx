import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import ScrollProgress from "@/components/ScrollProgress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antoinehuret.com"),
  title: "Antoine HURET — Product Manager full-stack | Marketplace, SaaS & eCommerce",
  description:
    "Portfolio d'Antoine HURET, Lead Product Manager Marketplace. +10 ans d'expérience en marketing digital, e-commerce et CRO (Swatch, Nissan, Disneyland Paris, BMW, Carglass, Le Masque Français, Coopleo) et développeur web full-stack certifié Le Wagon.",
  keywords: [
    "Antoine Huret",
    "Lead Product Manager",
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
    title: "Antoine HURET — Product Manager full-stack | Marketplace, SaaS & eCommerce",
    description:
      "+10 ans d'expérience en marketing digital, e-commerce et CRO. Lead Product Manager Marketplace et développeur web full-stack certifié Le Wagon.",
    url: "https://www.antoinehuret.com",
    siteName: "Antoine HURET",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/profil.jpg", width: 400, height: 400, alt: "Antoine HURET" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
