import React from 'react'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import shopCo from '../../assets/images/shop.co.jpg';
import taskManagement from '../../assets/images/taskManagement.jpg';
import note from '../../assets/images/note.jpg';
import allOnOne from '../../assets/images/all-on-one.jpg';
import smartLogin from '../../assets/images/smartLogin.png';
import todolist from '../../assets/images/todolist.png';
import random from '../../assets/images/random.png';

export default function Projects() {

const projects = [
  {
    id: 11,
    imgSrc: shopCo,
    title: 'Shop.co E-commerce',
    description:
      'A fully functional e-commerce website built using React.js. It features product listings, product details pages, dynamic filtering, cart and checkout functionality. APIs are integrated using Axios, and forms are handled with Formik and Yup for validation. The design uses TailwindCSS for a fully responsive, clean interface. React Router enables smooth navigation between pages, while Context API manages global cart state efficiently.',
    technology: [
      'React.JS',
      'React Router',
      'Axios',
      'Formik',
      'Yup',
      'TailwindCSS',
      'Context API',
      'Responsive UI',
      'Vercel Deployment'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/React.js-Ecommerce',
    liveDemo: 'https://react-js-ecommerce.vercel.app/',
  },
  {
    id: 12,
    imgSrc: taskManagement,
    title: 'Task Management',
    description:
      'A modern task management app that helps users create, edit, and organize tasks efficiently. It supports status tracking, task filtering, and persistent data via APIs. Developed with React.js and Axios, using TailwindCSS for responsive styling. State management is handled with Context API, and React Router provides smooth page transitions.',
    technology: [
      'React.JS',
      'Axios',
      'TailwindCSS',
      'React Router',
      'Context API',
      'Responsive UI',
      'Vercel Deployment'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/Task-Management',
    liveDemo: 'https://task-management-delta-azure.vercel.app/',
  },
  {
    id: 13,
    imgSrc: note,
    title: 'Note App',
    description:
      'A simple yet powerful note-taking app that allows users to add, edit, and delete notes easily. Built with React.js and integrated with an API using Axios. Forms are validated using Formik and Yup. TailwindCSS ensures a modern and fully responsive design, while Context API manages note state globally across the app.',
    technology: [
      'React.JS',
      'Axios',
      'Formik',
      'Yup',
      'TailwindCSS',
      'Context API',
      'Responsive UI',
      'React Hooks'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/React-Note-App',
    liveDemo: 'https://react-note-app-three.vercel.app/',
  },
  {
    id: 14,
    imgSrc: allOnOne,
    title: 'All-On-One E-commerce',
    description:
      'An advanced e-commerce project developed using Angular 17. It includes product pages, cart management, search, and category filtering. Uses RxJS for state management and Observables, Bootstrap for responsive design, and RESTful APIs for fetching dynamic product data. Deployed using Netlify for fast and secure hosting.',
    technology: [
      'Angular 17',
      'TypeScript',
      'RxJS',
      'Bootstrap',
      'RESTful APIs',
      'Responsive UI',
      'Netlify Deployment'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/E-commerce-Angular',
    liveDemo: 'https://e-commerce-88.netlify.app/',
  },
  {
    id: 15,
    imgSrc: smartLogin,
    title: 'Login System',
    description:
      'A lightweight login and registration system using HTML, CSS, Bootstrap, and Vanilla JavaScript. Includes client-side validation, password matching, and persistent storage through LocalStorage. This project demonstrates understanding of user authentication logic and front-end validation best practices.',
    technology: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'LocalStorage',
      'Client-side Validation',
      'Responsive Design'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/Login-System',
    liveDemo: 'https://mariam-hesham88.github.io/Login-System/signup.html',
  },
  {
    id: 16,
    imgSrc: todolist,
    title: 'ToDo List',
    description:
      'A classic ToDo List app where users can add, update, and delete tasks. Built with HTML, CSS, Bootstrap, and JavaScript. Focuses on CRUD operations and DOM manipulation. The layout is fully responsive and simple for daily use.',
    technology: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'DOM Manipulation',
      'Responsive UI'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/Todo-List',
    liveDemo: 'https://mariam-hesham88.github.io/Todo-List/',
  },
  {
    id: 17,
    imgSrc: random,
    title: 'Random Quote',
    description:
      'An interactive Random Quote Generator that displays a new inspirational quote each time the button is clicked. Developed using HTML, CSS, and JavaScript. Includes dynamic DOM updates and a smooth responsive design for both desktop and mobile.',
    technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'DOM Manipulation',
      'Responsive UI'
    ],
    gitHubUrl: 'https://github.com/Mariam-Hesham88/Quote-App',
    liveDemo: 'https://mariam-hesham88.github.io/Quote-App/',
  },
];


  function NextArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-[-50px] md:right-[-80px] transform -translate-y-1/2 z-10 cursor-pointer 
                 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full 
                 shadow-lg hover:scale-110 transition-all duration-300">
        <FaArrowRight size={20} />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-[-50px] md:left-[-80px] transform -translate-y-1/2 z-10 cursor-pointer 
                 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full 
                 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaArrowLeft size={20} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 mt-4"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-primary transition-all duration-300"></div>
    ),
  };

  return (
    <section className='w-[90%] mx-auto p-12 flex flex-wrap justify-center relative'>
      <h1 className='secondTitle w-full text-primary text-center font-bold py-8'>
        Featured Projects
      </h1>

      <div className="cards w-full sm:w-[80%] md:w-[60%] lg:w-[50%] relative">
        <Slider {...settings}>
          {projects.map((project) => (
            <div className="p-5">
              <div key={project.id} className="item bg-secondary rounded-2xl shadow-md">
                <img src={project.imgSrc} alt={project.title} className='w-full rounded-t-2xl' />
                <div className="p-6">
                  <h2 className='text-smothText font-semibold text-[24px] text-center'>
                    {project.title}
                  </h2>
                  <p className='text-gray-600 text-center py-2'>{project.description}</p>
                  <div className="flex flex-wrap justify-center py-2 gap-2">
                    {project.technology.map((tec, index) => (
                      <span key={index} className='bg-primary text-white rounded-lg py-1 px-3 text-sm hover:scale-110 transition-all duration-300'>
                        {tec}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-6 pt-3">
                    <a href={project.gitHubUrl} target='_blank' className="text-smothText hover:scale-125 transition-all duration-300">
                      <i className="fa-brands fa-github text-[22px]"></i> View Code
                    </a>
                    <a href={project.liveDemo} target='_blank' className="text-smothText hover:scale-125 transition-all duration-300">
                      <i className="fa-solid fa-eye text-[22px]"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='w-full flex justify-center pt-10'>
        <a href='https://github.com/Mariam-Hesham88?tab=repositories' target='_blank' className='btn capitalize text-white bg-primary'>
          View All Projects
        </a>
      </div>
    </section>
  );
}
