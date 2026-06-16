import React, { useState } from 'react'
import { Link } from 'react-scroll'
import style from './Navbar.module.css'
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  const sections = ["home", "about", "education", "skills", "projects", "contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 border-gray-200 bg-primary">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl gap-8 py-3 mx-auto">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex">
            <img
              src={logo}
              alt="Logo"
              className="object-cover w-12 h-12 py-0"
            />
          </div>

          {/* Menu */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="flex flex-col p-2 font-medium md:p-0 md:flex-row md:space-x-8">
              {sections.map((section, index) => (
                <li key={index}>
                  <Link
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                    onClick={handleCloseMenu}
                    className="block px-1 py-2 text-white capitalize transition-all duration-300 rounded-sm cursor-pointer hover:text-background"
                  >
                    {section === "home" ? "Home" : section}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="flex flex-row flex-wrap items-center gap-5 font-medium">

              <li>
                <a
                  href="https://wa.me/201066135369"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-500 hover:scale-125"
                >
                  <i className="fa-brands fa-whatsapp text-white text-[18px]"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mariam.hesham.ramadam@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-500 hover:scale-125"
                >
                  <i className="fa-regular fa-envelope text-white text-[18px]"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/mariam-hesham-88m/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-500 hover:scale-125"
                >
                  <i className="fa-brands fa-linkedin text-white text-[18px]"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Mariam-Hesham88"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-500 hover:scale-125"
                >
                  <i className="fa-brands fa-github text-white text-[18px]"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://drive.google.com/drive/u/0/folders/13ZS75_XMliP_uREfpor7LvpSpveh8VOd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn text-primary bg-background">
                    View CV
                  </button>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

<nav className="fixed top-0 left-0 right-0 z-50 px-10 border-gray-200 bg-primary">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl gap-8 py-3 mx-auto">

          {/* Menu */}
          <div className="w-full md:block md:w-auto">
            <ul className="flex flex-col p-2 font-medium md:p-0 md:flex-row md:space-x-8">
                <li>
                  <Link className="block px-1 py-2 text-white capitalize transition-all duration-300 rounded-sm cursor-pointer hover:text-background">
                    Manual Testing
                  </Link>
                </li>
                <li>
                  <Link className="block px-1 py-2 text-white capitalize transition-all duration-300 rounded-sm cursor-pointer hover:text-background">
                    Front-End
                  </Link>
                </li>
                <li>
                  <Link className="block px-1 py-2 text-white capitalize transition-all duration-300 rounded-sm cursor-pointer hover:text-background">
                    Backend-End
                  </Link>
                </li>
            </ul>
          </div>

        </div>
      </nav>