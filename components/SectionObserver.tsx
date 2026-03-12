'use client'

import { useEffect } from 'react'

export default function SectionObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const staggerContainers = document.querySelectorAll('.stagger-children')

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            entry.target.classList.remove('section-hidden')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stagger-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    sections.forEach((section) => {
      section.classList.add('section-hidden')
      sectionObserver.observe(section)
    })

    staggerContainers.forEach((container) => {
      staggerObserver.observe(container)
    })

    return () => {
      sectionObserver.disconnect()
      staggerObserver.disconnect()
    }
  }, [])

  return null
}
