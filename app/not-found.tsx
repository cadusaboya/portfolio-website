import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-text-secondary mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="px-7 py-3 rounded-full bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5
                     shadow-lg shadow-primary/25"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
