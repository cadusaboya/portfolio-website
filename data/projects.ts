export interface Project {
  title: string
  description: string
  imageUrl: string
  skills: string[]
  githubUrl: string
  mediumUrl?: string
  liveUrl?: string
}

export const featuredProject: Project = {
  title: 'Vincor',
  description:
    'A SaaS financial management platform built for Brazilian law firms. Multi-tenant architecture with subscription billing, revenue and expense tracking, commission management, and PDF financial reports.',
  imageUrl: '/vincor.png',
  skills: ['Next.js', 'Python (Django)', 'PostgreSQL', 'Railway', 'Vercel'],
  githubUrl: 'https://github.com/cadusaboya/adview',
  liveUrl: 'https://app.vincorapp.com.br',
}

export const otherProjects: Project[] = [
  {
    title: 'Factor',
    description:
      'A fintech mobile application that enables doctors to receive hospital payments in advance. I co-founded the venture and single-handedly built the entire product: React Native frontend, Django REST backend, PostgreSQL database, and a fully automated CI/CD pipeline deployed on AWS infrastructure.',
    imageUrl: '/factor.png',
    skills: [
      'React Native', 'Python (Django)', 'PostgreSQL', 'Docker',
      'CI/CD', 'AWS',
    ],
    githubUrl: 'https://github.com/cadusaboya/factor',
    mediumUrl:
      'https://medium.com/@carlosepsaboya/factor-diving-into-mobile-app-development-cf0266e66511',
  },
  {
    title: 'ERP',
    description:
      'A custom-built ERP system for an event decoration company. Multi-tenant architecture with role-based access control, accounts payable/receivable, cost center allocation, and automated PDF report generation.',
    imageUrl: '/erp.png',
    skills: ['Next.js', 'Python (Django)', 'PostgreSQL', 'Celery', 'AWS'],
    githubUrl: 'https://github.com/cadusaboya/erp',
  },
  {
    title: 'TFT Pro Radar',
    description:
      'A match analytics platform for competitive Teamfight Tactics. Tracks 140+ professional players via the Riot API, aggregates unit performance stats, and displays real-time rankings with sorting and filtering.',
    imageUrl: '/pbe-tracker.png',
    skills: ['Next.js', 'Python (Django)', 'PostgreSQL', 'Railway'],
    githubUrl: 'https://github.com/cadusaboya/project-pbe',
    liveUrl: 'https://tftproradar.com',
  },
]
