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
    'A SaaS financial management platform built for Brazilian law firms. Live in production with a paying client on an annual plan. Multi-tenant architecture with subscription billing, revenue and expense tracking, commission management, and automated PDF financial reports.',
  imageUrl: '/vincor.png',
  skills: ['Next.js', 'TypeScript', 'Python (Django)', 'PostgreSQL', 'Railway', 'Vercel', 'Netlify'],
  githubUrl: 'https://github.com/cadusaboya/adview',
  liveUrl: 'https://app.vincorapp.com.br',
}

export const otherProjects: Project[] = [
  {
    title: 'Factor',
    description:
      'A fintech mobile app that enables doctors to receive hospital payments in advance. Co-founded the venture and single-handedly built the entire product end-to-end: React Native frontend published on the App Store, Django REST backend, PostgreSQL database, and a fully automated CI/CD pipeline deployed on AWS.',
    imageUrl: '/factor.png',
    skills: [
      'React Native', 'Python (Django)', 'PostgreSQL', 'Docker',
      'CI/CD', 'AWS', 'App Store',
    ],
    githubUrl: 'https://github.com/cadusaboya/factor',
    mediumUrl:
      'https://medium.com/@carlosepsaboya/factor-diving-into-mobile-app-development-cf0266e66511',
  },
  {
    title: 'ERP',
    description:
      'A custom-built ERP system in production for 1+ year, replacing a legacy Microsoft DB that had calculation errors. Cloud-based access from anywhere, automated AWS backups, role-based access control, accounts payable/receivable, cost center allocation, and automated PDF reports. Active monthly subscription.',
    imageUrl: '/erp.png',
    skills: ['Next.js', 'TypeScript', 'Python (Django)', 'PostgreSQL', 'Celery', 'AWS'],
    githubUrl: 'https://github.com/cadusaboya/erp',
  },
  {
    title: 'TFT Pro Radar',
    description:
      'A match analytics platform for competitive Teamfight Tactics. 2,000+ unique visitors and 9,500+ page views in the first weeks. Tracks 140+ professional players via the Riot API, aggregates unit performance stats, and displays real-time rankings with sorting and filtering.',
    imageUrl: '/pbe-tracker.png',
    skills: ['Next.js', 'TypeScript', 'Python (Django)', 'PostgreSQL', 'Railway'],
    githubUrl: 'https://github.com/cadusaboya/project-pbe',
    liveUrl: 'https://tftproradar.com',
  },
]
