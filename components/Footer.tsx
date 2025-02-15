import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; 2023 Mon Portfolio. Tous droits réservés.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/votre-profile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/votre-handle" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

