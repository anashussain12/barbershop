"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../public/misterbarber.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDubaiDropdownOpen, setIsDubaiDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative py-6 px-6 bg-[#1a1a1a] border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className=" font-bold bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text"
        >
          {/* MISTR BARBER */}
          <Image src={Logo} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden text-[18px] md:flex items-center space-x-8 relative">
          <Link
            href="/"
            className="text-white hover:text-amber-400 transition-colors duration-300"
          >
            Home
          </Link>

          {/* Dubai Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDubaiDropdownOpen(true)}
            onMouseLeave={() => setIsDubaiDropdownOpen(false)}
          >
            <button className="text-white hover:text-amber-400 transition-colors duration-300">
              Locations
            </button>
            {isDubaiDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-[#1a1a1a] border border-white/10 shadow-lg rounded-md z-50">
                <Link
                  href="/etobicoke"
                  className="block px-4 py-2 text-white hover:bg-amber-400 hover:text-black transition"
                >
                  Etobicoke
                </Link>

                <Link
                  href="/notryork"
                  className="block px-4 py-2 text-white hover:bg-amber-400 hover:text-black transition"
                >
                  NorthYork West
                </Link>
                <Link
                  href="/dundaswest"
                  className="block px-4 py-2 text-white hover:bg-amber-400 hover:text-black transition"
                >
                  Dundas West
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/services"
            className="text-white hover:text-amber-400 transition-colors duration-300"
          >
            Services
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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
              className="text-white hover:text-amber-400 transition"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Dubai Dropdown (Mobile) */}
            {/* <details className="group">
              <summary className="text-white cursor-pointer hover:text-amber-400 transition">
                Dubai
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/dubai"
                  className="block text-white hover:text-amber-400"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link
                  href="/dubai/services"
                  className="block text-white hover:text-amber-400"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="/dubai/gallery"
                  className="block text-white hover:text-amber-400"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </div>
            </details> */}

            {/* <Link
              href="/about"
              className="text-white hover:text-amber-400 transition"
              onClick={closeMenu}
            >
              Locations
            </Link> */}

            <div
              className="relative"
              onMouseEnter={() => setIsDubaiDropdownOpen(true)}
              onMouseLeave={() => setIsDubaiDropdownOpen(false)}
            >
              <button className="text-white hover:text-amber-400 transition-colors duration-300">
                Locations
              </button>
              {isDubaiDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-[#1a1a1a] border border-white/10 shadow-lg rounded-md z-50">
                  <Link
                    href="/etobicoke"
                    className="block px-4 py-2 text-white hover:bg-amber-400 hover:text-black transition"
                  >
                    Etobicoke
                  </Link>

                  <Link
                    href="/notryork"
                    className="block px-4 py-2 text-white hover:bg-amber-400 hover:text-black transition"
                  >
                    NorthYork West
                  </Link>
                  <Link
                    href="/dundaswest"
                    className="block px-4 py-2 text-white hover:bg-amber-400 hover:text-black transition"
                  >
                    Dundas West
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
