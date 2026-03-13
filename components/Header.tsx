'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="flex items-center gap-1 px-4 py-2 rounded-full
                      bg-surface/80 backdrop-blur-md border border-border
                      shadow-lg transition-all duration-300 max-w-fit">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              activeClass="!text-primary !bg-primary/10"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium
                         text-text-secondary hover:text-text-primary hover:bg-surface-hover
                         transition-all duration-200"
            >
              {item.label}
            </Link>
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
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer px-4 py-2 rounded-xl text-text-secondary
                         hover:text-text-primary hover:bg-surface-hover
                         transition-all duration-200 text-center"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
