import React from "react";
import style from "./Home.module.css";
import mariam from "../../assets/images/mariam1.png";

export default function Home() {
  return (
    <section className="flex flex-col-reverse items-center justify-center w-full min-h-screen px-6 py-20 md:flex-row md:px-12 md:py-0">
      <div className="w-full mt-10 text-center md:w-1/2 md:text-left md:mt-0">
        <h1 className="pb-5 text-3xl font-bold mainTitle sm:text-4xl md:text-5xl">
          Hey! I'm Mariam <span className="wave">👋</span>
        </h1>

        <h3 className="text-primary text-2xl sm:text-3xl md:text-[32px] font-semibold">
          Software Tester
        </h3>

        <p className="pt-4 pb-5 text-sm leading-7 paragraph sm:text-base slideInLeft">
          A Software Tester with a strong background in Frontend Development,
          passionate about ensuring <span className="font-medium text-primary">
             high-quality
          </span> , <span className="font-medium text-primary">user-friendly</span> web
          applications. I leverage my understanding of UI/UX to identify defects
          and improve overall user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            target="_blank"
            href="https://drive.google.com/drive/u/0/folders/13ZS75_XMliP_uREfpor7LvpSpveh8VOd"
            className="inline-flex items-center px-6 py-3 text-white transition-all hover:scale-110 bg-primary rounded-xl"
          >
            View CV
          </a>

          <a
            href="https://wa.me/201066135369"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 transition-all border hover:scale-110 btn bg-background border-primary text-primary rounded-xl"
          >
            <i className="fa-brands fa-whatsapp text-primary text-[18px]"></i>
            WhatsApp
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mb-10 md:w-1/2 md:mb-0">
        <div className="shape bg-primary">
          <img src={mariam} alt="Mariam" className="w-full" loading="eager" />
        </div>
      </div>
    </section>
  );
}
