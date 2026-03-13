'use client'

import { useState, useEffect, useCallback } from 'react'
import ThemeToggle from './ThemeToggle'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.to)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          // Pick the one closest to the top
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -50% 0px', threshold: 0 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }, [])

  const linkClass = (sectionId: string) =>
    `cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
      activeSection === sectionId
        ? 'text-primary bg-primary/10'
        : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
    }`

  const mobileLinkClass = (sectionId: string) =>
    `cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 text-center ${
      activeSection === sectionId
        ? 'text-primary bg-primary/10'
        : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="flex items-center gap-1 px-4 py-2 rounded-full
                      bg-surface/80 backdrop-blur-md border border-border
                      shadow-lg transition-all duration-300 max-w-fit">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              onClick={(e) => handleClick(e, item.to)}
              className={linkClass(item.to)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-border mx-1" />

        <ThemeToggle />
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 md:hidden
                        bg-surface/95 backdrop-blur-md border border-border
                        rounded-2xl shadow-xl p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              onClick={(e) => handleClick(e, item.to)}
              className={mobileLinkClass(item.to)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
