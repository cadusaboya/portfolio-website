import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the GitHub icon from react-icons
import { FaMedium } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="flex">
        <img src="/my-img.jpeg" alt="My image" className="h-64 w-auto mx-auto rounded-full border-4 border-white" />
        <main className="flex flex-col mx-auto w-72 p-4">
            <h1 className="text-4xl font-bold">Carlos Saboya</h1>
            <p className="mt-4">Welcome to my portfolio website. I'm a software engineer and I love seeing my code go from an idea to a working product.</p>
        </main>
        <main className="flex flex-col mx-auto w-72 pt-4 pl-4">
            <h1 className="text-4xl font-bold">About me</h1>
            <p className="mt-4"><span className="font-bold">Age:</span> 27</p>
            <p><span className="font-bold">Location:</span> Brazil 🇧🇷</p>
            <p><span className="font-bold">Languages:</span> Portuguese and English</p>
            <p><span className="font-bold">Likes:</span> Web3, Investing, E-sports, Games, Gym, Soccer, Travel</p>

            <div className="flex mt-2">
                <a href="https://www.linkedin.com/in/carlossaboya/" target="_blank" rel="noopener noreferrer" className="mr-1"><FaLinkedin className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/cadusaboya_" target="_blank" rel="noopener noreferrer" className="mr-1"><FaInstagram className="w-6 h-6" /></a>
                <a href="https://github.com/cadusaboya" target="_blank" rel="noopener noreferrer" className="mr-1"><FaGithub className="w-6 h-6" /></a>
                <a href="https://medium.com/@carlosepsaboya" target="_blank" rel="noopener noreferrer"><FaMedium className="w-6 h-6" /></a>
            </div> 
        </main>
    </div>
  )
}

export default AboutMe