import Parser from 'rss-parser'
import { Article } from '@/data/articles'

const parser = new Parser()

const MEDIUM_FEED_URL = 'https://medium.com/feed/@carlosepsaboya'

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^"]+)"/)
  return match ? match[1] : null
}

function stripHtml(html: string): string {
  return html
    .replace(/<\/?(h[1-6]|p|div|br|li|ul|ol|blockquote|figcaption|figure)[^>]*>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function extractDescription(html: string): string {
  // Try to get the first real paragraph (skip figures, headings, short captions)
  const paragraphs = html.match(/<p[^>]*>(.*?)<\/p>/gi) || []
  for (const p of paragraphs) {
    const text = stripHtml(p)
    if (text.length > 40) {
      return text.slice(0, 180)
    }
  }
  return stripHtml(html).slice(0, 180)
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export async function fetchMediumArticles(): Promise<Article[]> {
  const feed = await parser.parseURL(MEDIUM_FEED_URL)

  return feed.items.map((item) => {
    const content = item['content:encoded'] || item.content || ''
    const image = extractFirstImage(content)
    const description = extractDescription(content)

    return {
      id: slugify(item.title || 'untitled'),
      title: item.title || 'Untitled',
      description,
      image: image || '/personal_blog.jpg',
      url: item.link || '#',
      date: item.pubDate ? formatDate(item.pubDate) : '',
    }
  })
}
