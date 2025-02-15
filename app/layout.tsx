import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Antoine HURET - Expert en Marketing Digital",
  description: "Portfolio professionnel d'Antoine HURET, expert en Marketing Digital avec plus de 10 ans d'expérience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  )
}

