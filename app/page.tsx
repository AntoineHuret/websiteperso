import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ExperienceCard } from "@/components/ExperienceCard"

const stats = [
  { value: "+10 ans", label: "d'expérience digitale" },
  { value: "1 → 5 M€", label: "de CA e-commerce en 12 mois (Le Masque Français)" },
  { value: "×22", label: "de croissance SEO (Coopleo)" },
  { value: "−50 %", label: "de coût d'acquisition client (Coopleo)" },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="space-y-8 max-w-4xl">
            <div className="relative w-48 h-48 mx-auto mb-8 animate-fade-in">
              <Image
                src="/profil.jpg"
                alt="Antoine HURET"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance animate-fade-in-up">
              Product Manager
              <span className="block text-primary">Growth, CRO &amp; E-commerce</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-200 text-balance">
              +10 ans d&apos;expérience digitale — de Swatch à Disneyland Paris, de Carglass au lancement
              d&apos;e-commerces et de produits SaaS. Aujourd&apos;hui Product Owner SaaS chez Digisap Solutions,
              et développeur web full-stack certifié Le Wagon.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
              <Button className="bg-primary hover:bg-primary/90" size="lg" asChild>
                <a href="#experience">
                  Voir mon parcours
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center space-y-2">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground text-balance">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Expertises</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Growth &amp; Marketing Digital</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Growth (AARRR)</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">SEO / SEA</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">E-Commerce</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">CRO &amp; AB Testing</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Analytics &amp; Tracking</Badge>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Product Owner SaaS</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Discovery &amp; Roadmap</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Product Marketing</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Design Figma</Badge>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Développement Web</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">React / Next.js</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Ruby on Rails</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">PostgreSQL</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Certifié Le Wagon (2024)</Badge>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Parcours</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExperienceCard
                title="PRODUCT OWNER SAAS"
                company="Digisap Solutions"
                period="Aujourd'hui"
                description="Pilotage produit d'une solution SaaS : discovery, roadmap, delivery et croissance du produit."
                technologies={["Product Ownership", "SaaS", "Roadmap", "Agile"]}
              />

              <ExperienceCard
                title="PRODUCT BUILDER"
                company="LogiCaps"
                period="2024 – 2025"
                description="Co-développement du SaaS LogiCaps, de la conception au lancement : produit, développement full-stack et growth."
                image="/images/logicaps.webp"
                technologies={["SaaS", "Full-Stack", "Ruby on Rails", "Growth"]}
              />

              <ExperienceCard
                title="HEAD OF GROWTH & ACQUISITION"
                company="COOPLEO.care"
                period="Jan. 2024 – 2025"
                description="Structuration du growth (AARRR) et test du Product Market Fit : trafic SEO multiplié par 22, coût d'acquisition divisé par 2. SEO, SEA, réseaux sociaux, CRM."
                image="/images/coopleo.webp"
                url="https://www.coopleo.care"
                technologies={["Growth", "SEO", "SEA", "CRM", "Analytics"]}
              />

              <ExperienceCard
                title="DIRECTEUR E-COMMERCE"
                company="Le Masque Français"
                period="Sept. 2022 – Déc. 2023"
                description="Lancement et pilotage du site Shopify : chiffre d'affaires porté de 1 à 5 M€ en 12 mois. Responsable de l'acquisition et du CRO."
                image="/images/le-masque-francais.webp"
                url="https://getlemasquefrancais.com"
                technologies={["Shopify", "E-commerce", "CRO", "Acquisition"]}
              />

              <ExperienceCard
                title="LEAD DIGITAL CRO"
                company="Carglass"
                period="Mars 2021 – Sept. 2022"
                description="Optimisation du parcours utilisateur et analyse des performances digitales. Responsable analytics et tracking."
                image="/images/carglass.webp"
                url="https://www.carglass.fr"
                technologies={["AB Testing", "UX", "Analytics", "GTM"]}
              />

              <ExperienceCard
                title="DIGITAL MARKETING MANAGER"
                company="BMW"
                period="2019 – 2020"
                description="Challenge de l'agence média et coach de l'équipe Media Digital : KPIs, analyses & reporting."
                image="/images/bmw.webp"
                url="https://www.bmw.fr"
                technologies={["Media", "Analytics", "Reporting", "Team Management"]}
              />

              <ExperienceCard
                title="DIGITAL MARKETING MANAGER"
                company="Disneyland Paris"
                period="2018 – 2019"
                description="Responsable de l'analyse de l'expérience utilisateur et coach de l'équipe sur les analyses UX."
                image="/images/disney.webp"
                url="https://www.disneylandparis.com"
                technologies={["UX", "Content Square", "Analytics", "CRO"]}
              />

              <ExperienceCard
                title="DIGITAL MARKETING MANAGER"
                company="Nissan Europe"
                period="2017 – 2018"
                description="Management d'une équipe de 15 personnes. Analyse des performances médias pour le TOP Management."
                image="/images/nissan.webp"
                url="https://www.nissan.fr"
                technologies={["Team Management", "Media", "Analytics", "IA"]}
              />

              <ExperienceCard
                title="E-COMMERCE MANAGER"
                company="Swatch"
                period="Fév. 2014 – Jan. 2017"
                description="Responsable de la stratégie média : SEA, réseaux sociaux, CRM. Responsable du service client."
                image="/images/swatch.webp"
                url="https://www.swatch.com"
                technologies={["E-commerce", "SEA", "Social Media", "CRM"]}
              />
            </div>
          </div>
        </section>

        {/* Formation Section */}
        <section id="formation" className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Développeur Web Full-Stack</h3>
                  <p className="text-muted-foreground">Le Wagon — 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ruby on Rails, JavaScript, React, PostgreSQL, Git.
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">INSEEC Business School</h3>
                  <p className="text-muted-foreground">Bordeaux</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Marketing digital et management.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-balance">
              Un projet growth, product ou e-commerce ? Discutons-en.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="mailto:huretantoine@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/antoinehuret/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://github.com/AntoineHuret" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <div className="inline-flex items-center gap-2 h-9 px-4 py-2 text-sm font-medium text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Paris
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
