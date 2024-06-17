import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Import the GitHub icon from react-icons
import { FaMedium } from "react-icons/fa6";
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start">
      <div className="md:ml-20 flex-shrink-0">
        <Image 
          src="/my-img.jpeg" 
          alt="My image" 
          width={300} 
          height={300} 
          className="h-64 w-64 sm:w-auto mx-auto rounded-full border-4 border-white" 
        />
      </div>
      <main className="flex flex-col mx-auto sm:w-72 p-4 text-center sm:text-left">
        <h1 className="text-4xl font-bold">Carlos Saboya</h1>
        <p className="mt-4">Welcome to my portfolio website. I&apos;m a software engineer and I love seeing my code go from an idea to a working product.</p>
      </main>
      <main className="flex flex-col mx-auto sm:w-72 pt-4 pl-4 text-center sm:text-left">
        <h1 className="text-4xl font-bold">About me</h1>
        <p className="mt-4"><span className="font-bold">Age:</span> 27</p>
        <p><span className="font-bold">Location:</span> Brazil 🇧🇷</p>
        <p><span className="font-bold">Languages:</span> Portuguese and English</p>
        <p><span className="font-bold">Likes:</span> Web3, Investing, E-sports, Games, Gym, Soccer, Travel</p>

        <div className="flex justify-center sm:justify-start mt-2">
          <a href="https://www.linkedin.com/in/carlossaboya/" target="_blank" rel="noopener noreferrer" className="mr-1"><FaLinkedin className="w-6 h-6" /></a>
          <a href="https://www.instagram.com/cadusaboya_" target="_blank" rel="noopener noreferrer" className="mr-1"><FaInstagram className="w-6 h-6" /></a>
          <a href="https://github.com/cadusaboya" target="_blank" rel="noopener noreferrer" className="mr-1"><FaGithub className="w-6 h-6" /></a>
          <a href="https://medium.com/@carlosepsaboya" target="_blank" rel="noopener noreferrer" className="mr-1"><FaMedium className="w-6 h-6" /></a>
          <a href="https://web.whatsapp.com/send?phone=+5591984147769" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="w-6 h-6" /></a>
        </div> 
      </main>
    </div>
  )
}

export default AboutMe