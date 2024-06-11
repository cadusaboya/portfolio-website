"use client";

import Link from 'next/link'

const Header = () => {
  return (
    <header className="top-0 bg-gray-400 text-white w-72 mx-auto p-4 rounded-full mt-8">
        <nav className="space-x-4">
            <Link href="/" className="hover:text-gray-100">Home</Link>
            <Link href="/about" className="hover:text-gray-100">About</Link>
            <Link href="/projects" className="hover:text-gray-100">Projects</Link>
            <Link href="/contact" className="hover:text-gray-100">Contact</Link>
        </nav>
    </header>
  )
}

export default Header