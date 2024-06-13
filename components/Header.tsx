import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed z-20 bg-gray-400 bg-opacity-50 w-72 mx-auto p-4 rounded-full mt-8">
        <nav className="space-x-4 text-white hover:">
          <a href="#about" className="hover:text-gray-100">About</a>
          <a href="#projects" className="hover:text-gray-200">Projects</a>
          <a href="#blog" className="hover:text-gray-100">Blog</a>  
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>
    </header>
  )
}

export default Header