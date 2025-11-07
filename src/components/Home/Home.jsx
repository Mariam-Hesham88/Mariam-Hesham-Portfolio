import React from 'react'
import style from './Home.module.css'
import mariam from '../../assets/images/mariam1.png'

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-12 py-20 md:py-0">
      
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="mainTitle pb-5 text-3xl sm:text-4xl md:text-5xl font-bold">
          Hey! I'm Mariam <span className="wave">👋</span>
        </h1>

        <h3 className="text-primary text-2xl sm:text-3xl md:text-[32px] font-semibold">
          Frontend Developer
        </h3>

        <p className="paragraph pt-4 pb-5 text-sm sm:text-base leading-7 slideInLeft">
          A passionate Frontend Developer who loves developing modern, responsive,
          and user-friendly web applications. I enjoy learning new technologies and
          bringing creative ideas to life using
          <span className="text-primary font-medium"> Angular, React.JS, Next.JS</span> and modern web tools.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="/files/Mariam-Hesham-CV.pdf" download="Mariam-Hesham-CV.pdf"
            className="hover:scale-110 transition-all btn bg-primary text-white px-6 py-3 rounded-xl">
            <i className="fa-solid fa-arrow-down text-white me-2"></i>
            Download CV
          </a>

          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer"
            className="hover:scale-110 transition-all btn bg-background border border-primary text-primary px-6 py-3 rounded-xl flex items-center gap-2">
            <i className="fa-brands fa-whatsapp text-primary text-[18px]"></i>
            WhatsApp
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="shape bg-primary">
          <img src={mariam} alt="Mariam" className='w-full'/>
        </div>
      </div>
    </section>
  )
}

