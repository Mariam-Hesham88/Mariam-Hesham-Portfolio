import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return <>
    <section className='flex flex-wrap justify-center py-12'>
      <h1 className='secondTitle w-full text-center text-primary font-bold py-8'>Contact Me</h1>
      <div className='w-[50%]'>
        <h1 className='text-[28px] font-semibold text-smothText capitalize'>Contact information:</h1>
        <p className='text-smothText leading-8'>Feel free to reach out if you're looking for a developer, or have any questions.</p>
        <div className='flex flex-wrap gap-4'>
          <div className='pt-4 w-full'>
            <p className='text-[22px] text-smothText'><i className="fa fa-location-dot text-primary"></i> Location</p>
            <p className='text-[18px] text-smothText'> Cairo, Egypt</p>
          </div>
          <div className='pt-4 w-full'>
            <p className='text-[22px] text-smothText'><i className="fa-regular fa-envelope text-primary"></i> Email</p>
            <p className='text-[18px] text-smothText'> mariam.hesham.ramadan@gmail.com</p>
          </div>
          <div className='pt-4 w-full'>
            <p className='text-[22px] text-smothText'><i className="fa fa-phone text-primary"></i> Phone</p>
            <p className='text-[18px] text-smothText'> +201066135369</p>
            <p className='text-[18px] text-smothText'> +201151378892</p>
          </div>

        </div>
        <p className='capitalize pb-0 pt-8 md:pb-2 text-[18px] font-semibold'> Follow me </p>
        <div className="">
          <ul className="font-medium text-[28px] text-primary flex flex-row flex-wrap items-center p-4 ps-0 md:p-0  md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="https://www.linkedin.com/in/mariam-hesham-88m/" target='_blank' className="block capitalize py-1 pe-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-square-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Mariam-Hesham88" target='_blank' className="block capitalize p-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/marriam88/" target="_blank" rel="noreferrer" className="block capitalize p-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_mariiamhesham_/" target="_blank" rel="noreferrer" className="block capitalize p-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
}
