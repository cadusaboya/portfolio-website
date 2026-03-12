import {
  SiReact, SiNextdotjs, SiJavascript,
  SiPython, SiDjango,
  SiPostgresql, SiDocker, SiGit,
  SiAmazonaws, SiVercel, SiNetlify,
  SiAppstore,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, color: '' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'App Store', icon: SiAppstore, color: '#0D96F6' },
]

const Skills = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-heading text-2xl sm:text-3xl font-bold text-text-primary text-center mb-12">
        Tech Stack
      </h2>

      <div className="stagger-children flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl
                       bg-surface border border-border w-24
                       hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5
                       transition-all duration-300"
          >
            <skill.icon
              className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
              style={skill.color ? { color: skill.color } : undefined}
            />
            <span className="text-xs text-text-secondary font-medium text-center leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
