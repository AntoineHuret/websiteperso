import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react"
import Header from "@/components/Header"
import { ExperienceCard } from "@/components/ExperienceCard"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="space-y-8 max-w-4xl">
            <div className="relative w-48 h-48 mx-auto mb-8 animate-fade-in">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edited_image.jpg-9uG4bsrnyuxtr7gKWp8Llnh1kXXDYD.jpeg"
                alt="Antoine HURET"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-balance animate-fade-in-up">
              Expert en Marketing Digital & Développement Web
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
              +10 ans d&apos;expérience en Growth, E-commerce et Développement Web
            </p>
            <Button className="bg-primary hover:bg-primary/90 animate-fade-in-up delay-300" size="lg">
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Expertises</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Marketing Digital</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Growth (AARRR)</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">E-Commerce</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Acquisition</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">CRO</Badge>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Product Marketing</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Design Figma</Badge>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Développement</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">React</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Ruby on Rails</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">PostgreSQL</Badge>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Expériences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExperienceCard
                title="HEAD OF GROWTH & ACQUISITION"
                company="COOPLEO.care"
                period="Jan. 2024 – Aujourd'hui"
                description="Conseil en stratégie et test du Product Market Fit. Responsable growth (AARRR) : SEO, SEA, Réseaux sociaux, CRM."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coopleo.jpg-ZT5MryZJU5eaO49ck1otd2UuGPxrkc.jpeg"
                url="https://www.coopleo.care"
                technologies={["Growth", "SEO", "SEA", "CRM", "Analytics"]}
              />

              <ExperienceCard
                title="DIRECTEUR E-COMMERCE"
                company="Le Masque Français"
                period="Sept. 2022 – Dec. 2023"
                description="Lancement du site Ecommerce durant la pandémie de COVID. Responsable du site (Shopify) de l'acquisition et du CRO."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/le%20masque%20francais-wtSHzxLRHQhjvyyDVnrXrDpa0Dqjxl.webp"
                url="https://getlemasquefrancais.com"
                technologies={["Shopify", "E-commerce", "CRO", "Marketing"]}
              />

              <ExperienceCard
                title="LEAD DIGITAL CRO"
                company="Carglass"
                period="Mars 2021 – Sept. 2022"
                description="Optimisation du parcours utilisateur et analyse des performances digitales. Responsable analytics et tracking."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carglass.jpg-TgOXzyerPiaRhbp7azI9gawiGJDpS6.webp"
                url="https://www.carglass.fr"
                technologies={["AB Testing", "UX", "Analytics", "GTM"]}
              />

              <ExperienceCard
                title="DIGITAL MARKETING MANAGER"
                company="BMW"
                period="2019 – 2020"
                description="Challenge de l'agence média et coach de l'équipe Media Digital : KPIs, analyses & reporting."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bmw-CeaE8QtkbvZGhSFNvZNHeFd97PkAwV.webp"
                url="https://www.bmw.fr"
                technologies={["Media", "Analytics", "Reporting", "Team Management"]}
              />

              <ExperienceCard
                title="DIGITAL MARKETING MANAGER"
                company="Disneyland Paris"
                period="2018 – 2019"
                description="Responsable de l'analyse de l'expérience utilisateur et coach de l'équipe sur les analyses UX."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney.jpg-TXZAQO4szpxwVzzoRguiHMCX8G5901.jpeg"
                url="https://www.disneylandparis.com"
                technologies={["UX", "Content Square", "Analytics", "CRO"]}
              />

              <ExperienceCard
                title="DIGITAL MARKETING MANAGER"
                company="Nissan Europe"
                period="2017 – 2018"
                description="Management d'une équipe de 15 personnes. Analyse des performances médias pour le TOP Management."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QashqaiDesktop_nov.jpg-YS3AQmM00JiGSt4zchQw729mh1RO15.jpeg"
                url="https://www.nissan.fr"
                technologies={["Team Management", "Media", "Analytics", "IA"]}
              />

              <ExperienceCard
                title="E-COMMERCE MANAGER"
                company="Swatch"
                period="Fév. 2014 – Jan. 2017"
                description="Responsable de la stratégie média : SEA, Réseaux sociaux, CRM. Responsable du service client."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swatch.jpg-6HLYEvjKeZkpWsjQcBUvnWVxsxansw.jpeg"
                url="https://www.swatch.com"
                technologies={["E-commerce", "SEA", "Social Media", "CRM"]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Contact</h2>
            <div className="flex justify-center gap-8">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                Téléphone
              </Button>
              <Button variant="outline" className="gap-2">
                <MapPin className="h-4 w-4" />
                Paris
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
