import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown, BadgeCheck, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react"
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
              Lead Product Manager
              <span className="block text-primary">Marketplace, eCommerce &amp; CRO</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-200 text-balance">
              +10 ans d&apos;expérience en marketing digital, e-commerce et CRO, en B2C et B2B2C — du conseil
              (BMW, Disneyland Paris, Nissan Europe) aux annonceurs (Swatch, Carglass, Le Masque Français).
              Aujourd&apos;hui Product Manager Marketplace chez Digisap Solutions, et développeur web
              full-stack certifié Le Wagon (titre RNCP niveau 6).
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
                    <Badge variant="outline">CRO &amp; AB Testing (Optimizely)</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Analytics &amp; Tracking (GTM)</Badge>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Lead Product Manager Marketplace</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Marketplace &amp; SaaS</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">No-code &amp; IA</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">UX &amp; Design Figma</Badge>
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
                title="SEO & GROWTH"
                company="Accès SAP (Digisap Solutions)"
                period="Aujourd'hui"
                description="Acquisition B2C du leader français des coopératives de services à la personne (8 500 indépendants) : audit SEO technique complet de la plateforme de leads EntretienDeJardin.com, puis refonte intégrale du site par IA (Claude Code, CMS headless Sanity, GitHub) avec évolution vers une application à comptes utilisateurs. Pilotage SEA/ROAS et benchmark marketplace des acteurs B2C du secteur."
                image="/images/acces-sap.webp"
                technologies={["SEO", "Growth", "SEA", "IA", "Product"]}
              />

              <ExperienceCard
                title="PRODUCT MANAGER MARKETPLACE"
                company="Digisap Solutions — CDI"
                period="Sept. 2024 – Aujourd'hui"
                description="Éditeur logiciel de solutions SaaS dédiées aux artisans, TPE & PME. Pilotage produit de la marketplace : discovery, roadmap, delivery et croissance."
                image="/images/logicaps.webp"
                technologies={["Product Management", "Marketplace", "Roadmap", "Agile"]}
              />

              <ExperienceCard
                title="HEAD OF GROWTH"
                company="COOPLEO.care — Freelance"
                period="Janv. 2024 – Juil. 2024"
                description="Go-to-Market Strategy & Acquisition : trafic SEO multiplié par 22, coût d'acquisition divisé par 2. SEO, SEA, réseaux sociaux, CRM."
                image="/images/coopleo.webp"
                url="https://www.coopleo.care"
                technologies={["Growth", "SEO", "Google Ads", "Clarity", "CRM"]}
              />

              <ExperienceCard
                title="GROWTH & E-COMMERCE MANAGER"
                company="Le Masque Français — CDI"
                period="Janv. 2022 – Déc. 2023"
                description="Vente de masques chirurgicaux — top 3 France. Pilotage du site Shopify : chiffre d'affaires porté de 1 à 5 M€ en 12 mois. Acquisition et CRO."
                image="/images/le-masque-francais.webp"
                url="https://getlemasquefrancais.com"
                technologies={["Shopify", "E-commerce", "SEA", "CRO"]}
              />

              <ExperienceCard
                title="DIGITAL CONVERSION MANAGER — CRO"
                company="Carglass France — CDI"
                period="Sept. 2020 – Déc. 2021"
                description="Amélioration continue du parcours client digital : définition, implémentation et analyse des AB Tests. Optimisation de la conversion."
                image="/images/carglass.webp"
                url="https://www.carglass.fr"
                technologies={["CRO", "AB Testing", "Optimizely", "Analytics"]}
              />

              <ExperienceCard
                title="SENIOR CONSULTANT — EQUANCY"
                company="Mission BMW"
                period="Janv. 2017 – Août 2020"
                description="Conseil en performance marketing & web analytics : challenge de l'agence média et coaching de l'équipe Media Digital — KPIs, analyses & reporting."
                image="/images/bmw.webp"
                url="https://www.bmw.fr"
                technologies={["Media", "Analytics", "Reporting", "Conseil"]}
              />

              <ExperienceCard
                title="SENIOR CONSULTANT — EQUANCY"
                company="Mission Disneyland Paris"
                period="Janv. 2017 – Août 2020"
                description="Conseil en performance marketing & web analytics : analyse de l'expérience utilisateur et coaching de l'équipe sur les analyses UX."
                image="/images/disney.webp"
                url="https://www.disneylandparis.com"
                technologies={["UX", "Content Square", "Analytics", "CRO"]}
              />

              <ExperienceCard
                title="SENIOR CONSULTANT — EQUANCY"
                company="Mission Nissan Europe"
                period="Janv. 2017 – Août 2020"
                description="Conseil en performance marketing & web analytics : management d'une équipe de 15 personnes, analyse des performances médias pour le top management."
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
                  <p className="text-muted-foreground">Le Wagon Paris (batch #1510) — 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ruby on Rails, API, JavaScript, PostgreSQL. Titre RNCP niveau 6 « Concepteur -
                    Développeur d&apos;Applications Web » obtenu en sept. 2024.
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">BBA INSEEC</h3>
                  <p className="text-muted-foreground">Master, Finance — 2009 – 2013</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    1<sup>er</sup> prix du concours entrepreneurial de l&apos;INSEEC.
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Concepteur - Développeur d&apos;Applications Web, RNCP niveau 6 (Le Wagon, 2024) ·
                    Google Tag Manager Fundamentals (Google).
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
