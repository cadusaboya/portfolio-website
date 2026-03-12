import { FaGithub } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  imageUrl: string
  skills: string[]
  githubUrl?: string
  mediumUrl?: string
  liveUrl?: string
  featured?: boolean
}

const Card = ({ title, description, imageUrl, skills, githubUrl, mediumUrl, liveUrl, featured }: CardProps) => {
  if (featured) {
    return (
      <article className="glow-border group bg-surface border border-border rounded-2xl
                          overflow-hidden w-full transition-all duration-300
                          hover:shadow-2xl hover:shadow-primary/10">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative overflow-hidden md:w-1/2 aspect-video md:aspect-auto md:min-h-[360px]">
            <Image
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src={imageUrl}
              alt={`Screenshot of ${title}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content */}
          <div className="p-7 md:p-10 md:w-1/2 flex flex-col justify-center">
            <span className="inline-block text-xs font-bold gradient-text uppercase tracking-widest mb-3">
              Featured Project
            </span>
            <h3 className="text-3xl font-bold text-text-primary mb-4">{title}</h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {description}
            </p>

            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill) => (
                  <span key={skill}
                    className="skill-tag inline-block bg-primary/10 text-primary rounded-full
                               px-3 py-1 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary
                             hover:text-text-primary transition-colors font-medium">
                  <FaGithub size={18} /> Source Code
                </a>
              )}
              {mediumUrl && (
                <a href={mediumUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary
                             hover:text-text-primary transition-colors font-medium">
                  <FiExternalLink size={16} /> Case Study
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary
                             hover:text-text-primary transition-colors font-medium">
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="card-container group bg-surface border border-border rounded-2xl
                        overflow-hidden w-full transition-all duration-300
                        hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-video">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          src={imageUrl}
          alt={`Screenshot of ${title}`}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-text-primary">{title}</h3>
          <div className="flex items-center gap-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label={`View ${title} on GitHub`}>
                <FaGithub size={20} />
              </a>
            )}
            {mediumUrl && (
              <a href={mediumUrl} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label={`Read about ${title} on Medium`}>
                <FaMedium size={20} />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label={`View ${title} live`}>
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill}
                className="skill-tag inline-block bg-primary/10 text-primary rounded-full
                           px-3 py-1 text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default Card
