import Header from '../components/Header'
import Card from '../components/Card'
import AboutMe from '../components/AboutMe'
import NewsList from '../components/NewsList';

const Home = () => {
  return (
    <body>
      <div className="flex justify-center">
        <Header />
      </div>
          
      <div id="about" className="flex-col justify-center pt-28">
        <AboutMe />
      </div>

      <h2 id="projects" className="text-2xl font-bold mt-20 mx-auto flex justify-center">Projects</h2>
      <div className="flex flex-1 mt-10 justify-center space-x-20">
        <Card
          title="My portfolio website"
          description="This is a website I'm proud to have built as a 3rd project. It's a place where I can showcase my projects and skills earnt."
          imageUrl="/personal.png"
          skills={['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Github']}
          githubUrl='https://github.com/cadusaboya/portfolio-website'
          mediumUrl=''
        />

        <Card
          title="Factor"
          description="Mobile app that charges a small fee to antecipate the payments of hospitals to doctors. 
                      The doctor is able to receive his payment imediately and the hospital would pay back to the app. 
                      It was an idea I had and developed from scratch."
          imageUrl="/factor.png"
          skills={['Mobile Development', 'React Native', 'Python (Django)', 'PostgreSQL', 'Docker', 'Github', 'Unit Test', 'CI/CD Pipeline',  'AWS ECR', 'AWS ECS', 'AWS RDS', 'Route 53']}
          githubUrl='https://github.com/cadusaboya/factor'
          mediumUrl=''
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
          mediumUrl='https://medium.com/@carlosepsaboya/myroutine-68b69c2dbe01'
        />

        <Card
          title="Soon..."
          description="Your project could be in here, reach out and let's build something together."
          imageUrl="/loading.jpg"
          skills={[]}
          githubUrl=''
          mediumUrl=''
        />
      </div>

      <h2 id="blog" className="text-2xl font-bold mt-20 mx-auto flex justify-center">Recent Posts</h2>
      <div className="mt-10">
        <NewsList />
      </div>
      
      

      <h2 id="contact" className="text-2xl font-bold mt-20 mx-auto flex justify-center">Contact</h2>


    </body>
  )
}

export default Home