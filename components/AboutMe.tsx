import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa6'
import { FiArrowDown } from 'react-icons/fi'
import Image from 'next/image'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/carlossaboya/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/cadusaboya', icon: FaGithub, label: 'GitHub' },
  { href: 'https://medium.com/@carlosepsaboya', icon: FaMedium, label: 'Medium' },
]

const AboutMe = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* Ambient glow */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        {/* Left — Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Mobile photo */}
          <div className="relative mb-6 md:hidden">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary via-accent to-primary opacity-50 blur-2xl animate-pulse" />
            <Image
              src="/my-img.jpeg"
              alt="Carlos Saboya"
              width={400}
              height={400}
              className="relative rounded-2xl border-4 border-background object-cover object-top w-52 h-52"
              priority
              quality={95}
            />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-text-primary mb-4 tracking-tight leading-[0.9]">
            Carlos<br /><span className="gradient-text">Saboya</span>
          </h1>

          <p className="text-xl sm:text-2xl text-text-secondary font-semibold mb-5">
            I build SaaS platforms from zero to production.
          </p>

          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-lg mb-8">
            Full-stack engineer with a Mechatronics Engineering degree from UFMG.
            I build with TypeScript, React, Next.js, Python, and Django. From database
            design to cloud deployment, I own the entire stack.
            Fluent in English and Portuguese.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-0">
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

        </div>

        {/* Right — Photo */}
        <div className="relative hidden md:block self-stretch w-80 lg:w-96 flex-shrink-0">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary via-accent to-primary opacity-50 blur-2xl animate-pulse" />
          <Image
            src="/my-img.jpeg"
            alt="Carlos Saboya"
            fill
            className="rounded-2xl border-4 border-background object-cover object-[50%_30%]"
            priority
            quality={95}
          />
        </div>
      </div>

      {/* Social links */}
      <div className="flex items-center justify-center md:justify-start gap-1.5 mt-4">
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
      <div className="flex justify-center mt-12 animate-bounce text-text-muted">
        <FiArrowDown className="w-5 h-5" />
      </div>
    </section>
  )
}

export default AboutMe
