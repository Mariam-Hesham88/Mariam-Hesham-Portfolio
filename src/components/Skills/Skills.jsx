import React from 'react'
import style from './Skills.module.css'

let testing = ['SDLC', 'STLC', 'Manual Testing', 'Test Case Design', 'Bug Reporting', 'Agile/Scrum'];
let testingTools = ['JIRA', 'Postman', 'Selenium (Basic)', 'Excel'];
let frontend = [
  'HTML',
  'CSS',
  'JavaScript (ES6+)',
  'Bootstrap',
  'TailwindCSS',
  'TypeScript',
  'Angular',
  'React.js',
  'Next.js',
  'Redux / Context API',
  'Responsive Design',
  'RESTful APIs Integration',
  'UI/UX Principles'
];
let backend = ['Database Funamental', 'SQL'];
let deployment = ['git', 'git-Hub', 'Netlify', 'Vercal', 'NPM','Vite'];
let softSkills = [
  'Communication Skills',
  'Research',
  'Problem Solving',
  'Teamwork & Collaboration',
  'Adaptability & Continuous Learning',
  'Time Management',
  'Attention to Detail',
  'Creativity & Design Sense',
  'Leadership & Initiative',
  'Critical Thinking'
];

export default function Skills() {
  return <>
    <section className='w-[80%] min-h-lvh mx-auto flex flex-wrap justify-center gap-4 p-12'>
      <h1 className='py-8 font-bold secondTitle text-primary'>Technical Skills</h1>

      <div className="flex flex-wrap w-full gap-4 lg:flex-nowrap">
        <div className="w-full lg:w-1/2 rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
          <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-bug"></i> Testing</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {testing.map((testing,index) => <span key={index} className='cr capitalize text-center rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {testing} </span>)}
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
          <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-screwdriver-wrench"></i> Testing Tools</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {testingTools.map((tool,index) => <span key={index} className='cr capitalize text-center rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {tool} </span>)}
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
        <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-code"></i> Frontend</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {frontend.map((front,index) => <span key={index} className='cr capitalize text-center rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {front} </span>)}
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-4 lg:flex-nowrap">
        <div className="w-full lg:w-1/2 rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
          <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-terminal"></i> Deployment</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {deployment.map((deployment,index) => <span key={index} className='cr capitalize text-center rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {deployment} </span>)}
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
          <h3 className='text-center text-primary text-[24px] font-semibold py-4'><i className="fa-solid fa-database"></i> Database</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {backend.map((back,index) => <span key={index} className='cr text-center rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {back} </span>)}
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg border-[2px] border-primary bg-secondary px-2 pb-5">
        <h3 className='text-center text-primary text-[24px] font-semibold py-4'> <i className="fa-solid fa-users"></i> Soft-Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {softSkills.map((skill,index) => <span key={index} className='cr capitalize text-center rounded-lg bg-primary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]'> {skill} </span>)}
        </div>
      </div>
    </section>
  </>
}
