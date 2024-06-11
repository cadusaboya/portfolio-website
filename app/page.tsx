import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto w-72 mt-10 p-4">
        <h1 className="text-4xl font-bold">Home</h1>
        <p className="mt-4">Welcome to my portfolio website. I'm a software engineer and I love building things with code.</p>
      </main>
    </div>
  )
}

export default Home