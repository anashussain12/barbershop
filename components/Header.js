'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative py-6 px-6 bg-[#1a1a1a] border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
          MISTR BARBER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-amber-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/dubai" className="text-white hover:text-amber-400 transition-colors duration-300">
            Dubai
          </Link>
          <Link href="/services" className="text-white hover:text-amber-400 transition-colors duration-300">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-amber-400 transition-colors duration-300">
            About
          </Link>
          <Link 
            href="/dubai/checkout" 
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-white/10 py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-white hover:text-amber-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/dubai" 
              className="text-white hover:text-amber-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Dubai
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-amber-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-amber-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/dubai/checkout" 
              className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}