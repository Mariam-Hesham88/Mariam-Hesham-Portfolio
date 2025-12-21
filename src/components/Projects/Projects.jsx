import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import shopCo from "../../assets/images/shop.co.jpg";
import taskManagement from "../../assets/images/taskManagement.jpg";
import note from "../../assets/images/note.jpg";
import allOnOne from "../../assets/images/all-on-one.jpg";
import smartLogin from "../../assets/images/smartLogin.png";
import todolist from "../../assets/images/todolist.png";
import random from "../../assets/images/random.png";
import mahmoud from "../../assets/images/mahmoud.png";
import doha from "../../assets/images/doha.png";

export default function Projects() {
  const projects = [
    {
      id: 9,
      imgSrc: mahmoud,
      title: "Mahmoud's Portfolio",
      description:
        "A freelance personal portfolio built with React and Tailwind CSS, featuring a responsive design to showcase projects, skills, and professional experience.",
      technology: ["React.JS", "TailwindCss", "Vercel"],
      gitHubUrl: "https://github.com/Mariam-Hesham88/Mahmoud-Atef---Portfolio",
      liveDemo: "https://mahmoud-atef-portfolio.vercel.app/",
    },
    {
      id: 10,
      imgSrc: doha,
      title: "Doha's Portfolio",
      description:
        "A freelance personal portfolio built with React and Tailwind CSS, featuring a responsive design to showcase projects, skills, and professional experience.",
      technology: ["React.JS", "TailwindCss", "Vercel"],
      gitHubUrl: "https://github.com/Mariam-Hesham88/Doha-Taher-Portfolio",
      liveDemo: "https://doha-taher-portfolio.vercel.app/",
    },
    {
      id: 11,
      imgSrc: shopCo,
      title: "Shop.co",
      description:
        "A complete React e-commerce app with product pages, cart, and checkout. Uses Axios for APIs, Formik & Yup for validation, and TailwindCSS for a clean, responsive design.",
      technology: [
        "React.JS",
        "React Router",
        "Axios",
        "Formik",
        "Yup",
        "Tailwind",
        "Context API",
        "Vercel",
      ],
      gitHubUrl: "https://github.com/Mariam-Hesham88/React.js-Ecommerce",
      liveDemo: "https://react-js-ecommerce.vercel.app/",
    },
    {
      id: 12,
      imgSrc: taskManagement,
      title: "Task Management",
      description:
        "A React task management app to add, edit, and organize tasks. Built with Axios, TailwindCSS, and Context API for state handling and smooth navigation.",
      technology: [
        "React.JS",
        "Axios",
        "TailwindCSS",
        "React Router",
        "Context API",
        "Vercel Deployment",
      ],
      gitHubUrl: "https://github.com/Mariam-Hesham88/Task-Management",
      liveDemo: "https://task-management-delta-azure.vercel.app/",
    },
    {
      id: 13,
      imgSrc: note,
      title: "Note App",
      description:
        "A simple React note app for adding, editing, and deleting notes. Uses Axios for APIs, Formik & Yup for validation, and TailwindCSS for a modern responsive design.",
      technology: [
        "React.JS",
        "Axios",
        "Formik",
        "Yup",
        "TailwindCSS",
        "Context API",
        "React Hooks",
      ],
      gitHubUrl: "https://github.com/Mariam-Hesham88/React-Note-App",
      liveDemo: "https://react-note-app-three.vercel.app/",
    },
    {
      id: 14,
      imgSrc: allOnOne,
      title: "All-On-One",
      description:
        "An Angular 17 e-commerce app with cart, product filtering, and search. Uses RxJS, Bootstrap, and RESTful APIs for smooth data handling and responsive UI.",
      technology: [
        "Angular 17",
        "TypeScript",
        "RxJS",
        "Bootstrap",
        "RESTful APIs",
        "Netlify Deployment",
      ],
      gitHubUrl: "https://github.com/Mariam-Hesham88/E-commerce-Angular",
      liveDemo: "https://e-commerce-88.netlify.app/",
    },
    {
      id: 15,
      imgSrc: smartLogin,
      title: "Login System",
      description:
        "A simple login and signup system using HTML, CSS, and JavaScript with form validation and LocalStorage for saving user data.",
      technology: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "LocalStorage",
        "Validation",
      ],
      gitHubUrl: "https://github.com/Mariam-Hesham88/Login-System",
      liveDemo: "https://mariam-hesham88.github.io/Login-System/signup.html",
    },
    {
      id: 16,
      imgSrc: todolist,
      title: "ToDo List",
      description:
        "A classic ToDo app to add, edit, and delete tasks. Built with HTML, CSS, and JavaScript focusing on CRUD operations and responsive design.",
      technology: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "DOM Manipulation",
      ],
      gitHubUrl: "https://github.com/Mariam-Hesham88/Todo-List",
      liveDemo: "https://mariam-hesham88.github.io/Todo-List/",
    },
    {
      id: 17,
      imgSrc: random,
      title: "Random Quote",
      description:
        "A simple Random Quote Generator using HTML, CSS, and JavaScript. Displays new quotes dynamically with smooth transitions and responsive layout.",
      technology: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      gitHubUrl: "https://github.com/Mariam-Hesham88/Quote-App",
      liveDemo: "https://mariam-hesham88.github.io/Quote-App/",
    },
  ];

  function NextArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-[-50px] md:right-[-80px] transform -translate-y-1/2 z-10 cursor-pointer 
                 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full 
                 shadow-lg hover:scale-110 transition-all duration-300"
      >
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
    dots: false,
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
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-4"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 transition-all duration-300 bg-gray-400 rounded-full hover:bg-primary"></div>
    ),
  };

  return (
    <section className="w-[90%] mx-auto p-12 flex flex-wrap justify-center relative">
      <h1 className="w-full pb-8 font-bold text-center secondTitle text-primary">
        Featured Projects
      </h1>

      <div className="cards w-full sm:w-[80%] md:w-[70%] lg:w-[60%] relative">
        <Slider {...settings}>
          {projects.map((project) => (
            <div className="p-5">
              <div
                key={project.id}
                className="shadow-md item bg-secondary rounded-2xl"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full rounded-t-2xl"
                />
                <div className="p-6">
                  <h2 className="text-smothText font-semibold text-[20px] md:text-[24px] text-center">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-[14px] md:text-[16px] text-center py-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 py-2">
                    {project.technology.map((tec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm text-white transition-all duration-300 rounded-lg bg-primary hover:scale-110"
                      >
                        {tec}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-6 pt-3">
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="transition-all duration-300 text-smothText hover:scale-125"
                    >
                      <i className="fa-brands fa-github text-[22px]"></i> View
                      Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="transition-all duration-300 text-smothText hover:scale-125"
                    >
                      <i className="fa-solid fa-eye text-[22px]"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center w-full">
        <a
          href="https://github.com/Mariam-Hesham88?tab=repositories"
          target="_blank"
          className="text-white capitalize btn bg-primary"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
