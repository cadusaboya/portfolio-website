import Header from '../components/Header'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className="flex-col">
      <Header />
      <div className="flex">
        <img src="/my-img.jpeg" alt="My image" className="h-64 w-auto mt-10 mx-auto rounded-full border-4 border-white" />
        <main className="flex flex-col justify-center mx-auto w-72 p-4">
          <h1 className="text-4xl font-bold">Carlos Saboya</h1>
          <p className="mt-4">Welcome to my portfolio website. I'm a software engineer and I love seeing my code turn into working products.</p>
        </main>
      </div>

      <div className="flex flex-1 mt-20 justify-center space-x-20">
        <Card
          title="My portfolio website"
          description="This is a website I'm proud to have built as a 3rd project. It's a place where I can showcase my projects and skills earnt."
          imageUrl="/personal.png"
          skills={['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Github']}
          githubUrl='https://github.com/cadusaboya/portfolio-website'
        />

        <Card
          title="Factor"
          description="Mobile app that charges a small fee to antecipate the payments of hospitals to doctors. 
                       The doctor is able to receive his payment imediately and the hospital would pay back to the app. 
                       It was an idea I had and developed from scratch."
          imageUrl="/factor.png"
          skills={['Mobile Development', 'React Native', 'Python (Django)', 'PostgreSQL', 'Docker', 'Github', 'AWS ECR', 'AWS ECS', 'AWS RDS', 'Route 53']}
          githubUrl='https://github.com/cadusaboya/factor'
        />
      </div>

      <div className="flex flex-1 mt-20 justify-center space-x-20">
        <Card
          title="MyRoutine"
          description=" This was my final project in CS50 and the very 1st software I made. It's a Web application that makes the user's routine a gamefied experience, 
                        earning points when succesfully completing tasks and leaderboards to show rankings."
          imageUrl="/myroutine.png"
          skills={['Python (Flask)', 'HTML', 'CSS', 'Javascript', 'SQLite']}
          githubUrl='https://github.com/cadusaboya/myroutine'
        />

        <Card
          title="Soon..."
          description="Your project could be in here, reach out and let's build something together."
          imageUrl="loading.jpg"
          skills={[]}
          githubUrl=''
        />
      </div>


    </div>
  )
}

export default Home