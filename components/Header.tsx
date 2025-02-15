import Link from "next/link"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Antoine HURET
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
            À propos
          </Link>
          <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground">
            Expérience
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Button variant="outline">CV PDF</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header

