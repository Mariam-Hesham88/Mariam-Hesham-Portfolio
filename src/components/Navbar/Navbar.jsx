import React, { useState } from 'react'
import { Link } from 'react-scroll'
import style from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  const sections = ["home", "about", "education", "skills", "projects", "contact"];

  return <>
    <nav className="bg-primary border-gray-200 px-10 fixed top-0 right-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center lg:justify-between py-3">

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white">
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

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium me-auto flex flex-col p-2 md:p-0 md:flex-row md:space-x-8">
            {sections.map((section, index) => (
              <li key={index}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  onClick={handleCloseMenu}
                  className="block text-white capitalize py-2 px-3 rounded-sm cursor-pointer hover:text-background transition-all duration-300"
                >
                  {section === "home" ? "Home" : section}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto pt-2 lg:pt-0`} id="navbar-default">
          <ul className="font-medium flex flex-row flex-wrap items-center p-4 pe-0 md:p-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="https://wa.me/201066135369" target='_blank' className="block py-2 px-3 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-whatsapp text-white text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mariam.hesham.ramadam@gmail.com" target="_blank" rel="noreferrer"
                className="block capitalize py-2 px-3 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-regular fa-envelope text-white text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mariam-hesham-88m/" target='_blank' className="block capitalize py-2 px-3 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-square-linkedin text-white text-[18px]"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Mariam-Hesham88" target='_blank' className="block capitalize py-2 px-3 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-github text-white text-[18px]"></i>
              </a>
            </li>
            <li>
              <button className='btn text-primary bg-background'>
                <a href={`/Mariam-Hesham-CV.pdf`} target='_blank' fileName="Mariam-Hesham-CV.pdf">
                  Download CV
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}


