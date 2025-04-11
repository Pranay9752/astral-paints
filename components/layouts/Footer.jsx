// components/Footer.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const companies = [
  {
    name: "Astral Pipes",
    image: "/logo.svg",
  },
  {
    name: "Astral Adhesives",
    image: "/logo.svg",
  },
  {
    name: "Bond It USA & UK",
    image: "/logo.svg",
  },
  {
    name: "Astral Bathware",
    image: "/logo.svg",
  },
  {
    name: "Gem Paints",
    image: "/logo.svg",
  },
];

const Footer = ({ backgroundImage }) => {
  return (
    <footer
      id="contact"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white"
    >
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Group Company</h2>
        <div className="flex flex-wrap justify-around items-center gap-8 mb-16">
          {companies.map((company, idx) => (
            <Image
              key={idx}
              src={company.image}
              alt={company.name}
              width={200}
              height={75}
            />
          ))}
        </div>
        <hr className="border-gray-500 mb-16" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Logo and Contact */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Astral Paints"
                width={200}
                height={80}
              />
            </div>
            <h3 className="font-semibold text-lg mb-4">Reach Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm">
                  #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                  <br />
                  Bangalore - 560 058
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-sm">+91 - 80 - 42552555</p>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-sm">info@gem-paints.com</p>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition duration-300"
                >
                  About Astrals
                </Link>
              </li>
              <li>
                <Link
                  href="/paint-journey"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Paint Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/group-companies"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Group Companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Category Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Category</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/interior-paints"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Interior Paints
                </Link>
              </li>
              <li>
                <Link
                  href="/exterior-paints"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Exterior Paints
                </Link>
              </li>
              <li>
                <Link
                  href="/undercoats"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Undercoats
                </Link>
              </li>
              <li>
                <Link
                  href="/painting-tools"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Painting Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/water-proofing"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Water Proofing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/wall-painting"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Wall Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/water-solution"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Water Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/painting"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/colour-shades"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Colour Shades
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter and Downloads */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-2">
                Sign Up To Our Newsletter
              </h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="bg-transparent border border-gray-400 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-400"
                />
                <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 text-sm">
                  Enquire Now
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Downloads</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/become-dealer"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Become A Dealer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://facebook.com"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href="https://youtube.com"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <Link
            href="/terms"
            className="mb-2 md:mb-0 hover:text-blue-300 transition duration-300"
          >
            Terms & Conditions
          </Link>
          <p>ALL RIGHTS RESERVED</p>
          <Link
            href="/privacy"
            className="mt-2 md:mt-0 hover:text-blue-300 transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
