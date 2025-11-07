import React from 'react'
import style from './Skills.module.css'

let frontend = ['HTML', 'Css', 'js', 'bootstrap', 'tailwindcss', 'ts', 'angular', 'React.js', 'Next.js'];
let softSkills = ['Communication Skills', 'Research', 'Problem Solving', 'Teamwork & Collaboration', 'Adaptability & Continuous Learning', 'Time Management', 'Attention to Detail', 'Creativity & Design Sense'];
let backend = ['sql', 'c#', 'linq', 'ef', 'mvc', 'api', 'N-Tire'];
let deployment = ['git', 'git-Hub', 'Netlify', 'Vercal'];

export default function Skills() {
  return <>
    <section className='w-[80%] min-h-lvh mx-auto flex flex-wrap justify-center gap-4 p-12'>
      <h1 className='secondTitle text-primary font-bold py-8'>Technical Skills</h1>
      <div className="w-full rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
        <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-code"></i> Frontend</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {frontend.map((front,index) => <span key={index} className='cr rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {front} </span>)}
        </div>
      </div>

      <div className="w-full flex flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-1/2 rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
          <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-terminal"></i> Deployment</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {deployment.map((deployment,index) => <span key={index} className='cr rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {deployment} </span>)}
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
          <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-database"></i> Backend</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {backend.map((back,index) => <span key={index} className='cr rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {back} </span>)}
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
        <h3 className='text-center text-primary text-[24px] font-semibold py-4'> <i className="fa-solid fa-users"></i> Soft-Skills</h3>
        <div className="flex justify-center flex-wrap gap-2">
          {softSkills.map((skill,index) => <span key={index} className='cr rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {skill} </span>)}
        </div>
      </div>
    </section>
  </>
}
