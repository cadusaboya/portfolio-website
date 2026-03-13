import BlogCard from './BlogCard'
import { Article } from '@/data/articles'

interface NewsListProps {
  articles: Article[]
}

const NewsList = ({ articles }: NewsListProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
      {articles.map((article) => (
        <BlogCard
          key={article.id}
          title={article.title}
          description={article.description}
          image={article.image}
          url={article.url}
          date={article.date}
        />
      ))}

      <a
        href="https://medium.com/@carlosepsaboya"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                   border border-primary text-primary font-medium text-sm
                   hover:bg-primary hover:text-white transition-all duration-200"
      >
        Check my Medium blog
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}

export default NewsList
