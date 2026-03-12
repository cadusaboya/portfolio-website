import Header from '@/components/Header'
import Card from '@/components/Card'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import NewsList from '@/components/NewsList'
import ContactForm from '@/components/ContactForm'
import SectionObserver from '@/components/SectionObserver'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa6'
import { featuredProject, otherProjects } from '@/data/projects'

const footerLinks = [
  { href: 'https://www.linkedin.com/in/carlossaboya/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/cadusaboya', icon: FaGithub, label: 'GitHub' },
  { href: 'https://medium.com/@carlosepsaboya', icon: FaMedium, label: 'Medium' },
]

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <SectionObserver />

      {/* Hero */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-16 pb-8">
        <AboutMe />
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-surface/40">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-2xl sm:text-3xl font-bold text-text-primary text-center mb-14">
            Featured Work
          </h2>
          <Card {...featuredProject} featured />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {otherProjects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog - temporarily hidden
      <section id="blog" className="py-24 bg-surface/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-2xl sm:text-3xl font-bold text-text-primary text-center mb-4">
            Writing
          </h2>
          <p className="text-text-muted text-center mb-14 max-w-md mx-auto">
            I document my engineering journey and the lessons I learn along the way.
          </p>
          <NewsList />
        </div>
      </section>
      */}

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-2xl sm:text-3xl font-bold text-text-primary text-center mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-text-muted text-center mb-14 max-w-md mx-auto">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Carlos Saboya
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
