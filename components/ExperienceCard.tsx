import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  image: string
  url: string
  technologies: string[]
}

export function ExperienceCard({ title, company, period, description, image, url, technologies }: ExperienceCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${company} website`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center gap-2 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
            Visiter le site
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

