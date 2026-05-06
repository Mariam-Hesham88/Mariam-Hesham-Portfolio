import React, { useEffect, useRef } from "react";
import style from "./About.module.css";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.show);
            entry.target.classList.remove(style.hidden);
          }
        });
      },
      { threshold: 0.2 },
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);
  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-wrap justify-center py-20 overflow-hidden rounded-3xl"
      >
        <div className={`p-5 max-w-3xl text-center ${style.fadeInUp}`}>
          <h1 className="pb-12 font-bold secondTitle text-primary">
            {" "}
            About Me{" "}
          </h1>

          <p className="leading-7 paragraph text-smothText">
            Hi, I'm{" "}
            <span className="font-semibold text-primary">Mariam Hesham</span> 🌸
            — a passionate{" "}
            <span className="font-medium text-primary">Software Tester</span>{" "}
            focused on ensuring the quality, reliability, and usability of web
            applications. With a background in{" "}
            <span className="font-medium text-primary">
              Frontend Development
            </span>
            , I have a strong eye for UI details and user experience, helping me
            identify defects and improve overall product quality.
          </p>

          <p className="pt-3 leading-7 paragraph text-smothText">
            I’m always eager to learn and grow in the field of testing,
            exploring modern testing techniques and tools. I enjoy working on
            real-world projects, writing test cases, and ensuring applications
            meet both business and user expectations 💡.
          </p>
        </div>
        <div className="w-full ">
          <ul className="flex flex-col flex-wrap items-center justify-center gap-2 font-semibold text-primary md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="https://wa.me/201066135369"
                target="_blank"
                className="block capitalize rounded-sm md:border- md:p-0"
              >
                <i className="fa-brands fa-whatsapp text-[18px]"></i>{" "}
                +201066135369
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/201151378892"
                target="_blank"
                className="block capitalize rounded-sm md:border-0 md:p-0"
              >
                <i className="fa-brands fa-whatsapp text-[18px]"></i>{" "}
                +201151378892
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mariam.hesham.ramadam@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="block capitalize rounded-sm md:border-0 md:p-0"
              >
                <i className="fa-regular fa-envelope text-[18px]"></i>{" "}
                mariam.hesham.ramadan@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mariam-hesham-88m/"
                target="_blank"
                className="block capitalize rounded-sm md:border-0 md:p-0"
              >
                <i className="fa-brands fa-square-linkedin text-[18px]"></i>{" "}
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mariam-Hesham88"
                target="_blank"
                className="block capitalize rounded-sm md:border-0 md:p-0"
              >
                <i className="fa-brands fa-github text-[18px]"></i> Git-Hub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
