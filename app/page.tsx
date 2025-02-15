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
              {/* Expériences ici */}
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
