import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa6'
import { FiArrowDown } from 'react-icons/fi'
import Image from 'next/image'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/carlossaboya/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/cadusaboya', icon: FaGithub, label: 'GitHub' },
  { href: 'https://medium.com/@carlosepsaboya', icon: FaMedium, label: 'Medium' },
  { href: 'https://www.instagram.com/cadusaboya_', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://web.whatsapp.com/send?phone=+5591984147769', icon: FaWhatsapp, label: 'WhatsApp' },
]

const AboutMe = () => {
  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* Ambient glow */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <div className="relative flex flex-col items-center text-center">
        {/* Profile image */}
        <div className="relative mb-8">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-60 blur-lg animate-pulse" />
          <Image
            src="/my-img.jpeg"
            alt="Carlos Saboya"
            width={320}
            height={320}
            className="relative rounded-full border-4 border-background object-cover w-40 h-40"
            priority
            quality={95}
          />
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-3 tracking-tight">
          Carlos <span className="gradient-text">Saboya</span>
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary font-medium mb-6">
          Full-Stack Software Engineer
        </p>

        <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8">
          I architect and build web &amp; mobile applications end-to-end,
          from system design to App Store deployment.
          Fluent in English and Portuguese.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <a
            href="/Resume.pdf"
            download
            className="px-7 py-3 rounded-full bg-primary text-white font-medium text-sm
                       hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5
                       shadow-lg shadow-primary/25"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border text-text-primary font-medium text-sm
                       hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-2.5 mb-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-surface border border-border
                         text-text-secondary hover:text-primary hover:border-primary
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce text-text-muted">
          <FiArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
