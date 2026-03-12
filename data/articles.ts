export interface Article {
  id: string
  title: string
  description: string
  image: string
  url: string
  date: string
}

export const articles: Article[] = [
  {
    id: 'portfolio-website',
    title: 'Building my own portfolio website',
    description:
      'Building my own portfolio website was a great opportunity for web development. By using Next.js and Tailwind, I built something with more speed and a better UI than my previous website.',
    image: '/personal_blog.jpg',
    url: 'https://medium.com/@carlosepsaboya/building-my-own-portfolio-website-eba5589e7736',
    date: '2024-06-15',
  },
  {
    id: 'factor-mobile',
    title: 'Factor — Diving into Mobile App Development',
    description:
      'Factor is a startup in which I joined as a partner by developing the mobile app and backend. It was a challenge for me since I had no previous experience in mobile app development.',
    image: '/factor_main_blog.jpg',
    url: 'https://medium.com/@carlosepsaboya/factor-diving-into-mobile-app-development-cf0266e66511',
    date: '2024-06-14',
  },
  {
    id: 'myroutine',
    title: 'MyRoutine',
    description:
      "MyRoutine was the first web app I built to conclude CS50 Harvard's course. Although I have a degree in Mechatronical Engineering, we never got to the point of developing software.",
    image: '/myroutine_blog.jpg',
    url: 'https://medium.com/@carlosepsaboya/myroutine-68b69c2dbe01',
    date: '2024-06-13',
  },
]
