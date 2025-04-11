"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Category", href: "category" },
  { label: "Services", href: "services" },
  { label: "Colours", href: "colours" },
  { label: "Downloads", href: "downloads" },
  { label: "Become A Dealer", href: "become-a-dealer" },
  { label: "Blogs", href: "blogs" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-[#0260af] text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.svg"
            alt="Astral Paints Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-medium hover:text-blue-200 transition duration-300"
            >
              {link.label}
            </button>
          ))}
          <Link href="/enquire">
            <button className="bg-white text-blue-700 font-semibold text-sm px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300">
              Enquire Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0260af]">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block px-3 py-2 rounded hover:bg-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/enquire" className="block px-3 pt-3">
              <button className="w-full bg-white text-blue-700 font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
