'use client'

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed z-20 bg-gray-400 bg-opacity-50 w-72 mx-auto p-4 rounded-full mt-8">
      <nav className="space-x-4 text-white">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-gray-100"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-gray-200"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-gray-100"
        >
          Blog
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-gray-200"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;