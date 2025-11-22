import React, { useEffect, useRef } from 'react';
import style from './Education.module.css';
import mariam from '../../assets/images/mariam2.jpg';

export default function Education() {
  const paragraphsRef = useRef([]);

  let education = [
    { id:10, course:'React.JS', place:'Route Academy', start:'Jul 2025', end:'Sep 2025'},
    { id:11, course:'.NET Full-Stack', place:'DEPI', start:'Sep 2024', end:'Dec 2024'},
    { id:12, course:'Front-End Development Course', place:'Route Academy', start:'March 2024', end:'Sep 2024'},
    { id:13, course:'Bachelor of Computer Science', place:'Future Academy', start:'Sep 2019', end:'Jul 2023'},
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(style.visible);
        }
      });
    }, { threshold: 0.3 });

    paragraphsRef.current.forEach(p => observer.observe(p));
  }, []);

  return (
    <section className='flex flex-wrap justify-center w-full bg-background'>
      <div className="flex items-center justify-center w-full md:w-1/3">
        <div>
          <img src={mariam} alt="Mariam" className='w-full pt-8 md:pt-0' />
        </div>
      </div>

      <div className="w-full p-12 md:w-2/3 border-s-2 border-smothText">
        <h1 className='pt-2 pb-8 font-bold secondTitle text-primary'>Education</h1>

        {education.map((edu, i) => (
          <div key={edu.id} className="relative mb-4">
            <span className='absolute -translate-x-1/2 translate-y-1/2 icon'>
              <i className="fa-solid fa-graduation-cap bg-background p-2 text-smothText text-[38px]"></i>
            </span>
            <h3 className='text-primary text-[28px] font-semibold ps-5 md:ps-1 '>{edu.course}</h3>
            <p 
              ref={(el) => paragraphsRef.current[i * 2] = el}
              className={`${style.slideInLeft} paragraph ps-5 md:ps-1`}>
              {edu.place}
            </p>
            <p 
              ref={(el) => paragraphsRef.current[i * 2 + 1] = el}
              className={`${style.slideInLeft} paragraph ps-5 md:ps-1`}>
              {edu.start} - {edu.end}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
