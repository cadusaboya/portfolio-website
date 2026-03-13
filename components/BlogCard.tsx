import Image from 'next/image'

interface BlogCardProps {
  title: string
  description: string
  image: string
  url: string
  date: string
}

const BlogCard = ({ title, description, image, url, date }: BlogCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-container group flex flex-col sm:flex-row bg-surface border border-border
                 rounded-2xl overflow-hidden max-w-2xl w-full
                 hover:border-primary/30 transition-all duration-300"
    >
      {/* Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
        <time className="text-xs text-text-muted font-medium uppercase tracking-wide mb-2">
          {date}
        </time>
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary
                       transition-colors duration-200">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="relative sm:w-56 h-48 sm:h-auto sm:min-h-[200px] overflow-hidden shrink-0">
        <Image
          src={image}
          alt={`Blog: ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, 224px"
          quality={90}
          className="object-cover transition-transform duration-500
                     group-hover:scale-105"
        />
      </div>
    </a>
  )
}

export default BlogCard
