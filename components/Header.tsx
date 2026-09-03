import Link from "next/link"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-xl font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            AH
          </span>
          <span className="hidden sm:inline">Antoine HURET</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="#about" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground">
            À propos
          </Link>
          <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground">
            Parcours
          </Link>
          <Link href="#formation" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">
            Formation
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Button variant="outline" size="sm" className="sm:h-9 sm:px-4" asChild>
            <a href="https://www.linkedin.com/in/antoinehuret/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
