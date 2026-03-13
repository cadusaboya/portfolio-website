'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: 'dark',
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const initial = stored || 'dark'
    setTheme(initial)
    if (initial === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }

  if (!mounted) return null

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '8px',
            padding: '14px 18px',
            fontSize: '13px',
            fontWeight: 500,
            gap: '8px',
            maxWidth: '380px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            ...(theme === 'dark'
              ? { background: '#1a1a2e', color: '#f1f5f9', border: '1px solid hsl(0,0%,20%)' }
              : { background: '#fff', color: '#0f172a', border: '1px solid #e2e8f0' }),
          },
          success: {
            iconTheme: {
              primary: theme === 'dark' ? 'hsl(150,86%,65%)' : 'hsl(140,100%,27%)',
              secondary: theme === 'dark' ? 'hsl(150,100%,6%)' : 'hsl(143,85%,96%)',
            },
            style: theme === 'dark'
              ? { background: 'hsl(150,100%,6%)', borderColor: 'hsl(147,100%,12%)', color: 'hsl(150,86%,65%)' }
              : { background: 'hsl(143,85%,96%)', borderColor: 'hsl(145,92%,87%)', color: 'hsl(140,100%,27%)' },
          },
          error: {
            iconTheme: {
              primary: theme === 'dark' ? 'hsl(358,100%,81%)' : 'hsl(360,100%,45%)',
              secondary: theme === 'dark' ? 'hsl(358,76%,10%)' : 'hsl(359,100%,97%)',
            },
            style: theme === 'dark'
              ? { background: 'hsl(358,76%,10%)', borderColor: 'hsl(357,89%,16%)', color: 'hsl(358,100%,81%)' }
              : { background: 'hsl(359,100%,97%)', borderColor: 'hsl(359,100%,94%)', color: 'hsl(360,100%,45%)' },
          },
        }}
      />
    </ThemeContext.Provider>
  )
}
