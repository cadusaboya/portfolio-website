import Header from '../components/Header';
import Card from '../components/Card';
import AboutMe from '../components/AboutMe';
import NewsList from '../components/NewsList';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      
      <div id="about" className="flex flex-col items-center pt-28 px-4 sm:px-0">
        <AboutMe />
      </div>

      <h2 id="projects" className="text-2xl font-bold mt-20 mx-auto flex justify-center">Projects</h2>
      <div className="flex flex-wrap justify-center mt-10 gap-10 px-4 sm:px-0">
        <Card
          title="My portfolio website"
          description="I used Next and Tailwind to quickly build a good looking UI, I consider this a big improvement over my first project, while spending less time on it. This is the place where I can showcase my projects and skills earnt."
          imageUrl="/personal.png"
          skills={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Git']}
          githubUrl='https://github.com/cadusaboya/portfolio-website'
          videoUrl=''
        />

        <Card
          title="Factor"
          description="Mobile app that charges a small fee to antecipate the payments of hospitals to doctors. The doctor is able to receive his payment immediately and the hospital would pay back to the app. It was an idea I had and developed from scratch."
          imageUrl="/factor.png"
          skills={['Mobile Development', 'React Native', 'Python (Django)', 'PostgreSQL', 'Docker', 'Git', 'Unit Test', 'CI/CD Pipeline',  'AWS ECR', 'AWS ECS', 'AWS RDS', 'Route 53']}
          githubUrl='https://github.com/cadusaboya/factor'
          videoUrl='https://www.youtube.com/watch?v=nfYBKjFsFUg'
        />
      </div>

      <div className="flex flex-wrap justify-center mt-20 gap-10 px-4 sm:px-0">
        <Card
          title="MyRoutine"
          description="This was my final project in CS50 and the very 1st software I made. It's a Web application that makes the user's routine a gamefied experience, earning points when successfully completing tasks and leaderboards to show rankings."
          imageUrl="/myroutine.png"
          skills={['Python (Flask)', 'HTML', 'CSS', 'Javascript', 'SQLite']}
          githubUrl='https://github.com/cadusaboya/myroutine'
          videoUrl='https://www.youtube.com/watch?v=5Rv5uDOijV4'
        />

        <Card
          title="Soon..."
          description="Your project could be in here, reach out and let's build something together."
          imageUrl="/loading.jpg"
          skills={[]}
          githubUrl=''
          videoUrl=''
        />
      </div>

      <h2 id="contact" className="text-2xl font-bold mt-20 mx-auto flex justify-center">Contact</h2>
      <div className="w-full">
        <ContactForm />
      </div>

      <footer className="relative flex items-center md:justify-center w-full text-black text-center p-4 mt-20">
        &copy; Carlos Saboya 2024 <a href="Resume.pdf" download className="absolute right-4">Download my Resume</a>
      </footer>
    </div>
  );
}

export default Home;