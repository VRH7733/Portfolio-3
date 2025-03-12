import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  scrollToSection: (sectionId: string) => void
}

export default function Navbar({ theme, toggleTheme, scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About', sectionId: 'about' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Contact', sectionId: 'contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            V Raghavendra
          </h1>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className={`px-2 py-2 mt-1 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === item.sectionId
                  ? ' text-primary-500 text-lg dark:text-primary-500'
                  : 'text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'
                  }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.sectionId)
                  setIsOpen(false)
                }}
                className={`block w-full text-left px-2 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === item.sectionId
                  ? 'bg-primary-500 text-white dark:bg-primary-600'
                  : 'text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-800'
                  }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="block w-full text-left px-2 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-2"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

