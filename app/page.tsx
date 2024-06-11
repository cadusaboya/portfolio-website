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

      <div className="flex flex-1 mt-20 justify-center items-center space-x-20">
        <Card
          title="My portfolio website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante."
          imageUrl="/my-img.jpeg"
          skills={['React', 'TypeScript', 'TailwindCSS']}
        />

        <Card
          title="Factor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante."
          imageUrl="/my-img.jpeg"
          skills={['React', 'TypeScript', 'TailwindCSS']}
        />
      </div>


    </div>
  )
}

export default Home